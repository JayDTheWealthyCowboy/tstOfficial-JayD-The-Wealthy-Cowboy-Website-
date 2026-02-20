import type { Metadata } from "next";
import { Inter, DM_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisualEffects from "@/components/VisualEffects";

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
  title: "JayD The Wealthy Cowboy™ | Luxury Institutional Credit Authority",
  description: "Generate high-volume consultation bookings with JayD The Wealthy Cowboy™. Expert credit consulting, funding strategies, and institutional capital access.",
  openGraph: {
    title: "JayD The Wealthy Cowboy™ | Luxury Institutional Credit Authority",
    description: "Generate high-volume consultation bookings with JayD The Wealthy Cowboy™. Expert credit consulting, funding strategies, and institutional capital access.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "JayD The Wealthy Cowboy™",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JayD The Wealthy Cowboy™ | Luxury Institutional Credit Authority",
    description: "Generate high-volume consultation bookings with JayD The Wealthy Cowboy™. Expert credit consulting, funding strategies, and institutional capital access.",
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
      <body
        className={`${inter.variable} ${dmSans.variable} ${cinzel.variable} antialiased bg-depth-1 min-h-screen selection:bg-gold-primary/30 Selection:text-white`}
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
      </body>
    </html>
  );
}
