import React from "react";
import ReactDom from "react-dom";

import { screen, fireEvent } from "@testing-library/react";
import { render } from "@test-utils";

import { Modal } from "./modal";

const mockModalDescription = "modal description";

const renderModal = ({ show = false, ...rest } = {}) => {
  render(
    <Modal show={show} rootId='portal' modalDescription={mockModalDescription} {...rest}>
      Modal content
    </Modal>
  );
};

describe(`Modal`, () => {
  beforeAll(() => {
    ReactDom.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDom.createPortal.mockClear();
    jest.clearAllMocks();
  });
  test("renders Modal", () => {
    render(<Modal />);
  });

  it("should not render modal when show is false", () => {
    renderModal();

    expect(screen.queryByTestId("Modal content")).not.toBeInTheDocument();
  });

  it("should render modal content", () => {
    renderModal({ show: true });

    expect(screen.getByText("Modal content")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-label", mockModalDescription);
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-hidden", "false");
  });

  it("should render closeIcon and trigger onClose ", () => {
    const mockOnClose = jest.fn();

    renderModal({ show: true, closeIcon: true, onClose: mockOnClose });

    expect(screen.getByText("Modal content")).toBeInTheDocument();

    expect(screen.getByTestId("close-modal-icon")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("close-modal-icon"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should toggle onClose when background is clicked", () => {
    const mockOnClose = jest.fn();

    renderModal({ show: true, onClose: mockOnClose });

    fireEvent.click(screen.getByTestId("modal-background"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
