import * as React from "react";

import type { HeadlineProps } from "./headline.types";

import { Styled } from "./headline.styles";

const Headline = ({
  children,
  ellipsis,
  noMargin,
  size = "medium",
  sizeConfined,
  sizeWide,
  ...props
}: HeadlineProps) => (
  <Styled.Headline
    $ellipsis={ellipsis}
    $noMargin={noMargin}
    $size={size}
    $sizeConfined={sizeConfined}
    $sizeWide={sizeWide}
    data-xds='Headline'
    {...props}
  >
    {children}
  </Styled.Headline>
);

Headline.displayName = "Headline";

export default Headline;
