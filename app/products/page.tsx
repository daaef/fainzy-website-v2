import { cookies } from 'next/headers';
import ProductsPageClient from './ProductsPageClient';
import { getProductsPageData } from '@/lib/api/products';
import type { ProductsPage } from '@/lib/api/types';

export const revalidate = 60;

// Fallback data for when CMS is unavailable
function getFallbackProductsData(locale: 'en' | 'ja'): ProductsPage {
  return {
    id: 0,
    title: 'Products Page',
    locale,
    heroSection: {
      title: 'Our Products & Services',
      subtitle: "At Fainzy Technologies, we're pioneering the next generation of robotics and AI solutions.",
    },
    products: [],
    customSolutions: [],
    faqs: [],
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
}

export default async function ProductsPage() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('locale')?.value as 'en' | 'ja') || 'en';

  const productsData = await getProductsPageData(locale);
  const data = productsData || getFallbackProductsData(locale);

  return <ProductsPageClient initialData={data} />;
}
