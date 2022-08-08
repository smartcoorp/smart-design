import React from "react";

import { screen, fireEvent, act, waitFor } from "@testing-library/react";
import { render } from "@test-utils";

import { Menu, MenuItem, MenuDivider } from "./index";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const renderComponent = () => {
  const history = createMemoryHistory();

  act(() =>
    render(
      <Router navigator={history} location={history.location}>
        <Menu triggerText='trigger menu'>
          <MenuItem to='test'>Categoria 1</MenuItem>
          <MenuItem to='test'>Teachers</MenuItem>
          <MenuDivider></MenuDivider>
          <MenuItem to='test' disabled>
            Disabled link
          </MenuItem>
          <MenuItem to='test'>Online teaching</MenuItem>
        </Menu>
      </Router>
    )
  );
};
describe(`Menu`, () => {
  it("renders Menu as expected", () => {
    renderComponent();
    expect(screen.getByText("trigger menu"));
  });
  it("should open menu onClick", async () => {
    renderComponent();

    fireEvent.click(screen.getByRole("button", { name: "trigger menu" }));

    expect(screen.getByText("Teachers")).toBeInTheDocument();
    expect(screen.getByText("Categoria 1")).toBeInTheDocument();
    expect(screen.getByText("Online teaching")).toBeInTheDocument();
    expect(screen.getByText("Disabled link")).toBeInTheDocument();

    expect(screen.getByText("Disabled link")).toHaveAttribute("tabindex", "-1");
  });

  it("should close on Esc keypress", async () => {
    renderComponent();

    fireEvent.click(screen.getByRole("button", { name: "trigger menu" }));
    expect(screen.getByText("Teachers")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("button", { name: "trigger menu" }), {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    await waitFor(() => expect(screen.queryByText("Teachers")).not.toBeInTheDocument());
  });
});
