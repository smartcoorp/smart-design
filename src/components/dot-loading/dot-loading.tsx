import React from "react";
import { Styled } from "./dot-loading.styles";
import { DotLoadingProps } from "./dot-loading.types";

export const DotLoading: React.FC<DotLoadingProps> = ({ size = "medium" }) => {
  return (
    <Styled.Loader $size={size} data-testid='dot-loading'>
      <Styled.LoaderDot $size={size} />
      <Styled.LoaderDot $size={size} />
      <Styled.LoaderDot $size={size} />
      <Styled.LoaderDot $size={size} />
    </Styled.Loader>
  );
};

DotLoading.displayName = "DotLoading";
