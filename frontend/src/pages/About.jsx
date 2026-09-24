import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import FinalCta from "@/components/FinalCta";

const VALUES = [
  { title: "Compassion", copy: "We meet every story with warmth and without judgment." },
  { title: "Curiosity", copy: "We hold space for questions, not just answers." },
  { title: "Care", copy: "We create gentler spaces where every part of you is looked after." },
];

const About = () => (
  <>
    <Seo
      title="About Us: Piece of Mind"
      description="Piece of Mind is a non-judgmental mental health practice rooted in compassion and curiosity. Meet Anshita Gaur and the values behind the practice."
    />

    <section data-testid="about-hero" className="bg-sand/60 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <Reveal className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="about-headline">
            A space to <em className="italic text-sage-dark">be human.</em>
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft max-w-xl mx-auto">
            Piece of Mind is a non-judgmental mental health practice rooted in compassion,
            curiosity, and the belief that every part of you is worth showing up for.
          </p>
        </Reveal>
      </div>
    </section>

    <section data-testid="about-who" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionIntro id="who-we-are" title={<>Therapy that meets you <em className="italic text-sage-dark">where you are.</em></>} />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-base lg:text-lg leading-relaxed text-forest-soft">
              <p>
                Piece of Mind is a mental-health startup built on the values of empathy,
                curiosity, and care. It aims to help both individuals and companies build a
                healthy and mindful lifestyle.
              </p>
              <p>
                Rooted in trauma-informed values, Piece of Mind offers a compassionate space to
                slow down, untangle your thoughts, and reconnect with yourself, one conversation
                at a time.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} scale>
          <div className="relative max-w-md mx-auto lg:ml-auto w-full">
            <div className="absolute -inset-4 rounded-[2rem] bg-sage-light" aria-hidden="true" />
            <div className="relative w-full aspect-square rounded-[2rem] bg-sand flex items-center justify-center p-12" data-testid="about-who-logo">
              <img
                src="/assets/brand-mark.png"
                alt="Piece of Mind logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section data-testid="about-values" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="values" title={<>Our <em className="italic text-sage-dark">values</em></>} />
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {VALUES.map(({ title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-[1.75rem] border border-sage/50 bg-sage-light/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`value-card-${title.toLowerCase()}`}>
                <span className="block w-3 h-3 rounded-full bg-sage-dark mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section data-testid="about-anshita" className="bg-sage-light/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <Reveal scale>
            <img
              src="/assets/glimpse-2.webp"
              alt="Anshita Gaur, founder of Piece of Mind, facilitating a session"
              loading="lazy"
              className="w-full max-w-md aspect-square object-cover object-[center_20%] rounded-[2rem]"
              data-testid="anshita-photo"
            />
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Meet your founder</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-forest" data-testid="anshita-heading">
              Hi, I’m <em className="italic text-sage-dark">Anshita Gaur.</em>
            </h2>
            <blockquote className="mt-8 font-serif italic text-xl lg:text-2xl leading-relaxed text-forest border-l-2 border-sage pl-6" data-testid="anshita-quote">
              “Showing up as you are is the most courageous thing you can do, and you don’t have
              to do it alone.”
            </blockquote>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-forest-soft">
              <p>
                I’m an integrative psychotherapist with a person-centered approach, which means I
                put you, your experiences, and your pace at the heart of everything we do. I’ve
                been working with individuals, groups, and organisations for over five years.
              </p>
              <p>
                My approach draws from multiple modalities and is firmly trauma-informed,
                queer-affirmative, and grounded in respect for every identity, orientation, and way
                of being. I believe that no two people, or two sessions, are alike, and that’s
                exactly the point.
              </p>
              <p>
                I started Piece of Mind because I wanted to create the kind of space I once went
                looking for: one where you could be complicated, uncertain, or just tired, and
                still feel completely welcome. That’s what I try to offer in every session.
              </p>
              <p>
                I work online with clients worldwide, and offer limited in-person sessions in Pune.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <FinalCta
      testId="about-cta"
      title={<>Ready when <em className="italic text-sage">you are.</em></>}
      copy="Book a 15-minute consultation. No pressure to continue."
      primary={{ to: "/contact", label: "Book a Therapy Session", testId: "about-cta-book" }}
    />
  </>
);

export default About;
