import React from "react";
import { Styled } from "./body.styles";
import { BodyProps } from "./body.types";

const Body: React.FC<BodyProps> = ({
  children,
  ellipsis,
  fontWeight = "regular",
  lineHeight,
  noMargin,
  size = "medium",
  sizeConfined,
  sizeWide,
  ...props
}) => {
  return (
    <Styled.Body
      $ellipsis={ellipsis}
      $fontWeight={fontWeight}
      $lineHeight={lineHeight}
      $noMargin={noMargin}
      $size={size}
      $sizeConfined={sizeConfined}
      $sizeWide={sizeWide}
      data-xds='Body'
      {...props}
    >
      {children}
    </Styled.Body>
  );
};
Body.displayName = "Body";
export default Body;
