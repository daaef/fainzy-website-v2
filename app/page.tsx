import { cookies } from 'next/headers';
import HomeClient from './HomeClient';
import { getHomePageData } from '@/lib/api/home';
import { getFallbackData } from '@/lib/fallback-data';

export const revalidate = 60; // Revalidate every 60 seconds (ISR)

export default async function Home() {
  // Get locale from cookie (or default to 'en')
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value as 'en' | 'ja') || 'en';

  // Fetch data from CMS
  const homeData = await getHomePageData(locale);

  // Use fallback data if CMS is unavailable
  const data = homeData || getFallbackData(locale);

  return <HomeClient initialData={data} />;
}
