import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { getBlogs, BlogPost } from '@/utils/contentful';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Explore architectural insights, design trends, and industry news from Sattva Design's blog.",
  keywords: [
    'architecture blog',
    'design blog',
    'architectural insights',
    'Sattva Design',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog',
    description:
      "Architectural insights, design trends, and industry news from Sattva Design.",
    url: '/blog',
  },
};

export default async function Blogs() {
  let blogs: BlogPost[] = [];
  try {
    blogs = await getBlogs();
  } catch (err) {
    console.error('Error fetching blogs:', err);
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-12">Blog</h1>

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
                <h2 className="text-xl font-serif group-hover:text-gray-600 transition-colors">
                  {blog.title}
                </h2>
                {blog.excerpt && (
                  <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                )}
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
