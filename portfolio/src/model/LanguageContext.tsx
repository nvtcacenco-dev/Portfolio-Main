import React, { createContext, useState, useEffect } from "react";
import { FC } from "react";
import { Language } from "./types";



export interface LanguageContextType {
  language: Language ;
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
    
    
      localStorage.setItem("language", JSON.stringify(Language.ENGLISH));
      const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? JSON.parse(storedLanguage) : null;
  });
 
  /* const [language, setLanguage] = useState<Language>(Language.ENGLISH) */
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]); 

  return (
    <LanguageContext.Provider value={{ language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};