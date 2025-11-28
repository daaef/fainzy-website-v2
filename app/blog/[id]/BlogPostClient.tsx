"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar, Clock, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import BackButtonClient from "./BackButtonClient";
import { BlogPost, Media } from "@/lib/api/types";
import { LexicalContentRenderer } from "@/components/LexicalContentRenderer";

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts = [] }: BlogPostClientProps) {
  const imageUrl = 
    typeof post.featuredImage === 'object' && post.featuredImage !== null
      ? (post.featuredImage as Media).url
      : null;
  const categoryLabel = post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ');
  
  console.log('content is', post.content)
  // Get author name from the post
  const authorName = typeof post.author === 'object' && post.author !== null 
    ? (post.author as { name?: string }).name || 'Fainzy Technologies'
    : 'Fainzy Technologies';
  
  // Don't render if no featured image
  if (!imageUrl) {
    return null;
  }
  
  return (
    <>
      <div className="min-h-screen w-full bg-background">
        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[500px] overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={typeof post.featuredImage === 'object' && post.featuredImage !== null ? (post.featuredImage as Media).alt || post.title : post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/70" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <BackButtonClient />

                <Badge className="mb-4 bg-accent/20 text-foreground border-0 hover:bg-accent/30">
                  {categoryLabel}
                </Badge>

                <h1 className="font-bold text-foreground text-3xl sm:text-4xl lg:text-5xl max-w-4xl mb-6">
                  {post.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-16 xl:gap-20">
            {/* Left Column - Article Content */}
            <div className="min-w-0">
              {/* Metadata Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 md:pb-8 mb-8 md:mb-12 border-b border-border gap-4"
              >
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-[18px] md:h-[18px] text-muted-foreground" />
                    <span className="text-sm md:text-base text-muted-foreground">
                      {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 md:w-[18px] md:h-[18px] text-muted-foreground" />
                      <span className="text-sm md:text-base text-muted-foreground">{post.readTime}</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Article Content from CMS */}
              {post.content && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="prose prose-lg dark:prose-invert max-w-none mb-8 md:mb-12"
                >
                  <LexicalContentRenderer content={post.content} />
                </motion.div>
              )}
            </div>

            {/* Right Column - Author Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="sticky top-24 h-fit hidden lg:block"
            >
              {/* Author Info */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg text-foreground mb-4">Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                    <span className="text-lg text-foreground font-bold">{authorName.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-foreground">{authorName}</p>
                    <p className="text-sm text-muted-foreground">Editorial Team</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Exploring the future of autonomous robotics and delivery technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Similar Articles Section */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="border-t border-border bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4"
              >
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-foreground">
                  Related Articles
                </h2>
                <Link href="/blog">
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 hover:bg-accent"
                  >
                    View All Posts
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedPosts.slice(0, 3).map((article, index) => {
                  const articleImageUrl = 
                    typeof article.featuredImage === 'object' && article.featuredImage !== null
                      ? (article.featuredImage as Media).url
                      : null;
                  const articleCategoryLabel = article.category.charAt(0).toUpperCase() + article.category.slice(1).replace('-', ' ');
                  
                  return (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-background rounded-2xl overflow-hidden border border-border cursor-pointer"
                    >
                      <Link href={`/blog/${article.slug}`}>
                        <div className="relative w-full h-48 md:h-52">
                          {articleImageUrl && (
                            <Image
                              src={articleImageUrl}
                              alt={typeof article.featuredImage === 'object' && article.featuredImage !== null ? (article.featuredImage as Media).alt || article.title : article.title}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="p-6">
                          <Badge className="mb-3 bg-accent/20 text-foreground border-0">
                            {articleCategoryLabel}
                          </Badge>
                          <h3 className="font-bold text-lg md:text-xl leading-tight text-foreground mb-4">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-4">
                            {article.views !== undefined && article.views !== null && (
                              <div className="flex items-center gap-2">
                                <Eye className="size-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                  {article.views >= 1000 ? `${(article.views / 1000).toFixed(1)}k` : article.views}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background border-t border-border"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="bg-gradient-to-br from-card to-background rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-border text-center">
              <div className="max-w-3xl mx-auto">
                <div className="size-16 md:size-20 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mx-auto mb-6">
                  <Image
                    alt="Logo"
                    src="/logo.png"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground mb-4">
                  Be Part of the Future Tech Revolution
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
                  Discover how Fainzy Technologies can transform your business with cutting-edge
                  autonomous delivery solutions. Join hundreds of hotels and restaurants already
                  revolutionizing their operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-lg px-6 md:px-8 py-5 md:py-6">
                    Get Started Today
                    <ChevronRight className="ml-2 size-4 md:size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-border text-foreground hover:bg-accent rounded-lg px-6 md:px-8 py-5 md:py-6"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
