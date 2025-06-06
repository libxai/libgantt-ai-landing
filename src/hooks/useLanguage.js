import React, { createContext, useContext, useState } from "react";

// Contexto de idioma
const LanguageContext = createContext();

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Proveedor de idioma
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  const value = {
    currentLanguage,
    switchLanguage,
    isEnglish: currentLanguage === "en",
    isSpanish: currentLanguage === "es",
  };

  return React.createElement(LanguageContext.Provider, { value }, children);
};
