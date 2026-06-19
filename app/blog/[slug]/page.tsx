import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getBlog, getBlogs } from '@/utils/contentful';
import { getMdxSlugs, getMdxPost } from '@/lib/mdxPosts';

export const revalidate = 60;

const SITE = 'https://sattvadesignconsultancy.com';

export async function generateStaticParams() {
  const mdx = getMdxSlugs();
  let cf: string[] = [];
  try {
    cf = (await getBlogs()).map((b) => b.slug).filter(Boolean);
  } catch {
    cf = [];
  }
  return Array.from(new Set([...mdx, ...cf])).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const mdx = getMdxPost(params.slug);
  if (mdx) {
    return {
      title: { absolute: mdx.seoTitle || `${mdx.title} | Sattva Design Blog` },
      description: mdx.seoDescription || mdx.excerpt,
      keywords: mdx.tags,
      alternates: { canonical: `/blog/${params.slug}` },
      openGraph: {
        type: 'article',
        title: mdx.seoTitle || mdx.title,
        description: mdx.seoDescription || mdx.excerpt,
        url: `/blog/${params.slug}`,
        publishedTime: mdx.date,
        images: mdx.coverImage ? [{ url: mdx.coverImage }] : undefined,
      },
    };
  }

  const blog = await getBlog(params.slug);
  if (!blog) return { title: 'Blog Post Not Found' };
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

function blogPostingSchema(opts: {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  date?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    image: opts.image ? [opts.image] : undefined,
    datePublished: opts.date,
    dateModified: opts.date,
    author: opts.author
      ? { '@type': 'Person', name: opts.author }
      : { '@type': 'Organization', name: 'Sattva Design' },
    publisher: { '@id': `${SITE}/#organization` },
    mainEntityOfPage: `${SITE}/blog/${opts.slug}`,
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const mdx = getMdxPost(params.slug);

  // --- MDX post ---
  if (mdx) {
    const schema = blogPostingSchema({
      slug: params.slug,
      title: mdx.title,
      description: mdx.seoDescription || mdx.excerpt,
      image: mdx.coverImage,
      date: mdx.date,
      author: mdx.author,
    });
    return (
      <div className="min-h-screen bg-white pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            {mdx.date && (
              <time className="text-gray-500">
                {format(new Date(mdx.date), 'MMMM d, yyyy')}
              </time>
            )}
            <h1 className="text-4xl font-serif mt-2 mb-4">{mdx.title}</h1>
            {mdx.author && <span className="text-gray-600">By {mdx.author}</span>}
            {mdx.coverImage && (
              <img
                src={mdx.coverImage}
                alt={mdx.title}
                className="w-full h-[400px] object-cover rounded-lg mt-6"
              />
            )}
          </header>
          <div className="prose prose-lg max-w-none mb-12">
            <MDXRemote
              source={mdx.content}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
          {mdx.tags && mdx.tags.length > 0 && (
            <div className="border-t border-gray-100 pt-8 mb-12">
              <div className="flex flex-wrap gap-2">
                {mdx.tags.map((tag) => (
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

  // --- Contentful post (legacy) ---
  const blog = await getBlog(params.slug);
  if (!blog) notFound();

  const image = blog.featuredImage?.fields?.file?.url
    ? `https:${blog.featuredImage.fields.file.url}`
    : undefined;
  const schema = blogPostingSchema({
    slug: params.slug,
    title: blog.title,
    description: blog.seoDescription || blog.excerpt,
    image,
    date: blog.publishDate,
    author: blog.author?.fields?.name,
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {image && (
            <img
              src={image}
              alt={blog.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          )}
        </header>

        <div className="prose prose-lg max-w-none mb-12">
          {blog.content && documentToReactComponents(blog.content)}
        </div>

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
