/**
 * Payload CMS 3 API Client
 *
 * Provides a wrapper around fetch for making requests to Payload CMS API
 * with built-in caching, error handling, and Next.js ISR support.
 */

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001';

export interface FetchOptions {
  locale?: 'en' | 'ja';
  depth?: number;
  tags?: string[];
  revalidate?: number | false;
  where?: Record<string, unknown>;
  limit?: number;
  page?: number;
  sort?: string;
}

/**
 * Fetch data from Payload CMS API
 *
 * @param endpoint - API endpoint (e.g., 'home-page', 'blog-posts')
 * @param options - Fetch options including locale, depth, caching
 * @returns Promise resolving to typed data
 */
export async function fetchFromCMS<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { locale = 'en', depth = 2, tags = [], revalidate = 60, where, limit, page, sort } = options;

  // Construct URL with query parameters
  const url = new URL(`${CMS_URL}/api/${endpoint}`);

  if (locale) {
    url.searchParams.set('locale', locale);
  }

  if (depth) {
    url.searchParams.set('depth', depth.toString());
  }

  // Encode Payload-style where filters, e.g., where[slug][equals]=...
  if (where && typeof where === 'object') {
    const encodeWhere = (obj: Record<string, unknown>, prefix = 'where') => {
      Object.entries(obj).forEach(([key, value]) => {
        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
          encodeWhere(value as Record<string, unknown>, `${prefix}[${key}]`);
        } else {
          url.searchParams.set(`${prefix}[${key}]`, String(value));
        }
      });
    };
    encodeWhere(where);
  }

  if (typeof limit === 'number') {
    url.searchParams.set('limit', String(limit));
  }
  if (typeof page === 'number') {
    url.searchParams.set('page', String(page));
  }
  if (typeof sort === 'string') {
    url.searchParams.set('sort', sort);
  }

  try {
    const response = await fetch(url.toString(), {
      next: {
        revalidate,
        tags: ['cms', ...tags],
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `CMS API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(`Error fetching from CMS (${endpoint}):`, error);
    throw error;
  }
}

/**
 * Get the base CMS URL
 */
export function getCMSUrl(): string {
  return CMS_URL;
}
