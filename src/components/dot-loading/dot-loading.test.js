import React from "react";
import { render } from "@testing-library/react";

import { DotLoading } from "./dot-loading";

describe(`DotLoading`, () => {
  test("renders DotLoading", () => {
    render(<DotLoading />);
  });
});
