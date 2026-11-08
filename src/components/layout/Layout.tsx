/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { ScrollToTop } from "../ui/ScrollToTop";
import { useMotionLevel, pageTransitionVariant } from "../../config/motion";

export const Layout: React.FC = () => {
  const location = useLocation();
  const motionLevel = useMotionLevel();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E211D]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        {motionLevel === "off" ? (
          <Outlet />
        ) : (
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            variants={pageTransitionVariant}
          >
            <Outlet />
          </motion.div>
        )}
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Layout;
