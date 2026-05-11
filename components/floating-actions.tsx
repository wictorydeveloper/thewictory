"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <Link
        href={site.whatsapp}
        aria-label="WhatsApp The Wictory"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-signal text-ink shadow-glow transition hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
      </Link>
      <Link
        href="tel:+919876543210"
        aria-label="Call The Wictory"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-premium transition hover:scale-105 dark:bg-white dark:text-ink"
      >
        <Phone className="h-5 w-5" aria-hidden />
      </Link>
    </div>
  );
}
