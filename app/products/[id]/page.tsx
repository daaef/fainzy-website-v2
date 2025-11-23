import ProductPageClient from "./ProductPageClient";

// Generate static params for static generation at build time
export async function generateStaticParams() {
  return [
    { id: "zibot" },
    // Add more product IDs here when they have dedicated pages
  ];
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // For now, all product IDs default to showing ZiBot content
  // This can be expanded later to handle different products
  const productId = params.id || "zibot";

  return <ProductPageClient productId={productId} />;
}
