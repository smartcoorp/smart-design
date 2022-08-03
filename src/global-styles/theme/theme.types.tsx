export type ThemeProps = {
  /** Theme Provider content */
  children?: React.ReactNode;
  /** LightTheme from specific project */
  lightTheme?: any;
  /** DarkTheme from spicific project */
  darkTheme?: any;
  /** Theme */
  theme: "light" | "dark";
};
