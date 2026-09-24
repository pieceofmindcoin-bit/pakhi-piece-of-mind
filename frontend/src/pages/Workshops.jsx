import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";
import UpcomingEvents from "@/components/UpcomingEvents";
import FinalCta from "@/components/FinalCta";

const CIRCLES = ["Groups", "Communities", "Organisations", "Specific needs"];

const TAKEAWAYS = [
  { num: "01", title: "Self reflection", copy: "Greater awareness of your own mind, and a stronger, kinder understanding of yourself.", offset: "" },
  { num: "02", title: "Connections", copy: "Better communication, healthier conversations, and a more supportive environment around you.", offset: "lg:translate-y-10" },
  { num: "03", title: "Practical tools", copy: "Simple coping tools people actually use, long after the session ends.", offset: "lg:translate-y-20" },
];

const PHOTOS = [
  { src: "/assets/workshop-attachment.webp", alt: "Participants gathered in a bright café space during a workshop on attachment styles", caption: "Workshop on attachment styles" },
  { src: "/assets/workshop-letter-2026.webp", alt: "Participants writing letters during the Letter to 2026 goal setting workshop", caption: "Letter to 2026 - goal setting workshop" },
];

const Workshops = () => (
  <>
    <Seo
      title="Workshops & Events: Piece of Mind"
      description="Interactive wellbeing workshops and community events, customised for groups, communities and organisations. Held regularly online and in Pune."
    />

    <section data-testid="workshops-hero" className="bg-sand/60 border-b border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <Reveal className="max-w-2xl">
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
            title={<>We can customise workshops for <em className="italic text-sage-dark">your circles.</em></>}
            copy="Every gathering is shaped around the people in the room: what they're carrying, what they're curious about, and what would genuinely help."
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

    <section data-testid="takeaways-section" className="bg-sage py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="takeaways" title={<>What you’ll <em className="italic text-forest/70">take away</em></>} />
        <div className="mt-20 grid sm:grid-cols-3 gap-14 lg:gap-12 lg:pb-20">
          {TAKEAWAYS.map(({ num, title, copy, offset }, i) => (
            <Reveal key={num} delay={i * 0.12} className={offset}>
              <div data-testid={`takeaway-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
                <span className="inline-flex w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-forest items-center justify-center font-serif text-3xl lg:text-4xl text-offwhite">
                  {num}
                </span>
                <h3 className="mt-8 font-serif text-2xl lg:text-3xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="mt-4 text-sm lg:text-base leading-relaxed text-forest/80 max-w-xs">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <UpcomingEvents />

    <section data-testid="workshop-photos" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro id="photos" title={<>Glimpses of our <em className="italic text-sage-dark">workshops</em></>} />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-10">
          {PHOTOS.map(({ src, alt, caption }, i) => (
            <Reveal key={src} delay={i * 0.1} scale>
              <figure className="group relative overflow-hidden rounded-[2rem]" data-testid={`workshop-photo-${i + 1}`}>
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
      copy="Tell us about your group, community or organisation, and we'll shape something meaningful together."
      primary={{ to: "/contact", label: "Plan a Workshop", testId: "workshops-cta-contact" }}
    />
  </>
);

export default Workshops;
