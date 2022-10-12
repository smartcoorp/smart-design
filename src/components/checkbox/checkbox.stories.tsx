import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox as CheckboxComponent } from "./checkbox";

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
import { noCanvas } from "@helpers";

export default {
  title: "Component/Checkbox",
  component: CheckboxComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Checkbox</Title>
          <Subtitle>Checkbox component</Subtitle>
          <Description>##Overview</Description>
          <Description>
            This component is used to select between `true`, `false` or `"mixed"` states in a
            determined requirement. For example in a question where the answer is yes or no you can
            use the `Checkbox` component to determine the answer.
          </Description>
          <Description>##Usage</Description>
          <Source language='js' code={`import { Checkbox } from @smart-design/components`} />
          <Description>###Example</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {
    onChange: { type: "function" },
  },
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  console.log(args);
  return (
    <CheckboxComponent
      {...args}
      checked={args.checked ?? isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export const Checkbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checkbox.args = {
  label: "Checkbox label",
};
Checkbox.parameters = { ...noCanvas };

export const MixedCheckbox = Template.bind({});

MixedCheckbox.args = {
  label: "Mixed checkbox",
  checked: "mixed",
};
MixedCheckbox.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "Enabled `Checkbox` component with `'mixed'` checked state)",
    },
  },
};

export const DisabledCheckedCheckbox = Template.bind({});

DisabledCheckedCheckbox.args = {
  label: "Disabled checked checkbox",
  checked: true,
  disabled: true,
};
DisabledCheckedCheckbox.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story:
        "`Checkbox` component that is disabled and checked (works the same for `'mixed'` checked state)",
    },
  },
};

export const DisabledUncheckedCheckbox = Template.bind({});

DisabledUncheckedCheckbox.args = {
  label: "Disabled checked checkbox",
  checked: false,
  disabled: true,
};
DisabledUncheckedCheckbox.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`Checkbox` component that is disabled and unchecked",
    },
  },
};
