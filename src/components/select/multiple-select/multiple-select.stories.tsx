import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultipleSelect as MultipleSelectComponent } from "./multiple-select";

import { useForm, Controller } from "react-hook-form";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  DescriptionType,
  Source,
} from "@storybook/addon-docs";
import { Button } from "@components";
import { noCanvas } from "@helpers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Multiple Select",
  component: MultipleSelectComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Multiple Select</Title>
          <Subtitle>Multiple Select dropdown component</Subtitle>
          <Description>##Overview</Description>
          <Description>
            This component is used to select **one or more** options in forms or quizes
          </Description>
          <Description>##Usage</Description>
          <Source language='tsx' code={`import { MultiSelect } from @smart-design/components`} />
          <Description>###Example</Description>

          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof MultipleSelectComponent>;

const Template: ComponentStory<typeof MultipleSelectComponent> = (args, context) => {
  const { control, handleSubmit } = useForm();

  const { storyId } = context;

  const options = [
    { value: "mentor", label: "Mentoring" },
    { value: "teaching", label: "Teaching" },
    { value: "multiple", label: "Multiple" },
    { value: "tutor", label: "Tutoring" },
    { value: "1to1", label: "1 to 1" },
    { value: "mixed", label: "Mixed" },
    { value: "1to3", label: "1 to 3" },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='single-select'
        defaultValue={args.defaultValue}
        render={({ field: { onChange, ref, ...field }, fieldState: { error } }) => (
          <MultipleSelectComponent
            innerRef={ref}
            {...field}
            {...args}
            id={`story${storyId}_${args.id}`}
            options={options}
            onChange={onChange}
            error={Boolean(error)}
            errorMessage={error?.message}
          />
        )}
        rules={{ required: "This field is required" }}
      ></Controller>
      <Button type='submit' style={{ marginTop: "30px" }}>
        Submit and check data
      </Button>
    </form>
  );
};

export const MultipleSelect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleSelect.args = {
  label: "Multiple Select",
  defaultValue: ["mentor", "teaching"],
  id: "multiple-slect",
};
MultipleSelect.parameters = {
  docs: {
    source: {
      code: `const { control } = useForm();

const options = [
    { value: "mentor", label: "Mentoring" },
    { value: "teaching", label: "Teaching" },
    { value: "multiple", label: "Multiple" },
    { value: "tutor", label: "Tutoring" },
    { value: "1to1", label: "1 to 1" },
    { value: "mixed", label: "Mixed" },
    { value: "1to3", label: "1 to 3" },
];

return (
    <Controller
      control={control}
      name='test'
      render={({ field: { onChange, ref, ...field }, fieldState: { error } }) => (
        <MultipleSelect
          innerRef={ref}
          options={options}
          onChange={onChange}
          error={Boolean(error)}
          errorMessage={error?.message}
          {...field}
          {...args} /** Args of the Multiple Select */
        />
      )}
      rules={{ required: "This field is required" }}
    ></Controller>
);`,
    },
  },
};

const TemplateTwo: ComponentStory<typeof MultipleSelectComponent> = (args, context) => {
  const { storyId } = context;

  const options = [
    { value: "mentor", label: "Mentoring" },
    { value: "teaching", label: "Teaching" },
    { value: "multiple", label: "Multiple" },
    { value: "tutor", label: "Tutoring" },
    { value: "1to1", label: "1 to 1" },
    { value: "mixed", label: "Mixed" },
    { value: "1to3", label: "1 to 3" },
  ];

  return <MultipleSelectComponent {...args} options={options} id={`story${storyId}_${args.id}`} />;
};

export const MultipleSelectWithoutLabel = TemplateTwo.bind({});

MultipleSelectWithoutLabel.args = {
  labelDescription: "Username",
  id: "multiple-select-without-label",
};
MultipleSelectWithoutLabel.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`MultipleSelect` without label",
    },
  },
};

export const DisabledMultipleSelect = TemplateTwo.bind({});

DisabledMultipleSelect.args = {
  label: "Disabled multiple slect",
  disabled: true,
  id: "disabled-multiple-select-without-values",
};
DisabledMultipleSelect.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "Disabled `MultipleSelect` component with no values",
    },
  },
};

export const DisabledMultipleSelectWithValues = TemplateTwo.bind({});

DisabledMultipleSelectWithValues.args = {
  label: "Disabled multiple slect",
  disabled: true,
  id: "disabled-multiple-select-with-values",

  defaultValue: ["mentor", "teaching"],
};
DisabledMultipleSelectWithValues.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "Disabled `MultipleSelect` component with values",
    },
  },
};

export const ErrorMultipleSelect = TemplateTwo.bind({});

ErrorMultipleSelect.args = {
  label: "Error multiple select",
  error: true,
  errorMessage: "This field is required",
  id: "error-multiple-select",
};
ErrorMultipleSelect.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`MultipleSelect` component with `error` and `errorMessage`",
    },
  },
};
