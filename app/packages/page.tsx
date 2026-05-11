import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { PackagesComparison } from "@/components/packages-comparison";
import { Section } from "@/components/section";
import { JsonLd } from "@/components/json-ld";
import { serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Marketing Packages",
  description: "Premium social media, content creation, branding, AI marketing systems, and full digital marketing packages by The Wictory.",
  alternates: { canonical: "/packages" }
};

export default function PackagesPage() {
  return (
    <main>
      <JsonLd data={serviceSchema("Marketing packages", "Premium digital marketing packages for reach, content, AI systems, and ROI growth.")} />
      <Section eyebrow="Packages" title="Premium plans for brands that want measurable momentum." copy="Compare content volume, reach estimates, ad support, analytics, and AI-enabled growth systems.">
        <PackagesComparison />
      </Section>
      <Section eyebrow="Advanced brand building" title="A flagship identity and attention ownership program." copy="For founders and companies that need market perception, premium creative output, repeatable storytelling, and conversion-ready authority.">
        <div className="grid gap-4 md:grid-cols-3">
          {["Identity system", "Production engine", "Growth intelligence"].map((item) => (
            <div key={item} className="rounded-[1rem] border border-black/8 bg-white/72 p-7 dark:border-white/10 dark:bg-white/6">
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                Premium strategy, content, campaign planning, and AI-assisted decision loops designed to make the brand easier to notice, trust, and buy from.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </main>
  );
}
