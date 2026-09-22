import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";

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
          <ButtonLink to={primary.to} variant="light" testId={primary.testId} withArrow>
            {primary.label}
          </ButtonLink>
          {secondary && (
            <Link
              to={secondary.to}
              data-testid={secondary.testId}
              className="group inline-flex items-center gap-2 rounded-full border border-offwhite/35 px-8 py-3.5 text-sm font-semibold text-offwhite transition-colors duration-300 hover:border-offwhite hover:bg-offwhite/10"
            >
              {secondary.label}
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCta;
