import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";
import { cityPageSlugs, cityServices, getCityPage, site } from "@/lib/site";

const nationalPages = cityServices.map((service) => ({
  slug: `${service.slug}-india`,
  service,
  city: "India"
}));

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return [...cityPageSlugs, ...nationalPages.map((page) => page.slug)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const page = getCityPage(slug) ?? nationalPages.find((item) => item.slug === slug);
  if (!page) return {};
  const title =
    page.city === "India"
      ? `${page.service.label} India`
      : `${page.service.label} in ${page.city}`;
  return {
    title,
    description: `${site.name} provides ${page.service.service} for ambitious brands in ${page.city}, combining AI systems, premium content, branding, and performance marketing.`,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: `Premium AI-powered ${page.service.service} for brands in ${page.city}.`
    }
  };
}

export default async function SeoLandingPage({ params }: { params: Params }) {
  const { slug } = await params;
  const page = getCityPage(slug) ?? nationalPages.find((item) => item.slug === slug);
  if (!page) notFound();

  const title =
    page.city === "India"
      ? `${page.service.label} India`
      : `${page.service.label} in ${page.city}`;
  const faqs = [
    {
      question: `Why choose The Wictory for ${page.service.service} in ${page.city}?`,
      answer: `The Wictory combines AI-first strategy, premium content production, brand building, analytics, and performance marketing for businesses targeting ${page.city}.`
    },
    {
      question: `Does The Wictory create custom campaigns for ${page.city}?`,
      answer: `Yes. Each campaign is adapted to local market behavior, competition, audience intent, and business goals.`
    },
    {
      question: "Can The Wictory support SEO, social media, branding, and paid ads together?",
      answer: "Yes. The Wictory is built as a full digital growth partner across content, brand, reach, advertising, analytics, and AI systems."
    }
  ];

  return (
    <main>
      <JsonLd
        data={[
          localBusinessSchema(page.city),
          serviceSchema(title, `AI-powered ${page.service.service} for brands in ${page.city}.`),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: title, url: `${site.url}/${slug}` }
          ])
        ]}
      />
      <Section eyebrow={page.city === "India" ? "India growth hub" : `${page.city} growth hub`} title={title} copy={`${site.name} helps ambitious businesses in ${page.city} build premium brand presence, high-performing content systems, AI-assisted marketing workflows, and conversion-focused digital growth.`}>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[1.5rem] bg-ink p-8 text-white shadow-premium">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">Local SEO page</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
              From social media marketing and reels growth to SEO, paid ads, brand building, and AI systems, The Wictory
              brings a premium execution model for businesses that want serious market visibility.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
              Get Free Consultation
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              "Localized marketing insights",
              "AI-assisted campaign planning",
              "Premium content and reels systems",
              "Search, social, and performance alignment"
            ].map((item) => (
              <div key={item} className="rounded-[1rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6">
                <p className="font-semibold">{item}</p>
                <p className="mt-2 text-sm leading-6 text-black/58 dark:text-white/58">
                  Built for {page.city} businesses that need clarity, authority, reach, and measurable digital demand.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section eyebrow="Growth model" title={`A modern ${page.service.service} system for ${page.city}.`}>
        <div className="grid gap-4 md:grid-cols-3">
          {["Research", "Production", "Conversion"].map((item) => (
            <article key={item} className="rounded-[1rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6">
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                We connect audience intelligence, premium content, analytics, and growth experiments so each month compounds into stronger market authority.
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ" title={`${title} FAQs`}>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[1rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6">
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
