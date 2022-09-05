import React, { ChangeEvent, useState } from "react";
import { IoCaretUpCircle } from "react-icons/io5";

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
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormField as FormFieldComponent } from "./form-field";
import { FormFieldSize } from "./form-field.types";

import { noCanvas, setPropDocumentation, iconArgs } from "@helpers";

export default {
  title: "Component/FormField",
  component: FormFieldComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>FormField</Title>
          <Subtitle>FormField component for SC projects</Subtitle>
          <Description>##Overview</Description>
          <Description>`FormField` component is used as **Input** field for forms</Description>

          <Description>##Usage</Description>
          <Source language='tsx' code={`import { FormField } from @smart-design/components`} />
          <Description>###Example</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    innerRef: { table: { disable: true } },
    icon: iconArgs,
    size: setPropDocumentation({ control: "inline-radio" }),
    sizeConfined: setPropDocumentation({ control: "inline-radio" }),
    sizeWide: setPropDocumentation({ control: "inline-radio" }),
  },
} as ComponentMeta<typeof FormFieldComponent>;

const Template: ComponentStory<typeof FormFieldComponent> = ({
  id,
  label,
  size,
  error,
  errorMessage,
  icon: Icon,
  sizeConfined,
  sizeWide,
  variant,
  multiline,
  disabled,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    //@ts-ignore
    <FormFieldComponent
      value={value}
      id={`${size}_${id}`}
      label={label}
      size={size as FormFieldSize}
      error={error}
      errorMessage={errorMessage}
      icon={Icon}
      sizeWide={sizeWide}
      sizeConfined={sizeConfined}
      variant={variant}
      multiline={multiline}
      disabled={disabled}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Default label",
  id: "default",
  size: "medium",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "With Icon",
  id: "wIcon",
  size: "medium",
  icon: IoCaretUpCircle,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "With Error",
  id: "wError",
  size: "medium",
  error: true,
  errorMessage: "this is an error message",
};

export const WithErrorAndIcon = Template.bind({});
WithErrorAndIcon.args = {
  label: "With Error",
  id: "wErrorIcon",
  size: "medium",
  error: true,
  errorMessage: "this is an error message",
  icon: IoCaretUpCircle,
};

export const Password = Template.bind({});
Password.args = {
  label: "Password variant",
  id: "passwordVariuant",
  size: "medium",
  variant: "password",
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: "Add your message here",
  id: "multiline",
  size: "medium",
  multiline: true,
};

WithIcon.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`FormField` component **primary** variant with **Icon**.",
    },
  },
};
WithError.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`FormField` component **primary** variant with **Error**.",
    },
  },
};
WithErrorAndIcon.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`FormField` component **primary** variant with **Error** and **Icon**.",
    },
  },
};

Password.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`FormField` component **password** variant.",
    },
  },
};

Textarea.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story:
        "`FormField` **textarea** component. Used for large multiline blocks of texts like descriptions, messages etc...",
    },
  },
};
