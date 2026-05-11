import Image from "next/image";
import { BrainCircuit, LineChart, RadioTower } from "lucide-react";
import { CtaRow } from "@/components/cta";
import { wictoryImages } from "@/lib/assets";

const metrics = [
  ["10M+", "campaign reach generated"],
  ["4.9/5", "client trust score"],
  ["AI-first", "marketing operating systems"]
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] grid-surface opacity-70" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-rise">
          <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-black/70 backdrop-blur dark:border-white/12 dark:bg-white/8 dark:text-white/70">
            AI-powered digital marketing for Indian businesses
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
            Build a dominant brand in Tricity and across India.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-black/64 dark:text-white/64">
            The Wictory brings SEO, social media, reels, video production, branding, Google Ads, Meta Ads and AI systems
            into one serious growth engine for business owners who want more calls, more reach and stronger trust.
          </p>
          <div className="mt-9">
            <CtaRow />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div key={value} className="rounded-[8px] border border-black/8 bg-white/62 p-4 dark:border-white/10 dark:bg-white/6">
                <p className="text-2xl font-semibold">{value}</p>
                <p className="mt-1 text-sm text-black/54 dark:text-white/54">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[32rem]">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-ink shadow-premium">
            <Image
              src={wictoryImages.founders}
              alt="The Wictory founders and digital marketing leadership"
              width={980}
              height={1180}
              priority
              className="h-full w-full object-cover opacity-78"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
          </div>
          <div className="absolute inset-4 rounded-[1.5rem] border border-white/10" />
          <div className="absolute left-8 top-8 w-[72%] rounded-[8px] bg-white/10 p-5 text-white backdrop-blur animate-float">
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5 text-signal" aria-hidden />
              <p className="text-sm font-semibold">AI Content Intelligence</p>
            </div>
            <div className="mt-5 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[84%] rounded-full bg-signal" />
            </div>
            <p className="mt-4 text-xs text-white/62">SEO, reels, ads, local intent, call quality and publishing cadence.</p>
          </div>
          <div className="absolute bottom-9 left-8 right-8 rounded-[8px] bg-white p-5 text-ink shadow-premium dark:bg-white/92">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">1 Crore+ reach systems</p>
                <p className="text-xs text-black/50">Built for Indian buyer attention</p>
              </div>
              <LineChart className="h-5 w-5 text-cobalt" aria-hidden />
            </div>
            <svg viewBox="0 0 420 120" className="mt-4 h-28 w-full" role="img" aria-label="Animated marketing growth chart">
              <path d="M0 96 C70 92 88 80 132 76 C190 70 190 42 244 42 C306 42 302 16 420 18" fill="none" stroke="#326BFF" strokeWidth="5" strokeLinecap="round" />
              <path d="M0 96 C70 92 88 80 132 76 C190 70 190 42 244 42 C306 42 302 16 420 18 L420 120 L0 120 Z" fill="url(#g)" opacity=".18" />
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop stopColor="#326BFF" />
                  <stop offset="1" stopColor="#35E0A1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute right-6 top-40 rounded-[8px] bg-signal px-4 py-3 text-sm font-semibold text-ink shadow-glow">
            <RadioTower className="mr-2 inline h-4 w-4" aria-hidden />
            Viral signal detected
          </div>
        </div>
      </div>
    </section>
  );
}
