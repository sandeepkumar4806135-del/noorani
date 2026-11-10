/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - SCROLL STORY SECTION "WHAT WE COOK"
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Desktop:
 * - Sticky circular plate on the left that cross-fades and turns slightly
 *   as the visitor scrolls past 4 text blocks on the right.
 * - Mughlai & Handi, Tandoori & Kabab, Chinese, Biryani & Rice.
 * - Each block contains true sentences, 3 real dishes with exact prices,
 *   and a "See full menu" deep link to the specific category tab.
 * - Releases naturally and scrolls away after block 4.
 * 
 * Safety & Performance:
 * - Plate frame is transparent (never solid white overlay).
 * - Background is a soft dark-green plate (#15472A) with gold rim.
 * - First image loads eagerly and displays immediately before any scrolling.
 * - Remaining images are preloaded in browser memory on mount.
 * - Automatic error recovery: shows soft dark-green plate with gold emblem
 *   if an image ever fails or disconnects.
 * 
 * Mobile & Tablet (<1024px):
 * - Simple stacked layout with inline circular photos inside each block.
 * - Zero sticky behavior, zero lag.
 */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { storyPlateImages } from "../../data/images";
import { useMotionLevel } from "../../config/motion";
import { SectionHeading } from "../ui/SectionHeading";

interface StoryItem {
  id: "mughlai" | "tandoori" | "chinese" | "biryani";
  category: string;
  badge: string;
  sentence: string;
  image: string;
  imageAlt: string;
  rotation: number;
  menuGroup: string;
  dishes: {
    name: string;
    portionPrice: string;
  }[];
}

const STORY_SECTIONS: StoryItem[] = [
  {
    id: "mughlai",
    category: "Mughlai & Handi",
    badge: "Mughlai",
    sentence: "Mughlai curries and handi dishes prepared for family dining in Kausa, Mumbra.",
    image: storyPlateImages.mughlai.src,
    imageAlt: storyPlateImages.mughlai.alt,
    rotation: -4,
    menuGroup: "Chicken",
    dishes: [
      { name: "Butter Chicken", portionPrice: "₹230" },
      { name: "Chicken Angara", portionPrice: "₹400" },
      { name: "Chicken Handi", portionPrice: "₹250" }
    ]
  },
  {
    id: "tandoori",
    category: "Tandoori & Kabab",
    badge: "Tandoori",
    sentence: "Halal chicken and meats roasted in clay tandoors with fresh tandoori breads.",
    image: storyPlateImages.tandoori.src,
    imageAlt: storyPlateImages.tandoori.alt,
    rotation: 5,
    menuGroup: "Tandoori & Kabab",
    dishes: [
      { name: "Chicken Tandoori", portionPrice: "Half ₹350 · Full ₹550" },
      { name: "Murgh Malai Cheese Tandoori", portionPrice: "Half ₹450 · Full ₹680" },
      { name: "Chicken Crispy Dry", portionPrice: "₹270" }
    ]
  },
  {
    id: "chinese",
    category: "Indo-Chinese",
    badge: "Chinese",
    sentence: "Chinese starters, soups, fried rice, and noodle preparations.",
    image: storyPlateImages.chinese.src,
    imageAlt: storyPlateImages.chinese.alt,
    rotation: -2,
    menuGroup: "Chinese",
    dishes: [
      { name: "Chicken Crispy Dry", portionPrice: "₹270" },
      { name: "Chicken Manchurian", portionPrice: "Gravy ₹210 · Dry ₹220" },
      { name: "Chicken Fried Rice", portionPrice: "Plain ₹180 · Schezwan ₹200" }
    ]
  },
  {
    id: "biryani",
    category: "Biryani & Rice",
    badge: "Biryani",
    sentence: "Traditional biryanis and rice preparations, available for dining and party orders.",
    image: storyPlateImages.biryani.src,
    imageAlt: storyPlateImages.biryani.alt,
    rotation: 6,
    menuGroup: "Biryani & Rice",
    dishes: [
      { name: "Chi. Tikka Biryani", portionPrice: "₹230" },
      { name: "Chicken Biryani (Rice Bahar)", portionPrice: "Half ₹110 · Full ₹190" },
      { name: "Chicken Chinese Khapsa", portionPrice: "Half ₹700 · Full ₹1300" }
    ]
  }
];

export const WhatWeCookStory: React.FC = () => {
  const motionLevel = useMotionLevel();
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Preload all 4 plate images into browser memory as soon as component mounts
  useEffect(() => {
    const urls = [
      storyPlateImages.mughlai.src,
      storyPlateImages.tandoori.src,
      storyPlateImages.chinese.src,
      storyPlateImages.biryani.src
    ];

    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // 2. Observe active block in viewport on desktop
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index) && index >= 0 && index < STORY_SECTIONS.length) {
              setActiveStoryIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.15
      }
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentStory = STORY_SECTIONS[activeStoryIndex] || STORY_SECTIONS[0];
  const isImageFailed = failedImages[currentStory.id];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E6DEC9] relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            kicker="What We Cook"
            title="Four Traditions in Mumbra"
            description="Four cuisines prepared at Noorani Family Restaurant in Kausa, Mumbra: Indian, Mughlai, Chinese, and Tandoori."
            hasOrnament
          />
        </div>

        {/* ── Desktop Layout: Sticky Left Plate + 4 Right Text Blocks ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Sticky Column (stays sticky throughout the 4 blocks, released after block 4) */}
          <div className="lg:col-span-5 sticky top-28 self-start flex flex-col items-center">
            
            {/* Plate Wrapper with Soft Contact Shadow */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 aspect-square flex items-center justify-center">
              
              {/* Soft Elliptical Shadow Beneath Plate */}
              <div
                className="absolute -bottom-6 w-64 h-8 rounded-[100%] pointer-events-none -z-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 50%, transparent 75%)"
                }}
                aria-hidden="true"
              />

              {/* Stationary Gold Double Ring Frame (transparent middle, never paints white) */}
              <div
                className="absolute inset-0 rounded-full border-2 border-[#D49B28] shadow-[0_12px_32px_rgba(0,0,0,0.18)] p-1 pointer-events-none z-10"
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full border border-[#D49B28]/40" />
              </div>

              {/* Base Plate Container (Royal Dark-Green, never blank white) */}
              <div className="w-full h-full rounded-full overflow-hidden p-1.5 z-0 bg-[#15472A] aspect-square relative shadow-inner">
                {isImageFailed ? (
                  /* Fallback Royal Plate with Gold Detail */
                  <div className="w-full h-full rounded-full bg-[#15472A] flex flex-col items-center justify-center p-6 text-center aspect-square">
                    <div className="w-16 h-16 rounded-full border border-[#D49B28]/50 flex items-center justify-center mb-2 bg-[#113821]">
                      <span className="font-serif text-xl font-bold text-[#E8C872]">NR</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B28]">
                      {currentStory.badge}
                    </span>
                    <p className="font-serif text-base font-bold text-[#FAF7F2] mt-0.5">
                      {currentStory.category}
                    </p>
                  </div>
                ) : (
                  /* Cross-fading, slightly rotating plate image */
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={currentStory.id}
                      initial={
                        motionLevel === "off"
                          ? false
                          : { opacity: 0, scale: 0.96, rotate: currentStory.rotation - 4 }
                      }
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: motionLevel === "off" ? 0 : currentStory.rotation
                      }}
                      exit={
                        motionLevel === "off"
                          ? undefined
                          : { opacity: 0, scale: 1.04, rotate: currentStory.rotation + 4 }
                      }
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full rounded-full overflow-hidden aspect-square bg-[#15472A]"
                    >
                      <img
                        src={currentStory.image}
                        alt={currentStory.imageAlt}
                        loading={currentStory.id === "mughlai" ? "eager" : "lazy"}
                        decoding="async"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [currentStory.id]: true }))
                        }
                        className="w-full h-full object-cover object-center aspect-square scale-[1.04]"
                      />
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>

            {/* Quiet plate indicator */}
            <div className="mt-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B37E1C]">
                {currentStory.badge}
              </span>
              <p className="font-serif text-lg font-bold text-[#15472A] mt-0.5">
                {currentStory.category}
              </p>
            </div>
          </div>

          {/* Right Scrollable Story Blocks (Exactly 4 blocks) */}
          <div className="lg:col-span-7 space-y-24 py-4">
            {STORY_SECTIONS.map((story, idx) => {
              const isActive = activeStoryIndex === idx;

              return (
                <div
                  key={story.id}
                  data-index={idx}
                  ref={(el) => {
                    blockRefs.current[idx] = el;
                  }}
                  className={`p-8 sm:p-10 rounded-md border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#D49B28] shadow-md"
                      : "bg-[#FAF7F2] border-[#E8DEC7] opacity-80"
                  }`}
                >
                  <span className="text-xs uppercase tracking-widest text-[#B37E1C] font-semibold">
                    {idx + 1}. {story.badge}
                  </span>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#15472A] mt-1.5">
                    {story.category}
                  </h3>

                  <p className="text-sm sm:text-base text-[#4F554A] mt-3 leading-relaxed">
                    {story.sentence}
                  </p>

                  {/* 3 Real dishes with exact menu prices */}
                  <div className="mt-6 pt-5 border-t border-[#F0EAE0] space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#15472A]">
                      Signature Selections & Real Prices:
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {story.dishes.map((dish, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center justify-between text-xs sm:text-sm py-1.5 px-3 bg-[#FAF7F2] rounded-xs border border-[#EAE1D1]"
                        >
                          <span className="font-semibold text-[#141715]">
                            {dish.name}
                          </span>
                          <span className="font-mono text-xs font-medium text-[#15472A]">
                            {dish.portionPrice}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deep Link to Menu Tab */}
                  <div className="mt-6">
                    <Link
                      to={`/menu?group=${encodeURIComponent(story.menuGroup)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C52C24] hover:text-[#9A1E18] transition-colors min-h-[44px]"
                    >
                      <span>See full {story.category} menu</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile Stacked Layout (No Sticky, Inline Photo Inside Each Block) ── */}
        <div className="lg:hidden space-y-8">
          {STORY_SECTIONS.map((story, idx) => {
            const isMobFailed = failedImages[`mob-${story.id}`];

            return (
              <div
                key={story.id}
                className="bg-white border border-[#E8DEC7] p-6 rounded-md shadow-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Inline circular plate photo */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 aspect-square rounded-full border-2 border-[#D49B28] p-0.5 shrink-0 overflow-hidden shadow-xs bg-[#15472A] relative">
                    {isMobFailed ? (
                      <div className="w-full h-full rounded-full bg-[#15472A] flex flex-col items-center justify-center text-center p-1">
                        <span className="font-serif text-xs font-bold text-[#E8C872]">NR</span>
                        <span className="text-[8px] text-[#D49B28] uppercase font-bold">{story.badge}</span>
                      </div>
                    ) : (
                      <img
                        src={story.image}
                        alt={story.imageAlt}
                        loading={idx === 0 ? "eager" : "lazy"}
                        decoding="async"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [`mob-${story.id}`]: true }))
                        }
                        className="w-full h-full object-cover object-center rounded-full aspect-square"
                      />
                    )}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B37E1C]">
                      {story.badge}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#15472A]">
                      {story.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4F554A] leading-relaxed">
                  {story.sentence}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F0EAE0] space-y-2">
                  {story.dishes.map((dish, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center justify-between text-xs py-1 px-2.5 bg-[#FAF7F2] rounded-xs border border-[#EAE1D1]"
                    >
                      <span className="font-semibold text-[#141715]">{dish.name}</span>
                      <span className="font-mono text-[11px] text-[#15472A]">{dish.portionPrice}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to={`/menu?group=${encodeURIComponent(story.menuGroup)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C52C24] hover:underline min-h-[44px]"
                  >
                    <span>See full {story.category} menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeCookStory;
