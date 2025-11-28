"use client";

import { motion } from "motion/react";
import JobCard from "./JobCard";
import { Job } from "@/lib/api/types";

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

interface JobsGridProps {
  jobs?: Job[] | null;
}

export default function JobsGrid({ jobs }: JobsGridProps) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-400">No open positions available at this time.</p>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="font-bold text-4xl text-white">Open Positions</h2>
        <p className="text-neutral-400">
          {jobs.length} position{jobs.length !== 1 ? 's' : ''} available across multiple departments
        </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariant}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {jobs.map((job, index) => (
          <motion.div key={job?.id || index} variants={itemVariant}>
            <JobCard
              href={`/careers/${job.id}`}
              title={job.title}
              location={job.location}
              date={job.date}
              type={job.type}
              salary={job.salary || ''}
              skills={(job.skills || []).map((s) => s.skill)}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
