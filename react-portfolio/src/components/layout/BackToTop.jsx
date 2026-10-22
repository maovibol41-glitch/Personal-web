import { useState, useEffect } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        setShow(window.scrollY > 420);
        queued = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollTop}
      className={`fixed bottom-5 right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-surface/90 text-accent backdrop-blur-md transition-all duration-300 hover:bg-accent hover:text-[#06202a] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  );
}
