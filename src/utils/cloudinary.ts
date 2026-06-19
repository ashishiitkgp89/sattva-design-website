import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary
export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  },
  url: {
    secure: true
  }
});