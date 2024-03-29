import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ClickOutside as ClickOutsideComponent } from "./click-outside";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { Button } from "../button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Utility/ClickOutside",
  component: ClickOutsideComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Click Outside</Title>
          <Subtitle>ClickOutside component</Subtitle>
          <Description>
            This component is used to detect there has been a click outside the content of the
            wrapper. Used for `PopOvers` etc...
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof ClickOutsideComponent>;

const Template: ComponentStory<typeof ClickOutsideComponent> = (args) => {
  const [buttonContent, setButtonContent] = useState<string>("Try clicking outside");
  return (
    <ClickOutsideComponent
      id='test'
      callback={() => setButtonContent("NICE!! You clicked outside")}
    >
      <Button onClick={() => setButtonContent("Try clicking outside")}>{buttonContent}</Button>
    </ClickOutsideComponent>
  );
};

export const ClickOutside = Template.bind({});
