import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ENQUIRY_TYPES = ["Individual Therapy", "Workshop", "Corporate Well-being", "General Enquiry"];

const inputClass =
  "w-full rounded-lg border border-line bg-offwhite px-4 py-3 text-sm text-forest placeholder:text-forest-soft/50 outline-none transition-colors duration-300 focus:border-sage-dark focus:ring-1 focus:ring-sage-dark";

const Field = ({ label, htmlFor, children }) => (
  <div className="space-y-2">
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-forest">
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
      toast.error("Something went wrong. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact — Piece of Mind"
        description="Let's connect — reach out to Piece of Mind for individual support, workshops or corporate wellbeing."
      />

      <section data-testid="contact-hero" className="border-b border-line/50 bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Contact</p>
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.12] text-forest" data-testid="contact-headline">
              Let’s <em className="italic text-sage-dark">connect.</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft">
              Whether you’re seeking support, curious about a workshop, or planning wellbeing
              for your organisation — start the conversation here. There’s no pressure and no
              wrong way to begin.
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
                  className="rounded-full bg-forest px-10 py-4 text-sm font-semibold text-offwhite transition-all duration-300 hover:bg-forest-soft hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </Reveal>
          </div>
          <aside className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="rounded-[2rem] bg-sand/60 border border-line/50 p-8 lg:p-10 space-y-8">
                <div>
                  <h2 className="font-serif text-xl font-semibold text-forest">Other ways to reach us</h2>
                  <p className="mt-2 text-sm leading-relaxed text-forest-soft">
                    We read every message and respond with care.
                  </p>
                </div>
                <ul className="space-y-5 text-sm text-forest-soft">
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-forest shrink-0">
                      <Mail size={17} strokeWidth={1.5} />
                    </span>
                    <a href="mailto:admin@peaceofmind.co.in" data-testid="contact-email-link" className="transition-colors duration-300 hover:text-forest">
                      admin@peaceofmind.co.in
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-forest shrink-0">
                      <Phone size={17} strokeWidth={1.5} />
                    </span>
                    <a href="tel:+918999952843" data-testid="contact-phone-link" className="transition-colors duration-300 hover:text-forest">
                      +91 89999 52843
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center text-forest shrink-0">
                      <MapPin size={17} strokeWidth={1.5} />
                    </span>
                    <span data-testid="contact-location-text">Online worldwide · In-person in Pune</span>
                  </li>
                </ul>
                <div className="border-t border-line/60 pt-7">
                  <p className="text-sm font-semibold text-forest mb-4">Follow along</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/pieceofmind.co.in"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram — @pieceofmind.co.in"
                      data-testid="contact-social-instagram"
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-forest-soft transition-colors duration-300 hover:bg-sage hover:text-forest hover:border-sage"
                    >
                      <Instagram size={17} strokeWidth={1.5} />
                    </a>
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
