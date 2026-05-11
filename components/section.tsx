import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, copy, children, className }: SectionProps) {
  return (
    <section className={cn("px-5 py-20 sm:px-8 lg:px-10", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || copy) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cobalt">{eyebrow}</p>}
            {title && <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>}
            {copy && <p className="mt-5 text-lg leading-8 text-black/64 dark:text-white/64">{copy}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
