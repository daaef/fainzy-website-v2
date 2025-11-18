"use client";

import { motion } from "motion/react";
import ProductCard from "./ProductCard";
import { StaticImageData } from "next/image";

interface ProductGridItem {
  id: string;
  title: string;
  image: StaticImageData | string;
  learnLink: string;
  orderLink: string;
}

interface ProductsGridProps {
  products: ProductGridItem[];
  title?: string;
  subtitle?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProductsGrid({ products, title, subtitle }: ProductsGridProps) {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              learnLink={product.learnLink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
