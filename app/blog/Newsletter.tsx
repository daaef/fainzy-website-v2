"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-12 md:py-20 lg:py-[100px]">
      <div className="container">
        <div className="bg-gradient-to-b py-20 from-[#0e0e0f] to-[#0a0a0b] rounded-xl p-8 text-center">
          <h3 className="font-bold text-5xl text-white mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-neutral-400 mb-6">
            Stay updated with the latest news, insights, and innovations from Fainzy Technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input placeholder="Enter your email address" className="w-full sm:w-auto" />
            <Button className="bg-[rgba(250,250,250,0.18)] hover:bg-[rgba(250,250,250,0.24)] rounded-[8px] px-6 py-2 text-white">
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-neutral-500 mt-4">
            By subscribing, you agree to our Privacy Policy and provide consent to receive updates
            from our company.
          </p>
        </div>
      </div>
    </section>
  );
}
