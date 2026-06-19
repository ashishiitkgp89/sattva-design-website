import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import ContactSection from '@/components/ContactSection';
import ServiceCard from '@/components/ServiceCard';
import {
  getServices,
  getProjects,
  getBlogs,
  Service,
  Project,
  BlogPost,
} from '@/utils/contentful';

export const revalidate = 60;

export const metadata: Metadata = {
  title: {
    absolute:
      'Sattva Design | Architecture & Interior Design Firm in Jharkhand',
  },
  description:
    'Sattva Design Consultancy — architecture and interior design across Jharkhand, with studios in Ranchi and Medininagar. Custom homes, commercial spaces, interiors, and building approvals.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Sattva Design | Architecture & Interior Design Firm in Jharkhand',
    description:
      'Architecture and interior design across Jharkhand, with studios in Ranchi and Medininagar.',
    url: '/',
  },
};

export default async function Home() {
  let services: Service[] = [];
  let projects: Project[] = [];
  let blogs: BlogPost[] = [];

  try {
    const [fetchedServices, fetchedProjects, fetchedBlogs] = await Promise.all([
      getServices(),
      getProjects(),
      getBlogs(),
    ]);
    services = fetchedServices;
    projects = fetchedProjects.filter((project) => project.featuredProject).slice(0, 6);
    blogs = fetchedBlogs.slice(0, 3);
  } catch (err) {
    console.error('Error fetching home content:', err);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          alt="Architecture and interior design by Sattva Design"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Crafting Spaces</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Creating timeless architectural designs that inspire and endure
            </p>
            <Link
              href="/projects"
              className="inline-block border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors"
            >
              View Projects
            </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
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
                      {project.category && <p className="text-sm">{project.category}</p>}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Projects
            </Link>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/service-areas"
              className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection isFullPage={false} />
    </>
  );
}
