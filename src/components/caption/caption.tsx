import * as React from "react";

import type { CaptionProps } from "./caption.types";

import { Styled } from "./caption.styles";

export const Caption = ({
  children,
  ellipsis,
  fontWeight = "regular",
  lineHeight,
  noMargin,
  ...props
}: CaptionProps) => (
  <Styled.Caption
    $ellipsis={ellipsis}
    $fontWeight={fontWeight}
    $lineHeight={lineHeight}
    $noMargin={noMargin}
    data-xds='Caption'
    {...props}
  >
    {children}
  </Styled.Caption>
);

Caption.displayName = "Caption";
