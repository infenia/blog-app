import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./ui/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { env } from "./env";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Infenia - Software Development Company",
  description: "Harnessing the Power of Technology to Create Extraordinary Solutions.",
  keywords:
    "software, products, development, design, architecture, seo, search engine optimization, artificial intelligence, machine learning, blockchain, solution, cloud",
  authors: [
    { name: "Infenia Private Limited", url: "https://www.infenia.com" },
  ],
  openGraph: {
    title: "Infenia - Next Gen Product Development Company",
    description:
      "Harnessing the Power of Technology to Create Extraordinary Solutions.",
    url: "https://www.infenia.com",
    images: [
      {
        url: "/favicon.ico",
        width: 48,
        height: 48,
      },
    ],
    siteName: "Infenia",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={env.GOOGLE_TAG_MANAGER_ID} />
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} font-sans bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300`}>
        <Analytics />
        <SpeedInsights />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
