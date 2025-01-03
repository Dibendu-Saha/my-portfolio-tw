# Create S3 bucket for the website
resource "aws_s3_bucket" "test-file-bucket-rn" {
  bucket = "test-bucket-for-terraform-aws-portfolio-v2-files"
}

# Allow public access for the file
resource "aws_s3_bucket_public_access_block" "bucket_public_access_block" {
  bucket = aws_s3_bucket.test-file-bucket-rn.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Create bucket policy
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.test-file-bucket-rn.id

  # Make sure to wait for the public access block to be applied first
  depends_on = [aws_s3_bucket_public_access_block.bucket_public_access_block]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowS3FileReadAccess"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.test-bucket-rn.arn}/*"
        Condition = {
          ArnLike = {
            "aws:SourceArn" = "arn:aws:lambda:ap-south-1:033046387995:function:DownloadCvLambda"
          }
        }
      }
    ]
  })
}