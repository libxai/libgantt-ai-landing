import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

const LanguageSelector = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  return (
    <div
      className="fixed top-0 right-6 z-50 hidden md:block"
      style={{ top: "24px" }}
    >
      <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 shadow-lg border border-white/10">
        <button
          onClick={() => switchLanguage("en")}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
            currentLanguage === "en"
              ? "bg-white text-slate-800 shadow-sm"
              : "text-white/90 hover:text-white"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => switchLanguage("es")}
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
  );
};

export default LanguageSelector;
