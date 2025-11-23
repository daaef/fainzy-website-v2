"use client";

import { motion } from "motion/react";
import DepartmentCard from "./DepartmentCard";
import EngineeringImg from "@/public/careers/engineering.jpg";
import ProductImg from "@/public/careers/product.jpg";
import PeopleImg from "@/public/careers/people.jpg";

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

export default function DepartmentsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariant}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
    >
      <motion.div variants={itemVariant}>
        <DepartmentCard
          image={EngineeringImg}
          title="Engineering & Technology"
          description="Build the future of robotics and AI"
        />
      </motion.div>
      <motion.div variants={itemVariant}>
        <DepartmentCard
          image={ProductImg}
          title="Product & Design"
          description="Shape innovative user experiences"
        />
      </motion.div>
      <motion.div variants={itemVariant}>
        <DepartmentCard
          image={PeopleImg}
          title="Operations & Manufacturing"
          description="Drive excellence in production"
        />
      </motion.div>
    </motion.div>
  );
}
