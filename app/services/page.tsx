import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, Container } from "@/components/LayoutUtils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | JayD The Wealthy Cowboy™",
  description:
    "Explore credit consultations, funding evaluations, business credit planning, and specialty services designed to help you move forward.",
};

const personalCredit = [
  {
    title: "FREE CONSULTATION",
    bestFor: "People who want the truth about what is on their report, what it may cost to move up, and whether they are the right fit for my help.",
    bullets: [
      "15-minute consultation",
      "Review of your fully detailed credit report",
      "Clear breakdown of what is holding you back",
      "Estimated cost to reach the next level",
      "Vetting process because not every file is accepted",
    ],
    benefit: "Start here if you want real answers before you spend money, make another move, or assume we take every case.",
    cta: "BOOK FREE CONSULTATION",
    variant: "primary" as const,
    href: "/schedule",
  },
  {
    title: "PRO CONSULTATION",
    subtitle: "$147 Strategic Review",
    bestFor: "People who want a deeper breakdown of what is possible when the file gets cleaned up and rebuilt the right way, what needs to change, and what the smartest next move is.",
    bullets: [
      "30-minute strategic review",
      "Personalized rebuild direction",
      "Realistic discussion of next steps",
    ],
    benefit: "Best for people who want a deeper look at the file, a stronger plan, and a clearer picture of what it may take to move up the right way.",
    cta: "BOOK PRO CONSULTATION",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/xkxBB",
  },
  {
    title: "DIY PRO CREDIT LITIGATION & ENFORCEMENT PACK",
    bestFor: "People who want a stronger self-directed dispute package built around their profile.",
    bullets: [
      "Customized dispute documents",
      "Built around your report",
      "Designed for a more serious challenge process",
    ],
    benefit: "Built for people who want a stronger dispute approach than the weak templates floating around online.",
    cta: "ORDER DIY PACK",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/VOJ0O",
  },
];

const fundingBusiness = [
  {
    title: "$97 FUNDING BLUEPRINT",
    subtitle: undefined,
    bestFor: "Serious people preparing for capital access who want to know where they stand before applying.",
    bullets: [
      "Funding-readiness review",
      "Approval positioning strategy",
      "Smarter application direction",
    ],
    benefit: "If funding is the goal, this helps you stop applying blind and start moving with a stronger position.",
    cta: "GET THE FUNDING BLUEPRINT",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/AkWj",
  },
  {
    title: "BUSINESS CREDIT & CAPITAL BLUEPRINT",
    bestFor: "Business owners who want to position their company for stronger bank and lender approvals.",
    bullets: [
      "Business profile review",
      "Funding roadmap",
      "Approval-focused recommendations",
    ],
    benefit: "This is about building a business profile lenders take more seriously when it\u2019s time to go after capital.",
    cta: "BUILD YOUR BLUEPRINT",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/l5r55",
  },
];

const advancedSpecialty = [
  {
    title: "DELUXE AGED SHELF COMPANY",
    bestFor: "People who want a more established business starting point for future funding positioning.",
    bullets: [
      "Aged entity solution",
      "Built to strengthen business presentation",
      "Designed for serious buyers only",
    ],
    benefit: "Not a magic fix. A positioning tool for the right buyer who wants a stronger business presentation.",
    cta: "SECURE SHELF COMPANY",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/Z8pZ5",
  },
  {
    title: "LAWSUIT DEFENSE DOCUMENT PREPARATION",
    bestFor: "People facing collection action who need a structured document-preparation solution.",
    bullets: [
      "Defense document preparation",
      "Structured response support",
      "Built to help you respond correctly and fast",
    ],
    benefit: "When paperwork shows up, you need the right response \u2014 not panic, not guessing, and not bad moves.",
    cta: "ORDER DEFENSE DOCS",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/68L67",
  },
];

function ServiceCard({ service }: { service: typeof personalCredit[0] }) {
  return (
    <div className="group relative bg-depth-3 border border-white/5 p-8 transition-all hover:border-gold-primary/30 flex flex-col h-full">
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />

      <div className="flex-grow space-y-5">
        <div>
          <h3 className="text-lg md:text-xl text-gold-primary tracking-widest leading-tight">{service.title}</h3>
          {"subtitle" in service && service.subtitle && (
            <p className="text-text-muted font-inter text-xs tracking-widest uppercase mt-1">{service.subtitle}</p>
          )}
        </div>

        <div className="space-y-1">
          <p className="text-text-muted font-inter text-[10px] font-bold tracking-[0.2em] uppercase">Best for:</p>
          <p className="text-text-secondary font-inter text-sm leading-relaxed">{service.bestFor}</p>
        </div>

        <ul className="space-y-2">
          {service.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary font-inter text-sm leading-relaxed">
              <span className="text-gold-primary mt-1 text-xs">&#x2022;</span>
              {b}
            </li>
          ))}
        </ul>

        {"benefit" in service && service.benefit && (
          <p className="text-text-secondary/80 font-inter text-xs leading-relaxed italic border-l-2 border-gold-primary/20 pl-4">
            {service.benefit}
          </p>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <Button href={service.href} variant={service.variant} className="w-full text-xs py-3">
          {service.cta}
        </Button>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pb-20">
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <Section className="pt-20 pb-10">
        <Container className="text-center max-w-3xl mx-auto">
          <span className="text-gold-primary text-xs font-bold tracking-[0.5em] uppercase block mb-6">
            SERVICES
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Choose the path that fits your current needs.
          </h1>
          <p className="text-text-secondary font-inter text-base leading-relaxed max-w-xl mx-auto">
            Some people need a simple review. Some need a serious credit plan. Some need help positioning for funding. Start with the path that matches where you are right now.
          </p>
          <div className="w-full h-px bg-gold-primary/20 mt-12 max-w-4xl mx-auto" />
        </Container>
      </Section>

      {/* ── CATEGORY 1: PERSONAL CREDIT ──────────────────────────── */}
      <Section className="py-16">
        <Container className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-3">Personal Credit</span>
            <p className="text-text-secondary font-inter text-sm leading-relaxed max-w-xl">
              For people who need help understanding, fixing, or rebuilding their personal credit profile.
            </p>
            <div className="w-16 h-px bg-gold-primary/30 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalCredit.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Divider ── */}
      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gold-primary/10" /></div>

      {/* ── CATEGORY 2: FUNDING / BUSINESS ───────────────────────── */}
      <Section className="py-16">
        <Container className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-3">Funding / Business</span>
            <p className="text-text-secondary font-inter text-sm leading-relaxed max-w-xl">
              For people who want better approval odds, stronger positioning, and a smarter path to funding.
            </p>
            <div className="w-16 h-px bg-gold-primary/30 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {fundingBusiness.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Divider ── */}
      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gold-primary/10" /></div>

      {/* ── CATEGORY 3: ADVANCED / SPECIALTY ──────────────────────── */}
      <Section className="py-16">
        <Container className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-3">Advanced / Specialty</span>
            <p className="text-text-secondary font-inter text-sm leading-relaxed max-w-xl">
              For people who need a specialty solution beyond a standard credit or funding path.
            </p>
            <div className="w-16 h-px bg-gold-primary/30 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {advancedSpecialty.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── PRICING CONTEXT + SOCIAL PROOF LINK ──────────────────── */}
      <Section className="py-16">
        <Container className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-text-secondary font-inter text-sm leading-relaxed">
            Investment varies by profile and service level. Details are shared during your consultation.
          </p>
          <div className="w-16 h-px bg-gold-primary/20 mx-auto" />
          <p className="text-text-muted font-inter text-xs leading-relaxed">
            Every file is different. The right move depends on what is actually on the report, what the goal is, and what makes sense for that person.
          </p>
          <div className="pt-2">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-gold-primary font-inter text-sm font-semibold tracking-widest uppercase hover:text-gold-bright transition-colors">
              See client results <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
