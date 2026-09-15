import Marquee from "react-fast-marquee";

const PHRASES = [
  "mental wellbeing",
  "emotional awareness",
  "stress",
  "resilience",
  "self-understanding",
  "rest",
  "balance",
  "human connection",
  "safe spaces",
];

const MarqueeBar = () => (
  <section aria-label="Wellbeing reminders" data-testid="marquee-bar" className="bg-sage py-5 overflow-hidden">
    <Marquee speed={35} gradient={false} pauseOnHover>
      {PHRASES.map((p) => (
        <span key={p} className="flex items-center text-forest font-serif italic text-base sm:text-lg tracking-wide">
          <span className="px-6">{p}</span>
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-forest/50" />
        </span>
      ))}
    </Marquee>
  </section>
);

export default MarqueeBar;
