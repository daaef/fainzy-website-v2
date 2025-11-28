import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/api/blog";
import BlogPostClient from "./BlogPostClient";

export const revalidate = 60;

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    id: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  
  // Fetch the specific blog post by slug and all posts for related articles
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(id),
    getBlogPosts(),
  ]);
  
  if (!post) {
    notFound();
  }

  // Filter related posts by category, excluding current post
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  // If not enough posts in same category, fill with other posts
  if (relatedPosts.length < 3) {
    const otherPosts = allPosts
      .filter((p) => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...otherPosts);
  }

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}

