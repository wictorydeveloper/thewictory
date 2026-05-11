"use client";

import { useState } from "react";
import { Check, Crown, TrendingUp } from "lucide-react";
import { packages } from "@/lib/site";
import { cn } from "@/lib/utils";

const rows = [
  ["Monthly reach", "reach"],
  ["Content quantity", "content"],
  ["Platform management", "platforms"],
  ["Ad support", "ads"],
  ["Analytics", "analytics"],
  ["AI tools", "ai"]
] as const;

export function PackagesComparison({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<"reach" | "roi">("reach");

  return (
    <div className="rounded-[1.5rem] border border-black/8 bg-white/68 p-4 shadow-premium backdrop-blur dark:border-white/10 dark:bg-white/6 sm:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cobalt">Marketing packages</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">Choose the growth system, not just a posting plan.</h3>
        </div>
        <div className="grid grid-cols-2 rounded-full border border-black/10 bg-black/5 p-1 text-sm dark:border-white/10 dark:bg-white/8">
          {(["reach", "roi"] as const).map((item) => (
            <button
              key={item}
              className={cn("rounded-full px-4 py-2 font-semibold capitalize transition", mode === item && "bg-ink text-white dark:bg-white dark:text-ink")}
              onClick={() => setMode(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-4">
        {packages.map((plan, index) => (
          <article
            key={plan.name}
            className={cn(
              "relative rounded-[1rem] border p-5 transition duration-300 hover:-translate-y-1",
              plan.recommended
                ? "border-signal bg-ink text-white shadow-glow"
                : "border-black/8 bg-white/76 dark:border-white/10 dark:bg-white/6"
            )}
          >
            {plan.recommended && (
              <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-signal px-3 py-1 text-xs font-semibold text-ink">
                <Crown className="h-3.5 w-3.5" aria-hidden />
                Recommended
              </span>
            )}
            <p className="text-xl font-semibold">{plan.name}</p>
            <p className={cn("mt-2 text-3xl font-semibold", plan.recommended ? "text-white" : "text-ink dark:text-white")}>{plan.price}</p>
            <p className={cn("mt-3 text-sm", plan.recommended ? "text-white/64" : "text-black/58 dark:text-white/58")}>{plan.bestFor}</p>
            <div className="mt-6 h-24 rounded-[8px] bg-black/5 p-3 dark:bg-white/8">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
                <span>{mode === "reach" ? "Reach" : "ROI"}</span>
                <TrendingUp className="h-4 w-4" aria-hidden />
              </div>
              <div className="mt-4 flex h-10 items-end gap-1.5">
                {[34, 42, 54, 70, 84, 96].map((height, i) => (
                  <span
                    key={height}
                    className={cn("flex-1 rounded-t bg-cobalt", plan.recommended && "bg-signal")}
                    style={{ height: `${Math.min(100, height + index * 8 + (mode === "roi" ? i * 3 : 0))}%` }}
                  />
                ))}
              </div>
            </div>
            {!compact && (
              <ul className="mt-6 grid gap-3 text-sm">
                {rows.map(([label, key]) => (
                  <li key={label} className="flex gap-2">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", plan.recommended ? "text-signal" : "text-cobalt")} aria-hidden />
                    <span>
                      <strong>{label}:</strong> {plan[key]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
