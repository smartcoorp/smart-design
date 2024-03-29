import React from "react";
import { Styled } from "./component.styles";
import { ComponentProps } from "./component.types";

export const Component: React.FC<ComponentProps> = ({ children, className }) => {
  return <Styled.Container className={className}>{children}</Styled.Container>;
};

Component.displayName = "Component";
