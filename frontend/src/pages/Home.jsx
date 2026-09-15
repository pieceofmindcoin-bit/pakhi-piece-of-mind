import { Link } from "react-router-dom";
import { HeartHandshake, Sprout, Building2, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";
import MarqueeBar from "@/components/MarqueeBar";

const SUPPORT_WAYS = [
  {
    Icon: HeartHandshake,
    num: "01",
    title: "Individual Support",
    copy: "One-to-one sessions in a safe, confidential space — to talk, reflect and understand yourself better.",
    to: "/support#individual",
    cta: "Explore individual support",
    testId: "support-card-individual",
  },
  {
    Icon: Sprout,
    num: "02",
    title: "Workshops & Learning",
    copy: "Interactive group sessions that build emotional awareness, resilience and everyday wellbeing skills.",
    to: "/support#workshops",
    cta: "Discover workshops",
    testId: "support-card-workshops",
  },
  {
    Icon: Building2,
    num: "03",
    title: "Corporate Wellbeing",
    copy: "Wellbeing programmes, talks and workshops designed for schools, teams and workplaces.",
    to: "/corporate-workshops",
    cta: "For organisations",
    testId: "support-card-corporate",
  },
];

const Home = () => (
  <>
    <Seo
      title="A Piece of Mind — Mental Wellbeing & Support"
      description="A warm, safe space for mental wellbeing. Individual support, workshops and corporate wellbeing programmes."
    />

    <section data-testid="hero-section" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6" data-testid="hero-eyebrow">
              A Piece of Mind · Mental Wellbeing
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="hero-headline">
              A calmer way to care for <em className="italic text-sage-dark">your mind.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft max-w-xl" data-testid="hero-copy">
              A Piece of Mind is a warm, judgement-free space where individuals, teams and
              communities can find support, build emotional awareness and grow — at their own pace.
            </p>
          </Reveal>
          <Reveal delay={0.34}>
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
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <Reveal delay={0.25} scale>
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] bg-sand" />
              <img
                src="/assets/brand-mark.png"
                alt=""
                className="relative w-64 sm:w-80 lg:w-[380px] aspect-square object-cover rounded-t-[999px] rounded-b-[2rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="intro-section" className="bg-sand/60 border-y border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro id="intro" eyebrow="Welcome" title={<>Support that feels <em className="italic text-sage-dark">human</em></>} />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg leading-relaxed text-forest-soft">
              A Piece of Mind is a space centred around mental wellbeing, emotional awareness,
              support, self-understanding, learning and human connection.
            </p>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-forest-soft">
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
          title={<>Three ways to find <em className="italic text-sage-dark">support</em></>}
          copy="There is no single right way to care for your mind. Choose the path that fits where you are today."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {SUPPORT_WAYS.map(({ Icon, num, title, copy, to, cta, testId }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <Link
                to={to}
                data-testid={testId}
                className="group flex h-full flex-col border border-line bg-offwhite p-9 lg:p-11 transition-all duration-300 hover:-translate-y-1.5 hover:bg-sage-light/60 hover:border-sage"
              >
                <div className="flex items-start justify-between">
                  <span className="w-14 h-14 rounded-full bg-sand flex items-center justify-center text-forest transition-colors duration-300 group-hover:bg-sage group-hover:text-forest">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                  <span className="font-serif italic text-sm text-clay-dark">{num}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="mt-4 text-sm lg:text-base leading-relaxed text-forest-soft flex-1">{copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  {cta}
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <MarqueeBar />

    <section data-testid="approach-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <SectionIntro
            id="approach"
            eyebrow="Our Approach"
            title={<>Wellbeing, made <em className="italic text-sage-dark">practical</em></>}
            copy="We believe mental wellbeing is not a luxury or a last resort — it is a life skill. Our work blends emotional awareness, gentle support and practical learning, always inside spaces that feel safe."
          />
          <div className="mt-10 space-y-6">
            {[
              { title: "Safe spaces first", copy: "Everything begins with psychological safety and zero judgement." },
              { title: "Awareness before advice", copy: "We help you understand yourself, not just cope with symptoms." },
              { title: "Practical and gentle", copy: "Simple tools you can actually use in everyday life." },
            ].map(({ title, copy }, i) => (
              <Reveal key={title} delay={i * 0.08} className="flex gap-5 items-start border-t border-line/70 pt-6">
                <span className="font-serif italic text-lg text-clay-dark shrink-0 w-8">{`0${i + 1}`}</span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-forest">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-forest-soft">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={0.15} className="order-1 lg:order-2">
          <div className="relative max-w-md mx-auto lg:ml-auto">
            <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] bg-sage-light" aria-hidden="true" />
            <img
              src="/assets/glimpse-2.webp"
              alt="A facilitator leading an interactive wellbeing workshop with participants"
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover rounded-t-[999px] rounded-b-[2rem]"
              data-testid="approach-image"
            />
          </div>
        </Reveal>
      </div>
    </section>

    <section data-testid="home-cta-section" className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight text-offwhite" data-testid="home-cta-title">
            Ready to take a <em className="italic text-clay">gentle first step?</em>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-offwhite/75 max-w-xl mx-auto leading-relaxed">
            Explore support for yourself, a workshop to learn from, or a wellbeing programme
            for your people.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact" variant="light" testId="home-cta-contact">
              Get in Touch
            </ButtonLink>
            <Link
              to="/corporate-workshops"
              data-testid="home-cta-workshops"
              className="rounded-full border border-offwhite/35 px-8 py-3.5 text-sm font-semibold text-offwhite transition-colors duration-300 hover:border-offwhite hover:bg-offwhite/10"
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
