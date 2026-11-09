/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { siteConfig, getAbsoluteUrl } from "../../data/siteConfig";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  faqList?: FAQItem[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = "",
  faqList
}) => {
  useEffect(() => {
    // 1. Update Page Title
    document.title = title;

    // Helper to get or create a meta tag
    const setMetaTag = (attrName: "name" | "property", attrValue: string, contentValue: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", contentValue);
    };

    // 2. Meta Description
    setMetaTag("name", "description", description);

    // 3. Robots Indexing Directive based on allowSearchIndexing setting
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!siteConfig.allowSearchIndexing) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else if (robotsMeta) {
      robotsMeta.remove();
    }

    // 4. Canonical Link Tag
    const absoluteUrl = getAbsoluteUrl(canonicalPath);
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", absoluteUrl);

    // 5. Open Graph Meta Tags
    const ogImageUrl = `${siteConfig.siteUrl}/og-image.jpg`;
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", "Noorani Family Restaurant");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImageUrl);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", "Noorani Family Restaurant, Mumbra: Indian, Mughlai, Chinese and Tandoori");
    setMetaTag("property", "og:url", absoluteUrl);
    setMetaTag("property", "og:locale", "en_IN");

    // 6. Twitter / X Card Meta Tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImageUrl);

    // 7. Schema.org Restaurant Structured Data (JSON-LD)
    const restaurantSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": siteConfig.restaurantName,
      "url": absoluteUrl,
      "image": ogImageUrl,
      "telephone": siteConfig.phoneRaw,
      "email": siteConfig.email,
      "servesCuisine": siteConfig.cuisines,
      "priceRange": "₹₹",
      "hasMenu": `${siteConfig.siteUrl}/menu`,
      "acceptsReservations": "true",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 1 and 2, Afreen Apartment, Opp. Axis Bank, Tanwar Nagar, Kausa",
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
      ]
    };

    let restaurantScript = document.getElementById("restaurant-schema-jsonld") as HTMLScriptElement | null;
    if (!restaurantScript) {
      restaurantScript = document.createElement("script");
      restaurantScript.id = "restaurant-schema-jsonld";
      restaurantScript.type = "application/ld+json";
      document.head.appendChild(restaurantScript);
    }
    restaurantScript.textContent = JSON.stringify(restaurantSchema);

    // 8. BreadcrumbList Structured Data (JSON-LD)
    const breadcrumbListItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${siteConfig.siteUrl}/`
      }
    ];

    if (canonicalPath && canonicalPath !== "/") {
      const pageName = title.split("—")[0].trim();
      breadcrumbListItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": absoluteUrl
      });
    }

    const breadcrumbsSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbListItems
    };

    let breadcrumbsScript = document.getElementById("breadcrumbs-schema-jsonld") as HTMLScriptElement | null;
    if (!breadcrumbsScript) {
      breadcrumbsScript = document.createElement("script");
      breadcrumbsScript.id = "breadcrumbs-schema-jsonld";
      breadcrumbsScript.type = "application/ld+json";
      document.head.appendChild(breadcrumbsScript);
    }
    breadcrumbsScript.textContent = JSON.stringify(breadcrumbsSchema);

    // 9. FAQPage Structured Data (JSON-LD) if FAQ items are present
    let faqScript = document.getElementById("faq-schema-jsonld") as HTMLScriptElement | null;
    if (faqList && faqList.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqList.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

      if (!faqScript) {
        faqScript = document.createElement("script");
        faqScript.id = "faq-schema-jsonld";
        faqScript.type = "application/ld+json";
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    } else if (faqScript) {
      faqScript.remove();
    }
  }, [title, description, canonicalPath, faqList]);

  return null;
};

export default SEO;
