import { useEffect, useState } from "react";

/**
 * Cycles through a list of roles with a typewriter effect.
 */
export function useTypewriter(roles, enabled = true) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (!enabled || !roles.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setText(roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, 1600);
          return;
        }
        timer = setTimeout(tick, 110);
      } else {
        charIndex--;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, 55);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [roles, enabled]);

  return text;
}
