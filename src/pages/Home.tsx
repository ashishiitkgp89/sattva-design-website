import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import ServiceCard from '../components/ServiceCard';
import { getServices, Service, getProjects, Project, getBlogs, BlogPost } from '../utils/contentful';
import { format } from 'date-fns';

export default function Home() {
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [fetchedServices, fetchedProjects, fetchedBlogs] = await Promise.all([
          getServices(),
          getProjects(),
          getBlogs()
        ]);
        setServices(fetchedServices);
        setProjects(fetchedProjects.filter(project => project.featuredProject).slice(0, 6));
        setBlogs(fetchedBlogs.slice(0, 3)); // Show only the 3 most recent blogs
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load content');
        setLoading(false);
      }
    }

    fetchData();
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

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our latest architectural achievements and innovative designs
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
              {projects.map((project) => (
                <div
                  key={project.slug}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg">
                    {project.featuredImage?.fields?.file?.url ? (
                      <img
                        src={`https:${project.featuredImage.fields.file.url}`}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                        <p className="text-sm mb-2">{project.location}</p>
                        {project.category && (
                          <p className="text-sm">{project.category}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/projects')}
              className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Projects
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

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our thoughts on architecture, design, and industry trends
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
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    {blog.featuredImage?.fields?.file?.url ? (
                      <img
                        src={`https:${blog.featuredImage.fields.file.url}`}
                        alt={blog.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No image available</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    {blog.publishDate && (
                      <time className="text-sm text-gray-500">
                        {format(new Date(blog.publishDate), 'MMMM d, yyyy')}
                      </time>
                    )}
                    <h3 className="text-xl font-serif group-hover:text-gray-600 transition-colors">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/blog')}
              className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection isFullPage={false} />
    </>
  );
}