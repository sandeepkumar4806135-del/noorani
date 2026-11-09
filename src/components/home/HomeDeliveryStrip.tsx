/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - POLISHED FREE HOME DELIVERY SECTION
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Four direct delivery number cards for Mumbra & Kausa families.
 * Each card features a call icon with a subtle pulse ring that executes
 * exactly three times on page load/render, then stops.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const HomeDeliveryStrip: React.FC = () => {
  return (
    <section className="bg-[#FAF4E6] border-y border-[#E4D8BE] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Header line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="relative w-11 h-11 rounded-full bg-[#15472A] text-[#E8C872] flex items-center justify-center shrink-0 shadow-xs">
              <Phone className="w-5 h-5" />
              {/* Pulse ring that triggers 3 times then stops */}
              <span
                className="absolute inset-0 rounded-full border-2 border-[#15472A] pulse-ring-3 pointer-events-none"
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <h3 className="font-serif font-bold text-lg text-[#15472A]">
                  Free Home Delivery in Mumbra & Kausa
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-[#15472A] bg-white border border-[#D5CBB5] px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-[#15472A]" />
                  ₹0 Delivery Fee
                </span>
              </div>
              <p className="text-xs text-[#5C6457] mt-0.5">
                Hot, fresh parcels delivered straight to your building. Call any of our four direct kitchen lines:
              </p>
            </div>
          </div>

          {/* CTAs: WhatsApp Delivery + View Menu */}
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <a
              href={siteConfig.whatsappDeliveryLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order for home delivery on WhatsApp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs min-h-[44px] shrink-0 active:scale-[0.99]"
            >
              <span>Order on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
            <Link
              to="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#15472A] hover:bg-[#0D2D1B] text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-xs min-h-[44px] shrink-0 active:scale-[0.99]"
            >
              <span>View Menu</span>
              <ArrowRight className="w-4 h-4 text-[#E8C872]" />
            </Link>
          </div>
        </div>

        {/* Four Number Cards: 1 col on phones, 2 cols on 600px, 4 cols on >=1024px */}
        <div className="grid grid-cols-1 min-[560px]:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {siteConfig.deliveryPhones.map((del, idx) => (
            <a
              key={del.id}
              href={del.link}
              aria-label={del.ariaLabel}
              className="group relative bg-white border border-[#DDD3BF] hover:border-[#15472A] p-3.5 sm:p-4 rounded-sm flex items-center justify-between transition-all duration-200 hover:shadow-md min-h-[58px]"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#E6DEC9] text-[#C52C24] flex items-center justify-center shrink-0 group-hover:bg-[#C52C24] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  {/* Subtle individual ring pulsing 3 times */}
                  <span
                    className="absolute inset-0 rounded-full border border-[#C52C24] pulse-ring-3 pointer-events-none"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8A9184] font-semibold block">
                    Line {idx + 1}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-[#15472A] group-hover:text-[#C52C24] transition-colors tabular-nums">
                    {del.number}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#15472A] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                Call &rarr;
              </span>
            </a>
          ))}
        </div>

        {/* Quiet service timing footer */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#7A8275] pt-2">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#B37E1C]" />
            <span>24/7 kitchen service (closed on Fridays)</span>
          </div>
          <span>Tanwar Nagar · Kausa · Shimla Park · Amrut Nagar · Old Pune Highway</span>
        </div>

      </div>
    </section>
  );
};

export default HomeDeliveryStrip;
