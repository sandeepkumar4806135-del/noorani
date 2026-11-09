/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { Utensils, Home, ArrowLeft } from "lucide-react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404: Page Not Found — Noorani Family Restaurant | Mumbra"
        description="The requested page was not found. Return to Noorani Family Restaurant in Kausa, Mumbra for authentic Indian, Mughlai, Chinese, and Tandoori dining."
        canonicalPath="/404"
      />

      <section className="py-16 sm:py-24 bg-[#FAF7F2] min-h-[70vh] flex items-center pb-28 md:pb-20">
        <Container size="narrow">
          <div className="text-center max-w-lg mx-auto bg-white border border-[#E8DFC9] rounded-lg p-6 sm:p-12 shadow-sm">
            <img
              src={siteConfig.logoUrl}
              alt="Noorani NR Monogram Logo"
              className="w-16 h-16 rounded-full mx-auto mb-4 border border-[#D49B28] p-1 bg-white"
            />

            <span className="text-xs font-semibold uppercase tracking-widest text-[#C52C24]">
              Error 404
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#15472A] mt-2">
              Page Not Found
            </h1>

            <p className="text-sm text-[#5C6357] mt-3 leading-relaxed">
              We couldn't find the page or dish you're searching for. It may have moved or the address
              might have a typo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                to="/"
                variant="primary"
                size="md"
                icon={<Home className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[44px]"
              >
                Return to Home
              </Button>
              <Button
                to="/menu"
                variant="outline"
                size="md"
                icon={<Utensils className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[44px]"
              >
                Browse Menu
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
