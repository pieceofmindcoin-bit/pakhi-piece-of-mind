import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import FinalCta from "@/components/FinalCta";

const CONCERNS = [
  "Anxiety & overthinking",
  "Stress & burnout",
  "Low mood",
  "Relationships",
  "Self-esteem & self-worth",
  "Life transitions",
  "Grief & loss",
  "Feeling stuck or lost",
];

const STEPS = [
  { num: "01", title: "Book a free consultation", copy: "A short, no-pressure call to share what’s bringing you here." },
  { num: "02", title: "See if it’s a fit", copy: "We talk about what you need and whether working together feels right." },
  { num: "03", title: "Begin your journey", copy: "Sessions at your pace — online worldwide, or in-person in Pune." },
];

const APPROACH = [
  { title: "Integrative", copy: "Drawing from many modalities, so therapy fits you — not the other way around." },
  { title: "Person-centered", copy: "Your experiences and your pace lead every session." },
  { title: "Trauma-informed", copy: "Safety, choice and trust come first, always." },
  { title: "Queer-affirmative", copy: "Every identity, orientation and way of being is respected." },
];

const Therapy = () => (
  <>
    <Seo
      title="Individual Therapy — Piece of Mind"
      description="1:1 therapy, on your terms. Non-judgmental, compassionate and confidential — online worldwide and in-person in Pune."
    />

    <section data-testid="therapy-hero" className="bg-sand/60 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Individual Therapy</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="therapy-headline">
            1:1 therapy, on <em className="italic text-sage-dark">your terms.</em>
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft" data-testid="therapy-hero-copy">
            Non-judgmental, compassionate, and confidential. Online worldwide and in-person in Pune.
          </p>
          <div className="mt-10">
            <ButtonLink to="/contact" testId="therapy-hero-cta" withArrow>
              Book a therapy session
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>

    <section data-testid="therapy-statement" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <p className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.15] text-forest" data-testid="therapy-statement-text">
            a space<br />
            <span className="text-sage-dark">to feel</span><br />
            <em className="italic">heard</em>
          </p>
        </Reveal>
      </div>
    </section>

    <section data-testid="therapy-concerns" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="concerns"
          eyebrow="What we can help with"
          title={<>Wherever you’re <em className="italic text-sage-dark">starting from.</em></>}
          copy="You don’t need the right words, or a diagnosis, to begin. These are some of the things people bring."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-x-14">
          {CONCERNS.map((c, i) => (
            <Reveal key={c} delay={Math.min(i * 0.04, 0.2)}>
              <div className="flex items-baseline gap-5 border-t border-line/70 py-6" data-testid={`concern-${i + 1}`}>
                <span className="font-serif italic text-base text-sage-dark shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-serif text-xl lg:text-2xl text-forest">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="therapy-how" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="how-it-works" eyebrow="How it works" title={<>Three steps <em className="italic text-sage-dark">to begin.</em></>} />
        <div className="mt-16 grid sm:grid-cols-3 gap-12 lg:gap-10">
          {STEPS.map(({ num, title, copy }, i) => (
            <Reveal key={num} delay={i * 0.12}>
              <div className="text-center sm:text-left" data-testid={`step-${num}`}>
                <span className="inline-flex w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-sage-light border border-sage/60 items-center justify-center font-serif text-2xl lg:text-3xl text-forest">
                  {num}
                </span>
                <h3 className="mt-6 font-serif text-xl lg:text-2xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="therapy-approach" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="our-approach" eyebrow="Our approach" title={<>The way <em className="italic text-sage-dark">we work.</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {APPROACH.map(({ title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-[1.75rem] border border-line/70 bg-offwhite p-9 transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`approach-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FinalCta
      testId="therapy-cta"
      title={<>Ready when <em className="italic text-sage">you are.</em></>}
      copy="Book a free 15-minute consultation. No pressure to continue."
      primary={{ to: "/contact", label: "Book a Therapy Session", testId: "therapy-cta-book" }}
    />
  </>
);

export default Therapy;
