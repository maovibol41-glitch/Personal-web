import { profile } from "../../data/portfolio";
import { useTypewriter } from "../../hooks/useTypewriter";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";

export default function Hero() {
  const typedRole = useTypewriter(profile.roles);

  return (
    <section
      id="home"
      className="relative mx-auto flex w-full max-w-[var(--shell)] flex-1 flex-col-reverse items-center gap-10 scroll-mt-[84px] px-5 py-12 md:flex-row md:justify-between md:gap-15 md:px-10 md:py-24"
    >
      {/* Text */}
      <Reveal className="max-w-[540px] text-center md:text-left">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5 font-mono text-[13px] text-muted">
          <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_4px_rgba(74,222,128,0.16)]" />
          {profile.tagline} &nbsp;&middot;&nbsp; {profile.location}
        </p>

        <h4 className="mt-6 text-[17px] font-medium text-muted">Hello, It's Me</h4>
        <h1 className="mt-2 bg-gradient-to-br from-white to-[#a9c6ff] bg-clip-text text-[clamp(38px,6vw,60px)] font-extrabold leading-[1.05] tracking-tight text-transparent">
          {profile.name}
        </h1>
        <h3 className="text-[clamp(20px,3vw,28px)] font-bold">
          And I'm a{" "}
          <span className="text-accent">
            {typedRole}
            <i className="ml-1 inline-block h-[1em] w-[3px] animate-pulse bg-accent align-[-0.12em]" />
          </span>
        </h3>

        <p className="mt-4 leading-relaxed text-muted md:max-w-[46ch]">
          {profile.description}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3.5 md:justify-start">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="ghost">
            Hire Me
          </Button>
        </div>

        <SocialLinks />
      </Reveal>

      {/* Image */}
      <Reveal className="shrink-0">
        <div className="relative h-60 w-60 animate-[float_6s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-accent to-accent-2 p-1.5 md:h-80 md:w-80">
          <div className="absolute -inset-3.5 rounded-full border border-accent/20" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full rounded-full border-[5px] border-bg object-cover"
          />
        </div>
      </Reveal>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden h-[42px] w-[42px] -translate-x-1/2 animate-[bob_2.2s_ease-in-out_infinite] items-center justify-center rounded-full border border-accent/35 text-accent transition-colors hover:bg-accent hover:text-[#06202a] md:flex"
      >
        <i className="fas fa-chevron-down" aria-hidden="true" />
      </a>
    </section>
  );
}
