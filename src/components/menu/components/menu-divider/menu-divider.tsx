import { spaceS, spaceXL } from "@tokens";
import React from "react";
import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.common.disabledSurfaceColor};
  margin: ${spaceS} ${spaceXL};
`;

export const MenuDivider: React.FC = () => {
  return <Divider role='separator' />;
};
