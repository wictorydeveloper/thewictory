import { CtaRow } from "@/components/cta";

export function FinalCta() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-premium sm:p-12 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">Build the next big brand</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              Your audience is already moving. Let’s make them move toward you.
            </h2>
          </div>
          <div>
            <p className="mb-6 text-lg leading-8 text-white/64">
              Book a strategy call and get a sharp growth diagnosis across brand, content, paid media, and AI systems.
            </p>
            <CtaRow compact />
          </div>
        </div>
      </div>
    </section>
  );
}
