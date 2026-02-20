import { Section, Container } from "@/components/LayoutUtils";

export default function TermsPage() {
    return (
        <Section className="pt-32 pb-20">
            <Container className="max-w-4xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl text-white">TERMS OF SERVICE</h1>
                        <div className="w-24 h-px bg-gold-primary" />
                    </div>

                    <div className="prose prose-invert max-w-none font-inter text-text-secondary leading-relaxed space-y-12">
                        <section className="space-y-4">
                            <h2 className="text-white font-trajan text-xl tracking-widest border-b border-gold-primary/20 pb-2">CANCELLATION POLICY</h2>
                            <p>
                                Services are provided on a month-to-month basis and clients may cancel their service at any time with at least three (3) days notice prior to the next scheduled recurring payment.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-white font-trajan text-xl tracking-widest border-b border-gold-primary/20 pb-2">AFFILIATE DISCLOSURE</h2>
                            <p>
                                At times, we may feature credit card offers for which we do not receive commissions.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-white font-trajan text-xl tracking-widest border-b border-gold-primary/20 pb-2">CONTENT</h2>
                            <p>
                                The content on this site is not provided or commissioned by the company whose products are featured. Any opinions, analyses, reviews, or evaluations expressed are solely those of the author and have not been reviewed, approved, or otherwise endorsed by the advertiser. This site may receive compensation through affiliate programs offered by advertisers.
                            </p>
                        </section>

                        <section className="space-y-6 pt-12 border-t border-gold-primary/10">
                            <h1 className="text-3xl text-white uppercase tracking-widest">PRIVACY POLICY</h1>
                            <p>
                                This site is owned and operated by Centaur Elite Consulting LLC. Your privacy on the Internet is of the utmost importance to us. We strive to ensure your online experience is safe and satisfying. Please review the following to understand our policy, terms, and conditions surrounding the capture and use of information. This statement discloses what information we gather and how we use it.
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-gold-primary font-trajan text-lg tracking-widest uppercase">Information Gathers and Tracks</h3>
                                <p>Centaur Elite Consulting LLC gathers two types of information about users:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>
                                        <strong>Manual Submission:</strong> Information that users provide manually on our web site (e.g., Enrollment Form including name, address, email). This information is not shared or used for any marketing purposes.
                                    </li>
                                    <li>
                                        <strong>Aggregated Tracking:</strong> Aggregated tracking information derived mainly by tallying page views across the site. This helps tailor content and understand audience demographics.
                                    </li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-white font-trajan text-lg tracking-widest uppercase">Sharing of Information</h3>
                                <p>Centaur Elite Consulting LLC does not share, sell, rent, or otherwise provide your information to anyone for any purpose.</p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-white font-trajan text-lg tracking-widest uppercase">Security</h3>
                                <p>
                                    We operate secure data networks protected by industry-standard firewall and encryption systems. Policies are periodically reviewed and enhanced. Only authorized individuals have access to customer information.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-white font-trajan text-lg tracking-widest uppercase">Usage Tracking & Cookies</h3>
                                <p>
                                    We track overall user traffic patterns (domain name, browser type, MIME type) but do not correlate this with individual users. We may place a “cookie” on your computer to relate site usage to information you intentionally provide. You can disable cookies in your browser; the site remains usable.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-4 pt-12 border-t border-gold-primary/10">
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
