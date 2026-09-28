import storiesEn from "./stories.json";
import storiesAr from "./stories.ar.json";
import { useI18n } from "../locales";

export type Story = (typeof storiesEn)[number];

export function useStories() {
  const { language } = useI18n();
  return (language === "ar" ? storiesAr : storiesEn) as Story[];
}
