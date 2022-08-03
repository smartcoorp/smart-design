import React from "react";
import { MemoryRouter } from "react-router-dom";
import { GlobalStyles, Theme } from "../src/global-styles";
import styled from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};
const ThemeBlock = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  overflow: auto;
  padding: 32px;
  background: ${(props) => props.theme.backgroundScreen};
`;

const withTheme = (StoryFn, context) => {
  const { theme } = context.globals;
  switch (theme) {
    case "side-by-side": {
      return (
        <>
          <Theme theme={"light"}>
            <GlobalStyles />
            <ThemeBlock left>
              <MemoryRouter>
                <StoryFn />
              </MemoryRouter>
            </ThemeBlock>
          </Theme>
          <Theme theme={"dark"}>
            <GlobalStyles />
            <ThemeBlock>
              <MemoryRouter>
                <StoryFn />
              </MemoryRouter>
            </ThemeBlock>
          </Theme>
        </>
      );
    }
    default: {
      return (
        <Theme theme={theme}>
          <GlobalStyles />
          <ThemeBlock fill>
            <MemoryRouter>
              <StoryFn />
            </MemoryRouter>
          </ThemeBlock>
        </Theme>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "side-by-side",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "side-by-side", icon: "sidebar", title: "side by side" },
      ],
      showName: true,
    },
  },
};

export const decorators = [withTheme];
