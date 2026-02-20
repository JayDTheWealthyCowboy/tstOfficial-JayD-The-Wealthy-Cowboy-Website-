"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Section, Container } from "@/components/LayoutUtils";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-48 relative overflow-hidden">
        {/* Cinematic Background Video */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover grayscale brightness-75"
          >
            <source src="/0219.mp4" type="video/mp4" />
          </video>
          {/* Deep Vignette Fade for Video Transitions */}
          <div className="absolute inset-0 bg-gradient-to-t from-depth-1 via-transparent to-depth-1 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-depth-1 via-transparent to-depth-1 opacity-80" />
        </div>

        <Container className="max-w-4xl text-center flex flex-col items-center relative z-10">
          {/* Hero Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-16"
          >
            <div className="absolute -inset-6 border border-gold-primary/20 rounded-full animate-pulse" />
            <div className="absolute -inset-2 border border-gold-primary/40 rounded-full" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-gold-primary shadow-[0_0_60px_rgba(212,175,55,0.4)]">
              <img
                src="/jayd-hero.JPG"
                alt="JayD The Wealthy Cowboy"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl lg:text-8xl font-trajan text-white leading-[1.1] text-glow uppercase tracking-[0.2em]"
            >
              HERE IN THE WEST,<br />
              <span className="text-gold-primary relative inline-block group">
                CREDIT IS POWER.
                <span className="absolute inset-0 text-shimmer opacity-80 pointer-events-none">CREDIT IS POWER.</span>
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl font-trajan text-white/90 tracking-[0.15em] uppercase leading-tight"
            >
              YOU GET TO DECIDE<br />
              HOW MUCH YOU HAVE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-inter text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              JayD the Wealthy Cowboy is a credit consultant and advanced funding Strategist who's able to take any profile, business credit or personal credit, clean and build it out to a level that you never knew possible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 pt-6 justify-center"
            >
              <Button href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto">
                GET A FREE CREDIT CONSULTATION
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Value Points & Proof */}
      <Section className="relative border-y border-gold-primary/10 bg-depth-2/50 overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Value Points - The Strategy */}
            <div className="space-y-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-trajan text-white tracking-widest uppercase italic">THE STRATEGY</h2>
                <div className="w-24 h-1 bg-gold-primary/40" />
              </div>

              <div className="grid gap-6">
                {[
                  "Expose what’s wrong.",
                  "Force compliance.",
                  "Rebuild leverage.",
                  "Return to the market approval-ready."
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group flex items-center p-6 bg-white/2 border border-white/5 hover:border-gold-primary/40 transition-all duration-500 rounded-sm glassmorphic"
                  >
                    <div className="w-12 h-12 flex-shrink-0 border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center text-gold-primary mr-6 group-hover:bg-gold-primary group-hover:text-black transition-colors duration-500">
                      <Check size={24} />
                    </div>
                    <span className="font-trajan text-xl text-white/90 tracking-widest uppercase group-hover:text-gold-primary transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Proof - Proven Performance */}
            <div className="space-y-16">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-trajan text-white tracking-widest uppercase italic">PROVEN PERFORMANCE</h2>
                <div className="w-24 h-1 bg-gold-primary/40" />
              </div>

              <div className="space-y-8 font-inter">
                {[
                  "80–120+ point increases per bureau",
                  "Major derogatories removed",
                  "From constant denials to funded approvals"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className="relative p-8 md:p-10 bg-gold-primary/2 border-l-4 border-gold-primary/60 backdrop-blur-md overflow-hidden group hover:border-gold-primary transition-all duration-700"
                  >
                    {/* Background Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    <p className="relative text-xl md:text-2xl text-text-secondary leading-relaxed tracking-wide italic flex items-start">
                      <span className="mr-4 text-gold-primary text-3xl leading-none mt-[-2px]">»</span>
                      <span className="text-white group-hover:text-glow transition-all">{item}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gold Highlight Block */}
      <Section className="relative py-32 overflow-hidden">
        <Container className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-12 md:p-20 bg-depth-2/40 border-t border-b border-gold-primary/20 backdrop-blur-sm"
          >
            {/* Elegant Corner Brackets */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold-primary/40" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold-primary/40" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold-primary/40" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold-primary/40" />

            <div className="space-y-12 relative z-10">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-gold-primary font-inter text-[10px] font-bold tracking-[0.6em] uppercase opacity-80">
                  Documented Results
                </span>
                <div className="w-12 h-px bg-gold-primary/40" />
              </div>

              <div className="space-y-4">
                <p className="text-white/60 font-trajan text-sm tracking-[0.4em] uppercase">
                  Average Credit Access After our Services*
                </p>
                <h2 className="text-6xl md:text-8xl font-trajan text-gold-primary tracking-tighter shimmer-text py-2">
                  $20,000 – $35,000
                </h2>
              </div>

              <div className="flex items-center justify-center space-x-6">
                <div className="w-full h-px bg-gradient-to-r from-transparent to-gold-primary/30" />
                <p className="text-white font-trajan text-base md:text-lg tracking-[0.25em] uppercase whitespace-nowrap italic">
                  Institutional Power Restored
                </p>
                <div className="w-full h-px bg-gradient-to-l from-transparent to-gold-primary/30" />
              </div>
            </div>

            {/* Subtle Inner Border */}
            <div className="absolute inset-2 border border-gold-primary/5 pointer-events-none" />
          </motion.div>

          <p className="mt-12 text-text-muted font-inter text-xs uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
            *Results vary. No guarantee of specific approvals or amounts. Based on client history
            following full profile build-out and underwriting compliance.
          </p>
        </Container>
      </Section>

      {/* Final Bottom CTA */}
      <Section className="pb-40">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl text-white leading-tight">
              READY TO TAKE CONTROL<br />
              OF YOUR CREDIT?
            </h2>
            <Button href="/schedule" variant="primary" size="lg" className="w-full sm:w-auto">
              GET A FREE CREDIT CONSULTATION
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
