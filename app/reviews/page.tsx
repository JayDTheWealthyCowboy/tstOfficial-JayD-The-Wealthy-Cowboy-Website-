import { Metadata } from "next";
import { Section, Container } from "@/components/LayoutUtils";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Reviews | JayD The Wealthy Cowboy™",
  description:
    "See real client results and testimonials from people who worked with JayD The Wealthy Cowboy on credit consulting, funding positioning, and profile cleanup.",
};

/* ── FEATURED SCORE TESTIMONIALS ─────────────────────────────────────── */
const featuredTestimonials = [
  {
    name: "Featured Client",
    quote:
      "I had been waiting on a real breakthrough, and this was the update that gave it to me. My scores came back at 739 Equifax, 742 Experian, and 741 TransUnion, with 12 disputes deleted. Seeing all three bureaus come back that strong made me feel like the work was finally showing up where it mattered.",
    tags: ["Score Growth", "12 Disputes Deleted"],
    image: "/testimonials/testimonial-score-739-742-741-12-deleted.jpg",
    alt: "Client score summary showing 739 Equifax, 742 Experian, 741 TransUnion, and 12 disputes deleted.",
  },
  {
    name: "Featured Client",
    quote:
      "I knew my file needed serious cleanup, but I did not expect to see this kind of movement. My updated scores came back at 647 Equifax, 661 Experian, and 644 TransUnion, and I had 70 disputes deleted. I was honestly shocked when I saw how much had finally come off.",
    tags: ["Major Cleanup", "70 Disputes Deleted"],
    image: "/testimonials/testimonial-score-647-661-644-70-deleted.jpg",
    alt: "Client score summary showing 647 Equifax, 661 Experian, 644 TransUnion, and 70 disputes deleted.",
  },
  {
    name: "Featured Client",
    quote:
      "This was one of those updates that makes you stop and stare at the screen for a second. My scores reached 655 Equifax, 724 Experian, and 705 TransUnion, with 30 disputes deleted and 1 item updated to positive. Seeing that kind of movement made me feel like my file was finally being cleaned up the right way.",
    tags: ["Strong Movement", "30 Deleted + 1 Positive"],
    image: "/testimonials/testimonial-score-655-724-705-30-deleted-1-positive.jpg",
    alt: "Client score summary showing 655 Equifax, 724 Experian, 705 TransUnion, 30 disputes deleted, and 1 item updated to positive.",
  },
  {
    name: "T.C.",
    quote:
      "I could tell my file was improving, but seeing it on paper hit different. My scores came back at 689 Equifax, 695 Experian, and 664 TransUnion, with 22 disputes deleted. That update gave me a lot more confidence about where things were headed.",
    tags: ["File Progress", "22 Disputes Deleted"],
    image: "/testimonials/testimonial-score-689-695-664-22-deleted.jpg",
    alt: "Client score summary showing 689 Equifax, 695 Experian, 664 TransUnion, and 22 disputes deleted.",
  },
  {
    name: "T.H.",
    quote:
      "When the report updated, I could see real progress instead of just hoping something had changed. My scores came back at 666 Equifax, 669 Experian, and 671 TransUnion, with 10 disputes deleted. It felt good to finally see steady movement across the board.",
    tags: ["Steady Progress", "10 Disputes Deleted"],
    image: "/testimonials/testimonial-score-666-669-671-10-deleted.jpg",
    alt: "Client score summary showing 666 Equifax, 669 Experian, 671 TransUnion, and 10 disputes deleted.",
  },
  {
    name: "Amanda",
    quote:
      "I still remember how good it felt seeing this update come back. My scores reached 707 Equifax, 689 Experian, and 708 TransUnion, with 11 disputes deleted. After carrying so much negative information for so long, that kind of result was a huge relief.",
    tags: ["Relief + Progress", "11 Disputes Deleted"],
    image: "/testimonials/testimonial-score-707-689-708-11-deleted.jpg",
    alt: "Client score summary showing 707 Equifax, 689 Experian, 708 TransUnion, and 11 disputes deleted.",
  },
  {
    name: "Shonna Shepherd",
    quote:
      "This was the kind of update I had been hoping for the whole time. My scores came back at 687 Equifax, 728 Experian, and 691 TransUnion, with 42 disputes deleted and 1 item updated to positive. Seeing that much come off my file made me feel like everything had finally started turning in my favor.",
    tags: ["Big Shift", "42 Deleted + 1 Positive"],
    image: "/testimonials/testimonial-score-687-728-691-42-deleted-1-positive.jpg",
    alt: "Client score summary showing 687 Equifax, 728 Experian, 691 TransUnion, 42 disputes deleted, and 1 item updated to positive.",
  },
  {
    name: "Featured Client",
    quote:
      "I was encouraged just looking at how much cleaner everything felt. My scores came back at 664 Equifax, 675 Experian, and 689 TransUnion, with 12 disputes deleted. It gave me that feeling that my file was finally moving in the right direction instead of staying stuck.",
    tags: ["Cleaner File", "12 Disputes Deleted"],
    image: "/testimonials/testimonial-score-664-675-689-12-deleted.jpg",
    alt: "Client score summary showing 664 Equifax, 675 Experian, 689 TransUnion, and 12 disputes deleted.",
  },
];

/* ── DELETION PROOF TESTIMONIALS ─────────────────────────────────────── */
const deletionProofs = [
  {
    name: "David Castillo",
    quote:
      "When I saw Jefferson Capital come off my report, I felt a real sense of relief. That was one of those accounts that kept staring back at me every time I opened my file. Seeing it finally deleted made me feel like the process was real, not just talk.",
    tags: ["Item Deleted", "Jefferson Capital"],
    image: "/testimonials/testimonial-proof-jefferson-capital-bank-of-america.jpg",
    alt: "Credit report screenshot showing Jefferson Capital marked deleted.",
    sharedImage: "jefferson-capital-boa",
  },
  {
    name: "Chris Dumire",
    quote:
      "Seeing Caine Weiner deleted was a big moment for me. That account had been sitting there long enough to feel permanent, so when it finally came off, I was honestly surprised. It felt like proof that my file was finally getting cleaned up for real.",
    tags: ["Item Deleted", "Caine Weiner"],
    image: "/testimonials/testimonial-proof-caine-weiner.jpg",
    alt: "Credit report screenshot showing Caine Weiner marked deleted.",
    sharedImage: "caine-weiner",
  },
  {
    name: "Featured Client",
    quote:
      "The moment I saw Acima Digital deleted, I knew this was not just surface-level movement. That was one of the accounts I had gotten used to seeing every time I checked my report. Watching it finally disappear gave me a level of relief I cannot even fully explain.",
    tags: ["Item Deleted", "Acima Digital"],
    image: "/testimonials/testimonial-proof-acima-affirm-bankruptcy.jpg",
    alt: "Credit report screenshot showing Acima Digital marked deleted.",
    sharedImage: "acima-affirm-bankruptcy",
  },
  {
    name: "Featured Client",
    quote:
      "I was shocked when I saw Bank of America come off my report. That was one of the heavier-looking accounts on my file, and seeing it deleted made me feel like a huge weight had finally been lifted. For the first time in a while, I looked at my credit and felt hopeful.",
    tags: ["Item Deleted", "Bank of America"],
    image: "/testimonials/testimonial-proof-jefferson-capital-bank-of-america.jpg",
    alt: "Credit report screenshot showing Bank of America marked deleted.",
    sharedImage: "jefferson-capital-boa",
  },
  {
    name: "Featured Client",
    quote:
      "Seeing Bankruptcy deleted off my file was one of the biggest emotional moments in this whole process. I had looked at that item so many times that I started to feel like it would never leave. When I saw it marked deleted, I felt relieved immediately.",
    tags: ["Item Deleted", "Bankruptcy"],
    image: "/testimonials/testimonial-proof-acima-affirm-bankruptcy.jpg",
    alt: "Credit report screenshot showing Bankruptcy marked deleted.",
    sharedImage: "acima-affirm-bankruptcy",
  },
  {
    name: "Featured Client",
    quote:
      "When I saw Affirm come off my report, I was honestly stunned. That account had been sitting there making my file feel messier than it needed to be. Once it was gone, everything looked cleaner, and it felt like real progress instead of just waiting around.",
    tags: ["Item Deleted", "Affirm"],
    image: "/testimonials/testimonial-proof-acima-affirm-bankruptcy.jpg",
    alt: "Credit report screenshot showing Affirm marked deleted.",
    sharedImage: "acima-affirm-bankruptcy",
  },
];

/* ── PAGE ─────────────────────────────────────────────────────────────── */
export default function ReviewsPage() {
  return (
    <div className="pb-20">
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <Section className="pt-32 pb-16">
        <Container className="max-w-4xl mx-auto text-center">
          <span className="text-gold-primary text-xs font-bold tracking-[0.5em] uppercase block mb-6">
            CLIENT RESULTS
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            REAL CLIENT RESULTS.<br />
            <span className="text-gold-primary">REAL PROOF.</span>
          </h1>
          <p className="text-text-secondary font-inter text-lg leading-relaxed max-w-2xl mx-auto">
            These are real client experiences tied to real file movement. Every profile is different, and every result depends on the person, the reporting, and the work that goes into it.
          </p>
          <div className="w-24 h-px bg-gold-primary/50 mx-auto mt-8" />
        </Container>
      </Section>

      {/* ── FEATURED SCORE TESTIMONIALS ───────────────────────────── */}
      <Section className="py-20" dark>
        <Container className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-3">
              SCORE PROGRESS
            </span>
            <h2 className="text-2xl md:text-3xl text-white tracking-widest uppercase mb-4">
              Score movement and file cleanup from real clients
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="group relative bg-depth-3 border border-white/5 hover:border-gold-primary/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gold-primary transition-all duration-500" />

                {/* Image */}
                <div className="w-full aspect-[16/10] bg-depth-1 border-b border-white/5 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-primary border border-gold-primary/30 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text-secondary font-inter text-sm leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <p className="text-text-muted font-inter text-xs font-semibold tracking-widest uppercase">
                    — {t.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── DELETION PROOF SECTION ────────────────────────────────── */}
      <Section className="py-20" light>
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gold-primary text-xs font-bold tracking-[0.4em] uppercase block mb-3">
              ACCOUNT-LEVEL PROOF
            </span>
            <h2 className="text-2xl md:text-3xl text-depth-1 tracking-widest uppercase mb-4">
              Specific items deleted from client reports
            </h2>
            <div className="w-24 h-px bg-gold-primary/50 mx-auto mb-6" />
            <p className="text-depth-3/80 font-inter text-sm max-w-2xl mx-auto leading-relaxed">
              These are specific account-level deletions pulled from real client updates, paired with the client&apos;s own reaction to seeing those items come off.
            </p>
          </div>

          <div className="space-y-12">
            {/* Group 1: Jefferson Capital / Bank of America — shared screenshot */}
            <div className="bg-white border border-warm-cream rounded-sm shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Screenshot */}
                <div className="w-full bg-warm-ivory overflow-hidden border-b md:border-b-0 md:border-r border-warm-cream">
                  <img
                    src="/testimonials/testimonial-proof-jefferson-capital-bank-of-america.jpg"
                    alt="Credit report screenshot showing Jefferson Capital and Bank of America marked deleted."
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Grouped quotes */}
                <div className="p-8 flex flex-col justify-center space-y-8">
                  {deletionProofs
                    .filter((t) => t.sharedImage === "jefferson-capital-boa")
                    .map((t, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {t.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted border border-gold-primary/30 px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <blockquote className="text-depth-3/80 font-inter text-sm leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <p className="text-depth-3/50 font-inter text-xs font-semibold tracking-widest uppercase">
                          — {t.name}
                        </p>
                        {idx === 0 && <div className="w-full h-px bg-warm-cream" />}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Group 2: Caine Weiner — standalone */}
            {deletionProofs
              .filter((t) => t.sharedImage === "caine-weiner")
              .map((t, idx) => (
                <div key={idx} className="bg-white border border-warm-cream rounded-sm shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="w-full bg-warm-ivory overflow-hidden border-b md:border-b-0 md:border-r border-warm-cream">
                      <img src={t.image} alt={t.alt} className="w-full h-full object-cover object-center" loading="lazy" />
                    </div>
                    <div className="p-8 flex flex-col justify-center space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {t.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted border border-gold-primary/30 px-3 py-1">{tag}</span>
                        ))}
                      </div>
                      <blockquote className="text-depth-3/80 font-inter text-sm leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <p className="text-depth-3/50 font-inter text-xs font-semibold tracking-widest uppercase">— {t.name}</p>
                    </div>
                  </div>
                </div>
              ))}

            {/* Group 3: Acima Digital / Bankruptcy / Affirm — shared screenshot */}
            <div className="bg-white border border-warm-cream rounded-sm shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Screenshot */}
                <div className="w-full bg-warm-ivory overflow-hidden border-b md:border-b-0 md:border-r border-warm-cream">
                  <img
                    src="/testimonials/testimonial-proof-acima-affirm-bankruptcy.jpg"
                    alt="Credit report screenshot showing Acima Digital, Affirm, and Bankruptcy marked deleted."
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>

                {/* Grouped quotes */}
                <div className="p-8 flex flex-col justify-center space-y-8">
                  {deletionProofs
                    .filter((t) => t.sharedImage === "acima-affirm-bankruptcy")
                    .map((t, idx, arr) => (
                      <div key={idx} className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {t.tags.map((tag) => (
                            <span key={tag} className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-muted border border-gold-primary/30 px-3 py-1">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <blockquote className="text-depth-3/80 font-inter text-sm leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                        <p className="text-depth-3/50 font-inter text-xs font-semibold tracking-widest uppercase">
                          — {t.name}
                        </p>
                        {idx < arr.length - 1 && <div className="w-full h-px bg-warm-cream" />}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── DISCLAIMER ────────────────────────────────────────────── */}
      <Section className="py-10">
        <Container className="max-w-3xl mx-auto text-center">
          <p className="text-text-muted font-inter text-xs leading-relaxed">
            Testimonials reflect individual client experiences. Results vary based on credit profile, reporting history, documentation, participation, and overall goals. These results are not a guarantee of what any individual will achieve.
          </p>
        </Container>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <Section className="py-24" dark>
        <Container className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-4xl text-white leading-tight font-trajan tracking-widest uppercase">
            Ready to see what is on your file?
          </h2>
          <p className="text-text-secondary font-inter text-base">
            Choose the path that fits where you are right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button href="/schedule" variant="primary" size="lg">
              BOOK FREE CONSULTATION
            </Button>
            <Button href="/credit-video-analysis" variant="gold" size="lg">
              GET FREE VIDEO ANALYSIS
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
