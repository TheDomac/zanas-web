import React, { useState, createContext } from "react";

import { DEFAULT_LANGUAGE } from "consts/language";
import { keys } from "consts/localStorage";

const language = localStorage.getItem(keys.LANGUAGE);
if (!language) {
  localStorage.setItem(keys.LANGUAGE, DEFAULT_LANGUAGE);
}

export const LanguageContext = createContext({
  selectedLanguage: "",
  handleLanguageChange: (k: any) => k,
});

const LanguageProvider = ({ children }: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    language || DEFAULT_LANGUAGE
  );

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    localStorage.setItem(keys.LANGUAGE, newLanguage);
  };

  const value: any = { selectedLanguage, handleLanguageChange };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
