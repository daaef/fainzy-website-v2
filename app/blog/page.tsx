"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

// Blog post data
export const blogPosts = [
  {
    id: 1,
    category: "Business",
    title: "5 Ways Autonomous Robots Are Transforming the Hospitality Industry",
    description:
      "From room service to concierge duties, discover how robots like ZiBot are enhancing guest experiences in hotels worldwide.",
    date: "October 20, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNlcnZpY2UlMjByb2JvdHxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    category: "Technology",
    title: "AI and Machine Learning: The Brain Behind Smart Delivery Robots",
    description:
      "Explore the sophisticated AI algorithms that power ZiBot's decision-making, path planning, and obstacle avoidance capabilities.",
    date: "October 18, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSXxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    category: "Case Study",
    title: "Customer Success Story: How Restaurant Chain MiraX Increased Efficiency by 40%",
    description:
      "Learn how implementing our delivery robots helped a major restaurant chain reduce wait times and improve customer satisfaction.",
    date: "October 15, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    category: "Technology",
    title: "The Sensor Technology That Makes Autonomous Navigation Possible",
    description:
      "A deep dive into the advanced sensory array that allows ZiBot to navigate complex environments safely and efficiently.",
    date: "October 12, 2025",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1688585931817-fdd211458b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwcm9ib3QlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc2Mjg5MzU0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    category: "Careers",
    title: "Building Tomorrow's Workforce: Careers in Robotics at Fainzy Technologies",
    description:
      "Interested in shaping the future of autonomous delivery? Discover the exciting career opportunities available at Fainzy.",
    date: "October 10, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1590038667005-7d82ac6f864b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNhcmVlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODkzNTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    category: "Sustainability",
    title: "Sustainability in Robotics: How ZiBot Reduces Carbon Footprint",
    description:
      "Explore how our energy-efficient design and optimized routing algorithms contribute to a more sustainable future.",
    date: "October 8, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1615903714163-1c9768bfcd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBncmVlbnxlbnwxfHx8fDE3NjI4NTE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

function HeroSection() {
  return (
    <section className="relative bg-[#0a0a0b] flex items-center min-h-[320px] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-1.12px] mb-4">
            Fainzy Blog
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg">
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
              <Badge className="bg-[rgba(250,250,250,0.12)] text-neutral-50 border-0 hover:bg-[rgba(250,250,250,0.16)]">
                Technology
              </Badge>

              <h2 className="font-bold text-2xl md:text-3xl text-white leading-tight">
                The Future of Autonomous Delivery: How ZiBot is Revolutionizing Last-Mile Logistics
              </h2>

              <div className="flex items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-400" />
                  <span>October 25, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>8 min read</span>
                </div>
              </div>

              <p className="text-neutral-400 max-w-prose">
                Discover how our flagship robot ZiBot is transforming the delivery industry with
                cutting-edge AI technology, advanced sensors, and autonomous navigation. Learn about
                the innovative features that make ZiBot the most reliable delivery solution for
                hotels, restaurants, and businesses.
              </p>

              <Link href={`/blog/${blogPosts[0].id}`}>
                <Button className="inline-flex items-center gap-3 bg-neutral-50 text-[#0a0a0b] hover:bg-neutral-200 rounded-[8px] px-4 py-2">
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

function BlogCard({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <Link href={`/blog/${post.id}`} className="block">
      <motion.article
        className="bg-[#0a0a0b] overflow-hidden group cursor-pointer"
        style={{ borderRadius: 16 }}
        whileHover={{ scale: 0.992, borderRadius: 20, boxShadow: "0 12px 30px rgba(0,0,0,0.6)" }}
        transition={{ type: "spring", stiffness: 280, damping: 30, duration: 0.18 }}
      >
        <div className="relative h-48 md:h-56 rounded-[20px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transform transition-transform duration-300 ease-out group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>

        <div className="p-6 space-y-3">
          <Badge className="bg-[rgba(250,250,250,0.12)] text-white border-0 hover:bg-[rgba(250,250,250,0.16)]">
            {post.category}
          </Badge>

          <h3 className="font-bold text-lg text-white">{post.title}</h3>

          <p className="text-sm text-neutral-400">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neutral-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function RecentPosts() {
  return (
    <section className="py-12 md:py-20 lg:py-[100px]">
      <div className="container">
        {/* <div className="flex items-center justify-between mb-8">
                    <h2 className="font-bold text-3xl text-white">Recent Posts</h2>
                    <Button variant="ghost" className="h-9 rounded-[8px] text-neutral-50 hover:bg-[rgba(250,250,250,0.04)]">
                        <span className="font-bold text-sm">View All</span>
                    </Button>
                </div>*/}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="py-12 md:py-20 lg:py-[100px]">
      <div className="container">
        <div className="bg-gradient-to-b py-20 from-[#0e0e0f] to-[#0a0a0b] rounded-xl p-8 text-center">
          <h3 className="font-bold text-5xl text-white mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-neutral-400 mb-6">
            Stay updated with the latest news, insights, and innovations from Fainzy Technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input placeholder="Enter your email address" className="w-full sm:w-auto" />
            <Button className="bg-[rgba(250,250,250,0.18)] hover:bg-[rgba(250,250,250,0.24)] rounded-[8px] px-6 py-2 text-white">
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-neutral-500 mt-4">
            By subscribing, you agree to our Privacy Policy and provide consent to receive updates
            from our company.
          </p>
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
