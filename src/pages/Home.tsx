import { editorial } from "../locales";
import { Link } from "react-router-dom";
import {
  Arrow,
  ButtonLink,
  SectionHeading,
  Stats,
  ProgramGrid,
  StoryCard,
  PartnerCTA,
  PrivacyNote,
} from "../components/Shared";
import { fields, impact } from "../data/institution";
import stories from "../data/stories.json";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              {editorial.home_syrian_graduate_advancement_initiative}
            </p>
            <h1>
              {editorial.home_education_should}
              <br />
              {editorial.home_lead}
              <em>{editorial.home_somewhere}</em>
            </h1>
            <p className="hero-description">
              {
                editorial.home_connecting_syrian_graduates_with_the_opportunities_their_educatio
              }
            </p>
            <p className="hero-context">
              {
                editorial.home_for_graduates_of_online_universities_recognition_barriers_inside_
              }
            </p>
            <div className="hero-actions">
              <ButtonLink to="/our-work">
                {editorial.home_explore_our_work}
              </ButtonLink>
              <Link className="text-link" to="/stories">
                {editorial.home_meet_the_voices_behind_the_mission}
                <Arrow />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="short-rule" />
              {editorial.home_education_recognition_opportunity}
            </div>
          </div>
          <figure className="hero-figure">
            <img
              src={`${import.meta.env.BASE_URL}images/study-desk.jpg`}
              alt="Books, a notebook, and a laptop on a sunlit study desk"
              width="1536"
              height="1024"
              fetchPriority="high"
            />
            <figcaption>
              {
                editorial.home_illustrative_image_the_tools_of_a_future_in_progress
              }
            </figcaption>
            <div className="image-label" aria-hidden="true">
              <span>{editorial.home_a_pathway}</span>
              <strong>{editorial.home_beyond_graduation}</strong>
            </div>
          </figure>
        </div>
      </section>
      <Stats />
      <section className="section container challenge-preview">
        <SectionHeading
          eyebrow={editorial.home_the_challenge}
          title={
            editorial.home_the_degree_is_earned_the_next_door_is_still_closed
          }
        />
        <div>
          <p className="large-copy">
            {
              editorial.home_learning_continued_when_traditional_routes_became_difficult_but_f
            }
          </p>
          <p>
            {
              editorial.home_sgai_addresses_the_gap_between_completing_an_online_degree_and_ac
            }
          </p>
          <Link className="text-link" to="/challenge">
            {editorial.home_understand_the_challenge}
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="work-section section">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow={editorial.home_our_approach}
              title={editorial.home_five_components_one_connected_pathway}
            >
              {
                editorial.home_from_understanding_graduates_needs_to_creating_opportunities_for_
              }
            </SectionHeading>
            <span className="pill">
              {editorial.home_proposed_program_framework}
            </span>
          </div>
          <ProgramGrid />
          <div className="fields-row">
            <span>{editorial.home_key_fields_highlighted_in_the_proposal}</span>
            {fields.map((f) => (
              <strong key={f}>{f}</strong>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-top">
          <SectionHeading
            eyebrow={editorial.home_graduate_voices}
            title={editorial.home_behind_every_degree_a_story}
          >
            {
              editorial.home_the_determination_to_learn_the_responsibility_to_contribute_the_h
            }
          </SectionHeading>
          <Link className="text-link" to="/stories">
            {editorial.home_all_graduate_stories}
            <Arrow />
          </Link>
        </div>
        <div className="story-grid">
          {[stories[7], stories[9], stories[11]].map((s, i) => (
            <StoryCard key={s.slug} story={s} index={i} />
          ))}
        </div>
        <PrivacyNote />
      </section>
      <section className="vision-section section">
        <div className="container">
          <SectionHeading
            eyebrow={editorial.home_the_future_we_are_working_toward}
            title={editorial.home_opportunity_that_lasts_beyond_a_single_degree}
          >
            {
              editorial.home_these_are_intended_impacts_of_the_initiative_s_proposed_work
            }
          </SectionHeading>
          <div className="impact-grid">
            {impact.map((v, i) => (
              <article key={v.period}>
                <span className="impact-number">
                  {editorial.home_0}
                  {i + 1}
                </span>
                <p className="eyebrow">{v.period}</p>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PartnerCTA />
    </>
  );
}
