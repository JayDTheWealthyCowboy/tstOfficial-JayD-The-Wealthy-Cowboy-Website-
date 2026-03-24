import { Metadata } from "next";
import { Section, Container } from "@/components/LayoutUtils";
import { Check, ShieldCheck, Video, FileSearch, MessageSquare } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Free Credit Video Analysis | JayD The Wealthy Cowboy\u2122",
  description: "Get a personalized video review of your credit profile and see what is hurting your file and what direction makes sense next.",
};

const steps = [
  {
    number: "01",
    title: "Fill out the form",
    description: "Submit your basic information and the credit monitoring details needed for the review.",
  },
  {
    number: "02",
    title: "I review the profile",
    description: "I look at the report, the negative items, the score factors, and the overall picture.",
  },
  {
    number: "03",
    title: "You get a personalized video",
    description: "I record a custom video walking you through what I found and what stands out.",
  },
  {
    number: "04",
    title: "You decide what to do next",
    description: "No pressure. If you want help, we can talk. If not, you still leave with real insight.",
  },
];

const whatYouReceive = [
  "A personalized video review",
  "A breakdown of what is hurting your profile",
  "The biggest issues that stand out",
  "Direction on what should happen next",
  "A clearer idea of how to move toward better scores and stronger funding options",
];

export default function CreditVideoAnalysisPage() {
  return (
    <div className="pb-20">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <Section className="pt-32 pb-10">
        <Container className="text-center max-w-4xl mx-auto">
          <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-6">
            FREE OFFER
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            I&apos;LL REVIEW YOUR CREDIT PROFILE<br />
            <span className="text-gold-primary">AND SEND YOU A PERSONAL VIDEO.</span>
          </h1>
          <p className="text-text-secondary font-inter text-lg leading-relaxed max-w-2xl mx-auto">
            No booked call. No pressure. Just a real breakdown of what I see and what direction makes sense from here.
          </p>
          <div className="w-full h-px bg-gold-primary/20 mt-12 max-w-3xl mx-auto" />
        </Container>
      </Section>

      {/* ── VSL PLACEHOLDER ──────────────────────────────────── */}
      <Section className="py-10">
        <Container className="max-w-3xl mx-auto">
          <div className="relative w-full aspect-video bg-black border border-gold-primary/20 overflow-hidden">
            <video
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/copy_399C4167-22B3-4533-89DB-CF3DACCC8E4D.mp4" type="video/mp4" />
            </video>
          </div>
        </Container>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <Section className="py-20" dark>
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4">
              HERE&apos;S EXACTLY WHAT HAPPENS
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative bg-depth-3 border border-white/5 p-8 transition-all hover:border-gold-primary/30"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />
                <span className="text-gold-primary/30 font-trajan text-5xl font-bold leading-none block mb-4">
                  {step.number}
                </span>
                <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── TRUST / SAFETY SECTION ───────────────────────────── */}
      <Section className="py-20" light>
        <Container className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Why I ask for your login */}
            <div className="bg-white rounded-sm border border-warm-cream p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck size={22} className="text-gold-primary" />
                <h3 className="text-depth-1 text-sm font-bold uppercase tracking-widest !text-[13px]">
                  Why I ask for your monitoring login
                </h3>
              </div>
              <p className="text-depth-3/80 font-inter text-sm leading-relaxed">
                To give you a real review, I need to see the full report the way you see it. That lets me review the negative items, score factors, and overall structure of the file instead of guessing from partial information.
              </p>
              <ul className="space-y-2">
                {[
                  "Used only for your review",
                  "Not sold or shared",
                  "Intended only to access the report for analysis",
                  "If you are not comfortable submitting login access, book a consultation instead",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-depth-3/70 font-inter text-sm leading-relaxed">
                    <Check size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-depth-3/50 font-inter text-xs">
                Only request the platform you actually use for this review process.
              </p>
            </div>

            {/* What you'll receive */}
            <div className="bg-white rounded-sm border border-warm-cream p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <Video size={22} className="text-gold-primary" />
                <h3 className="text-depth-1 text-sm font-bold uppercase tracking-widest !text-[13px]">
                  What you&apos;ll receive
                </h3>
              </div>
              <ul className="space-y-3">
                {whatYouReceive.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-depth-3/80 font-inter text-sm leading-relaxed">
                    <Check size={14} className="text-gold-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-depth-3/50 font-inter text-xs">
                Most reviews are returned within 48 hours.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── WHY THIS IS DIFFERENT ────────────────────────────── */}
      <Section className="py-16">
        <Container className="max-w-3xl mx-auto">
          <div className="border border-gold-primary/20 bg-gold-primary/5 p-8 md:p-10 text-center space-y-4">
            <h3 className="text-white text-sm font-bold tracking-[0.3em] uppercase">
              Why this is different
            </h3>
            <p className="text-text-secondary font-inter text-base leading-relaxed max-w-xl mx-auto">
              Most companies force you onto a call before they give you anything useful. I built this option for people who want real information first.
            </p>
            <p className="text-text-secondary font-inter text-sm leading-relaxed max-w-xl mx-auto">
              You get a direct review, on your own time, without a pressure call.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── GHL FORM ─────────────────────────────────────────── */}
      <Section className="py-10" id="get-your-review" dark>
        <Container className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4">
              GET YOUR FREE CREDIT VIDEO ANALYSIS
            </h2>
            <p className="text-text-secondary font-inter text-sm">
              Fill out the form below and I&apos;ll review your profile and send your personalized video.
            </p>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto mt-6" />
          </div>

          {/* ─── GHL FORM EMBED ─── */}
          <iframe
            src="https://links.jaydthewealthycowboy.com/widget/form/dJyU4J67BiYA4rYuQxew"
            style={{ width: "100%", height: "1517px", border: "none", borderRadius: "3px" }}
            id="inline-dJyU4J67BiYA4rYuQxew"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 12"
            data-height="1517"
            data-layout-iframe-id="inline-dJyU4J67BiYA4rYuQxew"
            data-form-id="dJyU4J67BiYA4rYuQxew"
            title="Credit Video Analysis Form"
          />
          <script src="https://links.jaydthewealthycowboy.com/js/form_embed.js" />
          {/* ─── END GHL FORM EMBED ─── */}

          <p className="text-text-muted font-inter text-xs text-center mt-6 leading-relaxed">
            Your information is never sold or shared. By submitting, you agree to the site{" "}
            <a href="/terms" className="text-gold-primary/70 hover:text-gold-primary underline">terms</a>{" "}
            and{" "}
            <a href="/privacy" className="text-gold-primary/70 hover:text-gold-primary underline">privacy policy</a>.
          </p>
        </Container>
      </Section>
    </div>
  );
}
