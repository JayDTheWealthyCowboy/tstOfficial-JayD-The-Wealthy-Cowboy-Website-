import { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section, Container } from "@/components/LayoutUtils";

export const metadata: Metadata = {
  title: "Services | JayD The Wealthy Cowboy\u2122",
  description: "Explore credit consultations, funding evaluations, business credit planning, and specialty services designed to help you move forward.",
};

const personalCredit = [
  {
    title: "FREE CREDIT CONSULTATION",
    bestFor: "People who want a fast first step and need to understand what is going wrong.",
    bullets: [
      "15-minute consultation",
      "Basic review of visible negative issues",
      "Direction on the best next step",
    ],
    cta: "BOOK FREE CONSULTATION",
    variant: "primary" as const,
    href: "/schedule",
  },
  {
    title: "PRO CREDIT CONSULTATION",
    bestFor: "People who want a deeper breakdown of what is possible and what needs to change.",
    bullets: [
      "30-minute strategic review",
      "Personalized rebuild direction",
      "Realistic discussion of next steps",
    ],
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
    cta: "ORDER DIY PACK",
    variant: "gold" as const,
    href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/VOJ0O",
  },
];

const fundingBusiness = [
  {
    title: "ELITE FUNDING EVALUATION",
    bestFor: "People with decent credit who still are not accessing the level of funding they want.",
    bullets: [
      "Funding-readiness review",
      "Approval positioning strategy",
      "Smarter application direction",
    ],
    cta: "APPLY FOR FUNDING",
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
      "Built to strengthen presentation",
      "Designed for serious buyers only",
    ],
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
        <h3 className="text-lg md:text-xl text-gold-primary tracking-widest leading-tight">{service.title}</h3>

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
    </div>
  );
}
