import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { Section } from "@/components/section";
import { JsonLd } from "@/components/json-ld";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description: "The Wictory story, AI-first marketing philosophy, Tricity leadership, and premium growth vision.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={organizationSchema()} />
      <Section eyebrow="About The Wictory" title="A Tricity-born, AI-first marketing company built for the next era of attention." copy="The Wictory exists for businesses that want more than posting. It brings strategy, content, brand systems, performance marketing, and AI workflows into a single premium operating model.">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Innovation philosophy", "Adopt early, test fast, build systems that compound instead of chasing one-off campaigns."],
            ["AI-first approach", "Use AI for research, ideation, repurposing, analytics, workflows, and sharper strategic decisions."],
            ["Market leadership", "Position Tricity and Indian brands with the polish, clarity, and ambition of global companies."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[1rem] border border-black/8 bg-white/72 p-7 dark:border-white/10 dark:bg-white/6">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-black/60 dark:text-white/60">{copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="Timeline" title="From local execution to intelligent growth systems.">
        <div className="grid gap-4">
          {["Early AI adoption in Tricity", "Premium content and branding systems", "Full-funnel performance growth", "India-wide SEO and city expansion", "International support with MaxNetServices UK"].map((item, index) => (
            <div key={item} className="flex gap-5 rounded-[1rem] border border-black/8 bg-white/72 p-5 dark:border-white/10 dark:bg-white/6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white dark:bg-white dark:text-ink">{index + 1}</span>
              <p className="self-center font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </main>
  );
}
