import { HeartHandshake, ShieldCheck, Sun, Users } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import { LogoMark } from "@/components/Logo";

const VALUES = [
  { Icon: ShieldCheck, title: "Safety", copy: "Confidential, judgement-free spaces where people can simply be." },
  { Icon: Sun, title: "Warmth", copy: "Support that feels human — never clinical, cold or rushed." },
  { Icon: HeartHandshake, title: "Honesty", copy: "Real conversations about real feelings, without clichés." },
  { Icon: Users, title: "Belonging", copy: "Wellbeing grows in community — no one should do this alone." },
];

const About = () => (
  <>
    <Seo
      title="About — A Piece of Mind"
      description="The philosophy, values and approach behind A Piece of Mind — a warm, safe space for mental wellbeing."
    />

    <section data-testid="about-hero" className="border-b border-line/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-6">About Us</p>
            <h1 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight text-ink" data-testid="about-headline">
              A quiet space in a loud world.
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-muted max-w-xl">
              A Piece of Mind was created with one simple belief: caring for your mind should
              feel as natural as caring for your body. We exist to make mental wellbeing
              approachable, honest and deeply human.
            </p>
          </Reveal>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <Reveal delay={0.15}>
            <div className="w-[280px] h-[280px] rounded-full bg-sage-light flex items-center justify-center" aria-hidden="true">
              <LogoMark size={110} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="about-philosophy" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24">
        <SectionIntro
          id="philosophy"
          eyebrow="Our Philosophy"
          title="Awareness before everything"
        />
        <div className="space-y-5 lg:pt-14">
          <Reveal>
            <p className="text-base lg:text-lg leading-relaxed text-ink-muted">
              We don’t believe in quick fixes or one-size-fits-all advice. We believe in helping
              people notice what they feel, name it, and understand it — because awareness is
              where real change begins.
            </p>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-muted">
              Every session, workshop and programme we create is built on emotional awareness,
              practical tools and psychological safety.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="about-values" className="bg-surface border-y border-line/60 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="values"
          eyebrow="What We Stand For"
          title="Our values"
          copy="Four simple promises shape everything we do."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-cream p-8 transition-transform duration-300 hover:-translate-y-1" data-testid={`value-card-${title.toLowerCase()}`}>
                <span className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center text-sage-deep">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="about-different" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal>
          <div className="rounded-2xl bg-sage-light/60 border border-line/60 p-10 lg:p-14">
            <ul className="space-y-6">
              {[
                "Small, personal and never rushed",
                "Grounded in emotional awareness, not jargon",
                "Designed for real life — schools, homes and workplaces",
                "As welcoming to first-timers as to those further along",
              ].map((point) => (
                <li key={point} className="flex gap-4 items-start">
                  <span className="mt-2 w-2 h-2 rounded-full bg-sage shrink-0" aria-hidden="true" />
                  <span className="text-base lg:text-lg leading-relaxed text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <SectionIntro
          id="different"
          eyebrow="What Makes Us Different"
          title="A space, not a service"
          copy="A Piece of Mind is not a clinic or a course platform. It is a space — one you can step into without pressure, labels or expectations. You set the pace; we walk beside you."
        />
      </div>
    </section>

    <section data-testid="about-cta" className="bg-sage-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream">
            Come as you are.
          </h2>
          <p className="mt-4 text-base lg:text-lg text-cream/80 max-w-lg mx-auto">
            Whether you’re curious, struggling, or simply ready to learn — there’s a place for you here.
          </p>
          <div className="mt-9">
            <ButtonLink to="/support" testId="about-cta-support" withArrow>
              Explore Support
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default About;
