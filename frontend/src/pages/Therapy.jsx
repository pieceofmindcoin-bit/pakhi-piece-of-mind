import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import MaskedLines from "@/components/MaskedLines";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import FinalCta from "@/components/FinalCta";

const CouchGraphic = () => (
  <svg viewBox="0 0 360 260" className="w-64 lg:w-72" role="img" aria-label="Minimal illustration of a calm green therapy couch">
    <rect x="72" y="58" width="216" height="92" rx="30" fill="#2C3E3E" />
    <rect x="96" y="82" width="48" height="42" rx="12" fill="#F2E9DC" transform="rotate(-8 120 103)" />
    <rect x="40" y="108" width="42" height="82" rx="18" fill="#2C3E3E" />
    <rect x="278" y="108" width="42" height="82" rx="18" fill="#2C3E3E" />
    <rect x="86" y="110" width="90" height="48" rx="14" fill="#B7C9B3" />
    <rect x="184" y="110" width="90" height="48" rx="14" fill="#B7C9B3" />
    <rect x="76" y="158" width="208" height="34" rx="14" fill="#44575A" />
    <rect x="88" y="192" width="12" height="26" rx="6" fill="#2C3E3E" />
    <rect x="260" y="192" width="12" height="26" rx="6" fill="#2C3E3E" />
  </svg>
);

const CONCERNS = [
  { label: "Low mood", c: "text-xl lg:text-2xl italic text-sage-dark", s: { top: "2%", left: "10%" } },
  { label: "Anxiety", c: "text-2xl lg:text-3xl text-forest", s: { top: "5%", right: "14%" } },
  { label: "Grief", c: "text-lg lg:text-xl italic text-forest-soft", s: { top: "18%", left: "33%", transform: "rotate(-3deg)" } },
  { label: "Trauma", c: "text-xl lg:text-2xl text-forest", s: { top: "20%", right: "31%", transform: "rotate(2deg)" } },
  { label: "Stress & burnout", c: "text-lg lg:text-xl italic text-sage-dark", s: { top: "31%", left: "2%" } },
  { label: "Shame & guilt", c: "text-xl lg:text-2xl text-forest", s: { top: "34%", right: "2%", transform: "rotate(-2deg)" } },
  { label: "Life transitions", c: "text-lg lg:text-xl italic text-forest-soft", s: { top: "47%", left: "7%" } },
  { label: "Emotional dysregulation", c: "text-base lg:text-lg text-sage-dark", s: { top: "49%", right: "4%", transform: "rotate(2deg)" } },
  { label: "Neurodiversity", c: "text-2xl lg:text-3xl text-forest", s: { bottom: "27%", left: "4%" } },
  { label: "Feeling “not like yourself”", c: "text-lg lg:text-xl italic text-forest-soft", s: { bottom: "29%", right: "10%" } },
  { label: "Relationship difficulties", c: "text-lg lg:text-xl text-forest", s: { bottom: "15%", left: "15%", transform: "rotate(-2deg)" } },
  { label: "Self-esteem", c: "text-xl lg:text-2xl italic text-sage-dark", s: { bottom: "3%", left: "39%" } },
  { label: "Identity & belonging", c: "text-lg lg:text-xl text-forest", s: { bottom: "9%", right: "3%" } },
  { label: "Social issues", c: "text-base lg:text-lg italic text-forest-soft", s: { top: "11%", left: "49%", transform: "rotate(2deg)" } },
  { label: "Gender and sexuality", c: "text-lg lg:text-xl text-forest", s: { bottom: "17%", right: "29%" } },
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
      description="1:1 therapy, on your terms. Non-judgmental, compassionate and confidential services. Available online worldwide and in person in Pune."
    />

    <section data-testid="therapy-hero" className="bg-sage border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="therapy-headline">
              1:1 therapy, on <em className="italic text-forest/70">your terms.</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest/85 max-w-xl" data-testid="therapy-hero-copy">
              Non-judgmental, compassionate and confidential services
              <br />
              Available online worldwide and in person in Pune
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
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-offwhite/50" aria-hidden="true" />
              <div className="relative w-72 lg:w-80 aspect-square rounded-full bg-sand flex items-center justify-center" data-testid="therapy-hero-visual">
                <CouchGraphic />
              </div>
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
        <Reveal className="relative hidden lg:block min-h-[640px]" data-testid="concerns-canvas">
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-3xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-forest text-center max-w-md" data-testid="concerns-title">
            Wherever you’re <em className="italic text-sage-dark">starting from.</em>
          </h2>
          {CONCERNS.map((c) => (
            <span
              key={c.label}
              className={`absolute font-serif whitespace-nowrap ${c.c}`}
              style={c.s}
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

    <section data-testid="therapy-how" className="bg-forest py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro dark id="how-it-works" title={<>Three steps <em className="italic text-sage">to begin.</em></>} />
        <div className="mt-16 grid sm:grid-cols-3 gap-12 lg:gap-10">
          {STEPS.map(({ num, title, copy }, i) => (
            <Reveal key={num} delay={i * 0.12}>
              <div className="text-center sm:text-left" data-testid={`step-${num}`}>
                <span className="inline-flex w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-offwhite items-center justify-center font-serif text-2xl lg:text-3xl text-forest">
                  {num}
                </span>
                <h3 className="mt-6 font-serif text-xl lg:text-2xl font-semibold tracking-tight text-offwhite">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-offwhite/75">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="therapy-approach" className="bg-sand/60 border-b border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="our-approach" title={<>The way <em className="italic text-sage-dark">we work.</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {APPROACH.map(({ title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-[1.75rem] bg-forest p-9 transition-all duration-300 hover:-translate-y-1" data-testid={`approach-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <h3 className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-offwhite">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-offwhite/80">{copy}</p>
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
