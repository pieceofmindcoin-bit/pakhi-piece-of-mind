import { Link } from "react-router-dom";
import { HeartHandshake, Sprout, Building2, ShieldCheck, Compass, Leaf, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import MarqueeBar from "@/components/MarqueeBar";
import { LogoMark } from "@/components/Logo";

const SUPPORT_WAYS = [
  {
    Icon: HeartHandshake,
    title: "Individual Support",
    copy: "One-to-one sessions in a safe, confidential space — to talk, reflect and understand yourself better.",
    to: "/support#individual",
    cta: "Explore individual support",
    testId: "support-card-individual",
  },
  {
    Icon: Sprout,
    title: "Workshops & Learning",
    copy: "Interactive group sessions that build emotional awareness, resilience and everyday wellbeing skills.",
    to: "/support#workshops",
    cta: "Discover workshops",
    testId: "support-card-workshops",
  },
  {
    Icon: Building2,
    title: "Corporate Wellbeing",
    copy: "Wellbeing programmes, talks and workshops designed for schools, teams and workplaces.",
    to: "/corporate-workshops",
    cta: "For organisations",
    testId: "support-card-corporate",
  },
];

const PRINCIPLES = [
  { Icon: ShieldCheck, title: "Safe spaces first", copy: "Everything begins with psychological safety and zero judgement." },
  { Icon: Compass, title: "Awareness before advice", copy: "We help you understand yourself, not just cope with symptoms." },
  { Icon: Leaf, title: "Practical and gentle", copy: "Simple tools you can actually use in everyday life." },
];

const Home = () => (
  <>
    <Seo
      title="A Piece of Mind — Mental Wellbeing & Support"
      description="A warm, safe space for mental wellbeing. Individual support, workshops and corporate wellbeing programmes."
    />

    <section data-testid="hero-section" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-6" data-testid="hero-eyebrow">
              A Piece of Mind · Mental Wellbeing
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-ink" data-testid="hero-headline">
              A calmer way to care for your mind.
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-muted max-w-xl" data-testid="hero-copy">
              A Piece of Mind is a warm, judgement-free space where individuals, teams and
              communities can find support, build emotional awareness and grow — at their own pace.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/support" testId="hero-cta-support" withArrow>
                Explore Support
              </ButtonLink>
              <ButtonLink to="/corporate-workshops" variant="ghost" testId="hero-cta-corporate">
                For Workplaces & Schools
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <Reveal delay={0.15}>
            <div className="relative w-[340px] h-[340px] flex items-center justify-center" aria-hidden="true">
              <div className="absolute inset-0 rounded-full border border-line" />
              <div className="absolute inset-8 rounded-full border border-sage/40" />
              <div className="absolute inset-20 rounded-full bg-sage-light" />
              <div className="relative animate-float-slow">
                <LogoMark size={120} />
              </div>
              <div className="absolute -bottom-2 right-6 w-10 h-10 rounded-full bg-sage" />
              <div className="absolute top-4 left-8 w-5 h-5 rounded-full bg-sage/60" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="intro-section" className="bg-surface border-y border-line/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro
            id="intro"
            eyebrow="Welcome"
            title="Support that feels human"
          />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center gap-5">
          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg leading-relaxed text-ink-muted">
              A Piece of Mind is a space where people can seek support, understand themselves
              better and engage with mental wellbeing in a way that feels safe and approachable.
            </p>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-muted">
              Whether you are looking for someone to talk to, a workshop to learn from, or a
              wellbeing programme for your organisation — you are welcome here, exactly as you are.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="support-ways-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="support-ways"
          eyebrow="Where to begin"
          title="Three Ways to Find Support"
          copy="There is no single right way to care for your mind. Choose the path that fits where you are today."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {SUPPORT_WAYS.map(({ Icon, title, copy, to, cta, testId }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <Link
                to={to}
                data-testid={testId}
                className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-10 transition-all duration-300 hover:-translate-y-1 hover:border-sage"
              >
                <span className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center text-sage-deep transition-colors duration-300 group-hover:bg-sage group-hover:text-cream">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <h3 className="mt-8 font-heading text-2xl font-semibold tracking-tight text-ink">{title}</h3>
                <p className="mt-4 text-sm lg:text-base leading-relaxed text-ink-muted flex-1">{copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sage-deep">
                  {cta}
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <MarqueeBar />

    <section data-testid="approach-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <SectionIntro
            id="approach"
            eyebrow="Our Approach"
            title="Wellbeing, made practical"
            copy="We believe mental wellbeing is not a luxury or a last resort — it is a life skill. Our work blends emotional awareness, gentle support and practical learning, always inside spaces that feel safe."
          />
          <div className="mt-10 space-y-7">
            {PRINCIPLES.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 0.08} className="flex gap-5">
                <span className="mt-1 w-11 h-11 shrink-0 rounded-full border border-line flex items-center justify-center text-sage-deep">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-surface border border-line/60 p-10 lg:p-14">
            <p className="font-heading text-2xl lg:text-3xl leading-snug tracking-tight text-ink" data-testid="approach-quote">
              “You don’t have to be in crisis to care for your mind. Sometimes, you just need a
              quiet place to begin.”
            </p>
            <p className="mt-8 text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep">
              The A Piece of Mind philosophy
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section data-testid="home-cta-section" className="bg-sage-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream" data-testid="home-cta-title">
            Ready to take a gentle first step?
          </h2>
          <p className="mt-5 text-base lg:text-lg text-cream/80 max-w-xl mx-auto leading-relaxed">
            Explore support for yourself, a workshop to learn from, or a wellbeing programme
            for your people.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              data-testid="home-cta-contact"
              className="rounded-full bg-cream px-8 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-surface"
            >
              Get in Touch
            </Link>
            <Link
              to="/corporate-workshops"
              data-testid="home-cta-workshops"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:border-cream"
            >
              Corporate & Workshops
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Home;
