/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - MOVING MARQUEE STRIP
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Slow, elegant marquee of real menu dish names separated by a gold lozenge.
 * - Pauses on hover
 * - In "lite" or "off" mode, gracefully resolves to a calm static line
 *   without continuous CPU/battery consumption on mobile devices.
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMotionLevel } from "../../config/motion";

const MARQUEE_DISHES = [
  "Chicken Dum Biryani",
  "Butter Chicken",
  "Murgh Malai Cheese Tandoori",
  "Mutton Rogan Josh",
  "Chicken Crispy Dry",
  "Chicken Triple Schezwan Rice",
  "Tandoori Seekh Kabab",
  "Chicken Angara",
  "Noorani Special Falooda",
  "Paneer Butter Masala",
  "Chicken Tikka Biryani",
  "Butter Garlic Naan"
];

export const DishMarqueeStrip: React.FC = () => {
  const motionLevel = useMotionLevel();
  const [isHovered, setIsHovered] = useState(false);

  // In "off" or "lite", render a clean static strip
  if (motionLevel !== "full") {
    return (
      <div className="bg-[#15472A] text-[#FAF7F2] py-3.5 border-y border-[#D49B28]/40 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-serif tracking-wider uppercase text-[#E8C872] overflow-x-auto scrollbar-none whitespace-nowrap">
          <span>Chicken Dum Biryani</span>
          <span className="text-[#D49B28] text-[9px]">◆</span>
          <span>Butter Chicken</span>
          <span className="text-[#D49B28] text-[9px]">◆</span>
          <span>Murgh Malai Cheese Tandoori</span>
          <span className="text-[#D49B28] text-[9px]">◆</span>
          <span>Mutton Rogan Josh</span>
          <span className="text-[#D49B28] text-[9px]">◆</span>
          <span>Chicken Crispy Dry</span>
        </div>
      </div>
    );
  }

  // Full desktop mode: smooth continuous slow loop that pauses on hover
  const repeatedDishes = [...MARQUEE_DISHES, ...MARQUEE_DISHES];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[#15472A] text-[#FAF7F2] py-3.5 border-y border-[#D49B28]/40 overflow-hidden select-none cursor-default relative"
      aria-label="Noorani Menu Highlights"
    >
      <motion.div
        className="flex items-center gap-6 whitespace-nowrap w-max"
        animate={{
          x: isHovered ? undefined : ["0%", "-50%"]
        }}
        transition={{
          x: {
            duration: 48,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {repeatedDishes.map((dish, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            <span className="font-serif text-sm font-medium tracking-wide text-[#FAF7F2]">
              {dish}
            </span>
            <span className="text-[#D49B28] text-[9px] leading-none" aria-hidden="true">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DishMarqueeStrip;
