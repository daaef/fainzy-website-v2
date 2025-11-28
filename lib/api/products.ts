/**
 * Products Page Data Fetcher
 *
 * Fetches products page data from Payload CMS with proper error handling
 * and fallback mechanisms.
 */

import { fetchFromCMS } from './client';
import { ProductsPage, CMSResponse } from './types';

/**
 * Fetch products page data for a specific locale
 *
 * @param locale - Language locale ('en' or 'ja')
 * @returns Promise resolving to ProductsPage data or null if error
 */
export async function getProductsPageData(
  locale: 'en' | 'ja' = 'en'
): Promise<ProductsPage | null> {
  try {
    const response = await fetchFromCMS<CMSResponse<ProductsPage>>('products-page', {
      locale,
      depth: 2,
      tags: ['products-page'],
      revalidate: 60,
    });

    return response.docs[0] || null;
  } catch (error) {
    console.error('Error fetching products page data from CMS:', error);
    return null;
  }
}

/**
 * Alias for getProductsPageData with explicit locale parameter
 */
export async function getProductsPageByLocale(
  locale: 'en' | 'ja'
): Promise<ProductsPage | null> {
  return getProductsPageData(locale);
}
