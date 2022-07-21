import React from "react";
import { Styled } from "./component.styles";
import { ComponentProps } from "./component.types";

const Component: React.FC<ComponentProps> = () => {
  return <Styled.Container>Container</Styled.Container>;
};

Component.displayName = "Component";

export default Component;
