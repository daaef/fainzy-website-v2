"use client";

import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import Image from "next/image";
import LargeFeatureCarousel from "@/components/zibot/LargeFeatureCarousel";
import CardCarousel from "@/components/zibot/CardCarousel";
import RobotTopViewGrid from "@/components/zibot/RobotTopViewGrid";
import VideoSection from "@/components/zibot/VideoSection";
import BenefitGrid from "@/components/zibot/BenefitGrid";
import RobotComparison from "@/components/zibot/RobotComparison";
import PricingSection from "@/components/zibot/PricingSection";
import { Separator } from "@/components/ui/separator";
import { motion } from "motion/react";

export default function ProductPage() {
  // Section 4: Main Features (3 features for carousel)
  const mainFeatures = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=1200&q=80",
      title: "24/7 Availability",
      description:
        "Robots don't need to sleep or rest like the clock. They can operate 24/7. This means users can order food at any time, including late-night cravings or early morning meals.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1200&q=80",
      title: "All-Weather Operation",
      description:
        "All-weather capability means ZiBot operates consistently regardless of rain, snow, or extreme temperatures. While human drivers cancel deliveries due to weather, ZiBot keeps moving—delivering consistently regardless of conditions.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=1200&q=80",
      title: "Zero Contact",
      description:
        "You can buy food from ZiBot without touching any buttons or making physical contact. Robots provide a perfect solution for contactless delivery, ensuring hygiene.",
    },
  ];

  // Section 5: Beyond Delivery Cards
  const beyondDeliveryCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Life, Delivered",
      description: "6 A.M breakfast. Midnight medicine. Anytime you need.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Teams Work. Not Run Errands.",
      description: "Teams focus on customers. Not coffee runs.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=600&q=80",
      title: "Hot Arrives Hot. Always.",
      description: "Hot stays hot. Cold stays cold. Always.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=600&q=80",
      title: "Zero Touch. Maximum Safety.",
      description: "Phone unlock. Tap confirm. No risk.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Small Shops. Big League Delivery.",
      description: "Corner shops compete with chains. 15% per order.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Clean Routes. Clear Conscience.",
      description: "Zero emissions. Lower costs. Better Earth.",
    },
  ];

  // Section 7: 360° Sensing Features
  const sensingFeatures = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=1200&q=80",
      title: "Accurate Every Time",
      description:
        "Robots are programmed to follow precise routes, delivering to customer addresses exactly where the orders need to go. This eliminates the possibility of missed deliveries or delivery during rush hours.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1200&q=80",
      title: "Navigate Traffic",
      description:
        "Robots can navigate through traffic and congested areas faster than human delivery drivers, resulting in quicker delivery times. This ensures that customers receive their food promptly, especially during peak hours. Unlike human...",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=1200&q=80",
      title: "Never Gets Tired",
      description:
        "Unlike human workers, robots don't get tired, distracted or affected by personal factors that typically impact human workers' productivity. They deliver consistent performance, leading to higher efficiency.",
    },
  ];

  // Section 8: Navigate Environment Grid Items
  const navigateGridItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=400&q=80",
      title: "Smart Sensors - 360° View",
      description: "Complete visibility means no blind spots.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&q=80",
      title: "AI Awareness",
      description: "Thinks and adjusts like a human, but way quicker.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=400&q=80",
      title: "Pedestrian Awareness",
      description: "Spots people and navigates around them safely.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=400&q=80",
      title: "Smart Routing",
      description: "Finds the quickest route every time, automatically.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=400&q=80",
      title: "Accurate Location",
      description: "Nails your exact spot with pinpoint accuracy.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&q=80",
      title: "Dynamic Obstacle Handling",
      description: "Instantly adjusts to any obstacle in the way.",
    },
  ];

  // Section 10: Built to Handle Anything Cards
  const durabilityCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Never Gets In Sick",
      description:
        "ZiBot handles deliveries autonomously while your team focused on what matters—ensuring your customers receive what they expect, every time.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Rain, Snow, Heat—Doesn't Matter",
      description:
        "All-weather capability means ZiBot operates under any conditions. While human drivers cancel, ZiBot keeps moving. Your delivery arrives regardless of forecast.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=600&q=80",
      title: "Curbs, Steps, Rough Pavement—Handled",
      description:
        "ZiBot handles tough urban surfaces. Curbs, cracks, steps, weather. It powers through what stops other order drivers and delivers even in street-level chaos.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=600&q=80",
      title: "Navigates Crowds Like a Local",
      description:
        "Sidewalk packed? Train station chaos? ZiBot moves through high-traffic sidewalks without slowing down or bumping anyone. Street-savvy by design.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Secure by Design. Monitored 24/7.",
      description:
        "Real-time remote monitoring and autonomous data tracking provide constant fleet oversight. Nobody messes with ZiBot. Multi-layer security and tamper alerts keep people out.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Strict on precision",
      description:
        "GPS tracking and smart AI-routing guarantee flawless deliveries. Your order arrives exactly how it left—perfect temperature, secure handoffs, and pinpoint accuracy.",
    },
  ];

  // Section 12: SAFE FOOD Features
  const safeFoodFeatures = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=1200&q=80",
      title: "All-Around Awareness",
      description:
        "360° environmental sensing provides complete visibility with no blind spots. Every direction, pedestrian, and vehicle is detected and tracked in real-time.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1200&q=80",
      title: "Navigate Around Barriers",
      description:
        "Obstacle avoidance technology navigates around barriers, construction zones, and unexpected obstacles automatically. Safe operation in any environment.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=1200&q=80",
      title: "Absorbs Every Bump",
      description:
        "Advanced suspension system provides smooth ride over terrain. Protects cargo from shocks while navigating curbs, cracks, and uneven surfaces.",
    },
  ];

  // Section 13: Everyday Solutions Cards
  const everydaySolutionsCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Breakfast. Lunch. Midnight Snack.",
      description:
        "Get it all, or 6 AM? Now done-delivery party or supplies? Fresh groceries after work.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Event Send. Child Awaited.",
      description:
        "Run out of supplies mid-event? Need last-minute supplies for a party? ZiBot delivers supplies without the panic.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=600&q=80",
      title: "Medicine When You Need It Most",
      description:
        "Temperature-controlled transport keeps prescriptions safe. Discreet compartments ensure privacy. Urgent deliveries arrive when they're needed most.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=600&q=80",
      title: "Returns Without the Trip.",
      description:
        "Schedule pickup online or returns call-in retailers. Gather online shopping around the corner. ZiBot collects returns around local business places.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Shop Local. Delivered Fast.",
      description:
        "Your neighborhood bakery delivers via ZiBot like major chains. The local shop street-level eCommerce with chains. ZiBot gives street-level businesses with chains delivery expertise.",
    },
  ];

  // Section 14: Protected & Private Cards
  const protectedPrivateCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=600&q=80",
      title: "Nobody Touches It But You",
      description:
        "Multi-layer access codes and sealed compartments keep orders private and secure until you unlock them.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Tracked Every Step",
      description:
        "Real-time GPS, tamper alerts, and geostamped drop-off data keep you fully visibility from pickup to porch.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Temperature Perfect. Always.",
      description:
        "Active climate control and insulated compartments preserve meals and medicines at the right temperature.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=600&q=80",
      title: "Built With Backups",
      description:
        "Multiple sensors, safe-stop logic, and hardware failsafes prevent problems like.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Your Data Stays Yours",
      description:
        "End-to-end encryption and minimal data retention protect your information and delivery details.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Monitor 24/7. Problems Solved Fast.",
      description:
        "Remote monitoring and fast-response tools resolve issues quickly so delivery never gets stuck.",
    },
  ];

  // Section 15: Six Reasons Grid Items
  const sixReasonsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=400&q=80",
      title: "Speed and Efficiency",
      description: "Faster than human drivers. Quicker peak-hour delivery.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=400&q=80",
      title: "Contactless Delivery",
      description: "Zero human contact. Hygienic delivery process.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=400&q=80",
      title: "Consistent Performance",
      description: "Never tired or distracted. Higher efficiency.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&q=80",
      title: "Accurate Deliveries",
      description: "Precise routes. Zero missed deliveries.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=400&q=80",
      title: "Entertainment and Novelty",
      description: "Fun, novel experience. Enhanced customer satisfaction.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=400&q=80",
      title: "Cost-Effective",
      description: "Lower costs. Reduced delivery fees.",
    },
  ];

  // Section 16: Autonomy Benefits
  const autonomyBenefits = {
    title: "Autonomy That Empowers — For Shops. For Lives",
    sections: [
      {
        heading: "Store Owners",
        subheading: "Scale effortlessly. Operate efficiently. Serve more customers.",
        items: [
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
            title: "Steady growth and revenue.",
            description:
              "ZiBot handles deliveries autonomously while your team focused on what matters.",
          },
          {
            id: 2,
            image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
            title: "Live in 6 Steps. Delivering Today.",
            description:
              "Launch your autonomous delivery fleet instantly—no setup or no hassles. Get started. No fuss, and start delivering.",
          },
          {
            id: 3,
            image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=600&q=80",
            title: "Handle Peak Rushes Effortlessly",
            description:
              "ZiBot adapts to any demand—whether 10 or 1,000 orders. It navigates traffic better, peak hours into profit while others falter.",
          },
        ],
      },
      {
        heading: "Users",
        subheading: "Reliable on-time deliveries that make everyday life simpler.",
        items: [
          {
            id: 1,
            image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=600&q=80",
            title: "24/7 Operation. Zero Downtime.",
            description:
              "On-demand deliveries that fit your schedule — reliable, predictable service that frees you from errands and delays.",
          },
          {
            id: 2,
            image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
            title: "Temperature-Controlled. No Contact.",
            description:
              "Temperature-controlled compartments, private tracking and clear ETAs keep orders fresh and exactly when they should.",
          },
          {
            id: 3,
            image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
            title: "Tracked. Secure. Contactless.",
            description:
              "App-controlled access, anti-theft tracking and fully-connected handoffs for secure, no-touch deliveries.",
          },
        ],
      },
    ],
  };

  // Section 18: Launch in 6 Steps Items
  const launchStepsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=400&q=80",
      title: "Create Business Account",
      description: "Online dashboard setup",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=400&q=80",
      title: "Configure Store Details",
      description: "Menu, location, hours",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=400&q=80",
      title: "Complete Onboarding",
      description: "Verification process",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=400&q=80",
      title: "Receive Welcome Kit",
      description: "Tablet, bag, card (20,000 YEN)",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=400&q=80",
      title: "Setup & Training",
      description: "Staff onboarding",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1688585931817-fdd211458b60?w=400&q=80",
      title: "Start Delivering",
      description: "Go live",
    },
  ];

  // Section 19: Order in 3 Steps Items
  const orderStepsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=600&q=80",
      title: "Enter & Verify Location",
      description: "Phone verification + delivery address",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=600&q=80",
      title: "Browse & Order Your Food",
      description: "Browse restaurant favorites",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1758989388630-d629d4ea9806?w=600&q=80",
      title: "Pay & Track Delivery",
      description: "Watch ZiBot arrive in real-time",
    },
  ];

  // Section 20: Pricing Data
  const pricingData = {
    title: "Built to handle reality. Priced to handle growth.",
    description:
      "ZiBot doesn't just deliver. It transforms your operations, frees your staff, and cuts costs. All while delighting customers.",
    robot: { image: "/products/built-to-handle.png", height: "large" as const },
    pricingTiers: [
      {
        name: "Standard",
        badge: "20% Key Deals",
        badgeColor: "text-orange-500 bg-orange-500/10",
        price: "20,000 yen welcome kit (One-Time)",
        commission: "20% commission per delivery",
        features: ["Weekly payouts on Friday", "All features included"],
        buttonText: "Get Started",
        buttonVariant: "outline" as const,
      },
      {
        name: "First 100 Exclusive",
        badge: "10% FOREVER",
        badgeColor: "text-orange-500 bg-orange-500/10",
        price: "20,000 yen welcome kit (One-Time)",
        commission: "10% commission per delivery",
        features: [
          "5% savings on every order",
          "Lifetime rate guarantee",
          "Weekly payouts every Friday",
          "All features included",
          "Limited to first 100 stores",
        ],
        buttonText: "Claim Your Spot",
        buttonVariant: "default" as const,
      },
    ],
  };

  return (
    <div className="text-white font-[family-name:var(--font-inter)]">
      {/* Section 1: Hero Section with Background Video */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        {/* Background Video with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
            <source src="/videos/zibot.mp4" type="video/mp4" />
          </video>
          {/* Ellipse gradient overlay to blend with bg-[#0a0a0b] */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,11,0.6) 30%, rgba(10,10,11,0.8) 40%, rgba(10,10,11,1) 65%, rgba(10,10,11,1) 75%, rgba(10,10,11,1) 100%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center container"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-zibot font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4"
          >
            ZIBOT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base tracking-widest mb-8 sm:mb-12"
          >
            ANYTHING - ANYTIME - ANYWHERE <br />
            DELIVERY
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-24 md:mb-32"
          >
            <button className="p-2.5 sm:p-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
              <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <Button className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-4 sm:py-6 text-xs sm:text-sm font-semibold rounded-md">
              GET STARTED
            </Button>
            <button className="p-2.5 sm:p-3 rounded-full border border-white/30 hover:bg-white/10 transition-colors">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            </button>
          </motion.div>

          {/* Three Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row sm:h-[150px] items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3">24/7</h3>
              <p className="text-xs sm:text-sm text-gray-400">Available Anytime</p>
            </motion.div>
            <Separator orientation="vertical" className="hidden sm:block" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="text-center"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3">Smart AI</h3>
              <p className="text-xs sm:text-sm text-gray-400">Autonomous navigation</p>
            </motion.div>
            <Separator orientation="vertical" className="hidden sm:block" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-center"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3">Instant</h3>
              <p className="text-xs sm:text-sm text-gray-400">Fast Delivery</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: From Cozy Dinners Video */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <VideoSection
            videoSrc="/videos/zibot.mp4"
            poster="https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=1200&q=80"
            title="From Cozy Dinners to Office Lunches"
            description="ZiBot ensures your orders are delivered promptly and accurately. Robots navigate through traffic faster than human drivers—resulting in quicker delivery times, especially during peak hours."
            titlePosition="below"
          />
        </div>
      </section>

      {/* Section 3: Hot and Fresh Video */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <VideoSection
            videoSrc="/videos/zibot.mp4"
            poster="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1200&q=80"
            title="Hot and Fresh. Every Single Time."
            description="Wait for your hot and fresh food to get delivered by ZiBot – contactless, clean, and exactly when you need it."
            titlePosition="below"
          />
        </div>
      </section>

      {/* Section 4: Main Features Carousel */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <LargeFeatureCarousel features={mainFeatures} />
        </div>
      </section>

      {/* Section 5: Beyond Delivery Carousel */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <CardCarousel
            cards={beyondDeliveryCards}
            title="Beyond Delivery. Into What Matters."
            subtitle="More than logistics. It's time back. It's peace of mind. It's life, simplified."
            navigationPosition="top-right"
            cardsPerView={4}
          />
        </div>
      </section>

      {/* Section 6: Robot Models Comparison */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <RobotComparison
            robot1Image="/products/milage.png"
            specs={[
              { value: "20km", label: "Range per charge" },
              { value: "30 kg", label: "Payload Capacity" },
              { value: "5 km/h", label: "Average Speed" },
            ]}
          />
        </div>
      </section>

      {/* Section 7: 360° Environmental Sensing */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            360° Environmental Sensing. AI-Powered Navigation.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12">
            Traffic, rain, curbs, or crowds – ZiBot sees, senses, and adapts on its own, keeping
            deliveries on track
          </p>
          <LargeFeatureCarousel features={sensingFeatures} />
        </motion.div>
      </section>

      {/* Section 8: Navigate Any Environment */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <RobotTopViewGrid
            robotImage="/products/navigate.png"
            title="Navigate Any Environment"
            subtitle="Super smart sensing. Handles any crowd, weather, or terrain with ease."
            gridItems={navigateGridItems}
            gridCols={3}
          />
        </div>
      </section>

      {/* Section 9: Connected Cloud Intelligence Video */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <VideoSection
            videoSrc="/videos/zibot.mp4"
            poster="https://images.unsplash.com/photo-1629248242733-43d4013f33a1?w=1200&q=80"
            overlayText="Get orders"
            overlayPosition="bottom-left"
            title="Connected Cloud Intelligence"
            description="Real-time monitoring, route optimization, and instant updates ensure every delivery is tracked and optimized."
          />
        </div>
      </section>

      {/* Section 10: Built to Handle Anything Carousel */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Built to Handle Anything
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12">
            Traffic, rain, curbs, or crowds – ZiBot sees, senses, and adapts on its own, keeping
            deliveries on track
          </p>
          <LargeFeatureCarousel features={durabilityCards} />
        </motion.div>
      </section>

      {/* Section 11: Built to Operate Safely Video */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <VideoSection
            videoSrc="/videos/zibot.mp4"
            poster="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1200&q=80"
            title="Built to Operate Safely"
            titlePosition="below"
            height="medium"
          />
        </div>
      </section>

      {/* Section 12: SAFE FOOD Certified Carousel */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            SAFE FOOD Certified. Contactless. Secure.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-12">
            Food safety certified with a hygienic delivery process. In situations where contactless
            delivery is preferred, robots provide an ideal solution without direct human contact.
          </p>
          <LargeFeatureCarousel features={safeFoodFeatures} />
        </motion.div>
      </section>

      {/* Section 13: Everyday Solutions Carousel */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <CardCarousel
            cards={everydaySolutionsCards}
            title="Everyday Solutions, Delivered"
            subtitle="`More than meals. Medicine. Groceries. Returns. Commerce. Whatever you need, whenever you need it.`"
            navigationPosition="top-right"
            cardsPerView={4}
          />
        </div>
      </section>

      {/* Section 14: Protected & Private Carousel */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <CardCarousel
            cards={protectedPrivateCards}
            title="Protected & Private"
            subtitle="Engineered protection. Human peace of mind. Multiple layers keep your delivery secure—and you worry-free."
            navigationPosition="top-right"
            cardsPerView={4}
          />
        </div>
      </section>

      {/* Section 15: Six Reasons to Choose ZiBot */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <RobotTopViewGrid
            robotImage="/products/reasons.png"
            title="Six Reasons to Choose ZiBot"
            gridItems={sixReasonsItems}
            gridCols={3}
          />
        </div>
      </section>

      {/* Section 16: Autonomy That Empowers */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <BenefitGrid title={autonomyBenefits.title} sections={autonomyBenefits.sections} />
        </div>
      </section>

      {/* Section 17: Transform Your Business Operations Video */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?w=1200&q=80"
            >
              <source src="/videos/zibot.mp4" type="video/mp4" />
            </video>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
            Transform Your Business Operations
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:h-[150px] gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">30%</p>
              <p className="text-xs sm:text-sm text-gray-400">Cost Savings</p>
            </motion.div>
            <Separator orientation="vertical" className="hidden sm:block" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">15%</p>
              <p className="text-xs sm:text-sm text-gray-400">Fee per order</p>
            </motion.div>
            <Separator orientation="vertical" className="hidden sm:block" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">6 Steps</p>
              <p className="text-xs sm:text-sm text-gray-400">Ease to Go Live</p>
            </motion.div>
          </div>
          <Button className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold rounded-md">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Section 18: Launch in 6 Simple Steps */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <RobotTopViewGrid
            robotImage="/products/navigate.png"
            title="Go Live in 6 Simple Steps"
            gridItems={launchStepsItems}
            gridCols={3}
            rightContent={
              <div className="flex items-end gap-4">
                <p className="text-xl md:text-2xl font-semibold text-white">Business?</p>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-base"
                >
                  Get Started!
                </Button>
              </div>
            }
          />
        </div>
      </section>

      {/* Section 19: Order in 3 Easy Steps */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <RobotTopViewGrid
            robotImage="/products/order-in-3.png"
            title="Order in 3 Easy Steps"
            gridItems={orderStepsItems}
            gridCols={3}
            rightContent={
              <div className="flex items-end gap-4">
                <p className="text-xl md:text-2xl font-semibold text-white mb-2">Order Now</p>
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-6"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Play Store
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors px-6 py-6"
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    App Store
                  </Button>
                </div>
              </div>
            }
          />
        </div>
      </section>

      {/* Section 20: Pricing Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container">
          <PricingSection
            title={pricingData.title}
            description={pricingData.description}
            robot={pricingData?.robot}
            pricingTiers={pricingData.pricingTiers}
          />
        </div>
      </section>

      {/* Section 21: No Boundaries. No Limits. */}
      <section className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="container min-h-[50vh] sm:min-h-[70vh] relative">
          {/* Background Video with Ellipse Gradient Overlay */}
          <div className="relative inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-50"
            >
              <source src="/videos/zibot.mp4" type="video/mp4" />
            </video>
            {/* Ellipse gradient overlay to blend with bg-[#0a0a0b] */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,11,0.6) 30%, rgba(10,10,11,0.8) 40%, rgba(10,10,11,1) 65%, rgba(10,10,11,1) 75%, rgba(10,10,11,1) 100%)",
              }}
            ></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              No Boundaries. No Limits.
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Indoor, outdoor, day, night, rain or shine - ZiBot operates where traditional delivery
              stops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 22: Specifications */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[.6fr_1fr] items-center justify-between gap-8 sm:gap-12">
            {/* Left: Specs */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
                <h2 className="font-zibot text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  ZIBOT
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl">Specifications</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-8 sm:mb-12">
                Professional autonomous delivery for last-mile logistics
              </p>

              {/* Spec Groups */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                    Performance
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">Max Speed</p>
                      <p className="text-white font-semibold">5 km/h</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Range (est.)</p>
                      <p className="text-white font-semibold">20 km</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Payload Capacity</p>
                      <p className="text-white font-semibold">30 kg</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                    Dimensions
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">Form Factor</p>
                      <p className="text-white font-semibold">Compact design</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Overall Width</p>
                      <p className="text-white font-semibold">60 cm (fits on sidewalks)</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Overall Height</p>
                      <p className="text-white font-semibold">Varied settings</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                    Battery & Charging
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">Battery Type</p>
                      <p className="text-white font-semibold">Charging Time</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Charging Time</p>
                      <p className="text-white font-semibold">Fast Charge</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Charger</p>
                      <p className="text-white font-semibold">Included (household plug-in)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                    Control & Interface
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">Fleet Dashboard</p>
                      <p className="text-white font-semibold">Cloud-based control</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Mobile App</p>
                      <p className="text-white font-semibold">iOS, Android supported</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Reporting</p>
                      <p className="text-white font-semibold">Real-time alerts and analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Robot Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full">
              <Image
                src="/products/specs.png"
                alt="ZiBot Specifications"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 23: Footer CTA */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="container"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Side: Text and Buttons */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-zibot font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
                ZIBOT
              </h3>
              <p className="text-white text-sm md:text-base mb-1">
                Ready to Transform Your Delivery?
              </p>
              <p className="text-gray-500 text-xs md:text-sm mb-4 sm:mb-6">
                Join the first 100 businesses. Lock in rate lifetime
              </p>

              {/* Get Started Button + Icon Buttons Row */}
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
                <Button className="bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold rounded-md">
                  GET STARTED
                </Button>
                <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Apple className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </button>
                <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white" />
                </button>
              </div>
            </div>

            {/* Right Side: Robot Image */}
            <div className="relative w-full max-w-[320px] h-[320px] sm:h-[320px] md:block">
              <Image src="/products/banner.png" alt="ZiBot" fill className="object-contain" />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
