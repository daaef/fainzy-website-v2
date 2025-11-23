import { blogPosts } from "../page";
import BlogPostClient from "./BlogPostClient";

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // You can add server-side logic here to fetch the specific blog post
  // based on params.id if needed
  return <BlogPostClient />;
}
