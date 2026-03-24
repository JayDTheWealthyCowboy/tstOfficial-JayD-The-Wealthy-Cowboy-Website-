import { Metadata } from "next";
import { Section, Container } from "@/components/LayoutUtils";
import { Check } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About | JayD The Wealthy Cowboy\u2122",
  description: "Learn more about JayD The Wealthy Cowboy and the approach behind this credit and funding brand.",
};

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <Section className="pt-32 pb-16">
        <Container className="max-w-4xl mx-auto text-center">
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
            {/* Photo placeholder */}
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
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                JayD The Wealthy Cowboy was built for people who are tired of confusion, tired of denials, and tired of getting sold before they get real answers.
              </p>
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                This brand is about clarity, discipline, and results.
              </p>
              <p className="text-depth-3/80 font-inter text-base leading-relaxed">
                The goal is simple: review the file, tell the truth, build the right path, and help position serious people for better outcomes.
              </p>

              <div className="pt-4 space-y-3">
                {[
                  "Credit clarity",
                  "Approval-focused strategy",
                  "Funding direction",
                  "Serious execution",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={14} className="text-gold-primary flex-shrink-0" />
                    <span className="text-depth-1 font-inter text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <Section className="py-24">
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
        </Container>
      </Section>
    </div>
  );
}
