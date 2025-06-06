import React from "react";
import { LanguageProvider } from "./hooks/useLanguage";
import LandingPage from "./pages/LandingPage";
import "./index.css";

function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}

export default App;
