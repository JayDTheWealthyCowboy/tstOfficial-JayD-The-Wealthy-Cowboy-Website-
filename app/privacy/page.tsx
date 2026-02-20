import { Section, Container } from "@/components/LayoutUtils";

export default function PrivacyPage() {
    return (
        <Section className="pt-32 pb-20">
            <Container className="max-w-4xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl text-white">PRIVACY POLICY</h1>
                        <div className="w-24 h-px bg-gold-primary" />
                    </div>

                    <div className="prose prose-invert max-w-none font-inter text-text-secondary leading-relaxed space-y-12">
                        <section className="space-y-4">
                            <h2 className="text-white font-trajan text-xl tracking-widest border-b border-gold-primary/20 pb-2">TCPA CONSENT & PRIVACY</h2>
                            <p className="text-sm opacity-90">
                                Notwithstanding any current or prior election to opt in or opt out of receiving telemarketing calls or SMS (text) messages from Centaur Elite Consulting LLC or parties acting on its behalf, you expressly consent to be contacted for any purpose relating to your loan and/or account at any number, physical or electronic address you provide or at which you may be reached.
                            </p>
                            <p className="text-sm opacity-90">
                                Contact methods may include SMS (text), calls using prerecorded or artificial voice, and calls/messages delivered using an automatic telephone dialing or texting system. Automated messages may play when answered by you or another party. Representatives may leave voicemail or text messages.
                            </p>
                            <p className="text-sm opacity-90">
                                You consent to receive such communications at the number(s) you provided or numbers we can reasonably associate with your account (via skip trace, caller ID capture, or other means). You certify the numbers provided are yours and that you are permitted to receive calls at those numbers, and you agree to promptly notify us if you discontinue a number. Your carrier may charge standard rates. You also agree we may contact you via email at any address you provide now or later. Calls may be monitored or recorded as permitted by law for quality purposes.
                            </p>
                        </section>

                        <p className="pt-10 text-[10px] uppercase tracking-widest text-text-muted">
                            Last Updated: February 2026
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
