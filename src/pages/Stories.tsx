import { editorial } from "../locales";
import { Link, useParams } from "react-router-dom";
import {
  Arrow,
  PageIntro,
  PrivacyNote,
  StoryCard,
  PartnerCTA,
  ButtonLink,
} from "../components/Shared";
import stories from "../data/stories.json";
import { locale } from "../locales";
export default function Stories() {
  const { slug } = useParams();
  if (!slug)
    return (
      <>
        <PageIntro
          eyebrow={editorial.stories_graduate_stories}
          title={editorial.stories_thirteen_voices_a_shared_hope}
        >
          {
            editorial.stories_in_their_own_words_syrian_graduates_describe_the_effort_to_keep_l
          }
        </PageIntro>
        <section className="container stories-section">
          <div className="stories-toolbar">
            <span>
              {stories.length}
              {editorial.stories_13_anonymous_accounts}
            </span>
            <span>{editorial.stories_education_perseverance_possibility}</span>
          </div>
          <PrivacyNote />
          <div className="story-grid all-stories">
            {stories.map((s, i) => (
              <StoryCard key={s.slug} story={s} index={i} />
            ))}
          </div>
        </section>
        <PartnerCTA />
      </>
    );
  const story = stories.find((s) => s.slug === slug);
  if (!story)
    return (
      <>
        <PageIntro
          eyebrow={editorial.stories_story_not_found}
          title={editorial.stories_there_are_other_voices_to_discover}
        >
          {editorial.stories_this_story_address_could_not_be_found}
        </PageIntro>
        <div className="container section-sm">
          <ButtonLink to="/stories">
            {editorial.stories_all_graduate_stories}
          </ButtonLink>
        </div>
      </>
    );
  const index = stories.indexOf(story);
  const related = [
    stories[(index + 1) % stories.length],
    stories[(index + 2) % stories.length],
  ];
  return (
    <>
      <header className="story-intro container">
        <Link to="/stories" className="text-link back-link">
          <Arrow />
          {locale.ui.backStories}
        </Link>
        <div className="story-meta">
          <span>{editorial.stories_syrian_graduate}</span>
          <span>
            {story.age}
            {editorial.stories_years_old}
          </span>
          <span>{story.location}</span>
        </div>
        <h1>{story.title}</h1>
        <PrivacyNote />
      </header>
      <article className="reading-column story-narrative">
        <div className="narrative-body">
          {story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <section className="my-message">
          <p className="eyebrow">{editorial.stories_in_the_graduate_s_words}</p>
          <h2>{editorial.stories_my_message}</h2>
          {story.message.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
        <p className="story-endnote">
          {
            editorial.stories_shared_anonymously_english_translation_supplied_by_sgai
          }
        </p>
      </article>
      <section className="section container related-stories">
        <div className="section-top">
          <h2>{editorial.stories_more_voices_more_perspectives}</h2>
          <Link className="text-link" to="/stories">
            {editorial.stories_all_stories}
            <Arrow />
          </Link>
        </div>
        <div className="story-grid two">
          {related.map((s, i) => (
            <StoryCard story={s} key={s.slug} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
