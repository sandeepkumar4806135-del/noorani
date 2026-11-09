/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { VegBadge } from "./VegBadge";
import { siteConfig } from "../../data/siteConfig";
import { MenuItem } from "../../data/menu";

interface MenuItemCardProps {
  item: MenuItem;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const hasMultiplePrices = item.prices && item.prices.length > 0;

  return (
    <div className="group py-2.5 sm:py-3 border-b border-[#EAE3D2] last:border-b-0 hover:bg-[#F7F2E7]/50 px-2 sm:px-3 rounded transition-colors">
      {/* ── Main Row: Name, Veg badge, single price or desktop multi-prices ── */}
      <div className="flex items-start sm:items-baseline justify-between gap-2 sm:gap-4">
        {/* Left: Veg badge + Name + Badges */}
        <div className="flex items-start sm:items-baseline gap-2 flex-1 min-w-0">
          <div className="mt-1 sm:mt-0 shrink-0">
            <VegBadge isVeg={item.isVeg} size="sm" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-1.5">
              <h3 className="font-serif font-bold text-[#1A261D] text-sm sm:text-base group-hover:text-[#15472A] transition-colors leading-snug line-clamp-2">
                {item.name}
              </h3>

              {item.isSignature && (
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] bg-[#15472A] text-white shrink-0">
                  Signature
                </span>
              )}

              {item.tags?.slice(0, 1).map((tag) => (
                <span
                  key={tag}
                  className={`text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] shrink-0 ${
                    tag.toLowerCase().includes("spicy")
                      ? "bg-[#C52C24]/10 text-[#C52C24]"
                      : "bg-[#D49B28]/15 text-[#9E6C0A]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Mobile Multi-Price Chips (rendered cleanly underneath dish name on mobile) */}
            {hasMultiplePrices && (
              <div className="flex sm:hidden flex-wrap items-center gap-1.5 mt-1.5">
                {item.prices!.map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#15472A] bg-[#FAF4E6] border border-[#E4D8BE] px-2 py-0.5 rounded-xs tabular-nums"
                  >
                    <span className="text-[9px] text-[#788173] font-medium uppercase">{p.label}:</span>
                    <span>{siteConfig.currencySymbol}{p.price}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Dotted leader on desktop/tablet */}
          <div className="hidden sm:block flex-1 border-b border-dotted border-[#C8BEA7] mb-1 mx-2 min-w-[16px]" />
        </div>

        {/* Right Price Display:
            - Single price always right-aligned (both mobile and desktop)
            - Multi-prices shown on tablet/desktop (hidden on mobile, which uses chips above) */}
        <div className="shrink-0 flex items-center gap-3 text-xs sm:text-sm font-bold text-[#15472A] tabular-nums pt-0.5 sm:pt-0">
          {hasMultiplePrices ? (
            <div className="hidden sm:flex items-center gap-3">
              {item.prices!.map((p) => (
                <div key={p.label} className="flex items-baseline gap-1">
                  <span className="text-[10px] font-medium text-[#6B7564] uppercase tracking-wider">
                    {p.label}:
                  </span>
                  <span>
                    {siteConfig.currencySymbol}
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
          ) : item.price !== undefined ? (
            <span className="text-sm sm:text-base">
              {siteConfig.currencySymbol}
              {item.price}
            </span>
          ) : null}
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-[11px] sm:text-xs text-[#5D6657] mt-1 pl-5 sm:pl-6 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      )}
    </div>
  );
};

export default MenuItemCard;
