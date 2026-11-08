/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - ARCH-SHAPED SECTION TRANSITION DIVIDER
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Elegant architectural curved transitions between cream and dark green sections.
 */

import React from "react";

interface ArchDividerProps {
  direction?: "toDark" | "toCream";
  className?: string;
}

export const ArchDivider: React.FC<ArchDividerProps> = ({
  direction = "toDark",
  className = ""
}) => {
  if (direction === "toDark") {
    // Top is cream (#FAF7F2 or #F4EFE6), Bottom fills with dark green (#112F1E)
    return (
      <div className={`w-full overflow-hidden leading-none -mt-px pointer-events-none select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-16 block"
          preserveAspectRatio="none"
        >
          {/* Subtle curved arch dip */}
          <path
            d="M0 64C360 20 1080 20 1440 64V64H0Z"
            fill="#112F1E"
          />
          {/* Delicate gold hairline accent */}
          <path
            d="M0 64C360 20 1080 20 1440 64"
            stroke="#D49B28"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
        </svg>
      </div>
    );
  }

  // Top is dark green (#112F1E), Bottom transitions to cream (#FAF7F2)
  return (
    <div className={`w-full overflow-hidden leading-none -mb-px pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 lg:h-16 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C360 44 1080 44 1440 0V64H0V0Z"
          fill="#FAF7F2"
        />
        <path
          d="M0 0C360 44 1080 44 1440 0"
          stroke="#D49B28"
          strokeWidth="1.5"
          strokeOpacity="0.45"
        />
      </svg>
    </div>
  );
};

export default ArchDivider;
