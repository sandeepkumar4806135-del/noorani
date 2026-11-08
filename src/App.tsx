/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";

// Code-split non-home pages for optimal initial mobile loading speed
const MenuPage = lazy(() => import("./pages/MenuPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ReservationsPage = lazy(() => import("./pages/ReservationsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#FAF7F2]">
    <div className="w-10 h-10 rounded-full border-2 border-[#D49B28] border-t-[#15472A] animate-spin mb-3" />
    <span className="font-serif text-xs font-semibold text-[#15472A] tracking-wider uppercase">
      Noorani Family Restaurant
    </span>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="menu"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <MenuPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="gallery"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route
            path="reservations"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <ReservationsPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoadingFallback />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
