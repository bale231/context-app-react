// languageContext.js
import React, { createContext, useState } from "react";

const languages = {
  it: { currentTime: "Ora corrente" },
  en: { currentTime: "Current time" },
  // Aggiungi altre lingue se necessario
};

const LanguageContext = createContext(languages.en); // Imposta l'italiano come predefinito

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages.it);

  const changeLanguage = (lang) => {
    setCurrentLanguage(languages[lang]);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
