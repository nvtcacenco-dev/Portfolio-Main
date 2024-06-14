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
    const storedLanguage = localStorage.getItem("language");
    if(!storedLanguage){
      localStorage.setItem("language", JSON.stringify(Language.ENGLISH));
  }
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