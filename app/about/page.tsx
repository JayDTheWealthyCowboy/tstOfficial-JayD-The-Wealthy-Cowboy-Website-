import { Metadata } from "next";
import Link from "next/link";
import { Section, Container } from "@/components/LayoutUtils";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About | JayD The Wealthy Cowboy™",
  description:
    "Learn more about JayD The Wealthy Cowboy — the approach, the strategy, and why serious people choose this over generic credit repair.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <Section className="pt-32 pb-16">
        <Container className="max-w-4xl mx-auto text-center">
          <span className="text-gold-primary text-xs font-bold tracking-[0.5em] uppercase block mb-6">
            ABOUT
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            BUILT FOR PEOPLE WHO WANT REAL ANSWERS,<br />
            <span className="text-gold-primary">NOT FAKE PROMISES.</span>
          </h1>
          <div className="w-24 h-px bg-gold-primary/50 mx-auto" />
        </Container>
      </Section>

      {/* ── FOUNDER BLOCK ────────────────────────────────────── */}
      <Section className="py-16" light>
        <Container className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gold-primary shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <img
                  src="/jayd-hero.JPG"
                  alt="JayD The Wealthy Cowboy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl text-depth-1 font-trajan tracking-widest uppercase">
                The approach behind the brand
              </h2>
              <div className="w-16 h-px bg-gold-primary/50" />
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                I built this brand for people who are tired of getting denied, tired of bad advice, and tired of being sold before anybody even tells them the truth.
              </p>
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                This is not generic credit repair. This is about finding what&apos;s really hurting the file, cleaning up what can be cleaned up, and getting you positioned better for approvals and funding.
              </p>
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                The goal is straightforward: review the file, tell the truth, build the right path, and help serious people make stronger moves. If there&apos;s nothing worth fixing, you&apos;ll hear that too.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── WHY THIS IS DIFFERENT ────────────────────────────── */}
      <Section className="py-20">
        <Container className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl text-white leading-tight font-trajan tracking-widest uppercase mb-4">
              Why this is different
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "More than generic disputes",
                desc: "Most companies run the same play on everybody. I don\u2019t. The file gets looked at for what it actually is, and the strategy gets built from there.",
              },
              {
                title: "Approval-focused, not score-obsessed",
                desc: "A score matters, but it\u2019s not the whole story. The real goal is getting the full profile into a stronger position for approvals.",
              },
              {
                title: "Built for serious people",
                desc: "This is for serious people who want real movement \u2014 not cheap fixes, recycled advice, or somebody telling them what sounds good.",
              },
              {
                title: "Honest about what is possible",
                desc: "No fake promises. No made-up timelines. No telling you what you want to hear just to get your money.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-depth-3 border border-white/5 p-8 hover:border-gold-primary/30 transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />
                <h3 className="text-white font-inter text-sm font-semibold uppercase tracking-widest mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary font-inter text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── WHO THIS IS FOR ──────────────────────────────────── */}
      <Section className="py-20" light>
        <Container className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl text-depth-1 font-trajan tracking-widest uppercase">
                Who this is best for
              </h2>
              <div className="w-16 h-px bg-gold-primary/50" />
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                This is for people who are serious about cleaning up the file, getting positioned better, and making smarter moves with their credit and funding.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Entrepreneurs preparing for funding",
                "Homebuyers who want stronger approval odds",
                "Business owners building credibility with lenders",
                "Consumers tired of denials and weak profiles",
                "Auto buyers who want better terms",
                "People who have tried DIY and need real help",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check size={14} className="text-gold-primary flex-shrink-0" />
                  <span className="text-depth-1 font-inter text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── THE BRAND ────────────────────────────────────────── */}
      <Section className="py-20">
        <Container className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl text-white leading-tight font-trajan tracking-widest uppercase mb-4">
            The brand
          </h2>
          <div className="w-24 h-px bg-gold-primary/50 mx-auto" />
          <p className="text-text-secondary font-inter text-base leading-relaxed">
            This brand was built for people who are tired of getting denied, tired of bad advice, and tired of wasting time on the wrong moves.
          </p>
          <p className="text-text-secondary font-inter text-base leading-relaxed">
            The whole point is simple: find what&apos;s hurting the file, fix what can be fixed, and build a stronger path forward without the fake promises.
          </p>
          <div className="pt-4">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-gold-primary font-inter text-sm font-semibold tracking-widest uppercase hover:text-gold-bright transition-colors">
              See client results <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="py-24" dark>
        <Container className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl text-white leading-tight font-trajan tracking-widest uppercase">
            Ready to see where you stand?
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
          <div className="pt-2">
            <Link href="/services" className="text-text-secondary font-inter text-sm tracking-widest uppercase hover:text-gold-primary transition-colors">
              Explore All Services
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
