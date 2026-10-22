export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.07] px-5 py-5 text-center text-sm text-muted">
      &copy; {year} Mao Vibol. Built with React, Vite &amp; Tailwind CSS.
    </footer>
  );
}
