import { Megaphone, Layers, CalendarHeart, ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";

const AREAS = [
  { title: "Workplace wellbeing sessions", copy: "Regular, grounded sessions that make wellbeing part of the working week." },
  { title: "Mental wellbeing awareness", copy: "Honest, stigma-free introductions to mental health for every level of an organisation." },
  { title: "Stress management", copy: "Understanding stress, spotting burnout early and responding with practical tools." },
  { title: "Emotional awareness", copy: "Helping people notice, name and work with their emotions — at work and beyond." },
  { title: "Self-awareness", copy: "Gentle reflection on patterns, needs and strengths that shape how we show up." },
  { title: "Resilience", copy: "Building the capacity to bend without breaking through pressure and change." },
  { title: "Communication", copy: "Listening, feedback and difficult conversations handled with clarity and care." },
  { title: "Healthy workplace culture", copy: "Moving wellbeing from a poster on the wall to something people genuinely feel." },
];

const OFFERINGS = [
  { Icon: Megaphone, title: "Talks & Sessions", copy: "Engaging one-off sessions that open honest conversations about mental wellbeing." },
  { Icon: Layers, title: "Workshop Series", copy: "Multi-session journeys that build emotional awareness and practical skills over time." },
  { Icon: CalendarHeart, title: "Ongoing Programmes", copy: "Year-round wellbeing partnerships woven into your organisation’s culture." },
];

const THEMES = [
  { title: "Mental wellbeing", copy: "A warm, honest foundation — what mental health really is and how to care for it." },
  { title: "Emotional awareness", copy: "Learning to notice, name and normalise feelings instead of fighting them." },
  { title: "Stress management", copy: "Practical ways to understand pressure, prevent burnout and recover well." },
  { title: "Self-awareness", copy: "Reflective exercises that reveal patterns, needs and personal strengths." },
  { title: "Resilience", copy: "Tools for navigating setbacks, uncertainty and change with steadiness." },
  { title: "Communication", copy: "Everyday skills for listening deeply and speaking with clarity and kindness." },
  { title: "Healthy workplace culture", copy: "How teams can build trust, psychological safety and mutual support." },
];

const AUDIENCES = [
  "Schools",
  "Colleges",
  "Organisations",
  "Corporate teams",
  "Employee groups",
  "Community groups",
];

const BENEFITS = [
  { title: "Greater awareness", copy: "People understand their minds — and each other — a little better." },
  { title: "Better communication", copy: "Clearer, kinder conversations across teams and classrooms." },
  { title: "Healthier conversations", copy: "Mental health becomes speakable, without stigma or awkwardness." },
  { title: "Practical coping tools", copy: "Simple techniques people actually use after the session ends." },
  { title: "Stronger self-understanding", copy: "Reflection that builds confidence, calm and clarity." },
  { title: "More supportive environments", copy: "Spaces where people feel safe, seen and able to thrive." },
];

const GLIMPSES = [
  { src: "/assets/glimpse-2.webp", alt: "Facilitator presenting emotional wellbeing concepts to a group", caption: "Workshop · Emotional awareness", cls: "md:col-span-3 md:row-span-2" },
  { src: "/assets/glimpse-1.webp", alt: "Participants writing and reflecting during an evening wellbeing circle", caption: "Community circle · Reflection", cls: "md:col-span-3" },
  { src: "/assets/glimpse-3.webp", alt: "Stress management session with an interactive presentation", caption: "Workshop · Stress management", cls: "md:col-span-2" },
  { src: "/assets/glimpse-4.webp", alt: "Team workshop around a conference table", caption: "Corporate session · Team wellbeing", cls: "md:col-span-4" },
];

const Corporate = () => (
  <>
    <Seo
      title="Corporate Wellbeing & Workshops — A Piece of Mind"
      description="Wellbeing talks, workshops and programmes for schools, teams and workplaces — plus a glimpse of our sessions in action."
    />

    <section data-testid="corporate-hero" className="border-b border-line/50 bg-sand/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Corporate & Workshops</p>
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.12] text-forest" data-testid="corporate-headline">
              Corporate Wellbeing <em className="italic text-sage-dark">& Workshops</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft max-w-xl">
              A Piece of Mind brings meaningful wellbeing experiences into workplaces,
              organisations, schools, teams and groups — thoughtful, practical and deeply human.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/contact" testId="corporate-hero-cta" withArrow>
                Plan a Session
              </ButtonLink>
              <ButtonLink to="#glimpses" variant="ghost" testId="corporate-hero-glimpses">
                See Glimpses
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <Reveal delay={0.15}>
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] bg-clay-light" />
              <img
                src="/assets/glimpse-3.webp"
                alt=""
                className="relative w-72 lg:w-80 aspect-[4/5] object-cover rounded-t-[999px] rounded-b-[2rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="corporate-wellbeing" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="corporate-wellbeing-intro"
          eyebrow="Corporate Wellbeing"
          title={<>Culture begins with <em className="italic text-sage-dark">care</em></>}
          copy="Stress, burnout and disconnection rarely announce themselves — they build quietly. Our corporate wellbeing work helps organisations notice early, talk openly and build cultures where people can genuinely thrive."
        />
        <div className="mt-16">
          {AREAS.map(({ title, copy }, i) => (
            <Reveal key={title} delay={Math.min(i * 0.04, 0.2)}>
              <div className="group grid md:grid-cols-12 gap-3 md:gap-10 items-baseline border-t border-line/70 py-7 transition-colors duration-300 hover:bg-sage-light/40" data-testid={`area-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <span className="md:col-span-1 font-serif italic text-base text-clay-dark">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="md:col-span-5 font-serif text-xl lg:text-2xl font-semibold tracking-tight text-forest transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
                <p className="md:col-span-6 text-sm lg:text-base leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="corporate-offerings" className="bg-sand/60 border-y border-line/50 py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="offerings" eyebrow="What We Offer" title={<>Wellbeing <em className="italic text-sage-dark">offerings</em></>} copy="Flexible formats, shaped around your people, schedule and goals." />
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {OFFERINGS.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="group h-full border border-line/70 bg-offwhite p-10 transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`offering-card-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <span className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center text-forest transition-colors duration-300 group-hover:bg-sage">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <h3 className="mt-7 font-serif text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section id="workshops" data-testid="workshops-section" className="py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="workshops-intro"
          eyebrow="Workshops"
          title={<>Learning that <em className="italic text-sage-dark">stays with you</em></>}
          copy="Our workshops make conversations around mental wellbeing approachable, practical and engaging. No lectures, no jargon — just honest conversations and tools people actually use."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-x-14" data-testid="workshop-themes">
          {THEMES.map(({ title, copy }, i) => (
            <Reveal key={title} delay={Math.min(i * 0.04, 0.2)}>
              <div className="group border-t border-line/70 py-7 transition-colors duration-300 hover:bg-clay-light/40" data-testid={`theme-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-forest transition-transform duration-300 group-hover:translate-x-1">{title}</h3>
                  <ArrowUpRight size={18} strokeWidth={1.5} className="text-sage-dark shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-forest-soft max-w-md">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="who-its-for" className="bg-sand/60 border-y border-line/50 py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro id="audiences" eyebrow="Who It Is For" title={<>Made for <em className="italic text-sage-dark">your people</em></>} copy="Every session is shaped around the group in the room — their age, context, pressures and hopes." />
        </div>
        <div className="lg:col-span-7 flex items-center">
          <div className="flex flex-wrap gap-3">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <span className="inline-block rounded-full border border-forest/20 bg-offwhite px-6 py-3 text-sm lg:text-base text-forest transition-colors duration-300 hover:bg-sage hover:border-sage" data-testid={`audience-${a.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  {a}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section data-testid="benefits-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="benefits" eyebrow="Benefits" title={<>What people <em className="italic text-sage-dark">take back</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {BENEFITS.map(({ title, copy }, i) => (
            <Reveal key={title} delay={Math.min(i * 0.05, 0.25)}>
              <div className="border-l-2 border-sage pl-6" data-testid={`benefit-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <h3 className="font-serif text-lg font-semibold text-forest">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section id="glimpses" data-testid="glimpses-section" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="glimpses"
          eyebrow="Glimpses"
          title={<>Moments from our <em className="italic text-sage-dark">sessions</em></>}
          copy="A quiet look inside our workshops and wellbeing spaces — real people, real conversations."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 auto-rows-[240px] gap-5">
          {GLIMPSES.map(({ src, alt, caption, cls }, i) => (
            <Reveal key={src} delay={i * 0.06} className={cls}>
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

    <section data-testid="corporate-cta" className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-offwhite">
            Let’s design something for <em className="italic text-clay">your people.</em>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-offwhite/75 max-w-xl mx-auto">
            Tell us about your school, team or workplace — we’ll shape a session or programme
            that fits.
          </p>
          <div className="mt-9">
            <ButtonLink to="/contact" variant="light" testId="corporate-cta-contact" withArrow>
              Start a Conversation
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Corporate;
