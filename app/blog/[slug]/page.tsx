import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getBlog, getBlogs } from '@/utils/contentful';

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  if (!blog) {
    return { title: 'Blog Post Not Found' };
  }
  const image = blog.featuredImage?.fields?.file?.url
    ? `https:${blog.featuredImage.fields.file.url}`
    : undefined;
  return {
    title: { absolute: `${blog.seoTitle || blog.title} | Sattva Design Blog` },
    description: blog.seoDescription || blog.excerpt,
    keywords: blog.seoKeywords,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      type: 'article',
      title: blog.seoTitle || blog.title,
      description: blog.seoDescription || blog.excerpt,
      url: `/blog/${params.slug}`,
      publishedTime: blog.publishDate,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  const image = blog.featuredImage?.fields?.file?.url
    ? `https:${blog.featuredImage.fields.file.url}`
    : undefined;
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.seoDescription || blog.excerpt,
    image: image ? [image] : undefined,
    datePublished: blog.publishDate,
    dateModified: blog.publishDate,
    author: blog.author?.fields?.name
      ? { '@type': 'Person', name: blog.author.fields.name }
      : { '@type': 'Organization', name: 'Sattva Design' },
    publisher: { '@id': 'https://sattvadesignconsultancy.com/#organization' },
    mainEntityOfPage: `https://sattvadesignconsultancy.com/blog/${params.slug}`,
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
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
  );
}
