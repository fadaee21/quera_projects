import React, { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext()

const translations = [
  {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language",
    },
  },
  {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان",
    },
  },
];


function LanguageProvider({ children }) {

  const [lang, setLang] = useState(translations[0].words)

  const handleLangFar = () => { setLang(translations[0].words) }
  const handleLangEng = () => { setLang(translations[1].words) }

  return (
    <LanguageContext.Provider value={{
      lang, handleLangFar, handleLangEng
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
export { LanguageProvider };
