import { services } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto w-full max-w-[var(--shell)] scroll-mt-[84px] px-5 py-16 text-center md:px-10 md:py-24"
    >
      <Reveal>
        <SectionTitle kicker="What I do">
          My <span className="text-accent">Services</span>
        </SectionTitle>
      </Reveal>

      <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
        {services.map((service) => (
          <Reveal key={service.title} className="h-full">
            <article className="h-full rounded-[var(--radius)] border border-white/[0.07] bg-surface p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <i
                className={`${service.icon} mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-accent/10 text-[30px] text-accent`}
              />
              <h3 className="mb-2.5 text-lg font-bold">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
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
    </section>
  );
}
