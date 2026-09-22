import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const Journal = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API}/journal`)
      .then((res) => setPosts(res.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Seo
        title="Wellbeing Journal — Piece of Mind"
        description="Gentle, short reads on therapy, rest, emotional awareness and everyday wellbeing — from Piece of Mind."
      />

      <section data-testid="journal-hero" className="bg-sand/60 border-b border-line/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-sage-dark mb-6">Wellbeing Journal</p>
            <h1 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.12] text-forest" data-testid="journal-headline">
              Gentle notes for <em className="italic text-sage-dark">calmer days.</em>
            </h1>
            <p className="mt-6 text-base lg:text-lg leading-relaxed text-forest-soft">
              Short, honest reads on therapy, rest and understanding your mind — written to be
              finished with a cup of tea.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="journal-list" className="py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {loading && <p className="text-sm text-forest-soft" data-testid="journal-loading">Loading…</p>}
          {!loading && posts.length === 0 && (
            <p className="text-sm text-forest-soft" data-testid="journal-empty">
              New notes are on their way — check back soon.
            </p>
          )}
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to={`/journal/${p.slug}`}
                data-testid={`journal-post-${p.slug}`}
                className="group block border-t border-line/70 py-10 transition-colors duration-300 hover:bg-sand/40"
              >
                <p className="text-xs tracking-[0.18em] uppercase text-sage-dark">
                  {formatDate(p.date)} · {p.reading_time}
                </p>
                <h2 className="mt-3 font-serif text-2xl lg:text-3xl tracking-tight text-forest transition-transform duration-300 group-hover:translate-x-1">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm lg:text-base leading-relaxed text-forest-soft max-w-xl">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                  Read the note
                  <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Journal;
