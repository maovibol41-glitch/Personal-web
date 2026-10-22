import { useState, useEffect } from "react";
import { navLinks } from "../../data/portfolio";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const sectionIds = navLinks.map((l) => l.href.slice(1));

export default function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  // Close mobile nav on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside header
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!e.target.closest("header")) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-5 border-b border-white/[0.06] bg-bg/70 px-5 py-4 backdrop-blur-xl md:px-10">
      <a href="#home" className="text-xl font-extrabold tracking-tight text-text" tabIndex={-1}>
        Portfolio.
        <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
      </a>

      {/* Mobile hamburger */}
      <button
        className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/10 bg-white/[0.06] md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span
          className={`block h-0.5 w-5 rounded bg-text transition-all duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 rounded bg-text transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 rounded bg-text transition-all duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Nav */}
      <nav
        id="site-nav"
        className={`${
          open ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-3 opacity-0"
        } absolute left-0 right-0 top-full flex flex-col gap-1.5 border-b border-white/[0.08] bg-bg/95 px-5 py-4 backdrop-blur-xl transition-all duration-300 md:pointer-events-auto md:visible md:static md:translate-y-0 md:opacity-100 md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-0`}
      >
        {navLinks.map((link) => {
          const isActive = activeId === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={isActive ? "true" : undefined}
              className={`rounded-[10px] px-3.5 py-2 text-[15px] font-medium transition-colors duration-200 md:py-2 ${
                isActive
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:bg-white/[0.06] hover:text-text"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
