import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What kind of support does Piece of Mind offer?",
    a: "We offer one-to-one individual therapy, interactive wellbeing workshops, and corporate well-being programmes for schools, teams and workplaces.",
  },
  {
    q: "Who can access support?",
    a: "Anyone. You don’t need to be going through something serious. Many people come simply to understand themselves better, manage everyday stress, or build emotional awareness.",
  },
  {
    q: "How do individual sessions work?",
    a: "Individual sessions are private, confidential conversations held in a safe, non-judgemental space, in person or online. They usually run for about an hour and move entirely at your pace.",
  },
  {
    q: "What are the workshops about?",
    a: "Our workshops make mental wellbeing approachable and practical. Common themes include mental wellbeing, emotional awareness, stress management, self-awareness, resilience, communication and healthy workplace culture.",
  },
  {
    q: "Can workshops be customised?",
    a: "Yes. We shape every workshop around the group: their age, context and needs. We can also design custom themes on request.",
  },
  {
    q: "Who are corporate wellbeing sessions for?",
    a: "They’re designed for workplaces, organisations, corporate teams and employee groups: anyone who wants to build a healthier, more supportive culture.",
  },
  {
    q: "Can sessions be conducted for schools?",
    a: "Absolutely. We create age-appropriate sessions for students as well as supportive workshops for educators and staff.",
  },
  {
    q: "Can sessions be conducted for organisations?",
    a: "Yes. We work with organisations of all kinds, from single talks to workshop series and ongoing, year-round wellbeing programmes.",
  },
  {
    q: "How can I enquire about a workshop?",
    a: "Simply send us a message through the contact form, choosing “Workshop” as your enquiry type, and tell us a little about your group. We’ll take it from there.",
  },
  {
    q: "How can I book a session?",
    a: "Reach out through the contact form and we’ll respond to understand what you’re looking for, then plan the next steps together, gently and without pressure.",
  },
  {
    q: "How can I contact Piece of Mind?",
    a: "The easiest way is the contact form on this website. Share a few details about what you need and we’ll get back to you.",
  },
];

const Faq = () => (
  <>
    <Seo
      title="FAQ: Piece of Mind"
      description="Answers to common questions about therapy, workshops, corporate sessions, booking and contacting Piece of Mind."
    />

    <section data-testid="faq-hero" className="border-b border-line/50 bg-sand/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.12] text-forest" data-testid="faq-headline">
            Questions, answered <em className="italic text-sage-dark">gently.</em>
          </h1>
          <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft">
            Everything you might want to know about therapy, workshops, corporate sessions and
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
                  className="text-left font-serif text-base lg:text-lg font-semibold text-forest hover:text-sage-dark hover:no-underline py-6"
                >
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base leading-relaxed text-forest-soft pb-6">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <Reveal delay={0.1} className="mt-16 text-center">
          <p className="text-base text-forest-soft">Still wondering about something?</p>
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
