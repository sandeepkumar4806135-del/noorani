/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Phone, MessageCircle, Menu, X, Calendar, ArrowRight } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { scrollY, scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const prev = lastScrollY.current;
      setIsScrolled(latest > 25);

      // On mobile: hides while scrolling down, returns while scrolling up
      if (latest > 70 && latest > prev + 6) {
        setMobileHidden(true);
      } else if (latest < prev - 6 || latest <= 70) {
        setMobileHidden(false);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  // Close drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/reservations", label: "Reservations" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DEC9] transition-transform duration-300 ${
          mobileHidden ? "-translate-y-full lg:translate-y-0" : "translate-y-0"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between gap-4 transition-all duration-300 ${
            isScrolled ? "h-14 sm:h-16 lg:h-16 shadow-xs" : "h-16 sm:h-18 lg:h-20"
          }`}
        >
          {/* Zone 1: Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#15472A] rounded-sm group py-1"
          >
            <img
              src={siteConfig.logoUrl}
              alt="Noorani Restaurant Monogram Logo"
              className={`rounded-full object-contain border border-[#D49B28]/40 group-hover:scale-105 transition-all ${
                isScrolled ? "w-8 h-8 sm:w-10 sm:h-10" : "w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold tracking-tight text-[#15472A] leading-none group-hover:text-[#0D2D1B] transition-all ${
                  isScrolled ? "text-base sm:text-xl" : "text-lg sm:text-2xl"
                }`}
              >
                {siteConfig.restaurantName}
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-[#B37E1C] font-semibold mt-1">
                Family Restaurant · Mumbra
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop 1024px and up) */}
          <nav
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-[#383D35]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative transition-colors duration-150 py-2 whitespace-nowrap min-h-[44px] flex items-center ${
                    isActive
                      ? "text-[#15472A] font-bold"
                      : "text-[#383D35] hover:text-[#15472A]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C52C24]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Phone CTA (Desktop 1024px and up) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Direct Call Button */}
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#15472A] hover:text-[#0D2D1B] px-3 py-2.5 rounded min-h-[44px] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C52C24]" />
              <span>{siteConfig.phone}</span>
            </a>

            {/* Reserve Table Primary Red CTA */}
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#C52C24] hover:bg-[#A6211A] text-white px-4 py-2.5 rounded-sm shadow-xs transition-all active:scale-[0.99] min-h-[44px]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </Link>
          </div>

          {/* Mobile & Tablet Action & Hamburger Toggle (<1024px) */}
          <div className="flex items-center gap-1 sm:gap-1.5 lg:hidden">
            <a
              href={siteConfig.phoneLink}
              aria-label="Call Noorani Restaurant"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#C52C24] hover:bg-[#C52C24]/10 rounded-full active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#15472A] hover:bg-[#15472A]/10 rounded-md cursor-pointer active:scale-95 transition-transform"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Thin Gold Scroll-Progress Line under header on desktop */}
        <motion.div
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
          className="hidden lg:block absolute bottom-0 left-0 right-0 h-[2px] bg-[#D49B28] pointer-events-none"
        />
      </header>

      {/* ── Mobile Slide-in Drawer with Backdrop (<1024px) ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Backdrop Dimmer (click outside to close) */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm h-[100dvh] bg-[#FAF7F2] border-l border-[#E6DEC9] px-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-250">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E6DEC9]">
                <div className="flex items-center gap-2.5">
                  <img
                    src={siteConfig.logoUrl}
                    alt="Noorani Logo"
                    className="w-9 h-9 rounded-full object-contain border border-[#D49B28]"
                  />
                  <div>
                    <span className="font-serif text-lg font-bold text-[#15472A] block leading-none">
                      {siteConfig.restaurantName}
                    </span>
                    <span className="text-[10px] text-[#B37E1C] uppercase tracking-wider font-semibold">
                      Family Restaurant
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-[#EAE2D2] text-[#15472A] cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links with Staggered Slide In */}
              <nav className="flex flex-col space-y-1 py-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.04 + idx * 0.035,
                      duration: 0.28,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between min-h-[44px] px-3.5 rounded-md text-base font-semibold transition-colors ${
                          isActive
                            ? "bg-[#15472A] text-white"
                            : "text-[#2B3028] hover:bg-[#EFE7D8]"
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-70" />
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-4 border-t border-[#E6DEC9] space-y-2.5">
              <a
                href={siteConfig.phoneLink}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 bg-[#15472A] text-white text-sm font-semibold rounded-sm shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#E8C872]" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-sm shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-[11px] text-[#7E8578] text-center pt-2">
                Open 24 hours daily · Closed on Fridays · Mumbra
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
