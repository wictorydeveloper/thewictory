import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, site, tierOneCities, tierTwoCities, slugifyCity } from "@/lib/site";

export function Footer() {
  const cities = [...tierOneCities.slice(0, 4), ...tierTwoCities.slice(0, 8)];
  return (
    <footer className="border-t border-black/8 bg-ink px-5 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">The Wictory</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
            AI-first marketing, premium content creation, branding, and performance growth systems for ambitious brands in
            India, with international support through MaxNetServices UK.
          </p>
          <Link href={site.maxnet} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-signal">
            MaxNetServices UK <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/38">Services</p>
          <div className="grid gap-3 text-sm text-white/68">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services#${service.slug}`} className="hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/38">Cities</p>
          <div className="grid gap-3 text-sm text-white/68">
            {cities.map((city) => (
              <Link key={city} href={`/digital-marketing-agency-in-${slugifyCity(city)}`} className="hover:text-white">
                Digital Marketing in {city}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/38">Contact</p>
          <div className="grid gap-3 text-sm text-white/68">
            <Link href="/dashboard" className="hover:text-white">
              Team dashboard MVP
            </Link>
            <Link href="/client-app" className="hover:text-white">
              Client app MVP
            </Link>
            <Link href="/contact" className="hover:text-white">
              Book a consultation
            </Link>
            <Link href={site.whatsapp} className="hover:text-white">
              WhatsApp team
            </Link>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <p>{site.address}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} The Wictory. All rights reserved.</p>
        <p>Built for SEO, performance, accessibility, and premium conversion.</p>
      </div>
    </footer>
  );
}
