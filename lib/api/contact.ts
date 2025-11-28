/**
 * Contact Page Data Fetcher
 *
 * Fetches contact page data from Payload CMS with proper error handling
 * and fallback mechanisms.
 */

import { fetchFromCMS } from './client';
import { ContactPage, CMSResponse } from './types';

/**
 * Fetch contact page data
 *
 * @returns Promise resolving to ContactPage data or null if error
 */
export async function getContactPageData(): Promise<ContactPage | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<ContactPage>>('contact-page', {
      depth: 2,
      tags: ['contact-page'],
      revalidate: 60,
    });

    return response.docs[0] || null;
  } catch (error) {
    console.error('Error fetching contact page data from CMS:', error);
    return null;
  }
}
