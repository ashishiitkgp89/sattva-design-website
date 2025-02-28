import { createClient } from 'contentful';
import { EntryCollection } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
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
  year?: string;
  status?: 'Ongoing' | 'Completed';
  area?: number;
  client?: string;
  category?: 'Residential' | 'Commercial';
  description?: Document;
  brief?: string;
  challenge?: string;
  solution?: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  galleryImages?: Array<{
    fields: {
      file: {
        url: string;
      };
    };
  }>;
  videos?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  featuredProject?: boolean;
  order?: number;
  seoDescription?: string;
  seoKeywords?: string[];
  architectureTeam?: string[];
  awards?: string[];
  projectWebsite?: string;
  materialsUsed?: string[];
  sustainabilityFeatures?: string[];
}

export interface Service {
  title: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  order?: number;
  benefits?: string[];
  featured?: boolean;
  seoDescription?: string;
  seoKeywords?: string[];
  linkAnchor: string;
}

export interface ServiceArea {
  title: string;
  slug: string;
  description?: string;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  keyProjects?: Array<{
    fields: Project;
  }>;
  seoDescription?: string;
  seoKeywords?: string[];
  mapLocation?: {
    lat: number;
    lng: number;
  };
}

export interface BlogPost {
  title: string;
  slug: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  excerpt?: string;
  content?: Document;
  publishDate?: string;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  author?: {
    fields: {
      name: string;
      avatar?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  };
}

interface BlogPostEntry {
  fields: BlogPost;
  sys: {
    id: string;
    type: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
  contentTypeId: string;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'projects',
      order: ['fields.order']
    });

    console.log('Contentful response:', response); // Debug log

    if (!response.items) {
      console.error('No items in response:', response);
      return [];
    }

    return response.items
      .map((item: any) => {
        if (!item.fields) {
          console.error('No fields in item:', item);
          return null;
        }

        const project: Project = {
          title: item.fields.title || '',
          slug: item.fields.slug || '',
          location: item.fields.location || '',
          year: item.fields.year || undefined,
          status: item.fields.status || undefined,
          area: item.fields.area || undefined,
          client: item.fields.client || undefined,
          category: item.fields.category || undefined,
          description: item.fields.description || undefined,
          brief: item.fields.brief || undefined,
          challenge: item.fields.challenge || undefined,
          solution: item.fields.solution || undefined,
          featuredImage: item.fields.featuredImage || undefined,
          galleryImages: item.fields.galleryImages || undefined,
          videos: item.fields.videos || undefined,
          featuredProject: item.fields.featuredProject || false,
          order: item.fields.order || undefined,
          seoDescription: item.fields.seoDescription || undefined,
          seoKeywords: item.fields.seoKeywords || undefined,
          architectureTeam: item.fields.architectureTeam || [],
          awards: item.fields.awards || [],
          projectWebsite: item.fields.projectWebsite || undefined,
          materialsUsed: item.fields.materialsUsed || [],
          sustainabilityFeatures: item.fields.sustainabilityFeatures || []
        };

        return project;
      })
      .filter((project): project is Project => project !== null);
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'projects',
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
    featuredProject: item.fields.featuredProject || false,
    order: item.fields.order,
    seoDescription: item.fields.seoDescription,
    seoKeywords: item.fields.seoKeywords,
    architectureTeam: item.fields.architectureTeam || [],
    awards: item.fields.awards || [],
    projectWebsite: item.fields.projectWebsite || undefined,
    materialsUsed: item.fields.materialsUsed || [],
    sustainabilityFeatures: item.fields.sustainabilityFeatures || []
  };
}

export async function getServices(): Promise<Service[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'service',
      order: ['fields.order']
    });

    if (!response.items) {
      console.error('No items in response:', response);
      return [];
    }

    return response.items
      .map((item: any) => {
        if (!item.fields) {
          console.error('No fields in item:', item);
          return null;
        }

        const service: Service = {
          title: item.fields.title || '',
          slug: item.fields.slug || '',
          description: item.fields.description || undefined,
          shortDescription: item.fields.shortDescription || undefined,
          featuredImage: item.fields.featuredImage || undefined,
          order: item.fields.order || undefined,
          benefits: item.fields.benefits || [],
          featured: item.fields.featured || false,
          seoDescription: item.fields.seoDescription || undefined,
          seoKeywords: item.fields.seoKeywords || [],
          linkAnchor: item.fields.linkAnchor || ''
        };

        return service;
      })
      .filter((service): service is Service => service !== null);
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'service',
      'fields.slug': slug,
    });

    if (!response.items.length) {
      return null;
    }

    const item: any = response.items[0];
    return {
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      description: item.fields.description || undefined,
      shortDescription: item.fields.shortDescription || undefined,
      featuredImage: item.fields.featuredImage || undefined,
      order: item.fields.order || undefined,
      benefits: item.fields.benefits || [],
      featured: item.fields.featured || false,
      seoDescription: item.fields.seoDescription || undefined,
      seoKeywords: item.fields.seoKeywords || [],
      linkAnchor: item.fields.linkAnchor || ''
    };
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
}

export async function getServiceAreas(): Promise<ServiceArea[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'serviceArea',
    });

    if (!response.items) {
      console.error('No items in response:', response);
      return [];
    }

    return response.items
      .map((item: any) => {
        if (!item.fields) {
          console.error('No fields in item:', item);
          return null;
        }

        const serviceArea: ServiceArea = {
          title: item.fields.title || '',
          slug: item.fields.slug || '',
          description: item.fields.description || undefined,
          featuredImage: item.fields.featuredImage || undefined,
          keyProjects: item.fields.keyProjects || [],
          seoDescription: item.fields.seoDescription || undefined,
          seoKeywords: item.fields.seoKeywords || [],
          mapLocation: item.fields.mapLocation || undefined,
        };

        return serviceArea;
      })
      .filter((serviceArea): serviceArea is ServiceArea => serviceArea !== null);
  } catch (error) {
    console.error('Error fetching service areas:', error);
    throw error;
  }
}

export async function getServiceArea(slug: string): Promise<ServiceArea | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'serviceArea',
      'fields.slug': slug,
    });

    if (!response.items.length) {
      return null;
    }

    const item: any = response.items[0];
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      description: item.fields.description,
      featuredImage: item.fields.featuredImage,
      keyProjects: item.fields.keyProjects || [],
      seoDescription: item.fields.seoDescription,
      seoKeywords: item.fields.seoKeywords || [],
      mapLocation: item.fields.mapLocation,
    };
  } catch (error) {
    console.error('Error fetching service area:', error);
    throw error;
  }
}

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries<BlogPostEntry>({
      content_type: 'blogPost',
      order: '-fields.publishDate',
    });

    return response.items.map(item => item.fields);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}

export async function getBlog(slug: string): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries<BlogPostEntry>({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0].fields;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
}