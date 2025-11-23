import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "./BlogCard";
import Newsletter from "./Newsletter";

function HeroSection() {
  return (
    <section className="relative bg-background flex items-center min-h-[320px] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-[-1.12px] mb-4">
            Fainzy Blog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Insights, stories, and updates from the world of autonomous robotics and delivery
            technology
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturedPost() {
  return (
    <section className="py-12 md:py-20 lg:py-[100px]">
      <div className="container">
        <div className=" overflow-hidden my-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative h-64 md:h-[548px] overflow-hidden rounded-[24px] w-full">
              <Image
                alt=""
                src={blogPosts[0].image}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10 space-y-6">
              <Badge className="bg-accent/20 text-foreground border-0 hover:bg-accent/30 w-fit">
                Technology
              </Badge>

              <h2 className="font-bold text-2xl md:text-3xl text-foreground leading-tight">
                The Future of Autonomous Delivery: How ZiBot is Revolutionizing Last-Mile Logistics
              </h2>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>October 25, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>8 min read</span>
                </div>
              </div>

              <p className="text-muted-foreground max-w-prose">
                Discover how our flagship robot ZiBot is transforming the delivery industry with
                cutting-edge AI technology, advanced sensors, and autonomous navigation. Learn about
                the innovative features that make ZiBot the most reliable delivery solution for
                hotels, restaurants, and businesses.
              </p>

              <Link href={`/blog/${blogPosts[0].id}`}>
                <Button className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-[8px] px-4 py-2">
                  <span className="font-bold text-sm tracking-[0.35px] uppercase">Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentPosts() {
  return (
    <section className="py-12 md:py-20 lg:py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <>
      <header>
        <HeroSection />
      </header>

      <main>
        <div className="container">
          <FeaturedPost />
          <RecentPosts />
          <Newsletter />
        </div>
      </main>
    </>
  );
}
