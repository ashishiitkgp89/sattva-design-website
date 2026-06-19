import type { Metadata } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';
import { getBlogs, BlogPost } from '@/utils/contentful';
import { getAllMdxPosts } from '@/lib/mdxPosts';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Architectural insights, cost guides and design trends from Sattva Design — practical advice for building and designing in Ranchi and across Jharkhand.",
  keywords: [
    'architecture blog',
    'home construction Jharkhand',
    'interior design ideas Ranchi',
    'Sattva Design',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog',
    description:
      'Architectural insights, cost guides and design trends from Sattva Design.',
    url: '/blog',
  },
};

interface PostCard {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
  tags?: string[];
}

export default async function Blogs() {
  // In-repo MDX posts.
  const mdxCards: PostCard[] = getAllMdxPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    image: p.coverImage,
    tags: p.tags,
  }));

  // Contentful posts (kept so existing posts continue to work).
  let cfCards: PostCard[] = [];
  try {
    const cf = await getBlogs();
    const mdxSlugs = new Set(mdxCards.map((c) => c.slug));
    cfCards = cf
      .filter((b: BlogPost) => !mdxSlugs.has(b.slug))
      .map((b: BlogPost) => ({
        slug: b.slug,
        title: b.title,
        excerpt: b.excerpt,
        date: b.publishDate,
        image: b.featuredImage?.fields?.file?.url
          ? `https:${b.featuredImage.fields.file.url}`
          : undefined,
        tags: b.tags,
      }));
  } catch (err) {
    console.error('Error fetching Contentful blogs:', err);
  }

  const posts = [...mdxCards, ...cfCards].sort((a, b) =>
    (a.date || '') < (b.date || '') ? 1 : -1
  );

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-12">Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {post.date && (
                  <time className="text-sm text-gray-500">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                )}
                <h2 className="text-xl font-serif group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
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
