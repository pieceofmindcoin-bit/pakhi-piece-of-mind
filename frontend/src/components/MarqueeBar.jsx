import Marquee from "react-fast-marquee";

const PHRASES = [
  "Low mood",
  "Anxiety",
  "Grief",
  "Trauma",
  "Stress & burnout",
  "Shame & guilt",
  "Life transitions",
  "Emotional dysregulation",
  "Neurodiversity",
  "Feeling “not like yourself”",
  "Relationship difficulties",
  "Self-esteem",
  "Identity & belonging",
  "Social issues",
  "Gender and sexuality",
];

const MarqueeBar = () => (
  <section aria-label="Topics we support" data-testid="marquee-bar" className="bg-forest py-5 overflow-hidden">
    <Marquee speed={35} gradient={false} pauseOnHover>
      {PHRASES.map((p) => (
        <span key={p} className="flex items-center text-offwhite font-serif italic text-base sm:text-lg tracking-wide">
          <span className="px-6">{p}</span>
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-sage/70" />
        </span>
      ))}
    </Marquee>
  </section>
);

export default MarqueeBar;
