import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { HeartHandshake, Building2, Sprout, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import MaskedLines from "@/components/MaskedLines";
import SectionIntro from "@/components/SectionIntro";
import MarqueeBar from "@/components/MarqueeBar";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

const EASE = [0.22, 1, 0.36, 1];

const SUPPORT_WAYS = [
  {
    Icon: HeartHandshake,
    num: "01",
    title: "Individual Therapy",
    copy: "One-to-one therapy in a safe, confidential space to talk, reflect and understand yourself better.",
    to: "/individual-therapy",
    cta: "Explore individual therapy",
    testId: "support-card-therapy",
  },
  {
    Icon: Building2,
    num: "02",
    title: "Corporate Well-being",
    copy: "Wellbeing programmes, talks and tailor-made workshops designed for teams and workplaces.",
    to: "/corporate-wellbeing",
    cta: "For organisations",
    testId: "support-card-corporate",
  },
  {
    Icon: Sprout,
    num: "03",
    title: "Workshops & Events",
    copy: "Interactive group sessions and gatherings that build emotional awareness and everyday wellbeing skills.",
    to: "/workshops-events",
    cta: "Discover workshops",
    testId: "support-card-workshops",
  },
];

const HeroArt = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 50, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 50, damping: 16 });

  return (
    <div
      ref={ref}
      className="lg:col-span-5 flex justify-center lg:justify-end"
      style={{ perspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 26 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
        style={{ rotateX, rotateY, y, transformStyle: "preserve-3d" }}
        className="relative"
        aria-hidden="true"
      >
        <div className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] bg-sand" />
        <img
          src="/assets/brand-mark.png"
          alt=""
          className="relative w-64 sm:w-80 lg:w-[380px] aspect-square object-cover rounded-t-[999px] rounded-b-[2rem]"
        />
      </motion.div>
    </div>
  );
};

const Home = () => (
  <>
    <Seo
      title="Piece of Mind: Therapy, Wellbeing & Workshops"
      description="Piece of Mind is a non-judgmental mental health practice: individual therapy online worldwide and in Pune, corporate well-being, workshops and events."
    />

    <section data-testid="hero-section" className="relative overflow-hidden bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100svh-5rem)] py-16 lg:py-20 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-offwhite" data-testid="hero-headline">
            <MaskedLines
              delay={0.2}
              lines={[
                <span key="l1">Every <em className="italic text-sage">piece</em> of you</span>,
                "matters.",
              ]}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
            className="mt-6 text-base lg:text-lg leading-relaxed text-offwhite/80 max-w-xl"
            data-testid="hero-copy"
          >
            Non-judgmental, compassionate mental health support for individuals, groups, and organizations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-10"
          >
            <Link
              to="/contact"
              data-testid="hero-cta-book"
              className="group inline-flex items-center gap-2 rounded-full bg-offwhite px-8 py-3.5 text-sm font-semibold tracking-[0.06em] text-forest transition-all duration-300 hover:bg-sand hover:-translate-y-0.5"
            >
              BOOK A THERAPY SESSION
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
        <HeroArt />
      </div>
    </section>

    <section data-testid="intro-section" className="bg-sand/60 border-y border-line/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionIntro id="intro" title={<>Support that feels <em className="italic text-sage-dark">human</em></>} />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <Reveal delay={0.1}>
            <p className="text-base lg:text-lg leading-relaxed text-forest-soft">
              Piece of Mind is a space centred around mental wellbeing, emotional awareness,
              support, self-understanding, learning and human connection.
            </p>
            <p className="mt-5 text-base lg:text-lg leading-relaxed text-forest-soft">
              Whether you are looking for someone to talk to, a workshop to learn from, or a
              wellbeing programme for your organisation, you are welcome here, exactly as you are.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section data-testid="support-ways-section" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="support-ways"
          title={<>Services we <em className="italic text-sage-dark">offer</em></>}
          copy="There is no single right way to care for your mind. Choose the path that fits where you are today."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {SUPPORT_WAYS.map(({ Icon, num, title, copy, to, cta, testId }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <Link
                to={to}
                data-testid={testId}
                className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-offwhite p-9 lg:p-11 transition-all duration-300 hover:-translate-y-1.5 hover:bg-sage-light/60 hover:border-sage"
              >
                <div className="flex items-start justify-between">
                  <span className="w-14 h-14 rounded-full bg-sand flex items-center justify-center text-forest transition-colors duration-300 group-hover:bg-sage group-hover:text-forest">
                    <Icon size={26} strokeWidth={1.5} />
                  </span>
                  <span className="font-serif italic text-sm text-sage-dark">{num}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold tracking-tight text-forest">{title}</h3>
                <p className="mt-4 text-sm lg:text-base leading-relaxed text-forest-soft flex-1">{copy}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  {cta}
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <MarqueeBar />

    <Testimonials />

    <section data-testid="home-anshita" className="bg-sand/60 border-b border-line/50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <Reveal scale>
            <img
              src="/assets/glimpse-2.webp"
              alt="Anshita Gaur, founder of Piece of Mind, facilitating a session"
              loading="lazy"
              className="w-full max-w-md aspect-square object-cover object-[center_20%] rounded-[2rem]"
              data-testid="home-anshita-photo"
            />
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-forest" data-testid="home-anshita-heading">
              Hi, I’m <em className="italic text-sage-dark">Anshita Gaur.</em>
            </h2>
            <blockquote className="mt-8 font-serif italic text-xl lg:text-2xl leading-relaxed text-forest border-l-2 border-sage pl-6">
              “Showing up as you are is the most courageous thing you can do, and you don’t have
              to do it alone.”
            </blockquote>
            <p className="mt-8 text-base lg:text-lg leading-relaxed text-forest-soft">
              A trauma-informed, queer-affirmative psychotherapist working with individuals,
              groups, and organisations to make mental health feel a little less lonely.
              Integrative, person-centered, and committed to meeting you where you are.
            </p>
            <Link
              to="/about"
              data-testid="home-anshita-link"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest"
            >
              Read my story
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <FinalCta
      testId="home-cta-section"
      title={<>Ready to take a <em className="italic text-sage">gentle first step?</em></>}
      copy="Explore therapy for yourself, a workshop to learn from, or a wellbeing programme for your people."
      primary={{ to: "/contact", label: "Get in Touch", testId: "home-cta-contact" }}
      secondary={{ to: "/corporate-wellbeing", label: "Corporate Well-being", testId: "home-cta-corporate" }}
    />
  </>
);

export default Home;
