import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getBlog, BlogPost } from '../utils/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { format } from 'date-fns';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        if (!slug) {
          throw new Error('Blog slug is missing');
        }
        const blogData = await getBlog(slug);
        if (!blogData) {
          throw new Error('Blog not found');
        }
        setBlog(blogData);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error || 'Blog not found'}</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.seoTitle || blog.title} | Sattva Design Blog</title>
        {blog.seoDescription && (
          <meta name="description" content={blog.seoDescription} />
        )}
        {blog.seoKeywords && blog.seoKeywords.length > 0 && (
          <meta name="keywords" content={blog.seoKeywords.join(', ')} />
        )}
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-6">
              {blog.publishDate && (
                <time className="text-gray-500">
                  {format(new Date(blog.publishDate), 'MMMM d, yyyy')}
                </time>
              )}
              <h1 className="text-4xl font-serif mt-2">{blog.title}</h1>
              {blog.author && (
                <div className="flex items-center mt-4">
                  {blog.author.fields.avatar?.fields.file.url && (
                    <img
                      src={`https:${blog.author.fields.avatar.fields.file.url}`}
                      alt={blog.author.fields.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <span className="text-gray-600">{blog.author.fields.name}</span>
                </div>
              )}
            </div>

            {blog.featuredImage?.fields?.file?.url && (
              <img
                src={`https:${blog.featuredImage.fields.file.url}`}
                alt={blog.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            )}
          </header>

          {/* Content */}
          <div className="prose max-w-none mb-12">
            {blog.content && documentToReactComponents(blog.content)}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="border-t border-gray-100 pt-8 mb-12">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
} 