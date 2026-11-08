/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI FAMILY RESTAURANT - CENTRAL SITE CONFIGURATION
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Location: Mumbra, Thane, Maharashtra
 * All business information, delivery contacts, operating hours, and
 * settings live in this central file.
 */

export interface DeliveryContact {
  id: string;
  label: string;
  number: string;
  link: string;
}

export interface DiningHallInfo {
  id: string;
  name: string;
  badge: string;
  description: string;
  highlight: string;
}

export interface Review {
  id: string;
  author: string;
  source: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SiteConfig {
  restaurantName: string;
  shortName: string;
  tagline: string;
  restaurantType: string;
  cuisines: string[];
  
  // Primary Contact
  phone: string;
  phoneRaw: string;
  phoneLink: string;
  whatsappNumber: string;
  whatsappLink: string;

  // Free Home Delivery Phone Numbers (Printed on client menu)
  deliveryPhones: DeliveryContact[];

  locationCity: string;
  currencySymbol: string;
  currencyCode: string;
  logoUrl: string;

  // Address & Location
  address: string;
  landmark: string;
  pincode: string;
  area: string;
  city: string;
  district: string;
  state: string;
  email: string;
  emailLink: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;

  // Opening Hours & Days
  openingHours: {
    status: string;
    schedule: string;
    closedDays: number[]; // 5 = Friday (0: Sunday, 1: Monday, ... 5: Friday, 6: Saturday)
    closedDaysText: string;
    fridayNotice: string;
    orderTiming: string;
  };

  // Hall facilities
  halls: DiningHallInfo[];

  // Key Dining Features
  dietaryFeatures: {
    isHalal: boolean;
    halalNote: string;
    noBeef: boolean;
    noBeefNote: string;
  };

  paymentMethods: string[];

  // Social Links (all empty unless client provides verified accounts)
  socialLinks: {
    instagram: string;
    facebook: string;
    zomato: string;
    swiggy: string;
  };

  /**
   * Reviews toggle - kept false until client provides genuine approved reviews
   */
  showReviews: boolean;

  /**
   * Menu Note printed at bottom of menu
   */
  menuNote: string;

  /**
   * Signature / Popular Dish IDs featured on the Home Page
   */
  featuredDishIds: string[];

  familyNote: {
    heading: string;
    quote: string;
    signedBy: string;
  };

  reviews: Review[];
}

export const siteConfig: SiteConfig = {
  restaurantName: "Noorani Family Restaurant",
  shortName: "Noorani",
  tagline: "Authentic Indian, Mughlai, Chinese & Tandoori Family Dining in Mumbra",
  restaurantType: "Family Restaurant",
  cuisines: ["Indian", "Mughlai", "Chinese", "Tandoori"],

  // Primary Phone & WhatsApp
  phone: "99679 46436",
  phoneRaw: "+919967946436",
  phoneLink: "tel:+919967946436",
  whatsappNumber: "99679 46436",
  whatsappLink: "https://wa.me/919967946436",

  // Free Home Delivery Numbers (All 4 printed on client's menu)
  deliveryPhones: [
    { id: "del-1", label: "Line 1", number: "99679 46436", link: "tel:+919967946436" },
    { id: "del-2", label: "Line 2", number: "84250 46436", link: "tel:+918425046436" },
    { id: "del-3", label: "Line 3", number: "98337 58865", link: "tel:+919833758865" },
    { id: "del-4", label: "Line 4", number: "98929 36436", link: "tel:+919892936436" }
  ],

  locationCity: "Mumbra, Thane",
  currencySymbol: "₹",
  currencyCode: "INR",
  logoUrl: "/assets/aistudio/logo-from-pdf_f347500e.png",

  // Real Address details
  // CONFIRM shop numbers with client
  address: "Shop No. 1 and 2, Afreen Apartment, Opp. Axis Bank, Tanwar Nagar, Kausa, Mumbra, Thane, Maharashtra 400612",
  landmark: "Opposite Axis Bank, Tanwar Nagar, Kausa",
  pincode: "400612",
  area: "Tanwar Nagar, Kausa",
  city: "Mumbra",
  district: "Thane",
  state: "Maharashtra",

  email: "nooranirestaurant2@gmail.com",
  emailLink: "mailto:nooranirestaurant2@gmail.com",

  // Google Maps URLs
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Afreen+Apartment+Tanwar+Nagar+Kausa+Mumbra+Thane+400612&output=embed",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Afreen+Apartment+Tanwar+Nagar+Kausa+Mumbra+Thane+400612",

  // Opening Hours: Open 24 hours, closed Fridays
  // CONFIRM WITH CLIENT: exact Friday closing
  openingHours: {
    status: "Open 24 Hours",
    schedule: "Open 24 hours daily · Closed on Fridays",
    closedDays: [5], // 5 is Friday
    closedDaysText: "Fridays",
    fridayNotice: "We are closed on Fridays. Please choose another day.",
    orderTiming: "24/7 kitchen service (Saturday through Thursday)"
  },

  // Real dining halls available at Noorani
  halls: [
    {
      id: "ac-family-hall",
      name: "A/C Family Hall",
      badge: "Air-Conditioned Comfort",
      description: "Dedicated climate-controlled family dining space designed for comfortable family meals, children, and celebrations.",
      highlight: "Private & peaceful family atmosphere"
    },
    {
      id: "dining-hall",
      name: "Main Dining Hall",
      badge: "Spacious Seating",
      description: "Lively dining area with comfortable table layouts ideal for friend groups, regular dining, and walk-in guests.",
      highlight: "Fast service & relaxed table dining"
    },
    {
      id: "dastarkhwan-hall",
      name: "Dastarkhwan Hall",
      badge: "Traditional Floor Dining",
      description: "Traditional carpeted floor-seating dastarkhwan setting to enjoy authentic Mughlai biryanis, khapsa platters, and kebabs.",
      highlight: "Authentic royal dining tradition"
    }
  ],

  dietaryFeatures: {
    isHalal: true,
    halalNote: "100% Halal Food Served",
    noBeef: true,
    noBeefNote: "Strictly No Beef Served on Premises"
  },

  paymentMethods: [
    "All Cards Accepted",
    "Paytm",
    "PhonePe",
    "Google Pay / UPI",
    "Cash"
  ],

  // Social Links: Empty strings; hidden completely by helper
  socialLinks: {
    instagram: "",
    facebook: "",
    zomato: "",
    swiggy: ""
  },

  showReviews: false,

  // Menu note printed on menu
  // CONFIRM date with client
  menuNote: "Prices in ₹ as per our menu dated 1 Nov 2026. Prices may change.",

  // Featured dish IDs matching real menu
  featuredDishIds: [
    "dish-butter-chicken",
    "dish-chicken-angara",
    "dish-murgh-malai-cheese-tandoori",
    "dish-chicken-crispy-dry",
    "dish-chicken-tikka-biryani",
    "dish-chicken-noorani-special"
  ],

  familyNote: {
    heading: "A Note from the Family",
    quote: "When we open our doors in Mumbra, our goal is simple: serve hot, honest food that you would gladly share with your parents and your children. No shortcuts with gravies, no rushed cooking. We look forward to welcoming you to our tables.",
    signedBy: "The Noorani Family"
  },

  reviews: []
};

/**
 * Helper to check whether a social URL is valid and non-placeholder.
 * Returns false if undefined, empty, or placeholder.
 */
export function hasValidSocialLink(url?: string | null): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith("ADD ") || trimmed.includes("placeholder") || trimmed === "#") {
    return false;
  }
  return true;
}

/**
 * Checks if a date falls on a closed day (e.g. Friday = 5).
 */
export function isRestaurantClosedOnDay(date: Date | string): boolean {
  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return false;
  return siteConfig.openingHours.closedDays.includes(d.getDay());
}

export default siteConfig;
