import { Megaphone, Layers, CalendarHeart, GraduationCap, Building, Users2, School, Check } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import ButtonLink from "@/components/ButtonLink";

const OFFERINGS = [
  { Icon: Megaphone, title: "Talks & Sessions", copy: "Engaging one-off sessions that open honest conversations about mental wellbeing." },
  { Icon: Layers, title: "Workshop Series", copy: "Multi-session journeys that build emotional awareness and practical skills over time." },
  { Icon: CalendarHeart, title: "Ongoing Programmes", copy: "Year-round wellbeing partnerships woven into your organisation’s culture." },
];

const TOPICS = [
  "Mental Wellbeing",
  "Emotional Awareness",
  "Stress Management",
  "Communication",
  "Self-Awareness",
  "Resilience",
  "Healthy Workplace Culture",
];

const AUDIENCES = [
  { Icon: School, title: "Schools", copy: "Age-appropriate sessions for students and educators." },
  { Icon: GraduationCap, title: "Colleges", copy: "Support through pressure, transitions and change." },
  { Icon: Users2, title: "Teams", copy: "Stronger communication and psychological safety at work." },
  { Icon: Building, title: "Workplaces", copy: "Wellbeing programmes for healthier organisations." },
];

const BENEFITS = [
  "More emotionally aware, resilient people",
  "Healthier communication and culture",
  "Reduced stigma around mental health",
  "Practical tools that outlast the session",
];

const GLIMPSES = [
  { src: "https://images.unsplash.com/photo-1548362851-ea052637ad64?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Soft abstract natural texture in calm tones", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1657023647725-7a3616ea54af?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Gentle abstract shapes in muted green", span: "" },
  { src: "https://images.unsplash.com/photo-1587304798516-e17f7191a3a9?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Calm minimal composition in warm neutrals", span: "" },
  { src: "https://images.unsplash.com/photo-1528200575999-1853e416cf07?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Soft botanical texture with natural light", span: "" },
  { src: "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Warm beige texture with soft shadows", span: "" },
  { src: "https://images.unsplash.com/photo-1686806372785-fcfe9efa9b70?crop=entropy&cs=srgb&fm=jpg&q=85&w=800", alt: "Minimal still life in cream and sage tones", span: "md:col-span-2" },
];

const Corporate = () => (
  <>
    <Seo
      title="Corporate & Workshops — A Piece of Mind"
      description="Wellbeing talks, workshops and programmes for schools, teams and workplaces — plus a glimpse of our sessions in action."
    />

    <section data-testid="corporate-hero" className="border-b border-line/60 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-6">Corporate & Workshops</p>
          <h1 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight text-ink" data-testid="corporate-headline">
            Wellbeing that works where you do.
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-muted">
            Thoughtfully designed talks, workshops and programmes for schools, organisations,
            teams and workplaces — because healthier people build healthier places.
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
    </section>

    <section data-testid="corporate-intro" className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro id="corporate-wellbeing" eyebrow="Corporate Wellbeing" title="Culture begins with care" />
        </div>
        <div className="lg:col-span-7 flex items-center">
          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg leading-relaxed text-ink-muted">
              Stress, burnout and disconnection rarely announce themselves — they build quietly.
              Our corporate wellbeing work helps organisations notice early, talk openly and
              build cultures where people can genuinely thrive, not just cope.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="corporate-offerings" className="bg-surface border-y border-line/60 py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="offerings" eyebrow="What We Offer" title="Wellbeing offerings" copy="Flexible formats, shaped around your people, schedule and goals." />
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {OFFERINGS.map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-cream p-10 transition-transform duration-300 hover:-translate-y-1" data-testid={`offering-card-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <span className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center text-sage-deep">
                  <Icon size={26} strokeWidth={1.5} />
                </span>
                <h3 className="mt-7 font-heading text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-ink-muted">{copy}</p>
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
          title="Learning that stays with you"
          copy="Our workshops are interactive, reflective and practical. No lectures, no jargon — just honest conversations and tools people actually use."
        />
        <div className="mt-12">
          <Reveal>
            <h3 className="font-heading text-lg font-semibold text-ink mb-6">Workshop themes</h3>
            <div className="flex flex-wrap gap-3" data-testid="workshop-topics">
              {TOPICS.map((t) => (
                <span key={t} className="rounded-full border border-line bg-cream px-5 py-2.5 text-sm text-ink-muted transition-colors duration-300 hover:border-sage hover:text-sage-deep">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mt-16">
          <Reveal>
            <h3 className="font-heading text-lg font-semibold text-ink mb-6">Who the workshops are for</h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCES.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line p-7 transition-transform duration-300 hover:-translate-y-1" data-testid={`audience-card-${title.toLowerCase()}`}>
                  <Icon size={24} strokeWidth={1.5} className="text-sage-deep" />
                  <h4 className="mt-4 font-heading text-base font-semibold text-ink">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <Reveal>
            <div className="rounded-2xl bg-sage-light/60 border border-line/60 p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
              <h3 className="font-heading text-2xl tracking-tight text-ink">The benefits people take back</h3>
              <ul className="space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex gap-4 items-start">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-cream flex items-center justify-center text-sage-deep shrink-0">
                      <Check size={14} strokeWidth={2} />
                    </span>
                    <span className="text-sm lg:text-base leading-relaxed text-ink">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section id="glimpses" data-testid="glimpses-section" className="bg-surface border-y border-line/60 py-24 lg:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="glimpses"
          eyebrow="Glimpses"
          title="Moments from our sessions"
          copy="A quiet look inside our workshops and wellbeing spaces."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-5">
          {GLIMPSES.map(({ src, alt, span }, i) => (
            <Reveal key={src} delay={i * 0.05} className={span}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-line/60" data-testid={`glimpse-${i + 1}`}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="corporate-cta" className="bg-sage-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl sm:text-4xl tracking-tight text-cream">
            Let’s design something for your people.
          </h2>
          <p className="mt-4 text-base lg:text-lg text-cream/80 max-w-xl mx-auto">
            Tell us about your school, team or workplace — we’ll shape a session or programme
            that fits.
          </p>
          <div className="mt-9">
            <ButtonLink to="/contact" testId="corporate-cta-contact" withArrow>
              Start a Conversation
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Corporate;
