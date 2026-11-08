/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "framer-motion";
import { useMotionLevel } from "../../config/motion";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  showDivider?: boolean;
  hasOrnament?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = "center",
  theme = "light",
  showDivider = true,
  hasOrnament = false,
  className = ""
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";
  const motionLevel = useMotionLevel();

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : align === "right" ? "ml-auto text-right" : "text-left"} ${className}`}
    >
      {/* Editorial Kicker (Unboxed, clean typography) */}
      {kicker && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? "justify-center" : ""}`}>
          <p
            className={`text-xs font-semibold tracking-widest uppercase ${
              isDark ? "text-[#E9BF67]" : "text-[#B37E1C]"
            }`}
          >
            {kicker}
          </p>
        </div>
      )}

      {/* Main Serif Headline */}
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.25] text-balance ${
          isDark ? "text-[#FAF7F2]" : "text-[#15472A]"
        }`}
      >
        {title}
      </h2>

      {/* Subtle gold flourish divider line that draws itself on scroll */}
      {showDivider && (
        <div
          className={`flex items-center my-3.5 ${
            isCenter ? "justify-center" : align === "right" ? "justify-end" : "justify-start"
          }`}
          aria-hidden="true"
        >
          {hasOrnament ? (
            <motion.svg
              width="80"
              height="16"
              viewBox="0 0 80 16"
              fill="none"
              className="overflow-visible"
              initial={motionLevel === "off" ? undefined : "hidden"}
              whileInView={motionLevel === "off" ? undefined : "visible"}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.path
                d="M4 8H33"
                stroke="#D49B28"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 0.85, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
                }}
              />
              <motion.polygon
                points="40,3 45,8 40,13 35,8"
                fill="#D49B28"
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, delay: 0.25 } }
                }}
              />
              <motion.path
                d="M47 8H76"
                stroke="#D49B28"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 0.85, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
                }}
              />
            </motion.svg>
          ) : (
            <motion.div
              initial={motionLevel === "off" ? undefined : { scaleX: 0, opacity: 0 }}
              whileInView={motionLevel === "off" ? undefined : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: isCenter ? 0.5 : align === "right" ? 1 : 0 }}
              className="h-[1.5px] w-12 bg-[#D49B28]"
            />
          )}
        </div>
      )}

      {/* Description */}
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? "text-[#FAF7F2]/80" : "text-[#4A5046]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
