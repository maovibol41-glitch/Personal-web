export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const base =
    "mt-6 inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary:
      "border-transparent bg-gradient-to-br from-accent to-[#4be3f5] text-[#06202a] shadow-lg hover:shadow-[0_10px_28px_rgba(0,242,254,0.28)]",
    ghost:
      "border-white/20 bg-transparent text-text hover:border-accent hover:bg-white/[0.07]",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
