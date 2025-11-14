"use client";

import Link from "next/link";
import Image from "next/image";
import {Bell, Globe, User, Menu, X, Headset, Check} from "lucide-react";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "motion/react";
import {useLocale} from "@/contexts/LocaleContext";

export default function Navbar() {
    const {locale, setLocale} = useLocale();
    const [isAtTop, setIsAtTop] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, isMobileMenuOpen]);

    const navLinks = [
        {name: "HOME", href: "/"},
        {name: "ABOUT", href: "/about"},
        {name: "PRODUCTS", href: "/products"},
        {name: "CAREERS", href: "/careers"},
        {name: "CONTACT", href: "/contact"},
        {name: "BLOG", href: "/blog"},
        {name: "BUSINESS", href: "http://localhost:3001/"},
        {name: "LOGIN", href: "http://localhost:3001/login"},
    ];

    return (

        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isAtTop
                    ? "bg-transparent border-transparent"
                    : "bg-background/95 backdrop-blur-sm"
            } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
            data-name="Nav"
        >
            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-10 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
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
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: i * 0.1, duration: 0.5}}
                                whileHover={{y: -2}}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Desktop Icons */}
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                aria-label="Notifications"
                            >
                                <Bell className="w-5 h-5 text-foreground"/>
                            </button>
                            <div className="relative">
                                <button
                                    className="p-2 hover:bg-secondary rounded-lg transition-colors relative"
                                    aria-label="Language"
                                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                >
                                    <Globe className="w-5 h-5 text-foreground"/>
                                    <span
                                        className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-foreground text-[10px] text-background font-bold rounded-full flex items-center justify-center">
                    {locale.toUpperCase()}
                  </span>
                                </button>

                                <AnimatePresence>
                                    {isLangMenuOpen && (
                                        <motion.div
                                            initial={{opacity: 0, y: -10}}
                                            animate={{opacity: 1, y: 0}}
                                            exit={{opacity: 0, y: -10}}
                                            transition={{duration: 0.2}}
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
                                                {locale === "en" && <Check className="w-4 h-4 text-primary"/>}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setLocale("ja");
                                                    setIsLangMenuOpen(false);
                                                }}
                                                className="w-full px-4 py-2.5 text-left text-sm hover:bg-[rgba(255,255,255,0.05)] transition-colors flex items-center justify-between"
                                            >
                                                <span>日本語</span>
                                                {locale === "ja" && <Check className="w-4 h-4 text-primary"/>}
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <button
                                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                aria-label="Profile"
                            >
                                <User className="w-5 h-5 text-foreground"/>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-foreground"/>
                            ) : (
                                <Menu className="w-6 h-6 text-foreground"/>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Icons */}
                            <div className="flex sm:hidden items-center gap-4 pt-4 border-t border-border">
                                <button
                                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                    aria-label="Support"
                                >
                                    <Headset className="w-5 h-5 text-foreground"/>
                                </button>
                                <button
                                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                    aria-label="Language"
                                >
                                    <Globe className="w-5 h-5 text-foreground"/>
                                </button>
                                <button
                                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                    aria-label="Profile"
                                >
                                    <User className="w-5 h-5 text-foreground"/>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
}
