import React from "react";
import { ColProps } from "./col.types";
import { Col as StyledCol } from "./col.styles";

export const Col: React.FC<ColProps> = ({
  children,
  className,
  size,
  sizeConfined,
  sizeWide,
  offset,
  offsetConfined,
  offsetWide,
}) => {
  return (
    <StyledCol
      className={className}
      $size={size}
      $sizeConfined={sizeConfined}
      $sizeWide={sizeWide}
      $offset={offset}
      $offsetConfined={offsetConfined}
      $offsetWide={offsetWide}
    >
      {children}
    </StyledCol>
  );
};
