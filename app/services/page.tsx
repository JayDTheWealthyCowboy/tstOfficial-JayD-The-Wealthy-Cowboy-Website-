import { Button } from "@/components/Button";
import { Section, Container } from "@/components/LayoutUtils";

export default function ServicesPage() {
    const services = [
        {
            id: "1",
            title: "1️⃣ FREE CREDIT CONSULTATION",
            problem: "Every application gets denied, your rates are high, and your credit starts with a 4, 5, or 6 — but you don’t know what’s actually hurting it.",
            strategy: "We review your current credit report, identify visible negative items, and explain which repair package fits your situation.",
            result: "Michael went from denied to mortgage-ready within 90 days in our Gold Tier program.",
            action: "Book your Free 15-Minute Credit Consultation today.",
            cta: "GET A FREE CREDIT CONSULTATION",
            variant: "primary" as const,
            href: "/schedule"
        },
        {
            id: "2",
            title: "2️⃣ PRO CREDIT CONSULTATION",
            problem: "You want a serious breakdown of your credit profile and what’s possible if specific items are removed or added",
            strategy: "We conduct a 30-minute strategic review to analyze negative items, map removal sequencing, and discuss realistic score potential using a custom credit re-building blueprint.",
            result: "After full removals and structured build-out, a Rachel reached the 800 club and secured a $40K personal line.",
            action: "Get your Pro Credit Consultation.",
            cta: "BOOK PRO CONSULTATION",
            variant: "gold" as const,
            href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/xkxBB"
        },
        {
            id: "3",
            title: "3️⃣ ELITE FUNDING EVALUATION",
            problem: "You have decent credit and profile age, but still can’t access real capital at scale.",
            strategy: "We execute a done-for-you funding strategy with underwriting compliance readiness, strategic lender sequencing, and high-limit application planning.",
            result: "Arianna a real estate investor secured $275K in 0% interest funding after years of relying solely on hard money lenders.",
            action: "Apply for the Elite Funding Evaluation.",
            cta: "APPLY FOR FUNDING",
            variant: "gold" as const,
            href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/AkWj"
        },
        {
            id: "4",
            title: "4️⃣ BUSINESS CREDIT & CAPITAL BLUEPRINT",
            problem: "You have solid investment opportunities but don’t know how to position your business for bank approvals.",
            strategy: "We engineer a customized business credit framework and funding roadmap — then strategically position you with five banks aligned to your approval profile and funding goals.",
            result: "Anthony secured a $75K business line of credit from citizens bank after restructuring their entity and business credit profile.",
            action: "Build your Business Credit & Capital Blueprint today.",
            cta: "BUILD YOUR BLUEPRINT",
            variant: "gold" as const,
            href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/l5r55"
        },
        {
            id: "5",
            title: "5️⃣ DIY PRO CREDIT LITIGATION & ENFORCEMENT PACK",
            problem: "Credit bureaus ignore generic disputes, costing you time and leverage.",
            strategy: "We provide customized litigation backed disputes custom to your profile and designed to apply structured pressure to negative accounts.",
            result: "Bridgette had over $36,000 in collections removed within 45 days after structured enforcement letters were submitted.",
            action: "Order your DIY Litigation Pack.",
            cta: "ORDER DIY PACK",
            variant: "gold" as const,
            href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/VOJ0O"
        },
        {
            id: "6",
            title: "6️⃣ DELUXE AGED SHELF COMPANY",
            problem: "New entities lack credibility, limiting access to larger funding opportunities.",
            strategy: "Acquire a ready-to-deploy aged shelf company with large, seasoned tradelines to accelerate funding positioning.",
            result: "Within two weeks of compliance completion, a client secured a $75K Business Line of Credit as their first approval.",
            action: "Secure your Deluxe Aged Shelf Company.",
            cta: "SECURE SHELF COMPANY",
            variant: "gold" as const,
            href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/Z8pZ5"
        },
        {
            id: "7",
            title: "7️⃣ LAWSUIT DEFENSE DOCUMENT PREPARATION",
            problem: "Facing a lawsuit or collection action without the right response can result in judgment or garnishment.",
            strategy: "We prepare structured defense documents designed to challenge standing and protect your rights in court.",
            result: "A client’s collection lawsuit was dismissed before judgment after filing structured defense documentation.",
            action: "Order your Lawsuit Defense Documents.",
            cta: "ORDER DEFENSE DOCS",
            variant: "gold" as const,
            href: "https://www.fanbasis.com/agency-checkout/Jaydthewealthycowboy/68L67"
        }
    ];

    return (
        <div className="pb-20">
            <Section className="pt-20 pb-10">
                <Container className="text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">CREDIT TRANSFORMATION STARTS WITH CLARITY.</h1>
                    <p className="text-text-secondary font-inter text-lg uppercase tracking-widest">
                        Choose the path that fits your current needs.
                    </p>
                    <div className="w-full h-px bg-gold-primary/20 mt-12 mb-8 max-w-4xl mx-auto" />
                </Container>
            </Section>

            <Section className="py-10">
                <Container className="max-w-7xl mx-auto space-y-20">
                    {/* Row 1: 2 Columns Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {services.slice(0, 2).map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {/* Row 2: 2 Columns Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {services.slice(2, 4).map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>

                    {/* Row 3: 3 Columns Centered */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {services.slice(4, 7).map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ServiceCard({ service }: { service: any }) {
    return (
        <div className="group relative bg-depth-vignette border border-white/5 p-8 transition-all hover:border-gold-primary/30 flex flex-col h-full">
            {/* Visual Accent */}
            <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />

            <div className="flex-grow space-y-6">
                <h2 className="text-xl md:text-2xl text-gold-primary tracking-widest leading-tight">{service.title}</h2>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-60">The Problem</h4>
                        <p className="text-text-secondary font-inter text-sm leading-relaxed">{service.problem}</p>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-60">Our Strategy</h4>
                        <p className="text-text-secondary font-inter text-sm leading-relaxed">{service.strategy}</p>
                    </div>

                    <div className="p-4 bg-gold-primary/5 border border-gold-primary/10">
                        <h4 className="text-gold-primary text-[9px] font-bold tracking-[0.3em] uppercase mb-1">Proven Result</h4>
                        <p className="text-white font-inter text-xs italic">"{service.result}"</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <p className="text-white text-[10px] font-bold uppercase tracking-[0.15em] leading-relaxed min-h-[32px]">
                    {service.action}
                </p>
                <Button href={service.href} variant={service.variant} className="w-full text-xs py-3">
                    {service.cta}
                </Button>
            </div>
        </div>
    );
}
