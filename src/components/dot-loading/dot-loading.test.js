import React from "react";

import { DotLoading } from "./dot-loading";

import { render } from "@test-utils";

describe(`DotLoading`, () => {
  test("renders DotLoading", () => {
    render(<DotLoading />);
  });
});
