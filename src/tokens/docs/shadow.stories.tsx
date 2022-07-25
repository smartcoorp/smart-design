import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as shadowTokens from "../shadow";

import { Title, Subtitle, Primary } from "@storybook/addon-docs";
import styled, { css } from "styled-components";
import { borderRadiusS } from "../../tokens";
import { noCanvas } from "../../../helpers/stories-helpers";
import { DesignSystemDocumentTable } from "../../../shared/design-tokens-document-table/design-tokens-document-table";

export default {
  title: "Tokens/Shadow",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Shadow token</Title>
          <Subtitle>Design tokens: shadow</Subtitle>
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof DesignSystemDocumentTable>;

type PreviewProps = {
  shadow: string;
};
const Preview = styled.div<PreviewProps>`
  width: 100%;
  height: 50px;
  border-radius: ${borderRadiusS};

  ${({ shadow }) =>
    css`
      box-shadow: ${shadow};
    `}
`;

const SpacingPreview = ({ tokenValue }) => {
  return <Preview shadow={tokenValue} />;
};

export const Shadow = () => {
  let tokenKeys: string[] = Object.getOwnPropertyNames(shadowTokens);
  const shift = tokenKeys.shift();

  const order = ["dropShadowS", "dropShadowM"];
  tokenKeys.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return (
    <DesignSystemDocumentTable
      tokens={shadowTokens}
      preview={SpacingPreview}
      tokenKeys={tokenKeys}
    />
  );
};

Shadow.parameters = {
  ...noCanvas,
  docs: {
    source: {
      code: "",
    },
  },
};
