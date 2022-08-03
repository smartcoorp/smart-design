import React from "react";
import styled, { css } from "styled-components";

import { ComponentMeta } from "@storybook/react";
import { Title, Subtitle, Primary } from "@storybook/addon-docs";
import * as scaleTokens from "../scale";

import { borderRadiusXS, primary } from "@tokens";
import { noCanvas } from "@helpers";
import { DesignSystemDocumentTable } from "@shared";

export default {
  title: "Tokens/Scale",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Scale token</Title>
          <Subtitle>Design tokens: scale</Subtitle>
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof DesignSystemDocumentTable>;

type PreviewProps = {
  width: string;
};
const Preview = styled.div<PreviewProps>`
  ${({ width }) => {
    return css`
      width: ${width};
    `;
  }}
  height: 25px;
  border-radius: ${borderRadiusXS};
  background-color: ${primary};
`;

const ScalePreview = ({ tokenValue }: { tokenValue: string }) => {
  const width: number = (parseFloat(tokenValue.split("px")[0]) / 432) * 100;
  return <Preview width={`${width}%`} />;
};

export const Scale = () => {
  let tokenKeys: string[] = Object.getOwnPropertyNames(scaleTokens);
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
    <DesignSystemDocumentTable tokens={scaleTokens} tokenKeys={tokenKeys} preview={ScalePreview} />
  );
};

Scale.parameters = {
  ...noCanvas,
  docs: {
    source: {
      code: "",
    },
  },
};
