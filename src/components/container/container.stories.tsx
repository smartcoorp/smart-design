import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container as ContainerComponent } from "./container";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { noCanvas } from "@helpers";
import { Hero } from "../hero";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Container",
  component: ContainerComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Container</Title>
          <Subtitle>Container Component</Subtitle>
          <Description>
            `Container` component is used to set `max-width` and left/right paddings for content
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof ContainerComponent>;

const Template: ComponentStory<typeof ContainerComponent> = (args) => (
  <ContainerComponent {...args}>
    <div style={{ backgroundColor: "lightblue" }}>{args.children}</div>
  </ContainerComponent>
);

export const Container = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Container.args = {
  children: <Hero size='xlarge'>Container for content</Hero>,
};

Container.parameters = {
  //...noCanvas,
};
