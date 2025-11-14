import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Fainzy"
              width={120}
              height={60}
              className="h-16 sm:h-20 w-auto mb-4"
            />
            <p className="text-foreground text-sm sm:text-base">
              Pioneering the New Normal
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:col-span-3 gap-8">

              {/* Main Pages */}
              <div className="sm:col-span-2 lg:col-span-2">
                  <h3 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
                      Main Pages
                  </h3>
                  <div className="grid grid-cols-2 gap-6 sm:gap-8">
                      <ul className="space-y-3">
                          <li>
                              <Link
                                  href="/"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  Home
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/about"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  About
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/products"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  Products
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/careers"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  Careers
                              </Link>
                          </li>
                      </ul>
                      <ul className="space-y-3">
                          <li>
                              <Link
                                  href="/contact"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  Contact
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/blog"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  Blog
                              </Link>
                          </li>
                          <li>
                              <Link
                                  href="/business"
                                  className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                              >
                                  Fainzy Business
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>

              {/* Business */}
              <div>
                  <h3 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
                      Business
                  </h3>
                  <ul className="space-y-3">
                      <li>
                          <Link
                              href="/download"
                              className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              Download
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="/help"
                              className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              Help center
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="/blog"
                              className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              Blog
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="/jobs"
                              className="text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              Jobs
                          </Link>
                      </li>
                  </ul>
              </div>

              {/* Social */}
              <div>
                  <h3 className="text-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
                      Social
                  </h3>
                  <ul className="space-y-3">
                      <li>
                          <Link
                              href="https://instagram.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              <Instagram className="w-4 h-4" />
                              Instagram
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="https://twitter.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              <Twitter className="w-4 h-4" />
                              Twitter
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="https://facebook.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              <Facebook className="w-4 h-4" />
                              Facebook
                          </Link>
                      </li>
                      <li>
                          <Link
                              href="https://linkedin.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors text-sm"
                          >
                              <Linkedin className="w-4 h-4" />
                              LinkedIn
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-foreground/60 text-xs sm:text-sm">
            Copyright © 2025 Fainzy Technologies LTD. All rights reserved
          </p>
            <div className="flex items-center gap-6">
                <p className="text-foreground/60 text-xs sm:text-sm">
                    We use cookies for better service.
                </p>
                <a href="#"
                   className="py-1 px-4 font-bold inline-block border-2 border-white rounded-[4px] text-sm hover:text-black cursor-pointer hover:bg-white transition-all duration-500 ease-in-out uppercase">Accept</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
