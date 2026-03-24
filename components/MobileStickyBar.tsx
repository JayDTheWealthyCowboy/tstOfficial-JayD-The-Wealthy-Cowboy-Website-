"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (~600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 border-t border-gold-primary/30 bg-depth-1/95 backdrop-blur-md ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="flex gap-3 p-3 max-w-lg mx-auto">
        <Link
          href="/schedule"
          className="flex-1 text-center py-3 px-4 text-xs font-dm-sans font-semibold uppercase tracking-widest rounded-full green-gradient text-white animate-metallic-flow"
        >
          Book Free Consultation
        </Link>
        <Link
          href="/credit-video-analysis"
          className="flex-1 text-center py-3 px-4 text-xs font-dm-sans font-semibold uppercase tracking-widest rounded-full gold-gradient text-black"
        >
          Free Video Analysis
        </Link>
      </div>
    </div>
  );
}
