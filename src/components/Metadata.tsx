import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config";
import storiesEn from "../data/stories.json";
import storiesAr from "../data/stories.ar.json";
import { languageFromPath, localizePath, stripLanguage } from "../locales";

const pages = {
  en: {
    "/": ["From education to opportunity", "Connecting Syrian graduates with educational, professional, and economic opportunities."],
    "/challenge": ["The Challenge", "Recognition barriers reported by Syrian graduates of online higher education."],
    "/our-work": ["Our Work", "Five connected programs supporting graduate information, careers, employment, further study, and leadership."],
    "/stories": ["Graduate Stories", `Read ${storiesEn.length} anonymous accounts of perseverance, distance learning, and life after graduation.`],
    "/about": ["About SGAI", "An educational and humanitarian initiative supporting Syrian students and graduates."],
    "/media": ["Media & News", "Verified SGAI announcements, reports, public events, and media coverage when available."],
    "/partner-with-us": ["Partner With Us", "Explore responsible academic, career, technical, and institutional collaboration with SGAI."],
    "/contact": ["Contact", "Information about contacting the Syrian Graduate Advancement Initiative."],
    "/privacy": ["Privacy & Review Information", "How graduate anonymity and the review prototype are handled."],
  },
  ar: {
    "/": ["من التعليم إلى الفرصة", "نصل الخريجين السوريين بالفرص التعليمية والمهنية والاقتصادية."],
    "/challenge": ["التحدي", "تحديات الاعتراف التي يبلّغ عنها خريجو التعليم العالي الإلكتروني السوريون."],
    "/our-work": ["عملنا", "خمسة برامج مترابطة تدعم معلومات الخريجين ومساراتهم المهنية والتعليمية والقيادية."],
    "/stories": ["قصص الخريجين", `${storiesAr.length} قصة مجهّلة الهوية عن المثابرة والتعليم عن بُعد وما بعد التخرّج.`],
    "/about": ["عن SGAI", "مبادرة تعليمية وإنسانية تدعم الطلاب والخريجين السوريين."],
    "/media": ["الإعلام والأخبار", "إعلانات وتقارير وفعاليات وتغطية إعلامية موثقة عند توفرها."],
    "/partner-with-us": ["شاركنا", "استكشف فرص التعاون الأكاديمي والمهني والتقني والمؤسسي المسؤول مع SGAI."],
    "/contact": ["تواصل معنا", "معلومات التواصل مع مبادرة النهوض بالخريجين السوريين."],
    "/privacy": ["الخصوصية ومعلومات المراجعة", "كيفية حماية هوية الخريجين والتعامل مع نموذج المراجعة."],
  },
} as const;

export default function Metadata() {
  const location = useLocation();
  const language = languageFromPath(location.pathname);
  const pathname = stripLanguage(location.pathname).replace(/\/+$/, "") || "/";
  useEffect(() => {
    const stories = language === "ar" ? storiesAr : storiesEn;
    const story = stories.find((item) => pathname === `/stories/${item.slug}`);
    const fallback = language === "ar" ? ["الصفحة غير موجودة", "تعذّر العثور على صفحة SGAI المطلوبة."] : ["Page not found", "The requested SGAI page could not be found."];
    const [title, description] = story ? [story.title, story.excerpt] : (pages[language][pathname as keyof (typeof pages)[typeof language]] || fallback);
    document.title = `${title} | SGAI`;
    const set = (selector: string, value: string) => document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
    set('meta[name="description"]', description);
    set('meta[property="og:title"]', `${title} | SGAI`);
    set('meta[property="og:description"]', description);
    set('meta[property="og:locale"]', language === "ar" ? "ar_SY" : "en_US");
    set('meta[name="robots"]', siteConfig.reviewMode ? "noindex, nofollow" : "index, follow");
    document.querySelectorAll('link[rel="canonical"], link[rel="alternate"]').forEach((node) => node.remove());
    const origin = import.meta.env.VITE_CANONICAL_ORIGIN || siteConfig.canonicalOrigin;
    if (origin) {
      const base = origin.endsWith("/") ? origin : `${origin}/`;
      const href = (path: string) => new URL(path.replace(/^\//, ""), base).href;
      const canonical = document.createElement("link"); canonical.rel = "canonical"; canonical.href = href(localizePath(pathname, language)); document.head.append(canonical);
      (["en", "ar"] as const).forEach((lang) => { const alternate = document.createElement("link"); alternate.rel = "alternate"; alternate.hreflang = lang; alternate.href = href(localizePath(pathname, lang)); document.head.append(alternate); });
    }
  }, [language, pathname]);
  return null;
}
