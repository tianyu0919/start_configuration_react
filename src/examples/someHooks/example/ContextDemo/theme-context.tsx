import React from "react";

/*
 * @Author: 归宿
 * @Date: 2022-09-22 16:27:18
 * @Description: 
 */
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});