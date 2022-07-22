import React from "react";
import styled from "styled-components";
export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  padding: 30px;
  background-color: red;
`;
export const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>;
};
