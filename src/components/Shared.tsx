import {
  ArrowRight, BookOpen, BriefcaseBusiness, Code2, GraduationCap,
  HeartPulse, MapPin, Network, ShieldCheck, Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getInstitutionData } from "../data/institution";
import type { Story } from "../data/useStories";
import { formatIndex, useI18n } from "../locales";

export function Arrow() {
  return <ArrowRight size={18} aria-hidden="true" className="direction-arrow" />;
}

export function RouteLoading() {
  const { locale } = useI18n();
  return <div className="route-loading" role="status">{locale.ui.loading}</div>;
}

export function ButtonLink({ to, children, secondary = false }: { to: string; children: React.ReactNode; secondary?: boolean }) {
  const { path } = useI18n();
  return <Link className={`button ${secondary ? "secondary" : ""}`} to={path(to)}>{children}<Arrow /></Link>;
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-description">{children}</p>}</div>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <header className="page-intro container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="intro-text">{children}</p></header>;
}

export function Stats() {
  const { language, editorial } = useI18n();
  const { statistics } = getInstitutionData(language);
  return (
    <section className="stats" aria-label={language === "ar" ? "حجم المجتمع" : "Community scale"}>
      <div className="container stats-grid">
        {statistics.map((stat) => <article className="stat" key={stat.label}><strong>{stat.value}</strong><p>{stat.label}</p><span>{stat.detail}</span></article>)}
      </div>
      <p className="container source-note">{editorial.shared_community_figures_supplied_by_ssas_in_its_july_2026_proposal_thes}</p>
    </section>
  );
}

const programIcons = [ShieldCheck, BriefcaseBusiness, Network, GraduationCap, Users];
export function ProgramIcon({ index }: { index: number }) {
  const Icon = programIcons[index] || BookOpen;
  return <Icon size={27} strokeWidth={1.35} aria-hidden="true" />;
}

export function ProgramGrid() {
  const { language, editorial, path } = useI18n();
  const { programs } = getInstitutionData(language);
  return <div className="program-grid">{programs.map((program, index) => (
    <Link className="program-card" key={program.id} to={`${path("/our-work")}#${program.id}`}>
      <div className="card-top"><ProgramIcon index={index} /><span className="index">{formatIndex(index, language)}</span></div>
      <h3>{program.title}</h3><p>{program.short}</p><span className="text-link">{editorial.shared_explore_the_program}<Arrow /></span>
    </Link>
  ))}</div>;
}

export function FieldGrid() {
  const { language } = useI18n();
  const { fields } = getInstitutionData(language);
  const icons = [Code2, BriefcaseBusiness, HeartPulse];
  return <div className="field-grid">{fields.map((field, index) => {
    const Icon = icons[index];
    return <article key={field.title}><Icon aria-hidden="true" /><div><h3>{field.title}</h3><p>{field.detail}</p></div></article>;
  })}</div>;
}

export function StoryCard({ story, index = 0 }: { story: Story; index?: number }) {
  const { locale, editorial, path } = useI18n();
  return <article className={`story-card tone-${index % 3}`}>
    <div className="story-meta"><span>{story.location}</span><span>{story.age}{editorial.shared_years_old}</span></div>
    <span className="quote-mark" aria-hidden="true">{editorial.shared_}</span>
    <h3><Link to={path(`/stories/${story.slug}`)}>{story.title}</Link></h3>
    <p>{story.excerpt}</p>
    <Link className="text-link" to={path(`/stories/${story.slug}`)}>{locale.ui.readStory}<Arrow /></Link>
  </article>;
}

export function StrategyPathway() {
  const { language } = useI18n();
  const { strategy } = getInstitutionData(language);
  return <ol className="strategy-pathway">{strategy.map((step, index) => <li key={step.title}><span>{formatIndex(index, language)}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>;
}

export function InitiativeFeature() {
  const { language } = useI18n();
  const { initiative } = getInstitutionData(language);
  return <section className="initiative-feature">
    <div className="initiative-heading"><div><p className="eyebrow">{initiative.label}</p><div className="location-label"><MapPin size={17} aria-hidden="true" />{initiative.city}</div><h2>{initiative.title}</h2><p>{initiative.description}</p></div><div className="status-block"><span>{initiative.statusLabel}</span><strong>{initiative.status}</strong></div></div>
    <dl className="initiative-facts">{initiative.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
    <p className="initiative-note">{initiative.note}</p>
  </section>;
}

export function PartnerCTA() {
  const { editorial } = useI18n();
  return <section className="partner-cta"><div className="container partner-inner"><div><p className="eyebrow">{editorial.shared_a_shared_responsibility_a_shared_opportunity}</p><h2>{editorial.shared_the_next_chapter}<br />{editorial.shared_takes_all_of_us}</h2><p>{editorial.shared_universities_employers_and_institutions_can_help_turn_years_of_le}</p></div><ButtonLink to="/partner-with-us">{editorial.shared_explore_partnership_opportunities}</ButtonLink></div></section>;
}

export function PrivacyNote() {
  const { locale } = useI18n();
  return <p className="privacy-note"><ShieldCheck size={19} aria-hidden="true" />{locale.ui.privacy}</p>;
}
