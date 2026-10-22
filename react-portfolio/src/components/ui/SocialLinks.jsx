import { socials } from "../../data/portfolio";

export default function SocialLinks() {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener"
          aria-label={s.label}
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-accent/45 text-base text-accent transition-all duration-200 hover:-translate-y-[3px] hover:border-accent hover:bg-accent hover:text-[#06202a]"
        >
          <i className={s.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
