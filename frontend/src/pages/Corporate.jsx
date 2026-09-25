import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import FinalCta from "@/components/FinalCta";
import { TestimonialsSection } from "@/components/Testimonials";

const CORPORATE_TESTIMONIALS = [
  {
    quote: "Very interactive workshop. Helpful for me to recall on my weakness, work on my skill set and communication part.",
  },
  {
    quote: "Mindful workshop! Helped me find and work upon my area of improvement.",
  },
  {
    quote: "Very meaningful workshop it was. It helped us to improve our skills that would be going to improve our team also. Clarity in thoughts must be flown among the team.",
  },
  {
    quote:
      "I actually REALLY loved the workshop. We had group activities as part of a corporate workshop, but it was focused more on the individual. The Piece of Mind team ensured that we felt extremely comfortable. The discussions were interactive, focused on important techniques that could be used around the workplace and is definitely on my daily stress buster to-do list!",
  },
];

const WAYS = [
  {
    num: "01",
    title: "Tailor-Made Workshops",
    copy: "We can tailor-make workshops around the needs, culture and goals of your workplace. It can begin with a simple conversation, a call, or a workplace audit, so we can recommend what would be most useful.",
    testId: "way-tailor-made",
  },
  {
    num: "02",
    title: "Choose From Existing Workshops",
    copy: "Companies can simply select from our existing workshops.",
    testId: "way-existing",
    examples: ["Stress Management", "Procrastination", "Emotional Regulation", "Communication", "Anxiety Management", "Improving Focus"],
  },
];

const PROCESS = [
  { num: "01", title: "Discovery / Brief", copy: "We listen first: to your people, your context and what wellbeing means in your world." },
  { num: "02", title: "Workshop Design", copy: "We shape the session around your team, culture, goals and format." },
  { num: "03", title: "Delivery", copy: "We facilitate a warm, engaging experience, and gather reflections after." },
];

const GLIMPSES = [
  { src: "/assets/corp-4.webp", alt: "Facilitator presenting eustress and distress concepts at a stress management workshop for BuildUp Global", caption: "Stress management workshop for BuildUp Global", cls: "md:col-span-3 md:row-span-2" },
  { src: "/assets/corp-2.webp", alt: "Online communication and team dynamics workshop with Fine Equipments", caption: "Communication workshop for Fine Equipments", cls: "md:col-span-3" },
  { src: "/assets/corp-1.webp", alt: "Workplace therapy session around a conference table", caption: "Workplace therapy", cls: "md:col-span-2" },
  { src: "/assets/corp-3.webp", alt: "Piece of Mind mental health pop-up table at a café", caption: "Mental health pop-up", cls: "md:col-span-4" },
];

const Corporate = () => (
  <>
    <Seo
      title="Corporate Well-being: Piece of Mind"
      description="Tailor-made wellbeing workshops and programmes for workplaces, organisations, schools and teams, from brief to delivery."
    />

    <section data-testid="corporate-hero" className="border-b border-line/50 bg-sage">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="corporate-headline">
              Wellbeing that works <em className="italic text-forest/70">where you do.</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest/85 max-w-xl">
              Piece of Mind brings meaningful wellbeing experiences into workplaces,
              organisations, schools, teams and groups: thoughtful, practical and deeply human.
            </p>
            <div className="mt-10">
              <ButtonLink to="/contact" testId="corporate-hero-cta" withArrow>
                Get in touch
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <Reveal delay={0.15} scale>
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] bg-clay-light" />
              <img
                src="/assets/glimpse-4.webp"
                alt=""
                className="relative w-72 lg:w-80 aspect-[4/5] object-cover rounded-t-[999px] rounded-b-[2rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="corporate-intro" className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro id="corporate-wellbeing-intro" title={<>Culture begins with <em className="italic text-sage-dark">care</em></>} />
        </div>
        <div className="lg:col-span-7 flex items-center">
          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg leading-relaxed text-forest-soft">
              Stress, burnout and disconnection rarely announce themselves. They build quietly.
              Our corporate well-being work helps organisations notice early, talk openly and
              build cultures where people can genuinely thrive, not just cope.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="workshops-offered" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="workshops-offer"
          title={<>Workshops that work for <em className="italic text-sage-dark">your team.</em></>}
          copy="Every workplace is different. There are two gentle ways we can begin, and neither of them starts with a sales pitch."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {WAYS.map(({ num, title, copy, testId, examples }, i) => (
            <Reveal key={num} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-[1.75rem] bg-forest p-9 lg:p-11 transition-all duration-300 hover:-translate-y-1" data-testid={testId}>
                <span className="inline-flex w-16 h-16 rounded-full bg-offwhite items-center justify-center font-serif text-xl text-forest">
                  {num}
                </span>
                <h3 className="mt-7 font-serif text-xl lg:text-2xl font-semibold tracking-tight text-offwhite">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-offwhite/80">{copy}</p>
                {examples && (
                  <div className="mt-6 flex flex-wrap gap-2" data-testid="existing-workshop-examples">
                    {examples.map((e) => (
                      <span key={e} className="rounded-full border border-offwhite/30 bg-offwhite/10 px-4 py-1.5 text-xs lg:text-sm text-offwhite/90">
                        {e}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="how-we-partner" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="from-brief" title={<>From brief <em className="italic text-sage-dark">to delivery</em></>} />
        <div className="mt-16 grid sm:grid-cols-3 gap-12 lg:gap-10">
          {PROCESS.map(({ num, title, copy }, i) => (
            <Reveal key={num} delay={i * 0.12}>
              <div data-testid={`partner-step-${num}`}>
                <span className="inline-flex w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-forest items-center justify-center font-serif text-3xl lg:text-4xl text-offwhite">
                  {num}
                </span>
                <h3 className="mt-7 font-serif text-xl lg:text-2xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <TestimonialsSection
      sectionTestId="corporate-testimonials-section"
      titleTestId="corporate-testimonials-title"
      marqueeTestId="corporate-testimonials-marquee"
      ariaLabel="What teams have to say"
      title={<>What teams <em className="italic text-sage">have to say.</em></>}
      items={CORPORATE_TESTIMONIALS}
    />

    <section id="glimpses" data-testid="glimpses-section" className="py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="glimpses"
          title={<>Moments from our <em className="italic text-sage-dark">sessions</em></>}
          copy="A quiet look inside our workshops and wellbeing spaces: real people, real conversations."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 auto-rows-[240px] gap-5">
          {GLIMPSES.map(({ src, alt, caption, cls }, i) => (
            <Reveal key={src} delay={i * 0.06} scale className={cls}>
              <figure className="group relative h-full w-full overflow-hidden rounded-[1.5rem]" data-testid={`glimpse-${i + 1}`}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-5 pb-4 pt-10 text-offwhite text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FinalCta
      testId="corporate-cta"
      title={<>Let’s design something for <em className="italic text-sage">your people.</em></>}
      copy="Tell us about your school, team or workplace, and we’ll shape a session or programme that fits."
      primary={{ to: "/contact", label: "Start a Conversation", testId: "corporate-cta-contact" }}
    />
  </>
);

export default Corporate;
