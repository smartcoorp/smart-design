import React from "react";
import { ComponentMeta } from "@storybook/react";
import * as motionTokens from "../motion";

import { Title, Subtitle, Primary } from "@storybook/addon-docs";
import { noCanvas } from "../../../helpers/stories-helpers";
import { DesignSystemDocumentTable } from "../../../shared/design-tokens-document-table/design-tokens-document-table";
import { Caption } from "../../components/caption/caption";

export default {
  title: "Tokens/Motion",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Motion token</Title>
          <Subtitle>Design tokens: motion</Subtitle>
          <Primary />
        </>
      ),
    },
  },
} as ComponentMeta<typeof DesignSystemDocumentTable>;

const SpacingPreview = () => {
  return <Caption noMargin>no preview</Caption>;
};

export const Motion = () => {
  let tokenKeys: string[] = Object.getOwnPropertyNames(motionTokens);
  const shift = tokenKeys.shift();
  const order = [
    "motionEasingEnter",
    "motionEasingLeave",
    "motionEasingStandard",
    "motionTimeXXS",
    "motionTimeXS",
    "motionTimeS",
    "motionTimeM",
    "motionTimeL",
    "motionTimeXL",
    "motionTimeXXL",
    "motionTimeNumberXXS",
    "motionTimeNumberXS",
    "motionTimeNumberS",
    "motionTimeNumberM",
    "motionTimeNumberL",
    "motionTimeNumberXL",
    "motionTimeNumberXXL",
  ];
  tokenKeys.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return (
    <DesignSystemDocumentTable
      tokens={motionTokens}
      preview={SpacingPreview}
      tokenKeys={tokenKeys}
    />
  );
};

Motion.parameters = {
  ...noCanvas,
  docs: {
    source: {
      code: "",
    },
  },
};
