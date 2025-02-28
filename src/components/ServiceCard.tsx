import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../utils/contentful';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {service.featuredImage?.fields?.file?.url ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`https:${service.featuredImage.fields.file.url}`}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : (
        <div className="h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No image available</span>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2 group-hover:text-gray-600 transition-colors">
          {service.title}
        </h3>
        {service.shortDescription && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {service.shortDescription}
          </p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-sm text-black font-medium group-hover:text-gray-600 transition-colors">
            Learn more
          </span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 