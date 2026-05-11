import type { Metadata } from "next";
import { Bell, BookOpen, CreditCard, Flame, MessageCircle, Phone, TrendingUp } from "lucide-react";
import { Section } from "@/components/section";
import { clientFeed, offers, rankingTrend } from "@/lib/dashboard-data";

export const metadata: Metadata = {
  title: "Client App MVP",
  description: "Client mobile app prototype for billing alerts, SEO graphs, posts, blogs, offers and support.",
  alternates: { canonical: "/client-app" }
};

export default function ClientAppPage() {
  return (
    <main className="bg-[#eef3f8] text-slate-950 dark:bg-ink dark:text-white">
      <Section
        eyebrow="Client Mobile App"
        title="A clean client interface for payments, SEO reports, posts, blogs and support."
        copy="This page previews the client-side app experience. Later it can become a React Native/Expo mobile app connected to billing and Firebase notifications."
      >
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div className="mx-auto w-full max-w-[390px] rounded-[2.2rem] border-[10px] border-slate-950 bg-slate-950 p-3 shadow-premium">
            <div className="overflow-hidden rounded-[1.55rem] bg-[#f7fafc] text-slate-950">
              <div className="bg-slate-950 px-5 pb-6 pt-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/50">Welcome back</p>
                    <h1 className="text-xl font-semibold">Royal Kitchens</h1>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Bell className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="mt-5 rounded-[1rem] bg-amber-400 p-4 text-slate-950">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5" aria-hidden />
                    <p className="font-semibold">Payment Pending</p>
                  </div>
                  <p className="mt-2 text-sm text-slate-800">Pay today to keep services active.</p>
                  <button className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white" type="button">
                    Pay Now
                  </button>
                </div>
              </div>

              <div className="grid gap-4 p-5">
                <div className="rounded-[1rem] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cobalt">Google ranking</p>
                      <h2 className="mt-1 text-lg font-semibold">Keyword movement</h2>
                    </div>
                    <TrendingUp className="h-5 w-5 text-emerald-500" aria-hidden />
                  </div>
                  <div className="mt-4 flex h-28 items-end gap-2">
                    {rankingTrend.map((item) => (
                      <div key={item.month} className="flex flex-1 flex-col items-center gap-1">
                        <span className="w-full rounded-t bg-gradient-to-t from-cobalt to-signal" style={{ height: `${100 - item.rank}%` }} />
                        <span className="text-[10px] font-semibold text-slate-400">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {clientFeed.map((item) => (
                  <div
                    key={item.title}
                    className={
                      item.tone === "alert"
                        ? "rounded-[1rem] border border-amber-200 bg-amber-50 p-4"
                        : item.tone === "success"
                          ? "rounded-[1rem] border border-emerald-100 bg-emerald-50 p-4"
                          : "rounded-[1rem] bg-white p-4 shadow-sm"
                    }
                  >
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white" type="button">
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    WhatsApp
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white" type="button">
                    <Phone className="h-4 w-4" aria-hidden />
                    Hotline
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.5rem] bg-white p-7 shadow-sm dark:bg-white/6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cobalt">Client experience</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Everything the client needs, without giving them internal complexity.</h2>
              <p className="mt-5 leading-8 text-slate-600 dark:text-white/62">
                Clients can see payment status, project status, SEO graph, social media work done, blogs, offers and direct support.
                If admin puts project on hold, the app shows a professional pause message.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Payment alerts", "Billing signal creates Pay Now banner"],
                ["Project status", "Active, Hold or Payment Due visibility"],
                ["FCM ready", "Plan expiry push notifications"]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[1rem] bg-slate-950 p-5 text-white shadow-sm">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{copy}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] bg-white p-7 shadow-sm dark:bg-white/6">
              <div className="flex items-center gap-3">
                <Flame className="h-6 w-6 text-ember" aria-hidden />
                <h2 className="text-2xl font-semibold">Daily offers feed</h2>
              </div>
              <div className="mt-5 grid gap-3">
                {offers.map((offer) => (
                  <div key={offer} className="flex gap-3 rounded-[8px] bg-slate-100 p-4 dark:bg-white/8">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-cobalt" aria-hidden />
                    <p className="text-sm leading-6">{offer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
