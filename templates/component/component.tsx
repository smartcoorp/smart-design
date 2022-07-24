import React from "react";
import { Styled } from "./component.styles";
import { ComponentProps } from "./component.types";

export const Component: React.FC<ComponentProps> = () => {
  return <Styled.Container>Container</Styled.Container>;
};

Component.displayName = "Component";
