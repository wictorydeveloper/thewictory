import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI marketing, SEO, social media growth, branding, Instagram growth, paid ads, and local SEO insights from The Wictory.",
  alternates: { canonical: "/blog" }
};

const topics = [
  "AI Marketing Trends in India",
  "Best SEO Strategies for Chandigarh Businesses",
  "How Mumbai Brands Grow on Instagram",
  "Local SEO Playbook for Service Businesses",
  "Reels Strategy for Premium Brands",
  "Performance Marketing Funnel Checklist"
];

export default function BlogPage() {
  return (
    <main>
      <Section eyebrow="Content hub" title="Blog architecture for topical authority." copy="This structure is ready for SEO articles across AI marketing, local SEO, paid ads, branding, Instagram growth, and city-specific growth insights.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic} className="rounded-[1rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">Draft topic</p>
              <h2 className="mt-3 text-xl font-semibold">{topic}</h2>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
