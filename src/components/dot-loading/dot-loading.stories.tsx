import React from "react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DotLoading as DotLoadingComponent } from "./dot-loading";

import { noCanvas, setPropDocumentation } from "@helpers";

export default {
  title: "Component/Dot Loading",
  component: DotLoadingComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Loader</Title>
          <Subtitle>Loading animation</Subtitle>
          <Description>
            `DotLoading` component is the loading animation for SC projects. It can be used in
            different situations
          </Description>
          <Description>- loading state for `Button` component</Description>
          <Description>- loading page</Description>

          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    size: setPropDocumentation({ control: "inline-radio" }),
  },
} as ComponentMeta<typeof DotLoadingComponent>;

const Template: ComponentStory<typeof DotLoadingComponent> = (args) => (
  <DotLoadingComponent {...args} />
);

export const DotLoading = Template.bind({});
DotLoading.args = {
  size: "medium",
};
DotLoading.parameters = {
  ...noCanvas,
};
