import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/site";

export function ServicesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <a
          key={service.slug}
          id={service.slug}
          href={`/services#${service.slug}`}
          className="group rounded-[1rem] border border-black/8 bg-white/72 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/6"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
            <ArrowUpRight className="h-5 w-5 text-black/38 transition group-hover:text-cobalt dark:text-white/38" aria-hidden />
          </div>
          <p className="mt-4 text-sm leading-7 text-black/58 dark:text-white/58">{service.solution}</p>
        </a>
      ))}
    </div>
  );
}
