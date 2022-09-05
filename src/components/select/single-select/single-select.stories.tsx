import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SingleSelect as SingleSelectComponent } from "./single-select";

import { useForm, Controller } from "react-hook-form";

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
import { Button } from "@components";

export default {
  title: "Component/Single Select",
  component: SingleSelectComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Single Select</Title>
          <Subtitle>Single Select dropdown component</Subtitle>
          <Description>##Overview</Description>
          <Description>
            This component is used to select **one single** option in forms or quizes
          </Description>
          <Description>##Usage</Description>
          <Source language='tsx' code={`import { SingleSelect } from @smart-design/components`} />
          <Description>###Example</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof SingleSelectComponent>;

const Template: ComponentStory<typeof SingleSelectComponent> = (args, context) => {
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
        defaultValue={"value1"}
        render={({ field: { ref, onChange, ...field }, fieldState: { error } }) => (
          <SingleSelectComponent
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
        Submit and check console
      </Button>
    </form>
  );
};

export const SingleSelect = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleSelect.args = {
  label: "Single Select",
  defaultValue: "mentor",
  id: "single-slect",
};
SingleSelect.parameters = {
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
      name='single-select'
      render={({ field: { onChange, ref, ...field }, fieldState: { error } }) => (
        <SingleSelect
          innerRef={ref}
          options={options}
          onChange={onChange}
          error={Boolean(error)}
          errorMessage={error?.message}
          {...field}
          {...args} /** Args of the Single Select */
        />
      )}
      rules={{ required: "This field is required" }}
    ></Controller>
);`,
    },
  },
};
