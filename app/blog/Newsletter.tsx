"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-12 md:py-20 lg:py-[100px]">
      <div className="container">
        <div className="bg-gradient-to-b py-20 from-card to-background rounded-xl p-8 text-center border border-border">
          <h3 className="font-bold text-5xl text-foreground mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground mb-6">
            Stay updated with the latest news, insights, and innovations from Fainzy Technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Input placeholder="Enter your email address" className="w-full sm:w-auto" />
            <Button className="bg-primary hover:bg-primary/90 rounded-[8px] px-6 py-2 text-primary-foreground">
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/70 mt-4">
            By subscribing, you agree to our Privacy Policy and provide consent to receive updates
            from our company.
          </p>
        </div>
      </div>
    </section>
  );
}
