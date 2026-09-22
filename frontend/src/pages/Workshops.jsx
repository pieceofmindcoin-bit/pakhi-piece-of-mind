import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import FinalCta from "@/components/FinalCta";

const CIRCLES = ["Groups", "Communities", "Organisations", "Specific needs"];

const THEMES = [
  { title: "Mental wellbeing", copy: "A warm, honest foundation — what mental health really is and how to care for it." },
  { title: "Emotional awareness", copy: "Learning to notice, name and normalise feelings instead of fighting them." },
  { title: "Stress management", copy: "Practical ways to understand pressure, prevent burnout and recover well." },
  { title: "Self-awareness", copy: "Reflective exercises that reveal patterns, needs and personal strengths." },
  { title: "Resilience", copy: "Tools for navigating setbacks, uncertainty and change with steadiness." },
  { title: "Communication", copy: "Everyday skills for listening deeply and speaking with clarity and kindness." },
  { title: "Healthy workplace culture", copy: "How teams can build trust, psychological safety and mutual support." },
];

const PHOTOS = [
  { src: "/assets/glimpse-3.webp", alt: "A facilitator leading a stress management workshop", caption: "Workshop · Stress management" },
  { src: "/assets/glimpse-1.webp", alt: "Participants writing and reflecting during a wellbeing circle", caption: "Community circle · Reflection" },
];

const Workshops = () => (
  <>
    <Seo
      title="Workshops & Events — Piece of Mind"
      description="Interactive wellbeing workshops and community events — customised for groups, communities and organisations. Held regularly online and in Pune."
    />

    <section data-testid="workshops-hero" className="bg-sand/60 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Workshops & Events</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-forest" data-testid="workshops-headline">
            Learning that <em className="italic text-sage-dark">stays with you.</em>
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft">
            Interactive workshops and gatherings that make conversations around mental wellbeing
            approachable, practical and engaging. We also hold regular workshops online and in Pune.
          </p>
        </Reveal>
      </div>
    </section>

    <section data-testid="customise-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionIntro
            id="customise"
            eyebrow="For Your Circle"
            title={<>We can customise workshops for <em className="italic text-sage-dark">your circles.</em></>}
            copy="Every gathering is shaped around the people in the room — what they're carrying, what they're curious about, and what would genuinely help."
          />
        </div>
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {CIRCLES.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <span className="inline-block rounded-full border border-forest/20 bg-offwhite px-6 py-3 text-sm lg:text-base text-forest transition-colors duration-300 hover:bg-sage hover:border-sage" data-testid={`circle-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section data-testid="workshop-themes-section" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="themes"
          eyebrow="Themes We Explore"
          title={<>Honest conversations, <em className="italic text-sage-dark">practical tools</em></>}
          copy="No lectures, no jargon — just reflection, interaction and things you can use the same day."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-x-14">
          {THEMES.map(({ title, copy }, i) => (
            <Reveal key={title} delay={Math.min(i * 0.04, 0.2)}>
              <div className="group border-t border-line/70 py-7 transition-colors duration-300 hover:bg-offwhite/60" data-testid={`theme-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
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

    <section data-testid="workshop-photos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="photos" eyebrow="In The Room" title={<>What a session <em className="italic text-sage-dark">feels like</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-10">
          {PHOTOS.map(({ src, alt, caption }, i) => (
            <Reveal key={src} delay={i * 0.1} scale>
              <figure className="group relative overflow-hidden rounded-[2rem]" data-testid={`workshop-photo-${i + 1}`}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/70 to-transparent px-6 pb-5 pt-12 text-offwhite text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <FinalCta
      testId="workshops-cta"
      title={<>Bring a workshop to <em className="italic text-sage">your circle.</em></>}
      copy="Tell us about your group, community or organisation — we'll shape something meaningful together."
      primary={{ to: "/contact", label: "Plan a Workshop", testId: "workshops-cta-contact" }}
    />
  </>
);

export default Workshops;
