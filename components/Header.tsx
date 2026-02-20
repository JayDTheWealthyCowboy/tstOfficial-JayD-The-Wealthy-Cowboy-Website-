"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change / resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Schedule", href: "/schedule" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-depth-1/80 backdrop-blur-md border-gold-primary/30 py-4 shadow-xl"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo — smaller on mobile */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.PNG"
            alt="JayD The Wealthy Cowboy™"
            className="h-14 md:h-40 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-inter text-sm uppercase tracking-widest text-white/70 hover:text-gold-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — hidden on mobile */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="primary" size="md" href="/schedule">
            GET A FREE CREDIT CONSULTATION
          </Button>
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white/80 hover:text-gold-primary transition-colors"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 z-40 bg-depth-1/95 backdrop-blur-lg transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Spacer to push content below the header bar */}
        <div className="h-28" />

        <nav className="flex flex-col items-center space-y-6 px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-inter text-lg uppercase tracking-widest text-white/80 hover:text-gold-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 w-full flex justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/schedule"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GET A FREE CREDIT CONSULTATION
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
