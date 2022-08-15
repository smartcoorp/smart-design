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
  width: ${(props) => (props.vertical ? "50%" : "100%")};
  height: ${(props) => (props.vertical ? "50vh" : "100%")};
  bottom: 0;
  padding: 32px;
  background: ${(props) => props.theme.backgroundScreen};
`;

const Container = styled.div`
  display: flex;
`;
const withTheme = (StoryFn, context) => {
  const { theme } = context.globals;
  switch (theme) {
    case "horizontal-side-by-side": {
      return (
        <MemoryRouter initialEntries={["/"]}>
          <Theme theme={"light"}>
            <GlobalStyles />
            <ThemeBlock left>
              <StoryFn />
            </ThemeBlock>
          </Theme>
          <Theme theme={"dark"}>
            <GlobalStyles />
            <ThemeBlock>
              <StoryFn />
            </ThemeBlock>
          </Theme>
        </MemoryRouter>
      );
    }
    case "vertical-side-by-side": {
      return (
        <MemoryRouter initialEntries={["/"]}>
          <Container>
            <Theme theme={"light"}>
              <GlobalStyles />
              <ThemeBlock vertical>
                <StoryFn />
              </ThemeBlock>
            </Theme>
            <Theme theme={"dark"}>
              <GlobalStyles />
              <ThemeBlock vertical>
                <StoryFn />
              </ThemeBlock>
            </Theme>
          </Container>
        </MemoryRouter>
      );
    }
    default: {
      return (
        <MemoryRouter initialEntries={["/"]}>
          <Theme theme={theme}>
            <GlobalStyles />
            <ThemeBlock fill>
              <StoryFn />
            </ThemeBlock>
          </Theme>
        </MemoryRouter>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
        { value: "vertical-side-by-side", icon: "sidebar", title: "vertical side by side" },
        { value: "horizontal-side-by-side", icon: "sidebar", title: "horizontal side by side" },
      ],
      showName: true,
    },
  },
};

export const decorators = [withTheme];
