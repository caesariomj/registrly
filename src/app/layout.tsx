import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  DM_Mono,
  Instrument_Serif,
} from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "My POS App";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

const dmMono = DM_Mono({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${appName}`,
    default: `${appName}`,
  },
  description: `${appName} is the all-in-one POS app designed to simplify checkout, track inventory, and help small businesses sell anywhere. Try it free today.`,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        bricolageGrotesque.variable,
        dmMono.variable,
        instrumentSerif.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
