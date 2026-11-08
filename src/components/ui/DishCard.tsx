/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { VegBadge } from "./VegBadge";
import { ImageWithFallback } from "./ImageWithFallback";
import { siteConfig } from "../../data/siteConfig";

export interface SignatureDishProps {
  id: string;
  name: string;
  cuisine: string;
  price: number;
  isVeg: boolean;
  tag?: string;
  src: string;
  alt: string;
  description: string;
}

export const DishCard: React.FC<{ dish: SignatureDishProps }> = ({ dish }) => {
  return (
    <article className="group relative bg-[#FFFFFF] border border-[#EBE3D5] rounded-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#D49B28]/50">
      {/* Food Image with fixed 4:3 aspect ratio */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#F4EFE6]">
        <ImageWithFallback
          src={dish.src}
          alt={dish.alt}
          fallbackTitle={dish.name}
          aspectRatioClass="aspect-[4/3]"
          className="group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quiet, unboxed tag overlay */}
        {dish.tag && (
          <div className="absolute top-2.5 left-2.5 bg-[#141715]/90 text-[#FAF7F2] text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-sm backdrop-blur-xs">
            {dish.tag}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Header row: Veg/Non-Veg marker + Cuisine */}
          <div className="flex items-center justify-between text-xs text-[#71776D] mb-1.5">
            <div className="flex items-center gap-1.5">
              <VegBadge isVeg={dish.isVeg} />
              <span className="font-medium text-[#15472A]">{dish.cuisine}</span>
            </div>
            <span className="font-medium">{dish.isVeg ? "Veg" : "Non-Veg"}</span>
          </div>

          {/* Dish Name */}
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#141715] group-hover:text-[#15472A] transition-colors leading-snug">
            {dish.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#5B6356] mt-2 line-clamp-2 leading-relaxed">
            {dish.description}
          </p>
        </div>

        {/* Price Row */}
        <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-[#8A9184]">Price</span>
          <span className="font-serif text-lg font-bold text-[#15472A] tabular-nums">
            {siteConfig.currencySymbol}
            {dish.price}
          </span>
        </div>
      </div>
    </article>
  );
};

export default DishCard;
