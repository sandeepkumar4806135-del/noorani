/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - REVEAL COMPONENT
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Upgraded view-reveal component that plays once and strictly obeys
 * useMotionLevel() so lower-end and touch devices stay lightning-fast.
 */

import React from "react";
import { motion, Variants } from "framer-motion";
import { useMotionLevel, fadeUpVariant, fadeInVariant, maskRevealVariant } from "../../config/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fadeUp" | "fadeIn" | "maskReveal";
  delay?: number;
  amount?: number;
  as?: keyof typeof motion;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  variant = "fadeUp",
  delay = 0,
  amount = 0.15
}) => {
  const motionLevel = useMotionLevel();

  // If motion is turned off, render static content immediately
  if (motionLevel === "off") {
    return <div className={className}>{children}</div>;
  }

  const selectedVariant: Variants =
    variant === "fadeIn"
      ? fadeInVariant
      : variant === "maskReveal"
      ? maskRevealVariant
      : fadeUpVariant;

  const customizedVariant: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...(typeof selectedVariant.visible === "object" && "transition" in selectedVariant.visible
          ? (selectedVariant.visible.transition as object)
          : {}),
        delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={customizedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
