import React from "react";

import { Hero } from "./hero";

import { render } from "@test-utils";
import { screen } from "@testing-library/react";

describe(`Hero`, () => {
  it("renders Hero", () => {
    render(<Hero>This is a hero</Hero>);
    expect(screen.getByText("This is a hero")).toBeInTheDocument();
  });
});
