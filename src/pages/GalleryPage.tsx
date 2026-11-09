/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, Info } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Lightbox, LightboxItem } from "../components/ui/Lightbox";
import { SEO } from "../components/ui/SEO";
import { images } from "../data/images";
import { useMotionLevel, fadeUpVariant, staggerContainerVariant } from "../config/motion";

export const GalleryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<LightboxItem | null>(null);
  const motionLevel = useMotionLevel();

  // Show only authentic food photos
  const foodPhotos = images.gallery.filter((item) => item.category === "Food");

  const currentIndex = selectedPhoto
    ? foodPhotos.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < foodPhotos.length - 1) {
      setSelectedPhoto(foodPhotos[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(foodPhotos[currentIndex - 1]);
    }
  };

  return (
    <>
      <SEO
        title="Gallery — Noorani Family Restaurant | Mumbra"
        description="View authentic dish photos from Noorani Family Restaurant in Mumbra. Charcoal tandoori platters, slow-dum biryani, and rich Mughlai specialties. Halal."
        canonicalPath="/gallery"
      />

      {/* ── Page Header ── */}
      <section className="bg-[#112F1E] dark-mughal-pattern text-[#FAF7F2] py-12 sm:py-20 border-b border-[#235836]">
        <Container size="default">
          <SectionHeading
            kicker="Culinary Showcase"
            title="From the Menu"
            description="Photographs of dishes from our Indian, Mughlai, Chinese, and Tandoori menu at Noorani in Mumbra."
            theme="dark"
            hasOrnament
          />
        </Container>
      </section>

      {/* ── Gallery Section with Mixed-Size Masonry ── */}
      <section className="py-12 sm:py-20 bg-[#FAF7F2] pb-24 md:pb-24">
        <Container size="wide">
          {/* Authentic illustration disclaimer */}
          <div className="mb-8 p-3.5 bg-[#FAF4E6] border border-[#E4D8BD] rounded-md flex items-center justify-center gap-2.5 text-xs text-[#5C6457] text-center max-w-2xl mx-auto">
            <Info className="w-4 h-4 text-[#B37E1C] shrink-0" />
            <span>Images are for illustration.</span>
          </div>

          {/* Mixed-Size Masonry Grid: 2 cols on mobile, 3 on tablet, 12 on desktop */}
          <motion.div
            variants={motionLevel === "off" ? undefined : staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-6 items-stretch"
          >
            {foodPhotos.map((photo, idx) => {
              // Asymmetric masonry spans for natural visual hierarchy
              const isLarge = idx === 0 || idx === 7;
              const isMedium = idx === 1 || idx === 4 || idx === 8;
              const colSpan = isLarge
                ? "col-span-2 md:col-span-2 lg:col-span-8"
                : isMedium
                ? "col-span-1 md:col-span-1 lg:col-span-4"
                : "col-span-1 md:col-span-1 lg:col-span-4";

              const aspectRatio = isLarge ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3]";

              return (
                <motion.div
                  key={photo.id}
                  variants={motionLevel === "off" ? undefined : fadeUpVariant}
                  className={`${colSpan} group`}
                >
                  <motion.div
                    layoutId={motionLevel === "off" ? undefined : `gallery-item-${photo.id}`}
                    onClick={() => setSelectedPhoto(photo)}
                    className="relative h-full rounded-md overflow-hidden bg-white border border-[#E4DAC7] shadow-xs cursor-pointer hover:border-[#D49B28] transition-all hover:shadow-xl flex flex-col justify-between"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setSelectedPhoto(photo);
                    }}
                    aria-label={`View dish photo: ${photo.title}`}
                  >
                    <div className={`relative overflow-hidden ${aspectRatio} bg-[#F4EFE6]`}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white border border-white/30">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* Caption Bar */}
                    <div className="p-2.5 sm:p-4 bg-white border-t border-[#F0EAE0] flex items-center justify-between">
                      <div className="min-w-0 pr-1">
                        <h3 className="font-serif font-bold text-xs sm:text-base text-[#15472A] group-hover:text-[#C52C24] transition-colors truncate">
                          {photo.title}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] text-[#71786C] mt-0.5 line-clamp-1">{photo.alt}</p>
                      </div>
                      <span className="hidden sm:inline-block text-xs font-semibold text-[#B37E1C] uppercase tracking-wider shrink-0 ml-2">
                        View &rarr;
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Lightbox with Swipe on Mobile & Smooth Zoom */}
      <Lightbox
        isOpen={!!selectedPhoto}
        item={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={currentIndex < foodPhotos.length - 1}
        hasPrev={currentIndex > 0}
      />
    </>
  );
};

export default GalleryPage;
