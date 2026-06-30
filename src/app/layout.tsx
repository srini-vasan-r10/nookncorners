import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N&C (nook & corner) | Auto-Rickshaw Advertising in Madurai",
  description: "Put your business on the streets of Madurai. your brand. every nook. every corner. Target customers with moving auto advertisements starting at just ₹150 for 2 weeks.",
  keywords: [
    "N&C",
    "nook & corner",
    "Nook and Corner Madurai",
    "Auto advertising Madurai",
    "Auto rickshaw advertising Madurai",
    "Local business marketing Madurai",
    "Madurai advertising agency",
    "Hyperlocal advertising Madurai"
  ],
  authors: [{ name: "N&C Team" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}
