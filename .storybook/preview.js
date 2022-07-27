import React from "react";
import { MemoryRouter } from "react-router-dom";
import { GlobalStyles } from "./../src/global-styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <GlobalStyles>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </GlobalStyles>
  ),
];
