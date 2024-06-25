import React, { createContext, useState, useEffect, FC } from "react";
import { Language } from "./types";

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: Language.ENGLISH,
  setLanguage: () => {},
});

export const LanguageContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? JSON.parse(storedLanguage) : Language.ENGLISH;
  });

  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};