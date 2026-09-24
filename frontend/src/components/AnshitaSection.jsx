import Reveal from "@/components/Reveal";

const AnshitaSection = ({ testId, bgClass = "bg-sand/60 border-b border-line/50" }) => (
  <section data-testid={testId} className={`${bgClass} py-24 lg:py-32`}>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
      <div className="lg:col-span-5">
        <Reveal scale>
          <img
            src="/assets/anshita.webp"
            alt="Anshita Gaur, founder of Piece of Mind"
            loading="lazy"
            className="w-full max-w-md aspect-square object-cover object-[center_25%] rounded-[2rem]"
            data-testid={`${testId}-photo`}
          />
        </Reveal>
      </div>
      <div className="lg:col-span-7">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-forest" data-testid={`${testId}-heading`}>
            Hi, I’m <em className="italic text-sage-dark">Anshita Gaur.</em>
          </h2>
          <p className="mt-3 text-base lg:text-lg font-medium text-sage-dark" data-testid={`${testId}-subtitle`}>
            Founder and Psychotherapist
          </p>
          <blockquote className="mt-8 font-serif italic text-xl lg:text-2xl leading-relaxed text-forest border-l-2 border-sage pl-6" data-testid={`${testId}-quote`}>
            “Showing up as you are is the most courageous thing you can do, and you don’t have
            to do it alone.”
          </blockquote>
          <div className="mt-8 space-y-5 text-base lg:text-lg leading-relaxed text-forest-soft">
            <p>
              I’m a certified psychotherapist who has supported 300+ individuals across the
              globe on their mental health journeys.
            </p>
            <p>
              I founded Piece of Mind with a simple belief that people don’t need to be fixed,
              but they need space. Space to feel, to pause, to understand themselves without
              judgment. My work is rooted in creating that gentler space, where I can walk with
              you through the different pieces of your mind.
            </p>
            <p data-testid={`${testId}-education`}>
              Education: MSc Counselling Studies, University of Edinburgh, UK; COSCA Approved
              Certificate in Counselling Skills, UK; Diploma in Counselling and Psychotherapy,
              India; BA in Psychology, Sociology and Economics, Fergusson College, Pune.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AnshitaSection;
