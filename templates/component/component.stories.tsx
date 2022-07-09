import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "./component";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "storyType/Component",
  component: Component,
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const ComponentTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComponentTemplate.args = {};
