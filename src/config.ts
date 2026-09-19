/** Public configuration only. Never place private contact details or secrets here. */
export const siteConfig = {
  name: "Syrian Graduate Advancement Initiative",
  shortName: "SGAI",
  reviewMode: true,
  // SGAI approval required before filling any of the following placeholders.
  canonicalOrigin: "https://sgai.jjw92127.chatgpt.site" as string | null,
  publicEmail: null as string | null,
  contactEndpoint: null as string | null,
  officialLogo: null as string | null,
  projectSecondVoiceUrl: null as string | null,
  socialLinks: [] as { label: string; url: string }[],
  approvedPartners: [] as { name: string; url: string; logo: string }[],
  mediaLinks: [] as { title: string; url: string }[],
  locale: "en" as "en" | "ar",
  enabledLocales: ["en"],
};
