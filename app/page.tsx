import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ServicesGrid } from "@/components/services-grid";
import { PackagesComparison } from "@/components/packages-comparison";
import { GrowthDiagram } from "@/components/growth-diagram";
import { FinalCta } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "What makes The Wictory different from a normal digital marketing agency?",
    answer:
      "The Wictory combines AI marketing systems, premium content production, brand strategy, social media growth, paid ads, and analytics into one integrated growth engine."
  },
  {
    question: "Does The Wictory work outside Tricity?",
    answer:
      "Yes. The Wictory serves brands across India and supports international requirements through MaxNetServices UK."
  },
  {
    question: "Can The Wictory handle complete digital marketing?",
    answer:
      "Yes. The team can manage social media, content creation, reels, branding, paid ads, SEO strategy, analytics, and AI-assisted workflows."
  }
];

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Agency in Tricity",
  description:
    "The Wictory is an AI-first digital marketing, branding, content creation, and social growth company for premium Indian brands.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <main>
      <JsonLd data={[localBusinessSchema(), serviceSchema("AI-powered digital marketing", site.description), faqSchema(faqs)]} />
      <Hero />
      <Section eyebrow="Trusted growth signals" title="Built to turn attention into brand authority." copy="Premium execution across strategy, content, distribution, and performance. The system is designed for reach, recall, and measurable business growth.">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["10M+", "reach generated through campaign ecosystems"],
            ["300%", "average content velocity improvement after systemization"],
            ["90 days", "to install a measurable social growth operating rhythm"],
            ["India + UK", "local execution with international growth presence"]
          ].map(([value, label]) => (
            <div key={value} className="rounded-[1rem] border border-black/8 bg-white/70 p-6 dark:border-white/10 dark:bg-white/6">
              <p className="text-4xl font-semibold tracking-tight">{value}</p>
              <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Services" title="One premium team for the full digital growth ecosystem." copy="Every service is connected: brand clarity improves content, content improves reach, reach improves retargeting, and AI improves speed.">
        <ServicesGrid />
      </Section>
      <Section eyebrow="Why The Wictory" title="An AI-first growth company for brands that refuse to look average." copy="The Wictory positions brands with strategic clarity, produces premium content, builds viral distribution systems, and uses AI to accelerate the workflows behind modern marketing.">
        <GrowthDiagram />
      </Section>
      <Section eyebrow="Packages" title="Marketing plans with serious growth architecture." copy="From consistent social execution to dominant content ecosystems, each plan is designed around reach, content velocity, analytics, and AI-enabled operating systems.">
        <PackagesComparison />
      </Section>
      <Section eyebrow="Elite brand building" title="The advanced brand building package is the flagship transformation." copy="A high-end content and identity system for founders, premium businesses, and companies that want to own attention rather than rent it post by post.">
        <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-[1.5rem] bg-ink p-8 text-white shadow-premium">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">Brand transformation system</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">Build a brand that owns attention.</h3>
            <p className="mt-5 leading-8 text-white/64">
              Positioning, founder story, identity refinement, content pillars, reels systems, production direction,
              monthly campaigns, paid amplification, and AI-assisted content intelligence.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
              Build My Brand
            </Link>
          </div>
          <div className="rounded-[1.5rem] border border-black/8 bg-white/70 p-6 dark:border-white/10 dark:bg-white/6">
            <div className="grid gap-3 sm:grid-cols-2">
              {["Brand audit", "Positioning map", "Content pipeline", "Founder-led storytelling", "Premium production", "Growth dashboard"].map((item, index) => (
                <div key={item} className="rounded-[8px] bg-black/5 p-5 dark:bg-white/8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt">0{index + 1}</p>
                  <p className="mt-2 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section eyebrow="Global reach" title="Local expertise in India. International confidence through the UK." copy="The Wictory serves Indian businesses with deep Tricity roots, while MaxNetServices UK extends the ecosystem for international digital operations and global growth support.">
        <Link href={site.maxnet} className="inline-flex rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold dark:border-white/10 dark:bg-white/8">
          Visit MaxNetServices UK
        </Link>
      </Section>
      <Section eyebrow="FAQ" title="Questions premium brands ask before they scale.">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[1rem] border border-black/8 bg-white/70 p-6 dark:border-white/10 dark:bg-white/6">
              <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
              <p className="mt-4 leading-7 text-black/60 dark:text-white/60">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <FinalCta />
    </main>
  );
}
