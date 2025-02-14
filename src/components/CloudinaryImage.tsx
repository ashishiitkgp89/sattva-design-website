import React from 'react';
import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { cld } from '../utils/cloudinary';
import { fill } from '@cloudinary/url-gen/actions/resize';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  className?: string;
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({ publicId, alt, className }) => {
  const myImage = cld.image(publicId).resize(fill());

  return (
    <AdvancedImage
      cldImg={myImage}
      plugins={[responsive(), placeholder()]}
      alt={alt}
      className={className}
    />
  );
};