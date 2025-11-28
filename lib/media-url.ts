/**
 * Media URL Helper
 *
 * Extracts and constructs URLs for media assets from Payload CMS
 */

import { Media } from '@/lib/api/types';

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001';

/**
 * Get the URL for a media asset
 *
 * @param media - Media object or ID from CMS, or null/undefined
 * @returns URL string or empty string if no media
 */
export function getMediaUrl(
  media: number | Media | null | undefined
): string {
  if (!media) return '';

  // If it's just an ID, construct the URL
  if (typeof media === 'number') {
    return `${CMS_URL}/api/media/${media}`;
  }

  // If it's a Media object, process the URL
  const url = media.url || '';

  // If URL is empty, return empty string
  if (!url) return '';

  // If URL is absolute (starts with http:// or https://), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If URL is relative, prepend the CMS URL
  return `${CMS_URL}${url.startsWith('/') ? url : `/${url}`}`;
}

/**
 * Get thumbnail URL for a media asset (if available)
 *
 * @param media - Media object from CMS
 * @returns Thumbnail URL or main URL as fallback
 */
export function getMediaThumbnailUrl(media: Media | null | undefined): string {
  if (!media) return '';

  // Use thumbnail if available, otherwise fall back to main URL
  const url = media.thumbnailURL || media.url || '';

  // If URL is empty, return empty string
  if (!url) return '';

  // If URL is absolute (starts with http:// or https://), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // If URL is relative, prepend the CMS URL
  return `${CMS_URL}${url.startsWith('/') ? url : `/${url}`}`;
}
