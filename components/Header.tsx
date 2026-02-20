"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link href="/" className="flex items-center">
          <img
            src="/logo.PNG"
            alt="JayD The Wealthy Cowboy™"
            className="h-24 md:h-40 w-auto object-contain hover:opacity-80 transition-opacity"
          />
        </Link>

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

        <div className="flex items-center space-x-4">
          <Button variant="primary" size="md" href="/schedule">
            GET A FREE CREDIT CONSULTATION
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
