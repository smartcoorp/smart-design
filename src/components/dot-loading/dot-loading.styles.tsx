import styled, { css, keyframes } from "styled-components";

import { DotLoadingSizes } from "./dot-loading.types";

import { scale040, scale050, scale060, scale100, scale030, scale080, scale110 } from "@tokens";

type DotLoadingTransientProps = {
  $size: DotLoadingSizes;
  $disabled?: boolean;
};

const movementPx = {
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

const ellipsis1 = keyframes`
0%{
  transform: scale(0);
}
100% {
  transform: scale(1);
}`;

const ellipsis2 = (size: DotLoadingSizes) => keyframes`
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

const Loader = styled.div<DotLoadingTransientProps>(
  ({ $size }) => css`
    display: inline-flex;
    position: relative;
    ${sizes[$size]}
    div:nth-child(1) {
      left: ${initialPx[$size]};
      animation: ${ellipsis1} 0.6s infinite;
    }

    div:nth-child(2) {
      left: ${initialPx[$size]};
      animation: ${ellipsis2($size)} 0.6s infinite;
    }
    div:nth-child(3) {
      left: calc(${initialPx[$size]} + ${movementPx[$size]});
      animation: ${ellipsis2($size)} 0.6s infinite;
    }
    div:nth-child(4) {
      left: calc(${initialPx[$size]} + ${movementPx[$size]} * 2);
      animation: ${ellipsis3} 0.6s infinite;
    }
  `
);

const LoaderDot = styled.div<DotLoadingTransientProps>`
  position: absolute;
  top: 0;
  left: 0;
  ${({ $size }) => dotSizes[$size]}
  border-radius: 50%;
  background: ${({ theme, $disabled }) =>
    $disabled ? theme.dotLoading.disabledColor : theme.color.neutral};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

export const Styled = {
  Loader,
  LoaderDot,
};
