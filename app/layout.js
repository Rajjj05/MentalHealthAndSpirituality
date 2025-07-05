import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { Suspense } from "react";
import ServiceWorkerRegistration from "./components/ServiceWorkerRegistration";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Loading from "./loading"; // Import custom loading component

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-inter bg-gradient-to-br from-lavender-50 to-sage-50 dark:from-slate-900 dark:to-slate-800 min-h-screen transition-colors duration-300">
        <ServiceWorkerRegistration />
        <PerformanceMonitor />
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Suspense
              fallback={
                <div className="h-20 bg-white/80 dark:bg-slate-900/80" />
              }
            >
              <Header />
            </Suspense>
            <main className="flex-grow">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Suspense
              fallback={
                <div className="h-16 bg-white/80 dark:bg-slate-900/80" />
              }
            >
              <Footer />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Serenity AI - Mental Health & Spiritual Wellness",
  description:
    "AI-powered support for mental clarity, emotional well-being, and spiritual growth",
  generator: "v0.dev",
  keywords: "mental health, AI, wellness, meditation, emotional support",
  authors: [{ name: "Serenity AI" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#9d75ff" },
    { media: "(prefers-color-scheme: dark)", color: "#8b5cf6" },
  ],
};
