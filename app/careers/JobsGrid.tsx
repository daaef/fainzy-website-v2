"use client";

import { motion } from "motion/react";
import JobCard from "./JobCard";
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

export default function JobsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariant}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {jobs.map((job) => (
        <motion.div key={job.id} variants={itemVariant}>
          <JobCard
            href={`/careers/${job.id}`}
            title={job.title}
            location={job.location}
            date={job.date}
            type={job.type}
            salary={job.salary}
            skills={job.skills}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
