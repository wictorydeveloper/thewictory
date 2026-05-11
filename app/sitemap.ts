import type { MetadataRoute } from "next";
import { cityPageSlugs, cityServices, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/packages", "/about", "/case-studies", "/contact", "/blog"];
  const nationalRoutes = cityServices.map((service) => `/${service.slug}-india`);
  return [...staticRoutes, ...nationalRoutes, ...cityPageSlugs.map((slug) => `/${slug}`)].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route.includes("chandigarh") || route.includes("mohali") || route.includes("panchkula") ? 0.9 : 0.72
  }));
}
