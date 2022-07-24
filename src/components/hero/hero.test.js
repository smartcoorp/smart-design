import React from "react";
import { render, screen } from "@testing-library/react";

import { Hero } from "./hero";

describe(`Hero`, () => {
  it("renders Hero", () => {
    render(<Hero>This is a hero</Hero>);
    expect(screen.getByText("This is a hero")).toBeInTheDocument();
  });
});
