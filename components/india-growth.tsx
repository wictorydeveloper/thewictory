import Image from "next/image";
import { MapPin, Star, Video } from "lucide-react";
import { wictoryImages } from "@/lib/assets";

const indianClientCards = [
  { title: "Local dominance", copy: "Tricity-first SEO and lead generation", Icon: MapPin },
  { title: "Google reviews", copy: "Trust signals for Indian buyers", Icon: Star },
  { title: "Video growth", copy: "Reels, podcasts, shoots and founder content", Icon: Video }
];

export function IndiaGrowth() {
  return (
    <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
      <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-premium dark:border-white/10 dark:bg-white/6">
        <Image
          src={wictoryImages.office}
          alt="The Wictory office and production environment"
          width={720}
          height={980}
          className="h-full min-h-[34rem] w-full object-cover"
        />
      </div>
      <div className="grid gap-5">
        <div className="rounded-[1.5rem] border border-black/8 bg-white/76 p-7 dark:border-white/10 dark:bg-white/6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cobalt">Built for Indian clients</p>
          <h3 className="mt-3 text-4xl font-semibold tracking-tight">Professional, practical, and growth-focused for Chandigarh, Mohali, Panchkula and pan-India brands.</h3>
          <p className="mt-5 leading-8 text-black/62 dark:text-white/62">
            Indian business owners want trust, calls, footfall, enquiries, rankings, and a premium image. The new visual
            system now highlights local credibility, real team strength, production capability, and measurable marketing outcomes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {indianClientCards.map(({ title, copy, Icon }) => (
            <div key={title} className="rounded-[1rem] bg-ink p-5 text-white">
              <Icon className="h-5 w-5 text-signal" aria-hidden />
              <p className="mt-4 font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/62">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
