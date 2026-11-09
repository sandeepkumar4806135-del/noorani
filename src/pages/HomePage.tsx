/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - HOME PAGE (DESIGN UPGRADE ROUND 1)
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Real content, zero invented claims, authentic Mumbra details.
 * Upgraded with:
 * - Hero with "3D-feel" rotating plate, floating garnishes with mouse parallax depth,
 *   subtle steam wisps, word-by-word masked headline, and magnetic buttons.
 * - Arch-shaped SVG dividers between cream and dark sections.
 * - Polished Free Home Delivery cards with 3-pulse call rings.
 * - Moving marquee strip of real dish names.
 * - Scroll story "What We Cook" with sticky cross-fading plate and 4 real dish blocks.
 * - Signature dishes with 3D-tilt cards and mobile scroll-snap carousel.
 * - Preserved real dining halls, family note, and real location map.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Phone, Calendar, ArrowRight, MapPin, Clock, MessageCircle, Quote } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SEO } from "../components/ui/SEO";
import { ArchDivider } from "../components/ui/ArchDivider";
import { siteConfig } from "../data/siteConfig";

// Upgraded motion components
import { HeroPlateSection } from "../components/home/HeroPlateSection";
import { HomeDeliveryStrip } from "../components/home/HomeDeliveryStrip";
import { DishMarqueeStrip } from "../components/home/DishMarqueeStrip";
import { WhatWeCookStory } from "../components/home/WhatWeCookStory";
import { SignatureDishesTiltSection } from "../components/home/SignatureDishesTiltSection";

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Home — Noorani Family Restaurant | Mumbra"
        description="Family restaurant in Kausa, Mumbra serving Indian, Mughlai, Chinese and Tandoori food. Halal, no beef, free home delivery. Call 99679 46436."
        canonicalPath="/"
      />

      {/* ══════════════════════════════════════════════════════════════
          1. HERO WITH "3D-FEEL" ROTATING PLATE & PARALLAX GARNISHES
         ══════════════════════════════════════════════════════════════ */}
      <HeroPlateSection />

      {/* ── Architectural Arch Divider: Dark Green -> Cream ── */}
      <ArchDivider direction="toCream" />

      {/* ══════════════════════════════════════════════════════════════
          2. POLISHED FREE HOME DELIVERY SECTION (3-Pulse Rings)
         ══════════════════════════════════════════════════════════════ */}
      <HomeDeliveryStrip />

      {/* ══════════════════════════════════════════════════════════════
          3. MOVING STRIP (Slow Marquee of Real Dishes)
         ══════════════════════════════════════════════════════════════ */}
      <DishMarqueeStrip />

      {/* ══════════════════════════════════════════════════════════════
          4. SCROLL STORY SECTION: "WHAT WE COOK"
             Desktop: Sticky cross-fading plate. Mobile: Stacked view.
         ══════════════════════════════════════════════════════════════ */}
      <WhatWeCookStory />

      {/* ══════════════════════════════════════════════════════════════
          5. SIGNATURE DISHES AS 3D-TILT CARDS
             Desktop: 3D pointer tilt. Mobile: Scroll-snap carousel.
         ══════════════════════════════════════════════════════════════ */}
      <SignatureDishesTiltSection />

      {/* ══════════════════════════════════════════════════════════════
          6. OUR THREE DINING HALLS
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DFC9]">
        <Container size="wide">
          <SectionHeading
            kicker="Dining Facilities"
            title="Three Welcoming Halls for Every Occasion"
            description="Whether you're visiting with immediate family, a large group of friends, or prefer traditional floor seating, Noorani offers dedicated dining spaces."
            hasOrnament
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.halls.map((hall) => (
              <div
                key={hall.id}
                className="bg-white border border-[#E6DDD0] rounded-md p-6 flex flex-col justify-between shadow-xs hover:border-[#15472A]/40 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B37E1C] bg-[#F7F2E7] border border-[#E4DAC7] px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {hall.badge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#15472A]">
                    {hall.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555C50] mt-2.5 leading-relaxed">
                    {hall.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F0EAE0] text-xs font-semibold text-[#15472A]">
                  ✓ {hall.highlight}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. A NOTE FROM THE FAMILY
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DFC9]">
        <Container size="narrow">
          <div className="relative bg-white border border-[#E6DDD0] rounded-md p-6 sm:p-10 shadow-xs text-center">
            <Quote className="w-8 h-8 text-[#D49B28]/60 mx-auto mb-3" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#15472A]">
              {siteConfig.familyNote.heading}
            </h2>
            <div className="flex items-center justify-center my-3">
              <span className="h-[1px] w-6 bg-[#D49B28]/70" />
              <span className="text-[#D49B28] text-[9px] mx-1.5 leading-none">◆</span>
              <span className="h-[1px] w-6 bg-[#D49B28]/70" />
            </div>
            <p className="text-sm sm:text-base text-[#464C41] leading-relaxed max-w-xl mx-auto italic">
              "{siteConfig.familyNote.quote}"
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#B37E1C]">
              — {siteConfig.familyNote.signedBy}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Architectural Arch Divider: Cream -> Dark Green ── */}
      <ArchDivider direction="toDark" />

      {/* ══════════════════════════════════════════════════════════════
          8. TABLE BOOKING & DELIVERY CTA (Dark Green with Grain)
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#112F1E] dark-mughal-pattern subtle-grain text-[#FAF7F2] border-y border-[#235836] relative overflow-hidden">
        <Container size="default" className="relative z-10 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E8C872]">
            Table Bookings · Parcel Pickup · Free Home Delivery
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAF7F2] mt-2 max-w-2xl mx-auto leading-tight text-balance">
            Planning a Family Dinner in Mumbra?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#D1DDD3] max-w-lg mx-auto leading-relaxed">
            Reserve your table in advance in our A/C Family Hall or Dastarkhwan, or call our counter directly for free home delivery across Mumbra & Kausa.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              to="/reservations"
              variant="primary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Book a Table Online
            </Button>
            <a
              href={siteConfig.phoneLink}
              aria-label={siteConfig.phoneAriaLabel}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#FAF7F2] bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E8C872]" />
              <span>Call {siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] px-5 py-3 rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          9. VISIT-US STRIP (Real Address, 24-hour hours, Google Maps)
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-24 bg-[#F4EFE6] border-t border-[#E6DEC9]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#B37E1C]">
                  Find Us in Mumbra
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#15472A] mt-1">
                  Visit Noorani Family Restaurant
                </h2>
                <div className="h-[1.5px] w-10 bg-[#D49B28] my-3" />
                <p className="text-sm text-[#5B6356] leading-relaxed">
                  Located opposite Axis Bank in Tanwar Nagar, Kausa, with A/C Family Hall, Dastarkhwan floor seating, and parcel pickup counter.
                </p>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white text-[#C52C24] border border-[#E8DFC9] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#15472A]">Address</h3>
                    <p className="text-sm text-[#383E34] mt-0.5 leading-relaxed">{siteConfig.address}</p>
                    <p className="text-xs text-[#B37E1C] mt-0.5">{siteConfig.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white text-[#15472A] border border-[#E8DFC9] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#15472A]">Operating Hours</h3>
                    <p className="text-sm text-[#383E34] mt-0.5">
                      Open 24 Hours Daily
                    </p>
                    <p className="text-xs text-[#C52C24] font-medium mt-0.5">
                      Closed on Fridays
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white text-[#D49B28] border border-[#E8DFC9] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-bold text-[#15472A]">Telephone & Home Delivery</h3>
                    <a
                      href={siteConfig.phoneLink}
                      aria-label={siteConfig.phoneAriaLabel}
                      className="text-sm font-semibold text-[#15472A] hover:text-[#C52C24] transition-colors py-1 inline-block"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  to="/reservations"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Book a Table
                </Button>
                <Button
                  href={siteConfig.googleMapsDirectionsUrl}
                  variant="outline"
                  size="md"
                  icon={<MapPin className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Map Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-md overflow-hidden border border-[#DCD3C0] bg-white shadow-xs aspect-[16/10] sm:aspect-[16/9]">
                <iframe
                  title="Noorani Family Restaurant Location Map Mumbra"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
