import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Wrapper that fades/slides children in when scrolled into view.
 */
export default function Reveal({ children, className = "", stagger = false }) {
  const { ref, inView } = useScrollReveal();

  if (stagger) {
    return (
      <div
        ref={ref}
        className={`${className} transition-all duration-600 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
        style={{ transitionDelay: "0.05s" }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
