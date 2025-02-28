import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getService, Service } from '../utils/contentful';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        if (!slug) {
          throw new Error('Service slug is missing');
        }
        const serviceData = await getService(slug);
        if (!serviceData) {
          throw new Error('Service not found');
        }
        setService(serviceData);
      } catch (err) {
        console.error('Error fetching service:', err);
        setError(err instanceof Error ? err.message : 'Failed to load service');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error || 'Service not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif mb-4">{service.title}</h1>
          {service.shortDescription && (
            <p className="text-xl text-gray-600 max-w-3xl">
              {service.shortDescription}
            </p>
          )}
        </div>

        {/* Featured Image */}
        {service.featuredImage?.fields?.file?.url && (
          <div className="mb-12">
            <img
              src={`https:${service.featuredImage.fields.file.url}`}
              alt={service.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Description */}
          <div className="md:col-span-2">
            {service.description && (
              <div className="prose max-w-none">
                <h2 className="text-2xl font-serif mb-6">About this Service</h2>
                <div className="whitespace-pre-wrap">{service.description}</div>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div>
            {service.benefits && service.benefits.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-serif mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
          <h2 className="text-2xl font-serif mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss how we can help with your {service.title.toLowerCase()} needs.
          </p>
          <a
            href={`/contact?service=${service.linkAnchor}`}
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail; 