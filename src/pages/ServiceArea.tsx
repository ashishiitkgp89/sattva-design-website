import React from 'react';
import { useParams } from 'react-router-dom';
import { getServiceArea } from '../utils/contentful';
import { ServiceArea as ServiceAreaType } from '../utils/contentful';
import { MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

export default function ServiceArea() {
  const { slug } = useParams<{ slug: string }>();
  const [serviceArea, setServiceArea] = React.useState<ServiceAreaType | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchServiceArea() {
      try {
        if (!slug) {
          setError('No slug provided');
          return;
        }
        const data = await getServiceArea(slug);
        if (!data) {
          setError('Service area not found');
          return;
        }
        setServiceArea(data);
      } catch (err) {
        setError('Error fetching service area');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchServiceArea();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !serviceArea) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600">{error || 'Service area not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${serviceArea.title} - Sattva Design Services`}</title>
        <meta name="description" content={serviceArea.seoDescription || `Architectural and interior design services in ${serviceArea.title}`} />
        {serviceArea.seoKeywords && (
          <meta name="keywords" content={serviceArea.seoKeywords.join(', ')} />
        )}
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-100">
          {serviceArea.featuredImage ? (
            <img
              src={`https:${serviceArea.featuredImage.fields.file.url}`}
              alt={serviceArea.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <MapPin size={48} className="text-gray-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-serif">{serviceArea.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {serviceArea.description && (
            <div className="prose max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: serviceArea.description }} />
            </div>
          )}

          {/* Key Projects Section */}
          {serviceArea.keyProjects && serviceArea.keyProjects.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-serif mb-8">Featured Projects in {serviceArea.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceArea.keyProjects.map((project) => (
                  <div key={project.fields.slug} className="group">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 mb-4">
                      {project.fields.featuredImage && (
                        <img
                          src={`https:${project.fields.featuredImage.fields.file.url}`}
                          alt={project.fields.title}
                          className="object-cover group-hover:opacity-90 transition-opacity"
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{project.fields.title}</h3>
                    {project.fields.brief && (
                      <p className="text-gray-600 line-clamp-2">{project.fields.brief}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Map Section */}
          {serviceArea.mapLocation && (
            <div className="mt-12">
              <h2 className="text-3xl font-serif mb-8">Location</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title={`Map of ${serviceArea.title}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=${serviceArea.mapLocation.lat},${serviceArea.mapLocation.lng}&zoom=13`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 