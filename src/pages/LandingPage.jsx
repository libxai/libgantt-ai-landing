import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LanguageSelector from "../components/common/LanguageSelector";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import ComparisonSection from "../components/sections/ComparisonSection";
import PricingSection from "../components/sections/PricingSection";
import UseCasesSection from "../components/sections/UseCasesSection";
import CodeSection from "../components/sections/CodeSection";
import CTASection from "../components/sections/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LanguageSelector />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection />
        <UseCasesSection />
        <CodeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
