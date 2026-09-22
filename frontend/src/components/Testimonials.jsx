import Marquee from "react-fast-marquee";
import Reveal from "@/components/Reveal";

const TESTIMONIALS = [
  {
    quote: "The therapist made me feel safe. Showing vulnerability is really hard, but she made it so easy.",
    name: "RG",
  },
  {
    quote:
      "I was doubtful about therapy, but the way she addresses my concerns from my POV is what I like the most. Her patience while explaining things, and the way she provides a comfortable, non-judgemental space for me to open up without being overbearing or condescending, is something I feel most comfortable with.",
    name: "SR",
  },
  {
    quote: "The therapist's communication was spot on. She made it comfortable to talk and I felt she understood the situation.",
    name: "MK",
  },
  {
    quote: "Therapy gave me a safe space to talk about things I was keeping inside for so long. It was great to share with someone who understands.",
    name: "PS",
  },
];

const TestimonialCard = ({ quote, name, tone }) => (
  <figure
    className={`w-[300px] sm:w-[380px] lg:w-[420px] shrink-0 rounded-[2rem] p-8 lg:p-10 mx-3 flex flex-col ${
      tone === "sage" ? "bg-sage-light/70" : "bg-sand"
    }`}
  >
    <span aria-hidden="true" className="font-serif text-5xl leading-none text-sage-dark">
      ”
    </span>
    <blockquote className="mt-4 flex-1 text-sm lg:text-base leading-relaxed text-forest">
      {quote}
    </blockquote>
    <figcaption className="mt-7 flex items-center gap-3">
      <span className="w-9 h-9 rounded-full bg-forest text-offwhite flex items-center justify-center text-xs font-semibold tracking-wide">
        {name}
      </span>
      <span className="text-xs tracking-[0.18em] uppercase text-forest-soft">Therapy client</span>
    </figcaption>
  </figure>
);

const Testimonials = () => (
  <section data-testid="testimonials-section" aria-label="What people have to say" className="bg-sand/60 border-y border-line/50 py-24 lg:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-4" data-testid="testimonials-eyebrow">
          Voices
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-forest" data-testid="testimonials-title">
          What people <em className="italic text-sage-dark">have to say.</em>
        </h2>
      </Reveal>
    </div>
    <div className="mt-14" data-testid="testimonials-marquee">
      <Marquee speed={32} gradient={false} pauseOnHover direction="left">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={t.name} {...t} tone={i % 2 === 0 ? "sand" : "sage"} />
        ))}
      </Marquee>
    </div>
  </section>
);

export default Testimonials;
