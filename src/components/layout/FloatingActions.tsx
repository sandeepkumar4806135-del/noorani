/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* ── 1. Floating WhatsApp Button (Desktop / Tablet) ── */}
      <aside
        aria-label="Quick WhatsApp contact"
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Noorani Restaurant"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#25D366]"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* ── 2. Mobile-Only Sticky Bottom Bar (Height ~56px, compliant with 15% cap) ── */}
      <nav
        aria-label="Mobile quick actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/98 backdrop-blur-md border-t border-[#E0D7C2] px-4 py-2 shadow-2xl flex items-center gap-3"
      >
        <a
          href={siteConfig.phoneLink}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 bg-[#15472A] active:bg-[#0D2D1B] text-white py-2 px-3 rounded-md text-xs font-semibold shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#E8C872]" />
          <span>Call Now</span>
        </a>

        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1EBE5D] text-white py-2 px-3 rounded-md text-xs font-semibold shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </nav>
    </>
  );
};

export default FloatingActions;
