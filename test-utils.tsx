import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GlobalStyles, ThemeProvider } from "@global-styles";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme='light'>
      <GlobalStyles>{children}</GlobalStyles>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
