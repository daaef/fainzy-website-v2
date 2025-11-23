"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactForm() {
  const [reason, setReason] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("contact submit", { ...data, reason });
    form.reset();
    setReason("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-neutral-400 text-sm">
        Please fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            className="mt-2 h-[51px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mt-2 h-[51px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Enter subject"
          className="mt-2 h-[51px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message here"
          className="mt-2 h-[135px] bg-transparent border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.5)] text-[14px] px-[16px] py-[14px] resize-none"
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium text-white">Reason</label>
        <div className="mt-2 w">
          <Select value={reason} onValueChange={(v) => setReason(v)}>
            <SelectTrigger className="h-[49px] w-full bg-transparent border-[rgba(255,255,255,0.15)] text-white text-[14px] px-[16px]">
              <SelectValue placeholder="Select a Reason" className="text-[rgba(255,255,255,0.5)]" />
            </SelectTrigger>
            <SelectContent className="bg-[#111113] border-[rgba(255,255,255,0.15)] text-white">
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="sales">Sales Inquiry</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="bg-neutral-50 hover:bg-neutral-200 text-[#0a0a0b] h-auto w-full rounded-[12px] px-[36px] py-[14px]"
        >
          <span className="font-semibold text-[15px]">Submit</span>
        </Button>
      </div>
    </form>
  );
}
