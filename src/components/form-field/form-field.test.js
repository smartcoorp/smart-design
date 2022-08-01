import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { FormField } from "./form-field";

const renderComponent = ({ value, ...args }) => {
  render(<FormField value={value} {...args} />);
};

describe(`FormField`, () => {
  it("renders FormField expected content", () => {
    renderComponent({ label: "Expected content", id: "expectedContent" });

    expect(screen.getByLabelText("Expected content")).toBeInTheDocument();
  });

  it("should call onChange when typing", () => {
    const onChangeMock = jest.fn();

    renderComponent({ label: "Label", id: "callOnChange", onChange: onChangeMock });

    const input = screen.getByLabelText("Label");

    fireEvent.change(input, { target: { value: "test" } });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
