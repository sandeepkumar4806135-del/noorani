/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - HERO WITH "3D-FEEL" PLATE
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Features:
 * - Circular biryani plate photo inside double gold rings with soft contact shadow
 * - 90-second slow rotation (plate photo only)
 * - 7 floating botanical garnishes with desktop mouse parallax depth & gentle bob
 * - Subtle steam wisps rising above the plate
 * - Thin gold Mughlai arch outline & faint 4% jaali pattern
 * - Word-by-word masked headline reveal
 * - Desktop magnetic hover on buttons (max 6px)
 * - Scroll-driven scale down of plate and fade out of text
 * - Mobile-first responsive layout (plate above text, zero mouse overhead)
 */

import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { images } from "../../data/images";
import { useMotionLevel } from "../../config/motion";
import {
  RedChiliSVG,
  MintLeafSVG,
  CardamomSVG,
  StarAniseSVG,
  CinnamonStickSVG,
  LemonWedgeSVG,
  CurryLeafSVG
} from "./GarnishSVGs";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  maxDistance?: number;
}

const MagneticWrapper: React.FC<MagneticProps> = ({ children, className = "", maxDistance = 6 }) => {
  const motionLevel = useMotionLevel();
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (motionLevel !== "full") {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / (width / 2);
    const deltaY = (clientY - centerY) / (height / 2);
    setPosition({
      x: Math.max(-maxDistance, Math.min(maxDistance, deltaX * maxDistance)),
      y: Math.max(-maxDistance, Math.min(maxDistance, deltaY * maxDistance))
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const HeroPlateSection: React.FC = () => {
  const motionLevel = useMotionLevel();
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax state for desktop "full" mode
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (motionLevel !== "full") return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [motionLevel]);

  // Scroll exit animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const plateScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  // Headline words for masked reveal
  const headlineWords = [
    "Family",
    "dining,",
    "authentic",
    "Mughlai",
    "&",
    "tandoor",
    "flavour",
    "in",
    "Mumbra."
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-[#112F1E] text-[#FAF7F2] overflow-hidden pt-8 pb-14 sm:pb-20 lg:py-24 border-b border-[#235836]"
    >
      {/* ── Faint Jaali-Style Pattern (4% Opacity) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='%23D49B28' stroke-width='1'/%3E%3Ccircle cx='20' cy='20' r='4' fill='%23D49B28'/%3E%3C/svg%3E")`,
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      {/* ── Subtle Grain Texture Overlay (3% Opacity) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ══════════════════════════════════════════════════════════
              RIGHT COLUMN ON DESKTOP, FIRST ON MOBILE (The 3D Plate)
             ══════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 lg:order-2 flex flex-col items-center justify-center relative select-none">
            
            {/* Thin Gold Mughlai Arch Outline Behind Plate */}
            <div
              className="absolute -inset-4 sm:-inset-8 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 400 440"
                className="w-full max-w-[300px] sm:max-w-[420px] h-auto opacity-35"
                fill="none"
              >
                {/* Mughlai Cusped Arch Silhouette */}
                <path
                  d="M60 420V220C60 160 100 120 150 90C180 72 200 40 200 40C200 40 220 72 250 90C300 120 340 160 340 220V420"
                  stroke="#D49B28"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                />
                <circle cx="200" cy="38" r="3" fill="#D49B28" />
              </svg>
            </div>

            {/* Plate Wrapper (responds to scroll exit scale) */}
            <motion.div
              style={motionLevel === "full" ? { scale: plateScale } : undefined}
              className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[390px] lg:h-[390px] max-w-[70vw] max-h-[70vw] sm:max-w-none sm:max-h-none"
            >
              {/* Soft Elliptical Contact Shadow Beneath Plate */}
              <div
                className="absolute -bottom-5 sm:-bottom-8 w-[82%] h-7 sm:h-9 rounded-[100%] pointer-events-none -z-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0) 75%)"
                }}
                aria-hidden="true"
              />

              {/* Double Gold Ring Around Plate (Stationary: does NOT rotate) */}
              <div
                className="absolute inset-0 rounded-full border-2 border-[#D49B28] shadow-[0_12px_36px_rgba(0,0,0,0.55)] pointer-events-none z-10"
                aria-hidden="true"
              >
                <div className="absolute inset-1.5 rounded-full border border-[#FAF7F2]/25" />
              </div>

              {/* Subtle Rising Steam Wisps (SVG Paths) */}
              {motionLevel !== "off" && (
                <div
                  className="absolute -top-10 sm:-top-16 inset-x-0 h-24 flex items-center justify-center pointer-events-none z-20 overflow-visible"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 160 100" className="w-36 h-24 overflow-visible" fill="none">
                    <motion.path
                      d="M65 85C60 65 75 45 68 25C65 15 60 5 62 0"
                      stroke="#FAF7F2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      animate={
                        motionLevel === "full"
                          ? {
                              opacity: [0, 0.28, 0],
                              pathOffset: [0, 1]
                            }
                          : { opacity: 0.18 }
                      }
                      transition={
                        motionLevel === "full"
                          ? {
                              duration: 4.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          : undefined
                      }
                    />
                    <motion.path
                      d="M80 85C85 68 75 50 82 30C86 18 80 8 78 0"
                      stroke="#FAF7F2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      animate={
                        motionLevel === "full"
                          ? {
                              opacity: [0, 0.22, 0],
                              pathOffset: [0, 1]
                            }
                          : { opacity: 0.15 }
                      }
                      transition={
                        motionLevel === "full"
                          ? {
                              duration: 5.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.2
                            }
                          : undefined
                      }
                    />
                    <motion.path
                      d="M95 85C92 70 102 52 96 32C92 20 95 10 94 0"
                      stroke="#FAF7F2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={
                        motionLevel === "full"
                          ? {
                              opacity: [0, 0.25, 0],
                              pathOffset: [0, 1]
                            }
                          : { opacity: 0.15 }
                      }
                      transition={
                        motionLevel === "full"
                          ? {
                              duration: 4.8,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2.2
                            }
                          : undefined
                      }
                    />
                  </svg>
                </div>
              )}

              {/* The Rotating Circular Biryani Plate (ONLY the image rotates at 90s/turn) */}
              <div className="relative w-full h-full rounded-full overflow-hidden p-1 z-0">
                <motion.div
                  animate={
                    motionLevel === "full"
                      ? { rotate: 360 }
                      : undefined
                  }
                  transition={
                    motionLevel === "full"
                      ? {
                          duration: 90,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      : undefined
                  }
                  className="w-full h-full rounded-full overflow-hidden"
                >
                  <img
                    src={images.hero.src}
                    alt={images.hero.alt}
                    loading="eager"
                    className="w-full h-full object-cover scale-[1.08] pointer-events-none select-none rounded-full"
                  />
                </motion.div>
              </div>

              {/* ── 7 Botanical Floating Garnishes with Depth Multipliers ── */}
              {/* Garnish 1: Red Chili (Top Left, depth 25) */}
              <motion.div
                className="absolute -top-3 -left-4 sm:-top-5 sm:-left-6 pointer-events-none z-30 drop-shadow-md"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * 24,
                        y: [0, -6, 0],
                        rotate: [-15, -12, -15]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                      }
                    : undefined
                }
              >
                <RedChiliSVG className="w-10 h-10 sm:w-13 sm:h-13" />
              </motion.div>

              {/* Garnish 2: Mint Leaf (Top Right, depth -20) */}
              <motion.div
                className="absolute -top-2 right-2 sm:-top-4 sm:right-6 pointer-events-none z-30 drop-shadow-sm"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * -20,
                        y: [0, -7, 0],
                        rotate: [20, 26, 20]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                        rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                      }
                    : undefined
                }
              >
                <MintLeafSVG className="w-9 h-9 sm:w-12 sm:h-12" />
              </motion.div>

              {/* Garnish 3: Cardamom Pod (Left Center, depth 35) */}
              <motion.div
                className="absolute top-1/2 -left-6 sm:-left-9 -translate-y-1/2 pointer-events-none z-30 drop-shadow-sm"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * 32,
                        y: [0, 5, 0],
                        rotate: [-8, -2, -8]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut" }
                      }
                    : undefined
                }
              >
                <CardamomSVG className="w-8 h-8 sm:w-10 sm:h-10" />
              </motion.div>

              {/* Garnish 4: Star Anise (Bottom Right, depth -30) */}
              <motion.div
                className="absolute bottom-2 -right-3 sm:bottom-4 sm:-right-6 pointer-events-none z-30 drop-shadow-md"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * -28,
                        y: [0, -5, 0],
                        rotate: [12, 18, 12]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                        rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
                      }
                    : undefined
                }
              >
                <StarAniseSVG className="w-10 h-10 sm:w-12 sm:h-12" />
              </motion.div>

              {/* Garnish 5: Cinnamon Stick (Bottom Left, depth 20) */}
              <motion.div
                className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-8 pointer-events-none z-30 drop-shadow-sm"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * 18,
                        y: [0, 6, 0],
                        rotate: [-35, -30, -35]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                      }
                    : undefined
                }
              >
                <CinnamonStickSVG className="w-10 h-10 sm:w-13 sm:h-13" />
              </motion.div>

              {/* Garnish 6: Lemon Wedge (Far Right Center, depth -18) */}
              <motion.div
                className="absolute top-1/3 -right-6 sm:-right-8 pointer-events-none z-30 drop-shadow-sm"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * -16,
                        y: [0, -6, 0],
                        rotate: [45, 52, 45]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                      }
                    : undefined
                }
              >
                <LemonWedgeSVG className="w-9 h-9 sm:w-11 sm:h-11" />
              </motion.div>

              {/* Garnish 7: Curry Leaf (Top Center, depth 15) */}
              <motion.div
                className="absolute -top-6 left-1/3 pointer-events-none z-30 drop-shadow-sm"
                animate={
                  motionLevel === "full"
                    ? {
                        x: mousePos.x * 15,
                        y: [0, 5, 0],
                        rotate: [10, 15, 10]
                      }
                    : undefined
                }
                transition={
                  motionLevel === "full"
                    ? {
                        y: { duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                      }
                    : undefined
                }
              >
                <CurryLeafSVG className="w-8 h-8 sm:w-10 sm:h-10" />
              </motion.div>
            </motion.div>

            {/* Quiet plate caption under shadow */}
            <p className="font-serif text-xs text-[#E8C872] mt-5 sm:mt-6 tracking-wide text-center">
              Slow-dum Mughlai Biryani & Charcoal Tandoor · Prepared Fresh Daily
            </p>
          </div>

          {/* ══════════════════════════════════════════════════════════
              LEFT COLUMN (Headline & Actions)
             ══════════════════════════════════════════════════════════ */}
          <motion.div
            style={motionLevel === "full" ? { opacity: textOpacity } : undefined}
            className="lg:col-span-7 lg:order-1 flex flex-col items-start"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-[#1B4D2E] border border-[#2B6D44] text-[#E8C872] px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8C872]" />
              <span>100% Halal · Strictly No Beef · Mumbra, Thane</span>
            </div>

            {/* Word-by-Word Masked Headline Reveal */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-[1.18] text-balance">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-2 sm:mr-2.5 pb-1">
                  {motionLevel === "off" ? (
                    <span>{word}</span>
                  ) : (
                    <motion.span
                      initial={{ y: "105%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.08 + i * 0.04
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  )}
                </span>
              ))}
            </h1>

            {/* One-line description naming the four cuisines */}
            <p className="mt-4 text-base sm:text-lg text-[#D2DFD6] leading-relaxed max-w-xl">
              Serving slow-dum biryanis, hot charcoal tandoori platters, classic Indian curries, and wok-tossed Chinese under one welcoming roof in Tanwar Nagar, Kausa.
            </p>

            {/* Four Cuisines Quiet Text Line */}
            <div className="mt-5 pt-3 border-t border-white/15 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold uppercase tracking-wider text-[#E8C872]">
              <span>Indian</span>
              <span className="text-white/40">·</span>
              <span>Mughlai</span>
              <span className="text-white/40">·</span>
              <span>Chinese</span>
              <span className="text-white/40">·</span>
              <span>Tandoori</span>
            </div>

            {/* Action Buttons: Stacked on mobile, magnetic hover on desktop */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <MagneticWrapper className="w-full sm:w-auto">
                <Link
                  to="/menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D49B28] hover:bg-[#B37E1C] text-[#141715] text-sm font-semibold rounded-xs shadow-md transition-all active:scale-[0.99] min-h-[46px]"
                >
                  <span>View Full Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticWrapper>

              <MagneticWrapper className="w-full sm:w-auto">
                <Link
                  to="/reservations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C52C24] hover:bg-[#A6211A] text-white text-sm font-semibold rounded-xs shadow-md transition-all active:scale-[0.99] min-h-[46px]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </Link>
              </MagneticWrapper>

              <MagneticWrapper className="w-full sm:w-auto">
                <a
                  href={siteConfig.phoneLink}
                  aria-label={siteConfig.phoneAriaLabel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#FAF7F2] hover:text-[#E8C872] px-4 py-3 rounded-xs min-h-[46px] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C52C24]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroPlateSection;
