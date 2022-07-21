import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./component";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "storyType/Component",
  component: Component,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Component</Title>
          <Subtitle>Subtitle</Subtitle>
          <Description>MDX description</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='Component variants' />
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
