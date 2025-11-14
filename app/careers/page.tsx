"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import DepartmentCard from "./DepartmentCard";
import JobCard from "./JobCard";

import CareersBanner from "@/public/careers/careers-banner.jpg";
import WorldClass from "@/public/careers/world-class-banner.jpg";
import Continuous from "@/public/careers/continous.jpg";
import Innovation from "@/public/careers/innovation.jpg";
import PeopleImg from "@/public/careers/people.jpg";
import ProductImg from "@/public/careers/product.jpg";
import EngineeringImg from "@/public/careers/engineering.jpg";

import { jobs } from "./jobs";

const containerVariant = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.06,
        },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

export default function CareersPage() {
    return (
        <>
            <header>
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                    <Image src={CareersBanner} alt="careers banner" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,11,0.3)] to-[rgba(10,10,11,0.7)]" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center px-4 sm:px-6 py-24"
                    >
                        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[56px] text-white tracking-[-1.12px] mb-4">
                            Join Us in Building the Future
                        </h1>
                        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto">
                            At Fainzy Technologies, we&apos;re pioneering the next generation of robotics and AI solutions that will transform industries worldwide.
                        </p>
                    </motion.div>
                </section>
            </header>

            <main>
                {/* Intro Paragraph */}
                <section className="py-12 md:py-16">
                    <div className="container">
                        <p className="text-center text-neutral-400 max-w-3xl mx-auto">
                            We&apos;re looking for talented, passionate individuals who want to make a real impact. Whether you&apos;re an engineer, designer, researcher, or operations specialist, there&apos;s a place for you here. Join our team of innovators working on cutting-edge projects that push the boundaries of what&apos;s possible.
                        </p>
                    </div>
                </section>

                {/* Department Cards Section */}
                <section className="py-12 md:py-20">
                    <div className="container">
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariant} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                            <motion.div variants={itemVariant}>
                                <DepartmentCard image={EngineeringImg} title="Engineering & Technology" description="Build the future of robotics and AI" />
                            </motion.div>
                            <motion.div variants={itemVariant}>
                                <DepartmentCard image={ProductImg} title="Product & Design" description="Shape innovative user experiences" />
                            </motion.div>
                            <motion.div variants={itemVariant}>
                                <DepartmentCard image={PeopleImg} title="Operations & Manufacturing" description="Drive excellence in production" />
                            </motion.div>
                        </motion.div>
                        <div className="mt-8 flex justify-center">
                            <Button className="bg-neutral-50 text-[#0a0a0b] rounded-[8px] px-6 py-3 font-semibold">See all Jobs</Button>
                        </div>
                    </div>
                </section>

                {/* Our Mission Section */}
                <section className="py-12 md:py-20 bg-[#0a0a0b]">
                    <div className="container flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] mb-4">Our Mission</h2>
                            <p className="text-neutral-400">To accelerate the world&apos;s transition to sustainable automation through intelligent robotics and AI systems. We believe that by combining human creativity with machine precision, we can solve some of the world&apos;s most pressing challenges while creating meaningful work for our team members.</p>
                        </div>
                        <div className="w-full lg:w-1/2 rounded-[8px] overflow-hidden shadow-xl">
                            <Image src={ProductImg} alt="mission" width={1200} height={800} className="w-full h-64 object-cover" />
                        </div>
                    </div>
                </section>

                {/* World-Class Facilities Section */}
                <section className="relative min-h-[50vh] overflow-hidden">
                    <Image src={WorldClass} alt="world class" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[rgba(10,10,11,0.75)]" />
                    <div className="relative z-10 container py-20">
                        <div className="max-w-2xl">
                            <h2 className="font-bold text-4xl mb-4">World-Class Facilities</h2>
                            <p className="text-neutral-400">Work in state-of-the-art facilities equipped with the latest technology, tools, and resources. Our labs and workspaces are designed to foster innovation and collaboration.</p>
                        </div>
                    </div>
                </section>

                {/* Benefits & Perks Section */}
                <section className="py-16">
                    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="font-bold text-3xl mb-4">Benefits & Perks</h3>
                            <p className="text-neutral-400 mb-6">We believe in taking care of our team members with comprehensive benefits that support your health, growth, and well-being.</p>
                            <ul className="text-neutral-400 list-disc list-inside space-y-2">
                                <li>Competitive salary and equity packages</li>
                                <li>Comprehensive health, dental, and vision insurance</li>
                                <li>Flexible work arrangements and remote options</li>
                                <li>Professional development and learning budgets</li>
                                <li>Generous PTO and parental leave policies</li>
                                <li>Cutting-edge equipment and tools</li>
                            </ul>
                        </div>
                        <div className="rounded-[8px] overflow-hidden shadow-lg h-80">
                            <Image src={EngineeringImg} alt="benefits" className="w-full h-full object-cover" width={1200} height={800} />
                        </div>
                    </div>
                </section>

                {/* Innovation at Scale Section */}
                <section className="py-16 bg-[#0a0a0b]">
                    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="rounded-[8px] overflow-hidden shadow-lg h-80">
                            <Image src={Innovation} alt="innovation" className="w-full h-full object-cover" width={1200} height={800} />
                        </div>
                        <div>
                            <h3 className="font-bold text-3xl mb-4">Innovation at Scale</h3>
                            <p className="text-neutral-400">Work on projects that impact millions of users and transform entire industries. Our team is developing breakthrough technologies in autonomous systems, machine learning, and robotics that will shape the future of work and society.</p>
                        </div>
                    </div>
                </section>

                {/* Continuous Growth Section */}
                <section className="py-16">
                    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="font-bold text-3xl mb-4">Continuous Growth</h3>
                            <p className="text-neutral-400">We invest heavily in our team&apos;s development through mentorship programs, workshops, conferences, and educational opportunities. Your growth is our priority, and we provide the resources and support you need to advance your career.</p>
                        </div>
                        <div className="rounded-[8px] overflow-hidden shadow-lg h-80">
                            <Image src={Continuous} alt="continuous growth" className="w-full h-full object-cover" width={1200} height={800} />
                        </div>
                    </div>
                </section>

                {/* Image Section */}
                <section className="py-0">
                    <div className="w-full h-72 relative overflow-hidden">
                        <Image src={PeopleImg} alt="team" fill className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,11,0.85)] to-transparent" />
                    </div>
                </section>

                {/* Ready to Join Us Section */}
                <section className="py-16 bg-[#0a0a0b]">
                    <div className="container text-center">
                        <h2 className="font-bold text-4xl mb-4">Ready to Join Us?</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto mb-8">Explore our open positions and find the perfect role for you. We&apos;re always looking for talented individuals who share our passion for innovation.</p>
                        <Button asChild>
                            <Link href="#open-positions" className="bg-neutral-50 text-[#0a0a0b] rounded-[8px] px-6 py-3 font-semibold">Explore Open Positions</Link>
                        </Button>
                    </div>
                </section>

                {/* Open Positions Section */}
                <section id="open-positions" className="py-16 bg-[#0a0a0b]">
                    <div className="container">
                        <div className="text-center mb-6">
                            <h2 className="font-bold text-4xl text-white">Open Positions</h2>
                            <p className="text-neutral-400">{jobs.length} positions available across multiple departments</p>
                        </div>

                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={containerVariant} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jobs.map((job) => (
                                <motion.div key={job.id} variants={itemVariant}>
                                    <JobCard href={`/careers/${job.id}`} title={job.title} location={job.location} date={job.date} type={job.type} salary={job.salary} skills={job.skills} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

            </main>
        </>
    );
}
