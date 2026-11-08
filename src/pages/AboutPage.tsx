/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - ABOUT PAGE (DESIGN UPGRADE ROUND 2)
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Features:
 * - True, editable intro block with smooth image reveal
 * - "Our Halls" cards with arch-shaped frames, staggered reveal and gentle hover lift
 * - Kitchen standards and halal integrity
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";
import { images } from "../data/images";
import { useMotionLevel, fadeUpVariant, staggerContainerVariant } from "../config/motion";

export const AboutPage: React.FC = () => {
  const motionLevel = useMotionLevel();

  return (
    <>
      <SEO
        title="Our Story & Halls - Noorani Family Restaurant Mumbra"
        description="Learn about the culinary traditions of Noorani Family Restaurant in Mumbra, Thane. Featuring our A/C Family Hall, Main Dining Hall, and traditional Dastarkhwan floor dining."
        canonicalPath="/about"
      />

      {/* ── Page Header ── */}
      <section className="bg-[#112F1E] dark-mughal-pattern text-[#FAF7F2] py-12 sm:py-20 border-b border-[#235836]">
        <Container size="default">
          <SectionHeading
            kicker="Our Kitchen & Heritage · Mumbra"
            title="Hospitality Rooted in Good Food and Family Values"
            description="Noorani was created to bring families together around unpretentious, hearty meals prepared with true care in Tanwar Nagar, Kausa, Mumbra."
            theme="dark"
            hasOrnament
          />
        </Container>
      </section>

      {/* ── Short, True, Editable Intro Block with Image Reveal ── */}
      <section className="py-14 sm:py-24 bg-[#FAF7F2]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B37E1C]">
                About Our Restaurant
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#15472A] leading-tight text-balance">
                Family dining in Kausa, Mumbra.
              </h2>
              <div className="h-[1.5px] w-10 bg-[#D49B28] my-3" />
              <p className="text-sm sm:text-base text-[#464C41] leading-relaxed">
                Noorani is a family restaurant located in Tanwar Nagar, Kausa, Mumbra. We serve Indian, Mughlai, Chinese, and Tandoori cuisine for family dining, takeaway, and parcel delivery.
              </p>
              <p className="text-sm sm:text-base text-[#464C41] leading-relaxed">
                The restaurant features three distinct seating areas: an A/C Family Hall, a Main Dining Hall, and a traditional Dastarkhwan Hall. We are open 24 hours every day, except Friday when the restaurant is closed. We also provide free home delivery across Mumbra and Kausa.
              </p>

              {/* Two honest points */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white border border-[#E8DFC9] rounded-sm shadow-2xs">
                  <Flame className="w-5 h-5 text-[#C52C24] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#15472A]">Open 24 Hours</h3>
                    <p className="text-xs text-[#636A5E] mt-0.5">Open 24 hours daily (closed on Fridays).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-[#E8DFC9] rounded-sm shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-[#15472A] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#15472A]">100% Halal · Strictly No Beef</h3>
                    <p className="text-xs text-[#636A5E] mt-0.5">All meats are halal certified. No beef is served.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dining Room Image with Arch Reveal Frame */}
            <div className="lg:col-span-5">
              <motion.div
                initial={motionLevel === "off" ? undefined : { opacity: 0, y: 20 }}
                whileInView={motionLevel === "off" ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-t-[3.5rem] rounded-b-md overflow-hidden border-2 border-[#D49B28] bg-white shadow-xl"
              >
                <div className="overflow-hidden">
                  <ImageWithFallback
                    src={images.about.diningRoom.src}
                    alt={images.about.diningRoom.alt}
                    fallbackTitle={images.about.diningRoom.title}
                    aspectRatioClass="aspect-[4/3]"
                    className="hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#F0EAE0]">
                  <p className="font-serif font-bold text-sm text-[#15472A]">Family Dining in Mumbra</p>
                  <p className="text-xs text-[#6B7266] mt-0.5">Spacious seating arranged for family comfort with dedicated service.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Section 2: Our Three Halls with Arch-Shaped Frames & Hover Lift ── */}
      <section className="py-14 sm:py-24 bg-[#F4EFE6] border-y border-[#E6DEC9]">
        <Container size="wide">
          <SectionHeading
            kicker="Our Dining Spaces"
            title="Designed for Every Dining Tradition"
            description="At Noorani, we offer three distinct dining experiences tailored to how families and groups like to eat."
            hasOrnament
          />

          <motion.div
            variants={motionLevel === "off" ? undefined : staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {siteConfig.halls.map((hall, idx) => (
              <motion.div
                key={hall.id}
                variants={motionLevel === "off" ? undefined : fadeUpVariant}
                whileHover={motionLevel === "off" ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group bg-white border border-[#E4D9C4] hover:border-[#D49B28] rounded-t-[3rem] rounded-b-md p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Decorative Arch Top Marker */}
                  <div className="w-12 h-12 rounded-full border border-[#D49B28] flex items-center justify-center mx-auto mb-4 bg-[#FAF7F2] text-[#15472A] font-serif font-bold text-lg group-hover:bg-[#15472A] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>

                  <div className="text-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#15472A] bg-[#E8F2EC] px-2.5 py-0.5 rounded-full border border-[#CDE1D4] inline-block">
                      {hall.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#15472A] text-center">
                    {hall.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555C50] mt-3 leading-relaxed text-center">
                    {hall.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F0EAE0] text-xs font-semibold text-[#B37E1C] text-center">
                  ✓ {hall.highlight}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Section 3: Kitchen Standards & Care ── */}
      <section className="py-14 sm:py-24 bg-[#FAF7F2]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-lg overflow-hidden border border-[#E0D7C5] bg-white shadow-xs">
              <ImageWithFallback
                src={images.about.kitchenTandoor.src}
                alt={images.about.kitchenTandoor.alt}
                fallbackTitle={images.about.kitchenTandoor.title}
                aspectRatioClass="aspect-[4/3]"
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B37E1C]">
                Kitchen Standards
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#15472A]">
                Care in Every Preparation
              </h2>
              <div className="h-[1.5px] w-10 bg-[#D49B28] my-2" />
              <p className="text-sm text-[#495044] leading-relaxed">
                Our kitchen in Kausa, Mumbra prepares Indian, Mughlai, Chinese, and Tandoori dishes following clear standards for dining and takeaway.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#383E33]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#15472A] shrink-0 mt-0.5" />
                  <span>100% Halal certified meats used across all non-vegetarian dishes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#15472A] shrink-0 mt-0.5" />
                  <span>Strictly no beef served anywhere on the premises</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#15472A] shrink-0 mt-0.5" />
                  <span>Dedicated vegetarian and paneer dishes available across all categories</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#15472A] shrink-0 mt-0.5" />
                  <span>Free home delivery service available across Mumbra and Kausa</span>
                </li>
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Button to="/menu" variant="primary" size="md" className="w-full sm:w-auto">
                  Browse Menu
                </Button>
                <Button to="/reservations" variant="outline" size="md" className="w-full sm:w-auto">
                  Reserve a Table
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
