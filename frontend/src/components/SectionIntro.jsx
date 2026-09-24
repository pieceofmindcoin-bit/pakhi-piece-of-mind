import Reveal from "@/components/Reveal";

const SectionIntro = ({ title, copy, align = "left", id, dark = false }) => (
  <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] ${dark ? "text-offwhite" : "text-forest"}`} data-testid={id ? `${id}-title` : undefined}>
      {title}
    </h2>
    {copy && <p className={`mt-5 text-base lg:text-lg leading-relaxed ${dark ? "text-offwhite/75" : "text-forest-soft"}`}>{copy}</p>}
  </Reveal>
);

export default SectionIntro;
