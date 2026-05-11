import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { serviceSchema } from "@/lib/schema";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "AI marketing systems, social media, content creation, branding, performance marketing, reels growth, and full-stack digital growth services.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={services.map((service) => serviceSchema(service.title, service.solution))} />
      <Section eyebrow="Services" title="Full-stack digital growth, engineered as one intelligent system." copy="Each service includes a clear problem, a strategic solution, a production process, and measurable growth outcomes.">
        <div className="grid gap-5">
          {services.map((service) => (
            <article key={service.slug} id={service.slug} className="rounded-[1.5rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr_1fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cobalt">Service</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">{service.title}</h2>
                </div>
                <div>
                  <p className="font-semibold">Problem</p>
                  <p className="mt-2 leading-7 text-black/60 dark:text-white/60">{service.problem}</p>
                  <p className="mt-5 font-semibold">Solution</p>
                  <p className="mt-2 leading-7 text-black/60 dark:text-white/60">{service.solution}</p>
                </div>
                <div className="rounded-[1rem] bg-ink p-6 text-white">
                  <p className="font-semibold">Expected results</p>
                  <p className="mt-3 leading-7 text-white/66">{service.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <FinalCta />
    </main>
  );
}
