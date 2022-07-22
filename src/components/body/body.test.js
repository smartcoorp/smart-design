import React from "react";
import { render, screen } from "@testing-library/react";
import { Body } from "./body";

describe(`Body`, () => {
  it("renders Body", () => {
    render(<Body>This is a body component</Body>);
    expect(screen.getByText("This is a body component")).toBeInTheDocument();
  });
});
