# Create S3 bucket for the website
resource "aws_s3_bucket" "test-bucket-rn" {
  bucket = "test-bucket-for-terraform-aws-portfolio-v2"
}

# Allow public access for the website
resource "aws_s3_bucket_public_access_block" "bucket_public_access_block" {
  bucket = aws_s3_bucket.test-bucket-rn.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Enable static website hosting
resource "aws_s3_bucket_website_configuration" "test-bucket-rn" {
  bucket = aws_s3_bucket.test-bucket-rn.bucket
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

# Create bucket policy
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.test-bucket-rn.id

  # Make sure to wait for the public access block to be applied first
  depends_on = [aws_s3_bucket_public_access_block.bucket_public_access_block]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowS3WebsiteAccess"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.test-bucket-rn.arn}/*"
      }
    ]
  })
}









resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.test-bucket-rn.website_endpoint
    origin_id   = aws_s3_bucket.test-bucket-rn.bucket
    # origin_access_control_id = aws_cloudfront_origin_access_control.default.id

    custom_origin_config {
      http_port              = 80
      https_port            = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = aws_s3_bucket.test-bucket-rn.bucket
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized 
    viewer_protocol_policy = "redirect-to-https"
  }


  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

#   aliases = ["mysite.example.com", "yoursite.example.com"]  

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}