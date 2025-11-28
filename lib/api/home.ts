/**
 * Home Page Data Fetcher
 *
 * Fetches home page data from Payload CMS with proper error handling
 * and fallback mechanisms.
 */

import { fetchFromCMS } from './client';
import { HomePage, CMSResponse } from './types';

/**
 * Fetch home page data for a specific locale
 *
 * @param locale - Language locale ('en' or 'ja')
 * @returns Promise resolving to HomePage data or null if error
 */
export async function getHomePageData(
  locale: 'en' | 'ja' = 'en'
): Promise<HomePage | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<HomePage>>('home-page', {
      locale,
      depth: 2, // Populate media relationships
      tags: ['home-page'],
      revalidate: 60, // Revalidate every 60 seconds (ISR)
    });

    // Return first matching document for the locale
    return response.docs[0] || null;
  } catch (error) {
    console.error('Error fetching home page data from CMS:', error);
    // Return null to trigger fallback data in calling code
    return null;
  }
}

/**
 * Alias for getHomePageData with explicit locale parameter
 */
export async function getHomePageByLocale(
  locale: 'en' | 'ja'
): Promise<HomePage | null> {
  return getHomePageData(locale);
}
