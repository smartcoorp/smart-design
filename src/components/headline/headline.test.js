import React from "react";

import { Headline } from "./headline";

import { render } from "@test-utils";
import { screen } from "@testing-library/react";

describe(`Headline`, () => {
  test("renders Headline", () => {
    render(<Headline>This is a body component</Headline>);
    expect(screen.getByText("This is a body component")).toBeInTheDocument();
  });
});
