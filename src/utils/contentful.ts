import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'dv0z1myeyqel',
  accessToken: '4KFT9cLV0M0FxPOTijUuUEYZ6wYa5Yf9oXG1orRDBZg',
});

export interface GalleryItem {
  title: string;
  media: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  caption?: string;
  type: 'image' | 'video';
}

export interface Project {
  title: string;
  slug: string;
  location: string;
  year: string;
  status?: string;
  area?: number;
  client?: string;
  category?: string;
  description: string;
  brief?: string;
  challenge?: string;
  solution?: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  galleryImages?: GalleryItem[];
  videos?: GalleryItem[];
  projectWebsite?: string;
  architectureTeam?: string;
  collaborators?: string;
  materialsUsed?: string;
  sustainabilityFeatures?: string;
  awards?: string;
  featured?: boolean;
  order?: number;
  seoDescription?: string;
  seoKeywords?: string;
}

export async function getProjects(): Promise<Project[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
    order: 'fields.order',
  });

  return response.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    location: item.fields.location,
    year: item.fields.year,
    status: item.fields.status,
    area: item.fields.area,
    client: item.fields.client,
    category: item.fields.category,
    description: item.fields.description,
    brief: item.fields.brief,
    challenge: item.fields.challenge,
    solution: item.fields.solution,
    featuredImage: item.fields.featuredImage,
    galleryImages: item.fields.galleryImages,
    videos: item.fields.videos,
    projectWebsite: item.fields.projectWebsite,
    architectureTeam: item.fields.architectureTeam,
    collaborators: item.fields.collaborators,
    materialsUsed: item.fields.materialsUsed,
    sustainabilityFeatures: item.fields.sustainabilityFeatures,
    awards: item.fields.awards,
    featured: item.fields.featured || false,
    order: item.fields.order,
    seoDescription: item.fields.seoDescription,
    seoKeywords: item.fields.seoKeywords,
  }));
}

export async function getProject(slug: string): Promise<Project | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'project',
    'fields.slug': slug,
  });

  if (!response.items.length) {
    return null;
  }

  const item: any = response.items[0];
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    location: item.fields.location,
    year: item.fields.year,
    status: item.fields.status,
    area: item.fields.area,
    client: item.fields.client,
    category: item.fields.category,
    description: item.fields.description,
    brief: item.fields.brief,
    challenge: item.fields.challenge,
    solution: item.fields.solution,
    featuredImage: item.fields.featuredImage,
    galleryImages: item.fields.galleryImages,
    videos: item.fields.videos,
    projectWebsite: item.fields.projectWebsite,
    architectureTeam: item.fields.architectureTeam,
    collaborators: item.fields.collaborators,
    materialsUsed: item.fields.materialsUsed,
    sustainabilityFeatures: item.fields.sustainabilityFeatures,
    awards: item.fields.awards,
    featured: item.fields.featured || false,
    order: item.fields.order,
    seoDescription: item.fields.seoDescription,
    seoKeywords: item.fields.seoKeywords,
  };
}