import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/cta";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  ["Services", "/services"],
  ["Packages", "/packages"],
  ["Case Studies", "/case-studies"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/6 bg-pearl/78 px-5 py-3 backdrop-blur-2xl dark:border-white/8 dark:bg-ink/72 sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white dark:bg-white dark:text-ink">
            <Sparkles className="h-4 w-4" aria-hidden />
          </span>
          <span>The Wictory</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-black/64 dark:text-white/64 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-black dark:hover:text-white">
              {label}
            </Link>
          ))}
          <Link href="/digital-marketing-agency-in-chandigarh" className="transition hover:text-black dark:hover:text-white">
            SEO Cities
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ButtonLink href="/contact" className="hidden sm:inline-flex">
            Get Consultation
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
