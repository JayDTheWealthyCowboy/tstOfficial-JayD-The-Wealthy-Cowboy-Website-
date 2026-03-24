import type { Metadata } from "next";
import { Inter, DM_Sans, Cinzel } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisualEffects from "@/components/VisualEffects";
import MobileStickyBar from "@/components/MobileStickyBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://JayDTheWealthyCowboy.ai"),
  title: "JayD The Wealthy Cowboy\u2122 | Credit Repair & Funding Strategy",
  description: "Credit repair and funding strategy for people who want better approvals, cleaner profiles, and a clear path forward.",
  openGraph: {
    title: "JayD The Wealthy Cowboy\u2122 | Credit Repair & Funding Strategy",
    description: "Credit repair and funding strategy for people who want better approvals, cleaner profiles, and a clear path forward.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "JayD The Wealthy Cowboy\u2122",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JayD The Wealthy Cowboy\u2122 | Credit Repair & Funding Strategy",
    description: "Credit repair and funding strategy for people who want better approvals, cleaner profiles, and a clear path forward.",
    images: ["/og-image.jpeg"],
  },
  icons: {
    icon: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* TikTok Pixel Code Start */}
        <Script id="tiktok-pixel" strategy="afterInteractive">{`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
            ttq.load('D6MJQF3C77U3SAC8AOP0');
            ttq.page();
          }(window, document, 'ttq');
        `}</Script>
        {/* TikTok Pixel Code End */}
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} ${cinzel.variable} antialiased bg-depth-1 min-h-screen selection:bg-gold-primary/30 selection:text-white`}
      >
        <div className="bg-dimensional min-h-screen flex flex-col relative overflow-hidden">
          {/* Layer 1: Base Background */}
          <div className="absolute inset-0 bg-dimensional pointer-events-none z-0" />

          {/* Layer 2: Vignette */}
          <div className="bg-vignette absolute inset-0 z-5 pointer-events-none" />

          {/* Layer 3: Visual Overlays (Client-side Only) */}
          <VisualEffects />

          {/* Layer 4: Content */}
          <div className="relative z-20 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-24 min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </div>

        {/* Mobile Sticky CTA Bar */}
        <MobileStickyBar />
      </body>
    </html>
  );
}
