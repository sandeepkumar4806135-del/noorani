/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface VegBadgeProps {
  isVeg: boolean;
  size?: "sm" | "md";
  showLabel?: boolean;
  className?: string;
}

export const VegBadge: React.FC<VegBadgeProps> = ({
  isVeg,
  size = "sm",
  showLabel = false,
  className = ""
}) => {
  const outerSize = size === "sm" ? "w-3.5 h-3.5" : "w-4.5 h-4.5";
  const innerSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";

  const borderColor = isVeg ? "border-emerald-600" : "border-[#C52C24]";
  const dotColor = isVeg ? "bg-emerald-600" : "bg-[#C52C24]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 shrink-0 ${className}`}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      aria-label={isVeg ? "Vegetarian dish" : "Non-Vegetarian dish"}
    >
      <span
        className={`inline-flex items-center justify-center rounded-[2px] border ${borderColor} ${outerSize} p-[1.5px] bg-white`}
      >
        <span className={`rounded-full ${dotColor} ${innerSize}`} />
      </span>
      {showLabel && (
        <span className={`text-xs font-medium ${isVeg ? "text-emerald-700" : "text-[#C52C24]"}`}>
          {isVeg ? "Veg" : "Non-Veg"}
        </span>
      )}
    </span>
  );
};

export default VegBadge;
