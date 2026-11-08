/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - MOTION FOUNDATION & PERFORMANCE GOVERNANCE
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Configures the motion policy across the application.
 * Returns:
 * - "off": zero animation (everything immediately visible; respects prefers-reduced-motion)
 * - "lite": phones, touch screens, and low-end devices (simple fade-ups and basic hovers only;
 *           zero parallax, zero tilt, zero infinite loops, zero floating)
 * - "full": desktop devices with pointer accuracy and sufficient hardware concurrency
 */

import { useState, useEffect } from "react";
import type { Variants, Transition } from "framer-motion";

export type MotionLevel = "off" | "lite" | "full";

/**
 * Developer/Client Switch:
 * Change this value to explicitly test or enforce a level.
 * Options: 'auto' | 'off' | 'lite' | 'full'
 */
export const effectsLevelOverride: "auto" | "off" | "lite" | "full" = "auto";

/**
 * Determines current motion level according to hardware capability and user preferences.
 */
export function getSystemMotionLevel(): MotionLevel {
  if (typeof window === "undefined") return "lite";

  if (effectsLevelOverride !== "auto") {
    return effectsLevelOverride;
  }

  // 1. Accessibility: User prefers reduced motion
  try {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return "off";
  } catch {
    // ignore
  }

  // 2. Mobile, Touch & Low-End Detection -> "lite"
  try {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    const isSmallScreen = window.innerWidth < 768;

    const nav = navigator as Navigator & { deviceMemory?: number };
    const isLowConcurrency = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 4;
    const isLowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 4;

    if (isTouch || isSmallScreen || isLowConcurrency || isLowMemory) {
      return "lite";
    }
  } catch {
    return "lite";
  }

  // 3. Desktop with fine pointer & modern specs -> "full"
  return "full";
}

/**
 * React Hook that monitors motion level and updates if screen or preferences change.
 */
export function useMotionLevel(): MotionLevel {
  const [level, setLevel] = useState<MotionLevel>(() => getSystemMotionLevel());

  useEffect(() => {
    const updateLevel = () => {
      setLevel(getSystemMotionLevel());
    };

    updateLevel();

    window.addEventListener("resize", updateLevel);
    let mql: MediaQueryList | null = null;
    try {
      mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      mql.addEventListener("change", updateLevel);
    } catch {
      // ignore
    }

    return () => {
      window.removeEventListener("resize", updateLevel);
      if (mql) {
        try {
          mql.removeEventListener("change", updateLevel);
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return level;
}

// ── Shared Transitions ──
export const warmEase: Transition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] // Warm, confident ease-out curve
};

export const slowEase: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1]
};

// ── Shared Animation Variants ──
export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 18
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: warmEase
  }
};

export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const maskRevealVariant: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(12% 0% 0% 0%)"
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: slowEase
  }
};

export const staggerContainerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const pageTransitionVariant: Variants = {
  initial: {
    opacity: 0,
    y: 8
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.25,
      ease: "easeIn"
    }
  }
};
