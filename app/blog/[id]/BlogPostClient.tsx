"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Share2, Calendar, Clock, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import BackButtonClient from "./BackButtonClient";
import LikeButton from "./LikeButton";

const relatedArticles = [
  {
    id: 2,
    category: "Technology",
    title: "AI and Machine Learning: The Brain Behind Smart Delivery Robots",
    image:
      "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSXxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: "2.1k",
    views: "58k",
  },
  {
    id: 3,
    category: "Case Study",
    title: "How Restaurant Chain MiraX Increased Efficiency by 40%",
    image:
      "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4OTM1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    likes: "1.8k",
    views: "45k",
  },
  {
    id: 4,
    category: "Technology",
    title: "The Sensor Technology That Makes Autonomous Navigation Possible",
    image:
      "https://images.unsplash.com/photo-1688585931817-fdd211458b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwcm9ib3QlMjBuYXZpZ2F0aW9ufGVufDF8fHx8MTc2Mjg5MzU0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    likes: "3.2k",
    views: "72k",
  },
];

const tableOfContents = [
  "Introduction",
  "Revolutionizing Room Service",
  "Enhanced Guest Experiences",
  "Streamlined Operations",
  "Cost Efficiency and ROI",
  "24/7 Availability",
  "Future of Hospitality",
];

export default function BlogPostClient() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#0a0a0b]">
        {/* Hero Section with Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[500px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1509082916244-3c5018ed3651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGhvdGVsJTIwc2VydmljZSUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2MzA2NDIzOHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[rgba(10,10,11,0.5)] to-[rgba(10,10,11,.7)]" />

          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <BackButtonClient />

                <Badge className="mb-4 bg-[rgba(250,250,250,0.2)] text-white border-0 hover:bg-[rgba(250,250,250,0.3)]">
                  Business
                </Badge>

                <h1 className="font-['Inter:Bold',sans-serif] font-bold text-white text-3xl sm:text-4xl lg:text-5xl max-w-4xl mb-6">
                  5 Ways Autonomous Robots Are Transforming the Hospitality Industry
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
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-6 md:pb-8 mb-8 md:mb-12 border-b border-[#3a3a3a] gap-4"
              >
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#c9c9c9]" />
                    <span className="font-['Inter:Regular',sans-serif] text-sm md:text-base text-[#c9c9c9]">
                      October 20, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#c9c9c9]" />
                    <span className="font-['Inter:Regular',sans-serif] text-sm md:text-base text-[#c9c9c9]">
                      6 min read
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#c9c9c9]" />
                    <span className="font-['Inter:Regular',sans-serif] text-sm md:text-base text-[#c9c9c9]">
                      12.5k views
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">
                  <LikeButton initialLikes={3542} />
                  <button className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors border border-[#3a3a3a]">
                    <Share2 className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#c9c9c9]" />
                    <span className="font-['Inter:Medium',sans-serif] text-sm text-white">
                      Share
                    </span>
                  </button>
                </div>
              </motion.div>

              {/* Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="introduction"
              >
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  The hospitality industry is experiencing a technological revolution, with
                  autonomous robots leading the charge in transforming guest experiences and
                  operational efficiency. From luxury hotels to bustling restaurants, service robots
                  like ZiBot are becoming integral parts of the modern hospitality landscape.
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  In this comprehensive guide, we&apos;ll explore five key ways autonomous delivery
                  robots are reshaping the hospitality sector, improving both guest satisfaction and
                  business outcomes.
                </p>
              </motion.section>

              {/* Section 1 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="revolutionizing-room-service"
              >
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight text-white mb-6">
                  1. Revolutionizing Room Service Delivery
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  Traditional room service often involves long wait times and requires significant
                  staff resources. Autonomous robots like ZiBot are changing this dynamic by
                  providing fast, reliable, and contactless delivery directly to guest rooms.
                </p>
                <div className="bg-[#0e0e0f] rounded-2xl p-6 md:p-8 border border-[#3a3a3a] mb-6">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg md:text-xl text-white mb-4">
                    Key Benefits:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Delivery times reduced by up to 60%",
                      "24/7 service availability without additional labor costs",
                      "Contactless delivery ensures hygiene and safety",
                      "Real-time tracking for both guests and management",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="size-1.5 rounded-full bg-[#6366f1] mt-3 flex-shrink-0" />
                        <span className="font-['Inter:Regular',sans-serif] text-sm md:text-base leading-relaxed text-[#c9c9c9]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  Hotels implementing robot delivery systems report guest satisfaction scores
                  increasing by an average of 25%, with many guests specifically requesting robot
                  delivery for its novelty and efficiency.
                </p>
              </motion.section>

              {/* Section 2 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="enhanced-guest-experiences"
              >
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight text-white mb-6">
                  2. Enhanced Guest Experiences Through Technology
                </h2>
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1654355628827-860147b38be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc2MzA2NDIzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Modern hotel lobby"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  Today&apos;s travelers, especially millennials and Gen Z guests, actively seek out
                  technology-enhanced experiences. Autonomous robots provide a unique,
                  Instagram-worthy interaction that adds memorable moments to their stay.
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  Robots can be customized with hotel branding, programmed to greet guests in
                  multiple languages, and even display promotional content during deliveries,
                  creating opportunities for enhanced engagement and upselling.
                </p>
              </motion.section>

              {/* Section 3 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="streamlined-operations"
              >
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight text-white mb-6">
                  3. Streamlined Operations and Staff Optimization
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  Rather than replacing human staff, autonomous robots free up team members to focus
                  on high-value tasks that require personal interaction and problem-solving. This
                  optimization leads to better resource allocation and improved service quality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-[#0e0e0f] rounded-2xl p-6 border border-[#3a3a3a]"
                  >
                    <div className="size-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                      <span className="font-['Inter:Bold',sans-serif] text-2xl text-white">
                        40%
                      </span>
                    </div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg text-white mb-2">
                      Efficiency Increase
                    </h4>
                    <p className="font-['Inter:Regular',sans-serif] text-sm leading-relaxed text-[#c9c9c9]">
                      Average improvement in delivery efficiency across hospitality venues
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-[#0e0e0f] rounded-2xl p-6 border border-[#3a3a3a]"
                  >
                    <div className="size-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#f43f5e] flex items-center justify-center mb-4">
                      <span className="font-['Inter:Bold',sans-serif] text-2xl text-white">
                        85%
                      </span>
                    </div>
                    <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-lg text-white mb-2">
                      Staff Satisfaction
                    </h4>
                    <p className="font-['Inter:Regular',sans-serif] text-sm leading-relaxed text-[#c9c9c9]">
                      Of staff report higher job satisfaction with robot assistance
                    </p>
                  </motion.div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  Staff can dedicate more time to personalized guest interactions, concierge
                  services, and addressing complex requests, ultimately enhancing the overall
                  service quality of the establishment.
                </p>
              </motion.section>

              {/* Section 4 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="cost-efficiency-and-roi"
              >
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight text-white mb-6">
                  4. Cost Efficiency and Strong ROI
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  While the initial investment in autonomous robots may seem significant, the return
                  on investment is compelling. Hotels and restaurants typically see payback periods
                  of 12-18 months, with ongoing operational savings continuing well beyond that
                  timeframe.
                </p>
                <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1629248242732-592ecc9cc00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwcm9ib3QlMjB3YWl0ZXJ8ZW58MXx8fHwxNzYzMDY0MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Restaurant robot"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  Energy-efficient designs, low maintenance requirements, and the ability to operate
                  continuously without breaks make robots like ZiBot a cost-effective solution for
                  modern hospitality businesses looking to optimize their operations.
                </p>
              </motion.section>

              {/* Section 5 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="24-7-availability"
              >
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight text-white mb-6">
                  5. 24/7 Availability and Consistency
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  One of the most significant advantages of autonomous robots is their ability to
                  provide consistent, round-the-clock service. Whether it&apos;s a late-night room
                  service request or early morning amenity delivery, robots are always ready to
                  serve.
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  This reliability ensures that guest needs are met promptly regardless of the time
                  of day, contributing to higher satisfaction ratings and positive reviews across
                  booking platforms.
                </p>
              </motion.section>

              {/* Conclusion */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="mb-8 md:mb-12"
                id="future-of-hospitality"
              >
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight text-white mb-6">
                  The Future of Hospitality is Here
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5] mb-6">
                  As we look toward the future, it&apos;s clear that autonomous robots will play an
                  increasingly central role in hospitality operations. The technology continues to
                  evolve, with advancements in AI, navigation, and human-robot interaction making
                  these systems more capable and user-friendly than ever before.
                </p>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl p-6 md:p-8 mb-6"
                >
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-xl md:text-2xl text-white mb-4">
                    Ready to Transform Your Hospitality Business?
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-sm md:text-base leading-relaxed text-white mb-6">
                    Discover how ZiBot can revolutionize your guest experience and operational
                    efficiency. Contact our team today for a personalized demonstration.
                  </p>
                  <Button className="bg-white text-[#6366f1] hover:bg-[#f5f5f5] rounded-lg">
                    Request a Demo
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </motion.div>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#e5e5e5]">
                  The hospitality industry is transforming, and those who embrace innovative
                  technologies like autonomous delivery robots will be best positioned to thrive in
                  this new era of service excellence.
                </p>
              </motion.section>
            </div>

            {/* Right Column - Table of Contents */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="sticky top-24 h-fit hidden lg:block"
            >
              <div className="bg-[#0e0e0f] rounded-2xl p-6 border border-[#3a3a3a]">
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-lg text-white mb-6">
                  Table of Contents
                </h3>
                <nav className="space-y-4">
                  {tableOfContents.map((item, index) => (
                    <motion.a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group flex items-start gap-3 transition-colors hover:text-white"
                    >
                      <ChevronRight className="size-4 text-[#6366f1] mt-1 flex-shrink-0" />
                      <span className="font-['Inter:Regular',sans-serif] text-sm leading-relaxed text-[#c9c9c9] group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Author Info */}
              <div className="bg-[#0e0e0f] rounded-2xl p-6 border border-[#3a3a3a] mt-6">
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-lg text-white mb-4">
                  Author
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                    <span className="font-['Inter:Bold',sans-serif] text-lg text-white">FT</span>
                  </div>
                  <div>
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-base text-white">
                      Fainzy Technologies
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-sm text-[#c9c9c9]">
                      Editorial Team
                    </p>
                  </div>
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-sm leading-relaxed text-[#c9c9c9]">
                  Exploring the future of autonomous robotics and delivery technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Similar Articles Section */}
        <div className="border-t border-[#3a3a3a] bg-[#0e0e0f]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4"
            >
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                Similar Articles
              </h2>
              <Button
                variant="ghost"
                className="text-[#6366f1] hover:text-[#8b5cf6] hover:bg-[rgba(99,102,241,0.1)]"
              >
                View All Posts
                <ChevronRight className="ml-2 size-4" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-[#0a0a0b] rounded-2xl overflow-hidden border border-[#3a3a3a] cursor-pointer"
                >
                  <Link href={`/blog/${article.id}`}>
                    <div className="relative w-full h-48 md:h-52">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-[rgba(250,250,250,0.2)] text-white border-0">
                        {article.category}
                      </Badge>
                      <h3 className="font-['Inter:Bold',sans-serif] font-bold text-lg md:text-xl leading-tight text-white mb-4">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Eye className="size-4 text-[#c9c9c9]" />
                          <span className="font-['Inter:Regular',sans-serif] text-sm text-[#c9c9c9]">
                            {article.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0a0a0b] border-t border-[#3a3a3a]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="bg-gradient-to-br from-[#0e0e0f] to-[#0a0a0b] rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-[#3a3a3a] text-center">
              <div className="max-w-3xl mx-auto">
                <div className="size-16 md:size-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mx-auto mb-6">
                  <Image
                    alt="Logo"
                    src="/logo.png"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h2 className="font-['Inter:Bold',sans-serif] font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white mb-4">
                  Be Part of the Future Tech Revolution
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-base md:text-lg leading-relaxed text-[#c9c9c9] mb-8">
                  Discover how Fainzy Technologies can transform your business with cutting-edge
                  autonomous delivery solutions. Join hundreds of hotels and restaurants already
                  revolutionizing their operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-lg px-6 md:px-8 py-5 md:py-6">
                    Get Started Today
                    <ChevronRight className="ml-2 size-4 md:size-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-[#3a3a3a] text-white hover:bg-[rgba(255,255,255,0.05)] rounded-lg px-6 md:px-8 py-5 md:py-6"
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
