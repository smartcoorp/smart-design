import { css } from "styled-components";
import { scale010, spaceXXS } from "@tokens";

type RingProps = {
  width?: string;
  color: string;
  offsetColor?: string;
  offset?: string;
};
export const ring = ({ width = scale010, color, offsetColor, offset = spaceXXS }: RingProps) => css`
  box-shadow: 0 0 0 ${offset} ${offsetColor ?? "white"}, 0 0 0 calc(${width} + ${offset}) ${color};
`;
