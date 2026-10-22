import { profile, stats } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[var(--shell)] scroll-mt-[84px] border-y border-white/[0.05] bg-gradient-to-b from-white/[0.025] to-white/[0.004] px-5 py-16 md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-bg/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60px] bg-gradient-to-t from-bg/85 to-transparent" />

      <div className="relative flex flex-col items-center gap-9 text-center md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:items-center md:justify-center md:gap-[72px] md:text-left">
        {/* Image */}
        <Reveal className="flex w-full justify-center">
          <div className="relative aspect-square w-full max-w-[320px] rounded-[28px] bg-gradient-to-br from-accent to-accent-2 p-1.5">
            <div className="absolute inset-1.5 rounded-[22px] border border-accent/20" />
            <img
              src={profile.photo}
              alt="About Me"
              className="h-full w-full rounded-[22px] object-cover"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="max-w-[560px]">
          <h4 className="font-mono text-[15px] font-semibold tracking-wide text-accent">
            About Me
          </h4>
          <h2 className="mt-2.5 mb-4 text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight">
            {profile.tagline}
          </h2>
          <p className="mb-4 leading-loose text-muted">{profile.aboutDescription}</p>
          <p className="leading-loose text-muted">{profile.aboutExperience}</p>

          {/* Stats */}
          <div className="my-6 flex flex-wrap justify-center gap-7 border-y border-white/[0.08] py-5 md:justify-start">
            {stats.map((s) => (
              <div key={s.label} className="min-w-[90px]">
                <strong className="block text-[26px] font-extrabold leading-tight text-accent">
                  {s.value}
                </strong>
                <span className="text-[12.5px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 md:justify-start">
            <Button href="#contact">Get In Touch</Button>
            <Button href="#skills" variant="ghost">
              My Skills
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
