import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingActions } from "@/components/floating-actions";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Wictory | AI-Powered Digital Marketing Agency in Tricity",
    template: "%s | The Wictory"
  },
  description: site.description,
  keywords: [
    "Digital Marketing Agency in Tricity",
    "AI Marketing Company",
    "Social Media Marketing",
    "Brand Building Agency",
    "Content Creation Agency",
    "Instagram Growth Agency",
    "Performance Marketing"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "The Wictory | AI-Powered Marketing That Creates Market Leaders",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wictory",
    description: site.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <div className="noise" />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
