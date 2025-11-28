"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { BlogPost, Media } from "@/lib/api/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = 
    typeof post.featuredImage === 'object' && post.featuredImage !== null
      ? (post.featuredImage as Media).url
      : null;

  const categoryLabel = post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ');

  // Don't render if no image
  if (!imageUrl) return null;

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <motion.article
        className="bg-card overflow-hidden group cursor-pointer border border-border"
        style={{ borderRadius: 16 }}
        whileHover={{ scale: 0.992, borderRadius: 20, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
        transition={{ type: "spring", stiffness: 280, damping: 30, duration: 0.18 }}
      >
        <div className="relative h-48 md:h-56 rounded-[20px] w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={typeof post.featuredImage === 'object' && post.featuredImage !== null ? (post.featuredImage as Media).alt || post.title : post.title}
            fill
            className="object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="p-6 space-y-3">
          <Badge className="bg-accent/20 text-foreground border-0 hover:bg-accent/30 w-fit">
            {categoryLabel}
          </Badge>

          <h3 className="font-bold text-lg text-foreground">{post.title}</h3>

          <p className="text-sm text-muted-foreground">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{post.readTime}</span>
              </div>
            )}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
