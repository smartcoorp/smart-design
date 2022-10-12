import React from "react";

import { screen, fireEvent } from "@testing-library/react";
import { render } from "@test-utils";

import { Checkbox } from "./checkbox";

const renderCheckbox = ({ checked = false, ...rest } = {}) => {
  render(<Checkbox checked={checked} {...rest} />);
};

afterAll(jest.clearAllMocks);

describe(`Checkbox`, () => {
  it("should render expected content", () => {
    renderCheckbox();

    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
  });

  it("should render label", () => {
    const label = "label";
    renderCheckbox({ label });

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("should render check when checked", () => {
    renderCheckbox({ checked: true });
    expect(screen.getByTestId("checkbox-checked")).toBeInTheDocument();
  });

  it("should render mixed when semichecked", () => {
    renderCheckbox({ checked: "mixed" });
    expect(screen.getByTestId("checkbox-mixed")).toBeInTheDocument();
  });

  it("should call onChange when clicked", () => {
    const mockOnChange = jest.fn();
    renderCheckbox({ onChange: mockOnChange });

    fireEvent.click(screen.getByRole("checkbox"));

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it.each([
    { key: "Enter", keyCode: 13 },
    { key: "SpaceBar", keyCode: 32 },
  ])("should call on Change on $key keydown", async ({ key, keyCode }) => {
    const mockOnChange = jest.fn();
    renderCheckbox({ onChange: mockOnChange });

    fireEvent.keyDown(screen.getByTestId("checkbox"), {
      key: key,
      code: key,
      keyCode: keyCode,
      charCode: keyCode,
    });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
