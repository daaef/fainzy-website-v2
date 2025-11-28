import { cookies } from 'next/headers';
import CustomSolutionsPageClient from "./CustomSolutionsPageClient";
import { getHomePageData } from '@/lib/api/home';

export const revalidate = 60;

export default async function CustomSolutionsPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value as 'en' | 'ja') || 'en';

  const homeData = await getHomePageData(locale);
  const customSolutions = homeData?.customSolutions || [];

  return <CustomSolutionsPageClient customSolutions={customSolutions} />;
}
