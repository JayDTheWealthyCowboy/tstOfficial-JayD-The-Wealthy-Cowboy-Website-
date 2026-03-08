import { Section, Container } from "@/components/LayoutUtils";
import { Button } from "@/components/Button";

export const metadata = {
    title: "Free Credit Video Analysis | JayD The Wealthy Cowboy™",
    description: "Get a free personalized video walkthrough of your credit profile from JayD. No calls. No pressure. Just real answers.",
};

const steps = [
    {
        number: "01",
        title: "Fill Out the Form Below",
        description: "Submit your basic information and your credit monitoring login so I can pull your full profile.",
    },
    {
        number: "02",
        title: "I Review Your Credit Profile",
        description: "I personally analyze your report — negative items, score factors, and your real path to 700+.",
    },
    {
        number: "03",
        title: "You Receive Your Personalized Video",
        description: "I record a custom Loom video walking you through everything I found on your credit report. You watch it on your time.",
    },
    {
        number: "04",
        title: "You Decide the Next Move",
        description: "No pressure. No sales pitch on a call. If you want help, I'm here. If not, you still walked away with real answers.",
    },
];

export default function CreditVideoAnalysisPage() {
    return (
        <div className="pb-20">

            {/* ── HERO ─────────────────────────────────────────────── */}
            <Section className="pt-32 pb-10">
                <Container className="text-center max-w-4xl mx-auto">
                    <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-6">
                        Free Offer — Limited Availability
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        I'LL REVIEW YOUR CREDIT PROFILE<br />
                        <span className="text-gold-primary">AND SEND YOU A PERSONAL VIDEO.</span>
                    </h1>
                    <p className="text-text-secondary font-inter text-lg leading-relaxed max-w-2xl mx-auto">
                        No booking a call. No sitting through a sales pitch. No pressure.
                        Just a real, personalized breakdown of your credit — straight from me, delivered to your inbox.
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
                            <source src="/0219.mp4" type="video/mp4" />
                        </video>
                    </div>
                </Container>
            </Section>

            {/* ── HOW IT WORKS ─────────────────────────────────────── */}
            <Section className="py-16" dark>
                <Container className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">
                            The Process
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                            HERE'S EXACTLY WHAT HAPPENS
                        </h2>
                        <div className="w-24 h-px bg-gold-primary/50 mx-auto mt-4" />
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

            {/* ── NO-PRESSURE CALLOUT ──────────────────────────────── */}
            <Section className="py-12">
                <Container className="max-w-3xl mx-auto">
                    <div className="border border-gold-primary/20 bg-gold-primary/5 p-8 text-center space-y-4">
                        <h3 className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase">
                            Why This Is Different
                        </h3>
                        <p className="text-white font-inter text-base leading-relaxed">
                            Most credit companies force you onto a call just to hear a sales pitch.
                            I built this because <span className="text-gold-primary font-semibold">your time matters</span> —
                            and because real trust comes from giving value first.
                        </p>
                        <p className="text-text-secondary font-inter text-sm leading-relaxed">
                            No calendar link. No Zoom. No high-pressure closer on the other end.
                            Just a personalized video, from me to you, with exactly what I see on your credit report.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* ── GHL FORM ─────────────────────────────────────────── */}
            <Section className="py-10" id="get-your-review">
                <Container className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-4">
                            Claim Your Free Review
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-4">
                            GET YOUR FREE CREDIT VIDEO ANALYSIS
                        </h2>
                        <p className="text-text-secondary font-inter text-sm">
                            Fill out the form below. I'll review your profile and send your personalized video within 48 hours.
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
                        Your information is never sold or shared. By submitting, you agree to our{" "}
                        <a href="/terms" className="text-gold-primary/70 hover:text-gold-primary underline">Terms</a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-gold-primary/70 hover:text-gold-primary underline">Privacy Policy</a>.
                    </p>
                </Container>
            </Section>

        </div>
    );
}
