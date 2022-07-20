import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BodyComponent from "./body";
import { BodyCopySize, BodyCopyFontWeight } from "./body.types";
import { fontWeights, lineHeights, sizes } from "./body.styles";
import { setPropDocumentation } from "../../../helpers/set-prop-documentation";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import styled from "styled-components";
import { scale120, space4XL, spaceM } from "../../tokens";
import { noCanvas } from "../../../helpers/stories-helpers";

const bodySizes: string[] = Object.keys(sizes);
const bodyWeights: string[] = Object.keys(fontWeights);
const bodyLineHeights: string[] = Object.keys(lineHeights);

export default {
  title: "Typography/Body",
  component: BodyComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Body</Title>
          <Subtitle>Paragraph typography Smartcookie component</Subtitle>
          <Description>
            The `Body` component is used for common paragraph copies arround SC projects.
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='Body variants' />
        </>
      ),
    },
  },
  argTypes: {
    children: { description: "Content of the body copy", control: { type: "text" } },
    size: setPropDocumentation({
      description: "The size on mobile screens or larger",
      type: bodySizes,
      options: bodySizes,
      defaultValue: "medium",
      control: "inline-radio",
    }),
    sizeConfined: setPropDocumentation({
      description: "The size on tablet screens or larger",
      type: bodySizes,
      options: bodySizes,
      control: "inline-radio",
    }),
    sizeWide: setPropDocumentation({
      description: "The size on screen screens or larger",
      type: bodySizes,
      options: bodySizes,
      control: "inline-radio",
    }),

    fontWeight: setPropDocumentation({
      description: "Set font-weight",
      type: bodyWeights,
      options: bodyWeights,
      control: "inline-radio",
      defaultValue: "regular",
    }),

    lineHeight: setPropDocumentation({
      description: "Decrease or increase line-height",
      type: bodyLineHeights,
      options: bodyLineHeights,
      control: "inline-radio",
    }),

    ellipsis: setPropDocumentation({
      description: "Activate text truncation",
      type: "boolean",
      control: "boolean",
    }),

    noMargin: setPropDocumentation({
      description: "Remove margin-bottom",
      type: "boolean",
      control: "boolean",
    }),
  },
} as ComponentMeta<typeof BodyComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BodyComponent> = (args) => <BodyComponent {...args} />;

export const Body = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body.args = {
  children: "Hello this the body of the body component",
  size: "medium",
  fontWeight: "regular",
};
Body.parameters = { ...noCanvas };

const PropContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${space4XL};
  padding: ${spaceM} 0;
`;
const TypeContainer = styled.div`
  width: ${scale120};
`;

export const Sizes = () => {
  const sizePx: any = {
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
  };

  return (
    <>
      {bodySizes.map((key) => (
        <PropContainer>
          <TypeContainer>
            <BodyComponent size={key as BodyCopySize} noMargin>
              {sizePx[key]}
            </BodyComponent>
          </TypeContainer>
          <BodyComponent size={key as BodyCopySize} noMargin>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BodyComponent>
        </PropContainer>
      ))}
    </>
  );
};

Sizes.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "Posible sizes for `Body` component",
    },
  },
};

export const FontWeights = () => {
  const sizePx: any = {
    regular: 400,
    bold: 700,
  };
  return (
    <>
      {bodyWeights.map((key) => (
        <PropContainer>
          <TypeContainer>
            <BodyComponent noMargin fontWeight={key as BodyCopyFontWeight}>
              {sizePx[key]}
            </BodyComponent>
          </TypeContainer>
          <BodyComponent noMargin fontWeight={key as BodyCopyFontWeight}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BodyComponent>
        </PropContainer>
      ))}
    </>
  );
};

FontWeights.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "Font weights for `Body` component",
    },
  },
};
