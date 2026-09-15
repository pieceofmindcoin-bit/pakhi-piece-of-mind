import { Check } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";

const PATHWAYS = [
  {
    id: "individual",
    num: "01",
    eyebrow: "One-to-One",
    title: "Individual Support",
    copy: "Private, confidential sessions where you can talk openly, untangle what you’re feeling and find your footing — with someone trained to listen. No pressure, no labels, no rush.",
    points: [
      "A safe, non-judgemental space to talk",
      "Sessions shaped around your pace and needs",
      "Support with stress, anxiety, transitions and self-understanding",
    ],
    cta: { to: "/contact", label: "Reach out for support", testId: "individual-cta" },
    testId: "support-section-individual",
    image: null,
    bg: "",
  },
  {
    id: "workshops",
    num: "02",
    eyebrow: "Learn & Grow",
    title: "Workshops & Learning",
    copy: "Small-group workshops that turn wellbeing into a practical skill — interactive, reflective and genuinely engaging. Because learning about your mind can be meaningful and enjoyable.",
    points: [
      "Interactive, reflective and jargon-free",
      "Tools you can use the same day",
      "Open to individuals, groups and communities",
    ],
    cta: { to: "/corporate-workshops#workshops", label: "See workshop themes", testId: "workshops-cta" },
    testId: "support-section-workshops",
    image: { src: "/assets/glimpse-3.webp", alt: "A facilitator explaining stress concepts during a wellbeing workshop" },
    bg: "bg-sand/60 border-y border-line/50",
  },
  {
    id: "corporate",
    num: "03",
    eyebrow: "For Organisations",
    title: "Corporate Wellbeing",
    copy: "Wellbeing talks, workshop series and ongoing programmes that help schools, teams and workplaces build healthier, more humane cultures.",
    points: [
      "Tailored to your people and context",
      "For schools, colleges, teams and companies",
      "From single sessions to year-round programmes",
    ],
    cta: { to: "/corporate-workshops", label: "Explore corporate wellbeing", testId: "corporate-cta" },
    testId: "support-section-corporate",
    image: { src: "/assets/glimpse-4.webp", alt: "A group workshop in progress around a conference table" },
    bg: "",
  },
];

const Support = () => (
  <>
    <Seo
      title="Support — A Piece of Mind"
      description="Ways to find support with A Piece of Mind: individual sessions, workshops and corporate wellbeing programmes."
    />

    <section data-testid="support-hero" className="border-b border-line/50 bg-sand/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Support</p>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.12] text-forest" data-testid="support-headline">
            However you arrive, <em className="italic text-sage-dark">you’re welcome.</em>
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft">
            Support looks different for everyone. Choose the path that fits — one-to-one
            sessions, group workshops, or wellbeing programmes for your organisation.
          </p>
        </Reveal>
      </div>
    </section>

    <div>
      {PATHWAYS.map(({ id, num, eyebrow, title, copy, points, cta, testId, image, bg }, i) => (
        <section key={id} id={id} data-testid={testId} className={`py-24 lg:py-28 scroll-mt-24 ${bg}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className={image && i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-baseline gap-5 mb-6">
                <span className="font-serif italic text-lg text-clay-dark">{num}</span>
                <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark">{eyebrow}</p>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-forest">{title}</h2>
              <p className="mt-5 text-base lg:text-lg leading-relaxed text-forest-soft">{copy}</p>
              <div className="mt-9">
                <ButtonLink to={cta.to} testId={cta.testId} withArrow>
                  {cta.label}
                </ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.12} className={image && i % 2 === 1 ? "lg:order-1" : ""}>
              {image ? (
                <div className="relative max-w-md mx-auto">
                  <div className="absolute -inset-4 rounded-[2rem] bg-sage-light" aria-hidden="true" />
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="relative w-full aspect-[4/5] object-cover rounded-[2rem]"
                  />
                </div>
              ) : (
                <div className="border border-line bg-sand/50 p-8 lg:p-12 rounded-[2rem]">
                  <h3 className="font-serif text-lg font-semibold text-forest mb-6">What to expect</h3>
                  <ul className="space-y-5">
                    {points.map((p) => (
                      <li key={p} className="flex gap-4 items-start">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-sage flex items-center justify-center text-forest shrink-0">
                          <Check size={14} strokeWidth={2} />
                        </span>
                        <span className="text-sm lg:text-base leading-relaxed text-forest-soft">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </section>
      ))}
    </div>

    <section data-testid="support-cta" className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-offwhite">
            Not sure where <em className="italic text-clay">to start?</em>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-offwhite/75 max-w-lg mx-auto">
            Send us a message — we’ll help you find the right kind of support, gently.
          </p>
          <div className="mt-9">
            <ButtonLink to="/contact" variant="light" testId="support-cta-contact" withArrow>
              Contact Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Support;
