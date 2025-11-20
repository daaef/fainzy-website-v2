# Fainzy Website v2 - Requirements Specification

## For Media/Design & Backend Development Teams

**Project:** Fainzy Website v2
**Framework:** Next.js 16 + React 19 + TypeScript
**Date:** January 2025
**Status:** In Development

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Image & Media Asset Requirements](#image--media-asset-requirements)
3. [Backend API Requirements](#backend-api-requirements)
4. [Localization Requirements](#localization-requirements)
5. [Environment Configuration](#environment-configuration)

---

## 🎯 Project Overview

### Tech Stack

- **Frontend:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Fonts:** Geist Sans & Mono
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)
- **Carousel:** Embla Carousel

### Application Structure

```
app/
  ├── page.tsx                  # Home page
  ├── about/                    # About us
  ├── products/                 # Products listing & details
  ├── careers/                  # Careers & job listings
  ├── contact/                  # Contact form
  ├── blog/                     # Blog posts
  └── custom-solutions/         # Custom solutions inquiry

components/
  ├── layout/                   # Navbar, Footer
  └── ui/                       # shadcn/ui components
```

---

## 🖼️ Image & Media Asset Requirements

### Overview

**Total Assets:** 65+ images and videos
**Directories:** `/public/`, `/public/about/`, `/public/careers/`, `/public/products/`, `/public/blog/`, `/public/job/`, `/public/slides/`, `/videos/`

---

## HOME PAGE (`app/page.tsx`)

### 1. Hero Carousel Section

#### ZiBot Hero Slide

- **File:** `/public/slides/zibot.png`
- **Page:** Home Page
- **Section:** Hero Carousel - First Slide
- **Associated Text:** Main title "ZiBot" with tagline "Anything Anytime Anywhere Delivery"
- **Recommended Dimensions:** 1600x900px
- **File Type:** PNG
- **Purpose:** Hero banner image for ZiBot product announcement in homepage carousel

#### Glide Hero Slide

- **File:** `/public/slides/glide.png`
- **Page:** Home Page
- **Section:** Hero Carousel - Second Slide
- **Associated Text:** Tagline "Anything Anytime Anywhere Delivery"
- **Recommended Dimensions:** 1600x900px
- **File Type:** PNG
- **Purpose:** Hero banner image for Glide autonomous scooter product in homepage carousel

#### Consultancy Hero Slide

- **File:** `/public/slides/consultancy.png`
- **Page:** Home Page
- **Section:** Hero Carousel - Third Slide
- **Associated Text:** Title "Fainzy Consultancy" with tagline "Anything Anytime Anywhere Delivery"
- **Recommended Dimensions:** 1600x900px
- **File Type:** PNG
- **Purpose:** Hero banner image for Consultancy Services in homepage carousel

---

### 2. Video Section

#### ZiBot Demo Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** Home Page
- **Section:** Video Section (below hero carousel)
- **Associated Text:** Section labeled "video"
- **Current Dimensions:** 640x360px (responsive)
- **File Type:** MP4
- **Attributes:** autoPlay, muted, loop, controls
- **Purpose:** Product demonstration and feature showcase video

---

### 3. Products Section

#### ZiBot Last Mile Delivery Robot

- **File:** `/public/last-delivery.png`
- **Page:** Home Page
- **Section:** Products Section - First Product Card
- **Associated Text:**
  - Title: "ZiBot Last Mile Delivery Robot System"
  - Description: "The Last Mile Delivery System uses our robot to take food deliveries from restaurants to consumers' locations"
  - Features: 24/7 Operation, Cost Effective, Eco-Friendly, Reliable
- **Recommended Dimensions:** 1200x800px
- **File Type:** PNG
- **Purpose:** Main product showcase image for ZiBot with feature highlights

#### Glide Autonomous Scooter

- **File:** `/public/glide.png`
- **Page:** Home Page
- **Section:** Products Section - Second Product Card
- **Associated Text:**
  - Title: "Glide"
  - Description: "Introducing Fainzy's Glide, an innovative autonomous scooter that you can summon just like an Uber"
  - Features: 24/7 Operation, Cost Effective, Eco-Friendly, Reliable
- **Recommended Dimensions:** 1200x800px
- **File Type:** PNG
- **Purpose:** Main product showcase image for Glide autonomous scooter

#### Fainzy Consultancy

- **File:** `/public/products/consultancy.jpg`
- **Page:** Home Page
- **Section:** Products Section - Third Product Card
- **Associated Text:**
  - Title: "Fainzy Consultancy Services"
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG
- **Purpose:** Service offering image for consultancy services

---

### 4. Custom Solutions Carousel

#### Customized Robots

- **File:** `/public/products/custom-solutions.png`
- **Page:** Home Page
- **Section:** Custom Solutions Carousel - Slide 1
- **Associated Text:**
  - Title: "Customized Robots"
  - Description: "Fainzy Technologies can make customized robots suitable for your needs"
- **Recommended Dimensions:** 1200x800px
- **File Type:** PNG
- **Purpose:** Custom robotics solution showcase

#### IoT Solutions

- **File:** `/public/products/consultancy.jpg`
- **Page:** Home Page
- **Section:** Custom Solutions Carousel - Slide 2
- **Associated Text:**
  - Title: "IoT Solutions"
  - Description: "Web Development, Mobile Application Development, Deep learning Algorithm development"
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG
- **Purpose:** Technology and software solutions showcase

#### MiraX In-Restaurant Robot

- **File:** `/public/products/mirax.png`
- **Page:** Home Page
- **Section:** Custom Solutions Carousel - Slide 3
- **Associated Text:**
  - Title: "MiraX"
  - Description: "Our in-restaurant delivery robot designed to minimize physical contact"
- **Recommended Dimensions:** 1200x800px
- **File Type:** PNG
- **Purpose:** Restaurant automation product showcase

#### Efficient Food Ordering System

- **File:** `/public/products/efficient.jpg`
- **Page:** Home Page
- **Section:** Custom Solutions Carousel - Slide 4
- **Associated Text:**
  - Title: "Efficient Food Ordering System"
  - Description: "Connect restaurants and customers on a unified platform"
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG
- **Purpose:** Platform and service offering image

#### Hotel Robot Delivery System

- **File:** `/public/products/hotel.png`
- **Page:** Home Page
- **Section:** Custom Solutions Carousel - Slide 5
- **Associated Text:**
  - Title: "Hotel Robot Delivery System"
  - Description: "In-door hotel delivery robot that handles guest requests"
- **Recommended Dimensions:** 1200x800px
- **File Type:** PNG
- **Purpose:** Hospitality-focused delivery solution showcase

---

## HOME PAGE - ABOUT SECTION (`components/AboutSection.tsx`)

### Purpose Section

#### Purpose Image

- **File:** `/public/purpose.jpg`
- **Page:** Home Page
- **Section:** About Section - Purpose Subsection
- **Associated Text:**
  - Heading: "Purpose"
  - Title: "Revolutionizing Last-Mile Delivery"
  - Description: "To create intelligent, autonomous delivery solutions"
- **Current Dimensions:** min-h-[300px] md:min-h-[500px] lg:min-h-[600px]
- **Recommended Dimensions:** 1920x1080px
- **File Type:** JPG
- **Purpose:** Background image for company purpose statement

---

### Vision & Mission Cards

#### Vision Image

- **File:** `/public/vision.jpg`
- **Page:** Home Page
- **Section:** About Section - Vision Card
- **Associated Text:**
  - Heading: "Vision"
  - Title: "A World Where Robots Serve Humanity"
- **Current Dimensions:** h-[200px] md:h-[250px] lg:h-[280px]
- **Recommended Dimensions:** 800x600px
- **File Type:** JPG
- **Purpose:** Vision statement visual for card background

#### Mission Image

- **File:** `/public/mission.png`
- **Page:** Home Page
- **Section:** About Section - Mission Card
- **Associated Text:**
  - Heading: "Mission"
  - Title: "Pioneering the New Normal"
  - Description: "To develop and deploy advanced robotic delivery systems"
- **Current Dimensions:** h-[400px] md:h-[500px] lg:h-[600px]
- **Recommended Dimensions:** 1200x900px
- **File Type:** PNG
- **Purpose:** Mission statement visual with gradient overlay

---

## ABOUT PAGE (`app/about/page.tsx`)

### 1. Hero Section

#### About Us Hero Banner

- **File:** `/public/about/about-banner.jpg`
- **Page:** About Page
- **Section:** Hero Section (top banner)
- **Associated Text:**
  - Heading: "About Us"
  - Subheading: "All you need to know about us"
- **Recommended Dimensions:** 1920x1080px
- **File Type:** JPG
- **Purpose:** Full-width hero banner with gradient and grid pattern overlay

---

### 2. Company Story Section

#### Founded in 2018

- **File:** `/public/about/founded.jpg`
- **Page:** About Page
- **Section:** Company Story Section
- **Associated Text:**
  - Title: "Founded in 2018. Headquartered in Nagoya."
  - Description: "Founded in 2018 and headquartered in Moscow, Idaho, Fainzy Technologies is at the forefront of robotics and artificial intelligence innovation"
- **Current Dimensions:** h-[300px] sm:h-[400px] lg:h-[500px]
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG
- **Purpose:** Company founding history and headquarters visual

---

### 3. People Banner Section

#### People Behind The Innovation Banner

- **File:** `/public/about/people-banner.jpg`
- **Page:** About Page
- **Section:** People Behind The Innovation Section
- **Associated Text:**
  - Heading: "The People Behind The Innovation"
  - Description: Team overview text about innovation and expertise
- **Recommended Dimensions:** 1920x600px
- **File Type:** JPG
- **Purpose:** Full-width banner introducing team section with gradient overlay

---

### 4. Vision Section

#### Our Vision

- **File:** `/public/about/vision.jpg`
- **Page:** About Page
- **Section:** Vision Section
- **Associated Text:**
  - Heading: "Our Vision"
  - Description: "We envision a world where intelligent machines work seamlessly alongside humans"
- **Current Dimensions:** h-[300px] sm:h-[400px] lg:h-[500px]
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG
- **Purpose:** Company vision statement background image

---

### 5. Team Section

#### Dr. Jude Nwadiuto - Team Photo

- **File:** `/public/about/jude.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 1
- **Associated Text:**
  - Name: "Dr. Jude Nwadiuto"
  - Title: "Co-Founder & CEO"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for CEO team member card

#### Emmanuel Omeogah - Team Photo

- **File:** `/public/about/emmanuel.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 2
- **Associated Text:**
  - Name: "Emmanuel Omeogah"
  - Title: "Co-Founder & Tech Lead"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for Tech Lead team member card

#### Patrick John - Team Photo

- **File:** `/public/about/patrick.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 3
- **Associated Text:**
  - Name: "Patric John"
  - Title: "Co-Founder & Design Lead"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for Design Lead team member card

#### Michael Nwadiuto - Team Photo

- **File:** `/public/about/mike.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 4
- **Associated Text:**
  - Name: "Michael Nwadiuto"
  - Title: "Co-Founder & Project Lead"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for Project Lead team member card

#### Lazarus Nwankwo - Team Photo

- **File:** `/public/about/laz.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 5
- **Associated Text:**
  - Name: "Lazarus Nwankwo"
  - Title: "Developer"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for Developer team member card

#### Prof. Tatsuya Suzuki - Team Photo

- **File:** `/public/about/tatsuya.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 6
- **Associated Text:**
  - Name: "Prof. Tatsuya Suzuki"
  - Title: "Special Advisor"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for Special Advisor team member card

#### Assoc. Prof Hiroyuki Okuda - Team Photo

- **File:** `/public/about/hiroyuki.jpg`
- **Page:** About Page
- **Section:** Team Section - Team Grid Card 7
- **Associated Text:**
  - Name: "Assoc. Prof Hiroyuki Okuda"
  - Title: "Technical Advisor"
- **Recommended Dimensions:** 400x400px (minimum)
- **File Type:** JPG
- **Purpose:** Professional headshot for Technical Advisor team member card

---

### 6. Call-to-Action Section

#### Join Us Banner

- **File:** `/public/about/join.jpg`
- **Page:** About Page
- **Section:** Call-to-Action Section (bottom)
- **Associated Text:**
  - Heading: "Let's do great things together"
  - Description: "We're looking for talented individuals who are passionate about robotics, AI, and building the future"
- **Recommended Dimensions:** 1920x600px
- **File Type:** JPG
- **Purpose:** Recruitment and partnership CTA banner

---

## CAREERS PAGE (`app/careers/page.tsx`)

### 1. Hero Section

#### Careers Hero Banner

- **File:** `/public/careers/careers-banner.jpg`
- **Page:** Careers Page
- **Section:** Hero Section (top banner)
- **Associated Text:**
  - Heading: "Join Us in Building the Future"
  - Description: "At Fainzy Technologies, we're pioneering the next generation of robotics and AI solutions"
- **Recommended Dimensions:** 1920x1080px
- **File Type:** JPG
- **Purpose:** Full-width careers page hero banner

---

### 2. Department Cards Section

#### Engineering & Technology Department

- **File:** `/public/careers/engineering.jpg`
- **Page:** Careers Page
- **Section:** Department Cards - First Card
- **Associated Text:**
  - Title: "Engineering & Technology"
  - Description: "Build the future of robotics and AI"
- **Recommended Dimensions:** 800x600px
- **File Type:** JPG
- **Purpose:** Engineering department showcase image

#### Product & Design Department

- **File:** `/public/careers/product.jpg`
- **Page:** Careers Page
- **Section:** Department Cards - Second Card
- **Associated Text:**
  - Title: "Product & Design"
  - Description: "Shape innovative user experiences"
- **Recommended Dimensions:** 800x600px
- **File Type:** JPG
- **Purpose:** Product and design department showcase image

#### Operations & Manufacturing Department

- **File:** `/public/careers/people.jpg`
- **Page:** Careers Page
- **Section:** Department Cards - Third Card
- **Associated Text:**
  - Title: "Operations & Manufacturing"
  - Description: "Drive excellence in production"
- **Recommended Dimensions:** 800x600px
- **File Type:** JPG
- **Purpose:** Operations department showcase image

---

### 3. Mission Section

#### Mission Image

- **File:** `/public/careers/product.jpg`
- **Page:** Careers Page
- **Section:** Our Mission Section
- **Associated Text:**
  - Heading: "Our Mission"
  - Description: "To accelerate the world's transition to sustainable automation"
- **Current Dimensions:** w-full h-64 object-cover
- **Recommended Dimensions:** 1200x500px
- **File Type:** JPG
- **Purpose:** Mission statement background visual

---

### 4. World-Class Facilities Section

#### World-Class Facilities Banner

- **File:** `/public/careers/world-class-banner.jpg`
- **Page:** Careers Page
- **Section:** World-Class Facilities Section
- **Associated Text:**
  - Heading: "World-Class Facilities"
  - Description: "Work in state-of-the-art facilities equipped with the latest technology"
- **Recommended Dimensions:** 1920x800px
- **File Type:** JPG
- **Purpose:** Facilities showcase banner with gradient overlay

---

### 5. Benefits & Perks Section

#### Benefits Image

- **File:** `/public/careers/engineering.jpg`
- **Page:** Careers Page
- **Section:** Benefits & Perks Section
- **Associated Text:**
  - Heading: "Benefits & Perks"
  - List: Competitive salary, health insurance, flexible work, professional development, etc.
- **Current Dimensions:** h-80 object-cover
- **Recommended Dimensions:** 1200x400px
- **File Type:** JPG
- **Purpose:** Employee benefits visualization

---

### 6. Innovation Section

#### Innovation at Scale

- **File:** `/public/careers/innovation.jpg`
- **Page:** Careers Page
- **Section:** Innovation at Scale Section
- **Associated Text:**
  - Heading: "Innovation at Scale"
  - Description: "Work on projects that impact millions of users"
- **Current Dimensions:** h-80 object-cover
- **Recommended Dimensions:** 1200x400px
- **File Type:** JPG
- **Purpose:** Innovation and impact visualization

---

### 7. Growth Section

#### Continuous Growth

- **File:** `/public/careers/continous.jpg`
- **Page:** Careers Page
- **Section:** Continuous Growth Section
- **Associated Text:**
  - Heading: "Continuous Growth"
  - Description: "We invest heavily in our team's development"
- **Current Dimensions:** h-80 object-cover
- **Recommended Dimensions:** 1200x400px
- **File Type:** JPG
- **Purpose:** Professional development and learning visualization

---

### 8. Team Section

#### Team Image

- **File:** `/public/careers/people.jpg`
- **Page:** Careers Page
- **Section:** Team Section (below "Ready to Join Us?")
- **Associated Text:** Team cohesion context
- **Current Dimensions:** h-72 full width with gradient overlay
- **Recommended Dimensions:** 1920x500px
- **File Type:** JPG
- **Purpose:** Team culture and collaboration visual

---

## JOB DETAIL PAGE (`app/careers/[id]/JobDetailClient.tsx`)

### 1. Hero Section

#### Job Detail Banner

- **File:** `/public/job/job-banner.jpg`
- **Page:** Job Detail Page
- **Section:** Hero Section (top banner)
- **Associated Text:**
  - Job title (dynamic per job posting)
  - Job metadata: location, employment type, salary range
- **Current Dimensions:** h-[472px] full width
- **Recommended Dimensions:** 1920x600px
- **File Type:** JPG
- **Purpose:** Job posting hero banner background

---

### 2. CTA Section

#### Join Us CTA Image

- **File:** `/public/careers/join-us.jpg`
- **Page:** Job Detail Page
- **Section:** Call-to-Action Section (bottom)
- **Associated Text:**
  - Heading: "Let's do great things together"
  - Description: "We're looking for talented individuals who are passionate about robotics"
- **Current Dimensions:** min-h-[400px] md:min-h-[500px] lg:min-h-[551px]
- **Recommended Dimensions:** 1920x700px
- **File Type:** JPG
- **Purpose:** Application encouragement CTA banner

---

## PRODUCTS PAGE (`app/products/page.tsx`)

### 1. Hero Section

#### Products Hero Banner

- **File:** `/public/careers/careers-banner.jpg`
- **Page:** Products Page
- **Section:** Hero Section (top banner)
- **Associated Text:**
  - Heading: "Our Products & Services"
  - Description: "At Fainzy Technologies, we're pioneering the next generation of robotics and AI solutions"
- **Recommended Dimensions:** 1920x1080px
- **File Type:** JPG
- **Purpose:** Products page hero banner

**Note:** Products section and Custom Solutions section share the same assets as Home Page (see Home Page sections 3 & 4)

---

## ZIBOT PRODUCT DETAIL PAGE (`app/products/[id]/page.tsx`)

### 1. Hero Section

#### ZiBot Hero Background Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** ZiBot Product Detail Page
- **Section:** Hero Section (background video)
- **Associated Text:**
  - Title: "ZIBOT"
  - Tagline: "ANYTHING - ANYTIME - ANYWHERE DELIVERY"
- **File Type:** MP4
- **Video Attributes:** autoPlay, loop, muted, playsInline
- **Purpose:** Hero background video with gradient overlay for immersive product introduction

---

### 2. Feature Carousel (External Images)

**Note:** The following images use Unsplash external URLs

#### 24/7 Availability Feature Image

- **File:** Unsplash external URL
- **Page:** ZiBot Product Detail Page
- **Section:** Feature Carousel - Slide 1
- **Associated Text:**
  - Title: "24/7 Availability"
  - Description: "Robots don't need to sleep or rest... can operate 24/7"
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Feature showcase for 24/7 operation capability

#### All-Weather Operation Feature Image

- **File:** Unsplash external URL
- **Page:** ZiBot Product Detail Page
- **Section:** Feature Carousel - Slide 2
- **Associated Text:**
  - Title: "All-Weather Operation"
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Feature showcase for weather resistance

#### Zero Contact Feature Image

- **File:** Unsplash external URL
- **Page:** ZiBot Product Detail Page
- **Section:** Feature Carousel - Slide 3
- **Associated Text:**
  - Title: "Zero Contact"
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Feature showcase for contactless delivery

---

### 3. Product Demo Videos

#### From Cozy Dinners Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** ZiBot Product Detail Page
- **Section:** Video Section 1
- **Associated Text:**
  - Heading: "From Cozy Dinners to Office Lunches"
  - Description: "ZiBot ensures your orders are delivered promptly and accurately"
- **File Type:** MP4
- **Purpose:** Product feature demonstration video showcasing delivery scenarios

#### Hot and Fresh Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** ZiBot Product Detail Page
- **Section:** Video Section 2
- **Associated Text:**
  - Heading: "Hot and Fresh. Every Single Time"
  - Description: "Contactless, clean, and exactly when you need it"
- **File Type:** MP4
- **Purpose:** Quality assurance and delivery freshness video

#### Built to Operate Safely Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** ZiBot Product Detail Page
- **Section:** Video Section 3
- **Associated Text:**
  - Heading: "Built to Operate Safely"
- **File Type:** MP4
- **Purpose:** Safety features and operation video

---

### 4. Robot Comparison Section

#### Mileage/Range Specification Image

- **File:** `/public/products/milage.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Robot Comparison Section
- **Associated Text:**
  - Specifications: "20km Range per charge, 30kg Payload, 5 km/h Speed"
- **File Type:** PNG
- **Purpose:** Product specification comparison visualization

---

### 5. Navigation Features Section

#### Navigate Environment Image

- **File:** `/public/products/navigate.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Navigate Environment Section
- **Associated Text:**
  - Title: "Navigate Any Environment"
  - Features: 6 navigation features grid (GPS, Obstacle Detection, etc.)
- **File Type:** PNG
- **Purpose:** Navigation capabilities and technology visualization

---

### 6. Specifications Section

#### Specifications Image

- **File:** `/public/products/specs.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Specifications Section
- **Associated Text:**
  - Heading: "ZIBOT Specifications"
  - Details: Performance, Dimensions, Battery, Control specifications
- **File Type:** PNG
- **Purpose:** Comprehensive product specifications visual

---

### 7. Reasons Section

#### Six Reasons Image

- **File:** `/public/products/reasons.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Six Reasons Section
- **Associated Text:**
  - Heading: "Six Reasons to Choose ZiBot"
  - Points: Speed, Contactless, Consistency, Accuracy, Entertainment, Cost-Effective
- **File Type:** PNG
- **Purpose:** Value proposition grid visualization

---

### 8. Launch Steps Section

#### Launch Steps Image

- **File:** `/public/products/navigate.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Go Live in 6 Steps Section
- **Associated Text:**
  - Heading: "Go Live in 6 Simple Steps"
  - Steps: Setup and onboarding process
- **File Type:** PNG
- **Purpose:** Onboarding and implementation process visual

---

### 9. Order Steps Section

#### Order Steps Image

- **File:** `/public/products/order-in-3.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Order in 3 Steps Section
- **Associated Text:**
  - Heading: "Order in 3 Easy Steps"
  - Steps: Location, Browse, Track
- **File Type:** PNG
- **Purpose:** Customer ordering process visualization

---

### 10. Pricing Section

#### Pricing Robot Image

- **File:** `/public/products/built-to-handle.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Pricing Section
- **Associated Text:**
  - Heading: "Built to handle reality. Priced to handle growth"
- **File Type:** PNG
- **Purpose:** Pricing context and product durability visual

---

### 11. Footer CTA Section

#### Banner Image

- **File:** `/public/products/banner.png`
- **Page:** ZiBot Product Detail Page
- **Section:** Footer CTA Section
- **Associated Text:**
  - Title: "ZIBOT"
  - CTA: "Ready to Transform Your Delivery?"
- **File Type:** PNG
- **Purpose:** Footer call-to-action banner

---

### 12. Business Operations Video

#### Transform Business Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** ZiBot Product Detail Page
- **Section:** Transform Business Operations Section
- **Associated Text:**
  - Heading: "Transform Your Business Operations"
  - Stats: 30% Cost Savings, 15% Fee, 6 Steps
- **File Type:** MP4
- **Purpose:** Business benefits and ROI demonstration video

---

### 13. Final CTA Video

#### No Boundaries Video

- **File:** `/public/videos/zibot.mp4`
- **Page:** ZiBot Product Detail Page
- **Section:** No Boundaries Section
- **Associated Text:**
  - Heading: "No Boundaries. No Limits"
  - Description: Indoor, outdoor, day, night, any conditions
- **File Type:** MP4
- **Purpose:** Capabilities and versatility showcase video

---

## BLOG PAGE (`app/blog/page.tsx`)

### 1. Featured Post Section

#### Featured Blog Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Featured Post Section (top)
- **Associated Text:**
  - Title: "The Future of Autonomous Delivery: How ZiBot is Revolutionizing Last-Mile Logistics"
  - Description: "Discover how our flagship robot ZiBot is transforming the delivery industry"
- **Current Dimensions:** h-64 md:h-[548px]
- **Recommended Dimensions:** 1200x800px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Featured article hero image

---

### 2. Blog Post Grid (6 Posts with External Images)

**Note:** All blog post images use Unsplash external URLs

#### Blog Post 1 Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Recent Posts Grid - Card 1
- **Associated Text:**
  - Title: "5 Ways Autonomous Robots Are Transforming the Hospitality Industry"
- **Current Dimensions:** h-48 md:h-56
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Blog post preview thumbnail

#### Blog Post 2 Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Recent Posts Grid - Card 2
- **Associated Text:**
  - Title: "AI and Machine Learning: The Brain Behind Smart Delivery Robots"
- **Current Dimensions:** h-48 md:h-56
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Blog post preview thumbnail

#### Blog Post 3 Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Recent Posts Grid - Card 3
- **Associated Text:**
  - Title: "Customer Success Story: How Restaurant Chain MiraX Increased Efficiency by 40%"
- **Current Dimensions:** h-48 md:h-56
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Blog post preview thumbnail

#### Blog Post 4 Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Recent Posts Grid - Card 4
- **Associated Text:**
  - Title: "The Sensor Technology That Makes Autonomous Navigation Possible"
- **Current Dimensions:** h-48 md:h-56
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Blog post preview thumbnail

#### Blog Post 5 Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Recent Posts Grid - Card 5
- **Associated Text:**
  - Title: "Building Tomorrow's Workforce: Careers in Robotics at Fainzy Technologies"
- **Current Dimensions:** h-48 md:h-56
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Blog post preview thumbnail

#### Blog Post 6 Image

- **File:** Unsplash external URL
- **Page:** Blog Page
- **Section:** Recent Posts Grid - Card 6
- **Associated Text:**
  - Title: "Sustainability in Robotics: How ZiBot Reduces Carbon Footprint"
- **Current Dimensions:** h-48 md:h-56
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Blog post preview thumbnail

---

## BLOG DETAIL PAGE (`app/blog/[id]/page.tsx`)

### 1. Hero Section

#### Blog Post Hero Image

- **File:** Unsplash external URL
- **Page:** Blog Detail Page
- **Section:** Hero Section (top)
- **Associated Text:**
  - Title: "5 Ways Autonomous Robots Are Transforming the Hospitality Industry"
  - Description: "The hospitality industry is experiencing a technological revolution"
- **Current Dimensions:** h-[500px] full width
- **Recommended Dimensions:** 1920x800px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Article hero banner image

---

### 2. Inline Content Images

#### Hotel Lobby Modern Image

- **File:** Unsplash external URL
- **Page:** Blog Detail Page
- **Section:** Section 2: Enhanced Guest Experiences
- **Associated Text:**
  - Section Heading: "2. Enhanced Guest Experiences Through Technology"
- **Current Dimensions:** h-64 md:h-80 lg:h-96
- **Recommended Dimensions:** 1200x600px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Section illustrative content image

#### Restaurant Robot Image

- **File:** Unsplash external URL
- **Page:** Blog Detail Page
- **Section:** Section 4: Cost Efficiency and ROI
- **Associated Text:**
  - Section Heading: "4. Cost Efficiency and Strong ROI"
- **Current Dimensions:** h-64 md:h-80 lg:h-96
- **Recommended Dimensions:** 1200x600px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Section illustrative content image

---

### 3. Related Articles Section

#### Related Article 1 Image

- **File:** Unsplash external URL
- **Page:** Blog Detail Page
- **Section:** Similar Articles Section - Card 1
- **Associated Text:**
  - Title: "AI and Machine Learning: The Brain Behind Smart Delivery Robots"
- **Current Dimensions:** h-48 md:h-52
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Related article preview thumbnail

#### Related Article 2 Image

- **File:** Unsplash external URL
- **Page:** Blog Detail Page
- **Section:** Similar Articles Section - Card 2
- **Associated Text:**
  - Title: "How Restaurant Chain MiraX Increased Efficiency by 40%"
- **Current Dimensions:** h-48 md:h-52
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Related article preview thumbnail

#### Related Article 3 Image

- **File:** Unsplash external URL
- **Page:** Blog Detail Page
- **Section:** Similar Articles Section - Card 3
- **Associated Text:**
  - Title: "The Sensor Technology That Makes Autonomous Navigation Possible"
- **Current Dimensions:** h-48 md:h-52
- **Recommended Dimensions:** 600x400px
- **File Type:** JPG (external from Unsplash)
- **Purpose:** Related article preview thumbnail

---

### 4. CTA Section

#### Fainzy Logo

- **File:** `/public/logo.png`
- **Page:** Blog Detail Page
- **Section:** CTA Section (bottom)
- **Associated Text:**
  - Heading: "Be Part of the Future Tech Revolution"
- **Current Dimensions:** size-16 md:size-20 in circular gradient container
- **Recommended Dimensions:** 120x60px (display size)
- **File Type:** PNG with transparency
- **Purpose:** Brand identity logo in call-to-action section

---

## CUSTOM SOLUTIONS PAGE (`app/custom-solutions/page.tsx`)

### Carousel Images

#### Consultancy Slide

- **File:** `/public/slides/consultancy.png`
- **Page:** Custom Solutions Page
- **Section:** Solutions Carousel - Slide 1
- **Associated Text:**
  - Title: "Fainzy Consultancy"
  - Description: "The Last Mile Delivery System uses our robot"
- **Recommended Dimensions:** 1600x900px
- **File Type:** PNG
- **Purpose:** Custom consultancy solution showcase

#### Customized Robot Slide

- **File:** `/public/last-delivery.png`
- **Page:** Custom Solutions Page
- **Section:** Solutions Carousel - Slide 2
- **Associated Text:**
  - Title: "Customized Robots"
  - Description: "Fainzy Technologies can make customized robots"
- **Recommended Dimensions:** 1600x900px
- **File Type:** PNG
- **Purpose:** Custom robotics solution showcase

#### IoT Solutions Slide

- **File:** `/public/glide.png`
- **Page:** Custom Solutions Page
- **Section:** Solutions Carousel - Slide 3
- **Associated Text:**
  - Title: "IoT Solutions"
  - Description: "Web Development, Mobile Application Development"
- **Recommended Dimensions:** 1600x900px
- **File Type:** PNG
- **Purpose:** IoT and software solutions showcase

---

## SHARED ASSETS (Navbar & Footer)

### Logo

- **File:** `/public/logo.png`
- **Usage:** Navbar (all pages), Footer (all pages)
- **Associated Text:** "Fainzy" brand name
- **Display Dimensions:** 120x60px (navbar), varies in footer
- **File Type:** PNG with transparency
- **Purpose:** Primary brand logo for site-wide navigation and branding

---

## 📊 Asset Summary & Statistics

### Total Asset Count: 65+

#### By Directory:

- `/public/` root: 5 files (logo, purpose, vision, mission, last-delivery, glide)
- `/public/about/`: 12 files (banner, team photos, vision, founded, people-banner, join)
- `/public/careers/`: 9 files (banners, department images, benefits/growth/innovation images)
- `/public/products/`: 14 files (product images, specs, features, solutions)
- `/public/slides/`: 3 files (zibot, glide, consultancy carousel slides)
- `/public/job/`: 1 file (job-banner)
- `/public/videos/`: 1 video file (zibot.mp4, reused 6+ times across pages)

#### By File Type:

- **PNG:** ~25 files (logos, graphics, product images, infographics)
- **JPG:** ~35 files (photographs, banners, team photos, lifestyle images)
- **MP4:** 1 unique video file (zibot.mp4)
- **External (Unsplash):** 15+ images (blog posts and features)

#### By Purpose:

- **Hero Banners:** 8 files
- **Team Photos:** 7 files
- **Product Showcases:** 12 files
- **Carousel Slides:** 3 files
- **Feature/Spec Visuals:** 10 files
- **Department/Benefits:** 9 files
- **Videos:** 1 file (multiple uses)
- **Blog Images:** 15+ external
- **Logos/Branding:** 1 file

---

## 🎨 Image Format & Optimization Guidelines

### Recommended File Formats

#### For Logos & Icons

- **Format:** PNG with transparency
- **Color Mode:** RGBA
- **Optimization:** Use compression tools (TinyPNG, ImageOptim)
- **Purpose:** Branding, UI elements

#### For Photography

- **Format:** JPG
- **Quality:** 80% (optimized)
- **Color Mode:** RGB
- **Purpose:** Team photos, banners, lifestyle images

#### For Graphics & Illustrations

- **Format:** PNG or SVG
- **SVG:** Preferred for icons and simple graphics
- **PNG:** For complex graphics with gradients
- **Purpose:** Product specs, infographics, feature visuals

#### For Videos

- **Format:** MP4 (H.264 codec)
- **Resolution:** 1080p maximum
- **File Size:** Under 10MB recommended
- **Attributes:** Should support autoPlay, loop, muted for background videos

---

## 📐 Recommended Dimensions by Asset Type

| Asset Type          | Recommended Dimensions | Current Usage           | Notes                                  |
| ------------------- | ---------------------- | ----------------------- | -------------------------------------- |
| **Hero Banners**    | 1920x1080px            | Full-width page headers | Used on Home, About, Careers, Products |
| **Carousel Slides** | 1600x900px             | Homepage carousel       | ZiBot, Glide, Consultancy slides       |
| **Product Images**  | 1200x800px             | Product showcases       | ZiBot, Glide, Custom Solutions         |
| **Team Photos**     | 400x400px minimum      | Team member cards       | Square headshots                       |
| **Blog Thumbnails** | 600x400px              | Blog listing grid       | Blog post previews                     |
| **Section Banners** | 1920x600-800px         | Mid-page banners        | People, Facilities, Join Us            |
| **Feature Images**  | 1200x600px             | Feature grids           | Benefits, specs, navigation            |
| **Icons/Graphics**  | 512x512px              | UI elements             | Infographics, feature icons            |
| **Logos**           | 120x60px (display)     | Navbar, footer          | PNG with transparency                  |
| **Videos**          | 1920x1080px (1080p)    | Background, demos       | MP4, H.264, under 10MB                 |

---

## 🔧 Next.js Image Optimization

All images use Next.js `<Image>` component which provides:

- Automatic image optimization
- Responsive sizing
- Lazy loading by default
- WebP/AVIF format conversion (automatic)
- Blur placeholder support

### External Image Configuration

**Configured in `next.config.ts`:**

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

**Unsplash URL Pattern:**

```
https://images.unsplash.com/photo-[ID]?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=[WIDTH]
```

**Image Sizes Used:**

- `w=1200&q=80` - Hero/banner images
- `w=600&q=80` - Card images
- `w=400&q=80` - Thumbnails

---

## ✅ Image Asset Checklist

### For Media Team:

- [ ] All images optimized (JPG at 80% quality, PNG compressed)
- [ ] Correct dimensions for each asset type
- [ ] Alt text prepared for accessibility
- [ ] File naming convention followed (lowercase, hyphens)
- [ ] Transparency preserved for PNG logos
- [ ] Videos under 10MB, 1080p max resolution
- [ ] Team photos are professional headshots (400x400px minimum)
- [ ] Hero banners are high resolution (1920x1080px)

### Missing Assets:

✅ **No missing assets** - All referenced images exist in the project

---

# 🔌 Backend API Requirements

## Overview

The website requires **5 API endpoints** to handle form submissions and user interactions. Below are the specifications for each API.

---

## API 1: Contact Form Submission

**API for:** Contact page form submission that sends contact inquiry data

**Location:**

- `/app/contact/page.tsx` (line 25)
- `/app/contact/ContactFormClient.tsx` (line 37)

**Current Status:** Placeholder with 700ms timeout (no backend integration)

### Request Data:

- `name` - Contact person's full name (string, required, 2-100 characters)
- `email` - Email address (string, required, valid email format)
- `phone` - Phone number (string, optional, valid phone format)
- `subject` - Subject line (string, required)
- `message` - Main message content (string, required, minimum 10 characters)
- `reason` - Inquiry reason (string, required, one of: "general", "partnership", "support", "sales", "feedback", "other")

### Response Data:

- `success` - Boolean indicating success/failure
- `message` - Confirmation message (e.g., "Thanks — we'll be in touch shortly.")
- `error` - Error message if submission failed (optional)

---

## API 2: Job Application Submission

**API for:** Job application form that sends candidate application data including resume file upload

**Location:**

- `/app/careers/[id]/JobDetailClient.tsx` (lines 270-366)

**Current Status:** Form exists but no submission handler implemented

### Request Data:

- `name` - Applicant's full name (string, required)
- `email` - Email address (string, required, valid email format)
- `phone` - Phone number (string, required)
- `resume` - Resume/CV file (file, required, PDF/DOC/DOCX formats, max 10MB)
- `coverletter` - Cover letter text (string, required, minimum 100 characters)
- `terms` - Terms and privacy policy agreement (boolean, required, must be true)
- `jobId` - Job posting ID (string, implicit from URL parameter)

### Response Data:

- `success` - Boolean indicating success/failure
- `message` - Confirmation message
- `applicationId` - Unique application ID (optional)
- `error` - Error message if submission failed (optional)

---

## API 3: Custom Solutions Inquiry

**API for:** Custom solutions request form that sends project inquiry and requirements

**Location:**

- `/app/custom-solutions/page.tsx` (lines 110-229)

**Current Status:** Form exists but no submission handler implemented

### Request Data:

- `name` - Full name (string, required)
- `email` - Email address (string, required, valid email format)
- `company` - Company name (string, optional)
- `phone` - Phone number (string, optional)
- `solution-type` - Type of solution needed (string, required, one of: "customized-robots", "iot-solutions", "consultancy", "software-development", "ai-ml", "other")
- `description` - Project description and requirements (string, required)
- `budget` - Budget range (string, optional, one of: "under-50k", "50k-100k", "100k-250k", "250k-500k", "500k-plus", "to-be-discussed")

### Response Data:

- `success` - Boolean indicating success/failure
- `message` - Confirmation message
- `inquiryId` - Unique inquiry ID (optional)
- `error` - Error message if submission failed (optional)

---

## API 4: Newsletter Subscription

**API for:** Newsletter signup form that sends subscriber email address

**Location:**

- `/app/blog/page.tsx` (lines 227-247)

**Current Status:** Form UI exists but no backend integration

### Request Data:

- `email` - Subscriber email address (string, required, valid email format)

### Response Data:

- `success` - Boolean indicating success/failure
- `message` - Confirmation message (e.g., "Successfully subscribed to newsletter")
- `alreadySubscribed` - Boolean indicating if email already exists (optional)
- `error` - Error message if subscription failed (optional)

---

## API 5: Blog Post Likes

**API for:** Blog article like/unlike functionality that sends interaction data

**Location:**

- `/app/blog/[id]/LikeButton.tsx` (lines 14-21)

**Current Status:** Client-side only with local state (no persistence)

### Request Data:

- `articleId` - Blog post ID (string, implicit from URL parameter)
- `isLiked` - Like/unlike action (boolean)
- `likes` - Updated like count (number)

### Response Data:

- `success` - Boolean indicating success/failure
- `likes` - Updated total like count (number)
- `isLiked` - Current user's like status (boolean)
- `error` - Error message if update failed (optional)

---

## 🔗 External Service Integration

### Google Maps API

**Status:** ✅ Working and integrated

**Location:** `/app/contact/MapClient.tsx`

**API Key Environment Variable:**

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyDp2HYHXxfnandJWObViW8N_-OG5EJFS9w
```

**Configuration:**

- Endpoint: `https://maps.googleapis.com/maps/api/js`
- Features: Map rendering, Markers, Geocoding, Dark mode styling
- Location: Nagoya University Incubation Facility (Lat: 35.1538, Lng: 136.9699)
- Zoom Level: 17

**APIs Enabled:**

- Maps JavaScript API
- Geocoding API

---

### External Dashboard Links

**Business Dashboard:** `https://dashboard-v2-inky.vercel.app/`
**Login Page:** `https://dashboard-v2-inky.vercel.app/login`

**Location:** `/components/layout/navbar.tsx` (lines 76-77)

**Note:** These are external navigation links only - no API integration required

---

## API Summary Table

| API Endpoint     | Feature           | Page              | Data Sent                                                       | Status           |
| ---------------- | ----------------- | ----------------- | --------------------------------------------------------------- | ---------------- |
| Contact Form     | Contact inquiry   | /contact          | name, email, phone, subject, message, reason                    | Placeholder      |
| Job Application  | Job applications  | /careers/[id]     | name, email, phone, resume, coverletter, terms                  | Not implemented  |
| Custom Solutions | Solutions inquiry | /custom-solutions | name, email, company, phone, solution-type, description, budget | Not implemented  |
| Newsletter       | Newsletter signup | /blog             | email                                                           | Not implemented  |
| Blog Likes       | Article likes     | /blog/[id]        | articleId, isLiked, likes                                       | Client-side only |

---

# 🌍 Localization Requirements

## Current Implementation

**Status:** Partially implemented with custom React Context

**Framework:** Custom LocaleContext (`contexts/LocaleContext.tsx`)

**Supported Languages:**

- 🇬🇧 English (`en`)
- 🇯🇵 Japanese (`ja`)

**Features:**

- ✅ Browser language detection
- ✅ localStorage persistence
- ✅ Language switcher in navbar (Globe icon)
- ❌ Translation system not centralized
- ❌ Most content hardcoded in English

---

## Current Usage Pattern

**Example from `MapClient.tsx`:**

```typescript
const { locale } = useLocale();

const markerTitle =
  locale === "ja" ? "名古屋大学 インキュベーション施設" : "Nagoya University Incubation Facility";
```

**Issue:** Using inline ternary operators throughout codebase instead of centralized translation files.

---

## Translation Requirements

### Pages Requiring Full Translation

| Page     | Estimated Strings | Priority | Status                  |
| -------- | ----------------- | -------- | ----------------------- |
| Home     | ~50 strings       | Critical | Not translated          |
| About    | ~40 strings       | Critical | Not translated          |
| Products | ~60 strings       | Critical | Not translated          |
| Contact  | ~20 strings       | Critical | Partial (1 string only) |
| Careers  | ~100 strings      | High     | Not translated          |
| Blog     | ~50 strings       | Medium   | Not translated          |
| Footer   | ~15 strings       | Critical | Not translated          |

**Total Estimated:** ~335+ unique strings

---

## Content Categories

### 1. UI Labels & Buttons

- Navigation links ("HOME", "ABOUT", "PRODUCTS", etc.)
- Button text ("Learn More", "Contact Us", "Apply Now")
- Form labels ("Name", "Email", "Message")
- Validation messages
- Success/error messages

### 2. Marketing Copy

- Hero section headlines
- Product descriptions
- Feature benefits
- Company mission/vision
- Team member bios

### 3. Dynamic Content

- Blog post titles and descriptions
- Job postings (titles, descriptions, requirements)
- Product specifications
- FAQ content

### 4. SEO Metadata

- Page titles
- Meta descriptions
- Open Graph tags

---

# ⚙️ Environment Configuration

## Current Environment Variables

**File:** `.env`

```env
# Google Maps API (Public - Client-side)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyDp2HYHXxfnandJWObViW8N_-OG5EJFS9w
```

---

## Required Environment Variables

### Development (`.env.local`)

```env
# Google Maps (Client-side - Public)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Application Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### Production (Vercel Environment Variables)

```env
# Google Maps (Client-side - Public)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_production_google_maps_api_key

# Application Settings
NEXT_PUBLIC_SITE_URL=https://fainzy.com
NODE_ENV=production
```

---

## Environment Variable Guidelines

### Public vs Private

- **Public (`NEXT_PUBLIC_*`):** Exposed to browser (use for client-side APIs only)
  - Google Maps API key
  - Site URL
  - Public feature flags

- **Private (no prefix):** Server-side only (NEVER exposed to browser)
  - Email API keys
  - Database credentials
  - Secret keys

---

**Last Updated:** January 2025
**Document Version:** 2.0
**Status:** Ready for Media & Backend Teams

---

_End of Requirements Specification_
