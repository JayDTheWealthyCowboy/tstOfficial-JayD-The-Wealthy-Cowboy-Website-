"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Section, Container } from "@/components/LayoutUtils";
import { Check, ChevronDown, ChevronUp, Shield, Target, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

// ── FAQ DATA ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How fast can I see results?",
    a: "That depends on your starting profile, what is being challenged, and how quickly the bureaus or furnishers respond. Some people see movement faster than others. There are no guaranteed timelines."
  },
  {
    q: "Do you guarantee results?",
    a: "No. No honest company should guarantee exact outcomes on a credit profile. What I can do is review the file, identify issues, build the right plan, and help position you better."
  },
  {
    q: "Is the free consultation really free?",
    a: "Yes. The free consultation is a short review call to understand what is going on and point you toward the best next step."
  },
  {
    q: "What is the free video analysis?",
    a: "It is a personalized video review of your credit profile. I look at the file, explain what I see, and walk you through the next steps without making you sit through a call."
  },
  {
    q: "What if I have bankruptcies, collections, or charge-offs?",
    a: "That is common. The first step is to review the full file and see what is there, what is accurate, and what options make sense based on the overall profile."
  },
  {
    q: "Who is this best for?",
    a: "People who are serious about fixing their profile, improving approval odds, and putting themselves in a better position for funding."
  }
];

// ── RESULTS DATA ────────────────────────────────────────────────────────────
const results = [
  {
    title: "Mortgage-ready in 90 days",
    description: "Started with repeated denials and a weak profile. After cleanup and rebuilding, this client became mortgage-ready in about 90 days.",
    stat: "+112 pts"
  },
  {
    title: "800 score and $40K personal line",
    description: "After removals and profile rebuilding, this client reached the 800 club and secured a $40K personal line.",
    stat: "+134 pts"
  },
  {
    title: "$275K in 0% interest funding",
    description: "This client needed real capital and could not access it before. After the profile was positioned correctly, they secured $275K in 0% interest funding.",
    stat: "Funded"
  }
];

// ── FAQ ITEM ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/5 hover:border-gold-primary/20 transition-colors cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-6">
        <p className="text-white font-inter text-sm font-semibold tracking-wide pr-4">{q}</p>
        {open
          ? <ChevronUp size={16} className="text-gold-primary flex-shrink-0" />
          : <ChevronDown size={16} className="text-gold-primary/50 flex-shrink-0" />
        }
      </div>
      {open && (
        <div className="px-6 pb-6 border-t border-white/5">
          <p className="text-text-secondary font-inter text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── PAGE ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <Section className="pt-32 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-80 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)]">
          <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover grayscale brightness-75">
            <source src="/0219.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-depth-1 via-transparent to-depth-1 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-depth-1 via-transparent to-depth-1 opacity-80" />
        </div>

        <Container className="max-w-4xl text-center flex flex-col items-center relative z-10">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-14"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-2xl scale-150 pointer-events-none" />
            <div className="absolute -inset-6 border border-gold-primary/20 rounded-full animate-pulse" />
            <div className="absolute -inset-2 border border-gold-primary/40 rounded-full" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-gold-primary shadow-[0_0_60px_rgba(212,175,55,0.4),0_0_120px_rgba(255,255,255,0.06)]">
              <img src="/jayd-hero.JPG" alt="JayD The Wealthy Cowboy" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          <div className="space-y-8">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gold-primary text-xs font-bold tracking-[0.5em] uppercase block"
            >
              CREDIT REPAIR + FUNDING STRATEGY
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-trajan text-white leading-[1.15] text-glow uppercase tracking-[0.15em]"
            >
              Fix your credit profile<br />
              and position yourself<br />
              <span className="text-gold-primary">for real approvals.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              If your score starts with a 4, 5, or 6 — or you keep getting denied — I help you find what is hurting your file, clean it up, rebuild it the right way, and move toward better approvals and stronger funding options.
            </motion.p>

            {/* Dual CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center"
            >
              <Button href="/schedule" variant="primary" size="lg">
                BOOK FREE CONSULTATION
              </Button>
              <Button href="/credit-video-analysis" variant="gold" size="lg">
                GET FREE VIDEO ANALYSIS
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-text-muted font-inter text-xs tracking-widest uppercase"
            >
              No pressure. No guesswork. Real review.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* ── PROOF STRIP ───────────────────────────────────────────────── */}
      <div className="border-y border-gold-primary/15 bg-depth-vignette py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Clients Helped" },
              { stat: "80\u2013120+", label: "Point improvements seen by many clients" },
              { stat: "$275K", label: "Largest single funding result shown on this site" },
              { stat: "90 Days", label: "Average time to early visible progress for many clients" },
            ].map((item) => (
              <div key={item.stat} className="space-y-2">
                <p className="text-gold-primary font-trajan text-2xl md:text-3xl tracking-wide">{item.stat}</p>
                <p className="text-text-secondary font-inter text-xs leading-relaxed max-w-[180px] mx-auto">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted font-inter text-[10px] text-center mt-6 tracking-wide">
            Results vary based on your starting profile, documentation, response timelines, and participation.
          </p>
        </Container>
      </div>

      {/* ── IS THIS YOU? ────────────────────────────────────────────────── */}
      <Section className="py-28">
        <Container className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h2 className="text-2xl md:text-4xl text-white leading-tight font-trajan tracking-widest">
              If this sounds like you, you&apos;re in the right place.
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                "You keep getting denied and do not fully know why",
                "Your score starts with a 4, 5, or 6",
                "Collections, charge-offs, or lates are holding you back",
                "You want better approval odds and stronger funding options",
                "You tried to fix it yourself and did not get far",
                "You want a real plan, not more guesswork",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 border border-gold-primary/40 flex items-center justify-center">
                    <Check size={12} className="text-gold-primary" />
                  </div>
                  <p className="text-text-secondary font-inter text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="/credit-video-analysis" variant="gold" size="lg">
                SEE WHERE YOUR PROFILE STANDS
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ── HOW THIS WORKS ───────────────────────────────────────────── */}
      <Section className="py-28" light>
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-trajan text-depth-1 tracking-widest uppercase mb-4">
              How this works
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto mb-6" />
            <p className="text-depth-3 font-inter text-base max-w-2xl mx-auto leading-relaxed">
              A simple process built to find the problem, fix what can be fixed, and move you toward better approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Review the full picture",
                desc: "We look at your report, your negative items, your score factors, and the patterns that are holding you back."
              },
              {
                step: "02",
                title: "Build the game plan",
                desc: "We identify what needs attention first, what can be challenged, and what needs to be rebuilt to strengthen your profile."
              },
              {
                step: "03",
                title: "Take action",
                desc: "Depending on the path you choose, we guide the process, document the issues, and help move your profile in the right direction."
              },
              {
                step: "04",
                title: "Position for approvals",
                desc: "Once the file is stronger, the goal is not just a cleaner report \u2014 it is better approval odds, better terms, and better funding opportunities."
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-sm border border-warm-cream p-8 shadow-sm"
              >
                <span className="text-gold-primary/40 font-trajan text-4xl font-bold leading-none block mb-4">
                  {item.step}
                </span>
                <h3 className="text-depth-1 text-sm font-bold uppercase tracking-widest mb-3 !text-[13px]">
                  {item.title}
                </h3>
                <p className="text-depth-3/80 font-inter text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-depth-3/60 font-inter text-xs text-center mt-10">
            No real results happen without the right profile, the right follow-through, and realistic expectations.
          </p>
        </Container>
      </Section>

      {/* ── PROOF / RESULTS ──────────────────────────────────────────── */}
      <Section className="py-28" dark>
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-trajan text-white tracking-widest uppercase mb-4">
              Real results. Real movement.
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto mb-6" />
            <p className="text-text-secondary font-inter text-base max-w-2xl mx-auto leading-relaxed">
              People do not come here because they want fancy language. They come here because they want to stop getting denied and finally understand what to do next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-depth-3 border border-white/5 p-8 hover:border-gold-primary/30 transition-all flex flex-col"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-white font-inter font-semibold text-sm !normal-case !tracking-normal !leading-snug">{r.title}</h3>
                  <span className="text-gold-primary font-trajan text-lg font-bold ml-3 flex-shrink-0">{r.stat}</span>
                </div>
                <p className="text-text-secondary font-inter text-sm leading-relaxed flex-grow">{r.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-text-muted font-inter text-xs text-center mt-8">
            Every file is different. Results vary. These examples are not a guarantee of what any individual will receive.
          </p>
        </Container>
      </Section>

      {/* ── FOUNDER TRUST BLOCK ──────────────────────────────────────── */}
      <Section className="py-28">
        <Container className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl text-white leading-tight font-trajan tracking-widest uppercase">
                Why people trust me with this
              </h2>
              <div className="w-24 h-px bg-gold-primary/50" />
              <p className="text-text-secondary font-inter text-base leading-relaxed">
                I built this brand for people who are tired of getting bad advice, vague answers, and fake promises.
              </p>
              <p className="text-text-secondary font-inter text-base leading-relaxed">
                My job is to look at the file, tell the truth, find what is hurting it, and help build a stronger path forward.
              </p>
              <p className="text-text-secondary font-inter text-base leading-relaxed">
                No fluff. No mystery. No pressure.<br />
                Just a serious review and a real plan.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Shield, label: "Clear answers" },
                { icon: Target, label: "Serious strategy" },
                { icon: TrendingUp, label: "Real review" },
                { icon: Users, label: "Built for people who want results" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex items-center gap-4 p-5 border border-white/5 hover:border-gold-primary/20 transition-colors"
                >
                  <item.icon size={20} className="text-gold-primary flex-shrink-0" />
                  <span className="text-white font-inter text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FREE VIDEO ANALYSIS PROMO ────────────────────────────────── */}
      <Section className="py-24" light>
        <Container className="max-w-4xl mx-auto">
          <div className="relative border border-gold-primary/25 bg-white rounded-sm p-10 md:p-16 text-center overflow-hidden shadow-sm">
            <div className="relative z-10 space-y-6">
              <span className="text-gold-primary text-xs font-bold tracking-[0.5em] uppercase block">FREE REVIEW OPTION</span>
              <h2 className="text-2xl md:text-4xl font-trajan text-depth-1 tracking-widest uppercase leading-tight">
                Not ready to book a call?<br />
                <span className="text-gold-primary">Start with a free video analysis.</span>
              </h2>
              <p className="text-depth-3/80 font-inter text-base leading-relaxed max-w-2xl mx-auto">
                Submit your information and I will review your credit profile and send you a personalized video breakdown of what I see, what is hurting your file, and what direction makes the most sense from here.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <div className="flex items-center gap-2 text-depth-3/60 font-inter text-xs">
                  <Check size={12} className="text-gold-primary" /> No booked call required
                </div>
                <div className="flex items-center gap-2 text-depth-3/60 font-inter text-xs">
                  <Check size={12} className="text-gold-primary" /> No pressure
                </div>
                <div className="flex items-center gap-2 text-depth-3/60 font-inter text-xs">
                  <Check size={12} className="text-gold-primary" /> Personalized to your profile
                </div>
              </div>
              <div className="pt-4">
                <Button href="/credit-video-analysis" variant="gold" size="lg">
                  GET FREE VIDEO ANALYSIS
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <Section className="py-24" dark>
        <Container className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-trajan text-white tracking-widest uppercase mb-4">Common questions</h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto" />
          </div>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <Section className="py-32 pb-40">
        <Container className="text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-4xl text-white leading-tight font-trajan tracking-widest uppercase">
              Ready to stop guessing and see where you really stand?
            </h2>
            <p className="text-text-secondary font-inter text-base">
              Choose the path that fits you best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button href="/schedule" variant="primary" size="lg">
                BOOK FREE CONSULTATION
              </Button>
              <Button href="/credit-video-analysis" variant="gold" size="lg">
                GET FREE VIDEO ANALYSIS
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
