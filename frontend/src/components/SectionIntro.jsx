import Reveal from "@/components/Reveal";

const SectionIntro = ({ eyebrow, title, copy, align = "left", id }) => (
  <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-4" data-testid={id ? `${id}-eyebrow` : undefined}>
        {eyebrow}
      </p>
    )}
    <h2 className="font-heading text-3xl sm:text-4xl tracking-tight leading-tight text-ink" data-testid={id ? `${id}-title` : undefined}>
      {title}
    </h2>
    {copy && <p className="mt-5 text-base lg:text-lg leading-relaxed text-ink-muted">{copy}</p>}
  </Reveal>
);

export default SectionIntro;
