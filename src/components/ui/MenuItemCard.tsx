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
  return (
    <div className="group py-2.5 sm:py-3.5 border-b border-[#EAE3D2] last:border-b-0 hover:bg-[#F7F2E7]/40 px-2 sm:px-3 rounded transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
        {/* Left: Veg indicator, dish name, badges, dotted leader */}
        <div className="flex items-center sm:items-baseline gap-2 flex-1 min-w-0">
          <VegBadge isVeg={item.isVeg} size="sm" />
          <h3 className="font-serif font-bold text-[#1A261D] text-base group-hover:text-[#15472A] transition-colors">
            {item.name}
          </h3>

          {item.isSignature && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] bg-[#15472A] text-white">
              Signature
            </span>
          )}

          {item.tags?.slice(0, 1).map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] ${
                tag.toLowerCase().includes("spicy")
                  ? "bg-[#C52C24]/10 text-[#C52C24]"
                  : "bg-[#D49B28]/15 text-[#9E6C0A]"
              }`}
            >
              {tag}
            </span>
          ))}

          {/* Dotted leader visible on desktop/tablet */}
          <div className="hidden sm:block flex-1 border-b border-dotted border-[#C8BEA7] mb-1 mx-2 min-w-[20px]" />
        </div>

        {/* Right: Price columns */}
        <div className="shrink-0 flex items-center gap-3 sm:gap-4 text-sm font-bold text-[#15472A] tabular-nums self-end sm:self-auto pl-6 sm:pl-0">
          {item.prices && item.prices.length > 0 ? (
            item.prices.map((p) => (
              <div key={p.label} className="flex items-baseline gap-1">
                <span className="text-[10px] font-medium text-[#6B7564] uppercase tracking-wider">
                  {p.label}:
                </span>
                <span>
                  {siteConfig.currencySymbol}
                  {p.price}
                </span>
              </div>
            ))
          ) : item.price !== undefined ? (
            <span>
              {siteConfig.currencySymbol}
              {item.price}
            </span>
          ) : null}
        </div>
      </div>

      {/* Description */}
      {item.description && (
        <p className="text-xs text-[#5D6657] mt-1 pl-5 sm:pl-6 leading-relaxed max-w-3xl">
          {item.description}
        </p>
      )}
    </div>
  );
};

export default MenuItemCard;
