"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function BackButtonClient() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="mb-[32px] text-[#c9c9c9] hover:text-white hover:bg-[rgba(250,250,250,0.1)]"
      onClick={() => router.back()}
    >
      <ArrowLeft className="size-[16px] mr-2" />
      <span className="font-['Inter:Medium',sans-serif]">Back to Blog</span>
    </Button>
  );
}

