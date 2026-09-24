import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import AnshitaSection from "@/components/AnshitaSection";
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

    <section data-testid="about-who" className="bg-sage border-b border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div>
          <SectionIntro id="who-we-are" title={<>Therapy that meets you <em className="italic text-forest/70">where you are.</em></>} />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-base lg:text-lg leading-relaxed text-forest/85">
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
          <div className="relative max-w-md mx-auto lg:ml-auto w-full flex justify-center">
            <div className="relative" data-testid="about-who-logo">
              <div className="absolute -inset-4 rounded-full bg-sand" aria-hidden="true" />
              <img
                src="/assets/brand-mark.png"
                alt="Piece of Mind logo"
                className="relative w-64 sm:w-72 lg:w-80 aspect-square object-cover rounded-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section data-testid="about-values" className="bg-sand/60 border-b border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="values" title={<>Our <em className="italic text-sage-dark">values</em></>} />
        <div className="mt-14 grid sm:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map(({ title, copy }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-[1.75rem] border border-sage/50 bg-sage-light/70 p-10 lg:p-12 transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`value-card-${title.toLowerCase()}`}>
                <div className="flex items-center gap-4">
                  <span className="w-3.5 h-3.5 shrink-0 rounded-full bg-sage-dark" aria-hidden="true" />
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-forest">{title}</h3>
                </div>
                <p className="mt-5 text-base lg:text-lg leading-relaxed text-forest-soft">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <AnshitaSection testId="about-anshita" bgClass="bg-sage-light/60 border-b border-line/50" />

    <FinalCta
      testId="about-cta"
      title={<>Ready when <em className="italic text-sage">you are.</em></>}
      copy="Book a 15-minute consultation. No pressure to continue."
      primary={{ to: "/contact", label: "Book a Therapy Session", testId: "about-cta-book" }}
    />
  </>
);

export default About;
