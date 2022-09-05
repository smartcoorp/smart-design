import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Component } from "./component";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  Source,
} from "@storybook/addon-docs";

export default {
  title: "storyType/Component",
  component: Component,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Component</Title>
          <Subtitle>Subtitle</Subtitle>
          <Description>##Overview</Description>
          <Description>Description</Description>
          <Description>##Usage</Description>
          <Source language='js' code={`import { Component } from @smart-design/components`} />
          <Description>###Example</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const ComponentTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComponentTemplate.args = {
  children: "hello",
};
