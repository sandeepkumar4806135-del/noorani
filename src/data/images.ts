/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * NOORANI RESTAURANT - CENTRAL IMAGE REGISTRY
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Photographic assets for food dishes and restaurant showcase.
 */

export interface AppImage {
  src: string;
  alt: string;
  aspectRatio?: string;
  title?: string;
  category?: string;
}

export const images = {
  // ── Hero Banner ──
  hero: {
    src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1600&q=80",
    alt: "A rich feast of aromatic Mughlai Dum Biryani, fresh tandoori kebabs, and warm gravies at Noorani",
    aspectRatio: "16/9",
    title: "Noorani Family Dining Experience"
  },

  // ── Four Main Cuisines ──
  cuisines: {
    mughlai: {
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      alt: "Rich and creamy Mughlai Chicken Korma with golden fried onions and fresh herbs",
      aspectRatio: "4/3",
      title: "Royal Mughlai Delicacies"
    },
    tandoori: {
      src: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      alt: "Charcoal-grilled Tandoori Chicken and Seekh Kebabs served on a sizzling platter with lemon and mint chutney",
      aspectRatio: "4/3",
      title: "Charcoal Fired Tandoor"
    },
    indian: {
      src: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
      alt: "Classic Butter Chicken cooked in velvet tomato gravy with dollops of white butter and fresh garlic naan",
      aspectRatio: "4/3",
      title: "Indian Curries & Gravies"
    },
    chinese: {
      src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
      alt: "Wok-tossed Hakka Noodles with crisp vegetables and Indo-Chinese spices",
      aspectRatio: "4/3",
      title: "Desi Indo-Chinese Wok"
    }
  },

  // ── 6 Popular / Signature Dishes featured on Home Page ──
  signatureDishes: [
    {
      id: "dish-butter-chicken",
      name: "Butter Chicken",
      cuisine: "Indian",
      price: 230,
      isVeg: false,
      tag: "All-Time Favorite",
      src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
      alt: "Rich Butter Chicken simmered with fenugreek and butter",
      description: "Charcoal-roasted tandoori chicken simmered in rich satin tomato, cashew makhani gravy and fresh butter."
    },
    {
      id: "dish-chicken-angara",
      name: "Chicken Angara",
      cuisine: "Mughlai",
      price: 400,
      isVeg: false,
      tag: "House Special",
      src: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
      alt: "Fiery red Chicken Angara cooked with smoked charcoal aromatics",
      description: "Fiery, deep-red spiced chicken gravy infused with charcoal smoke and roasted whole spices."
    },
    {
      id: "dish-murgh-malai-cheese-tandoori",
      name: "Murgh Malai Cheese Tandoori",
      cuisine: "Tandoori",
      price: 450,
      isVeg: false,
      tag: "Signature Tandoor",
      src: "https://images.unsplash.com/photo-1567184109411-b28f27034346?auto=format&fit=crop&w=700&q=80",
      alt: "Murgh Malai Cheese Tandoori baked in clay tandoor",
      description: "Tender chicken marinated in hung curd, fresh cream, cheese, and mild spices, charred to perfection."
    },
    {
      id: "dish-chicken-crispy-dry",
      name: "Chicken Crispy Dry",
      cuisine: "Chinese / Starter",
      price: 270,
      isVeg: false,
      tag: "Customer Favorite",
      src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=80",
      alt: "Golden crispy shredded chicken tossed with garlic and peppers",
      description: "Crisp shredded chicken tossed with roasted garlic, capsicum, and dry wok spices."
    },
    {
      id: "dish-chicken-tikka-biryani",
      name: "Chicken Tikka Biryani",
      cuisine: "Biryani",
      price: 230,
      isVeg: false,
      tag: "Dum Biryani",
      src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
      alt: "Chicken Tikka Biryani layered with saffron rice and mint",
      description: "Charcoal-tandoor chicken tikka layered with saffron basmati rice, brown onions, and mint on dum."
    },
    {
      id: "dish-chicken-noorani-special",
      name: "Chicken Noorani Special",
      cuisine: "Mughlai",
      price: 400,
      isVeg: false,
      tag: "Chef's Pride",
      src: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=700&q=80",
      alt: "Noorani Special royal chicken gravy with rich cashews",
      description: "Our signature chicken delicacy cooked in royal cashew-saffron gravy with rich dry fruits."
    }
  ],

  // ── About Page Images ──
  about: {
    diningRoom: {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      alt: "Spacious Noorani family dining hall with welcoming ambiance",
      aspectRatio: "4/3",
      title: "Family Dining Ambience"
    },
    kitchenTandoor: {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
      alt: "Fresh flatbreads and kebabs baked in glowing charcoal clay tandoor",
      aspectRatio: "4/3",
      title: "Our Active Tandoor Kitchen"
    },
    spiceSelection: {
      src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80",
      alt: "Aromatic whole spices including green cardamom, cloves, and saffron",
      aspectRatio: "16/9",
      title: "Hand-Selected Spices"
    }
  },

  // ── Food Menu Gallery Showcase ──
  gallery: [
    {
      id: "gal-1",
      src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
      alt: "Dum Biryani served in traditional copper vessel",
      title: "Chicken Dum Biryani",
      category: "Food"
    },
    {
      id: "gal-2",
      src: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=900&q=80",
      alt: "Sizzling Tandoori Chicken Tikka fresh from the tandoor",
      title: "Charcoal Tandoori Tikka",
      category: "Food"
    },
    {
      id: "gal-3",
      src: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
      alt: "Creamy Butter Chicken with fenugreek butter garnish",
      title: "Butter Chicken",
      category: "Food"
    },
    {
      id: "gal-4",
      src: "https://images.unsplash.com/photo-1567184109411-b28f27034346?auto=format&fit=crop&w=900&q=80",
      alt: "Paneer Tikka with bell peppers and mint chutney",
      title: "Tandoori Paneer Tikka",
      category: "Food"
    },
    {
      id: "gal-5",
      src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80",
      alt: "Wok-tossed Hakka Noodles with vegetables",
      title: "Chicken Hakka Noodles",
      category: "Food"
    },
    {
      id: "gal-6",
      src: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=900&q=80",
      alt: "Slow-cooked Kashmiri Mutton Rogan Josh in rich gravy",
      title: "Mutton Rogan Josh",
      category: "Food"
    },
    {
      id: "gal-7",
      src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
      alt: "Crisp Chicken Starter with peppers and scallions",
      title: "Chicken Crispy Dry",
      category: "Food"
    },
    {
      id: "gal-8",
      src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=900&q=80",
      alt: "Chicken Tikka Biryani layered with saffron rice",
      title: "Chicken Tikka Biryani",
      category: "Food"
    },
    {
      id: "gal-9",
      src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
      alt: "Royal Chicken Korma finished with almonds and saffron",
      title: "Chicken Noorani Special",
      category: "Food"
    }
  ]
};

export default images;
