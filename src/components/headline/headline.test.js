import React from "react";
import { render, screen } from "@testing-library/react";

import { Headline } from "./headline";

describe(`Headline`, () => {
  test("renders Headline", () => {
    render(<Headline>This is a body component</Headline>);
    expect(screen.getByText("This is a body component")).toBeInTheDocument();
  });
});
