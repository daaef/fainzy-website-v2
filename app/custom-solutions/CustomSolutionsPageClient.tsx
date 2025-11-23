"use client";

import { motion } from "motion/react";
import CustomSolutionsCarousel from "@/components/CustomSolutionsCarousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CustomSolutionsPage() {
  const solutions = [
    {
      id: "consultancy",
      category: "Custom Solution",
      title: "Fainzy Consultancy",
      description:
        "The Last Mile Delivery System uses our robot to take food deliveries from restaurants to consumers' locations.",
      images: [
        {
          src: "/slides/consultancy.png",
          alt: "Fainzy Consultancy Robot",
        },
      ],
      features: [
        { title: "24/7 Operation", subtitle: "Always Available" },
        { title: "Cost Effective", subtitle: "Reduced Labor" },
        { title: "Eco-Friendly", subtitle: "Zero Emissions" },
        { title: "Reliable", subtitle: "Consistent Service" },
      ],
    },
    {
      id: "customized-robots",
      category: "Custom Solution",
      title: "Customized Robots",
      description:
        "Fainzy Technologies can make customized robots suitable for your needs. Please contact us for more details.",
      images: [
        {
          src: "/last-delivery.png",
          alt: "Customized Robot",
        },
      ],
      features: [
        { title: "Health Robot", subtitle: "Always Available" },
        { title: "Cost Effective", subtitle: "Reduced Labor" },
        { title: "Eco-Friendly", subtitle: "Zero Emissions" },
        { title: "Reliable", subtitle: "Consistent Service" },
      ],
    },
    {
      id: "iot-solutions",
      category: "Custom Solution",
      title: "IoT Solutions",
      description:
        "Web Development, Mobile Application Development, Deep learning Algorithm development, Autonomous driving software solutions",
      images: [
        {
          src: "/glide.png",
          alt: "IoT Solutions",
        },
      ],
      features: [
        { title: "Health Robot", subtitle: "Always Available" },
        { title: "Cost Effective", subtitle: "Reduced Labor" },
        { title: "Eco-Friendly", subtitle: "Zero Emissions" },
        { title: "Reliable", subtitle: "Consistent Service" },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section with Custom Solutions Carousel */}
      <section className="pt-24 md:pt-32">
        <CustomSolutionsCarousel solutions={solutions} />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Tell Us About Your Custom Solution
              </h2>
              <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
                Share your requirements with us and our team will get back to you with a tailored
                solution for your needs.
              </p>
            </div>

            {/* Contact Form */}
            <form className="bg-[#121212] rounded-2xl p-6 md:p-10 space-y-6 border border-[rgba(255,255,255,0.08)]">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-sm font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-neutral-500 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-neutral-500 h-12"
                  />
                </div>
              </div>

              {/* Company and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white text-sm font-medium">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-neutral-500 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-neutral-500 h-12"
                  />
                </div>
              </div>

              {/* Solution Type */}
              <div className="space-y-2">
                <Label htmlFor="solution-type" className="text-white text-sm font-medium">
                  Type of Solution *
                </Label>
                <Select name="solution-type" required>
                  <SelectTrigger className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white h-12">
                    <SelectValue placeholder="Select solution type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white">
                    <SelectItem value="customized-robots">Customized Robots</SelectItem>
                    <SelectItem value="iot-solutions">IoT Solutions</SelectItem>
                    <SelectItem value="consultancy">Robotics Consultancy</SelectItem>
                    <SelectItem value="software-development">Software Development</SelectItem>
                    <SelectItem value="ai-ml">AI/ML Solutions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-white text-sm font-medium">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Please describe your custom solution requirements in detail..."
                  className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white placeholder:text-neutral-500 min-h-[150px] resize-none"
                />
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white text-sm font-medium">
                  Estimated Budget Range
                </Label>
                <Select name="budget">
                  <SelectTrigger className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white h-12">
                    <SelectValue placeholder="Select budget range (optional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0a0b] border-[rgba(218,218,218,0.25)] text-white">
                    <SelectItem value="under-50k">Under $50,000</SelectItem>
                    <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="500k-plus">$500,000+</SelectItem>
                    <SelectItem value="to-be-discussed">To be discussed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-neutral-200 h-12 text-base font-semibold transition-all duration-300"
              >
                Submit Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Book Consultation CTA Section */}
      <section className="w-full py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Need Expert Guidance?
            </h2>
            <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
              Schedule a free consultation with our robotics and AI experts to discuss your project
              requirements and explore the best solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact?type=consultation"
                className="inline-flex items-center justify-center bg-white text-black hover:bg-neutral-200 px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 w-full sm:w-auto"
              >
                Book a Free Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-md font-semibold text-base transition-all duration-300 w-full sm:w-auto"
              >
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
