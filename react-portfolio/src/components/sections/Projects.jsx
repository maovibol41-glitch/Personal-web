import { projects } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-[var(--radius)] border border-white/[0.08] bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
      {/* Image + hover overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#040916]/72 to-[#041a20]/96 p-6 text-center opacity-0 backdrop-blur-[3px] transition-opacity duration-400 group-hover:opacity-100 [@media(hover:none)]:justify-end [@media(hover:none)]:bg-gradient-to-b [@media(hover:none)]:from-[#040916]/05 [@media(hover:none)]:to-[#040c18]/94 [@media(hover:none)]:py-4 [@media(hover:none)]:opacity-100">
          <h4 className="text-xl font-bold text-accent">{project.title}</h4>
          <p className="hidden text-sm leading-relaxed text-[#d6e2f5] [@media(hover:none)]:hidden md:block">
            {project.overlayDescription}
          </p>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener"
            aria-label={`View ${project.title} on GitHub`}
            className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[#06202a] transition-transform hover:scale-110 [@media(hover:none)]:h-9 [@media(hover:none)]:w-9"
          >
            <i className="fas fa-link" />
          </a>
        </div>
      </div>

      {/* Meta */}
      <div className="p-5 text-left">
        <h4 className="mb-1.5 text-lg font-bold">{project.title}</h4>
        <p className="text-[13.5px] leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener"
          className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
        >
          <i className="fab fa-github" aria-hidden="true" />
          {project.repoLabel}
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-[var(--shell)] scroll-mt-[84px] px-5 py-16 text-center md:px-10 md:py-24"
    >
      <Reveal>
        <SectionTitle kicker="Selected work">
          My <span className="text-accent">Projects</span>
        </SectionTitle>
      </Reveal>

      <div className="mt-10 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
        {projects.map((project) => (
          <Reveal key={project.title} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
