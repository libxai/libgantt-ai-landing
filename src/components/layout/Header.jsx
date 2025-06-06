import React, { useState } from "react";
import { useTranslation } from "../../data/translations";
import { useLanguage } from "../../hooks/useLanguage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, switchLanguage } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.aiFeatures"), href: "#features" },
    { name: t("nav.comparison"), href: "#comparison" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.useCases"), href: "#use-cases" },
    { name: t("nav.code"), href: "#code" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo - DISEÑO CONSISTENTE CON GITHUB AVATAR */}
          <div className="flex items-center space-x-2">
            <svg
              width="46"
              height="46"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              {/* Diamante blanco - MISMAS COORDENADAS QUE EL AVATAR */}
              <path
                d="M 200 60 L 300 200 L 200 340 L 100 200 Z"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="2"
              />
              {/* Texto LX - MISMO COLOR CYAN QUE EL AVATAR */}
              <text
                x="200"
                y="215"
                fontFamily="Arial, sans-serif"
                fontSize="90"
                fontWeight="bold"
                fill="#06b6d4"
                textAnchor="middle"
              >
                LX
              </text>
            </svg>
            <span className="text-xl font-bold text-white">LibGantt-AI</span>
          </div>

          {/* Desktop Navigation - Centrado */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Espacio para balance visual (donde estaría el selector de idiomas) */}
          <div className="w-20 hidden md:block"></div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Language Selector for Mobile - Al final del menú */}
              <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/10 w-fit mt-4">
                <button
                  onClick={() => {
                    switchLanguage("en");
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    currentLanguage === "en"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    switchLanguage("es");
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    currentLanguage === "es"
                      ? "bg-white text-slate-800 shadow-sm"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
