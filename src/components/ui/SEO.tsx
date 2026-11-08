/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.tagline,
  canonicalPath = ""
}) => {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title
      ? `${title} | ${siteConfig.restaurantName} · Mumbra`
      : `${siteConfig.restaurantName} - Indian, Mughlai, Chinese & Tandoori · Mumbra`;
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. OpenGraph Title and Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", formattedTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // 4. Schema.org Restaurant Structured Data (JSON-LD)
    const restaurantSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": siteConfig.restaurantName,
      "image": window.location.origin + siteConfig.logoUrl,
      "telephone": siteConfig.phoneRaw,
      "email": siteConfig.email,
      "servesCuisine": siteConfig.cuisines,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.address,
        "addressLocality": "Mumbra",
        "addressRegion": "Maharashtra",
        "postalCode": "400612",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "url": window.location.origin + canonicalPath
    };

    let scriptTag = document.getElementById("restaurant-schema-jsonld") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "restaurant-schema-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(restaurantSchema);
  }, [title, description, canonicalPath]);

  return null;
};

export default SEO;
