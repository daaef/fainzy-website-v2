/**
 * About Page Data Fetcher
 *
 * Fetches about page data from Payload CMS with proper error handling
 * and fallback mechanisms.
 */

import { fetchFromCMS } from './client';
import { AboutPage, CMSResponse } from './types';

/**
 * Fetch about page data for a specific locale
 *
 * @param locale - Language locale ('en' or 'ja')
 * @returns Promise resolving to AboutPage data or null if error
 */
export async function getAboutPageData(
  locale: 'en' | 'ja' = 'en'
): Promise<AboutPage | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<AboutPage>>('about-page', {
      locale,
      depth: 2,
      tags: ['about-page'],
      revalidate: 60,
    });

    return response.docs[0] || null;
  } catch (error) {
    console.error('Error fetching about page data from CMS:', error);
    return null;
  }
}

/**
 * Alias for getAboutPageData with explicit locale parameter
 */
export async function getAboutPageByLocale(
  locale: 'en' | 'ja'
): Promise<AboutPage | null> {
  return getAboutPageData(locale);
}
