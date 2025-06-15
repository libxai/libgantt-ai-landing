import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useTranslation } from "../../data/translations";
import bannerSVG from "../../assets/libgantt_ai_banner.svg";

const HeroSection = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  // Función para hacer scroll suave a la sección de pricing
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Función para dirigir al repositorio de GitHub
  const goToGitHub = () => {
    window.open(
      "https://github.com/libxai/ganttAI",
      "_blank",
      "noopener,noreferrer"
    );
  };

  // Función para hacer scroll a la sección de AI Features
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700"
    >
      {/* SVG Background - Only in right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-80">
        <img
          src={bannerSVG}
          alt="LibGantt-AI Interactive Dashboard Banner"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/60 via-purple-700/40 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="relative z-10 text-left lg:text-left">
            {/* Main heading */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight transition-all duration-1000 ease-out drop-shadow-lg ${
                isHeroVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              {t("hero.title")}
            </h1>

            {/* Subtitle */}
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 font-light transition-all duration-1000 ease-out delay-200 drop-shadow-md ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t("hero.subtitle")}
            </h2>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed transition-all duration-1000 ease-out delay-400 drop-shadow-md ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {t("hero.description")}
            </p>

            {/* Pricing badge - AHORA CON FUNCIONALIDAD */}
            <button
              onClick={scrollToPricing}
              className={`inline-flex items-center px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg mb-10 shadow-xl transition-all duration-300 ease-out cursor-pointer transform hover:scale-105 hover:-translate-y-1 ${
                isHeroVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {t("hero.pricingBadge")}
            </button>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-800 ${
                isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={goToGitHub}
                className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="mr-3 text-xl">🚀</span>
                {t("hero.getStarted")}
              </button>
              <button
                onClick={scrollToFeatures}
                className="flex items-center justify-center border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <span className="mr-3 text-xl">🤖</span>
                {t("hero.seeFeatures")}
              </button>
            </div>
          </div>

          {/* Right Column - Clean SVG Display */}
          <div className="relative z-10 lg:block hidden">
            <div
              className={`relative transition-all duration-1000 ease-out delay-1000 ${
                isHeroVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-12 scale-95"
              }`}
            >
              {/* Clean SVG container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-6">
                <img
                  src={bannerSVG}
                  alt="LibGantt-AI Interactive Dashboard"
                  className="w-full h-auto rounded-xl"
                />

                {/* Floating elements for visual enhancement */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500/60 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500/40 rounded-full blur-md animate-pulse animation-delay-1000"></div>
              </div>

              {/* Additional floating badge */}
              <div className="absolute -top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                AI-Powered ✨
              </div>
            </div>
          </div>

          {/* Mobile SVG - Shown below text on mobile */}
          <div className="lg:hidden relative z-10 mt-8">
            <div
              className={`relative transition-all duration-1000 ease-out delay-1000 ${
                isHeroVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden p-4">
                <img
                  src={bannerSVG}
                  alt="LibGantt-AI Interactive Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
