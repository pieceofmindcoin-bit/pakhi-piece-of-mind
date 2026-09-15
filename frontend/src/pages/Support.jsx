import { HeartHandshake, Sprout, Building2, Check } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";

const PATHWAYS = [
  {
    id: "individual",
    Icon: HeartHandshake,
    eyebrow: "One-to-One",
    title: "Individual Support",
    copy: "Private, confidential sessions where you can talk openly, untangle what you’re feeling and find your footing — with someone trained to listen.",
    points: [
      "A safe, non-judgemental space to talk",
      "Sessions shaped around your pace and needs",
      "Support with stress, anxiety, transitions and self-understanding",
    ],
    cta: { to: "/contact", label: "Reach out for support", testId: "individual-cta" },
    testId: "support-section-individual",
  },
  {
    id: "workshops",
    Icon: Sprout,
    eyebrow: "Learn & Grow",
    title: "Workshops & Learning",
    copy: "Small-group workshops that turn wellbeing into a practical skill — covering emotional awareness, stress, communication and resilience.",
    points: [
      "Interactive, reflective and jargon-free",
      "Tools you can use the same day",
      "Open to individuals, groups and communities",
    ],
    cta: { to: "/corporate-workshops#workshops", label: "See workshop themes", testId: "workshops-cta" },
    testId: "support-section-workshops",
  },
  {
    id: "corporate",
    Icon: Building2,
    eyebrow: "For Organisations",
    title: "Corporate Wellbeing",
    copy: "Wellbeing talks, workshop series and ongoing programmes that help schools, teams and workplaces build healthier cultures.",
    points: [
      "Tailored to your people and context",
      "For schools, colleges, teams and companies",
      "From single sessions to year-round programmes",
    ],
    cta: { to: "/corporate-workshops", label: "Explore corporate wellbeing", testId: "corporate-cta" },
    testId: "support-section-corporate",
  },
];

const Support = () => (
  <>
    <Seo
      title="Support — A Piece of Mind"
      description="Ways to find support with A Piece of Mind: individual sessions, workshops and corporate wellbeing programmes."
    />

    <section data-testid="support-hero" className="border-b border-line/60 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-6">Support</p>
          <h1 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight text-ink" data-testid="support-headline">
            However you arrive, you’re welcome.
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-muted">
            Support looks different for everyone. Choose the path that fits — one-to-one
            sessions, group workshops, or wellbeing programmes for your organisation.
          </p>
        </Reveal>
      </div>
    </section>

    <div>
      {PATHWAYS.map(({ id, Icon, eyebrow, title, copy, points, cta, testId }, i) => (
        <section
          key={id}
          id={id}
          data-testid={testId}
          className={`py-24 lg:py-28 scroll-mt-24 ${i % 2 === 1 ? "bg-surface border-y border-line/60" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="flex items-center gap-5 mb-8">
                <span className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center text-sage-deep">
                  <Icon size={28} strokeWidth={1.5} />
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep">{eyebrow}</p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-ink">{title}</h2>
              <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-muted">{copy}</p>
              <div className="mt-9">
                <ButtonLink to={cta.to} testId={cta.testId} withArrow>
                  {cta.label}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-line bg-cream p-8 lg:p-12">
                <h3 className="font-heading text-lg font-semibold text-ink mb-6">What to expect</h3>
                <ul className="space-y-5">
                  {points.map((p) => (
                    <li key={p} className="flex gap-4 items-start">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-sage-light flex items-center justify-center text-sage-deep shrink-0">
                        <Check size={14} strokeWidth={2} />
                      </span>
                      <span className="text-sm lg:text-base leading-relaxed text-ink-muted">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>
      ))}
    </div>

    <section data-testid="support-cta" className="bg-sage-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream">Not sure where to start?</h2>
          <p className="mt-4 text-base lg:text-lg text-cream/80 max-w-lg mx-auto">
            Send us a message — we’ll help you find the right kind of support, gently.
          </p>
          <div className="mt-9">
            <ButtonLink to="/contact" testId="support-cta-contact" withArrow>
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Support;
