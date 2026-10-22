export default function SectionTitle({ kicker, children }) {
  return (
    <h2 className="mb-12 text-center text-[clamp(28px,4vw,38px)] font-extrabold tracking-tight">
      <span className="mb-2.5 block font-mono text-[12.5px] font-medium uppercase tracking-[1.6px] text-accent opacity-85">
        {kicker}
      </span>
      {children}
    </h2>
  );
}
