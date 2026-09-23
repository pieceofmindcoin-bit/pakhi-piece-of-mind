import { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, Clock, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/SectionIntro";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const formatDate = (value) => {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
};

const UpcomingEvents = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/events`)
      .then((res) => setEvents(res.data))
      .catch(() => setEvents([]));
  }, []);

  return (
    <section data-testid="upcoming-events" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionIntro
          id="upcoming"
          title={<>Upcoming workshops <em className="italic text-sage-dark">& events</em></>}
          copy="Regular gatherings, online and in Pune. Save a spot before the room fills."
        />
        <div className="mt-14">
          {events === null && <p className="text-sm text-forest-soft">Loading…</p>}
          {events !== null && events.length === 0 && (
            <div className="rounded-[1.75rem] border border-line bg-sand/50 p-12 text-center" data-testid="events-empty">
              <p className="font-serif text-xl lg:text-2xl text-forest">New gatherings are taking shape.</p>
              <p className="mt-3 text-sm lg:text-base text-forest-soft">
                Check back soon, or write to us and we’ll keep you posted.
              </p>
            </div>
          )}
          {events !== null && events.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {events.map((e, i) => (
                <Reveal key={e.id} delay={i * 0.08} className="h-full">
                  <article className="h-full rounded-[1.75rem] border border-line bg-sand/50 p-8 lg:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-sage" data-testid={`event-card-${e.id}`}>
                    <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-sage-dark">
                      <CalendarDays size={15} strokeWidth={1.5} />
                      <span>{formatDate(e.date)}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl font-semibold tracking-tight text-forest">{e.title}</h3>
                    {(e.time || e.location) && (
                      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-forest-soft">
                        {e.time && (
                          <span className="inline-flex items-center gap-2">
                            <Clock size={15} strokeWidth={1.5} /> {e.time}
                          </span>
                        )}
                        {e.location && (
                          <span className="inline-flex items-center gap-2">
                            <MapPin size={15} strokeWidth={1.5} /> {e.location}
                          </span>
                        )}
                      </p>
                    )}
                    {e.description && (
                      <p className="mt-4 text-sm lg:text-base leading-relaxed text-forest-soft flex-1">{e.description}</p>
                    )}
                    {e.link && (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`event-register-${e.id}`}
                        className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-forest"
                      >
                        Register
                        <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
