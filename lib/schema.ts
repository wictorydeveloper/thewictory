import { site } from "@/lib/site";

type Schema = Record<string, unknown>;

export function organizationSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    sameAs: [site.maxnet],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Punjabi"]
    }
  };
}

export function localBusinessSchema(city = "Tricity"): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${site.name} - ${city}`,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: city === "Tricity" ? "Chandigarh" : city,
      addressCountry: "IN"
    },
    areaServed: city,
    priceRange: "₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "86"
    }
  };
}

export function serviceSchema(name: string, description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    areaServed: "India"
  };
}

export function faqSchema(items: { question: string; answer: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
