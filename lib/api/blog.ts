/**
 * Blog Posts Data Fetcher
 *
 * Fetches blog posts data from Payload CMS with proper error handling
 * and fallback mechanisms.
 */

import { fetchFromCMS } from './client';
import { BlogPost, CMSResponse } from './types';

/**
 * Fetch all blog posts
 *
 * @returns Promise resolving to array of BlogPost data or empty array if error
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetchFromCMS<CMSResponse<BlogPost>>('blog-posts', {
      depth: 2,
      tags: ['blog-posts'],
      revalidate: 60,
    });

    return response.docs || [];
  } catch (error) {
    console.error('Error fetching blog posts from CMS:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 *
 * @param slug - The slug of the blog post
 * @returns Promise resolving to BlogPost data or null if not found
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<BlogPost>>('blog-posts', {
      depth: 2,
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      tags: ['blog-posts'],
      revalidate: 60,
    });

    return response.docs[0] || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug} from CMS:`, error);
    return null;
  }
}

/**
 * Fetch featured blog post
 *
 * @returns Promise resolving to featured BlogPost or null
 */
export async function getFeaturedBlogPost(): Promise<BlogPost | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<BlogPost>>('blog-posts', {
      depth: 2,
      where: {
        featured: {
          equals: true,
        },
      },
      limit: 1,
      sort: '-publishedDate',
      tags: ['blog-posts'],
      revalidate: 60,
    });

    return response.docs[0] || null;
  } catch (error) {
    console.error('Error fetching featured blog post from CMS:', error);
    return null;
  }
}
