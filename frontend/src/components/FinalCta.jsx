import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { SOCIALS } from "@/components/Footer";

const FinalCta = ({ title, copy, primary, secondary, testId = "final-cta" }) => (
  <section data-testid={testId} className="bg-forest">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center">
      <Reveal>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] text-offwhite" data-testid={`${testId}-title`}>
          {title}
        </h2>
        {copy && (
          <p className="mt-5 text-base lg:text-lg text-offwhite/75 max-w-xl mx-auto leading-relaxed">{copy}</p>
        )}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink to={primary.to} href={primary.href} variant="light" testId={primary.testId} withArrow>
            {primary.label}
          </ButtonLink>
          {secondary && (
            secondary.href ? (
              <a
                href={secondary.href}
                target="_blank"
                rel="noreferrer"
                data-testid={secondary.testId}
                className="group inline-flex items-center gap-2 rounded-full border border-offwhite/35 px-8 py-3.5 text-sm font-semibold text-offwhite transition-colors duration-300 hover:border-offwhite hover:bg-offwhite/10"
              >
                {secondary.label}
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            ) : (
            <Link
              to={secondary.to}
              data-testid={secondary.testId}
              className="group inline-flex items-center gap-2 rounded-full border border-offwhite/35 px-8 py-3.5 text-sm font-semibold text-offwhite transition-colors duration-300 hover:border-offwhite hover:bg-offwhite/10"
            >
              {secondary.label}
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            )
          )}
        </div>
        <div className="mt-9 flex justify-center gap-3" data-testid={`${testId}-socials`}>
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-testid={`${testId}-social-${label.toLowerCase()}`}
              className="w-10 h-10 rounded-full border border-offwhite/25 flex items-center justify-center text-offwhite/70 transition-colors duration-300 hover:bg-sage hover:text-forest hover:border-sage"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
