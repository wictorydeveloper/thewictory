export const site = {
  name: "The Wictory",
  url: "https://thewictory.com",
  description:
    "AI-first digital marketing, branding, content creation, and social growth systems for ambitious Indian businesses.",
  phone: "+91 98765 43210",
  email: "growth@thewictory.com",
  whatsapp: "https://wa.me/919876543210",
  address: "Tricity, Chandigarh, Mohali and Panchkula",
  maxnet: "https://maxnetservices.co.uk"
};

export const services = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    problem: "Brands post often but fail to build repeatable attention.",
    solution: "A full social operating system for strategy, content calendars, distribution, and community growth.",
    result: "More visibility, stronger recall, better lead flow, and compounding audience trust."
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    problem: "Content feels generic, slow, and disconnected from the buyer journey.",
    solution: "AI-assisted scripting, production planning, reels, carousels, founder content, and campaign assets.",
    result: "Premium content volume with sharper hooks, clearer stories, and faster publishing velocity."
  },
  {
    slug: "brand-building",
    title: "Brand Building",
    problem: "Good businesses look forgettable online and lose premium perception.",
    solution: "Positioning, identity systems, narrative design, content pillars, and visual direction.",
    result: "A brand that looks trusted, differentiated, and ready for high-value customers."
  },
  {
    slug: "ai-marketing-systems",
    title: "AI Marketing Systems",
    problem: "Teams waste time on repetitive marketing workflows and scattered tools.",
    solution: "AI workflows for research, ideation, content repurposing, analytics, lead handling, and reporting.",
    result: "Faster execution, better consistency, and intelligent systems that scale with the business."
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    problem: "Ad spend leaks through weak funnels, creatives, and tracking.",
    solution: "Meta Ads, Google Ads, landing pages, creative testing, analytics, and conversion optimization.",
    result: "Cleaner acquisition, measurable ROI, and higher-quality lead generation."
  },
  {
    slug: "video-production",
    title: "Video Production",
    problem: "Short-form videos do not hold attention or carry brand authority.",
    solution: "Concepts, scripting, shoots, editing, motion graphics, reels systems, and founder-led video.",
    result: "Cinematic content that earns attention and builds trust quickly."
  }
];

export const packages = [
  {
    name: "Starter",
    price: "₹35K+",
    reach: "25K-75K",
    bestFor: "New brands building consistency",
    content: "12-16 monthly assets",
    platforms: "2 platforms",
    ads: "Guidance",
    analytics: "Monthly reporting",
    ai: "AI content ideation"
  },
  {
    name: "Growth",
    price: "₹65K+",
    reach: "80K-250K",
    bestFor: "Businesses ready to scale",
    content: "24-32 monthly assets",
    platforms: "3 platforms",
    ads: "Meta campaign support",
    analytics: "Bi-weekly insights",
    ai: "AI research and repurposing",
    recommended: true
  },
  {
    name: "Premium",
    price: "₹1.2L+",
    reach: "250K-750K",
    bestFor: "Premium brands and founders",
    content: "40-55 monthly assets",
    platforms: "4 platforms",
    ads: "Full funnel management",
    analytics: "Weekly growth room",
    ai: "AI workflow automation"
  },
  {
    name: "Dominator",
    price: "Custom",
    reach: "1M+",
    bestFor: "Market leadership campaigns",
    content: "Always-on content engine",
    platforms: "Full ecosystem",
    ads: "Performance war room",
    analytics: "Live dashboards",
    ai: "Custom AI marketing stack"
  }
];

export const tierOneCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Pune", "Ahmedabad", "Kolkata"];
export const tierTwoCities = [
  "Chandigarh",
  "Mohali",
  "Panchkula",
  "Jaipur",
  "Lucknow",
  "Indore",
  "Surat",
  "Ludhiana",
  "Dehradun",
  "Noida",
  "Gurugram",
  "Patiala",
  "Jalandhar",
  "Amritsar",
  "Bhopal",
  "Nagpur",
  "Kanpur",
  "Kochi",
  "Coimbatore",
  "Visakhapatnam"
];

export const cityServices = [
  {
    slug: "digital-marketing-agency",
    label: "Digital Marketing Agency",
    service: "full-stack digital marketing"
  },
  {
    slug: "seo-company",
    label: "SEO Company",
    service: "search visibility and local SEO"
  },
  {
    slug: "social-media-marketing-agency",
    label: "Social Media Marketing Agency",
    service: "social media growth"
  },
  {
    slug: "paid-ads-agency",
    label: "Paid Ads Agency",
    service: "Meta and Google performance marketing"
  },
  {
    slug: "branding-agency",
    label: "Branding Agency",
    service: "premium brand building"
  },
  {
    slug: "ai-marketing-company",
    label: "AI Marketing Company",
    service: "AI-powered marketing systems"
  }
];

export const allCities = [...tierOneCities, ...tierTwoCities];

export function slugifyCity(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export function unslugCity(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCityPage(slug: string) {
  for (const service of cityServices) {
    const suffix = "-in-";
    if (slug.startsWith(`${service.slug}${suffix}`)) {
      const citySlug = slug.replace(`${service.slug}${suffix}`, "");
      const city = allCities.find((item) => slugifyCity(item) === citySlug) ?? unslugCity(citySlug);
      return { service, city, slug };
    }
  }
  return null;
}

export const cityPageSlugs = allCities.flatMap((city) =>
  cityServices.map((service) => `${service.slug}-in-${slugifyCity(city)}`)
);
