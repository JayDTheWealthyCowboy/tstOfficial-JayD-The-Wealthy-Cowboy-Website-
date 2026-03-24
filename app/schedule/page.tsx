import { Metadata } from "next";
import { Section, Container } from "@/components/LayoutUtils";
import { Check } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Book a Free Credit Consultation | JayD The Wealthy Cowboy\u2122",
  description: "Book your free credit consultation and get a direct review of what is affecting your profile and what to do next.",
};

export default function SchedulePage() {
  return (
    <div className="pb-20">
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <Section className="pt-32 pb-10">
        <Container className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            BOOK YOUR FREE CREDIT CONSULTATION
          </h1>
          <p className="text-text-secondary font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Pick a time that works for you and let&apos;s look at what is really holding your profile back.
          </p>
          <div className="w-full h-px bg-gold-primary/20 mt-8 max-w-3xl mx-auto" />
        </Container>
      </Section>

      {/* ── TWO-COLUMN INFO BLOCK ───────────────────────────────── */}
      <Section className="py-12" light>
        <Container className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column */}
            <div className="bg-white rounded-sm border border-warm-cream p-8 shadow-sm space-y-6">
              <h3 className="text-depth-1 text-sm font-bold uppercase tracking-widest !text-[13px]">
                What we cover
              </h3>
              <ul className="space-y-3">
                {[
                  "What is hurting your credit profile",
                  "What stands out right away",
                  "Which path makes the most sense",
                  "Whether you are positioned for stronger approvals or funding",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-depth-3/80 font-inter text-sm leading-relaxed">
                    <Check size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2 space-y-2 border-t border-warm-cream">
                <div className="flex gap-2">
                  <span className="text-gold-primary font-inter text-xs font-bold uppercase tracking-widest">Best for:</span>
                  <span className="text-depth-3/70 font-inter text-xs leading-relaxed">People with poor, fair, or confusing credit who want clarity before making a move</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gold-primary font-inter text-xs font-bold uppercase tracking-widest">Length:</span>
                  <span className="text-depth-3/70 font-inter text-xs">About 15 minutes</span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <div className="bg-white rounded-sm border border-warm-cream p-8 shadow-sm space-y-5">
                <h3 className="text-depth-1 text-sm font-bold uppercase tracking-widest !text-[13px]">
                  Have this ready
                </h3>
                <ul className="space-y-3">
                  {[
                    "Access to your current credit report",
                    "A rough idea of your goals",
                    "Any major concerns you want answered",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-depth-3/80 font-inter text-sm leading-relaxed">
                      <Check size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-sm border border-warm-cream p-8 shadow-sm space-y-5">
                <h3 className="text-depth-1 text-sm font-bold uppercase tracking-widest !text-[13px]">
                  What happens after
                </h3>
                <ul className="space-y-3">
                  {[
                    "You get direct feedback",
                    "You understand your next best step",
                    "If there is a fit for further help, we will explain it clearly",
                    "No pressure if you are not ready",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-depth-3/80 font-inter text-sm leading-relaxed">
                      <Check size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── FORM / SCHEDULER ────────────────────────────────────── */}
      <Section className="py-16">
        <Container className="max-w-4xl mx-auto space-y-8">
          {/* Pre-Qualification Form Embed */}
          <div className="w-full min-h-[800px] bg-depth-vignette border border-gold-primary/20 rounded-sm overflow-hidden relative">
            <iframe
              src="https://links.jaydthewealthycowboy.com/widget/form/sWmDpdF77QELVETbSvIN"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '800px' }}
              id="inline-sWmDpdF77QELVETbSvIN"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Credit Consulting Pre-Qualification"
              data-height="3453"
              data-layout-iframe-id="inline-sWmDpdF77QELVETbSvIN"
              data-form-id="sWmDpdF77QELVETbSvIN"
              title="Credit Consulting Pre-Qualification"
            />
            <Script
              src="https://links.jaydthewealthycowboy.com/js/form_embed.js"
              strategy="afterInteractive"
            />
          </div>

          <p className="text-text-muted font-inter text-[10px] uppercase tracking-widest max-w-xl mx-auto leading-relaxed text-center">
            By booking, you acknowledge that results vary and depend on your individual profile and follow-through.
          </p>
        </Container>
      </Section>
    </div>
  );
}
