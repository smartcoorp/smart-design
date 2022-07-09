import React from "react";
import { render } from "@testing-library/react";

import Component from "./component";

describe(`Component`, () => {
  test("renders Component", () => {
    render(<Component />);
  });
});
