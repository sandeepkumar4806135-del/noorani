/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - COMPLETE MENU PAGE
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Performance-governed menu page hosting all 526 items:
 * - Group banner image (no parallax)
 * - Sliding active category pill (layoutId)
 * - Animated Veg/Non-Veg segmented switch (layoutId)
 * - Smooth fade on group/search changes (AnimatePresence)
 * - In-group section jump chips
 * - Floating Back-to-Top button
 * - content-visibility: auto on long sections for silky 60fps scrolling
 * - Strictly zero per-dish scroll animations
 */

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Phone, ShieldCheck, ArrowUp, ChevronRight } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MenuItemCard } from "../components/ui/MenuItemCard";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";
import { images } from "../data/images";
import { menuGroups, menuItems, MenuGroup } from "../data/menu";

type VegFilter = "all" | "veg" | "non-veg";

// Static Banner Images for Menu Groups (No Parallax)
const GROUP_BANNERS: Record<string, { image: string; subtitle: string }> = {
  All: {
    image: images.hero.src,
    subtitle: "Complete physical restaurant dining and parcel menu"
  },
  Chicken: {
    image: images.cuisines.mughlai.src,
    subtitle: "Slow-simmered gravies, handi curries, and boneless specials"
  },
  Mutton: {
    image: images.gallery[5].src,
    subtitle: "Tender goat mutton cooked with Kashmiri spices and marrow broths"
  },
  "Tandoori & Kabab": {
    image: images.cuisines.tandoori.src,
    subtitle: "Clay tandoor roasted chicken tikkas, seekh kebabs, and fresh naans"
  },
  "Biryani & Rice": {
    image: images.hero.src,
    subtitle: "Authentic dum biryanis, khapsa platters, and fragrant basmati"
  },
  Chinese: {
    image: images.cuisines.chinese.src,
    subtitle: "High-flame wok tossed noodles, Schezwan fried rice, and crispy starters"
  },
  "Veg & Paneer": {
    image: images.gallery[3].src,
    subtitle: "Pure vegetarian handis, soft cottage cheese, and dal tadka"
  },
  "Drinks & Desserts": {
    image: images.gallery[0].src,
    subtitle: "Noorani special falooda, fresh lime sodas, and chilled milkshakes"
  },
  "Fast Food": {
    image: images.cuisines.chinese.src,
    subtitle: "Grilled sandwiches, burgers, and crispy parcels"
  },
  "Roti & Sides": {
    image: images.about.kitchenTandoor.src,
    subtitle: "Butter naans, tandoori rotis, raitas, and fresh salads"
  },
  "Party Orders": {
    image: images.hero.src,
    subtitle: "Mehmaan Khana 1/2 Kg & 1 Kg handis and biryani by weight"
  }
};

export const MenuPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeGroup, setActiveGroup] = useState<MenuGroup | "All">("All");
  const [vegFilter, setVegFilter] = useState<VegFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync group query param if present
  useEffect(() => {
    const groupParam = searchParams.get("group");
    if (groupParam && (menuGroups as readonly string[]).includes(groupParam)) {
      setActiveGroup(groupParam as MenuGroup);
    }
  }, [searchParams]);

  // Auto-scroll active category tab into center
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const tab = activeTabRef.current;
      const offset = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [activeGroup]);

  // Filter items based on activeGroup, vegFilter, and searchQuery
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      if (activeGroup !== "All" && item.group !== activeGroup) {
        return false;
      }
      if (vegFilter === "veg" && !item.isVeg) {
        return false;
      }
      if (vegFilter === "non-veg" && item.isVeg) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesSub = item.subCategory?.toLowerCase().includes(query);
        const matchesGroup = item.group.toLowerCase().includes(query);
        const matchesTag = item.tags?.some((t) => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesSub && !matchesGroup && !matchesTag) {
          return false;
        }
      }
      return true;
    });
  }, [activeGroup, vegFilter, searchQuery]);

  // Group items by menuGroup and subCategory
  const groupedSections = useMemo(() => {
    const targetGroups = activeGroup === "All" ? menuGroups : [activeGroup];

    return targetGroups
      .map((grp) => {
        const itemsInGroup = filteredItems.filter((it) => it.group === grp);
        if (itemsInGroup.length === 0) return null;

        const subCats = Array.from(new Set(itemsInGroup.map((it) => it.subCategory)));
        const subSections = subCats.map((sub) => ({
          subCategory: sub,
          items: itemsInGroup.filter((it) => it.subCategory === sub)
        }));

        return {
          group: grp,
          totalCount: itemsInGroup.length,
          subSections
        };
      })
      .filter((g): g is NonNullable<typeof g> => g !== null);
  }, [activeGroup, filteredItems]);

  // Collect available subcategory jump chips within active group
  const subCategoryChips = useMemo(() => {
    if (activeGroup === "All") return [];
    const groupData = groupedSections.find((g) => g.group === activeGroup);
    if (!groupData) return [];
    return groupData.subSections
      .map((s) => s.subCategory)
      .filter((sub) => sub && sub !== activeGroup);
  }, [activeGroup, groupedSections]);

  const bannerData = GROUP_BANNERS[activeGroup] || GROUP_BANNERS.All;

  const scrollToSection = (subId: string) => {
    const el = document.getElementById(subId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Restaurant Menu - Noorani Family Restaurant Mumbra"
        description="Browse the complete dining and takeaway menu of Noorani Family Restaurant in Mumbra, Thane. Tandoori starters, Dum Biryani, Khapsa, Batair, Tawa Takatak, Seafood, and Mughlai curries."
        canonicalPath="/menu"
      />

      {/* ── Page Header Banner with Group Image (NO Parallax) ── */}
      <section className="relative bg-[#112F1E] text-[#FAF7F2] overflow-hidden border-b border-[#235836]">
        {/* Static Background Image Container with dark gradient overlay (zero layout shift) */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src={bannerData.image}
            alt={activeGroup}
            loading="eager"
            className="w-full h-full object-cover opacity-20 filter brightness-75 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112F1E] via-[#112F1E]/80 to-[#112F1E]/90" />
        </div>

        <Container size="default" className="relative z-10 py-10 sm:py-16">
          <SectionHeading
            kicker="Mumbra, Thane · 526 Menu Items"
            title={activeGroup === "All" ? "The Noorani Dining Menu" : `${activeGroup} Specialties`}
            description={bannerData.subtitle}
            theme="dark"
            hasOrnament
          />

          {/* Halal & No Beef Trust Badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#E8C872]">
            <span className="inline-flex items-center gap-1.5 bg-[#1B4D2E] border border-[#2B6D44] px-3 py-1 rounded-full font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8C872]" />
              {siteConfig.dietaryFeatures.halalNote}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#1B4D2E] border border-[#2B6D44] px-3 py-1 rounded-full font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E8C872]" />
              {siteConfig.dietaryFeatures.noBeefNote}
            </span>
          </div>
        </Container>
      </section>

      {/* ── Free Home Delivery Direct Order Banner ── */}
      <section className="bg-[#FAF4E6] border-b border-[#E4D8BE] py-3.5 text-xs text-[#2A3125]">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <div>
              <span className="font-bold text-[#15472A] uppercase tracking-wider">Free Home Delivery: </span>
              <span className="text-[#5B6356]">Hot parcel delivery across Mumbra & Kausa</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {siteConfig.deliveryPhones.map((del) => (
                <a
                  key={del.id}
                  href={del.link}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#DCD0B7] hover:border-[#15472A] px-2.5 py-1 rounded text-xs font-bold text-[#15472A] hover:text-[#C52C24] transition-colors shadow-2xs min-h-[38px]"
                >
                  <Phone className="w-3 h-3 text-[#C52C24]" />
                  <span>{del.number}</span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Sticky Filter & Search Toolbar (Height capped <=112px on mobile) ── */}
      <div className="sticky top-14 sm:top-16 lg:top-16 z-30 bg-[#FAF7F2]/98 backdrop-blur-md border-b border-[#E6DEC9] shadow-xs py-2 sm:py-3 transition-all">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A8275]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Biryani, Takatak, Khapsa, Batair)..."
                className="w-full bg-white border border-[#DCD3C0] rounded-md pl-10 pr-9 py-2.5 text-base sm:text-sm text-[#1F241C] placeholder-[#8A9184] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7A8275] hover:text-[#1F241C] p-1.5 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Animated Segmented Control */}
            <div className="flex items-center gap-1 bg-[#ECE5D8] p-1 rounded-md self-start sm:self-auto shrink-0 relative">
              <button
                onClick={() => setVegFilter("all")}
                className={`relative px-3 py-2 text-xs font-semibold rounded min-h-[38px] transition-colors cursor-pointer z-10 ${
                  vegFilter === "all" ? "text-white" : "text-[#4B5246] hover:text-[#15472A]"
                }`}
              >
                {vegFilter === "all" && (
                  <motion.span
                    layoutId="veg-filter-active"
                    className="absolute inset-0 bg-[#15472A] rounded shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span>All Dishes</span>
              </button>

              <button
                onClick={() => setVegFilter("veg")}
                className={`relative px-3 py-2 text-xs font-semibold rounded min-h-[38px] flex items-center gap-1.5 transition-colors cursor-pointer z-10 ${
                  vegFilter === "veg" ? "text-emerald-900" : "text-[#4B5246] hover:text-emerald-700"
                }`}
              >
                {vegFilter === "veg" && (
                  <motion.span
                    layoutId="veg-filter-active"
                    className="absolute inset-0 bg-white border border-emerald-600/30 rounded shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Veg Only</span>
              </button>

              <button
                onClick={() => setVegFilter("non-veg")}
                className={`relative px-3 py-2 text-xs font-semibold rounded min-h-[38px] flex items-center gap-1.5 transition-colors cursor-pointer z-10 ${
                  vegFilter === "non-veg" ? "text-[#C52C24]" : "text-[#4B5246] hover:text-[#C52C24]"
                }`}
              >
                {vegFilter === "non-veg" && (
                  <motion.span
                    layoutId="veg-filter-active"
                    className="absolute inset-0 bg-white border border-[#C52C24]/30 rounded shadow-xs -z-10"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="w-2 h-2 rounded-full bg-[#C52C24]" />
                <span>Non-Veg</span>
              </button>
            </div>
          </div>

          {/* Horizontal Category Scroller with Sliding Pill */}
          <div
            ref={tabsContainerRef}
            className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-none text-xs scroll-smooth"
          >
            <button
              ref={activeGroup === "All" ? activeTabRef : null}
              onClick={() => setActiveGroup("All")}
              className={`relative px-3.5 py-2 min-h-[38px] rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer shrink-0 ${
                activeGroup === "All"
                  ? "text-white font-semibold"
                  : "bg-white border border-[#DDD4C3] text-[#4A5044] hover:bg-[#F2ECE1]"
              }`}
            >
              {activeGroup === "All" && (
                <motion.span
                  layoutId="menu-category-active-pill"
                  className="absolute inset-0 bg-[#15472A] rounded-full -z-0"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">All Sections ({menuItems.length})</span>
            </button>
            {menuGroups.map((grp) => {
              const isActive = activeGroup === grp;
              return (
                <button
                  key={grp}
                  ref={isActive ? activeTabRef : null}
                  onClick={() => setActiveGroup(grp)}
                  className={`relative px-3.5 py-2 min-h-[38px] rounded-full whitespace-nowrap font-medium transition-colors cursor-pointer shrink-0 ${
                    isActive
                      ? "text-white font-semibold"
                      : "bg-white border border-[#DDD4C3] text-[#4A5044] hover:bg-[#F2ECE1]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-category-active-pill"
                      className="absolute inset-0 bg-[#15472A] rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{grp}</span>
                </button>
              );
            })}
          </div>

          {/* ── Subcategory Section Jump Chips (Within active group) ── */}
          {subCategoryChips.length > 1 && (
            <div className="mt-2.5 pt-2 border-t border-[#EAE2D0] flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[11px]">
              <span className="text-[#8E9588] shrink-0 font-medium">Jump to:</span>
              {subCategoryChips.map((chip) => {
                const subId = `sub-${chip.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                return (
                  <button
                    key={chip}
                    onClick={() => scrollToSection(subId)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#DDD3BF] hover:border-[#15472A] text-[#15472A] rounded-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                  >
                    <span>{chip}</span>
                    <ChevronRight className="w-3 h-3 opacity-60" />
                  </button>
                );
              })}
            </div>
          )}
        </Container>
      </div>

      {/* ── Menu Items Listing (content-visibility: auto for smooth scroll) ── */}
      <section className="py-10 sm:py-16 bg-[#FAF7F2] min-h-[60vh] pb-24 md:pb-16">
        <Container size="wide">
          {/* Active filter summary */}
          <div className="flex items-center justify-between text-xs text-[#71786D] mb-8 pb-3 border-b border-[#E8DFC9]">
            <span>
              Showing <strong className="text-[#15472A]">{filteredItems.length}</strong> dish
              {filteredItems.length === 1 ? "" : "es"}
              {activeGroup !== "All" && ` in ${activeGroup}`}
              {vegFilter !== "all" && ` (${vegFilter === "veg" ? "Pure Vegetarian" : "Non-Vegetarian"})`}
              {searchQuery && ` matching "${searchQuery}"`}
            </span>

            {(activeGroup !== "All" || vegFilter !== "all" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveGroup("All");
                  setVegFilter("all");
                  setSearchQuery("");
                }}
                className="text-[#C52C24] hover:underline font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Smooth Fade Transition when Switching Groups or Searching */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeGroup}-${vegFilter}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {/* Empty State */}
              {filteredItems.length === 0 ? (
                <div className="py-16 text-center max-w-md mx-auto bg-white border border-[#E8DFC9] rounded-md p-8">
                  <div className="w-12 h-12 rounded-full bg-[#15472A]/10 text-[#15472A] flex items-center justify-center mx-auto mb-3">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#15472A]">
                    No matching dishes found
                  </h3>
                  <p className="text-sm text-[#5B6356] mt-2">
                    We couldn't find anything matching your current filters. Try searching for "Biryani", "Paneer", "Tandoori", or clear the filter.
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => {
                        setActiveGroup("All");
                        setVegFilter("all");
                        setSearchQuery("");
                      }}
                      variant="primary"
                      size="sm"
                    >
                      Clear All Filters
                    </Button>
                  </div>
                </div>
              ) : (
                /* Grouped Sections with content-visibility: auto */
                <div className="space-y-12">
                  {groupedSections.map((section) => (
                    <div
                      key={section.group}
                      id={section.group.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                      style={{
                        contentVisibility: "auto",
                        containIntrinsicSize: "1px 500px"
                      }}
                      className="bg-white border border-[#E8DEC8] rounded-md p-4 sm:p-7 shadow-xs"
                    >
                      {/* Category Title Header */}
                      <div className="flex items-center justify-between pb-3.5 mb-5 border-b-2 border-[#15472A]">
                        <div className="flex items-center gap-3">
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#15472A]">
                            {section.group}
                          </h2>
                          <span className="text-xs font-semibold text-[#B37E1C] bg-[#F7F2E7] border border-[#E2D7C2] px-2.5 py-0.5 rounded-full">
                            {section.totalCount} items
                          </span>
                        </div>
                        <span className="hidden sm:inline-block text-xs font-semibold text-[#666F5F] uppercase tracking-wider">
                          Noorani Mumbra
                        </span>
                      </div>

                      {/* Subsections */}
                      <div className="space-y-6">
                        {section.subSections.map((sub) => {
                          const subId = `sub-${sub.subCategory.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                          return (
                            <div key={sub.subCategory} id={subId}>
                              {/* Subcategory badge */}
                              {sub.subCategory && sub.subCategory !== section.group && (
                                <div className="flex items-center gap-2 mb-3">
                                  <span className="text-xs font-bold uppercase tracking-wider text-[#15472A] bg-[#EAF2ED] px-2.5 py-1 rounded-xs border border-[#CDE1D4]">
                                    {sub.subCategory}
                                  </span>
                                  <div className="flex-1 h-[1px] bg-[#E8DFC9]" />
                                </div>
                              )}

                              {/* Responsive list: 1 col on phones, 2 cols on tablet/desktop from md (768px) */}
                              <div className="divide-y divide-[#EAE3D2] md:divide-y-0 md:grid md:grid-cols-2 md:gap-x-6 lg:gap-x-10">
                                {sub.items.map((item) => (
                                  <MenuItemCard key={item.id} item={item} />
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </section>

      {/* ── Floating In-Page Back-To-Top Button (Clear of mobile bottom bar & tablet WhatsApp) ── */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          aria-label="Back to top of menu"
          className="fixed bottom-20 md:bottom-22 right-4 sm:right-6 z-40 p-3 bg-[#15472A] hover:bg-[#0D2D1B] text-white rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px]"
        >
          <ArrowUp className="w-5 h-5 text-[#E8C872]" />
        </button>
      )}
    </>
  );
};

export default MenuPage;
