import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import MaskedLines from "@/components/MaskedLines";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import FinalCta from "@/components/FinalCta";

const CONCERNS = [
  { label: "Anxiety & overthinking", className: "text-2xl lg:text-3xl italic text-forest", style: { top: "4%", left: "6%" } },
  { label: "Stress & burnout", className: "text-xl lg:text-2xl text-sage-dark", style: { top: "8%", right: "8%" } },
  { label: "Grief & loss", className: "text-lg lg:text-xl italic text-forest-soft", style: { top: "36%", left: "0%", transform: "rotate(-4deg)" } },
  { label: "Relationships", className: "text-2xl lg:text-3xl text-forest", style: { top: "32%", right: "2%", transform: "rotate(3deg)" } },
  { label: "Low mood", className: "text-xl lg:text-2xl italic text-sage-dark", style: { bottom: "26%", left: "10%" } },
  { label: "Self-esteem & self-worth", className: "text-lg lg:text-xl text-forest-soft", style: { bottom: "20%", right: "6%", transform: "rotate(-3deg)" } },
  { label: "Life transitions", className: "text-2xl lg:text-3xl text-forest", style: { bottom: "2%", left: "30%" } },
  { label: "Feeling stuck or lost", className: "text-xl lg:text-2xl italic text-sage-dark", style: { bottom: "6%", right: "24%", transform: "rotate(2deg)" } },
];

const STEPS = [
  { num: "01", title: "Book a consultation", copy: "A short, no-pressure call to share what’s bringing you here." },
  { num: "02", title: "See if it’s a fit", copy: "We talk about what you need and whether working together feels right." },
  { num: "03", title: "Begin your journey", copy: "Sessions at your pace, online worldwide or in-person in Pune." },
];

const APPROACH = [
  { title: "Integrative", copy: "Drawing from many modalities, so therapy fits you, not the other way around." },
  { title: "Person-centered", copy: "Your experiences and your pace lead every session." },
  { title: "Trauma-informed", copy: "Safety, choice and trust come first, always." },
  { title: "Queer-affirmative", copy: "Every identity, orientation and way of being is respected." },
];

const Therapy = () => (
  <>
    <Seo
      title="Individual Therapy: Piece of Mind"
      description="1:1 therapy, on your terms. Non-judgmental, compassionate and confidential. Online worldwide and in-person in Pune."
    />

    <section data-testid="therapy-hero" className="bg-sand/60 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="therapy-headline">
              1:1 therapy, on <em className="italic text-sage-dark">your terms.</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft max-w-xl" data-testid="therapy-hero-copy">
              Non-judgmental, compassionate, and confidential. Online worldwide and in-person in Pune.
            </p>
            <div className="mt-10">
              <ButtonLink to="/contact" testId="therapy-hero-cta" withArrow>
                Book a therapy session
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <Reveal delay={0.15} scale>
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] bg-sage-light" />
              <img
                src="/assets/glimpse-1.webp"
                alt="A calm, warm group session in a softly lit room"
                className="relative w-72 lg:w-80 aspect-[4/5] object-cover rounded-t-[999px] rounded-b-[2rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="therapy-statement" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.15] text-forest" data-testid="therapy-statement-text">
          <MaskedLines
            inView
            delay={0.1}
            lines={[
              "a space",
              <span key="l2" className="text-sage-dark">to feel</span>,
              <em key="l3" className="italic">heard</em>,
            ]}
          />
        </h2>
      </div>
    </section>

    <section data-testid="therapy-concerns" className="bg-sand/60 border-y border-line/50 py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal className="relative hidden lg:block min-h-[540px]" data-testid="concerns-canvas">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-forest text-center max-w-md" data-testid="concerns-title">
            Wherever you’re <em className="italic text-sage-dark">starting from.</em>
          </h2>
          {CONCERNS.map((c) => (
            <span
              key={c.label}
              className={`absolute font-serif whitespace-nowrap ${c.className}`}
              style={c.style}
              data-testid={`concern-${c.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              {c.label}
            </span>
          ))}
        </Reveal>
        <div className="lg:hidden text-center" data-testid="concerns-mobile">
          <h2 className="font-serif text-3xl tracking-tight leading-[1.15] text-forest">
            Wherever you’re <em className="italic text-sage-dark">starting from.</em>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center items-baseline gap-x-6 gap-y-4">
            {CONCERNS.map((c, i) => (
              <span
                key={c.label}
                className={`font-serif ${i % 3 === 0 ? "text-xl italic text-sage-dark" : i % 3 === 1 ? "text-lg text-forest" : "text-base text-forest-soft"}`}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section data-testid="therapy-how" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="how-it-works" title={<>Three steps <em className="italic text-sage-dark">to begin.</em></>} />
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
        <SectionIntro id="our-approach" title={<>The way <em className="italic text-sage-dark">we work.</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {APPROACH.map(({ title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-[1.75rem] border border-sage/50 bg-sage-light/70 p-9 transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`approach-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
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
      copy="Book a 15-minute consultation. No pressure to continue."
      primary={{ to: "/contact", label: "Book a Therapy Session", testId: "therapy-cta-book" }}
    />
  </>
);

export default Therapy;
