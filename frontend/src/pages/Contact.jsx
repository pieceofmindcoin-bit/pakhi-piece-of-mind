import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ENQUIRY_TYPES = ["Individual Support", "Workshop Enquiry", "Corporate Wellbeing", "General"];

const inputClass =
  "w-full rounded-lg border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 outline-none transition-colors duration-300 focus:border-sage focus:ring-1 focus:ring-sage";

const Field = ({ label, htmlFor, children }) => (
  <div className="space-y-2">
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink">
      {label}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", enquiry_type: ENQUIRY_TYPES[0], message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thank you — your message has been received. We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", enquiry_type: ENQUIRY_TYPES[0], message: "" });
    } catch {
      toast.error("Something went wrong. Please try again, or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact — A Piece of Mind"
        description="Reach out to A Piece of Mind — whether for individual support, a workshop, or corporate wellbeing, we'd love to hear from you."
      />

      <section data-testid="contact-hero" className="border-b border-line/60 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sage-deep mb-6">Contact</p>
            <h1 className="font-heading text-4xl sm:text-5xl tracking-tight leading-tight text-ink" data-testid="contact-headline">
              We’d love to hear from you.
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-ink-muted">
              Whether you’re seeking support, curious about a workshop, or planning wellbeing
              for your organisation — start the conversation here.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="contact-body" className="py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-7">
                  <Field label="Name" htmlFor="contact-name">
                    <input
                      id="contact-name"
                      data-testid="contact-name-input"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="contact-email">
                    <input
                      id="contact-email"
                      data-testid="contact-email-input"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-7">
                  <Field label="Phone" htmlFor="contact-phone">
                    <input
                      id="contact-phone"
                      data-testid="contact-phone-input"
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="Optional"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Enquiry Type" htmlFor="contact-enquiry">
                    <select
                      id="contact-enquiry"
                      data-testid="contact-enquiry-select"
                      value={form.enquiry_type}
                      onChange={update("enquiry_type")}
                      className={inputClass}
                    >
                      {ENQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message" htmlFor="contact-message">
                  <textarea
                    id="contact-message"
                    data-testid="contact-message-input"
                    required
                    rows={6}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us a little about what you're looking for…"
                    className={`${inputClass} resize-y`}
                  />
                </Field>
                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={submitting}
                  className="rounded-full bg-sage px-10 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-sage-dark disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </Reveal>
          </div>
          <aside className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="rounded-2xl bg-surface border border-line/60 p-8 lg:p-10 space-y-8">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-ink">Other ways to reach us</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    We aim to respond within two working days.
                  </p>
                </div>
                <ul className="space-y-5 text-sm text-ink-muted">
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage-deep shrink-0">
                      <Mail size={17} strokeWidth={1.5} />
                    </span>
                    <a href="mailto:hello@apieceofmind.in" data-testid="contact-email-link" className="transition-colors duration-300 hover:text-sage-deep">
                      hello@apieceofmind.in
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage-deep shrink-0">
                      <Phone size={17} strokeWidth={1.5} />
                    </span>
                    <span data-testid="contact-phone-text">+91 00000 00000</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-sage-deep shrink-0">
                      <MapPin size={17} strokeWidth={1.5} />
                    </span>
                    <span data-testid="contact-location-text">Your City, India · In person & online</span>
                  </li>
                </ul>
                <div className="border-t border-line/60 pt-7">
                  <p className="text-sm font-semibold text-ink mb-4">Follow along</p>
                  <div className="flex gap-3">
                    {[
                      { label: "Instagram", Icon: Instagram },
                      { label: "LinkedIn", Icon: Linkedin },
                      { label: "Facebook", Icon: Facebook },
                    ].map(({ label, Icon }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={label}
                        data-testid={`contact-social-${label.toLowerCase()}`}
                        className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-muted transition-colors duration-300 hover:bg-sage hover:text-cream hover:border-sage"
                      >
                        <Icon size={17} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
