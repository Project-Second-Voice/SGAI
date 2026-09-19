import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config";
import stories from "../data/stories.json";
const pages: Record<string, [string, string]> = {
  "/": [
    "From education to opportunity",
    "Connecting Syrian graduates with educational, professional, and economic opportunities.",
  ],
  "/challenge": [
    "The Challenge",
    "Understanding the gap between online higher education and recognition for graduates inside Syria.",
  ],
  "/our-work": [
    "Our Work",
    "Five proposed components connect graduate data, career development, employers, postgraduate study, and community leadership.",
  ],
  "/stories": [
    "Graduate Stories",
    `Read ${stories.length} anonymous accounts of perseverance, distance learning, and the path beyond graduation.`,
  ],
  "/about": [
    "About SGAI",
    "An SSAS-led initiative supporting Syrian graduates through an integrated institutional approach.",
  ],
  "/partner-with-us": [
    "Partner With Us",
    "Explore academic, career, technical, institutional, and development collaboration with SGAI.",
  ],
  "/contact": [
    "Contact",
    "Information about contacting the Syrian Graduate Advancement Initiative.",
  ],
  "/privacy": [
    "Privacy & Review Information",
    "How graduate anonymity and the private review prototype are handled.",
  ],
};
export default function Metadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const story = stories.find((s) => pathname === `/stories/${s.slug}`);
    const [title, description] = story
      ? [story.title, story.excerpt]
      : pages[pathname] || [
          "Page not found",
          "The requested SGAI page could not be found.",
        ];
    document.title = `${title} | SGAI`;
    const set = (selector: string, value: string) =>
      document
        .querySelector<HTMLMetaElement>(selector)
        ?.setAttribute("content", value);
    set('meta[name="description"]', description);
    set('meta[property="og:title"]', `${title} | SGAI`);
    set('meta[property="og:description"]', description);
    set(
      'meta[name="robots"]',
      siteConfig.reviewMode ? "noindex, nofollow" : "index, follow",
    );
    document.querySelector('link[rel="canonical"]')?.remove();
    if (siteConfig.canonicalOrigin) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = new URL(pathname, siteConfig.canonicalOrigin).href;
      document.head.append(link);
    }
  }, [pathname]);
  return null;
}
