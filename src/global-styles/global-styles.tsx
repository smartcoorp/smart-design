import React from "react";
import { BaseStyles } from "./base-styles";
import { FontStyles } from "./font-styles";
import { NormalizeStyles } from "./normalized-styles";

interface Props {
  children: React.ReactNode;
}
const GlobalStyles: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <FontStyles />
      {children}
    </>
  );
};
export default GlobalStyles;
