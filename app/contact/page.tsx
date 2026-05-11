import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { Section } from "@/components/section";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a premium marketing consultation with The Wictory for AI-powered digital growth, branding, content creation, and performance marketing.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={localBusinessSchema()} />
      <Section eyebrow="Contact" title="Book a strategy call with The Wictory." copy="Tell the team what you want to build. You will get a clear diagnosis across brand, content, reach, ads, and AI growth systems.">
        <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
          <form className="rounded-[1.5rem] border border-black/8 bg-white/76 p-6 dark:border-white/10 dark:bg-white/6">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Name", "Phone", "Email", "Business"].map((label) => (
                <label key={label} className="grid gap-2 text-sm font-semibold">
                  {label}
                  <input className="min-h-12 rounded-[8px] border border-black/10 bg-white px-4 text-ink outline-none focus:border-cobalt dark:border-white/12" placeholder={label} />
                </label>
              ))}
            </div>
            <label className="mt-4 grid gap-2 text-sm font-semibold">
              What do you want to grow?
              <textarea className="min-h-32 rounded-[8px] border border-black/10 bg-white px-4 py-3 text-ink outline-none focus:border-cobalt dark:border-white/12" placeholder="Brand building, social media, reels, paid ads, SEO, AI systems..." />
            </label>
            <button className="mt-5 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink" type="button">
              Request Consultation
            </button>
          </form>
          <div className="grid gap-4">
            <Link href={site.whatsapp} className="rounded-[1rem] bg-signal p-6 text-ink shadow-glow">
              <MessageCircle className="h-6 w-6" aria-hidden />
              <p className="mt-4 text-xl font-semibold">WhatsApp the team</p>
              <p className="mt-2 text-sm text-black/62">Fastest path for consultation requests and package questions.</p>
            </Link>
            <div className="rounded-[1rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6">
              <CalendarDays className="h-6 w-6 text-cobalt" aria-hidden />
              <p className="mt-4 text-xl font-semibold">Calendly placeholder</p>
              <p className="mt-2 text-sm text-black/62 dark:text-white/62">Embed your Calendly link here before launch.</p>
            </div>
            <div className="rounded-[1rem] border border-black/8 bg-white/72 p-6 dark:border-white/10 dark:bg-white/6">
              <MapPin className="h-6 w-6 text-cobalt" aria-hidden />
              <p className="mt-4 text-xl font-semibold">Tricity presence</p>
              <p className="mt-2 text-sm text-black/62 dark:text-white/62">Serving Chandigarh, Mohali, Panchkula, India, and UK-linked operations.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
