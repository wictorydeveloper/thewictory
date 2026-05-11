import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { ResultsDashboard } from "@/components/results-dashboard";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Growth stories, reach statistics, campaign outcomes, and brand transformation case studies from The Wictory.",
  alternates: { canonical: "/case-studies" }
};

const cases = [
  ["Lifestyle brand", "3.2M reach", "Reels-led content engine with founder storytelling and paid retargeting."],
  ["Local service business", "240% lead growth", "Offer refinement, Google visibility, Meta campaigns, and CRM-ready lead flow."],
  ["Premium founder brand", "7x engagement", "Personal brand positioning, cinematic short-form videos, and weekly content cadence."]
];

export default function CaseStudiesPage() {
  return (
    <main>
      <Section eyebrow="Case studies" title="Growth stories designed around attention, trust, and conversion." copy="Replace placeholders with live client visuals, testimonials, and verified analytics as the brand library grows.">
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map(([name, metric, copy]) => (
            <article key={name} className="rounded-[1.5rem] border border-black/8 bg-white/72 p-7 dark:border-white/10 dark:bg-white/6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">{name}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">{metric}</h2>
              <p className="mt-5 leading-7 text-black/60 dark:text-white/60">{copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Performance view" title="A clear graph layer for business owners and decision makers.">
        <ResultsDashboard />
      </Section>
      <FinalCta />
    </main>
  );
}
