/**
 * Careers Page Data Fetcher
 *
 * Fetches careers page data from Payload CMS with proper error handling
 * and fallback mechanisms.
 */

import { fetchFromCMS } from './client';
import { CareersPage, CMSResponse, Job } from './types';

/**
 * Fetch careers page data
 *
 * @returns Promise resolving to CareersPage data or null if error
 */
export async function getCareersPageData(): Promise<CareersPage | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<CareersPage>>('careers-page', {
      depth: 2,
      tags: ['careers-page'],
      revalidate: 60,
    });

    return response.docs[0] || null;
  } catch (error) {
    console.error('Error fetching careers page data from CMS:', error);
    return null;
  }
}

/**
 * Fetch a single job by slug from the careers page
 *
 * @param slug - The slug of the job
 * @returns Promise resolving to Job data or null if not found
 */
export async function getJobBySlug(slug: string): Promise<Job | null> {
  try {
    const careersData = await getCareersPageData();
    
    if (!careersData || !careersData.jobs) {
      return null;
    }

    const job = careersData.jobs.find((j) => j.id === slug);
    return job || null;
  } catch (error) {
    console.error(`Error fetching job with slug ${slug} from CMS:`, error);
    return null;
  }
}
