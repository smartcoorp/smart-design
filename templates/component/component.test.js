import React from "react";

import { screen, fireEvent } from "@testing-library/react";
import { render } from "@test-utils";

import { Component } from "./component";

describe(`Component`, () => {
  test("renders Component", () => {
    render(<Component />);
  });
});
