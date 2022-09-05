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
  Source,
} from "@storybook/addon-docs";
import { Hero } from "../hero";

export default {
  title: "Layout/Container",
  component: ContainerComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Container</Title>
          <Subtitle>Container Component</Subtitle>
          <Description>##Overview</Description>
          <Description>
            `Container` component is used to set `max-width` and left/right paddings for content
          </Description>
          <Description>##Usage</Description>
          <Source language='js' code={`import { Container } from @smart-design/components`} />
          <Description>###Example</Description>
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
Container.args = {
  children: <Hero size='xlarge'>Container for content</Hero>,
};
