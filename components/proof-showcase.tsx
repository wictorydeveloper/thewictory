import Image from "next/image";
import { wictoryImages } from "@/lib/assets";

export function ProofShowcase() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
      <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white shadow-premium dark:border-white/10 dark:bg-white/6">
        <Image
          src={wictoryImages.team}
          alt="The Wictory team of digital marketing experts"
          width={1200}
          height={760}
          className="h-full min-h-[22rem] w-full object-cover"
        />
      </div>
      <div className="grid gap-5">
        <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white dark:border-white/10 dark:bg-white/6">
          <Image
            src={wictoryImages.brandWall}
            alt="The Wictory trusted brand and certification proof"
            width={900}
            height={520}
            className="h-52 w-full object-cover"
          />
        </div>
        <div className="rounded-[1.5rem] bg-ink p-7 text-white shadow-premium">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-signal">Indian market proof</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight">100+ brands, 25 professionals, 10+ years of digital growth.</h3>
          <p className="mt-4 leading-7 text-white/64">
            Built from Tricity for Indian businesses that want better Google ranking, stronger social media presence,
            high-quality videos, and serious lead generation.
          </p>
        </div>
      </div>
    </div>
  );
}
