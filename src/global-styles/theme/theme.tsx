import React from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProps } from "./theme.types";
import { darkTheme, lightTheme } from "./themes";

export const Theme: React.FC<ThemeProps> = ({
  children,
  lightTheme: extraLightTheme,
  darkTheme: extraDarkTheme,
  theme: currentTheme,
}) => {
  const dark = extraDarkTheme ? { ...extraDarkTheme, ...darkTheme } : darkTheme;
  const light = extraLightTheme ? { ...extraLightTheme, ...lightTheme } : lightTheme;

  const theme = currentTheme === "light" ? light : dark;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
