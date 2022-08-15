import styled, { css } from "styled-components";

import { ColOffset, ColSizes } from "./col.types";
import { mediaConfined, mediaWide, scale020, scale040, scale060 } from "@tokens";

type ColTransientProps = {
  $size: ColSizes;
  $sizeConfined?: ColSizes;
  $sizeWide?: ColSizes;
  $offset?: ColOffset;
  $offsetConfined?: ColOffset;
  $offsetWide?: ColOffset;
};

export const Col = styled.div<ColTransientProps>`
  display: block;

  ${({ $size }) => css`
    flex-basis: ${($size / 12) * 100}%;
  `}

  ${({ $offset }) =>
    $offset &&
    css`
      margin-left: ${($offset / 12) * 100}%;
    `}

  padding-left: ${scale020};
  padding-right: ${scale020};

  @media ${mediaConfined} {
    padding-left: ${scale040};
    padding-right: ${scale040};

    ${({ $sizeConfined }) =>
      $sizeConfined &&
      css`
        flex-basis: ${($sizeConfined / 12) * 100}%;
      `}
  }

  @media ${mediaWide} {
    padding-left: ${scale060};
    padding-right: ${scale060};

    ${({ $sizeWide }) =>
      $sizeWide &&
      css`
        flex-basis: ${($sizeWide / 12) * 100}%;
      `}
  }
`;
