import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { ThemeProps } from "./theme.types";
import { darkTheme, lightTheme } from "./themes";

export const Theme: React.FC<ThemeProps> = ({
  children,
  lightTheme: extraLightTheme,
  darkTheme: extraDarkTheme,
  theme: currentTheme,
}) => {
  const dark: DefaultTheme & typeof darkTheme = extraDarkTheme
    ? { ...extraDarkTheme, ...darkTheme }
    : darkTheme;
  const light: DefaultTheme & typeof lightTheme = extraLightTheme
    ? { ...extraLightTheme, ...lightTheme }
    : lightTheme;

  const theme = currentTheme === "light" ? light : dark;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
