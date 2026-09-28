import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Languages, Menu, X } from "lucide-react";
import { useI18n } from "../locales";
import { siteConfig } from "../config";
import { Arrow } from "./Shared";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const location = useLocation();
  const first = useRef(true);
  const { language, locale, editorial, path, switchPath } = useI18n();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = locale.direction;
    document.documentElement.style.fontSize =
      import.meta.env.DEV && new URLSearchParams(location.search).get("qa") === "large-text"
        ? "200%"
        : "";
    window.localStorage.setItem("sgai-language", language);
  }, [language, locale.direction, location.search]);

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
    if (!first.current) document.getElementById("main-content")?.focus({ preventScroll: true });
    first.current = false;
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (window.innerWidth >= 1024) return;
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const links = nav.current?.querySelectorAll<HTMLElement>("a, button");
        const last = links?.[links.length - 1];
        if (event.shiftKey && document.activeElement === toggle.current) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          toggle.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">{locale.ui.skip}</a>
      {siteConfig.reviewMode && (
        <div className="review-bar">
          {locale.ui.review}<span>{editorial.layout_for_institutional_content_review}</span>
        </div>
      )}
      <header className="site-header">
        <div className="container header-inner">
          <Link to={path("/")} className="brand" aria-label={locale.ui.homeLabel} onClick={() => setOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width="40" height="40" />
            <span>
              {editorial.layout_sgai}
              <small>{editorial.layout_syrian_graduate}<br />{editorial.layout_advancement_initiative}</small>
            </span>
          </Link>
          <button ref={toggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? locale.ui.closeMenu : locale.ui.menu}>
            {open ? <X /> : <Menu />}<span>{open ? locale.ui.closeMenu : locale.ui.menu}</span>
          </button>
          <nav ref={nav} id="primary-navigation" aria-label={locale.ui.primaryNavigation} className={open ? "primary-nav open" : "primary-nav"}>
            {locale.navigation.filter((item) => item.path !== "/").map((item) => (
              <NavLink key={item.path} to={path(item.path)}>{item.label}</NavLink>
            ))}
            <NavLink to={path("/partner-with-us")} className="nav-cta">{locale.ui.partner}<Arrow /></NavLink>
            <div className="language-switcher" aria-label={locale.ui.language}>
              <Languages size={16} aria-hidden="true" />
              <Link to={switchPath("en")} lang="en" aria-current={language === "en" ? "true" : undefined}>English</Link>
              <span aria-hidden="true">|</span>
              <Link to={switchPath("ar")} lang="ar" dir="rtl" aria-current={language === "ar" ? "true" : undefined}>العربية</Link>
            </div>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="footer-brand" to={path("/")}>{editorial.layout_sgai}<span>{editorial.layout_syrian_graduate}<br />{editorial.layout_advancement_initiative}</span></Link>
            <p>{editorial.layout_from_education_to_opportunity}<br />{editorial.layout_a_pathway_beyond_graduation}</p>
          </div>
          <div>
            <h2>{editorial.layout_explore}</h2>
            {locale.navigation.slice(1, 6).map((item) => <Link key={item.path} to={path(item.path)}>{item.label}</Link>)}
          </div>
          <div>
            <h2>{editorial.layout_connect}</h2>
            <Link to={path("/partner-with-us")}>{editorial.layout_partner_with_us}</Link>
            <Link to={path("/contact")}>{editorial.layout_contact}</Link>
            <Link to={path("/privacy")}>{editorial.layout_privacy_review_information}</Link>
            <div className="language-switcher footer-languages" aria-label={locale.ui.language}>
              <Link to={switchPath("en")} lang="en">English</Link><span>|</span><Link to={switchPath("ar")} lang="ar" dir="rtl">العربية</Link>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>{editorial.layout_syrian_graduate_advancement_initiative}</span>
          <span>{editorial.layout_digital_development_supported_by}<strong>{editorial.layout_project_second_voice}</strong></span>
        </div>
      </footer>
    </>
  );
}
