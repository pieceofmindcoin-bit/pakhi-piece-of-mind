import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react";

const PHRASES = [
  "Breathe deeply",
  "Find your balance",
  "You are not alone",
  "Grow at your own pace",
  "Rest is productive",
  "A piece of mind",
  "Feel. Heal. Grow.",
  "Small steps count",
];

const MarqueeBar = () => (
  <section aria-label="Wellbeing reminders" data-testid="marquee-bar" className="bg-sage py-5 overflow-hidden">
    <Marquee speed={40} gradient={false} pauseOnHover>
      {PHRASES.map((p) => (
        <span key={p} className="flex items-center gap-8 pr-8 text-cream font-heading font-medium tracking-wide text-sm sm:text-base">
          {p}
          <Sparkle size={13} strokeWidth={1.5} className="text-cream/60" aria-hidden="true" />
        </span>
      ))}
    </Marquee>
  </section>
);

export default MarqueeBar;
