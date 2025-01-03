provider "aws" {
  profile = "default"
  region  = "ap-south-1"
}

module "s3_website" {
  source = "./modules/s3-website"
}