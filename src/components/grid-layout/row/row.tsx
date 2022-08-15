import React from "react";
import { RowProps } from "./row.types";
import { Row as StyledRow } from "./row.styles";

export const Row: React.FC<RowProps> = ({ children, className, noMargin }) => {
  return (
    <StyledRow className={className} $noMargin={noMargin}>
      {children}
    </StyledRow>
  );
};
