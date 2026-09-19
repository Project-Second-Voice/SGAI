import { editorial } from "../locales";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { locale } from "../locales";
import { siteConfig } from "../config";
import { Arrow } from "./Shared";
export default function Layout() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const location = useLocation();
  const first = useRef(true);
  useEffect(() => {
    document.documentElement.lang = "en";
    document.documentElement.dir =
      import.meta.env.DEV &&
      new URLSearchParams(location.search).get("qa") === "rtl"
        ? "rtl"
        : locale.direction;
    document.documentElement.style.fontSize =
      import.meta.env.DEV &&
      new URLSearchParams(location.search).get("qa") === "large-text"
        ? "200%"
        : "";
  }, [location.search]);
  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    } else {
      window.scrollTo(0, 0);
    }
    if (!first.current) {
      document.getElementById("main-content")?.focus({ preventScroll: true });
    }
    first.current = false;
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (window.innerWidth >= 1024) return;
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const links = nav.current?.querySelectorAll<HTMLAnchorElement>("a");
        const last = links?.[links.length - 1];
        if (e.shiftKey && document.activeElement === toggle.current) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggle.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <a href="#main-content" className="skip-link">
        {locale.ui.skip}
      </a>
      {siteConfig.reviewMode && (
        <div className="review-bar">
          {locale.ui.review}
          <span>{editorial.layout_for_institutional_content_review}</span>
        </div>
      )}
      <header className="site-header">
        <div className="container header-inner">
          <Link
            to="/"
            className="brand"
            aria-label="SGAI home"
            onClick={() => setOpen(false)}
          >
            <img
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt=""
              width="40"
              height="40"
            />
            <span>
              {editorial.layout_sgai}
              <small>
                {editorial.layout_syrian_graduate}
                <br />
                {editorial.layout_advancement_initiative}
              </small>
            </span>
          </Link>
          <button
            ref={toggle}
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="primary-navigation"
            aria-label={open ? locale.ui.closeMenu : locale.ui.menu}
          >
            {open ? <X /> : <Menu />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <nav
            ref={nav}
            id="primary-navigation"
            aria-label="Primary navigation"
            className={open ? "primary-nav open" : "primary-nav"}
          >
            {locale.navigation
              .filter((n) => n.path !== "/")
              .map((n) => (
                <NavLink
                  key={n.path}
                  to={n.path}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </NavLink>
              ))}
            <NavLink
              to="/partner-with-us"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              {locale.ui.partner}
              <Arrow />
            </NavLink>
          </nav>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link className="footer-brand" to="/">
              {editorial.layout_sgai}
              <span>
                {editorial.layout_syrian_graduate}
                <br />
                {editorial.layout_advancement_initiative}
              </span>
            </Link>
            <p>
              {editorial.layout_from_education_to_opportunity}
              <br />
              {editorial.layout_a_pathway_beyond_graduation}
            </p>
          </div>
          <div>
            <h2>{editorial.layout_explore}</h2>
            {locale.navigation.slice(1, 5).map((n) => (
              <Link key={n.path} to={n.path}>
                {n.label}
              </Link>
            ))}
          </div>
          <div>
            <h2>{editorial.layout_connect}</h2>
            <Link to="/partner-with-us">
              {editorial.layout_partner_with_us}
            </Link>
            <Link to="/contact">{editorial.layout_contact}</Link>
            <Link to="/privacy">
              {editorial.layout_privacy_review_information}
            </Link>
            <span className="language-note">{editorial.layout_english}</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>{editorial.layout_syrian_graduate_advancement_initiative}</span>
          <span>
            {editorial.layout_digital_development_supported_by}
            {siteConfig.projectSecondVoiceUrl ? (
              <a href={siteConfig.projectSecondVoiceUrl}>
                {editorial.layout_project_second_voice}
              </a>
            ) : (
              <strong>{editorial.layout_project_second_voice}</strong>
            )}
          </span>
        </div>
      </footer>
    </>
  );
}
