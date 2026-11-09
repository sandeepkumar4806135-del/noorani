/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { siteConfig, hasValidSocialLink } from "../../data/siteConfig";

export const Footer: React.FC = () => {
  const hasAnySocial =
    hasValidSocialLink(siteConfig.socialLinks.instagram) ||
    hasValidSocialLink(siteConfig.socialLinks.facebook) ||
    hasValidSocialLink(siteConfig.socialLinks.zomato) ||
    hasValidSocialLink(siteConfig.socialLinks.swiggy);

  return (
    <footer className="relative bg-[#0E2818] text-[#FAF7F2] pt-0 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-12 overflow-hidden">
      {/* ── 1. Ornamental Top Edge (Scalloped Cusped Arch Pattern) ── */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1200 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-4 sm:h-6 opacity-35"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0C50 16 100 16 150 0C200 16 250 16 300 0C350 16 400 16 450 0C500 16 550 16 600 0C650 16 700 16 750 0C800 16 850 16 900 0C950 16 1000 16 1050 0C1100 16 1150 16 1200 0V24H0V0Z"
            fill="#D49B28"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#1C462B] relative z-10">
          
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={siteConfig.logoUrl}
                alt="Noorani Restaurant Monogram Logo"
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 border border-[#D49B28]"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] tracking-tight">
                  {siteConfig.restaurantName}
                </h3>
                <p className="text-[11px] text-[#D49B28] font-semibold tracking-wider uppercase">
                  Family Restaurant · Mumbra
                </p>
              </div>
            </div>
            <p className="text-sm text-[#D1DCD4] leading-relaxed mb-5">
              Serving Mumbra and Kausa families with authentic Mughlai slow-dum biryanis, charcoal tandoori kebabs,
              rich Indian gravies, and sizzling Indo-Chinese dishes.
            </p>
            <div className="text-xs text-[#E8C872] flex items-center gap-2">
              <span>Indian</span>
              <span>·</span>
              <span>Mughlai</span>
              <span>·</span>
              <span>Chinese</span>
              <span>·</span>
              <span>Tandoori</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FAF7F2] mb-4 pb-1 border-b border-[#D49B28]/40 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-sm text-[#D1DCD4]">
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-[#E8C872] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="inline-block py-1.5 hover:text-[#E8C872] transition-colors">
                  Complete Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block py-1.5 hover:text-[#E8C872] transition-colors">
                  Our Story & Halls
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="inline-block py-1.5 hover:text-[#E8C872] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="inline-block py-1.5 hover:text-[#E8C872] transition-colors">
                  Reserve a Table
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block py-1.5 hover:text-[#E8C872] transition-colors">
                  Location & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Service */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FAF7F2] mb-4 pb-1 border-b border-[#D49B28]/40 inline-block">
              Hours & Halls
            </h4>
            <div className="space-y-3 text-sm text-[#D1DCD4]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D49B28] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#FAF7F2]">Open 24 Hours</p>
                  <p className="text-xs text-[#B5C4B9]">{siteConfig.openingHours.schedule}</p>
                </div>
              </div>
              <div className="pt-2 text-xs text-[#9EB2A4] space-y-1">
                <p className="text-[#E8C872] font-semibold">Dining Facilities:</p>
                <p>• A/C Family Hall</p>
                <p>• Main Dining Hall</p>
                <p>• Dastarkhwan Hall (Floor Dining)</p>
              </div>
              <div className="pt-2 text-xs text-[#E8C872]">
                <span>100% Halal · Strictly No Beef</span>
              </div>
            </div>
          </div>

          {/* Column 4: Free Home Delivery & Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FAF7F2] mb-4 pb-1 border-b border-[#D49B28]/40 inline-block">
              Free Home Delivery
            </h4>
            <div className="space-y-3 text-sm text-[#D1DCD4]">
              <p className="text-xs text-[#B5C4B9]">
                Direct delivery lines across Mumbra & Kausa (tap to call):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {siteConfig.deliveryPhones.map((del) => (
                  <a
                    key={del.id}
                    href={del.link}
                    className="inline-flex items-center gap-2 bg-[#143B22] hover:bg-[#1C4E2D] p-2.5 rounded min-h-[44px] text-[#FAF7F2] hover:text-[#E8C872] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C52C24] shrink-0" />
                    <span className="font-semibold tabular-nums">{del.number}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <MapPin className="w-4 h-4 text-[#C52C24] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#B5C4B9] leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B5C4B9] hover:text-white transition-colors min-h-[44px] flex items-center"
                >
                  WhatsApp: +91 {siteConfig.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D49B28] shrink-0" />
                <a
                  href={siteConfig.emailLink}
                  className="text-xs text-[#B5C4B9] hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            {hasAnySocial && (
              <div className="mt-5 flex items-center gap-3">
                <span className="text-xs text-[#9EB2A4]">Follow:</span>
                {hasValidSocialLink(siteConfig.socialLinks.instagram) && (
                  <a
                    href={siteConfig.socialLinks.instagram}
                    aria-label="Instagram"
                    className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#184628] hover:bg-[#D49B28] hover:text-[#141715] flex items-center justify-center text-[#FAF7F2] transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {hasValidSocialLink(siteConfig.socialLinks.facebook) && (
                  <a
                    href={siteConfig.socialLinks.facebook}
                    aria-label="Facebook"
                    className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#184628] hover:bg-[#D49B28] hover:text-[#141715] flex items-center justify-center text-[#FAF7F2] transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8FA596] gap-3 relative z-10">
          <p>
            © {new Date().getFullYear()} {siteConfig.restaurantName}. All rights reserved.
          </p>
          <p className="text-[11px] text-[#718879]">
            Shop No. 1 & 2, Afreen Apt, Opp. Axis Bank, Tanwar Nagar, Kausa, Mumbra, Thane 400612
          </p>
        </div>

        {/* ── Large Faint Outlined "NOORANI" Wordmark (Partly Cropped at Bottom) ── */}
        <div
          className="relative overflow-hidden w-full select-none pointer-events-none mt-6 -mb-16 md:-mb-10 opacity-[0.06] text-center"
          aria-hidden="true"
        >
          <span
            className="font-serif font-black text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[17rem] leading-[0.72] tracking-widest text-transparent block"
            style={{ WebkitTextStroke: "2px #FAF7F2" }}
          >
            NOORANI
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
