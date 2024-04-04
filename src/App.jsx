import React, { createContext, useState } from "react";
import { Clock } from "./Clock";
export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState("Ora Corrente");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Clock />
    </LanguageContext.Provider>
  );
}

export default App;
