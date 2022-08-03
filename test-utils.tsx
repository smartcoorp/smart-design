import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { GlobalStyles, Theme } from "@global-styles";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Theme theme='light'>
      <GlobalStyles>{children}</GlobalStyles>
    </Theme>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
