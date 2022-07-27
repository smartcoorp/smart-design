import { scale040, scale050, scale060, scale090, scale100 } from "../../../src/tokens";
import styled, { css, keyframes } from "styled-components";
import { LoaderSizes } from "./loader.types";
import { scale030, scale080, scale110 } from "../../tokens/scale";

const ellipsis1 = keyframes`
0%{
  transform: scale(0);
}
100% {
  transform: scale(1);
}`;

const ellipsis2 = (size: LoaderSizes) => keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(${movementPx[size]}, 0);
  }`;

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }`;
export const movementPx = {
  small: scale080,
  medium: scale100,
  large: scale110,
};

const initialPx = {
  small: scale030,
  medium: scale040,
  large: scale050,
};

export const sizes = {
  small: css`
    width: calc(${movementPx["small"]}*2 + ${initialPx["small"]}*2 + ${scale040});
    height: ${scale040};
  `,
  medium: css`
    width: calc(${movementPx["medium"]}*2 + ${initialPx["medium"]}*2 + ${scale050});
    height: ${scale050};
  `,
  large: css`
    width: calc(${movementPx["large"]}*2 + ${initialPx["large"]}*2 + ${scale060});
    height: ${scale060};
  `,
};

const dotSizes = {
  small: css`
    width: ${scale040};
    height: ${scale040};
  `,
  medium: css`
    width: ${scale050};
    height: ${scale050};
  `,
  large: css`
    width: ${scale060};
    height: ${scale060};
  `,
};
type LoaderTransientProps = {
  $size: LoaderSizes;
};

const Loader = styled.div<LoaderTransientProps>`
  display: inline-flex;
  position: relative;
  ${({ $size }) => sizes[$size]}

  div:nth-child(1) {
    ${({ $size }) =>
      css`
        left: ${initialPx[$size]};
      `}
    animation: ${ellipsis1} 0.6s infinite;
  }

  div:nth-child(2) {
    ${({ $size }) =>
      css`
        left: ${initialPx[$size]};
        animation: ${ellipsis2($size)} 0.6s infinite;
      `}
  }
  div:nth-child(3) {
    ${({ $size }) =>
      css`
        left: calc(${initialPx[$size]} + ${movementPx[$size]});
        animation: ${ellipsis2($size)} 0.6s infinite;
      `}
  }
  div:nth-child(4) {
    ${({ $size }) =>
      css`
        left: calc(${initialPx[$size]} + ${movementPx[$size]} * 2);
        animation: ${ellipsis2($size)} 0.6s infinite;
      `}
    animation: ${ellipsis3} 0.6s infinite;
  }
`;

const LoaderDot = styled.div<LoaderTransientProps>`
  position: absolute;
  top: 0;
  left: 0;
  ${({ $size }) => dotSizes[$size]}
  border-radius: 50%;
  background: black;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

export const Styled = {
  Loader,
  LoaderDot,
};
