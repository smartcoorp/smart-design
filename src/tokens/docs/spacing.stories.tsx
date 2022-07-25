import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as spacingTokens from "../spacing";

import { Title, Subtitle, Primary } from "@storybook/addon-docs";
import styled, { css } from "styled-components";
import { gray900 } from "../../tokens";
import { noCanvas } from "../../../helpers/stories-helpers";
import { DesignSystemDocumentTable } from "../../../shared/design-tokens-document-table/design-tokens-document-table";
import { Body } from "../../components";

export default {
  title: "Tokens/Spacing",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Spacing token</Title>
          <Subtitle>Design tokens: spacing</Subtitle>
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof DesignSystemDocumentTable>;

const Preview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Line = styled.div<{ width: string }>`
  ${({ width }) => css`
    width: ${width};
  `}
  height: 1px;
  background: ${gray900};
`;

const SpacingPreview = ({ tokenValue }) => {
  const width: number = (tokenValue.split("px")[0] / 122) * 100;
  return (
    <Preview>
      <Body size='small' noMargin>
        [
      </Body>
      <Line width={`${width}%`}> </Line>
      <Body size='small' noMargin>
        ]
      </Body>
    </Preview>
  );
};

export const Spacing = () => {
  let tokenKeys: string[] = Object.getOwnPropertyNames(spacingTokens);
  const shift = tokenKeys.shift();

  const order = [
    "spaceXXS",
    "spaceXS",
    "spaceS",
    "spaceM",
    "spaceL",
    "spaceXL",
    "spaceXXL",
    "space3XL",
    "space4XL",
    "space5XL",
    "space6XL",
  ];
  tokenKeys.sort((a, b) => order.indexOf(a) - order.indexOf(b));

  return (
    <DesignSystemDocumentTable
      tokens={spacingTokens}
      preview={SpacingPreview}
      tokenKeys={tokenKeys}
    />
  );
};

Spacing.parameters = {
  ...noCanvas,
  docs: {
    source: {
      code: "",
    },
  },
};
