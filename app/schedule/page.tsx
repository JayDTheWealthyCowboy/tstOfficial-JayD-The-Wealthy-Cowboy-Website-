import { Section, Container } from "@/components/LayoutUtils";
import Script from "next/script";

export default function SchedulePage() {
    return (
        <Section className="min-h-screen pt-32 pb-20">
            <Container className="max-w-4xl text-center space-y-12">
                <div className="space-y-6">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">BOOK YOUR FREE CREDIT CONSULTATION</h1>
                    <p className="text-text-secondary font-inter text-lg max-w-2xl mx-auto leading-relaxed">
                        Complete the pre-qualification form below to pick a time that works for your consultation.
                    </p>
                </div>

                {/* Pre-Qualification Form Embed */}
                <div className="w-full min-h-[800px] bg-depth-vignette border border-gold-primary/20 rounded-sm overflow-hidden relative">
                    <iframe
                        src="https://link.jdthewealthycowboy.com/widget/form/sWmDpdF77QELVETbSvIN"
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
                        src="https://link.jdthewealthycowboy.com/js/form_embed.js"
                        strategy="afterInteractive"
                    />
                </div>

                <div className="pt-12">
                    <p className="text-text-muted font-inter text-[10px] uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
                        By booking a consultation, you agree to our terms of service and acknowledge that results may vary
                        based on individual credit profile conditions.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
