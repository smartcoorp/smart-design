import React from "react";
import { screen } from "@testing-library/react";
import { render } from "@test-utils";
import { Body } from "./body";

describe(`Body`, () => {
  it("renders Body", () => {
    render(<Body>This is a body component</Body>);
    expect(screen.getByText("This is a body component")).toBeInTheDocument();
  });
});
