import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const JournalPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/journal/${slug}`)
      .then((res) => setPost(res.data))
      .catch(() => setNotFound(true));
  }, [slug]);

  if (notFound) {
    return (
      <section className="py-32 text-center">
        <p className="text-forest-soft">This note doesn't exist.</p>
        <Link to="/journal" className="mt-4 inline-block text-sm font-semibold text-forest underline underline-offset-4" data-testid="journal-notfound-back">
          Back to the Journal
        </Link>
      </section>
    );
  }

  if (!post) {
    return <section className="py-32 text-center text-sm text-forest-soft">Loading…</section>;
  }

  return (
    <>
      <Seo title={`${post.title} — Piece of Mind Journal`} description={post.excerpt} />

      <article data-testid="journal-article" className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Link
              to="/journal"
              data-testid="journal-back-link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-forest-soft transition-colors duration-300 hover:text-forest"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
              Back to the Journal
            </Link>
            <p className="mt-10 text-xs tracking-[0.18em] uppercase text-sage-dark">
              {formatDate(post.date)} · {post.reading_time}
            </p>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-forest" data-testid="journal-article-title">
              {post.title}
            </h1>
            <div className="mt-10 space-y-6">
              {post.content.map((para, i) => (
                <p key={i} className="text-base lg:text-lg leading-relaxed text-forest-soft">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-12 border-t border-line/70 pt-8 font-serif italic text-lg text-forest" data-testid="journal-signoff">
              — Piece of Mind
            </p>
          </Reveal>
        </div>
      </article>

      <FinalCta
        testId="journal-cta"
        title={<>Ready when <em className="italic text-sage">you are.</em></>}
        copy="If something here resonated, you're welcome to start a conversation."
        primary={{ to: "/contact", label: "Get in Touch", testId: "journal-cta-contact" }}
      />
    </>
  );
};

export default JournalPost;
