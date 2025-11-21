"use client";

import Link from "next/link";
import Image from "next/image";
import { Bell, Globe, User, Menu, X, Headset, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "@/contexts/LocaleContext";

export default function Navbar() {
  const { locale, setLocale } = useLocale();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  // Close dropdowns with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsProductsMenuOpen(false);
        setIsLangMenuOpen(false);
        setIsMobileProductsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Check if at top
      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);

        // Check scroll direction
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
    { name: "BLOG", href: "/blog" },
    { name: "BUSINESS", href: "https://dashboard-v2-inky.vercel.app/" },
    { name: "LOGIN", href: "https://dashboard-v2-inky.vercel.app/login" },
  ];

  const productItems = [
    {
      name: "ZiBot",
      href: "/products/zibot",
      image: "/last-delivery.png",
      description: "Last Mile Delivery Robot",
    },
    {
      name: "Glide",
      href: "/products/glide",
      image: "/glide.png",
      description: "Autonomous Scooter",
    },
    {
      name: "Consultancy",
      href: "/products/consultancy",
      image: "/slides/consultancy.png",
      description: "Robotics & AI Advisory",
    },
  ];

  const customSolutionsItems = [
    {
      name: "Hotel Delivery",
      href: "/custom-solutions/hotel",
      image: "/products/hotel.png",
      description: "Automated in-hotel service",
    },
    {
      name: "Hospital Logistics",
      href: "/custom-solutions/hospital",
      image: "/products/custom-solutions.png",
      description: "Medical supply automation",
    },
    {
      name: "Enterprise Solutions",
      href: "/custom-solutions/enterprise",
      image: "/products/mirax.png",
      description: "Custom robotics integration",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAtTop && !isProductsMenuOpen && !isMobileMenuOpen
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-sm"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      data-name="Nav"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/logo.png"
              alt="Fainzy"
              width={120}
              height={60}
              className="h-16 sm:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, i) => {
              if (link.name === "PRODUCTS") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsProductsMenuOpen(true)}
                    onMouseLeave={() => setIsProductsMenuOpen(false)}
                  >
                    <Link href={link.href} className="leading-[96px]">
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -2 }}
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors inline-block cursor-pointer"
                        aria-haspopup="true"
                        aria-expanded={isProductsMenuOpen}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                    <AnimatePresence>
                      {isProductsMenuOpen && (
                        <>
                          {/* Backdrop */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                            style={{ top: "88px" }}
                            onClick={() => setIsProductsMenuOpen(false)}
                          />

                          {/* Full-screen dropdown */}
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="fixed left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-[rgba(255,255,255,0.08)] shadow-2xl"
                            style={{ top: "88px" }}
                          >
                            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 py-8">
                              <div className="flex gap-8">
                                <div className="flex-1">
                                  {/* Products Grid */}
                                  <div className="grid grid-cols-3 gap-6 mb-8">
                                    {productItems.map((product) => (
                                      <Link
                                        key={product.name}
                                        href={product.href}
                                        className="group flex flex-col items-center p-6 rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                        onClick={() => setIsProductsMenuOpen(false)}
                                      >
                                        <div className="relative w-full h-40 mb-4">
                                          <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain group-hover:scale-105 transition-transform"
                                          />
                                        </div>
                                        <h3 className="text-base font-semibold text-white mb-2">
                                          {product.name}
                                        </h3>
                                        <p className="text-sm text-neutral-400 text-center mb-4">
                                          {product.description}
                                        </p>
                                        <div className="flex gap-6 text-sm">
                                          <span className="text-neutral-400 hover:text-white underline underline-offset-4">
                                            Learn more
                                          </span>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>

                                  {/* Divider */}
                                  <div className="border-t border-[rgba(255,255,255,0.08)] mb-6" />

                                  {/* Custom Solutions Section */}
                                  <div className="mb-4">
                                    <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-4 px-6">
                                      Custom Solutions
                                    </h4>
                                    <div className="grid grid-cols-3 gap-6">
                                      {customSolutionsItems.map((solution) => (
                                        <Link
                                          key={solution.name}
                                          href={solution.href}
                                          className="group flex flex-col items-center p-6 rounded-xl hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                          onClick={() => setIsProductsMenuOpen(false)}
                                        >
                                          <div className="relative w-full h-32 mb-4">
                                            <Image
                                              src={solution.image}
                                              alt={solution.name}
                                              fill
                                              className="object-contain group-hover:scale-105 transition-transform"
                                            />
                                          </div>
                                          <h3 className="text-sm font-semibold text-white mb-2">
                                            {solution.name}
                                          </h3>
                                          <p className="text-xs text-neutral-400 text-center mb-3">
                                            {solution.description}
                                          </p>
                                          <span className="text-xs text-neutral-400 hover:text-white underline underline-offset-4">
                                            Explore
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Sidebar */}
                                <div className="w-56 border-l border-[rgba(255,255,255,0.08)] pl-8 flex flex-col gap-4">
                                  <h4 className="text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-2">
                                    More
                                  </h4>
                                  <Link
                                    href="/products"
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    onClick={() => setIsProductsMenuOpen(false)}
                                  >
                                    View All Products
                                  </Link>
                                  <Link
                                    href="/custom-solutions"
                                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    onClick={() => setIsProductsMenuOpen(false)}
                                  >
                                    All Custom Solutions
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="text-sm leading-[96px] font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Support"
              >
                <Headset className="w-5 h-5 text-foreground" />
              </button>
              <div className="relative">
                <button
                  className="p-2 hover:bg-secondary rounded-lg transition-colors relative"
                  aria-label="Language"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                >
                  <Globe className="w-5 h-5 text-foreground" />
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-[10px] text-background font-bold rounded-full flex items-center justify-center">
                    {locale.toUpperCase()}
                  </span>
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-32 bg-[#101010] border border-[rgba(255,255,255,0.08)] rounded-lg shadow-lg overflow-hidden z-50"
                    >
                      <button
                        onClick={() => {
                          setLocale("en");
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors flex items-center justify-between"
                      >
                        <span>English</span>
                        {locale === "en" && <Check className="w-4 h-4 text-primary" />}
                      </button>
                      <button
                        onClick={() => {
                          setLocale("ja");
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors flex items-center justify-between"
                      >
                        <span>日本語</span>
                        {locale === "ja" && <Check className="w-4 h-4 text-primary" />}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <button
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Profile"
              >
                <User className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-x-0 bg-background overflow-auto z-[100] h-fit"
            style={{ top: "88px", bottom: 0 }}
          >
            <div className="px-4 py-8 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  // Special handling for PRODUCTS in mobile
                  if (link.name === "PRODUCTS") {
                    return (
                      <div key={link.name}>
                        <button
                          onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                          className="w-full flex items-center justify-between text-base font-medium text-foreground hover:text-primary transition-colors"
                          aria-expanded={isMobileProductsOpen}
                          aria-controls="mobile-products-panel"
                        >
                          <span>{link.name}</span>
                          <motion.span
                            animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {isMobileProductsOpen && (
                            <motion.div
                              id="mobile-products-panel"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-2 mt-3 grid grid-cols-1">
                                {/* Products */}
                                {productItems.map((product) => (
                                  <Link
                                    key={product.name}
                                    href={product.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsMobileProductsOpen(false);
                                    }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                  >
                                    <div className="relative w-20 h-14 flex-shrink-0">
                                      <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                      />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-white">
                                        {product.name}
                                      </p>
                                      <p className="text-xs text-neutral-400">
                                        {product.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}

                                {/* Divider */}
                                <div className="border-t border-[rgba(255,255,255,0.08)] my-3" />

                                {/* Custom Solutions Header */}
                                <p className="text-xs font-semibold tracking-wider text-neutral-300 uppercase px-3 mb-2">
                                  Custom Solutions
                                </p>

                                {/* Custom Solutions */}
                                {customSolutionsItems.map((solution) => (
                                  <Link
                                    key={solution.name}
                                    href={solution.href}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsMobileProductsOpen(false);
                                    }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                  >
                                    <div className="relative w-20 h-14 flex-shrink-0">
                                      <Image
                                        src={solution.image}
                                        alt={solution.name}
                                        fill
                                        className="object-contain"
                                      />
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-white">
                                        {solution.name}
                                      </p>
                                      <p className="text-xs text-neutral-400">
                                        {solution.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // Regular links
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile Icons */}
                <div className="flex sm:hidden items-center gap-4 pt-4 border-t border-border">
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    aria-label="Support"
                  >
                    <Headset className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    aria-label="Language"
                  >
                    <Globe className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    aria-label="Profile"
                  >
                    <User className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
