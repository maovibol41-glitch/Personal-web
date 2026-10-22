import { useEffect, useRef, useState } from "react";
import { skillGroups } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

function SkillBar({ name, level, animate }) {
  const [displayPct, setDisplayPct] = useState(0);

  useEffect(() => {
    if (!animate) {
      setDisplayPct(level);
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayPct(level);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let raf;

    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayPct(Math.round(level * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [animate, level]);

  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between text-sm font-semibold">
        <span>{name}</span>
        <span className="rounded-full border border-accent/20 bg-accent/[0.09] px-2 py-0.5 font-mono text-[13px] tabular-nums text-accent">
          {displayPct}%
        </span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2 transition-[width] duration-[1100ms] ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animateBars, setAnimateBars] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setAnimateBars(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateBars(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-[var(--shell)] scroll-mt-[84px] border-y border-white/[0.05] bg-gradient-to-b from-white/[0.025] to-white/[0.004] px-5 py-16 text-center md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-bg/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-bg/85 to-transparent" />

      <div className="relative">
        <Reveal>
          <SectionTitle kicker="Toolbox">
            My <span className="text-accent">Skills</span>
          </SectionTitle>
        </Reveal>

        <div
          ref={gridRef}
          className="grid gap-6 text-left [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
        >
          {skillGroups.map((group) => (
            <Reveal key={group.title} className="h-full">
              <article className="flex h-full flex-col rounded-[var(--radius)] border border-white/[0.08] bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className="mb-5 flex items-center gap-3.5 border-b border-white/[0.08] pb-4">
                  <i
                    className={`${group.icon} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-lg text-accent`}
                  />
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>

                {group.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={animateBars}
                  />
                ))}

                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {group.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-accent/28 bg-accent/[0.07] px-2.5 py-1 font-mono text-[11.5px] text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
