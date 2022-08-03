import React from "react";

import { Caption } from "./caption";

import { screen } from "@testing-library/react";
import { render } from "@test-utils";

describe(`Caption`, () => {
  test("renders Caption", () => {
    render(<Caption>This is a Caption</Caption>);
    expect(screen.getByText("This is a Caption")).toBeInTheDocument();
  });
});
