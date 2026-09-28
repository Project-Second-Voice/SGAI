import { useLocation } from "react-router-dom";
import editorialEn from "./editorial.en.json";
import editorialAr from "./editorial.ar.json";
import { en } from "./en";
import { ar } from "./ar";

export type Language = "en" | "ar";

export function languageFromPath(pathname: string): Language {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function stripLanguage(pathname: string) {
  const stripped = pathname.replace(/^\/ar(?=\/|$)/, "");
  return stripped || "/";
}

export function localizePath(path: string, language: Language) {
  const clean = stripLanguage(path);
  return language === "ar" ? `/ar${clean === "/" ? "" : clean}` : clean;
}

export function formatIndex(index: number, language: Language) {
  return new Intl.NumberFormat(language === "ar" ? "ar-SY" : "en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  }).format(index + 1);
}

export function useI18n() {
  const location = useLocation();
  const language = languageFromPath(location.pathname);
  return {
    language,
    isRtl: language === "ar",
    locale: language === "ar" ? ar : en,
    editorial: language === "ar" ? editorialAr : editorialEn,
    path: (value: string) => localizePath(value, language),
    switchPath: (target: Language) => localizePath(location.pathname, target),
  };
}

export { editorialEn, editorialAr, en, ar };
