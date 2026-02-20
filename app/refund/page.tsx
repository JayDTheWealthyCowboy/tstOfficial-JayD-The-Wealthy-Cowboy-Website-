import { Section, Container } from "@/components/LayoutUtils";

export default function RefundPage() {
    return (
        <Section className="pt-32 pb-20">
            <Container className="max-w-4xl">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl text-white uppercase">REFUND & CANCELLATION</h1>
                        <div className="w-24 h-px bg-gold-primary" />
                    </div>

                    <div className="prose prose-invert max-w-none font-inter text-text-secondary leading-relaxed space-y-12">
                        <section className="space-y-4">
                            <h2 className="text-white font-trajan text-2xl tracking-widest border-b border-gold-primary/20 pb-2">REFUND POLICY</h2>
                            <p>
                                At Centaur Elite Consulting LLC, we are committed to delivering structured credit consulting, funding strategy, and related advisory services. Due to the nature of these services, which involve time, analysis, documentation preparation, strategy development, and third-party reporting agencies, we cannot and do not guarantee specific outcomes, score increases, deletions, funding approvals, credit limits, or timeframes.
                            </p>
                            <p>
                                By enrolling in any program, the Client acknowledges and agrees that results are dependent upon multiple external factors outside the Company’s control, including but not limited to credit bureau reporting practices, creditor responses, lender underwriting standards, and the Client’s own financial behavior.
                            </p>
                            <p>
                                Because professional services begin immediately upon enrollment, fees compensate for time, strategic analysis, compliance review, documentation preparation, administrative processing, advisory access, and ongoing support.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-gold-primary font-trajan text-lg tracking-widest uppercase">Refund Conditions</h3>
                            <p>A refund of up to 100% of total fees may be considered only if ALL of the following conditions are met:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Centaur Elite Consulting LLC did NOT inform the Client in writing that credit repair efforts can sometimes initially cause scores to decrease.</li>
                                <li>Client remained current on all payments with no returned (NSF) payments and completed all payments per the agreement.</li>
                                <li>Client satisfied the full payment schedule owed to Centaur Elite Consulting LLC.</li>
                                <li>Client followed all written guidance provided in the credit improvement or funding plan.</li>
                                <li>Client maintained timely minimum payments on all existing and newly obtained credit lines during the program term.</li>
                                <li>Client was never late on any tradeline or financial obligation during the agreement period.</li>
                                <li>Client consistently followed at least one recommended score-building or profile-strengthening strategy documented in the plan.</li>
                                <li>Client did not engage in contradictory financial behavior that would reasonably impair results.</li>
                            </ul>
                            <p className="italic text-sm">
                                The Client understands that dissatisfaction with timing, perceived progress, underwriting decisions, bureau responses, creditor decisions, or lender determinations does not constitute grounds for a refund.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-white font-trajan text-lg tracking-widest uppercase">Requests & Determinations</h3>
                            <p>
                                All refund requests must be submitted in writing to <a href="mailto:support@jaydthewealthycowboy.ai" className="text-gold-primary">support@jaydthewealthycowboy.ai</a>. Centaur Elite Consulting LLC will review documented compliance with this policy. Please allow 7–10 business days for review after receipt of the written request.
                            </p>
                            <p>
                                Final refund determinations are made at the sole discretion of Centaur Elite Consulting LLC and are final.
                            </p>
                            <p className="border-l-2 border-gold-primary/40 pl-4 py-2 bg-gold-primary/5">
                                Chargebacks or payment disputes initiated without first submitting a written refund request may be considered a breach of agreement. In such cases, Centaur Elite Consulting LLC reserves the right to submit documentation to the payment processor to dispute the chargeback, including service logs, communication records, compliance documentation, and proof of work performed.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-white font-trajan text-lg tracking-widest uppercase">No Reversal After Performance</h3>
                            <p>
                                Once dispute letters, compliance correspondence, creditor communications, documentation packets, bureau submissions, funding positioning documents, or any third-party actions have been prepared, drafted, mailed, submitted, or otherwise initiated on the Client’s behalf, fees associated with that work become fully earned and non-refundable.
                            </p>
                            <div className="space-y-2">
                                <p>The Client acknowledges that once compliance actions are initiated:</p>
                                <ul className="list-disc pl-6 opacity-80">
                                    <li>Professional time has been expended.</li>
                                    <li>Strategy has been executed.</li>
                                    <li>Documentation has been generated.</li>
                                    <li>Third-party processes have begun.</li>
                                </ul>
                            </div>
                            <p>
                                Accordingly, no refunds, reversals, or cancellations will be granted for services already performed, letters already mailed, documentation already prepared, or actions already initiated.
                            </p>
                        </section>

                        <section className="space-y-4 pt-8 border-t border-gold-primary/10">
                            <h2 className="text-white font-trajan text-2xl tracking-widest border-b border-gold-primary/20 pb-2">CANCELLATION POLICY</h2>
                            <p>
                                To cancel your program, contact our Customer Service team at <span className="text-gold-primary">903-714-1234</span> during posted business hours or email <a href="mailto:support@jaydthewealthycowboy.ai" className="text-gold-primary">support@jaydthewealthycowboy.ai</a>.
                            </p>
                            <div className="space-y-2">
                                <p>Cancellation requests must include:</p>
                                <ul className="list-disc pl-6 opacity-80">
                                    <li>Full legal name</li>
                                    <li>Email used at enrollment</li>
                                    <li>Any relevant account reference</li>
                                </ul>
                            </div>
                            <p>
                                Billing continues until cancellation is formally confirmed in writing by Centaur Elite Consulting LLC. If cancellation is requested after services have commenced, fees already paid for work performed, strategic planning, documentation preparation, advisory time, and administrative processing are non-refundable.
                            </p>
                        </section>

                        <section className="space-y-4 pt-8 border-t border-gold-primary/10">
                            <h2 className="text-white font-trajan text-2xl tracking-widest border-b border-gold-primary/20 pb-2">GOVERNING LAW & JURISDICTION</h2>
                            <p>
                                This Agreement and all services provided by Centaur Elite Consulting LLC shall be governed by and construed in accordance with the laws of the **State of Texas**, without regard to conflict of law principles.
                            </p>
                            <p>
                                The Client agrees that any dispute, claim, or controversy arising out of or relating to services provided by Centaur Elite Consulting LLC shall be brought exclusively in a court of competent jurisdiction located within the **State of Texas**.
                            </p>
                            <p>
                                The Client expressly consents to personal jurisdiction and venue in the State of Texas and waives any objection to such jurisdiction or venue.
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
