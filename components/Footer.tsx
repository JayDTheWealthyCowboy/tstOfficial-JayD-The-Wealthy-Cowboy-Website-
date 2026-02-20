import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Video } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-depth-vignette border-t border-gold-primary/20 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <img
                src="/logo.PNG"
                alt="JayD The Wealthy Cowboy™"
                className="h-32 md:h-48 w-auto object-contain self-start"
              />
            </div>
            <div className="space-y-4">
              <h4 className="text-white text-xs font-bold tracking-widest uppercase">Contact</h4>
              <div className="space-y-2 font-inter text-sm text-text-secondary">
                <p>support@jaydthewealthycowboy.ai</p>
                <p>903-714-1234</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Navigation</h4>
            <div className="grid grid-cols-1 gap-4 font-inter text-sm text-text-secondary">
              <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
              <Link href="/services" className="hover:text-gold-primary transition-colors">Services</Link>
              <Link href="/schedule" className="hover:text-gold-primary transition-colors">Schedule</Link>
              <Link href="/terms" className="hover:text-gold-primary transition-colors">Terms</Link>
              <Link href="/refund" className="hover:text-gold-primary transition-colors">Refund/Cancellation</Link>
              <Link href="/privacy" className="hover:text-gold-primary transition-colors">Privacy</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Legal</h4>
            <div className="font-inter text-sm text-text-muted leading-relaxed">
              <p>
                Centaur Elite Consulting LLC provides financial education and consulting services.
                Results vary. No guarantees.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Connect</h4>
            <p className="font-inter text-xs text-text-secondary italic">
              “Follow the brand. Watch the results. Stay informed.”
            </p>
            <div className="flex items-center space-x-10 text-text-secondary">
              <a href="https://www.tiktok.com/@jaydthewealthycowboy" target="_blank" rel="noopener noreferrer" className="hover:text-gold-primary transition-all hover:scale-110" aria-label="TikTok">
                <Video size={32} />
              </a>
              <a href="https://www.instagram.com/jaydthewealthycowboy?igsh=NG9nam16azd4bHVz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-gold-primary transition-all hover:scale-110" aria-label="Instagram">
                <Instagram size={32} />
              </a>
              <a href="#" className="hover:text-gold-primary transition-all hover:scale-110" aria-label="Facebook">
                <Facebook size={32} />
              </a>
              <a href="#" className="hover:text-gold-primary transition-all hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-muted uppercase tracking-[0.2em] font-inter">
          <p>© {currentYear} CENTAUR ELITE CONSULTING LLC. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR EXCELLENCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
