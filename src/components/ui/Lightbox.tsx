/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useMotionLevel } from "../../config/motion";

export interface LightboxItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface LightboxProps {
  isOpen: boolean;
  item: LightboxItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  item,
  onClose,
  onNext,
  onPrev,
  hasPrev = false,
  hasNext = false
}) => {
  const motionLevel = useMotionLevel();
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext && hasNext) onNext();
      if (e.key === "ArrowLeft" && onPrev && hasPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe threshold: 50px
    if (diff > 50 && hasNext && onNext) {
      onNext();
    } else if (diff < -50 && hasPrev && onPrev) {
      onPrev();
    }
    setTouchStart(null);
  };

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close photo view"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev button */}
        {hasPrev && onPrev && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next button */}
        {hasNext && onNext && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Image content with smooth zoom from clicked photo */}
        <motion.div
          layoutId={motionLevel === "off" ? undefined : `gallery-item-${item.id}`}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl max-h-[85vh] flex flex-col items-center z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-md shadow-2xl bg-black border border-white/10">
            <img
              src={item.src}
              alt={item.alt}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] w-auto max-w-full object-contain select-none"
            />
          </div>

          {/* Caption */}
          <div className="mt-3 text-center">
            <p className="text-xs uppercase tracking-wider text-[#D49B28] font-semibold">
              {item.category} · Noorani Mumbra
            </p>
            <h3 className="font-serif text-lg sm:text-xl text-white font-medium mt-0.5">
              {item.title}
            </h3>
            <span className="text-[11px] text-white/50 block sm:hidden mt-1">
              Swipe left / right to navigate
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
