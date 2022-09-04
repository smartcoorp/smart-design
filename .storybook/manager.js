// in .storybook/manager.js
import addons from "@storybook/addons";
import smartCookieTheme from "./smartcookieTheme";

addons.setConfig({
  enableShortcuts: false,
  theme: smartCookieTheme,
});
