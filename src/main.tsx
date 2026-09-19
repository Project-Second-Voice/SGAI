import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Metadata from "./components/Metadata";
import "./styles.css";
const ContentPages = lazy(() => import("./pages/ContentPages"));
const Stories = lazy(() => import("./pages/Stories"));
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Metadata />
      <Suspense
        fallback={
          <div className="route-loading" role="status">
            Loading SGAI…
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="stories/:slug" element={<Stories />} />
            {[
              "challenge",
              "our-work",
              "about",
              "partner-with-us",
              "contact",
              "privacy",
              "*",
            ].map((path) => (
              <Route key={path} path={path} element={<ContentPages />} />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
