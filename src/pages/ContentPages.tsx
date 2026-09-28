import { Link, useLocation } from "react-router-dom";
import {
  Arrow,
  ButtonLink,
  PageIntro,
  SectionHeading,
  Stats, InitiativeFeature, StrategyPathway,
  PartnerCTA,
  ProgramIcon,
} from "../components/Shared";
import { getInstitutionData } from "../data/institution";
import { formatIndex, stripLanguage, useI18n } from "../locales";
import { siteConfig } from "../config";
function Challenge() {
  const { language, editorial } = useI18n();
  const { barriers, pathway } = getInstitutionData(language);
  return (
    <>
      <PageIntro
        eyebrow={editorial.contentpages_the_challenge}
        title={editorial.contentpages_a_degree_should_open_the_next_door}
      >
        {
          editorial.contentpages_for_syrian_graduates_of_online_universities_the_journey_from_educ
        }
      </PageIntro>
      <section className="container editorial-split section-sm">
        <div className="margin-label">
          {editorial.contentpages_01_education_continued}
        </div>
        <div>
          <h2>
            {editorial.contentpages_a_different_route}
            <br />
            {editorial.contentpages_the_same_determination}
          </h2>
          <p>
            {
              editorial.contentpages_since_2011_conflict_displacement_and_disrupted_education_have_mad
            }
          </p>
          <p>
            {
              editorial.contentpages_syrian_students_pursued_qualifications_in_computer_science_busine
            }
          </p>
        </div>
      </section>
      <section className="recognition-band">
        <div className="container">
          <p className="eyebrow">
            {editorial.contentpages_02_the_missing_connection}
          </p>
          <h2>{editorial.contentpages_between_the_degree}</h2>
          <ol className="pathway">
            {pathway.map((step, i) => (
              <li className={step.type} key={step.title}>
                <span className="pathway-number">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p>
            {
              editorial.contentpages_sgai_s_proposal_identifies_the_absence_of_a_formal_recognition_fr
            }
          </p>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          eyebrow={editorial.contentpages_03_what_this_means}
          title={
            editorial.contentpages_the_consequences_reach_beyond_the_certificate
          }
        />
        <div className="barrier-grid">
          {barriers.map((b, i) => (
            <article key={b.title}>
              <span className="index">
                {formatIndex(i, language)}
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          {
            editorial.contentpages_the_recognition_context_is_described_by_sgai_in_its_july_2026_pro
          }
        </p>
      </section>
      <section className="container editorial-split section-sm">
        <div className="margin-label">
          {editorial.contentpages_04_a_constructive_way_forward}
        </div>
        <div>
          <h2>
            {editorial.contentpages_connect_what_graduates_know}
            <br />
            {editorial.contentpages_with_what_they_can_do_next}
          </h2>
          <p>
            {
              editorial.contentpages_sgai_proposes_coordinated_support_for_employment_further_study_an
            }
          </p>
          <p>
            {
              editorial.contentpages_the_aim_is_to_help_syrian_graduates_use_their_knowledge_inside_sy
            }
          </p>
          <ButtonLink to="/our-work">
            {editorial.contentpages_explore_the_five_components}
          </ButtonLink>
        </div>
      </section>
      <PartnerCTA />
    </>
  );
}
function Work() {
  const { language, editorial } = useI18n();
  const { programs } = getInstitutionData(language);
  return (
    <>
      <PageIntro
        eyebrow={editorial.contentpages_our_work}
        title={editorial.contentpages_a_pathway_built_around_the_graduate}
      >
        {
          editorial.contentpages_five_integrated_components_connect_the_evidence_skills_relationsh
        }
      </PageIntro>
      <div className="container">
        <p className="notice">
          {
            editorial.contentpages_the_following_is_sgai_s_proposed_program_framework_services_admis
          }
        </p>
        <nav className="program-index" aria-label="Program sections">
          {programs.map((p, i) => (
            <a href={`#${p.id}`} key={p.id}>
              <span>
                {formatIndex(i, language)}
              </span>
              {p.title}
              <Arrow />
            </a>
          ))}
        </nav>
      </div>
      {programs.map((p, i) => (
        <section
          className={`program-detail ${i % 2 ? "tinted" : ""}`}
          id={p.id}
          key={p.id}
        >
          <div className="container program-detail-grid">
            <div>
              <div className="program-number">
                <ProgramIcon index={i} />
                <span>
                  {language === "ar" ? "البرنامج " : "Component "}{formatIndex(i, language)}
                </span>
              </div>
              <h2>{p.title}</h2>
              <p className="large-copy">{p.short}</p>
            </div>
            <div>
              <h3>{editorial.contentpages_what_it_is}</h3>
              <p>{p.description}</p>
              <h3>{editorial.contentpages_why_it_matters}</h3>
              <p>{p.why}</p>
              <h3>{editorial.contentpages_key_activities}</h3>
              <ul className="activity-list">
                {p.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="outcome">
                <span className="eyebrow">
                  {editorial.contentpages_intended_outcome}
                </span>
                <p>{p.outcome}</p>
              </div>
              {i === 0 && (
                <p className="source-note">
                  {
                    editorial.contentpages_the_registry_is_a_proposed_protected_program_resource_no_graduate
                  }
                </p>
              )}
            </div>
          </div>
        </section>
      ))}
      <PartnerCTA />
    </>
  );
}
function About() {
  const { language, editorial } = useI18n();
  const { accountability, capabilities, currentWork } = getInstitutionData(language);
  return (
    <>
      <PageIntro
        eyebrow={editorial.contentpages_about_sgai}
        title={editorial.contentpages_graduate_led_institutionally_focused}
      >
        {
          editorial.contentpages_the_syrian_graduate_advancement_initiative_is_led_by_the_syrian_s
        }
      </PageIntro>
      <section className="container mission-grid section-sm">
        <article>
          <p className="eyebrow">{editorial.contentpages_our_mission}</p>
          <h2>
            {editorial.contentpages_turn_education}
            <br />
            {editorial.contentpages_into_opportunity}
          </h2>
          <p>
            {
              editorial.contentpages_support_syrian_graduates_in_accessing_educational_professional_an
            }
          </p>
        </article>
        <article>
          <p className="eyebrow">{editorial.contentpages_our_vision}</p>
          <h2>
            {editorial.contentpages_knowledge_put}
            <br />
            {editorial.contentpages_to_meaningful_use}
          </h2>
          <p>
            {
              editorial.contentpages_a_future_in_which_syrian_graduates_can_pursue_further_study_apply
            }
          </p>
        </article>
      </section>
      <Stats />
      <section className="section container">
        <SectionHeading
          eyebrow={language === "ar" ? "العمل الحالي" : "Current work"}
          title={language === "ar" ? "نحو مسارات عملية ومستدامة." : "Building practical, sustainable pathways."}
        />
        <div className="current-grid">
          {currentWork.map((item) => (
            <article key={item.title}>
              <span className="status-badge">{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow={editorial.contentpages_an_institutional_approach}
          title={editorial.contentpages_the_capacity_to_work_together}
        >
          {
            editorial.contentpages_the_ssas_framework_describes_nineteen_departments_and_units_under
          }
        </SectionHeading>
        <div className="capability-list">
          {capabilities.map((c, i) => (
            <article key={c.title}>
              <span className="index">
                {formatIndex(i, language)}
              </span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="tinted section">
        <div className="container editorial-split">
          <SectionHeading
            eyebrow={editorial.contentpages_accountability}
            title={editorial.contentpages_trust_needs_a_working_structure}
          />
          <div>
            <p>
              {
                editorial.contentpages_the_proposal_sets_out_mechanisms_for_oversight_transparent_decisi
              }
            </p>
            <ul className="activity-list">
              {accountability.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-sm container collaboration-note">
        <p className="eyebrow">
          {editorial.contentpages_digital_collaboration}
        </p>
        <h2>{editorial.contentpages_a_website_built_in_partnership}</h2>
        <p>
          {editorial.contentpages_digital_development_supported_by}
          {siteConfig.projectSecondVoiceUrl ? (
            <a href={siteConfig.projectSecondVoiceUrl}>
              {editorial.contentpages_project_second_voice}
            </a>
          ) : (
            <strong>{editorial.contentpages_project_second_voice}</strong>
          )}
          {
            editorial.contentpages_sgai_remains_an_ssas_led_initiative_this_acknowledgement_describe
          }
        </p>
        <div className="partner-role">
          <span>{language === "ar" ? "قيادة الشراكات" : "Partnership leadership"}</span>
          <strong>Jonathan Wang</strong>
          <p>{language === "ar" ? "مدير الشراكات الدولية والاستراتيجية الرقمية" : "Director of International Partnerships & Digital Strategy"}</p>
        </div>
      </section>
      <section className="vision-section section"><div className="container">
        <SectionHeading eyebrow={language === "ar" ? "الرؤية بعيدة المدى" : "Long-term vision"} title={language === "ar" ? "مسار محتمل نحو إطار تعليمي رسمي مناسب." : "A potential pathway toward an appropriate official educational framework."} />
        <StrategyPathway />
        <p className="source-note">{language === "ar" ? "هذه رؤية مستقبلية، ولا تعني ملكية حكومية حالية أو اعتماداً أو دمجاً مضموناً." : "This is a future objective. It does not imply current government ownership, endorsement, or guaranteed adoption."}</p>
      </div></section>
      <PartnerCTA />
    </>
  );
}
function Partners() {
  const { language, editorial, path } = useI18n();
  const { partnershipCategories } = getInstitutionData(language);
  return (
    <>
      <PageIntro
        eyebrow={editorial.contentpages_partner_with_sgai}
        title={editorial.contentpages_help_open_the_next_door}
      >
        {
          editorial.contentpages_graduate_potential_needs_institutional_pathways_we_invite_univers
        }
      </PageIntro>
      <section className="container section-sm">
        <p className="notice">
          {
            editorial.contentpages_these_are_opportunities_for_potential_collaboration_no_endorsemen
          }
        </p>
        <div className="partnership-list">
          {partnershipCategories.map((p, i) => (
            <article key={p.title}>
              <div className="partnership-heading">
                <span className="index">
                  {formatIndex(i, language)}
                </span>
                <p className="eyebrow">{p.audience}</p>
                <h2>{p.title}</h2>
              </div>
              <div>
                <p>{p.description}</p>
                <p className="connection">
                  <strong>{editorial.contentpages_program_connection}</strong>
                  {p.connection}
                </p>
                <Link className="text-link" to={path("/contact")}>
                  {editorial.contentpages_discuss_this_pathway}
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="tinted section">
        <div className="container editorial-split">
          <SectionHeading
            eyebrow={editorial.contentpages_start_with_a_shared_purpose}
            title={editorial.contentpages_a_conversation_about_what_is_possible}
          />
          <div>
            <p>
              {
                editorial.contentpages_a_useful_first_conversation_can_focus_on_your_institution_s_area_
              }
            </p>
            <p>
              {
                editorial.contentpages_sgai_s_proposed_approach_brings_together_verified_graduate_inform
              }
            </p>
            <ButtonLink to="/contact">
              {editorial.contentpages_contact_sgai}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
function Media() {
  const { language, path } = useI18n();
  return (
    <>
      <PageIntro
        eyebrow={language === "ar" ? "الإعلام والأخبار" : "Media & news"}
        title={language === "ar" ? "تحديثات موثوقة عند حدوثها." : "Verified updates, when they happen."}
      >
        {language === "ar"
          ? "مساحة مستقبلية للمقابلات والتغطية الإعلامية والفعاليات العامة والإعلانات والتقارير والمواد الصحفية."
          : "A future home for interviews, news coverage, public events, announcements, reports, and press materials."}
      </PageIntro>
      <section className="container section-sm">
        <InitiativeFeature />
        <div className="media-empty" role="status">
          <span>{language === "ar" ? "لا توجد تغطية منشورة حالياً" : "No published coverage yet"}</span>
          <h2>{language === "ar" ? "لن ننشر إلا ما يمكن توثيقه." : "We will publish only what can be verified."}</h2>
          <p>{language === "ar" ? "لم يُعقد تجمّع دمشق بعد، ولم تتأكد مشاركة أي جهة إعلامية. ستُضاف الأخبار والتغطية بعد وقوعها والتحقق منها." : "The Damascus gathering has not taken place, and no media attendance is confirmed. News and coverage will be added after they occur and can be verified."}</p>
          <Link className="text-link" to={path("/contact")}>{language === "ar" ? "استفسارات إعلامية" : "Media inquiries"}<Arrow /></Link>
        </div>
      </section>
    </>
  );
}
function Contact() {
  const { language, editorial, locale } = useI18n();
  const { inquiryCategories } = getInstitutionData(language);
  return (
    <>
      <PageIntro
        eyebrow={editorial.contentpages_contact}
        title={editorial.contentpages_let_s_build_the_next_pathway}
      >
        {
          editorial.contentpages_for_institutional_collaboration_academic_opportunities_graduate_s
        }
      </PageIntro>
      <section className="container contact-layout section-sm">
        <div className="contact-panel">
          <p className="eyebrow">{editorial.contentpages_public_contact}</p>
          <h2>
            {editorial.contentpages_contact_details}
            <br />
            {editorial.contentpages_are_being_confirmed}
          </h2>
          <p>{locale.ui.contactUnavailable}</p>
          {siteConfig.publicEmail && (
            <a className="text-link" href={`mailto:${siteConfig.publicEmail}`}>
              {siteConfig.publicEmail}
              <Arrow />
            </a>
          )}
          <p className="source-note">
            {
              editorial.contentpages_for_this_review_please_use_the_existing_channel_through_which_the
            }
          </p>
        </div>
        <div>
          <h2>{editorial.contentpages_how_can_we_connect}</h2>
          <p>
            {
              editorial.contentpages_these_inquiry_categories_will_help_direct_future_messages_to_the_
            }
          </p>
          <ul className="inquiry-list">
            {inquiryCategories.map((c, i) => (
              <li key={c}>
                <span>
                  {formatIndex(i, language)}
                </span>
                {c}
              </li>
            ))}
          </ul>
          <p className="source-note">
            {
              editorial.contentpages_no_messages_or_personal_data_are_submitted_or_stored_on_this_page
            }
          </p>
        </div>
      </section>
    </>
  );
}
function Privacy() {
  const { editorial, locale, path } = useI18n();
  return (
    <>
      <PageIntro
        eyebrow={editorial.contentpages_privacy_review_information}
        title={editorial.contentpages_dignity_comes_first}
      >
        {
          editorial.contentpages_this_website_is_an_institutional_review_prototype_graduate_voices
        }
      </PageIntro>
      <article className="reading-column section-sm">
        <h2>{editorial.contentpages_anonymous_graduate_stories}</h2>
        <p>
          {locale.ui.privacy}
          {
            editorial.contentpages_stories_retain_the_age_and_city_or_region_descriptors_supplied_fo
          }
        </p>
        <h2>{editorial.contentpages_institutional_presentation}</h2>
        <p>
          {
            editorial.contentpages_no_founder_coordinator_staff_or_volunteer_identities_photographs_
          }
        </p>
        <h2>{editorial.contentpages_no_public_graduate_registry}</h2>
        <p>
          {
            editorial.contentpages_the_syrian_graduate_registry_is_a_proposed_program_component_this
          }
        </p>
        <h2>{editorial.contentpages_illustrative_imagery}</h2>
        <p>
          {
            editorial.contentpages_the_study_desk_image_is_ai_generated_contextual_artwork_it_does_n
          }
        </p>
        <h2>{editorial.contentpages_data_in_this_prototype}</h2>
        <p>
          {
            editorial.contentpages_this_prototype_has_no_inquiry_backend_analytics_advertising_track
          }
        </p>
        <h2>{editorial.contentpages_review_before_launch}</h2>
        <p>
          {
            editorial.contentpages_program_descriptions_community_figures_and_organizational_languag
          }
        </p>
        <Link to={path("/contact")} className="text-link">
          {editorial.contentpages_contact_information}
          <Arrow />
        </Link>
      </article>
    </>
  );
}
export default function ContentPages() {
  const { pathname } = useLocation();
  const { editorial } = useI18n();
  switch (stripLanguage(pathname).replace(/\/+$/, "") || "/") {
    case "/challenge":
      return <Challenge />;
    case "/our-work":
      return <Work />;
    case "/about":
      return <About />;
    case "/media":
      return <Media />;
    case "/partner-with-us":
      return <Partners />;
    case "/contact":
      return <Contact />;
    case "/privacy":
      return <Privacy />;
    default:
      return (
        <>
          <PageIntro
            eyebrow={editorial.contentpages_404}
            title={editorial.contentpages_this_path_doesn_t_lead_to_a_page}
          >
            {
              editorial.contentpages_the_page_may_have_moved_or_the_address_may_be_incomplete
            }
          </PageIntro>
          <div className="container section-sm">
            <ButtonLink to="/">
              {editorial.contentpages_return_to_sgai}
            </ButtonLink>
          </div>
        </>
      );
  }
}
