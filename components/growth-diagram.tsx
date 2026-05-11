import { Bot, Clapperboard, DatabaseZap, Megaphone, Target } from "lucide-react";

const steps = [
  { icon: DatabaseZap, title: "Market Intelligence", copy: "AI scans audience intent, competitors, content gaps, and trend signals." },
  { icon: Bot, title: "Strategy System", copy: "Content pillars, hooks, offers, and campaign logic are mapped before production." },
  { icon: Clapperboard, title: "Premium Production", copy: "Reels, founder content, carousels, ads, and brand assets are produced in cadence." },
  { icon: Megaphone, title: "Distribution Engine", copy: "Organic reach, paid amplification, collaborations, and retargeting work together." },
  { icon: Target, title: "Conversion Loop", copy: "Leads, calls, analytics, and creative learning feed the next growth cycle." }
];

export function GrowthDiagram() {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <article key={step.title} className="relative rounded-[1rem] border border-black/8 bg-white/70 p-5 dark:border-white/10 dark:bg-white/6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white dark:bg-white dark:text-ink">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">Step {index + 1}</p>
            <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{step.copy}</p>
          </article>
        );
      })}
    </div>
  );
}
