import React from "react";
import { render } from "@testing-library/react";

import { Loader } from "./loader";

describe(`Loader`, () => {
  test("renders Loader", () => {
    render(<Loader />);
  });
});
