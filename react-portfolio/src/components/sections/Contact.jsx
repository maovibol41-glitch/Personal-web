import { useState } from "react";
import { profile } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import SocialLinks from "../ui/SocialLinks";

function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const setField = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((err) => ({ ...err, [field]: "" }));
    }
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "That email address looks incorrect.";
    if (!values.message.trim()) next.message = "Please write a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio contact from ${values.name.trim()}`);
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      setValues({ name: "", email: "", message: "" });
    }, 2500);
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.14] bg-surface-2 px-4 py-3.5 text-[15px] text-text transition-all duration-200 placeholder:text-[#97a4c4] focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,242,254,0.14)] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col">
      <div className="mb-4 flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-[13px] font-semibold text-muted">
          Your Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          placeholder="Vibol"
          autoComplete="name"
          required
          value={values.name}
          onChange={setField("name")}
          className={inputClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <span className="text-[12.5px] text-[#ff9aa8]" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="mb-4 flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-[13px] font-semibold text-muted">
          Your Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          value={values.email}
          onChange={setField("email")}
          className={inputClass}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <span className="text-[12.5px] text-[#ff9aa8]" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="mb-4 flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-[13px] font-semibold text-muted">
          Your Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project…"
          required
          value={values.message}
          onChange={setField("message")}
          className={`${inputClass} resize-y`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <span className="text-[12.5px] text-[#ff9aa8]" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 w-full rounded-full border border-transparent bg-gradient-to-br from-accent to-[#4be3f5] px-7 py-3 text-[15px] font-bold text-[#06202a] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,242,254,0.28)] disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:translate-y-0"
      >
        {submitting ? "Opening your email app…" : "Send Message"}
      </button>

      <p className="mt-3.5 text-center text-[13px] text-muted" role="status">
        Prefer email? Reach me at {profile.email}.
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-[var(--shell)] scroll-mt-[84px] border-t border-white/[0.05] bg-gradient-to-b from-white/[0.025] to-white/[0.004] px-5 py-16 text-center md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-bg/85 to-transparent" />

      <div className="relative">
        <Reveal>
          <SectionTitle kicker="Say hello">
            Contact <span className="text-accent">Me</span>
          </SectionTitle>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[900px] gap-10 text-left [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          <Reveal>
            <div>
              <h3 className="mb-4 text-2xl font-bold">Let's Work Together</h3>
              <p className="my-3 text-muted">
                Feel free to contact me for projects, collaborations, or just to say
                hello 👋
              </p>
              <p className="my-3 text-muted">
                <i className="fas fa-en mr-2.5 w-[18px] text-center text-accent" />
                <a href={`mailto:${profile.email}`} className="hover:text-accent">
                  {profile.email}
                </a>
              </p>
              <p className="my-3 text-muted">
                <i className="fas fa-phone mr-2.5 w-[18px] text-center text-accent" />
                {profile.phone}
              </p>
              <p className="my-3 text-muted">
                <i className="fas fa-location-dot mr-2.5 w-[18px] text-center text-accent" />
                {profile.location}
              </p>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
