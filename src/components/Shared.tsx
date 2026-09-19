import { editorial } from "../locales";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Network,
  Users,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { programs, statistics } from "../data/institution";
import { locale } from "../locales";
import stories from "../data/stories.json";
export function Arrow() {
  return (
    <ArrowRight size={18} aria-hidden="true" className="direction-arrow" />
  );
}
export function ButtonLink({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`button ${secondary ? "secondary" : ""}`} to={to}>
      {children}
      <Arrow />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="page-intro container">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-text">{children}</p>
    </header>
  );
}
export function Stats() {
  return (
    <section className="stats" aria-label="Community scale">
      <div className="container stats-grid">
        {statistics.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <p>{s.label}</p>
            <span>{s.detail}</span>
          </div>
        ))}
      </div>
      <p className="container source-note">
        {
          editorial.shared_community_figures_supplied_by_ssas_in_its_july_2026_proposal_thes
        }
      </p>
    </section>
  );
}
const icons = [ShieldCheck, BriefcaseBusiness, Network, GraduationCap, Users];
export function ProgramIcon({ index }: { index: number }) {
  const Icon = icons[index] || BookOpen;
  return <Icon size={27} strokeWidth={1.35} aria-hidden="true" />;
}
export function ProgramGrid() {
  return (
    <div className="program-grid">
      {programs.map((p, i) => (
        <Link className="program-card" key={p.id} to={`/our-work#${p.id}`}>
          <div className="card-top">
            <ProgramIcon index={i} />
            <span className="index">
              {editorial.shared_0}
              {i + 1}
            </span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.short}</p>
          <span className="text-link">
            {editorial.shared_explore_the_program}
            <Arrow />
          </span>
        </Link>
      ))}
    </div>
  );
}
export function StoryCard({
  story,
  index = 0,
}: {
  story: (typeof stories)[number];
  index?: number;
}) {
  return (
    <article className={`story-card tone-${index % 3}`}>
      <div className="story-meta">
        <span>{story.location}</span>
        <span>
          {story.age}
          {editorial.shared_years_old}
        </span>
      </div>
      <span className="quote-mark" aria-hidden="true">
        {editorial.shared_}
      </span>
      <h3>
        <Link to={`/stories/${story.slug}`}>{story.title}</Link>
      </h3>
      <p>{story.excerpt}</p>
      <Link className="text-link" to={`/stories/${story.slug}`}>
        {locale.ui.readStory}
        <Arrow />
      </Link>
    </article>
  );
}
export function PartnerCTA() {
  return (
    <section className="partner-cta">
      <div className="container partner-inner">
        <div>
          <p className="eyebrow">
            {editorial.shared_a_shared_responsibility_a_shared_opportunity}
          </p>
          <h2>
            {editorial.shared_the_next_chapter}
            <br />
            {editorial.shared_takes_all_of_us}
          </h2>
          <p>
            {
              editorial.shared_universities_employers_and_institutions_can_help_turn_years_of_le
            }
          </p>
        </div>
        <ButtonLink to="/partner-with-us">
          {editorial.shared_explore_partnership_opportunities}
        </ButtonLink>
      </div>
    </section>
  );
}
export function PrivacyNote() {
  return (
    <p className="privacy-note">
      <ShieldCheck size={19} aria-hidden="true" />
      {locale.ui.privacy}
    </p>
  );
}
