import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as borderRadiusTokens from "../borderRadius";

import { Title, Subtitle, Primary } from "@storybook/addon-docs";
import styled, { css } from "styled-components";
import { primary } from "../../tokens";
import { noCanvas } from "../../../helpers/stories-helpers";
import { DesignSystemDocumentTable } from "../../../shared/design-tokens-document-table/design-tokens-document-table";

export default {
  title: "Tokens/Border Radius",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Border radius token</Title>
          <Subtitle>Design tokens: border radius</Subtitle>
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof DesignSystemDocumentTable>;

type PreviewProps = {
  borderRadius: string;
};
const Preview = styled.div<PreviewProps>`
  width: 100%;
  background-color: ${primary};

  ${({ borderRadius }) =>
    css`
      height: calc(35px + ${borderRadius} / 1.5);
      border-radius: ${borderRadius};
    `}
`;

const SpacingPreview = ({ tokenValue }) => {
  return <Preview borderRadius={tokenValue} />;
};

export const BorderRadius = () => {
  let tokenKeys: string[] = Object.getOwnPropertyNames(borderRadiusTokens);
  const shift = tokenKeys.shift();

  const order = [
    "borderRadiusXXS",
    "borderRadiusXS",
    "borderRadiusS",
    "borderRadiusM",
    "borderRadiusL",
    "borderRadiusXL",
  ];

  tokenKeys.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return (
    <DesignSystemDocumentTable
      tokens={borderRadiusTokens}
      preview={SpacingPreview}
      tokenKeys={tokenKeys}
    />
  );
};

BorderRadius.parameters = {
  ...noCanvas,
  docs: {
    source: {
      code: "",
    },
  },
};
