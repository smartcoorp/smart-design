import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Button } from "./button";

import { screen, fireEvent } from "@testing-library/react";
import { render } from "@test-utils";

const renderComponent = ({ children = "button", ...props } = {}) => {
  const history = createMemoryHistory();
  render(
    <Router navigator={history} location={history.location}>
      <Button {...props}>{children}</Button>
    </Router>
  );

  return { history };
};

describe(`Button`, () => {
  afterEach(() => jest.clearAllMocks());
  it("should render expectect content", () => {
    renderComponent();
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });

  it("should render <Link> with relative path", () => {
    const { history } = renderComponent({ to: "route1/route2" });

    const button = screen.getByRole("link", { name: /button/i });

    expect(button).toHaveAttribute("href", "/route1/route2");

    fireEvent.click(button);

    expect(history.location.pathname).toBe("/route1/route2");
  });

  it("should render <a> external link", () => {
    const mockTarget = "_blank";
    renderComponent({ href: "https://google.es", target: mockTarget });

    const button = screen.getByRole("link", { name: /button/i });

    expect(button).toHaveAttribute("href", "https://google.es");
    expect(button).toHaveAttribute("target", mockTarget);
  });

  it("should render <button> and call callback function on Button click", () => {
    const mockCallback = jest.fn();
    renderComponent({ onClick: mockCallback });

    fireEvent.click(screen.getByRole("button", { name: /button/i }));

    expect(mockCallback).toHaveBeenCalled();
  });

  it("should not render button children when loading", () => {
    renderComponent({ loading: true });

    expect(screen.queryByText(/button/i)).not.toBeVisible();
    expect(screen.getByTestId("dot-loading")).toBeInTheDocument();
  });
});
