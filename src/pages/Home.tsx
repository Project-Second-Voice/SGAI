import { Link } from "react-router-dom";
import {
  Arrow, ButtonLink, FieldGrid, InitiativeFeature, PartnerCTA, PrivacyNote,
  ProgramGrid, SectionHeading, Stats, StoryCard, StrategyPathway,
} from "../components/Shared";
import { useStories } from "../data/useStories";
import { getInstitutionData } from "../data/institution";
import { formatIndex, useI18n } from "../locales";

export default function Home() {
  const { language, editorial, path } = useI18n();
  const { impact, currentWork } = getInstitutionData(language);
  const stories = useStories();
  const labels = language === "ar" ? {
    fields: "مجالات التعليم", fieldsTitle: "ثلاثة مجالات. إمكانات متعددة.", current: "عملنا الآن", currentTitle: "من التوثيق إلى بناء الفرص.",
    initiative: "مبادرة قيد التطوير", strategy: "المسار بعيد المدى", strategyTitle: "خطوات واضحة نحو إطار مؤسسي مستدام.",
  } : {
    fields: "Educational fields", fieldsTitle: "Three fields. Many possibilities.", current: "Current work", currentTitle: "From documentation to opportunity-building.",
    initiative: "Initiative in development", strategy: "Long-term pathway", strategyTitle: "Clear steps toward a sustainable institutional framework.",
  };

  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">{editorial.home_syrian_graduate_advancement_initiative}</p>
        <h1>{editorial.home_education_should}<br />{editorial.home_lead}<em>{editorial.home_somewhere}</em></h1>
        <p className="hero-description">{editorial.home_connecting_syrian_graduates_with_the_opportunities_their_educatio}</p>
        <p className="hero-context">{editorial.home_for_graduates_of_online_universities_recognition_barriers_inside_}</p>
        <div className="hero-actions"><ButtonLink to="/our-work">{editorial.home_explore_our_work}</ButtonLink><Link className="text-link" to={path("/stories")}>{editorial.home_meet_the_voices_behind_the_mission}<Arrow /></Link></div>
        <div className="hero-footnote"><span className="short-rule" />{editorial.home_education_recognition_opportunity}</div>
      </div>
      <figure className="hero-figure">
        <img src={`${import.meta.env.BASE_URL}images/study-desk.jpg`} alt={language === "ar" ? "كتب ودفتر وحاسوب محمول على مكتب دراسة مضاء بالشمس" : "Books, a notebook, and a laptop on a sunlit study desk"} width="1536" height="1024" fetchPriority="high" />
        <figcaption>{editorial.home_illustrative_image_the_tools_of_a_future_in_progress}</figcaption>
        <div className="image-label" aria-hidden="true"><span>{editorial.home_a_pathway}</span><strong>{editorial.home_beyond_graduation}</strong></div>
      </figure>
    </div></section>
    <Stats />
    <section className="section container challenge-preview">
      <SectionHeading eyebrow={editorial.home_the_challenge} title={editorial.home_the_degree_is_earned_the_next_door_is_still_closed} />
      <div><p className="large-copy">{editorial.home_learning_continued_when_traditional_routes_became_difficult_but_f}</p><p>{editorial.home_sgai_addresses_the_gap_between_completing_an_online_degree_and_ac}</p><Link className="text-link" to={path("/challenge")}>{editorial.home_understand_the_challenge}<Arrow /></Link></div>
    </section>
    <section className="work-section section"><div className="container">
      <div className="section-top"><SectionHeading eyebrow={editorial.home_our_approach} title={editorial.home_five_components_one_connected_pathway}>{editorial.home_from_understanding_graduates_needs_to_creating_opportunities_for_}</SectionHeading><span className="pill">{editorial.home_proposed_program_framework}</span></div>
      <ProgramGrid />
    </div></section>
    <section className="section container fields-section"><SectionHeading eyebrow={labels.fields} title={labels.fieldsTitle} /><FieldGrid /></section>
    <section className="current-work section"><div className="container">
      <SectionHeading eyebrow={labels.current} title={labels.currentTitle} />
      <div className="current-grid">{currentWork.map((item) => <article key={item.title}><span className="status-badge">{item.status}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div></section>
    <section className="section container initiative-section"><p className="eyebrow">{labels.initiative}</p><InitiativeFeature /></section>
    <section className="section container">
      <div className="section-top"><SectionHeading eyebrow={editorial.home_graduate_voices} title={editorial.home_behind_every_degree_a_story}>{editorial.home_the_determination_to_learn_the_responsibility_to_contribute_the_h}</SectionHeading><Link className="text-link" to={path("/stories")}>{editorial.home_all_graduate_stories}<Arrow /></Link></div>
      <div className="story-grid">{[stories[7], stories[9], stories[11]].map((story, index) => <StoryCard key={story.slug} story={story} index={index} />)}</div><PrivacyNote />
    </section>
    <section className="vision-section section"><div className="container"><SectionHeading eyebrow={labels.strategy} title={labels.strategyTitle} /><StrategyPathway /></div></section>
    <section className="impact-section section"><div className="container"><SectionHeading eyebrow={editorial.home_the_future_we_are_working_toward} title={editorial.home_opportunity_that_lasts_beyond_a_single_degree}>{editorial.home_these_are_intended_impacts_of_the_initiative_s_proposed_work}</SectionHeading><div className="impact-grid">{impact.map((item, index) => <article key={item.period}><span className="impact-number">{formatIndex(index, language)}</span><p className="eyebrow">{item.period}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <PartnerCTA />
  </>;
}
