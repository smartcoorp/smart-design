import styled, { css } from "styled-components";

import {
  mediaConfined,
  mediaWide,
  scale005,
  scale010,
  scale130,
  scale150,
  scale180,
  scale220,
  spaceL,
  spaceXL,
} from "../../tokens";

import type { HeroFontWeight, HeroSize } from "./hero.types";

type HeroTransientProps = {
  $noMargin?: boolean;
  $size: HeroSize;
  $fontWeight: HeroFontWeight;
  $sizeConfined?: HeroSize;
  $sizeWide?: HeroSize;
};

// *** Base ***
const baseHero = css`
  font-family: "Oswald", "Trebuchet MS", Arial, "Helvetica Neue", sans-serif;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding: 0;
`;

const noMargin = css`
  && {
    margin: 0;
  }
`;

// *** Sizes ***
export const sizes = {
  small: css`
    font-size: ${scale130};
    line-height: 1.3;
    margin-bottom: ${spaceL};
  `,
  medium: css`
    font-size: ${scale150};
    line-height: 1.25;
    margin-bottom: ${spaceXL};
    letter-spacing: 0.5px;
  `,
  large: css`
    font-size: ${scale180};
    line-height: 1.25;
    margin-bottom: ${spaceXL};
    letter-spacing: ${scale005};
  `,
  xlarge: css`
    font-size: ${scale220};
    line-height: 1.15;
    margin-bottom: ${spaceXL};
    letter-spacing: ${scale010};
  `,
};

// *** Font-Weights ***
export const fontWeights = {
  regular: css`
    font-weight: 400;
  `,
  bold: css`
    font-weight: 600;
  `,
};

// *** Components ***
const Hero = styled.h1<HeroTransientProps>`
  ${baseHero};
  ${({ $size }) => $size && sizes[$size]};
  ${({ $fontWeight }) => $fontWeight && fontWeights[$fontWeight]};

  ${({ $sizeConfined }) =>
    $sizeConfined &&
    css`
      @media ${mediaConfined} {
        ${sizes[$sizeConfined]};
      }
    `};

  ${({ $sizeWide }) =>
    $sizeWide &&
    css`
      @media ${mediaWide} {
        ${sizes[$sizeWide]};
      }
    `};

  ${({ $noMargin }) => $noMargin && noMargin};
`;

export const Styled = {
  Hero,
};
