import { ArrowUpRight, BarChart3, IndianRupee, LineChart } from "lucide-react";

const bars = [38, 52, 64, 78, 92, 118, 145, 188, 226, 281, 340, 410];
const resultCards = [
  { value: "1 Crore+", label: "social media reach potential across campaign systems", Icon: BarChart3 },
  { value: "10X", label: "ROI-led creative and lead generation improvement target", Icon: IndianRupee },
  { value: "100+", label: "brands transformed with strategy, content, SEO, and ads", Icon: ArrowUpRight }
];

export function ResultsDashboard() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
      <div className="rounded-[1.5rem] border border-black/8 bg-white/76 p-6 shadow-premium dark:border-white/10 dark:bg-white/6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cobalt">Reach graph</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">90-day content reach projection</h3>
          </div>
          <LineChart className="h-6 w-6 text-cobalt" aria-hidden />
        </div>
        <div className="mt-8 h-64 rounded-[1rem] bg-black/[0.03] p-5 dark:bg-white/[0.05]">
          <div className="flex h-full items-end gap-2">
            {bars.map((bar, index) => (
              <div key={bar} className="flex flex-1 flex-col items-center gap-2">
                <span
                  className="w-full rounded-t bg-gradient-to-t from-cobalt to-signal"
                  style={{ height: `${Math.min(bar / 4.1, 100)}%` }}
                />
                {index % 3 === 0 && <span className="text-[10px] font-semibold text-black/42 dark:text-white/42">W{index + 1}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-5">
        {resultCards.map(({ value, label, Icon }) => (
          <div key={value} className="rounded-[1rem] border border-black/8 bg-white/76 p-6 dark:border-white/10 dark:bg-white/6">
            <div className="flex items-center justify-between">
              <p className="text-4xl font-semibold tracking-tight">{value}</p>
              <Icon className="h-6 w-6 text-cobalt" aria-hidden />
            </div>
            <p className="mt-3 text-sm leading-6 text-black/58 dark:text-white/58">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
