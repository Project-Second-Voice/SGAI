import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Metadata from "./components/Metadata";
import { RouteLoading } from "./components/Shared";
import "./styles.css";
const ContentPages = lazy(() => import("./pages/ContentPages"));
const Stories = lazy(() => import("./pages/Stories"));

function routeSet() {
  return (
    <>
      <Route index element={<Home />} />
      <Route path="stories" element={<Stories />} />
      <Route path="stories/:slug" element={<Stories />} />
      {["challenge", "our-work", "about", "media", "partner-with-us", "contact", "privacy", "*"].map((path) => (
        <Route key={path} path={path} element={<ContentPages />} />
      ))}
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Metadata />
      <Suspense
        fallback={<RouteLoading />}
      >
        <Routes>
          <Route element={<Layout />}>{routeSet()}</Route>
          <Route path="ar" element={<Layout />}>{routeSet()}</Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
