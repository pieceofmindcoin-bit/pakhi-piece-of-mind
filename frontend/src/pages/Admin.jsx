import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Pencil, Trash2, Plus } from "lucide-react";
import Seo from "@/components/Seo";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputClass =
  "w-full rounded-lg border border-line bg-offwhite px-4 py-3 text-sm text-forest placeholder:text-forest-soft/50 outline-none transition-colors duration-300 focus:border-sage-dark focus:ring-1 focus:ring-sage-dark";

const EMPTY_FORM = { title: "", date: "", time: "", location: "", description: "", link: "", image: "" };

const formatApiError = (detail) => {
  if (!detail) return "Something went wrong.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((e) => e?.msg || "").filter(Boolean).join(" ");
  return String(detail);
};

const Admin = () => {
  const [token, setToken] = useState(() => sessionStorage.getItem("pom_admin") || "");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const authHeaders = () => ({ headers: { Authorization: `Bearer ${token}` } });

  const loadEvents = () =>
    axios
      .get(`${API}/events`)
      .then((res) => setEvents(res.data))
      .catch(() => setEvents([]));

  useEffect(() => {
    if (token) loadEvents();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const { data } = await axios.post(`${API}/auth/login`, login);
      sessionStorage.setItem("pom_admin", data.token);
      setToken(data.token);
      toast.success("Welcome back.");
    } catch (err) {
      setLoginError(formatApiError(err.response?.data?.detail));
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("pom_admin");
    setToken("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        await axios.put(`${API}/events/${editingId}`, form, authHeaders());
        toast.success("Workshop updated.");
      } else {
        await axios.post(`${API}/events`, form, authHeaders());
        toast.success("Workshop added.");
      }
      setForm(EMPTY_FORM);
      setEditingId(null);
      loadEvents();
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        handleLogout();
        toast.error("Session expired. Please sign in again.");
      } else {
        toast.error(formatApiError(err.response?.data?.detail));
      }
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (ev) => {
    setEditingId(ev.id);
    setForm({
      title: ev.title || "",
      date: ev.date || "",
      time: ev.time || "",
      location: ev.location || "",
      description: ev.description || "",
      link: ev.link || "",
      image: ev.image || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/events/${id}`, authHeaders());
      toast.success("Workshop removed.");
      if (editingId === id) {
        setEditingId(null);
        setForm(EMPTY_FORM);
      }
      loadEvents();
    } catch {
      toast.error("Could not remove this workshop.");
    }
  };

  if (!token) {
    return (
      <section data-testid="admin-login" className="py-24 lg:py-32">
        <Seo title="Admin: Piece of Mind" description="Piece of Mind admin." />
        <div className="max-w-md mx-auto px-6">
          <h1 className="font-serif text-3xl tracking-tight text-forest">Founder sign in</h1>
          <p className="mt-3 text-sm text-forest-soft">Manage upcoming workshops and events.</p>
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <input
              type="email"
              required
              placeholder="Email"
              value={login.email}
              onChange={(e) => setLogin((l) => ({ ...l, email: e.target.value }))}
              className={inputClass}
              data-testid="admin-email-input"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={login.password}
              onChange={(e) => setLogin((l) => ({ ...l, password: e.target.value }))}
              className={inputClass}
              data-testid="admin-password-input"
            />
            {loginError && <p className="text-sm text-red-700" data-testid="admin-login-error">{loginError}</p>}
            <button
              type="submit"
              data-testid="admin-login-button"
              className="rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-offwhite transition-colors duration-300 hover:bg-forest-soft"
            >
              Sign in
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section data-testid="admin-panel" className="py-20 lg:py-28">
      <Seo title="Manage Workshops: Piece of Mind" description="Manage upcoming workshops and events." />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="font-serif text-3xl tracking-tight text-forest">Upcoming workshops & events</h1>
          <button
            onClick={handleLogout}
            data-testid="admin-logout-button"
            className="text-sm font-semibold text-forest-soft transition-colors duration-300 hover:text-forest"
          >
            Sign out
          </button>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSave} className="rounded-[1.75rem] border border-line bg-sand/50 p-8 space-y-5" data-testid="event-form">
            <h2 className="font-serif text-xl font-semibold text-forest">
              {editingId ? "Edit workshop" : "Add a workshop"}
            </h2>
            <input
              type="text"
              required
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              className={inputClass}
              data-testid="event-title-input"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                className={inputClass}
                data-testid="event-date-input"
              />
              <input
                type="text"
                placeholder="Time (e.g. 6:00 PM IST)"
                value={form.time}
                onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                className={inputClass}
                data-testid="event-time-input"
              />
            </div>
            <input
              type="text"
              placeholder="Location (e.g. Online or Pune)"
              value={form.location}
              onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
              className={inputClass}
              data-testid="event-location-input"
            />
            <textarea
              rows={4}
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              className={`${inputClass} resize-y`}
              data-testid="event-description-input"
            />
            <input
              type="url"
              placeholder="Registration link (optional)"
              value={form.link}
              onChange={(e) => setForm((f) => ({ ...f, link: e.target.value }))}
              className={inputClass}
              data-testid="event-link-input"
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={saving}
                data-testid="event-save-button"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-offwhite transition-colors duration-300 hover:bg-forest-soft disabled:opacity-60"
              >
                <Plus size={16} strokeWidth={2} />
                {saving ? "Saving…" : editingId ? "Save changes" : "Add workshop"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => { setEditingId(null); setForm(EMPTY_FORM); }}
                  data-testid="event-cancel-button"
                  className="text-sm font-semibold text-forest-soft hover:text-forest"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="space-y-5" data-testid="event-list">
            {events.length === 0 && (
              <p className="text-sm text-forest-soft" data-testid="event-list-empty">
                No upcoming workshops yet. Add your first one with the form.
              </p>
            )}
            {events.map((ev) => (
              <div key={ev.id} className="rounded-[1.5rem] border border-line bg-offwhite p-6 flex items-start justify-between gap-4" data-testid={`admin-event-${ev.id}`}>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-forest">{ev.title}</h3>
                  <p className="mt-1 text-sm text-forest-soft">
                    {ev.date}{ev.time ? ` · ${ev.time}` : ""}{ev.location ? ` · ${ev.location}` : ""}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleEdit(ev)}
                    aria-label={`Edit ${ev.title}`}
                    data-testid={`event-edit-${ev.id}`}
                    className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-forest-soft transition-colors duration-300 hover:bg-sage hover:text-forest hover:border-sage"
                  >
                    <Pencil size={15} strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => handleDelete(ev.id)}
                    aria-label={`Delete ${ev.title}`}
                    data-testid={`event-delete-${ev.id}`}
                    className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-forest-soft transition-colors duration-300 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
                  >
                    <Trash2 size={15} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
