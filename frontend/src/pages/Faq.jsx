import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What kind of support does A Piece of Mind offer?",
    a: "We offer one-to-one individual support sessions, interactive wellbeing workshops, and corporate wellbeing programmes for schools, teams and workplaces.",
  },
  {
    q: "Do I need to be going through something serious to reach out?",
    a: "Not at all. Many people come simply to understand themselves better, manage everyday stress, or build emotional awareness. You don’t need a crisis to care for your mind.",
  },
  {
    q: "Are individual sessions confidential?",
    a: "Yes. Individual sessions are private and confidential, and take place in a safe, non-judgemental space — in person or online.",
  },
  {
    q: "Who can attend the workshops?",
    a: "Our workshops are open to individuals, groups, students, educators and professionals. Some are designed for specific audiences such as schools or workplaces, and we’ll always help you find the right fit.",
  },
  {
    q: "What topics do the workshops cover?",
    a: "Common themes include mental wellbeing, emotional awareness, stress management, communication, self-awareness, resilience and healthy workplace culture. Custom themes can be designed on request.",
  },
  {
    q: "How do corporate sessions work?",
    a: "We begin with a conversation about your organisation’s needs, then design a session, workshop series or ongoing programme. Formats are flexible — on-site or online, one-off or year-round.",
  },
  {
    q: "How long is a typical session or workshop?",
    a: "Individual sessions usually run for about an hour. Workshops range from 90-minute sessions to half-day formats, depending on the topic and group.",
  },
  {
    q: "How do I book a session or workshop?",
    a: "Simply reach out through the contact form or email us. We’ll respond, understand what you’re looking for, and plan the next steps together.",
  },
  {
    q: "Can sessions be conducted online?",
    a: "Yes. Most individual sessions, workshops and corporate programmes can be conducted online as well as in person.",
  },
  {
    q: "How can I contact A Piece of Mind?",
    a: "You can use the contact form on this website or email hello@apieceofmind.in. We aim to respond within two working days.",
  },
];

const Faq = () => (
  <>
    <Seo
      title="FAQ — A Piece of Mind"
      description="Answers to common questions about support, workshops, corporate sessions, booking and contacting A Piece of Mind."
    />

    <section data-testid="faq-hero" className="border-b border-line/60 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-6">FAQ</p>
          <h1 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight text-ink" data-testid="faq-headline">
            Questions, answered gently.
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-muted">
            Everything you might want to know about support, workshops, corporate sessions and
            how to begin.
          </p>
        </Reveal>
      </div>
    </section>

    <section data-testid="faq-list" className="py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal>
          <Accordion type="single" collapsible data-testid="faq-accordion">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem key={q} value={`item-${i}`} className="border-b border-line">
                <AccordionTrigger
                  data-testid={`faq-question-${i + 1}`}
                  className="text-left font-heading text-base lg:text-lg font-semibold text-ink hover:text-sage-deep hover:no-underline py-6"
                >
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base leading-relaxed text-ink-muted pb-6">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <Reveal delay={0.1} className="mt-16 text-center">
          <p className="text-base text-ink-muted">Still wondering about something?</p>
          <div className="mt-5">
            <ButtonLink to="/contact" testId="faq-cta-contact" withArrow>
              Ask Us Directly
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Faq;
