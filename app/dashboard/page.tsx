import type { Metadata } from "next";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  FileSpreadsheet,
  LockKeyhole,
  PauseCircle,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  UploadCloud
} from "lucide-react";
import { Section } from "@/components/section";
import { clientProjects, dashboardStats, rankingTrend, uploadQueue } from "@/lib/dashboard-data";

export const metadata: Metadata = {
  title: "Team Dashboard MVP",
  description: "Internal team dashboard prototype for client management, reports, billing and project hold controls.",
  alternates: { canonical: "/dashboard" }
};

export default function DashboardPage() {
  return (
    <main className="bg-[#eef3f8] text-slate-950 dark:bg-ink dark:text-white">
      <Section
        eyebrow="Internal Control Room"
        title="Team dashboard for clients, billing, reports and project hold controls."
        copy="A SaaS-style internal portal concept for The Wictory team with role-based actions, Excel report uploads, billing alerts and SEO performance graphs."
        className="pb-10"
      >
        <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-[1rem] bg-slate-950 p-5 text-white shadow-premium">
            <p className="text-lg font-semibold">The Wictory OS</p>
            <div className="mt-6 grid gap-2 text-sm text-white/70">
              {["Client Management", "Bulk Reports Upload", "Financials", "SEO Graphs", "Team Access", "Audit Logs"].map((item) => (
                <div key={item} className="rounded-[8px] px-3 py-2 transition hover:bg-white/8 hover:text-white">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] border border-white/10 bg-white/6 p-4">
              <ShieldCheck className="h-5 w-5 text-signal" aria-hidden />
              <p className="mt-3 text-sm font-semibold">Security-first</p>
              <p className="mt-2 text-xs leading-5 text-white/56">JWT login, role-based access, encrypted file storage and billing API tunnel.</p>
            </div>
          </aside>

          <div className="grid gap-5">
            <div className="grid gap-4 md:grid-cols-4">
              {dashboardStats.map((stat) => (
                <div key={stat.label} className="rounded-[1rem] bg-white p-5 shadow-sm dark:bg-white/6">
                  <p className="text-sm font-semibold text-slate-500 dark:text-white/50">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-2 text-xs font-medium text-cobalt">{stat.change}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
              <div className="rounded-[1rem] bg-white p-6 shadow-sm dark:bg-white/6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cobalt">Client Management</p>
                    <h2 className="mt-2 text-2xl font-semibold">150+ website status control</h2>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                    <LockKeyhole className="h-4 w-4" aria-hidden />
                    Admin Access
                  </button>
                </div>
                <div className="mt-6 overflow-hidden rounded-[8px] border border-slate-200 dark:border-white/10">
                  <div className="grid grid-cols-[1.4fr_.8fr_.8fr_.8fr_.8fr] bg-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:bg-white/8 dark:text-white/50">
                    <span>Client</span>
                    <span>Package</span>
                    <span>Billing</span>
                    <span>SEO</span>
                    <span>Status</span>
                  </div>
                  {clientProjects.map((client) => (
                    <div key={client.name} className="grid grid-cols-[1.4fr_.8fr_.8fr_.8fr_.8fr] items-center border-t border-slate-200 px-4 py-4 text-sm dark:border-white/10">
                      <div>
                        <p className="font-semibold">{client.name}</p>
                        <p className="text-xs text-slate-500 dark:text-white/48">{client.city}</p>
                      </div>
                      <span>{client.package}</span>
                      <span className={client.status === "Payment Due" || client.status === "Hold" ? "text-ember" : "text-slate-500 dark:text-white/56"}>{client.billing}</span>
                      <span className={client.seo >= 0 ? "text-emerald-600" : "text-rose-500"}>
                        {client.seo >= 0 ? "+" : ""}
                        {client.seo} positions
                      </span>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold dark:border-white/10">
                        {client.status === "Active" ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> : client.status === "Hold" ? <PauseCircle className="h-3.5 w-3.5 text-ember" /> : <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />}
                        {client.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="rounded-[1rem] bg-white p-6 shadow-sm dark:bg-white/6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cobalt">Excel to graph</p>
                      <h2 className="mt-2 text-2xl font-semibold">SEO ranking comparison</h2>
                    </div>
                    <BarChart3 className="h-6 w-6 text-cobalt" aria-hidden />
                  </div>
                  <div className="mt-6 flex h-48 items-end gap-3">
                    {rankingTrend.map((item) => (
                      <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                        <span className="w-full rounded-t bg-cobalt" style={{ height: `${100 - item.rank}%` }} />
                        <span className="text-xs font-semibold text-slate-500 dark:text-white/50">{item.month}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-[8px] bg-emerald-50 p-3 text-emerald-700">
                      <TrendingUp className="mb-2 h-4 w-4" aria-hidden />
                      Ranking Improved
                    </div>
                    <div className="rounded-[8px] bg-rose-50 p-3 text-rose-700">
                      <TrendingDown className="mb-2 h-4 w-4" aria-hidden />
                      Decline alerts
                    </div>
                  </div>
                </div>

                <div className="rounded-[1rem] bg-white p-6 shadow-sm dark:bg-white/6">
                  <div className="flex items-center gap-3">
                    <UploadCloud className="h-6 w-6 text-cobalt" aria-hidden />
                    <h2 className="text-2xl font-semibold">Bulk reports upload</h2>
                  </div>
                  <div className="mt-5 rounded-[1rem] border border-dashed border-cobalt/40 bg-cobalt/5 p-6 text-center">
                    <FileSpreadsheet className="mx-auto h-8 w-8 text-cobalt" aria-hidden />
                    <p className="mt-3 text-sm font-semibold">Drag Excel files here</p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-white/50">System converts monthly data into client-ready graphs.</p>
                  </div>
                  <div className="mt-4 grid gap-2">
                    {uploadQueue.map((item) => (
                      <p key={item} className="rounded-[8px] bg-slate-100 px-3 py-2 text-sm dark:bg-white/8">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
