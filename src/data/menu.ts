/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI FAMILY RESTAURANT - COMPLETE MENU DATA
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Authentic Indian, Mughlai, Chinese & Tandoori Cuisine
 * Mumbra, Thane
 * 
 * Prices in ₹ as per menu dated 1 Nov 2026.
 */

export type MenuGroup =
  | "Tandoori & Kabab"
  | "Chicken"
  | "Mutton"
  | "Biryani & Rice"
  | "Specialties"
  | "Seafood"
  | "Veg & Paneer"
  | "Chinese"
  | "Roti & Sides"
  | "Party Orders"
  | "Breakfast"
  | "Fast Food"
  | "Drinks & Desserts";

export const menuGroups: MenuGroup[] = [
  "Tandoori & Kabab",
  "Chicken",
  "Mutton",
  "Biryani & Rice",
  "Specialties",
  "Seafood",
  "Veg & Paneer",
  "Chinese",
  "Roti & Sides",
  "Party Orders",
  "Breakfast",
  "Fast Food",
  "Drinks & Desserts"
];

export interface PriceOption {
  label: string; // e.g., "Half", "Full", "2 Pcs", "4 Pcs", "1/2 Kg", "1 Kg", "1 Pailee"
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  group: MenuGroup;
  subCategory: string;
  description: string;
  isVeg: boolean;
  price?: number; // Single price
  prices?: PriceOption[]; // Multi-column price options
  tags?: string[];
  isPopular?: boolean;
  isSignature?: boolean;
}

export const menuItems: MenuItem[] = [
  // ═════════════════════════════════════════════════════════════════
  // 1. TANDOORI & KABAB (PDF Page 4 Tandoori Starters - 28 items)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-tandoori-chicken",
    name: "Chicken Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Whole spring chicken double-marinated in curd, Kashmiri spices, and roasted in clay tandoor.",
    isVeg: false,
    prices: [
      { label: "Half", price: 350 },
      { label: "Full", price: 550 }
    ],
    tags: ["Tandoor Classic", "Popular"],
    isPopular: true
  },
  {
    id: "dish-murgh-malai-cheese-tandoori",
    name: "Murgh Malai Cheese Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Tender chicken marinated in hung curd, fresh cream, cheese, and mild spices, charred to perfection.",
    isVeg: false,
    prices: [
      { label: "Half", price: 450 },
      { label: "Full", price: 680 }
    ],
    tags: ["House Signature", "Chef's Special"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-chicken-angara-tikka",
    name: "Chicken Angara Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Smokey spicy boneless chicken cubes charred over glowing charcoal embers.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 280 }],
    tags: ["Spicy", "Charcoal Fired"]
  },
  {
    id: "dish-murgh-malai-tikka",
    name: "Murgh Malai Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Melt-in-mouth chicken chunks steeped in cashew paste, fresh cream, and aromatic green cardamom.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 290 }],
    tags: ["Mild & Creamy"]
  },
  {
    id: "dish-chicken-pahadi-tikka",
    name: "Chicken Pahadi Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Succulent chicken skewers coated with vibrant fresh mint, coriander, and mountain green herbs.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 280 }]
  },
  {
    id: "dish-chicken-banjara-tikka",
    name: "Chicken Banjara Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Rustic kebab spiced with crushed coriander seeds, cumin, garlic, and coarse chillies.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 280 }]
  },
  {
    id: "dish-chicken-reshmi-tikka",
    name: "Chicken Reshmi Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Silky soft chicken marinated in egg white, roasted gram flour, cream, and subtle saffron.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 290 }]
  },
  {
    id: "dish-chicken-garlic-tikka",
    name: "Chicken Garlic Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Tandoori chicken skewers laced with fragrant roasted golden garlic and herbs.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 280 }]
  },
  {
    id: "dish-chicken-achari-tikka",
    name: "Chicken Achari Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Tangy pickled masala marinade infused with fennel seeds, mustard, and kalonji.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 280 }],
    tags: ["Tangy & Spicy"]
  },
  {
    id: "dish-chicken-seekh-kabab",
    name: "Chicken Seekh Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Finely minced seasoned chicken skewered and charcoal-roasted with fresh herbs.",
    isVeg: false,
    prices: [{ label: "4 Pcs", price: 220 }],
    tags: ["Bestseller"]
  },
  {
    id: "dish-chicken-cheese-seekh-kabab",
    name: "Chicken Cheese Seekh Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Chicken seekh kabab blended with gooey melted cheese and mild green chillies.",
    isVeg: false,
    prices: [{ label: "4 Pcs", price: 260 }]
  },
  {
    id: "dish-chicken-crispy-dry",
    name: "Chicken Crispy Dry",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Crisp shredded chicken tossed with roasted garlic, capsicum, and dry wok spices.",
    isVeg: false,
    price: 270,
    tags: ["Customer Favorite", "Crunchy"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-chicken-lollipop-dry",
    name: "Chicken Lollipop Dry",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Frenched chicken winglets fried crisp and served with spicy dipping sauce.",
    isVeg: false,
    prices: [{ label: "6 Pcs", price: 220 }]
  },
  {
    id: "dish-chicken-lollipop-masala",
    name: "Chicken Lollipop Masala / Tossed",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Crispy chicken lollipops tossed in fiery garlic, pepper, and onion gravy.",
    isVeg: false,
    prices: [{ label: "6 Pcs", price: 250 }],
    tags: ["Spicy"]
  },
  {
    id: "dish-chicken-rozali-kabab",
    name: "Chicken Rozali Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Thin chicken breast escalopes stuffed with spiced keema, rolled and tandoor grilled.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 320 }],
    tags: ["Chef Special"]
  },
  {
    id: "dish-chicken-tangdi-kabab",
    name: "Chicken Tangdi Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Tender whole chicken drumsticks roasted with aromatic tandoori masala marinade.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 220 },
      { label: "4 Pcs", price: 410 }
    ]
  },
  {
    id: "dish-chicken-kalimiri-tikka",
    name: "Chicken Kalimiri Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Boneless chicken marinated with crushed black peppercorns, cashew paste, and fresh cream.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 290 }]
  },
  {
    id: "dish-chicken-kasturi-kabab",
    name: "Chicken Kasturi Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Chicken tikka coated in beaten egg and fragrant roasted kasuri methi (fenugreek leaves).",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 290 }]
  },
  {
    id: "dish-chicken-noorani-platter",
    name: "Chicken Noorani Special Kabab Platter",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Grand assortment of Malai Tikka, Angara Tikka, Seekh Kabab, and Tangdi served for the family table.",
    isVeg: false,
    price: 650,
    tags: ["Family Feast", "Serves 3-4"]
  },
  {
    id: "dish-mutton-seekh-kabab",
    name: "Mutton Seekh Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Hand-ground minced mutton delicately seasoned with brown onions, fresh mint, and coriander.",
    isVeg: false,
    prices: [{ label: "4 Pcs", price: 280 }],
    tags: ["Mughlai Pride"]
  },
  {
    id: "dish-mutton-galouti-kabab",
    name: "Mutton Galouti Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Mouth-melting Lucknawi spiced minced mutton patties pan-fried over slow heat.",
    isVeg: false,
    prices: [{ label: "4 Pcs", price: 320 }]
  },
  {
    id: "dish-mutton-boti-kabab",
    name: "Mutton Boti Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Tender boneless mutton pieces marinated in raw papaya and Mughlai spices, skewered over coals.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 340 }]
  },
  {
    id: "dish-paneer-tikka-tandoori",
    name: "Paneer Tikka Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Fresh cottage cheese cubes, capsicum, and onions roasted in clay tandoor with ajwain.",
    isVeg: true,
    prices: [{ label: "8 Pcs", price: 240 }]
  },
  {
    id: "dish-paneer-malai-tikka",
    name: "Paneer Malai Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Soft paneer cubes bathed in rich cashew cream and roasted gently.",
    isVeg: true,
    prices: [{ label: "8 Pcs", price: 260 }]
  },
  {
    id: "dish-paneer-pahadi-tikka",
    name: "Paneer Pahadi Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Paneer marinated in fresh mint, coriander, ginger, and green chilli paste.",
    isVeg: true,
    prices: [{ label: "8 Pcs", price: 240 }]
  },
  {
    id: "dish-paneer-achari-tikka",
    name: "Paneer Achari Tikka",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Paneer cubes infused with tangy pickle spices and mustard oil.",
    isVeg: true,
    prices: [{ label: "8 Pcs", price: 240 }]
  },
  {
    id: "dish-veg-seekh-kabab",
    name: "Veg Seekh Kabab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Minced assorted garden vegetables and paneer roasted on skewers.",
    isVeg: true,
    prices: [{ label: "4 Pcs", price: 180 }]
  },
  {
    id: "dish-mushroom-tikka",
    name: "Mushroom Tikka Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Fresh button mushrooms coated in spiced hung curd and tandoor-roasted.",
    isVeg: true,
    price: 230
  },

  // --- Page 11 Tandoori Starters (Second block - 8 dishes, Half / Full) ---
  {
    id: "dish-p11-noorani-spl-kebab",
    name: "Noorani Special Kebab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Chef special platter of boneless chicken skewers coated with royal saffron, roasted nuts, and aromatic whole spices.",
    isVeg: false,
    price: 395,
    tags: ["Chef Special"],
    isSignature: true
  },
  {
    id: "dish-p11-chicken-lebanese-kebab",
    name: "Chicken Lebanese Kebab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Tender chicken fillets marinated with Mediterranean herbs, garlic, mild sumac, and hung curd.",
    isVeg: false,
    price: 395
  },
  {
    id: "dish-p11-chicken-turkish-kebab",
    name: "Chicken Turkish Kebab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Minced chicken seasoned with bell peppers, smoked paprika, and cumin, charcoal-grilled on skewers.",
    isVeg: false,
    price: 395
  },
  {
    id: "dish-p11-chicken-lazeez-kebab",
    name: "Chicken Lazeez Kebab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Creamy boneless chicken tikka cooked with brown onion paste, cashew cream, and green cardamom.",
    isVeg: false,
    price: 395
  },
  {
    id: "dish-p11-chicken-alishan-kebab",
    name: "Chicken Alishan Kebab",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Succulent chicken chunks marinated in cheese, crushed black pepper, egg white, and golden garlic.",
    isVeg: false,
    price: 395
  },
  {
    id: "dish-p11-chicken-afghani-tandoori",
    name: "Chicken Afghani Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Whole chicken steeped in rich cashew nut paste, fresh cream, white pepper, and roasted in tandoor.",
    isVeg: false,
    prices: [
      { label: "Half", price: 335 },
      { label: "Full", price: 600 }
    ],
    tags: ["Mild & Creamy"]
  },
  {
    id: "dish-p11-chicken-angara-tandoori",
    name: "Chicken Angara Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Charcoal-smoked whole chicken infused with crushed red chillies, ginger, and roasted garam masala.",
    isVeg: false,
    prices: [
      { label: "Half", price: 335 },
      { label: "Full", price: 600 }
    ],
    tags: ["Spicy","Charcoal Smoked"]
  },
  {
    id: "dish-p11-chicken-lemon-tandoori",
    name: "Chicken Lemon Tandoori",
    group: "Tandoori & Kabab",
    subCategory: "Tandoori Starter",
    description: "Zesty clay-oven roasted chicken basted with fresh lemon juice, chaat spices, and fresh coriander.",
    isVeg: false,
    prices: [
      { label: "Half", price: 335 },
      { label: "Full", price: 600 }
    ]
  },

  // ═════════════════════════════════════════════════════════════════
  // 2. CHICKEN BOTI FRY (PDF Page 2 - 3 items)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-chicken-boti-fry-dry",
    name: "Chicken Boti Fry",
    group: "Chicken",
    subCategory: "Chicken Boti Fry",
    description: "Boneless chicken morsels pan-fried on cast-iron tawa with onions, garlic, and fresh green chillies.",
    isVeg: false,
    prices: [
      { label: "1/4 Kg", price: 140 },
      { label: "1/2 Kg", price: 260 },
      { label: "1 Kg", price: 500 }
    ],
    tags: ["Tawa Fry", "Mumbra Favorite"]
  },
  {
    id: "dish-chicken-boti-fry-masala",
    name: "Chicken Boti Fry Masala",
    group: "Chicken",
    subCategory: "Chicken Boti Fry",
    description: "Spiced chicken boti pan-roasted in a thick semi-dry gravy of browned onions and roasted cumin.",
    isVeg: false,
    prices: [
      { label: "Half", price: 190 },
      { label: "Full", price: 340 }
    ]
  },
  {
    id: "dish-chicken-boti-tawa-fry",
    name: "Chicken Boti Tawa Fry",
    group: "Chicken",
    subCategory: "Chicken Boti Fry",
    description: "Quick-tossed boneless chicken on high flame tawa with crushed black pepper and fresh coriander.",
    isVeg: false,
    prices: [
      { label: "Half", price: 200 },
      { label: "Full", price: 360 }
    ]
  },

  // ═════════════════════════════════════════════════════════════════
  // 3. CHICKEN MAIN COURSE (PDF Pages 7 & 8 - 65 dishes, Half / Full)
  // ═════════════════════════════════════════════════════════════════
  // --- Page 7 (33 dishes) ---
  {
    id: "dish-p7-chicken-masala",
    name: "Chicken Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Classic home-style spiced onion and tomato chicken gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 160 }, { label: "Full", price: 300 }]
  },
  {
    id: "dish-p7-chicken-masala-fry",
    name: "Chicken Masala Fry",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Tender chicken pieces pan-roasted in concentrated aromatic masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 170 }, { label: "Full", price: 320 }]
  },
  {
    id: "dish-p7-chicken-tawa-masala",
    name: "Chicken Tawa Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken seared on flat iron tawa with crushed spices, green chillies, and ginger.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },
  {
    id: "dish-p7-chicken-sukha",
    name: "Chicken Sukha",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Dry-roasted chicken preparation with roasted spices, garlic, and curry leaves.",
    isVeg: false,
    prices: [{ label: "Half", price: 170 }, { label: "Full", price: 320 }]
  },
  {
    id: "dish-p7-chicken-korma",
    name: "Chicken Korma",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Traditional Mughlai chicken curry slow-simmered in browned onion and curd gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },
  {
    id: "dish-p7-chicken-white-korma",
    name: "Chicken White Korma",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Royal mild white korma cooked with cashew paste, cream, and green cardamom.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }],
    tags: ["Mild & Creamy"]
  },
  {
    id: "dish-p7-chicken-shahi-korma",
    name: "Chicken Shahi Korma",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Rich royal korma enriched with dried fruits, melon seeds, and saffron.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p7-chicken-kadai",
    name: "Chicken Kadai",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Wok-cooked chicken tossed with bell peppers, tomatoes, and freshly cracked kadai masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 190 }, { label: "Full", price: 360 }]
  },
  {
    id: "dish-p7-chicken-handi",
    name: "Chicken Handi",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Clay handi slow-cooked chicken with whole spices and rich onion reduction.",
    isVeg: false,
    price: 250
  },
  {
    id: "dish-p7-chicken-handi-lazeez",
    name: "Chicken Handi Lazeez",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Special handi chicken prepared in mild velvety cream and cashew gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p7-chicken-kolhapuri",
    name: "Chicken Kolhapuri",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Spicy red gravy preparation with roasted sesame, dry red chillies, and coconut.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }],
    tags: ["Spicy"]
  },
  {
    id: "dish-p7-chicken-maratha",
    name: "Chicken Maratha",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Bold Maharashtra style chicken curry cooked with dry roasted spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 190 }, { label: "Full", price: 360 }]
  },
  {
    id: "dish-p7-chicken-mughlai",
    name: "Chicken Mughlai",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Classic rich gravy cooked with egg ribbons, fresh cream, and fragrant kewra.",
    isVeg: false,
    prices: [{ label: "Half", price: 190 }, { label: "Full", price: 360 }]
  },
  {
    id: "dish-p7-chicken-afghani",
    name: "Chicken Afghani",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Charcoal-smoked chicken simmered in rich cashew and thick yogurt cream gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p7-chicken-do-pyaza",
    name: "Chicken Do Pyaza",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Tender chicken cooked with double additions of caramelized and crunchy diced onions.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },
  {
    id: "dish-p7-chicken-dahiwala",
    name: "Chicken Dahiwala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Soothing yogurt-based chicken gravy spiced with black pepper and green cardamom.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },
  {
    id: "dish-p7-chicken-saagwala",
    name: "Chicken Saagwala (Palak)",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Boneless chicken simmered in smooth fresh spinach puree tempered with garlic.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },
  {
    id: "dish-p7-chicken-bhuna",
    name: "Chicken Bhuna",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Slow-roasted chicken in thick reduction of onions, garlic, and whole spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },
  {
    id: "dish-p7-chicken-bhuna-masala",
    name: "Chicken Bhuna Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Deep roasted chicken morsels coated in fragrant thick brown masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 190 }, { label: "Full", price: 360 }]
  },
  {
    id: "dish-p7-chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Charcoal grilled chicken tikka folded into rich spiced tomato-onion masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }],
    tags: ["Popular"]
  },
  {
    id: "dish-p7-chicken-tikka-tawa-masala",
    name: "Chicken Tikka Tawa Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Smokey chicken tikka quick-tossed on iron tawa with robust spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p7-chicken-tikka-lazeez",
    name: "Chicken Tikka Lazeez",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Tandoori chicken tikka simmered in creamy mild cashew gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p7-chicken-tikka-angara",
    name: "Chicken Tikka Angara",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Fiery red smoked tandoori chicken tikka gravy with live charcoal infusion.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }],
    tags: ["Spicy"]
  },
  {
    id: "dish-p7-murgh-zafrani",
    name: "Murgh Zafrani",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Royal chicken preparation infused with pure Kashmiri saffron and rich nut paste.",
    isVeg: false,
    prices: [{ label: "Half", price: 280 }, { label: "Full", price: 500 }],
    tags: ["Royal Specialty"]
  },
  {
    id: "dish-p7-chicken-tandoori-masala",
    name: "Chicken Tandoori Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Roasted tandoori chicken pieces cooked in aromatic spiced curry.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p7-chicken-tandoori-golden-masala",
    name: "Chicken Tandoori Golden Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Tandoori chicken in golden aromatic cashew-saffron gravy with whole spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }],
    tags: ["Special Order"]
  },
  {
    id: "dish-p7-chicken-tandoori-tawa-masala",
    name: "Chicken Tandoori Tawa Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Charcoal tandoori chicken tossed on iron griddle with roasted masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p7-chicken-noorani-special",
    name: "Chicken Noorani Special",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Signature house chicken cooked in royal cashew-saffron gravy with rich dry fruits.",
    isVeg: false,
    price: 400,
    tags: ["House Signature"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-p7-chicken-sanju-baba",
    name: "Chicken Sanju Baba",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Famous Mughlai style chicken curry rich with whole spices and almonds.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p7-chicken-maharaja",
    name: "Chicken Maharaja",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "A celebratory royal dish with tender chicken, boiled egg slices, and velvety saffron gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p7-chicken-changezi",
    name: "Chicken Changezi",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Old Delhi style rich tangy chicken curry with fried onions, milk, and ripe tomatoes.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p7-chicken-peshawari",
    name: "Chicken Peshawari",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Robust Peshawari chicken cooked with coarsely crushed black pepper, tomatoes, and ginger.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p7-chicken-kasturi",
    name: "Chicken Kasturi",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Fragrant chicken curry infused with roasted kasuri methi (fenugreek) and fresh cream.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },

  // --- Page 8 (32 dishes) ---
  {
    id: "dish-p8-chicken-angara",
    name: "Chicken Angara",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Fiery, deep-red spiced chicken gravy infused with charcoal smoke and roasted whole spices.",
    isVeg: false,
    price: 400,
    tags: ["Spicy", "Signature"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-p8-chicken-lazeez",
    name: "Chicken Lazeez",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Succulent chicken cooked in mild, fragrant brown onion and curd gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-reshmi-masala",
    name: "Chicken Reshmi Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Silky boneless chicken tikka cooked in mild cashew and egg gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p8-chicken-malai-masala",
    name: "Chicken Malai Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Melt-in-mouth chicken cooked in cream, butter, and mild green chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p8-chicken-kalimiri-masala",
    name: "Chicken Kalimiri Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken cooked with freshly crushed black peppercorns in white cashew gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p8-chicken-garlic-masala",
    name: "Chicken Garlic Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken curry loaded with roasted golden garlic cloves and herbs.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-achari-masala",
    name: "Chicken Achari Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Tangy chicken curry spiced with mustard seeds, fennel, and pickling spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-keema-masala",
    name: "Chicken Keema Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Spiced minced chicken simmered with onions, green peas, and fresh mint.",
    isVeg: false,
    prices: [{ label: "Half", price: 170 }, { label: "Full", price: 310 }]
  },
  {
    id: "dish-p8-chicken-keema-fry",
    name: "Chicken Keema Fry",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Minced chicken roasted dry with garlic, ginger, and green chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 330 }]
  },
  {
    id: "dish-p8-chicken-keema-tawa",
    name: "Chicken Keema Tawa",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Minced chicken seared on high-heat tawa with butter and coriander.",
    isVeg: false,
    prices: [{ label: "Half", price: 190 }, { label: "Full", price: 350 }]
  },
  {
    id: "dish-p8-chicken-keema-ghotala",
    name: "Chicken Keema Ghotala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Spicy chicken keema scrambled together with egg and green herbs.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 370 }]
  },
  {
    id: "dish-p8-chicken-keema-matar",
    name: "Chicken Keema Matar",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Minced chicken cooked with tender green peas in homestyle gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 330 }]
  },
  {
    id: "dish-p8-chicken-dal-gosht",
    name: "Chicken Dal Gosht",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken slow-simmered with yellow lentils, bottle gourd (doodhi), and spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 190 }, { label: "Full", price: 350 }]
  },
  {
    id: "dish-p8-chicken-liver-masala",
    name: "Chicken Liver Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Fresh chicken liver cooked in spicy onion-tomato gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 170 }, { label: "Full", price: 310 }]
  },
  {
    id: "dish-p8-chicken-liver-fry",
    name: "Chicken Liver Fry",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken liver pan-fried with black pepper and green chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 170 }, { label: "Full", price: 310 }]
  },
  {
    id: "dish-p8-chicken-gurda-masala",
    name: "Chicken Gurda Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken kidney sauteed with roasted masala on tawa.",
    isVeg: false,
    prices: [{ label: "Half", price: 170 }, { label: "Full", price: 310 }]
  },
  {
    id: "dish-p8-chicken-dil-gurda-masala",
    name: "Chicken Dil Gurda Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Combination of chicken heart and kidney in spicy brown masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 330 }]
  },
  {
    id: "dish-p8-chicken-tangdi-masala",
    name: "Chicken Tangdi Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken drumsticks cooked in thick aromatic onion-tomato curry.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p8-chicken-seekh-masala",
    name: "Chicken Seekh Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Charcoal chicken seekh kebabs tossed in spiced curry.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-seekh-tawa-masala",
    name: "Chicken Seekh Tawa Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken seekh kebabs sliced and roasted on iron griddle with masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p8-chicken-rozali-masala",
    name: "Chicken Rozali Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Stuffed chicken rozali kebabs simmered in royal creamy gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p8-chicken-banjara-masala",
    name: "Chicken Banjara Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Rustic chicken curry with cracked coriander, cumin, and whole chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p8-chicken-pahadi-masala",
    name: "Chicken Pahadi Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Green herb chicken gravy with fresh mint, coriander, and spinach.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p8-chicken-butter-masala",
    name: "Chicken Butter Masala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken cooked in rich tomato and butter makhani gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p8-butter-chicken-boneless",
    name: "Butter Chicken (Boneless)",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Tender boneless tandoori chicken simmered in creamy satin makhani sauce.",
    isVeg: false,
    price: 230,
    tags: ["Bestseller"],
    isPopular: true
  },
  {
    id: "dish-p8-chicken-makhanwala",
    name: "Chicken Makhanwala",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Makhani gravy with chicken pieces enriched with white butter.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p8-chicken-hyderabadi",
    name: "Chicken Hyderabadi",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Spicy Hyderabadi style green gravy with coconut, mint, and whole spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-chilly-gravy",
    name: "Chicken Chilly Gravy",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Indo-Chinese style battered chicken in spicy soy, garlic, and chilli gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-manchurian-gravy",
    name: "Chicken Manchurian Gravy",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Crispy chicken balls in savory dark soy, ginger, and scallion gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-schezwan-gravy",
    name: "Chicken Schezwan Gravy",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken pieces tossed in pungent fiery red Schezwan pepper gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }],
    tags: ["Spicy"]
  },
  {
    id: "dish-p8-chicken-lolly-pop-masala-gravy",
    name: "Chicken Lolly Pop Masala Gravy",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Chicken lollipops simmered in spicy garlic and tomato gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 200 }, { label: "Full", price: 380 }]
  },
  {
    id: "dish-p8-chicken-lolly-pop-oil-fry",
    name: "Chicken Lolly Pop Oil Fry",
    group: "Chicken",
    subCategory: "Chicken Gravies",
    description: "Crispy deep-fried chicken lollipops cooked in oil fry style with red spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 180 }, { label: "Full", price: 340 }]
  },

  // ═════════════════════════════════════════════════════════════════
  // 4. MUTTON MAIN COURSE (PDF Page 6 - 41 dishes, Half / Full)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-p6-mutton-masala",
    name: "Mutton Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Tender goat meat slow-simmered in classic onion-tomato spiced gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p6-mutton-masala-fry",
    name: "Mutton Masala Fry",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Pan-roasted mutton in thick concentrated masala reduction.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p6-mutton-tawa-masala",
    name: "Mutton Tawa Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Goat meat seared on iron tawa with crushed whole spices and green chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-sukha",
    name: "Mutton Sukha",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Dry roasted spiced mutton with curry leaves and roasted garlic.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p6-mutton-korma",
    name: "Mutton Korma",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Traditional Mughlai mutton curry slow-cooked with browned onions and curd.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-white-korma",
    name: "Mutton White Korma",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mild royal mutton korma simmered in rich cashew cream and cardamom.",
    isVeg: false,
    prices: [{ label: "Half", price: 260 }, { label: "Full", price: 480 }]
  },
  {
    id: "dish-p6-mutton-shahi-korma",
    name: "Mutton Shahi Korma",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Royal preparation with dry fruits, saffron, and rich nut paste.",
    isVeg: false,
    prices: [{ label: "Half", price: 270 }, { label: "Full", price: 500 }]
  },
  {
    id: "dish-p6-mutton-rogan-josh",
    name: "Mutton Rogan Josh",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Kashmiri style tender mutton braised with Kashmiri chillies and whole spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }],
    tags: ["Mughlai Classic"]
  },
  {
    id: "dish-p6-mutton-bhuna",
    name: "Mutton Bhuna",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mutton pan-fried continuously in onion and tomato reduction.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-bhuna-masala",
    name: "Mutton Bhuna Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Dark, deeply roasted mutton in thick spicy masala glaze.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }]
  },
  {
    id: "dish-p6-mutton-handi",
    name: "Mutton Handi",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Earthenware pot slow-simmered mutton with whole spices and tomatoes.",
    isVeg: false,
    price: 380
  },
  {
    id: "dish-p6-mutton-handi-lazeez",
    name: "Mutton Handi Lazeez",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Handi cooked mutton in mild, velvety cream and cashew gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 280 }, { label: "Full", price: 520 }]
  },
  {
    id: "dish-p6-mutton-kadai",
    name: "Mutton Kadai",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Wok-cooked goat meat with bell peppers, onions, and freshly crushed spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }]
  },
  {
    id: "dish-p6-mutton-kolhapuri",
    name: "Mutton Kolhapuri",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Spicy red mutton curry with roasted coconut and fiery Kolhapuri chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }],
    tags: ["Spicy"]
  },
  {
    id: "dish-p6-mutton-rajwadi",
    name: "Mutton Rajwadi",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Robust, medium spicy gravy flavored with dry coconut, sesame, and onions.",
    isVeg: false,
    prices: [{ label: "Half", price: 450 }, { label: "Full", price: 900 }]
  },
  {
    id: "dish-p6-mutton-mughlai",
    name: "Mutton Mughlai",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Traditional rich gravy cooked with egg, fresh cream, and aromatic kewra.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }]
  },
  {
    id: "dish-p6-mutton-afghani",
    name: "Mutton Afghani",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mild and thick cream-cashew gravy with gentle spices and smokey flavor.",
    isVeg: false,
    prices: [{ label: "Half", price: 270 }, { label: "Full", price: 500 }]
  },
  {
    id: "dish-p6-mutton-do-pyaza",
    name: "Mutton Do Pyaza",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Goat meat cooked with caramelized and crunchy onions.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-dahiwala",
    name: "Mutton Dahiwala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Light soothing yogurt gravy with whole black pepper and cardamom.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-saagwala",
    name: "Mutton Saagwala (Palak)",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Tender goat meat cooked in smooth spinach gravy with garlic tempering.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-dal-gosht",
    name: "Mutton Dal Gosht",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mutton simmered with chana dal, bottle gourd, and whole aromatics.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 420 }],
    tags: ["Mumbra Favorite"]
  },
  {
    id: "dish-p6-mutton-dalcha",
    name: "Mutton Dalcha",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Hyderabadi style tangy lentil and mutton preparation with tamarind.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 440 }]
  },
  {
    id: "dish-p6-mutton-keema-masala",
    name: "Mutton Keema Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Spiced minced goat meat simmered with onions, green chillies, and mint.",
    isVeg: false,
    prices: [{ label: "Half", price: 210 }, { label: "Full", price: 390 }]
  },
  {
    id: "dish-p6-mutton-keema-fry",
    name: "Mutton Keema Fry",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Minced goat meat pan-fried dry with garlic and roasted spices.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 400 }]
  },
  {
    id: "dish-p6-mutton-keema-tawa",
    name: "Mutton Keema Tawa",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Minced goat meat seared on sizzling iron tawa with ginger juliennes.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 420 }]
  },
  {
    id: "dish-p6-mutton-keema-ghotala",
    name: "Mutton Keema Ghotala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Minced mutton scrambled on tawa with egg, chillies, and coriander.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 440 }]
  },
  {
    id: "dish-p6-mutton-keema-matar",
    name: "Mutton Keema Matar",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Minced mutton with sweet green peas in homestyle spiced gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 220 }, { label: "Full", price: 410 }]
  },
  {
    id: "dish-p6-mutton-bheja-masala",
    name: "Mutton Bheja Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Soft goat brain cooked gently in turmeric, onion, and tomato masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-bheja-fry",
    name: "Mutton Bheja Fry",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Delicate mutton brain scrambled with pepper and browned onions.",
    isVeg: false,
    prices: [{ label: "Half", price: 240 }, { label: "Full", price: 450 }]
  },
  {
    id: "dish-p6-mutton-bheja-tawa-fry",
    name: "Mutton Bheja Tawa Fry",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mutton brain quick-fried on high flame tawa with green chillies.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }]
  },
  {
    id: "dish-p6-mutton-gurda-masala",
    name: "Mutton Gurda Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mutton kidneys cooked with whole spices and thick masala gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p6-mutton-kaleji-masala",
    name: "Mutton Kaleji Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Tender goat liver cooked in aromatic onion-tomato reduction.",
    isVeg: false,
    prices: [{ label: "Half", price: 230 }, { label: "Full", price: 430 }]
  },
  {
    id: "dish-p6-mutton-gurda-kaleji-masala",
    name: "Mutton Gurda Kaleji Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Combination of mutton kidney and liver in robust spicy gravy.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }]
  },
  {
    id: "dish-p6-mutton-chops-masala",
    name: "Mutton Chops Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Tender goat rib chops cooked in thick browned onion and tomato masala.",
    isVeg: false,
    prices: [{ label: "Half", price: 270 }, { label: "Full", price: 510 }]
  },
  {
    id: "dish-p6-mutton-chops-tawa-fry",
    name: "Mutton Chops Tawa Fry",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Marinated mutton chops pan-seared crisp on iron tawa.",
    isVeg: false,
    prices: [{ label: "Half", price: 280 }, { label: "Full", price: 530 }]
  },
  {
    id: "dish-p6-mutton-nihari-special",
    name: "Mutton Nihari Special",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Overnight slow-braised meat shanks in aromatic herbal broth.",
    isVeg: false,
    prices: [{ label: "Half", price: 260 }, { label: "Full", price: 490 }]
  },
  {
    id: "dish-p6-mutton-nalli-nihari",
    name: "Mutton Nalli Nihari",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Mutton shanks and bone marrow simmered with potli spices and fresh ginger.",
    isVeg: false,
    prices: [{ label: "Half", price: 290 }, { label: "Full", price: 550 }],
    tags: ["Heritage Special"]
  },
  {
    id: "dish-p6-mutton-paya-masala",
    name: "Mutton Paya Masala",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Nourishing trotters cooked in rich gelatinous spiced broth.",
    isVeg: false,
    prices: [{ label: "Half", price: 250 }, { label: "Full", price: 470 }]
  },
  {
    id: "dish-p6-mutton-noorani-special",
    name: "Mutton Noorani Special",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Chef's special mutton cooked in royal cashew-saffron gravy with dry fruits.",
    isVeg: false,
    prices: [{ label: "Half", price: 310 }, { label: "Full", price: 580 }],
    tags: ["Chef's Pride"]
  },
  {
    id: "dish-p6-mutton-zafrani",
    name: "Mutton Zafrani",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Royal mutton braised with saffron strands, kewra, and almond paste.",
    isVeg: false,
    prices: [{ label: "Half", price: 290 }, { label: "Full", price: 550 }]
  },
  {
    id: "dish-p6-mutton-angara",
    name: "Mutton Angara",
    group: "Mutton",
    subCategory: "Mutton Gravies",
    description: "Fiery red smoked mutton curry finished with charcoal aromatics.",
    isVeg: false,
    prices: [{ label: "Half", price: 270 }, { label: "Full", price: 510 }],
    tags: ["Spicy"]
  },

  // ═════════════════════════════════════════════════════════════════
  // 5. BIRYANI & RICE (PDF Page 4 Khapsa - 3 items & Dum Biryani)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-chicken-tikka-biryani",
    name: "Chicken Tikka Biryani",
    group: "Biryani & Rice",
    subCategory: "Biryani",
    description: "Charcoal-tandoor chicken tikka layered with saffron basmati rice, brown onions, and mint on dum.",
    isVeg: false,
    price: 320,
    tags: ["Must Order", "Signature"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-chicken-dum-biryani",
    name: "Chicken Dum Biryani",
    group: "Biryani & Rice",
    subCategory: "Biryani",
    description: "Traditional sealed handi slow-cooked chicken biryani with aged long-grain basmati rice.",
    isVeg: false,
    prices: [
      { label: "Half", price: 160 },
      { label: "Full", price: 280 }
    ],
    tags: ["Bestseller"],
    isPopular: true
  },
  {
    id: "dish-mutton-dum-biryani",
    name: "Mutton Dum Biryani",
    group: "Biryani & Rice",
    subCategory: "Biryani",
    description: "Marinated tender goat meat layered with fragrant basmati, fried onions, pure ghee, and saffron.",
    isVeg: false,
    prices: [
      { label: "Half", price: 220 },
      { label: "Full", price: 390 }
    ],
    tags: ["Authentic Mughlai"]
  },
  {
    id: "dish-noorani-special-biryani",
    name: "Noorani Special Handi Biryani",
    group: "Biryani & Rice",
    subCategory: "Biryani",
    description: "House special celebration biryani loaded with chicken, mutton seekh, boiled eggs, and cashews.",
    isVeg: false,
    price: 460,
    tags: ["Grand Special", "Serves 2"]
  },
  {
    id: "dish-chicken-khapsa-rice",
    name: "Chicken Chinese Khapsa",
    group: "Biryani & Rice",
    subCategory: "Khapsa",
    description: "Fragrant spiced rice platter crowned with chicken, rich side gravy, and garnishes.",
    isVeg: false,
    prices: [
      { label: "Half", price: 700 },
      { label: "Full", price: 1300 }
    ],
    tags: ["Arabian Platter", "Family Special"]
  },
  {
    id: "dish-mutton-khapsa-rice",
    name: "Mutton Khapsa Rice",
    group: "Biryani & Rice",
    subCategory: "Khapsa",
    description: "Generous Arabian rice platter served with slow-braised tender mutton, crisp onions, almonds, and spiced broth.",
    isVeg: false,
    prices: [
      { label: "Half", price: 560 },
      { label: "Full", price: 990 }
    ],
    tags: ["Grand Platter"]
  },
  {
    id: "dish-prawns-khapsa-rice",
    name: "Prawns Khapsa Rice",
    group: "Biryani & Rice",
    subCategory: "Khapsa",
    description: "Long-grain seasoned rice platter tossed with golden tawa-fried coastal prawns and aromatic herbs.",
    isVeg: false,
    prices: [
      { label: "Half", price: 520 },
      { label: "Full", price: 920 }
    ],
    tags: ["Seafood Feast"]
  },
  {
    id: "dish-veg-dum-biryani",
    name: "Veg Dum Biryani",
    group: "Biryani & Rice",
    subCategory: "Biryani",
    description: "Seasonal garden vegetables and paneer slow-cooked on dum with spices and saffron rice.",
    isVeg: true,
    price: 210
  },
  {
    id: "dish-jeera-rice",
    name: "Jeera Rice (Pure Ghee)",
    group: "Biryani & Rice",
    subCategory: "Rice",
    description: "Fluffy basmati rice tempered with roasted cumin seeds and pure desi ghee.",
    isVeg: true,
    prices: [
      { label: "Half", price: 90 },
      { label: "Full", price: 150 }
    ]
  },
  {
    id: "dish-steamed-basmati-rice",
    name: "Steamed Basmati Rice",
    group: "Biryani & Rice",
    subCategory: "Rice",
    description: "Light and fluffy aromatic long-grain steamed white basmati rice.",
    isVeg: true,
    prices: [
      { label: "Half", price: 80 },
      { label: "Full", price: 130 }
    ]
  },
  {
    id: "dish-dal-khichdi-tadka",
    name: "Dal Khichdi Tadka",
    group: "Biryani & Rice",
    subCategory: "Rice",
    description: "Comforting yellow lentil and rice preparation tempered with desi ghee, garlic, and cumin.",
    isVeg: true,
    price: 190
  },

  // --- Page 11 Rice Bahar (25 dishes, Half / Full & Single Price) ---
  {
    id: "dish-p11-biryani-rice",
    name: "Biryani Rice",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Fragrant saffron-tinted long-grain basmati rice seasoned with whole spices and brown onions.",
    isVeg: true,
    prices: [
      { label: "Half", price: 75 },
      { label: "Full", price: 110 }
    ]
  },
  {
    id: "dish-p11-steamed-rice",
    name: "Steamed Rice",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Fluffy steamed long-grain white basmati rice.",
    isVeg: true,
    prices: [
      { label: "Half", price: 75 },
      { label: "Full", price: 110 }
    ]
  },
  {
    id: "dish-p11-zeera-rice",
    name: "Zeera Rice",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Aromatic basmati rice tempered with roasted cumin seeds and desi ghee.",
    isVeg: true,
    prices: [
      { label: "Half", price: 100 },
      { label: "Full", price: 145 }
    ]
  },
  {
    id: "dish-p11-chicken-pulao",
    name: "Chicken Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Traditional yakhni pulao cooked with chicken pieces, whole spices, and fragrant basmati rice.",
    isVeg: false,
    price: 230
  },
  {
    id: "dish-p11-mutton-pulao",
    name: "Mutton Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Tender goat meat slow-simmered with aromatic mutton stock and long-grain basmati rice.",
    isVeg: false,
    price: 255
  },
  {
    id: "dish-p11-zamzam-pulao",
    name: "Zamzam Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Grand celebratory festive pulao loaded with chicken, mutton seekh, boiled eggs, and dry fruits.",
    isVeg: false,
    price: 265,
    tags: ["House Special"],
    isPopular: true
  },
  {
    id: "dish-p11-veg-pulao",
    name: "Veg Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Mild basmati rice cooked with fresh seasonal garden vegetables, peas, and whole spices.",
    isVeg: true,
    price: 215
  },
  {
    id: "dish-p11-paneer-pulao",
    name: "Paneer Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Tender cubes of fresh paneer tossed with aromatic spiced basmati rice.",
    isVeg: true,
    price: 240
  },
  {
    id: "dish-p11-prawns-pulao",
    name: "Prawns Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Fresh coastal prawns sautéed in spiced butter and layered with fragrant basmati.",
    isVeg: false,
    price: 300
  },
  {
    id: "dish-p11-chicken-tikka-pulao",
    name: "Chicken Tikka Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Clay-oven grilled smoky chicken tikka tossed with basmati rice and rich spices.",
    isVeg: false,
    price: 265
  },
  {
    id: "dish-p11-egg-pulao",
    name: "Egg Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Spiced basmati rice cooked with seasoned boiled eggs and brown onions.",
    isVeg: false,
    price: 215
  },
  {
    id: "dish-p11-chicken-biryani",
    name: "Chicken Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Authentic dum biryani layered with marinated chicken, saffron rice, and fried onions.",
    isVeg: false,
    prices: [
      { label: "Half", price: 110 },
      { label: "Full", price: 190 }
    ],
    tags: ["Bestseller"],
    isPopular: true
  },
  {
    id: "dish-p11-mutton-biryani",
    name: "Mutton Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Royal slow-cooked dum mutton biryani with spiced goat meat and aged basmati rice.",
    isVeg: false,
    prices: [
      { label: "Half", price: 155 },
      { label: "Full", price: 240 }
    ],
    tags: ["Mughlai Classic"]
  },
  {
    id: "dish-p11-chicken-kashmiri-pulao",
    name: "Chicken Kashmiri Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Rich mild pulao cooked with chicken, fresh fruits, nuts, and mild saffron aromatics.",
    isVeg: false,
    price: 240
  },
  {
    id: "dish-p11-veg-kashmiri-pulao",
    name: "Veg Kashmiri Pulao",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Mild basmati rice cooked with raisins, cashews, pomegranate, and seasonal fruit garnishes.",
    isVeg: true,
    price: 215
  },
  {
    id: "dish-p11-prawns-biryani",
    name: "Prawns Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Succulent prawns slow-cooked on dum with spices, saffron, and aromatic rice.",
    isVeg: false,
    price: 335
  },
  {
    id: "dish-p11-fish-biryani",
    name: "Fish Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Fresh fish fillets marinated in coastal coastal spices and layered on dum with basmati.",
    isVeg: false,
    price: 420
  },
  {
    id: "dish-p11-egg-biryani",
    name: "Egg Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Golden fried boiled eggs layered with rich biryani masala and saffron basmati rice.",
    isVeg: false,
    price: 215
  },
  {
    id: "dish-p11-veg-biryani",
    name: "Veg Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Mixed seasonal vegetables, cottage cheese, and fragrant basmati slow-cooked on dum.",
    isVeg: true,
    price: 205
  },
  {
    id: "dish-p11-chicken-tikka-biryani-p11",
    name: "Chi. Tikka Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Tandoori spiced boneless chicken tikka tossed into fragrant layered biryani rice.",
    isVeg: false,
    price: 230
  },
  {
    id: "dish-p11-chicken-handi-biryani",
    name: "Chicken Handi Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Sealed clay handi slow-braised chicken biryani with deep aromatic spice blend.",
    isVeg: false,
    price: 275
  },
  {
    id: "dish-p11-mutton-handi-biryani",
    name: "Mutton Handi Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Rich handi-cooked mutton biryani layered with bone-in goat meat and pure desi ghee.",
    isVeg: false,
    price: 350
  },
  {
    id: "dish-p11-chicken-hyderabadi-biryani",
    name: "Chicken Hyderabadi Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Spicy kachchi style Hyderabadi marinated chicken layered with brown onions, mint, and yoghurt.",
    isVeg: false,
    price: 300,
    tags: ["Spicy"]
  },
  {
    id: "dish-p11-mutton-hyderabadi-biryani",
    name: "Mutton Hyderabadi Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Fiery Hyderabadi style tender mutton layered with green chillies, mint, and aged basmati.",
    isVeg: false,
    price: 350,
    tags: ["Spicy"]
  },
  {
    id: "dish-p11-paneer-tikka-biryani",
    name: "Paneer Tikka Biryani",
    group: "Biryani & Rice",
    subCategory: "Rice Bahar",
    description: "Charcoal grilled paneer tikka cubes layered with saffron rice, cashews, and biryani spices.",
    isVeg: true,
    price: 300
  },

  // ═════════════════════════════════════════════════════════════════
  // 6. SPECIALTIES (PDF Page 2 Tawa Takatak - 8, Exclusive - 16, & Page 3 Batair - 10)
  // ═════════════════════════════════════════════════════════════════
  // Tawa Takatak (8 items)
  {
    id: "dish-chicken-takatak",
    name: "Chicken Tawa",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Boneless chicken chopped and seared on iron tawa with ginger, garlic, green chillies, and robust spices.",
    isVeg: false,
    price: 250
  },
  {
    id: "dish-chicken-gurda-takatak",
    name: "Chicken Gurda Takatak",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Spicy chicken kidney pieces quick-fried on iron tawa with aromatic masala.",
    isVeg: false,
    prices: [
      { label: "Half", price: 190 },
      { label: "Full", price: 340 }
    ]
  },
  {
    id: "dish-chicken-kaleji-takatak",
    name: "Chicken Kaleji Takatak",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Tender chicken liver quickly tossed on high heat with crushed pepper and brown onions.",
    isVeg: false,
    prices: [
      { label: "Half", price: 190 },
      { label: "Full", price: 340 }
    ]
  },
  {
    id: "dish-chicken-dil-gurda-takatak",
    name: "Chicken Dil Gurda Takatak",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Combination of chicken heart and kidney tossed on sizzling flat tawa with spicy masala.",
    isVeg: false,
    prices: [
      { label: "Half", price: 200 },
      { label: "Full", price: 360 }
    ]
  },
  {
    id: "dish-chicken-keema-takatak",
    name: "Chicken Keema Takatak",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Spicy minced chicken cooked continuously on flat tawa with onions, mint, and chillies.",
    isVeg: false,
    prices: [
      { label: "Half", price: 190 },
      { label: "Full", price: 340 }
    ]
  },
  {
    id: "dish-mutton-keema-takatak",
    name: "Mutton Tawa",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Mutton cuts seared on cast iron tawa with ginger juliennes and whole spices.",
    isVeg: false,
    price: 320
  },
  {
    id: "dish-mutton-bheja-takatak",
    name: "Mutton Bheja Takatak",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Delicate mutton brain scrambled with roasted spices, tomatoes, and fresh coriander on tawa.",
    isVeg: false,
    price: 280
  },
  {
    id: "dish-mutton-gurda-kaleji-takatak",
    name: "Mutton Gurda Kaleji Takatak",
    group: "Specialties",
    subCategory: "Tawa Takatak",
    description: "Mutton kidney and liver sauteed with crushed red chillies, black pepper, and onions.",
    isVeg: false,
    price: 320
  },

  // Exclusive Dishes (16 items from Page 2)
  {
    id: "dish-chicken-noorani-special",
    name: "Chi. Noorani Special",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Our signature chicken delicacy cooked in royal cashew-saffron gravy with rich dry fruits.",
    isVeg: false,
    price: 400,
    tags: ["House Signature", "Chef's Pride"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-chicken-zaitoon",
    name: "Chicken Zaitoon",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Exclusive rich chicken dish flavored with olives, subtle spices, and rich gravy.",
    isVeg: false,
    price: 500,
    tags: ["Exclusive Special"]
  },
  {
    id: "dish-chicken-lazeez-exclusive",
    name: "Chicken Lazeez (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Succulent chicken cooked in mild, fragrant brown onion and curd gravy.",
    isVeg: false,
    prices: [
      { label: "Half", price: 230 },
      { label: "Full", price: 420 }
    ]
  },
  {
    id: "dish-chicken-maharaja-exclusive",
    name: "Chicken Maharaja (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "A royal celebration dish with chicken, boiled egg slices, and velvety saffron gravy.",
    isVeg: false,
    prices: [
      { label: "Half", price: 250 },
      { label: "Full", price: 460 }
    ]
  },
  {
    id: "dish-chicken-maratha-exclusive",
    name: "Chicken Maratha (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Robust, medium spicy gravy flavored with dry coconut, sesame, and roasted onions.",
    isVeg: false,
    prices: [
      { label: "Half", price: 240 },
      { label: "Full", price: 440 }
    ]
  },
  {
    id: "dish-chicken-kolhapuri-exclusive",
    name: "Chicken Kolhapuri (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Fiery red gravy preparation infused with sharp spices and dry roasted chillies.",
    isVeg: false,
    prices: [
      { label: "Half", price: 220 },
      { label: "Full", price: 400 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-chicken-handi-special",
    name: "Chicken Handi Special (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Slow-simmered in earthenware pot with whole spices, capsicum, and fresh tomato gravy.",
    isVeg: false,
    prices: [
      { label: "Half", price: 240 },
      { label: "Full", price: 440 }
    ]
  },
  {
    id: "dish-chicken-kadai-exclusive",
    name: "Chicken Kadai (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Wok-cooked chicken with chunky bell peppers, onions, and freshly crushed coriander seeds.",
    isVeg: false,
    prices: [
      { label: "Half", price: 220 },
      { label: "Full", price: 400 }
    ]
  },
  {
    id: "dish-chicken-mughlai-exclusive",
    name: "Chicken Mughlai (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Creamy traditional gravy infused with egg, curd, and subtle aromatic garam masala.",
    isVeg: false,
    prices: [
      { label: "Half", price: 230 },
      { label: "Full", price: 420 }
    ]
  },
  {
    id: "dish-chicken-afghani-exclusive",
    name: "Chicken Afghani (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Mild and thick cream-cashew gravy with gentle spices and charcoal-smoked flavor.",
    isVeg: false,
    prices: [
      { label: "Half", price: 250 },
      { label: "Full", price: 460 }
    ]
  },
  {
    id: "dish-chicken-changezi-exclusive",
    name: "Chicken Changezi (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Old Delhi style rich tangy chicken curry with fried onions, milk, and ripe tomatoes.",
    isVeg: false,
    prices: [
      { label: "Half", price: 240 },
      { label: "Full", price: 440 }
    ]
  },
  {
    id: "dish-chicken-dahiwala-exclusive",
    name: "Chicken Dahiwala (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Light, soothing yoghurt gravy cooked with black peppercorns and whole green cardamom.",
    isVeg: false,
    prices: [
      { label: "Half", price: 230 },
      { label: "Full", price: 420 }
    ]
  },
  {
    id: "dish-mutton-rogan-josh-exclusive",
    name: "Mutton Rogan Josh (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Tender cuts of goat meat simmered in aromatic gravy of Kashmiri red chillies and whole spices.",
    isVeg: false,
    prices: [
      { label: "Half", price: 280 },
      { label: "Full", price: 520 }
    ]
  },
  {
    id: "dish-mutton-korma-special-exclusive",
    name: "Mutton Korma Special (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Rich royal mutton preparation simmered in browned onion, yoghurt, and almond paste gravy.",
    isVeg: false,
    prices: [
      { label: "Half", price: 290 },
      { label: "Full", price: 540 }
    ]
  },
  {
    id: "dish-mutton-nalli-nihari-exclusive",
    name: "Mutton Nalli Nihari (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Mutton shanks slow-braised overnight with potli spices, bone marrow, and ginger slivers.",
    isVeg: false,
    price: 360
  },
  {
    id: "dish-mutton-bhuna-gosht-exclusive",
    name: "Mutton Bhuna Gosht (Exclusive)",
    group: "Specialties",
    subCategory: "Exclusive Dishes",
    description: "Goat meat pan-fried in rich thick onion reduction until dark, aromatic and tender.",
    isVeg: false,
    prices: [
      { label: "Half", price: 270 },
      { label: "Full", price: 500 }
    ]
  },

  // Batair / Quail (10 items from Page 3)
  {
    id: "dish-batair-tandoori",
    name: "Batair Tandoori (Quail)",
    group: "Specialties",
    subCategory: "Batair",
    description: "Delicate farm quail marinated in tandoori spices and roasted to juicy tenderness over charcoal.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 240 },
      { label: "4 Pcs", price: 460 }
    ],
    tags: ["Quail Specialty", "Charcoal Baked"]
  },
  {
    id: "dish-batair-masala-gravy",
    name: "Batair Masala",
    group: "Specialties",
    subCategory: "Batair",
    description: "Tender quail pieces simmered in rich Mughlai brown onion and tomato masala.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 400 },
      { label: "4 Pcs", price: 700 }
    ]
  },
  {
    id: "dish-batair-fry-dry",
    name: "Batair Fry Dry",
    group: "Specialties",
    subCategory: "Batair",
    description: "Crispy fried spiced quail tossed with crunchy curry leaves and green chillies.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 240 },
      { label: "4 Pcs", price: 460 }
    ]
  },
  {
    id: "dish-batair-green-tawa-fry",
    name: "Batair Green Tawa Fry",
    group: "Specialties",
    subCategory: "Batair",
    description: "Quail tossed on high flame tawa in aromatic coriander-mint green chutney marinade.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 250 },
      { label: "4 Pcs", price: 480 }
    ]
  },
  {
    id: "dish-batair-angara",
    name: "Batair Angara",
    group: "Specialties",
    subCategory: "Batair",
    description: "Fiery red smoked gravy with tender quail pieces.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 270 },
      { label: "4 Pcs", price: 510 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-batair-peshawari",
    name: "Batair Peshawari",
    group: "Specialties",
    subCategory: "Batair",
    description: "Quail cooked Peshawari style with crushed black peppercorns and rich cashew gravy.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 270 },
      { label: "4 Pcs", price: 510 }
    ]
  },
  {
    id: "dish-batair-handi",
    name: "Batair Handi",
    group: "Specialties",
    subCategory: "Batair",
    description: "Quail slow-cooked in clay handi with whole spices and bell peppers.",
    isVeg: false,
    prices: [
      { label: "2 Pcs", price: 280 },
      { label: "4 Pcs", price: 520 }
    ]
  },
  {
    id: "dish-batair-biryani-dum",
    name: "Batair Biryani Dum",
    group: "Specialties",
    subCategory: "Batair",
    description: "Aromatic dum biryani cooked with tender whole quail and fragrant saffron rice.",
    isVeg: false,
    prices: [{ label: "2 Pcs", price: 320 }]
  },
  {
    id: "dish-batair-khapsa-rice",
    name: "Batair Khapsa Rice",
    group: "Specialties",
    subCategory: "Batair",
    description: "Arabian spiced rice platter served with whole roasted quail, nuts, and boiled egg.",
    isVeg: false,
    prices: [{ label: "2 Pcs", price: 380 }]
  },
  {
    id: "dish-batair-chilli-dry",
    name: "Batair Chilli Dry",
    group: "Specialties",
    subCategory: "Batair",
    description: "Crisp fried quail tossed with garlic, sliced green chillies, and soy glaze.",
    isVeg: false,
    prices: [{ label: "2 Pcs", price: 260 }]
  },

  // ═════════════════════════════════════════════════════════════════
  // 7. SEAFOOD (PDF Page 5 Sea Food - 15 items)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-surmai-fry",
    name: "Surmai Fry (Tawa / Rawa)",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Fresh Kingfish slice coated in spicy Konkani masala or crisp rawa, shallow-fried on tawa.",
    isVeg: false,
    prices: [{ label: "1 Pc", price: 320 }],
    tags: ["Coastal Favorite"]
  },
  {
    id: "dish-surmai-masala-curry",
    name: "Surmai Masala Curry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Fresh kingfish simmered in authentic coastal coconut and kokum curry.",
    isVeg: false,
    price: 360
  },
  {
    id: "dish-pomfret-fry",
    name: "Pomfret Fry (Tawa / Rawa)",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Whole fresh silver pomfret marinated in coastal spices and crisp-fried.",
    isVeg: false,
    prices: [{ label: "1 Pc", price: 380 }],
    tags: ["Fish Special"]
  },
  {
    id: "dish-pomfret-masala-curry",
    name: "Pomfret Masala Curry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Whole pomfret gently cooked in aromatic onion, tomato, and carom seed gravy.",
    isVeg: false,
    price: 420
  },
  {
    id: "dish-pomfret-tandoori",
    name: "Pomfret Tandoori (Whole)",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Fresh whole pomfret seasoned with tandoori masala and roasted golden in clay oven.",
    isVeg: false,
    prices: [{ label: "1 Pc", price: 420 }],
    tags: ["Clay Oven"]
  },
  {
    id: "dish-prawns-koliwada",
    name: "Prawns Koliwada",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Fresh coastal prawns dipped in red carom-chilli batter, fried until crisp and golden.",
    isVeg: false,
    price: 340,
    tags: ["Crispy", "Popular"]
  },
  {
    id: "dish-prawns-tawa-fry",
    name: "Prawns Tawa Fry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Juicy prawns tossed on sizzling iron tawa with crushed garlic, green chillies, and curry leaves.",
    isVeg: false,
    price: 350
  },
  {
    id: "dish-prawns-masala-curry",
    name: "Prawns Masala Curry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Prawns simmered in flavorful onion-tomato gravy with freshly ground spices.",
    isVeg: false,
    price: 360
  },
  {
    id: "dish-prawns-garlic-butter-fry",
    name: "Prawns Garlic Butter Fry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Pan-sautéed succulent prawns in golden butter, crushed garlic, and black pepper.",
    isVeg: false,
    price: 380
  },
  {
    id: "dish-prawns-biryani-dum",
    name: "Prawns Biryani Dum",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Coastal prawns slow-steamed under dum with fragrant basmati rice and aromatics.",
    isVeg: false,
    price: 390
  },
  {
    id: "dish-rawas-fish-fry",
    name: "Fish Oil Fry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Fish steaks fried golden in seasoned aromatic oil.",
    isVeg: false,
    price: 330
  },
  {
    id: "dish-rawas-fish-curry",
    name: "Rawas Fish Curry",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Delicate rawas fish steaks simmered in home-style coastal masala gravy.",
    isVeg: false,
    price: 350
  },
  {
    id: "dish-bombil-fry",
    name: "Bombil Fry (Crispy Bombay Duck)",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Ultra-crisp semolina coated tender fresh Bombay Duck fried golden.",
    isVeg: false,
    prices: [{ label: "4 Pcs", price: 240 }],
    tags: ["Crunchy Delight"]
  },
  {
    id: "dish-fish-tikka-tandoori",
    name: "Fish Tikka Tandoori",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Boneless fish cubes roasted on tandoor skewers with ajwain and lemon.",
    isVeg: false,
    prices: [{ label: "8 Pcs", price: 360 }]
  },
  {
    id: "dish-fish-chilli-dry",
    name: "Fish Chilli Dry (Chinese)",
    group: "Seafood",
    subCategory: "Sea Food",
    description: "Crispy batter-fried fish fillets tossed with capsicum, garlic, and dark soy.",
    isVeg: false,
    price: 340
  },

  // ═════════════════════════════════════════════════════════════════
  // 8. VEG & PANEER (PDF Page 9 - Veg: 30 dishes & Paneer: 17 dishes, Single Price)
  // Kept in exact same order as PDF
  // ═════════════════════════════════════════════════════════════════
  // --- Veg Section (30 dishes, including Alu and Daal dishes) ---
  {
    id: "dish-p9-veg-handi",
    name: "Veg Handi",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Mixed garden vegetables slow-simmered in clay handi with rich onion-tomato gravy.",
    isVeg: true,
    price: 250
  },
  {
    id: "dish-p9-veg-kadai",
    name: "Veg Kadai",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Assorted vegetables wok-tossed with crunchy capsicum and freshly pounded kadai spices.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p9-veg-kolhapuri",
    name: "Veg Kolhapuri",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Fiery spicy mixed vegetable curry tempered with Kolhapuri dry red chillies and sesame.",
    isVeg: true,
    price: 180,
    tags: ["Spicy"]
  },
  {
    id: "dish-p9-veg-maratha",
    name: "Veg Maratha",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Mixed vegetables cooked in roasted coconut, sesame, and brown onion gravy.",
    isVeg: true,
    price: 190
  },
  {
    id: "dish-p9-veg-makhanwala",
    name: "Veg Makhanwala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Garden fresh vegetables simmered in satin sweet-tangy makhani gravy with butter.",
    isVeg: true,
    price: 190
  },
  {
    id: "dish-p9-veg-korma",
    name: "Veg Korma",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Mild and creamy vegetable stew cooked in cashew and melon seed paste.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p9-veg-mughlai",
    name: "Veg Mughlai",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Rich Mughlai gravy preparation with mixed vegetables, cream, and green cardamom.",
    isVeg: true,
    price: 190
  },
  {
    id: "dish-p9-veg-hyderabadi",
    name: "Veg Hyderabadi",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Spinach and mint infused aromatic green vegetable curry.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p9-veg-jaipuri",
    name: "Veg Jaipuri",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Rajasthani style vegetable preparation topped with roasted papad pieces.",
    isVeg: true,
    price: 190
  },
  {
    id: "dish-p9-veg-tawa-masala",
    name: "Veg Tawa Masala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Vegetables quick-seared on high flame tawa with robust spices and ginger.",
    isVeg: true,
    price: 200
  },
  {
    id: "dish-p9-veg-bhuna",
    name: "Veg Bhuna",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Diced vegetables roasted with caramelized onion paste and cracked coriander.",
    isVeg: true,
    price: 190
  },
  {
    id: "dish-p9-veg-do-pyaza",
    name: "Veg Do Pyaza",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Vegetables cooked with double portions of braised and sautéed diced onions.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p9-mix-vegetable",
    name: "Mix Vegetable",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Homestyle daily preparation of seasonal garden vegetables in spiced gravy.",
    isVeg: true,
    price: 170
  },
  {
    id: "dish-p9-green-peas-masala",
    name: "Green Peas Masala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Sweet tender green peas cooked in mildly spiced onion-tomato curry.",
    isVeg: true,
    price: 160
  },
  {
    id: "dish-p9-chana-masala",
    name: "Chana Masala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "White chickpeas simmered in hearty, tangy Punjabi amchur and garam masala gravy.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-mushroom-masala",
    name: "Mushroom Masala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Fresh button mushrooms sauteed in rich spiced onion-tomato masala.",
    isVeg: true,
    price: 200
  },
  {
    id: "dish-p9-mushroom-kadai",
    name: "Mushroom Kadai",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Button mushrooms and bell peppers cooked in wok with freshly ground spices.",
    isVeg: true,
    price: 210
  },
  {
    id: "dish-p9-mushroom-tawa-masala",
    name: "Mushroom Tawa Masala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Mushrooms pan-seared on iron griddle with ginger, garlic, and fresh green chillies.",
    isVeg: true,
    price: 220
  },
  {
    id: "dish-p9-alu-matar",
    name: "Alu Matar",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Diced potatoes and sweet green peas simmered in comforting homestyle gravy.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-alu-gobi",
    name: "Alu Gobi",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Classic potato and cauliflower florets sautéed with turmeric, cumin, and ginger.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-alu-palak",
    name: "Alu Palak",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Potato chunks tossed in smooth, slow-cooked spinach puree.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-alu-jeera",
    name: "Alu Jeera (Dry)",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Golden potatoes tempered with plenty of roasted cumin seeds and fresh coriander.",
    isVeg: true,
    price: 140
  },
  {
    id: "dish-p9-alu-methi",
    name: "Alu Methi",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Potatoes cooked with fresh slightly bitter fenugreek leaves and mild spices.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-bhendi-masala",
    name: "Bhendi Masala",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Tender okra cooked with sliced onions, amchur powder, and whole spices.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-bhendi-fry",
    name: "Bhendi Fry",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Crispy pan-fried okra tossed with dry spices and garlic.",
    isVeg: true,
    price: 160
  },
  {
    id: "dish-p9-baingan-bharta",
    name: "Baingan Bharta",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Charcoal-roasted eggplant mashed and sauteed with green chillies, onions, and peas.",
    isVeg: true,
    price: 160
  },
  {
    id: "dish-p9-dal-fry",
    name: "Dal Fry",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Yellow toor dal tempered with butter, cumin, garlic, and green chillies.",
    isVeg: true,
    price: 130
  },
  {
    id: "dish-p9-dal-tadka",
    name: "Dal Tadka (Desi Ghee)",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Yellow lentils tempered right before serving with sizzling pure desi ghee and dry red chillies.",
    isVeg: true,
    price: 150
  },
  {
    id: "dish-p9-dal-kolhapuri",
    name: "Dal Kolhapuri",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Spicy tempered yellow dal infused with hot Kolhapuri red masala.",
    isVeg: true,
    price: 140
  },
  {
    id: "dish-p9-dal-makhani",
    name: "Dal Makhani",
    group: "Veg & Paneer",
    subCategory: "Veg",
    description: "Whole black urad and kidney beans slow-simmered for 12 hours with butter and cream.",
    isVeg: true,
    price: 180,
    tags: ["Slow Cooked"]
  },

  // --- Paneer Section (17 dishes, single price) ---
  {
    id: "dish-p9-paneer-butter-masala",
    name: "Paneer Butter Masala",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Fresh cottage cheese cubes simmered in velvety tomato-cashew makhani gravy with butter.",
    isVeg: true,
    price: 220,
    tags: ["Bestseller"]
  },
  {
    id: "dish-p9-paneer-kadai",
    name: "Paneer Kadai",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Paneer and crunchy capsicum stir-cooked with freshly pounded coriander and red chillies.",
    isVeg: true,
    price: 220
  },
  {
    id: "dish-p9-paneer-tikka-masala",
    name: "Paneer Tikka Masala",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Charcoal-roasted paneer tikka cubes cooked in hearty spiced onion-tomato masala.",
    isVeg: true,
    price: 220
  },
  {
    id: "dish-p9-paneer-handi",
    name: "Paneer Handi",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Cottage cheese slow-simmered in earthenware pot with whole spices and bell peppers.",
    isVeg: true,
    price: 230
  },
  {
    id: "dish-p9-paneer-kolhapuri",
    name: "Paneer Kolhapuri",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Fiery spicy paneer curry cooked with roasted sesame and dry Kolhapuri chillies.",
    isVeg: true,
    price: 210,
    tags: ["Spicy"]
  },
  {
    id: "dish-p9-paneer-palak",
    name: "Paneer Palak (Palak Paneer)",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Soft paneer cubes in smooth, garlic-tempered fresh spinach gravy.",
    isVeg: true,
    price: 200
  },
  {
    id: "dish-p9-paneer-bhurji",
    name: "Paneer Bhurji",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Crumbled cottage cheese sautéed on tawa with onions, tomatoes, and green chillies.",
    isVeg: true,
    price: 220
  },
  {
    id: "dish-p9-paneer-tawa-masala",
    name: "Paneer Tawa Masala",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Paneer cubes seared on cast iron tawa with ginger juliennes and dry spices.",
    isVeg: true,
    price: 240
  },
  {
    id: "dish-p9-paneer-bhuna",
    name: "Paneer Bhuna",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Paneer cooked in thick, caramelized onion and tomato reduction.",
    isVeg: true,
    price: 230
  },
  {
    id: "dish-p9-paneer-do-pyaza",
    name: "Paneer Do Pyaza",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Paneer with double additions of braised and sautéed onion petals.",
    isVeg: true,
    price: 210
  },
  {
    id: "dish-p9-paneer-makhanwala",
    name: "Paneer Makhanwala",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Rich tomato makhani sauce with cottage cheese and generous butter.",
    isVeg: true,
    price: 220
  },
  {
    id: "dish-p9-paneer-korma",
    name: "Paneer Korma",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Mild cottage cheese curry simmered in creamy yogurt and cashew paste.",
    isVeg: true,
    price: 220
  },
  {
    id: "dish-p9-paneer-shahi-korma",
    name: "Paneer Shahi Korma",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Royal paneer preparation with saffron, dried fruits, and rich nut paste.",
    isVeg: true,
    price: 240
  },
  {
    id: "dish-p9-paneer-afghani",
    name: "Paneer Afghani",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Mild and thick cashew-cream gravy with tandoori paneer cubes.",
    isVeg: true,
    price: 240
  },
  {
    id: "dish-p9-paneer-lazeez",
    name: "Paneer Lazeez",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Paneer cooked in fragrant, mild brown onion and cashew gravy.",
    isVeg: true,
    price: 230
  },
  {
    id: "dish-p9-paneer-angara",
    name: "Paneer Angara",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "Fiery red smoked paneer gravy infused with live charcoal aroma.",
    isVeg: true,
    price: 240,
    tags: ["Spicy"]
  },
  {
    id: "dish-p9-paneer-noorani-special",
    name: "Paneer Noorani Special",
    group: "Veg & Paneer",
    subCategory: "Paneer",
    description: "House special celebration paneer cooked in royal cashew-saffron gravy.",
    isVeg: true,
    price: 260,
    tags: ["Chef Special"]
  },

  // ═════════════════════════════════════════════════════════════════
  // 9. CHINESE (PDF Pages 12, 13 & 14 - Complete Chinese Menu)
  // ═════════════════════════════════════════════════════════════════
  // --- Page 12 Chinese Starter (36 dishes, Gravy / Dry) ---
  {
    id: "dish-p12-noorani-special-chilly",
    name: "Noorani Special Chilly",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Chef's signature spicy chicken preparation tossed with bell peppers, garlic, and hot chilli sauce.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 315 },
      { label: "Dry", price: 335 }
    ],
    tags: ["Chef Special"],
    isSignature: true
  },
  {
    id: "dish-p12-chicken-dragon-chilly",
    name: "Chicken Dragon Chilly",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crisp shredded chicken strips tossed in fiery sweet and spicy red dragon chilli glaze.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 315 },
      { label: "Dry", price: 335 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-p12-chicken-garlic",
    name: "Chicken Garlic",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Succulent chicken chunks sautéed with heaps of fragrant minced golden garlic and spring onions.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 240 },
      { label: "Dry", price: 265 }
    ]
  },
  {
    id: "dish-p12-chicken-chilly",
    name: "Chicken Chilly",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Popular Indo-Chinese wok starter with diced chicken, green chillies, onions, and dark soy.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 215 },
      { label: "Dry", price: 240 }
    ],
    tags: ["Popular"]
  },
  {
    id: "dish-p12-chicken-manchurian",
    name: "Chicken Manchurian",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Tender seasoned chicken dumplings wok-tossed in tangy garlic, ginger, and coriander soy sauce.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 210 },
      { label: "Dry", price: 220 }
    ],
    tags: ["Classic"]
  },
  {
    id: "dish-p12-chicken-hong-kong",
    name: "Chicken Hong Kong",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Diced chicken tossed with roasted cashews, whole red chillies, and savory Hong Kong sauce.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 230 },
      { label: "Dry", price: 255 }
    ]
  },
  {
    id: "dish-p12-chicken-schezwan",
    name: "Chicken Schezwan",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Fiery wok-tossed chicken chunks bathed in hot house-made Schezwan chilli pepper sauce.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 230 },
      { label: "Dry", price: 255 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-p12-chicken-65",
    name: "Chicken 65",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crispy batter-fried chicken pieces tempered with curry leaves, cracked mustard, and red chillies.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 240 },
      { label: "Dry", price: 265 }
    ]
  },
  {
    id: "dish-p12-chicken-lollypop-oil-fry",
    name: "Chicken Lolly Pop Oil Fry",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crisp frenched chicken winglets deep-fried golden; odd menu pricing kept exactly as printed in PDF.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 300 },
      { label: "Dry", price: 270 }
    ],
    tags: ["Bestseller","Odd Menu Price"]
  },
  {
    id: "dish-p12-chicken-lollypop-schezwan",
    name: "Chicken Lollipop Schezwan",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crispy chicken lollipops generously tossed in pungent red Schezwan sauce with scallions.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 325 },
      { label: "Dry", price: 335 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-p12-chicken-singaporean",
    name: "Chicken Singaporean",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Chicken wok-tossed with curry powder, sweet and sour aromatics, bell peppers, and scallions.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 240 },
      { label: "Dry", price: 265 }
    ]
  },
  {
    id: "dish-p12-chicken-noori",
    name: "Chicken Noori",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Special marinated chicken pieces tossed in house spices, roasted garlic, and mild herbs.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-dilbahar",
    name: "Chicken Dilbahar",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Aromatic chicken cubes tossed with crushed black pepper, toasted sesame, and fresh herbs.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-begum-bahar",
    name: "Chicken Begum Bahar",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Deluxe chicken starter prepared with cashew paste, mild spices, cream, and crunchy greens.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 395 }
    ]
  },
  {
    id: "dish-p12-chicken-mohabbatein",
    name: "Chicken Mohabbatein",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Rich boneless chicken starter tossed in sweet-and-spicy exotic oriental dressing with dry fruits.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 395 }
    ]
  },
  {
    id: "dish-p12-chicken-chilli-milli",
    name: "Chicken Chilli Milli",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Spicy chicken pieces tossed with baby corn, crunchy peppers, and hot ginger-garlic sauce.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 420 }
    ]
  },
  {
    id: "dish-p12-chicken-sizzler",
    name: "Chicken Sizzler",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Smoking-hot wok-seared chicken with charred onions, capsicum, and peppery dark glaze.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 420 }
    ]
  },
  {
    id: "dish-p12-chicken-hungama",
    name: "Chicken Hungama",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Extra spicy chicken tossed with crushed red chillies, garlic, and special house seasoning.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 420 }
    ],
    tags: ["Fiery"]
  },
  {
    id: "dish-p12-chicken-crispy",
    name: "Chicken Crispy",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crispy batter-fried chicken strips tossed with crunchy capsicum, garlic, and sweet chilli glaze.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 290 }
    ],
    tags: ["Crunchy","Popular"]
  },
  {
    id: "dish-p12-chicken-garlic-mayonnaise",
    name: "Chicken Garlic Mayonnaise",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crispy chicken pieces tossed with golden garlic and creamy mayonnaise sauce.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 315 }
    ]
  },
  {
    id: "dish-p12-chicken-roasted-chilly",
    name: "Chicken Roasted Chilly",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Wok-charred chicken with roasted red chillies, shallots, and spicy pepper oil.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-sathe",
    name: "Chicken Sathe",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Grilled chicken skewers basted with aromatic Indonesian-style spiced peanut marinade.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 420 }
    ]
  },
  {
    id: "dish-p12-chicken-italian",
    name: "Chicken Italian",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Fusion chicken starter tossed with Italian herbs, garlic, crushed pepper, and tomato glaze.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-exotic",
    name: "Chicken Exotic",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Tender chicken pieces tossed with exotic vegetables in mild savory oyster-garlic glaze.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-dry-fruit",
    name: "Chicken Dry Fruit",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Rich chicken appetizer tossed with fried cashews, almonds, raisins, and sweet-tangy sauce.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-8-to-9",
    name: "Chicken 8 To 9",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "House special chicken appetizer prepared with 8 aromatic ingredients and special chilli sauce.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-lapeta",
    name: "Chicken Lapeta",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crispy chicken rolled and smothered in thick spicy roasted onion-garlic masala coating.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 420 }
    ]
  },
  {
    id: "dish-p12-chicken-kalimirch",
    name: "Chicken Kalimirch",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Chicken wok-fried with freshly ground Malabar black peppercorns, curry leaves, and ginger.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 420 }
    ]
  },
  {
    id: "dish-p12-chicken-oyster-chili",
    name: "Chicken Oyster Chili",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Tender chicken pieces wok-tossed in robust dark oyster sauce with sliced green chillies.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 395 }
    ]
  },
  {
    id: "dish-p12-chicken-hot-pepper",
    name: "Chicken Hot Pepper",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Fiery chicken tossed with crushed Sichuan peppers, bird's eye chillies, and soy.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 360 }
    ]
  },
  {
    id: "dish-p12-chicken-malaysian-honey",
    name: "Chicken Malaysian Honey",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Crispy chicken tossed in sweet Malaysian wild honey, roasted sesame seeds, and mild chillies.",
    isVeg: false,
    prices: [
      { label: "Dry", price: 395 }
    ]
  },
  {
    id: "dish-p12-prawns-chilly",
    name: "Prawns Chilly",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Fresh coastal prawns sautéed with bell peppers, onions, green chillies, and soy.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 300 },
      { label: "Dry", price: 335 }
    ]
  },
  {
    id: "dish-p12-prawns-manchurian",
    name: "Prawns Manchurian",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Golden fried prawns tossed in tangy ginger, garlic, and coriander-infused brown sauce.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 300 },
      { label: "Dry", price: 335 }
    ]
  },
  {
    id: "dish-p12-prawns-garlic",
    name: "Prawns Garlic",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Succulent prawns simmered or wok-charred with toasted minced golden garlic and scallions.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 300 },
      { label: "Dry", price: 335 }
    ]
  },
  {
    id: "dish-p12-prawns-65",
    name: "Prawns 65",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Batter-crisped prawns tossed with aromatic curry leaves, mustard seeds, and curd seasoning.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 300 },
      { label: "Dry", price: 335 }
    ]
  },
  {
    id: "dish-p12-prawns-schezwan",
    name: "Prawns Schezwan",
    group: "Chinese",
    subCategory: "Chinese Starter",
    description: "Juicy prawns tossed in fiery red pepper Schezwan sauce with scallions and crushed garlic.",
    isVeg: false,
    prices: [
      { label: "Gravy", price: 300 },
      { label: "Dry", price: 335 }
    ],
    tags: ["Spicy"]
  },

  // --- Page 12 Rice with Dry (3 dishes) ---
  {
    id: "dish-p12-chicken-sizzler-rice",
    name: "Chicken Sizzler Rice",
    group: "Chinese",
    subCategory: "Rice with Dry",
    description: "Wok-fried rice served with smoking-hot dry chicken sizzler toppings and peppery glaze.",
    isVeg: false,
    price: 455
  },
  {
    id: "dish-p12-chicken-oyster-rice",
    name: "Chicken Oyster Rice",
    group: "Chinese",
    subCategory: "Rice with Dry",
    description: "Savory fried rice paired with dry wok-tossed chicken in rich oyster garlic sauce.",
    isVeg: false,
    price: 455
  },
  {
    id: "dish-p12-chicken-hot-pepper-rice",
    name: "Chicken Hot Pepper Rice",
    group: "Chinese",
    subCategory: "Rice with Dry",
    description: "Aromatic fried rice topped with spicy dry cracked pepper and red chilli chicken.",
    isVeg: false,
    price: 455
  },

  // --- Page 12 Noodles with Gravy (5 dishes) ---
  {
    id: "dish-p12-chicken-triple-noodles",
    name: "Chicken Triple Noodles",
    group: "Chinese",
    subCategory: "Noodles with Gravy",
    description: "Hearty combination platter of wok noodles, crispy fried noodles, and chicken gravy bowl.",
    isVeg: false,
    price: 335
  },
  {
    id: "dish-p12-chicken-triple-schezwan-noodles",
    name: "Chicken Triple Schezwan Noodles",
    group: "Chinese",
    subCategory: "Noodles with Gravy",
    description: "Spicy Schezwan wok noodles served with crisp noodles and a separate fiery chicken gravy bowl.",
    isVeg: false,
    price: 360,
    tags: ["Spicy"]
  },
  {
    id: "dish-p12-chicken-chilly-noodles",
    name: "Chicken Chilly Noodles",
    group: "Chinese",
    subCategory: "Noodles with Gravy",
    description: "Soft noodles tossed with spring onions and accompanied by rich chicken chilli gravy.",
    isVeg: false,
    price: 360
  },
  {
    id: "dish-p12-malaysian-noodles",
    name: "Malaysian Noodles",
    group: "Chinese",
    subCategory: "Noodles with Gravy",
    description: "Fragrant Malaysian-style spiced noodles served with savory chicken gravy.",
    isVeg: false,
    price: 455
  },
  {
    id: "dish-p12-tiranga-noodles",
    name: "Tiranga Noodles",
    group: "Chinese",
    subCategory: "Noodles with Gravy",
    description: "Tri-color layered noodles platter served with three distinct flavorful sauces and chicken gravy.",
    isVeg: false,
    price: 395
  },

  // --- Page 13 Chinese Soups (13 dishes) ---
  {
    id: "dish-p13-chicken-manchow-soup",
    name: "Chicken Manchow Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Classic dark spicy soup loaded with chicken, garlic, cilantro, and topped with crisp fried noodles.",
    isVeg: false,
    price: 145,
    tags: ["Popular"]
  },
  {
    id: "dish-p13-noorani-special-soup",
    name: "Noorani Special Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "House special rich chicken broth with egg drops, mushrooms, shredded chicken, and mild seasonings.",
    isVeg: false,
    price: 180,
    tags: ["House Special"]
  },
  {
    id: "dish-p13-sweet-corn-soup",
    name: "Sweet Corn Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Comforting creamy sweet corn kernel soup with shredded chicken and subtle white pepper.",
    isVeg: false,
    price: 155
  },
  {
    id: "dish-p13-hot-sour-soup",
    name: "Hot & Sour Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Tangy and pungent chicken broth spiced with vinegar, white pepper, and black fungus mushrooms.",
    isVeg: false,
    price: 145
  },
  {
    id: "dish-p13-lung-fung-soup",
    name: "Lung Fung Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Thick savory Cantonese broth made with chicken, egg white swirls, lemon zest, and mild spices.",
    isVeg: false,
    price: 170
  },
  {
    id: "dish-p13-chicken-mushroom-soup",
    name: "Chicken Mushroom Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Hearty broth slow-simmered with tender button mushrooms, shredded chicken, and ginger.",
    isVeg: false,
    price: 170
  },
  {
    id: "dish-p13-chicken-noodles-soup",
    name: "Chicken Noodles Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Clear soothing chicken broth filled with delicate noodles, shredded chicken, and spring greens.",
    isVeg: false,
    price: 155
  },
  {
    id: "dish-p13-chicken-lemon-garlic-soup",
    name: "Chicken Lemon Garlic Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Zesty invigorating clear soup infused with roasted garlic, freshly squeezed lemon, and chicken.",
    isVeg: false,
    price: 170
  },
  {
    id: "dish-p13-chicken-clear-soup",
    name: "Chicken Clear Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Light nourishing chicken broth with finely chopped carrots, scallions, and delicate herbs.",
    isVeg: false,
    price: 145
  },
  {
    id: "dish-p13-veg-clear-soup",
    name: "Veg Clear Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Clear vegetable broth with carrots, cabbage, baby corn, and fresh celery.",
    isVeg: true,
    price: 135
  },
  {
    id: "dish-p13-veg-hot-sour-soup",
    name: "Veg Hot & Sour Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Spicy and tangy vegetable broth with black pepper, vinegar, mushrooms, and tofu/veg.",
    isVeg: true,
    price: 160
  },
  {
    id: "dish-p13-veg-sweet-corn-soup",
    name: "Veg Sweet Corn Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Creamy comforting sweet corn kernel soup cooked with diced garden vegetables.",
    isVeg: true,
    price: 160
  },
  {
    id: "dish-p13-veg-mushroom-soup",
    name: "Veg Mushroom Soup",
    group: "Chinese",
    subCategory: "Chinese Soups",
    description: "Warm soothing soup made with fresh button mushrooms and delicate vegetable stock.",
    isVeg: true,
    price: 160
  },

  // --- Page 13 Veg Starter (11 dishes, Plain / Schezwan) ---
  {
    id: "dish-p13-veg-chilly",
    name: "Veg Chilly",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Crispy mixed vegetable cutlets tossed with capsicum, garlic, onions, and dark soy.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 210 },
      { label: "Schezwan", price: 230 }
    ]
  },
  {
    id: "dish-p13-veg-manchurian",
    name: "Veg Manchurian",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Minced vegetable dumplings fried crisp and tossed with garlic, ginger, and scallion sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 215 },
      { label: "Schezwan", price: 240 }
    ],
    tags: ["Popular"]
  },
  {
    id: "dish-p13-veg-garlic",
    name: "Veg Garlic",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Crispy vegetable balls tossed in fragrant roasted golden garlic sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 215 },
      { label: "Schezwan", price: 240 }
    ]
  },
  {
    id: "dish-p13-veg-hong-kong",
    name: "Veg Hong Kong",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Mixed vegetable fritters tossed with whole red chillies and sweet-savory Hong Kong sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 215 },
      { label: "Schezwan", price: 240 }
    ]
  },
  {
    id: "dish-p13-paneer-chilly-vs",
    name: "Paneer Chilly",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Fresh cottage cheese cubes batter-fried and tossed with sliced green chillies and soy.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 275 },
      { label: "Schezwan", price: 300 }
    ],
    tags: ["Bestseller"]
  },
  {
    id: "dish-p13-paneer-manchurian",
    name: "Paneer Manchurian",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Tender paneer cubes wok-tossed in pungent ginger-garlic Manchurian sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 275 },
      { label: "Schezwan", price: 300 }
    ]
  },
  {
    id: "dish-p13-paneer-65",
    name: "Paneer 65",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Crispy spicy paneer cubes tempered with curry leaves, mustard seeds, and curd glaze.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 275 },
      { label: "Schezwan", price: 300 }
    ]
  },
  {
    id: "dish-p13-paneer-schezwan",
    name: "Paneer Schezwan",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Golden paneer cubes tossed in extra fiery house-made red Schezwan sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 315 },
      { label: "Schezwan", price: 315 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-p13-french-fries",
    name: "French Fries",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Crispy golden potato fingers tossed with salt and served with tangy dipping sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 155 }
    ]
  },
  {
    id: "dish-p13-chana-oil-fry",
    name: "Chana Oil Fry",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Boiled white chickpeas deep-fried crisp with garlic pods and spicy chaat masala.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 180 }
    ]
  },
  {
    id: "dish-p13-aloo-crispy",
    name: "Aloo Crispy",
    group: "Chinese",
    subCategory: "Veg Starter",
    description: "Shredded potato strips fried extra crisp and tossed in sweet-chilli garlic glaze.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 215 }
    ]
  },

  // --- Page 13 Rice with Gravy (11 dishes, Plain / Schezwan) ---
  {
    id: "dish-p13-chicken-manchurian-rice",
    name: "Chicken Manchurian Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Wok-fried rice served with separate chicken Manchurian gravy bowl.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 275 },
      { label: "Schezwan", price: 300 }
    ]
  },
  {
    id: "dish-p13-chicken-triple-rice",
    name: "Chicken Triple Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Layered fried rice, crisp fried noodles, and rich chicken gravy bowl.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 335 },
      { label: "Schezwan", price: 360 }
    ],
    tags: ["Bestseller"]
  },
  {
    id: "dish-p13-chicken-tiranga-rice",
    name: "Chicken Tiranga Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Three distinct colored seasoned rices served with rich aromatic chicken gravy.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 395 },
      { label: "Schezwan", price: 395 }
    ]
  },
  {
    id: "dish-p13-noorani-special-rice",
    name: "Noorani Special Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Signature deluxe rice preparation loaded with chicken, prawns, egg, and special gravy.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 395 },
      { label: "Schezwan", price: 395 }
    ],
    tags: ["House Signature"]
  },
  {
    id: "dish-p13-malaysian-rice",
    name: "Malaysian Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Spiced Malaysian fragrant wok rice served alongside flavorful chicken gravy.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 420 },
      { label: "Schezwan", price: 420 }
    ]
  },
  {
    id: "dish-p13-chicken-chilli-rice",
    name: "Chicken Chilli Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Seasoned wok rice served with spicy green chilli chicken gravy bowl.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 370 },
      { label: "Schezwan", price: 370 }
    ]
  },
  {
    id: "dish-p13-chicken-thousand-rice",
    name: "Chicken Thousand Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Grand combination rice topped with crisp noodles and savory thousand spice chicken gravy.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 370 },
      { label: "Schezwan", price: 370 }
    ]
  },
  {
    id: "dish-p13-chicken-chaupal-rice",
    name: "Chicken Chaupal Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Rustic style spiced wok rice accompanied by rich hearty chicken gravy bowl.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 370 },
      { label: "Schezwan", price: 370 }
    ]
  },
  {
    id: "dish-p13-pot-rice",
    name: "Pot Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Clay pot style seasoned rice smothered in thick chicken and vegetable gravy.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 370 },
      { label: "Schezwan", price: 370 }
    ]
  },
  {
    id: "dish-p13-veg-manchurian-rice",
    name: "Veg Manchurian Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Vegetable fried rice served with savory vegetable Manchurian gravy bowl.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 275 },
      { label: "Schezwan", price: 300 }
    ]
  },
  {
    id: "dish-p13-veg-triple-rice",
    name: "Veg Triple Rice",
    group: "Chinese",
    subCategory: "Rice with Gravy",
    description: "Vegetable fried rice with crispy noodles and separate bowl of tangy vegetable gravy.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 300 },
      { label: "Schezwan", price: 335 }
    ]
  },

  // --- Page 14 Chinese Rice (12 dishes, Plain / Schezwan) ---
  {
    id: "dish-p14-chicken-fried-rice",
    name: "Chicken Fried Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "High flame wok-fried basmati rice with shredded chicken, egg, and spring onions.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 180 },
      { label: "Schezwan", price: 200 }
    ],
    tags: ["Bestseller"]
  },
  {
    id: "dish-p14-combination-rice",
    name: "Combination Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Harmonious blend of wok rice and soft noodles tossed together with chicken and egg.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 215 },
      { label: "Schezwan", price: 230 }
    ]
  },
  {
    id: "dish-p14-chicken-tikka-rice",
    name: "Chicken Tikka Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Smoky charcoal-charred chicken tikka cubes wok-tossed with seasoned fried rice.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 230 },
      { label: "Schezwan", price: 255 }
    ]
  },
  {
    id: "dish-p14-mix-fried-rice",
    name: "Mix Fried Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Hearty wok-fried rice tossed with chicken, mutton, prawns, and scrambled egg.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 255 }
    ]
  },
  {
    id: "dish-p14-egg-rice",
    name: "Egg Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Wok-fried rice with scrambled fluffy eggs, dark soy, and chopped spring onions.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 195 },
      { label: "Schezwan", price: 205 }
    ]
  },
  {
    id: "dish-p14-mutton-fried-rice",
    name: "Mutton Fried Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Tender pieces of braised mutton wok-tossed with aromatic rice and mild spices.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 255 }
    ]
  },
  {
    id: "dish-p14-veg-fried-rice",
    name: "Veg Fried Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Classic light wok rice tossed with diced carrots, french beans, cabbage, and soy.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 180 },
      { label: "Schezwan", price: 195 }
    ]
  },
  {
    id: "dish-p14-prawns-fried-rice",
    name: "Prawns Fried Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Fresh coastal prawns sautéed with high-heat wok-fried rice and scallions.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 255 }
    ]
  },
  {
    id: "dish-p14-hong-kong-rice",
    name: "Hong Kong Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Wok rice tossed with chicken, roasted cashews, dried red chillies, and soy.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 230 },
      { label: "Schezwan", price: 230 }
    ]
  },
  {
    id: "dish-p14-korean-rice",
    name: "Korean Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Savory spicy wok rice flavored with sesame oil, chilli paste, chicken, and egg.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 230 },
      { label: "Schezwan", price: 230 }
    ]
  },
  {
    id: "dish-p14-chicken-singaporean-rice",
    name: "Chicken Singaporean Rice",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Yellow curry-tinted aromatic wok rice tossed with chicken, peppers, and mild spice.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 230 },
      { label: "Schezwan", price: 230 }
    ]
  },
  {
    id: "dish-p14-chinese-biryani",
    name: "Chinese Biryani",
    group: "Chinese",
    subCategory: "Chinese Rice",
    description: "Unique Indo-Chinese spiced rice layered with fiery chicken, fried onions, and coriander.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 335 },
      { label: "Schezwan", price: 335 }
    ]
  },

  // --- Page 14 Noodles (10 dishes, Plain / Schezwan) ---
  {
    id: "dish-p14-chicken-noodles",
    name: "Chicken Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Wok-tossed noodles with shredded chicken, crunchy carrots, cabbage, and soy sauce.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 205 },
      { label: "Schezwan", price: 230 }
    ],
    tags: ["Bestseller"]
  },
  {
    id: "dish-p14-mix-noodles",
    name: "Mix Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Noodles wok-tossed with chicken, mutton, prawns, egg, and fresh julienned vegetables.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 245 },
      { label: "Schezwan", price: 275 }
    ]
  },
  {
    id: "dish-p14-egg-noodles",
    name: "Egg Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Wok-tossed noodles with scrambled egg, cabbage, carrots, and spring onions.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 195 },
      { label: "Schezwan", price: 215 }
    ]
  },
  {
    id: "dish-p14-veg-noodles",
    name: "Veg Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Thin wok noodles tossed with crisp cabbage, capsicum, carrots, and light soy.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 195 },
      { label: "Schezwan", price: 215 }
    ]
  },
  {
    id: "dish-p14-prawns-noodles",
    name: "Prawns Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Succulent coastal prawns tossed with high-flame wok noodles and scallions.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 265 }
    ]
  },
  {
    id: "dish-p14-chicken-tikka-noodles",
    name: "Chicken Tikka Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Clay oven roasted chicken tikka cubes tossed with spiced Chinese wok noodles.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 265 }
    ]
  },
  {
    id: "dish-p14-singaporean-noodles",
    name: "Singaporean Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Fine vermicelli style noodles tossed with curry powder, chicken, and mixed bell peppers.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 240 }
    ]
  },
  {
    id: "dish-p14-korean-noodles",
    name: "Korean Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Spicy Korean-style wok noodles flavored with roasted sesame, garlic, and chicken.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 240 }
    ]
  },
  {
    id: "dish-p14-hong-kong-noodles",
    name: "Hong Kong Noodles",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Savory wok noodles with cashews, dried chillies, shredded chicken, and scallions.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 240 }
    ]
  },
  {
    id: "dish-p14-chinese-bhel",
    name: "Chinese Bhel",
    group: "Chinese",
    subCategory: "Noodles",
    description: "Crispy fried noodles tossed with shredded cabbage, onions, capsicum, and sweet-spicy Schezwan sauce.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 240 },
      { label: "Schezwan", price: 240 }
    ],
    tags: ["Crunchy Street Classic"]
  },

  // --- Page 14 Chopsuey (3 dishes) ---
  {
    id: "dish-p14-american-chopsuey",
    name: "American Chopsuey",
    group: "Chinese",
    subCategory: "Chopsuey",
    description: "Crispy fried noodle nest topped with sweet-and-sour chicken and vegetable gravy and fried egg.",
    isVeg: false,
    price: 315
  },
  {
    id: "dish-p14-singaporean-chopsuey",
    name: "Singaporean Chopsuey",
    group: "Chinese",
    subCategory: "Chopsuey",
    description: "Crisp noodles crowned with mild curry-scented savory chicken and vegetable gravy.",
    isVeg: false,
    price: 315
  },
  {
    id: "dish-p14-hong-kong-chopsuey",
    name: "Hong Kong Chopsuey",
    group: "Chinese",
    subCategory: "Chopsuey",
    description: "Fried noodle nest served with dark soy, cashew, and dry red chilli chicken gravy.",
    isVeg: false,
    price: 335
  },

  // ═════════════════════════════════════════════════════════════════
  // 10. ROTI & SIDES (PDF Page 5 Roti | Paratha - 13 items & Page 10 Salad | Raitha - 10 items)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-tandoori-roti-plain",
    name: "Tandoori Roti (Plain)",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Whole wheat flatbread baked on the clay wall of the tandoor.",
    isVeg: true,
    price: 20
  },
  {
    id: "dish-tandoori-butter-roti",
    name: "Tandoori Butter Roti",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Freshly baked tandoori whole wheat roti brushed with pure butter.",
    isVeg: true,
    price: 25
  },
  {
    id: "dish-rumali-roti",
    name: "Rumali Roti",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Handkerchief-thin bread tossed by hand and baked over inverted tawa.",
    isVeg: true,
    price: 25
  },
  {
    id: "dish-butter-naan",
    name: "Tandoori Butter Naan",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Classic soft leavened flatbread freshly baked in tandoor and butter-glazed.",
    isVeg: true,
    price: 40
  },
  {
    id: "dish-plain-naan",
    name: "Plain Naan",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Crisp and soft leavened clay-oven tandoori flatbread.",
    isVeg: true,
    price: 40
  },
  {
    id: "dish-garlic-naan",
    name: "Garlic Naan",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Tandoor naan generously topped with roasted minced garlic and butter.",
    isVeg: true,
    price: 70,
    tags: ["Popular"]
  },
  {
    id: "dish-cheese-garlic-naan",
    name: "Cheese Garlic Naan",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Leavened flatbread stuffed with molten cheese and coated with roasted garlic.",
    isVeg: true,
    price: 110,
    tags: ["Kids Favorite"]
  },
  {
    id: "dish-laccha-paratha-plain",
    name: "Laccha Paratha (Plain)",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Multi-layered flaky whole wheat paratha baked crisp in clay oven.",
    isVeg: true,
    price: 45
  },
  {
    id: "dish-butter-laccha-paratha",
    name: "Butter Laccha Paratha",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Flaky layered paratha brushed generously with golden butter.",
    isVeg: true,
    price: 55
  },
  {
    id: "dish-pudina-paratha",
    name: "Pudina Paratha",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Crisp layered paratha infused with fragrant dried garden mint leaves.",
    isVeg: true,
    price: 60
  },
  {
    id: "dish-mughlai-paratha",
    name: "Mughlai Paratha",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Traditional rich flaky paratha prepared with mild spices.",
    isVeg: true,
    price: 70
  },
  {
    id: "dish-kulcha",
    name: "Kulcha (Plain / Butter)",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Soft leavened tandoori bread sprinkled with black sesame seeds.",
    isVeg: true,
    price: 40
  },
  {
    id: "dish-missi-roti",
    name: "Missi Roti",
    group: "Roti & Sides",
    subCategory: "Roti | Paratha",
    description: "Gram flour and whole wheat flatbread flavored with ajwain, onions, and kasuri methi.",
    isVeg: true,
    price: 40
  },

  // --- PDF Page 10 Salad | Raitha (10 dishes, single price) ---
  {
    id: "dish-p10-green-salad",
    name: "Green Salad",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Freshly sliced cucumbers, tomatoes, carrots, onions, and lemon wedges.",
    isVeg: true,
    price: 60
  },
  {
    id: "dish-p10-russian-salad-veg",
    name: "Russian Salad (Veg)",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Diced garden vegetables, sweet peas, and pineapple tossed in thick creamy mayonnaise dressing.",
    isVeg: true,
    price: 110
  },
  {
    id: "dish-p10-russian-salad-chicken",
    name: "Russian Salad (Chicken)",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Tender shredded chicken, diced vegetables, and potatoes in rich seasoned mayonnaise.",
    isVeg: false,
    price: 150,
    tags: ["Non-Veg Salad"]
  },
  {
    id: "dish-p10-onion-salad",
    name: "Onion Salad",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Crisp sliced onion rings dusted with chaat masala and lemon juice.",
    isVeg: true,
    price: 40
  },
  {
    id: "dish-p10-kachumber-salad",
    name: "Kachumber Salad",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Finely diced cucumber, onion, and ripe tomato salad with lemon dressing and mint.",
    isVeg: true,
    price: 50
  },
  {
    id: "dish-p10-boondi-raitha",
    name: "Boondi Raitha",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Crisp chickpea pearls soaked in chilled spiced churned curd with roasted cumin.",
    isVeg: true,
    price: 70
  },
  {
    id: "dish-p10-veg-raitha",
    name: "Veg Raitha (Mix)",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Chilled fresh yogurt blended with crunchy cucumber, onion, tomato, and black salt.",
    isVeg: true,
    price: 80
  },
  {
    id: "dish-p10-pineapple-raitha",
    name: "Pineapple Raitha",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Sweet and tangy juicy pineapple chunks folded in sweetened thick curd.",
    isVeg: true,
    price: 100
  },
  {
    id: "dish-p10-pudina-raitha",
    name: "Pudina Raitha",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Fresh garden mint and coriander leaves ground with rock salt and creamy yogurt.",
    isVeg: true,
    price: 60
  },
  {
    id: "dish-p10-plain-curd",
    name: "Plain Curd (Dahi)",
    group: "Roti & Sides",
    subCategory: "Salad | Raitha",
    description: "Fresh homemade cooling thick set curd bowl.",
    isVeg: true,
    price: 40
  },

  // ═════════════════════════════════════════════════════════════════
  // 11. PARTY ORDERS (PDF Page 10 Mehmaan Khana & Biryani by Weight + Degh)
  // ═════════════════════════════════════════════════════════════════
  // --- Mehmaan Khana Handis (13 dishes, 1/2 Kg / 1 Kg) ---
  {
    id: "dish-p10-mk-chicken-handi",
    name: "Mehmaan Khana Chicken Handi",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Large-portion clay handi chicken with rich onion-tomato reduction, ideal for family feast.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 580 },
      { label: "1 Kg", price: 1100 }
    ],
    tags: ["Party Handi"]
  },
  {
    id: "dish-p10-mk-chicken-lazeez-handi",
    name: "Chicken Lazeez Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Grand handi of boneless chicken simmered in mild cashew, cream, and brown onion gravy.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 480 },
      { label: "1 Kg", price: 900 }
    ]
  },
  {
    id: "dish-p10-mk-chicken-afghani-handi",
    name: "Chicken Afghani Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Charcoal-smoked chicken handi simmered in thick cream, curd, and mild spices.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 500 },
      { label: "1 Kg", price: 950 }
    ]
  },
  {
    id: "dish-p10-mk-chicken-angara-handi",
    name: "Chicken Angara Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Fiery red smoked handi chicken infused with live coal aromatics.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 480 },
      { label: "1 Kg", price: 900 }
    ],
    tags: ["Spicy"]
  },
  {
    id: "dish-p10-mk-chicken-tikka-handi",
    name: "Chicken Tikka Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Charcoal-grilled chicken tikka morsels cooked in rich spiced handi gravy.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 520 },
      { label: "1 Kg", price: 980 }
    ]
  },
  {
    id: "dish-p10-mk-chicken-noorani-special-handi",
    name: "Chicken Noorani Special Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Signature house celebration handi loaded with chicken, dry fruits, saffron, and rich gravy.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 560 },
      { label: "1 Kg", price: 1050 }
    ],
    tags: ["House Pride"]
  },
  {
    id: "dish-p10-mk-mutton-handi",
    name: "Mutton Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Slow-simmered tender mutton in large earthenware handi with traditional Mughlai spices.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 650 },
      { label: "1 Kg", price: 1250 }
    ],
    tags: ["Mutton Feast"]
  },
  {
    id: "dish-p10-mk-mutton-korma-handi",
    name: "Mutton Korma Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Grand handi of royal mutton korma simmered in caramelized onion and yogurt gravy.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 680 },
      { label: "1 Kg", price: 1300 }
    ]
  },
  {
    id: "dish-p10-mk-mutton-rogan-josh-handi",
    name: "Mutton Rogan Josh Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Kashmiri style mutton braised in deep-red spiced gravy with maval flower and ginger.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 680 },
      { label: "1 Kg", price: 1300 }
    ]
  },
  {
    id: "dish-p10-mk-mutton-bhuna-handi",
    name: "Mutton Bhuna Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Goat meat pan-roasted until dark, tender, and coated with rich onion masala.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 680 },
      { label: "1 Kg", price: 1300 }
    ]
  },
  {
    id: "dish-p10-mk-mutton-nalli-nihari-handi",
    name: "Mutton Nalli Nihari Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Overnight braised shanks and bone marrow handi in aromatic potli broth.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 750 },
      { label: "1 Kg", price: 1400 }
    ],
    tags: ["Special Feast"]
  },
  {
    id: "dish-p10-mk-mutton-noorani-special-handi",
    name: "Mutton Noorani Special Handi (Mehmaan Khana)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Grand ceremonial handi of tender mutton in royal saffron, almond, and cashew gravy.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 780 },
      { label: "1 Kg", price: 1500 }
    ],
    tags: ["Grand Special"]
  },
  {
    id: "dish-p10-mk-mix-meat-handi",
    name: "Mix Meat Handi (Chicken & Mutton)",
    group: "Party Orders",
    subCategory: "Mehmaan Khana Handi",
    description: "Chef's combination feast of succulent chicken and tender mutton simmered together in rich handi gravy.",
    isVeg: false,
    prices: [
      { label: "1/2 Kg", price: 600 },
      { label: "1 Kg", price: 1150 }
    ]
  },

  // --- Biryanis by Weight (5 dishes, 1 Kg / 1 Pailee) ---
  {
    id: "dish-p10-bw-chicken-dum-biryani",
    name: "Chicken Biryani (by weight)",
    group: "Party Orders",
    subCategory: "Biryani by Weight",
    description: "Authentic sealed-handi chicken dum biryani prepared by weight for family gatherings and celebrations.",
    isVeg: false,
    prices: [
      { label: "1 Kg", price: 1150 },
      { label: "1 Pailee", price: 3450 }
    ],
    tags: ["Party Order", "Advance Booking"]
  },
  {
    id: "dish-p10-bw-chicken-tikka-biryani",
    name: "Chicken Tikka Biryani (by Weight)",
    group: "Party Orders",
    subCategory: "Biryani by Weight",
    description: "Charcoal-tandoori chicken tikka layered with saffron basmati rice, browned onions, and mint.",
    isVeg: false,
    prices: [
      { label: "1 Kg", price: 1400 },
      { label: "1 Pailee", price: 3800 }
    ]
  },
  {
    id: "dish-p10-bw-mutton-dum-biryani",
    name: "Mutton Dum Biryani (by Weight)",
    group: "Party Orders",
    subCategory: "Biryani by Weight",
    description: "Traditional Mughlai slow-dum goat meat biryani with pure desi ghee and long-grain basmati.",
    isVeg: false,
    prices: [
      { label: "1 Kg", price: 1800 },
      { label: "1 Pailee", price: 4800 }
    ],
    tags: ["Mughlai Pride"]
  },
  {
    id: "dish-p10-bw-mutton-tikka-biryani",
    name: "Mutton Tikka Biryani (by Weight)",
    group: "Party Orders",
    subCategory: "Biryani by Weight",
    description: "Tender boneless mutton boti tikka layered with spiced masala rice on slow dum.",
    isVeg: false,
    prices: [
      { label: "1 Kg", price: 2000 },
      { label: "1 Pailee", price: 5400 }
    ]
  },
  {
    id: "dish-p10-bw-veg-dum-biryani",
    name: "Veg Dum Biryani (by Weight)",
    group: "Party Orders",
    subCategory: "Biryani by Weight",
    description: "Pure vegetarian dum biryani with garden vegetables, paneer cubes, and saffron basmati rice.",
    isVeg: true,
    prices: [
      { label: "1 Kg", price: 900 },
      { label: "1 Pailee", price: 2400 }
    ]
  },

  // ═════════════════════════════════════════════════════════════════
  // 12. BREAKFAST (PDF Page 3 Breakfast - 24 items)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-nihari-special",
    name: "Nihari Special",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Slow-simmered rich meat shanks in aromatic herbal broth served hot with fresh ginger and chillies.",
    isVeg: false,
    price: 180,
    tags: ["Morning Special"]
  },
  {
    id: "dish-paya-soup",
    name: "Paya Soup / Shurba",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Hearty, nourishing bone broth cooked gently overnight with whole spices.",
    isVeg: false,
    price: 160
  },
  {
    id: "dish-mutton-keema-pav",
    name: "Mutton Keema Pav / Fry",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Spiced minced goat meat cooked with green peas, onions, and mint served with fresh pav.",
    isVeg: false,
    prices: [
      { label: "Half", price: 120 },
      { label: "Full", price: 220 }
    ],
    tags: ["Mumbra Classic"]
  },
  {
    id: "dish-chicken-keema-pav",
    name: "Chicken Keema Pav",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Savory minced chicken simmered with tomatoes, chillies, and ginger served with warm pav.",
    isVeg: false,
    prices: [
      { label: "Half", price: 100 },
      { label: "Full", price: 180 }
    ]
  },
  {
    id: "dish-bheja-masala-fry",
    name: "Bheja Masala Fry",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Tender goat brain cooked with browned onions, turmeric, and fresh green chillies.",
    isVeg: false,
    price: 210
  },
  {
    id: "dish-gurda-masala-fry",
    name: "Gurda Masala Fry",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Mutton kidneys sautéed on high flame with aromatic breakfast spices.",
    isVeg: false,
    price: 190
  },
  {
    id: "dish-kaleji-fry",
    name: "Kaleji Fry",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Mutton liver quick-fried with cracked black pepper and caramelised onions.",
    isVeg: false,
    price: 190
  },
  {
    id: "dish-dal-gosht-breakfast",
    name: "Dal Gosht (with Rice / Roti)",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Comforting mutton pieces slow-cooked with chana dal, bottle gourd (doodhi), and spices.",
    isVeg: false,
    price: 220
  },
  {
    id: "dish-egg-bhurji",
    name: "Egg Bhurji",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Scrambled eggs tossed with chopped onions, tomatoes, fresh green chillies, and coriander.",
    isVeg: false,
    prices: [
      { label: "2 Eggs", price: 70 },
      { label: "3 Eggs", price: 100 }
    ]
  },
  {
    id: "dish-egg-omelette-double",
    name: "Egg Omelette (Double)",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Fluffy two-egg omelette pan-fried with onions and fresh chillies.",
    isVeg: false,
    price: 60
  },
  {
    id: "dish-cheese-omelette",
    name: "Cheese Omelette",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Two-egg pan omelette filled with melted cheese and cracked black pepper.",
    isVeg: false,
    price: 90
  },
  {
    id: "dish-masala-omelette",
    name: "Masala Omelette",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Spiced omelette folded with tomatoes, onions, coriander, and chaat masala.",
    isVeg: false,
    price: 70
  },
  {
    id: "dish-boiled-eggs",
    name: "Boiled Eggs (2 Pcs)",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Freshly boiled eggs served with salt and freshly cracked black pepper.",
    isVeg: false,
    price: 30
  },
  {
    id: "dish-egg-half-fry",
    name: "Egg Half Fry / Bullseye",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Sunny-side up fried eggs with runny golden yolks.",
    isVeg: false,
    price: 50
  },
  {
    id: "dish-chana-masala-breakfast",
    name: "Chana Masala (Breakfast)",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "White chickpeas cooked in rich tangy Punjabi style onion-tomato gravy.",
    isVeg: true,
    price: 80
  },
  {
    id: "dish-dal-tadka-breakfast",
    name: "Dal Tadka Breakfast",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Morning yellow lentils tempered with cumin, garlic, and green chillies.",
    isVeg: true,
    price: 90
  },
  {
    id: "dish-aloo-paratha",
    name: "Aloo Paratha with Curd & Pickle",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Whole wheat griddle flatbread stuffed with spiced mashed potatoes, served with curd.",
    isVeg: true,
    price: 70
  },
  {
    id: "dish-paneer-paratha",
    name: "Paneer Paratha with Curd",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Flatbread stuffed with grated cottage cheese, herbs, and spices.",
    isVeg: true,
    price: 100
  },
  {
    id: "dish-keema-paratha",
    name: "Keema Paratha",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Crispy tawa paratha stuffed with seasoned mutton keema.",
    isVeg: false,
    price: 140
  },
  {
    id: "dish-pav-pair",
    name: "Pav (2 Pcs)",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Fresh bakery soft bread rolls.",
    isVeg: true,
    price: 15
  },
  {
    id: "dish-butter-pav-pair",
    name: "Butter Pav (2 Pcs)",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Toasted soft bakery pav brushed with salted butter.",
    isVeg: true,
    price: 25
  },
  {
    id: "dish-bun-maska",
    name: "Bun Maska",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Soft sweet bun sliced and layered with thick chilled salted butter.",
    isVeg: true,
    price: 35
  },
  {
    id: "dish-irani-kullad-chai",
    name: "Irani / Kullad Chai",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Slow-brewed rich milk tea served steaming in traditional clay cup.",
    isVeg: true,
    price: 20
  },
  {
    id: "dish-special-masala-tea",
    name: "Special Masala Tea",
    group: "Breakfast",
    subCategory: "Breakfast",
    description: "Strong tea infused with freshly crushed ginger, cardamom, and cinnamon.",
    isVeg: true,
    price: 25
  },

  // ═════════════════════════════════════════════════════════════════
  // 13. FAST FOOD (Rolls & Wraps)
  // ═════════════════════════════════════════════════════════════════
  {
    id: "dish-chicken-roll",
    name: "Chicken Roll",
    group: "Fast Food",
    subCategory: "Rolls",
    description: "Spiced chicken pieces wrapped in flaky paratha with sliced onions, mint chutney, and chaat masala.",
    isVeg: false,
    price: 120
  },
  {
    id: "dish-chicken-tikka-roll",
    name: "Chicken Tikka Roll",
    group: "Fast Food",
    subCategory: "Rolls",
    description: "Charcoal roasted chicken tikka rolled in paratha with tangy house sauces.",
    isVeg: false,
    price: 150,
    tags: ["Quick Bite"]
  },
  {
    id: "dish-chicken-seekh-roll",
    name: "Chicken Seekh Roll",
    group: "Fast Food",
    subCategory: "Rolls",
    description: "Juicy chicken seekh kabab rolled inside paratha with onions and green dip.",
    isVeg: false,
    price: 150
  },
  {
    id: "dish-veg-roll",
    name: "Veg Roll",
    group: "Fast Food",
    subCategory: "Rolls",
    description: "Seasoned vegetable cutlet wrapped in flaky paratha with chutney and salads.",
    isVeg: true,
    price: 90
  },
  {
    id: "dish-paneer-tikka-roll",
    name: "Paneer Tikka Roll",
    group: "Fast Food",
    subCategory: "Rolls",
    description: "Tandoori paneer cubes wrapped with capsicum, onions, and mint yoghurt sauce.",
    isVeg: true,
    price: 130
  },

  
  // --- Page 14 Burger (2 dishes) ---
  {
    id: "dish-p14-chicken-burger",
    name: "Chicken Burger",
    group: "Fast Food",
    subCategory: "Burger",
    description: "Toasted soft sesame bun filled with spiced minced chicken patty, lettuce, mayonnaise, and tomato.",
    isVeg: false,
    price: 80
  },
  {
    id: "dish-p14-chicken-cheese-burger",
    name: "Chicken Cheese Burger",
    group: "Fast Food",
    subCategory: "Burger",
    description: "Juicy chicken burger patty crowned with melted processed cheese slice and creamy house sauce.",
    isVeg: false,
    price: 95,
    tags: ["Bestseller"]
  },

  // --- Page 15 Sandwich (8 dishes, Plain / Grilled) ---
  {
    id: "dish-p15-veg-sandwich",
    name: "Veg Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Sliced bread with cucumber, tomato, beetroot, boiled potato, and zesty mint chutney.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 70 },
      { label: "Grilled", price: 90 }
    ]
  },
  {
    id: "dish-p15-veg-cheese-sandwich",
    name: "Veg Cheese Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Fresh vegetable sandwich loaded with grated processed cheddar cheese.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 145 },
      { label: "Grilled", price: 170 }
    ]
  },
  {
    id: "dish-p15-plain-cheese-sandwich",
    name: "Plain Cheese Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Butter-brushed bread layered generously with grated processed cheese.",
    isVeg: true,
    prices: [
      { label: "Plain", price: 135 },
      { label: "Grilled", price: 155 }
    ]
  },
  {
    id: "dish-p15-omlet-sandwich",
    name: "Omelette Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Fresh fluffy double egg masala omelette with onions and chillies tucked between bread slices.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 145 },
      { label: "Grilled", price: 155 }
    ]
  },
  {
    id: "dish-p15-chicken-sandwich",
    name: "Chicken Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Seasoned shredded chicken tossed in mayonnaise and black pepper spread between bread.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 155 },
      { label: "Grilled", price: 180 }
    ]
  },
  {
    id: "dish-p15-chicken-cheese-sandwich",
    name: "Chicken Cheese Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Spiced chicken filling layered with melted cheese and butter.",
    isVeg: false,
    prices: [
      { label: "Plain", price: 170 },
      { label: "Grilled", price: 195 }
    ]
  },
  {
    id: "dish-p15-veg-club-sandwich",
    name: "Veg Club Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Triple-decker grilled club sandwich layered with cheese, fresh salad, potato mash, and chutneys.",
    isVeg: true,
    prices: [
      { label: "Grilled", price: 215 }
    ]
  },
  {
    id: "dish-p15-non-veg-club-sandwich",
    name: "Non-Veg Club Sandwich",
    group: "Fast Food",
    subCategory: "Sandwich",
    description: "Triple-decker grilled club sandwich with chicken filling, fried egg, cheese, and tomatoes.",
    isVeg: false,
    prices: [
      { label: "Grilled", price: 240 }
    ],
    tags: ["Hearty Portion"]
  },

  // --- Page 15 Pizza (13 dishes, includes Extra Cheese) ---
  {
    id: "dish-p15-chicken-cheese-pizza",
    name: "Chicken Cheese Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Crispy crust topped with spiced tomato sauce, seasoned chicken, and melted mozzarella cheese.",
    isVeg: false,
    price: 170
  },
  {
    id: "dish-p15-chicken-tikka-pizza",
    name: "Chicken Tikka Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Smoky tandoori chicken tikka chunks with bell peppers, onions, and rich cheese blend.",
    isVeg: false,
    price: 240,
    tags: ["Popular"]
  },
  {
    id: "dish-p15-mutton-pizza",
    name: "Mutton Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Spiced minced mutton keema spread over pizza crust with herbs, onions, and cheese.",
    isVeg: false,
    price: 255
  },
  {
    id: "dish-p15-noorani-special-pizza",
    name: "Noorani Special Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Loaded house special pizza with chicken tikka, mutton keema, sausages, bell peppers, and extra cheese.",
    isVeg: false,
    price: 255,
    tags: ["House Special"]
  },
  {
    id: "dish-p15-plain-cheese-pizza",
    name: "Plain Cheese Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Classic golden baked pizza with rich herb tomato sauce and double layer of melted cheese.",
    isVeg: true,
    price: 195
  },
  {
    id: "dish-p15-veg-pizza",
    name: "Veg Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Fresh capsicum, sliced onions, tomatoes, and golden sweet corn baked with mozzarella cheese.",
    isVeg: true,
    price: 195
  },
  {
    id: "dish-p15-mushroom-pizza",
    name: "Mushroom Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Sliced button mushrooms sautéed in garlic herbs and baked over gooey cheese crust.",
    isVeg: true,
    price: 215
  },
  {
    id: "dish-p15-paneer-tikka-pizza",
    name: "Paneer Tikka Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Tandoori paneer tikka cubes with onions, capsicum, and spicy makhani herb sauce.",
    isVeg: true,
    price: 240
  },
  {
    id: "dish-p15-chicken-olive-pizza",
    name: "Chicken Olive Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Seasoned chicken cubes paired with sliced Spanish black olives and melted cheese.",
    isVeg: false,
    price: 230
  },
  {
    id: "dish-p15-chicken-jalapeno-pizza",
    name: "Chicken Jalapeno Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Spicy chicken pieces with zesty pickled jalapeno slices and hot mozzarella cheese.",
    isVeg: false,
    price: 230,
    tags: ["Spicy"]
  },
  {
    id: "dish-p15-veg-olive-pizza",
    name: "Veg Olive Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Garden vegetables and black olive rings baked with Italian herbs and mozzarella.",
    isVeg: true,
    price: 205
  },
  {
    id: "dish-p15-veg-jalapeno-pizza",
    name: "Veg Jalapeno Pizza",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Sliced fiery jalapenos, capsicum, and onions baked with rich cheese.",
    isVeg: true,
    price: 205
  },
  {
    id: "dish-p15-extra-cheese",
    name: "Extra Cheese (Pizza Topping)",
    group: "Fast Food",
    subCategory: "Pizza",
    description: "Generous extra portion of 100% dairy mozzarella and cheddar cheese topping.",
    isVeg: true,
    price: 75
  },

  // ═════════════════════════════════════════════════════════════════
  // 14. DRINKS & DESSERTS (PDF Pages 14, 15 & 16)
  // ═════════════════════════════════════════════════════════════════
  // --- Page 14 Desserts (3 dishes) ---
  {
    id: "dish-p14-arabian-pudding",
    name: "Arabian Pudding",
    group: "Drinks & Desserts",
    subCategory: "Desserts",
    description: "Luxurious chilled milk and cream pudding layered with dry fruits and saffron syrup.",
    isVeg: true,
    price: 100,
    tags: ["Chef Special"]
  },
  {
    id: "dish-p14-rabdi",
    name: "Rabdi",
    group: "Drinks & Desserts",
    subCategory: "Desserts",
    description: "Slow-simmered whole milk cooked until rich, thick, layered with clotted malai and pistachios.",
    isVeg: true,
    price: 100
  },
  {
    id: "dish-p14-caramel-custard",
    name: "Caramel Custard",
    group: "Drinks & Desserts",
    subCategory: "Desserts",
    description: "Silky baked vanilla egg custard with dark amber caramel glaze.",
    isVeg: false,
    price: 60,
    tags: ["Customer Favorite"]
  },

  // --- Page 15 Milk Shakes (9 dishes) ---
  {
    id: "dish-p15-mango-milk-shake",
    name: "Mango Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Thick chilled shake made with real Alphonso mango pulp and full-cream milk.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-apple-milk-shake",
    name: "Apple Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Freshly blended Kashmiri apples with chilled sweetened milk and a hint of cardamom.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-banana-milk-shake",
    name: "Banana Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Thick creamy shake blended with fresh bananas, honey, and cold milk.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-kesar-milk-shake",
    name: "Kesar Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Rich saffron-infused chilled milk shake with pistachios and almond flakes.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-vanilla-milk-shake",
    name: "Vanilla Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Smooth classic shake blended with pure Madagascar vanilla extract and vanilla ice cream.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-strawberry-milk-shake",
    name: "Strawberry Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Refreshing pink shake prepared with real Mahabaleshwar strawberry crush and ice cream.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-chocolate-milk-shake",
    name: "Chocolate Milk Shake",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Decadent creamy shake made with rich Dutch cocoa syrup and chocolate ice cream.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-cold-coffee",
    name: "Cold Coffee",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Frothy chilled brewed coffee blended with whole milk and chocolate drizzle.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p15-cold-coffee-with-ice-cream",
    name: "Cold Coffee with Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Milk Shakes",
    description: "Thick frothy cold coffee crowned with a generous scoop of rich vanilla ice cream.",
    isVeg: true,
    price: 180,
    tags: ["Bestseller"]
  },

  // --- Page 16 Healthy Drinks (14 dishes) ---
  {
    id: "dish-p16-pineapple-juice",
    name: "Pineapple Juice",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Freshly squeezed sweet and tangy pineapple juice served chilled without preservatives.",
    isVeg: true,
    price: 135
  },
  {
    id: "dish-p16-apple-juice",
    name: "Apple Juice",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Freshly pressed crisp apple juice rich in natural vitamins.",
    isVeg: true,
    price: 145
  },
  {
    id: "dish-p16-cocktail-juice",
    name: "Cocktail Juice",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Refreshing medley of freshly pressed seasonal fruits with a dash of chaat masala.",
    isVeg: true,
    price: 155
  },
  {
    id: "dish-p16-carrot-juice",
    name: "Carrot Juice",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Fresh sweet red carrot juice pressed to order.",
    isVeg: true,
    price: 135
  },
  {
    id: "dish-p16-anar-juice",
    name: "Anar Juice (Pomegranate)",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Pure antioxidant-rich juice freshly pressed from ruby red pomegranate arils.",
    isVeg: true,
    price: 155,
    tags: ["100% Pure Juice"]
  },
  {
    id: "dish-p16-mango-juice",
    name: "Mango Juice",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Thick chilled natural mango juice made from sweet Alphonso pulp.",
    isVeg: true,
    price: 135
  },
  {
    id: "dish-p16-fresh-lime-juice",
    name: "Fresh Lime Juice",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Freshly squeezed lemon with chilled water, rock salt, and sugar.",
    isVeg: true,
    price: 100
  },
  {
    id: "dish-p16-fresh-lime-soda",
    name: "Fresh Lime Soda",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Bubbly chilled soda with freshly squeezed lemon juice (Sweet / Salted / Mixed).",
    isVeg: true,
    price: 120
  },
  {
    id: "dish-p16-shikanjabin-sharbat",
    name: "Shikanjabin Sharbat",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Traditional cooling Mughal beverage made with lemon, mint, black salt, and roasted cumin.",
    isVeg: true,
    price: 60,
    tags: ["Traditional"]
  },
  {
    id: "dish-p16-plain-lassi",
    name: "Plain Sweet Lassi",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Traditional Punjabi style thick beaten sweet yoghurt lassi topped with malai.",
    isVeg: true,
    price: 90
  },
  {
    id: "dish-p16-mango-lassi",
    name: "Mango Lassi",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Thick curd whipped with rich sweet mango pulp and green cardamom.",
    isVeg: true,
    price: 90
  },
  {
    id: "dish-p16-strawberry-lassi",
    name: "Strawberry Lassi",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Cool sweet curd blended with natural strawberry crush.",
    isVeg: true,
    price: 110
  },
  {
    id: "dish-p16-kesar-lassi",
    name: "Kesar Lassi",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Royal curd drink infused with saffron strands, crushed pistachios, and rose water.",
    isVeg: true,
    price: 110
  },
  {
    id: "dish-p16-masala-chhach",
    name: "Masala Chhach",
    group: "Drinks & Desserts",
    subCategory: "Healthy Drinks",
    description: "Refreshing spiced buttermilk churned with roasted cumin seeds, mint, and rock salt.",
    isVeg: true,
    price: 60
  },

  // --- Page 16 Falooda (9 dishes) ---
  {
    id: "dish-p16-noorani-special-falooda",
    name: "Noorani Sp. Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Our signature layered royal dessert with rose milk, falooda sev, sabja seeds, dry fruits, and double ice cream.",
    isVeg: true,
    price: 150,
    tags: ["House Signature"],
    isSignature: true,
    isPopular: true
  },
  {
    id: "dish-p16-dry-fruit-falooda",
    name: "Dry Fruit Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Loaded with cashews, almonds, pistachios, saffron milk, basil seeds, and kulfi ice cream.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p16-strawberry-falooda",
    name: "Strawberry Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Chilled strawberry milk with translucent falooda vermicelli, sabja, and strawberry scoop.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p16-kesar-falooda",
    name: "Kesar Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Rich saffron milk dessert layered with vermicelli, sabja seeds, and creamy kesar pista ice cream.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p16-kulfi-falooda",
    name: "Kulfi Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Traditional dense condensed-milk kulfi served on a bed of falooda sev, rose syrup, and rabdi.",
    isVeg: true,
    price: 180,
    tags: ["Customer Favorite"]
  },
  {
    id: "dish-p16-mastani-falooda",
    name: "Mastani Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Pune-style rich dessert drink combining thick fruit shake, falooda sev, tutty fruity, and ice cream.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p16-mango-falooda",
    name: "Mango Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Seasonal sweet mango shake layered with sabja, sev, and rich mango ice cream scoop.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p16-rangila-falooda",
    name: "Rangila Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Vibrant multi-colored dessert layered with three flavored syrups, jelly, sev, and assorted ice creams.",
    isVeg: true,
    price: 180
  },
  {
    id: "dish-p16-delux-gadbad-falooda",
    name: "Delux Gadbad Falooda",
    group: "Drinks & Desserts",
    subCategory: "Falooda",
    description: "Extra grand sundae falooda layered with mixed chopped fruits, nuts, jelly cubes, and three scoops of ice cream.",
    isVeg: true,
    price: 205,
    tags: ["Grand Sundae"]
  },

  // --- Page 16 Ice Creams (12 flavours, no prices printed) ---
  {
    id: "dish-p16-ice-cream-vanilla",
    name: "Vanilla Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Classic smooth vanilla ice cream scoop; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-strawberry",
    name: "Strawberry Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Refreshing pink strawberry ice cream scoop; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-chocolate",
    name: "Chocolate Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Rich dark chocolate ice cream scoop; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-butterscotch",
    name: "Butterscotch Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Crunchy praline butterscotch ice cream; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-kesar-pista",
    name: "Kesar Pista Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Royal saffron and pistachio ice cream scoop; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-mango",
    name: "Mango Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Alphonso mango fruit ice cream scoop; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-pista",
    name: "Pista Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Mild aromatic pistachio nut ice cream; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-cassatta",
    name: "Cassatta Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Traditional layered Neapolitan style sponge cake and multi-flavor ice cream slice.",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-black-currant",
    name: "Black Currant Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Tangy rich black currant berry ice cream; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-roasted-almond",
    name: "Roasted Almond Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Creamy ice cream loaded with toasted almond slivers; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-tutti-frutti",
    name: "Tutti Frutti Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Candied fruit bit studded vanilla ice cream; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-ice-cream-rajbhog",
    name: "Rajbhog Ice Cream",
    group: "Drinks & Desserts",
    subCategory: "Ice Creams",
    description: "Regal saffron, almond, cashew, and cardamom ice cream; flavour as printed on menu (price as per flavour/MRP).",
    isVeg: true,
  },

  // --- Page 16 Kulfi & Sticks (5 flavours, no prices printed) ---
  {
    id: "dish-p16-kulfi-malai",
    name: "Malai Kulfi",
    group: "Drinks & Desserts",
    subCategory: "Kulfi & Sticks",
    description: "Traditional slow-condensed clotted cream kulfi on a stick; printed on menu without price (confirm MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-kulfi-kesar-pista",
    name: "Kesar Pista Kulfi",
    group: "Drinks & Desserts",
    subCategory: "Kulfi & Sticks",
    description: "Saffron and pistachio traditional kulfi on a stick; printed on menu without price (confirm MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-kulfi-mango",
    name: "Mango Kulfi",
    group: "Drinks & Desserts",
    subCategory: "Kulfi & Sticks",
    description: "Alphonso mango pulp infused dense kulfi stick; printed on menu without price (confirm MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-kulfi-rabdi",
    name: "Rabdi Kulfi",
    group: "Drinks & Desserts",
    subCategory: "Kulfi & Sticks",
    description: "Thick caramelized rabdi flavored kulfi; printed on menu without price (confirm MRP).",
    isVeg: true,
  },
  {
    id: "dish-p16-kulfi-choco-stick",
    name: "Choco Stick Kulfi",
    group: "Drinks & Desserts",
    subCategory: "Kulfi & Sticks",
    description: "Crisp chocolate-coated malai kulfi stick; printed on menu without price (confirm MRP).",
    isVeg: true,
  }
];

export default menuItems;
