import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import ServiceCard from '../components/ServiceCard';
import { getServices, Service } from '../utils/contentful';

export default function Home() {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const fetchedServices = await getServices();
        setServices(fetchedServices);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services');
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Crafting Spaces</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Creating timeless architectural designs that inspire and endure
            </p>
            <button 
              onClick={() => navigate('/projects')}
              className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive architectural and design solutions tailored to your needs
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection isFullPage={false} />
    </>
  );
}