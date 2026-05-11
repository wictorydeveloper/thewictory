import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2";
  const styles = {
    primary: "bg-ink text-white shadow-premium hover:-translate-y-0.5 hover:bg-black dark:bg-white dark:text-ink",
    secondary:
      "border border-black/10 bg-white/70 text-ink hover:-translate-y-0.5 hover:border-black/20 dark:border-white/14 dark:bg-white/8 dark:text-white",
    ghost: "text-ink hover:bg-black/5 dark:text-white dark:hover:bg-white/8"
  };
  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {children}
      {variant !== "ghost" && <ArrowRight className="h-4 w-4" aria-hidden />}
    </Link>
  );
}

export function CtaRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", compact && "sm:items-center")}>
      <ButtonLink href="/contact">Book Strategy Call</ButtonLink>
      <ButtonLink href="/services" variant="secondary">
        View Services
      </ButtonLink>
      <ButtonLink href={site.whatsapp} variant="ghost">
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp Us
      </ButtonLink>
    </div>
  );
}
