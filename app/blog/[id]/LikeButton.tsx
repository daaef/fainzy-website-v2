"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  initialLikes: number;
}

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-[8px] px-[16px] py-[8px] rounded-[8px] bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors border border-[#3a3a3a]"
    >
      <Heart
        className={`size-[18px] transition-all ${
          isLiked ? "fill-red-500 text-red-500 scale-110" : "text-[#c9c9c9]"
        }`}
      />
      <span className="font-['Inter:Medium',sans-serif] text-[14px] text-white">
        {likes.toLocaleString()}
      </span>
    </button>
  );
}
