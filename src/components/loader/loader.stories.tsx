import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader as LoaderComponent } from "./loader";
import { noCanvas } from "../../../helpers/stories-helpers";
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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Loader",
  component: LoaderComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Loader</Title>
          <Subtitle>Loading animation</Subtitle>
          <Description>
            `Loader` component is the loading animation for SC projects. It can be used in different
            situations
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
} as ComponentMeta<typeof LoaderComponent>;

const Template: ComponentStory<typeof LoaderComponent> = (args) => <LoaderComponent {...args} />;

export const Loader = Template.bind({});
Loader.args = {
  size: "medium",
};
Loader.parameters = {
  ...noCanvas,
};
