import React from "react";

import { Container } from "src/components/container";
import { Grid } from "../grid";
import { ContainedGridProps } from "./contained-grid.types";

export const ContainedGrid: React.FC<ContainedGridProps> = ({ children, className, gridRuler }) => {
  return (
    <Container className={className}>
      <Grid gridRuler={gridRuler}>{children}</Grid>
    </Container>
  );
};

ContainedGrid.displayName = "ContainedGrid";
