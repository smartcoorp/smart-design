import styled, { css } from "styled-components";

import { HeadlineSize } from "./headline.types";

import {
  mediaConfined,
  mediaWide,
  scale070,
  scale080,
  scale090,
  scale100,
  scale110,
  scale130,
  spaceL,
  spaceM,
} from "@tokens";

type HeadlineTransientProps = {
  $ellipsis?: boolean;
  $noMargin?: boolean;
  $size: HeadlineSize;
  $sizeConfined?: HeadlineSize;
  $sizeWide?: HeadlineSize;
};

// *** Base ***
const baseHeadline = css`
  color: ${({ theme }) => theme.typography.headlineTextColor};
  font-weight: 700;
  line-height: 1.25;
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

const ellipsis = css`
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// *** Sizes ***
export const sizes = {
  small: css`
    font-size: ${scale070};
    margin-bottom: ${spaceM};
  `,
  medium: css`
    font-size: ${scale080};
    margin-bottom: ${spaceM};
  `,
  large: css`
    font-size: ${scale090};
    margin-bottom: ${spaceL};
  `,
  xlarge: css`
    font-size: ${scale100};
    margin-bottom: ${spaceL};
  `,
  xxlarge: css`
    font-size: ${scale110};
    margin-bottom: ${spaceL};
  `,
  xxxlarge: css`
    font-size: ${scale130};
    margin-bottom: ${spaceL};
  `,
};

// *** Components ***
const Headline = styled.h2<HeadlineTransientProps>`
  ${baseHeadline};
  ${({ $size }) => $size && sizes[$size]};

  ${({ $sizeConfined }) =>
    $sizeConfined &&
    css`
      @media ${mediaConfined} {
        ${sizes[$sizeConfined]}
      }
    `};

  ${({ $sizeWide }) =>
    $sizeWide &&
    css`
      @media ${mediaWide} {
        ${sizes[$sizeWide]}
      }
    `};

  ${({ $noMargin }) => $noMargin && noMargin};
  ${({ $ellipsis }) => $ellipsis && ellipsis};
`;

export const Styled = {
  Headline,
};
