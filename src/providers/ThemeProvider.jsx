import React, { useState } from "react";
import { createContext } from "react";
import { THEME_TYPE } from "../constants";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_TYPE.LIGHT)

  const handleThemeChange = () => {
    setTheme(theme === THEME_TYPE.DARK
      ? THEME_TYPE.LIGHT
      : THEME_TYPE.DARK
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }} >
      {children}
    </ThemeContext.Provider >
  );
};
export default ThemeProvider;
