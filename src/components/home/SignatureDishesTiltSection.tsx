/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - SIGNATURE DISHES 3D-TILT SECTION
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Features:
 * - Reads 6 featured dishes mapped to real menu.ts prices and dishes
 * - Circular plate crop overlapping card top with gentle hover scale
 * - Desktop: 3D pointer tilt (perspective 1000px, max 6° tilt) + moving specular highlight
 * - Mobile: Horizontal scroll-snap carousel with centered card prominence (zero tilt overhead)
 * - Clear veg/non-veg indicator and real price
 */

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { images } from "../../data/images";
import { useMotionLevel } from "../../config/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { VegBadge } from "../ui/VegBadge";

interface TiltCardProps {
  dish: (typeof images.signatureDishes)[number];
}

const TiltCard: React.FC<TiltCardProps> = ({ dish }) => {
  const motionLevel = useMotionLevel();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const isFull = motionLevel === "full";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isFull || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPct = (x / rect.width) * 100;
    const yPct = (y / rect.height) * 100;

    // Maximum 6 degrees tilt
    const rY = ((x / rect.width) - 0.5) * 12; // -6 to 6
    const rX = -((y / rect.height) - 0.5) * 12; // -6 to 6

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({ x: xPct, y: yPct, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    if (!isFull) return;
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="h-full pt-12 sm:pt-14 pb-2"
    >
      <motion.article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={
          isFull
            ? {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
              }
            : undefined
        }
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.6 }}
        className="group relative bg-[#FFFFFF] border border-[#EBE3D5] rounded-md flex flex-col justify-between shadow-xs hover:border-[#D49B28]/60 transition-shadow duration-300 hover:shadow-xl h-full"
      >
        {/* Soft Specular Highlight (Follows pointer on desktop) */}
        {isFull && (
          <div
            className="absolute inset-0 rounded-md pointer-events-none transition-opacity duration-300 z-20"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(212, 155, 40, 0.45) 0%, rgba(255, 255, 255, 0.2) 25%, transparent 60%)`
            }}
            aria-hidden="true"
          />
        )}

        {/* Circular Plate Crop Overlapping Top Edge */}
        <div className="relative -mt-12 sm:-mt-14 mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-white border-2 border-[#D49B28] shadow-[0_8px_20px_rgba(0,0,0,0.12)] z-10 shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#F4EFE6]">
            <img
              src={dish.src}
              alt={dish.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>
          {/* Tag marker */}
          {dish.tag && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#15472A] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs whitespace-nowrap shadow-xs">
              {dish.tag}
            </span>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between text-left">
          <div>
            {/* Header row: Veg/Non-Veg marker + Cuisine */}
            <div className="flex items-center justify-between text-xs text-[#71776D] mb-2 pt-2">
              <div className="flex items-center gap-1.5">
                <VegBadge isVeg={dish.isVeg} />
                <span className="font-semibold text-[#15472A]">{dish.cuisine}</span>
              </div>
              <span className="text-[11px] font-medium text-[#8A9184]">
                {dish.isVeg ? "Veg" : "Non-Veg"}
              </span>
            </div>

            {/* Dish Name */}
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#141715] group-hover:text-[#15472A] transition-colors leading-snug">
              {dish.name}
            </h3>

            {/* Authentic description */}
            <p className="text-xs sm:text-sm text-[#5B6356] mt-2 line-clamp-2 leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Price Row */}
          <div className="mt-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#8A9184]">Price</span>
            <span className="font-serif text-xl font-bold text-[#15472A] tabular-nums">
              {siteConfig.currencySymbol}
              {dish.price}
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export const SignatureDishesTiltSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#F4EFE6] border-y border-[#E6DEC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <SectionHeading
              kicker="Popular Orders"
              title="Guest Favorites at Noorani"
              description="Six signature dishes regularly ordered by family tables and delivery diners in Mumbra."
              align="left"
            />
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#15472A] text-[#15472A] hover:bg-[#15472A] hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shrink-0 self-start md:self-auto min-h-[44px]"
          >
            <span>See All Menu Items</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Desktop Grid Layout (3 cols with 3D-Tilt) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.signatureDishes.map((dish) => (
            <TiltCard key={dish.id} dish={dish} />
          ))}
        </div>

        {/* Mobile Scroll-Snap Carousel (Center-Focused, Zero Tilt Overhead) */}
        <div className="sm:hidden -mx-5 px-5 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none">
          {images.signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="w-[84vw] shrink-0 snap-center"
            >
              <TiltCard dish={dish} />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-[#7A8275]">
          Images are for illustration.
        </p>
      </div>
    </section>
  );
};

export default SignatureDishesTiltSection;
