import React from "react";
import { Styled } from "./loader.styles";
import { LoaderProps } from "./loader.types";

export const Loader: React.FC<LoaderProps> = ({ size = "medium" }) => {
  return (
    <Styled.Loader $size={size} data-testid='loader'>
      <Styled.LoaderDot $size={size} />
      <Styled.LoaderDot $size={size} />
      <Styled.LoaderDot $size={size} />
      <Styled.LoaderDot $size={size} />
    </Styled.Loader>
  );
};

Loader.displayName = "Loader";
