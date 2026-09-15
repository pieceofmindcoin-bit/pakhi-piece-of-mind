import { ShieldCheck, Sun, HeartHandshake, Users } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";

const VALUES = [
  { Icon: ShieldCheck, title: "Safety", copy: "Confidential, judgement-free spaces where people can simply be." },
  { Icon: Sun, title: "Warmth", copy: "Support that feels human — never clinical, cold or rushed." },
  { Icon: HeartHandshake, title: "Honesty", copy: "Real conversations about real feelings, without clichés." },
  { Icon: Users, title: "Belonging", copy: "Wellbeing grows in community — no one should do this alone." },
];

const PILLARS = [
  { title: "Safe Spaces", copy: "Every session begins with trust. Confidentiality, consent and zero judgement are not features — they are the foundation." },
  { title: "Emotional Awareness", copy: "We help people notice, name and normalise what they feel, so emotions become information rather than noise." },
  { title: "Self-Understanding", copy: "Beyond coping, we gently explore patterns, needs and values — the quiet work of knowing yourself." },
  { title: "Human Connection", copy: "Healing is rarely a solo act. Our spaces bring people together to listen, share and feel a little less alone." },
];

const About = () => (
  <>
    <Seo
      title="About — A Piece of Mind"
      description="The philosophy, values and approach behind A Piece of Mind — a warm, safe space for mental wellbeing."
    />

    <section data-testid="about-hero" className="bg-sand/60 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">About Us</p>
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.12] text-forest" data-testid="about-headline">
              A quiet space in a <em className="italic text-sage-dark">loud world.</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft max-w-xl">
              A Piece of Mind was created with one simple belief: caring for your mind should
              feel as natural as caring for your body. We exist to make mental wellbeing
              approachable, honest and deeply human.
            </p>
          </Reveal>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <Reveal delay={0.15}>
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-4 rounded-full bg-clay-light" />
              <img
                src="/assets/brand-mark.png"
                alt=""
                className="relative w-64 lg:w-72 aspect-square object-cover rounded-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="about-story" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24">
        <SectionIntro id="philosophy" eyebrow="Our Philosophy" title={<>Awareness before <em className="italic text-sage-dark">everything</em></>} />
        <div className="lg:pt-14">
          <Reveal>
            <p className="text-base lg:text-lg leading-relaxed text-forest-soft">
              We don’t believe in quick fixes or one-size-fits-all advice. We believe in helping
              people notice what they feel, name it, and understand it — because awareness is
              where real change begins.
            </p>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-forest-soft">
              Every session, workshop and programme we create is built on emotional awareness,
              practical tools and psychological safety.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="about-values" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="values" eyebrow="What We Stand For" title={<>Our <em className="italic text-sage-dark">values</em></>} copy="Four simple promises shape everything we do." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full border border-line/70 bg-offwhite p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`value-card-${title.toLowerCase()}`}>
                <span className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center text-forest">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="about-approach" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <Reveal>
          <div className="relative max-w-md mx-auto lg:mr-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-sage-light" aria-hidden="true" />
            <img
              src="/assets/glimpse-1.webp"
              alt="Participants reflecting and writing during a small-group wellbeing session"
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem]"
              data-testid="about-approach-image"
            />
          </div>
        </Reveal>
        <SectionIntro
          id="approach-about"
          eyebrow="Our Approach"
          title={<>A space, not a <em className="italic text-sage-dark">service</em></>}
          copy="A Piece of Mind is not a clinic or a course platform. It is a space — one you can step into without pressure, labels or expectations. Small, personal and never rushed; grounded in emotional awareness rather than jargon; designed for real life — schools, homes and workplaces. You set the pace; we walk beside you."
        />
      </div>
    </section>

    <section data-testid="about-pillars" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="pillars" eyebrow="What We Hold Dear" title={<>Four quiet <em className="italic text-sage-dark">pillars</em></>} />
        <div className="mt-14">
          {PILLARS.map(({ title, copy }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div
                className="grid md:grid-cols-12 gap-4 md:gap-10 items-baseline border-t border-line/70 py-9 transition-colors duration-300 hover:bg-offwhite/60"
                data-testid={`pillar-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                <span className="md:col-span-2 font-serif italic text-lg text-clay-dark">{`0${i + 1}`}</span>
                <h3 className="md:col-span-4 font-serif text-2xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="md:col-span-6 text-sm lg:text-base leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="about-cta" className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-offwhite">
            Come as <em className="italic text-clay">you are.</em>
          </h2>
          <p className="mt-4 text-base lg:text-lg text-offwhite/75 max-w-lg mx-auto">
            Whether you’re curious, struggling, or simply ready to learn — there’s a place for you here.
          </p>
          <div className="mt-9">
            <ButtonLink to="/support" variant="light" testId="about-cta-support" withArrow>
              Explore Support
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default About;
