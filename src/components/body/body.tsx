import React from "react";
import * as S from "./body.styles";
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
    <S.Body
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
    </S.Body>
  );
};

export default Body;
