'use client';

import Image from "next/image";
import "@/styles/AboutAvatar.css"; // 일반 CSS import
import { useState } from "react";

export default function AboutAvatar() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex justify-center">
      <div
        className={`
          relative cursor-pointer
          w-40 h-40 md:w-48 md:h-48
          [perspective:1200px]
        `}
        onClick={() => setFlipped(prev => !prev)}
      >
        <div
          className={`
            coin
            ${flipped ? "flipped" : ""}
            bg-white dark:bg-zinc-800
            rounded-full shadow-lg border-2 border-yellow-200
            w-full h-full relative
          `}
        >
          <div className="face front">
            <div className="relative w-[120%] h-[120%] left-[-10%] top-[-10%]">
              <Image
                src="/images/avatar-1.png"
                alt="Front Avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="face back">
            <div className="relative w-[120%] h-[120%] left-[-10%] top-[-10%]">
              <Image
                src="/images/avatar-2.png"
                alt="Back Avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
