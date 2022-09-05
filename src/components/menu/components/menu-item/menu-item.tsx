import React from "react";
import { Styled } from "./menu-item.styles";
import { MenuItemProps } from "./menu-item.types";

export const MenuItem: React.FC<MenuItemProps> = ({ children, to, disabled }) => {
  const tabIndex = disabled ? { tabIndex: -1 } : {};
  return (
    <Styled.MenuItem>
      <Styled.Link role='menuitem' $disabled={disabled} to={to} {...tabIndex}>
        {children}
      </Styled.Link>
    </Styled.MenuItem>
  );
};
