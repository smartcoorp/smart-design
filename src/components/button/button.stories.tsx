import React from "react";
import styled from "styled-components";
import { IoBarChartSharp } from "react-icons/io5";

import { Button } from "./button";

import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  Primary,
  PRIMARY_STORY,
  Source,
} from "@storybook/addon-docs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { noCanvas, iconArgs, setPropDocumentation } from "@helpers";
import { spaceXL } from "@tokens";

export default {
  title: "Component/Button",
  component: Button,

  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button</Title>
          <Subtitle>Button component for SC projects</Subtitle>
          <Description>##Overview</Description>
          <Description>
            Basic `Button` component to perform navigation inside / outside the project or to
            perform `onClick` events
          </Description>

          <Description>##Usage</Description>
          <Source language='tsx' code={`import { Button } from @smart-design/components`} />
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
    innerRef: { table: { disable: true } },
    icon: iconArgs,
    children: setPropDocumentation({ control: "text" }),
    to: setPropDocumentation({ control: "text" }),
    href: setPropDocumentation({ control: "text" }),
    variant: setPropDocumentation({ control: "inline-radio" }),
    size: setPropDocumentation({ control: "inline-radio" }),
    sizeConfined: setPropDocumentation({ control: "inline-radio" }),
    sizeWide: setPropDocumentation({ control: "inline-radio" }),
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Login",
  variant: "primary",
  size: "medium",
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${spaceXL};
`;

const ReferenceTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <Container>
      <Button size='medium' variant={args.variant}>
        {args.variant!.charAt(0).toUpperCase() + args.variant!.slice(1)}
      </Button>
      <Button size='medium' variant={args.variant} icon={args.icon} iconSize={args.iconSize}>
        {args.variant!.charAt(0).toUpperCase() + args.variant!.slice(1)}
      </Button>
      <Button size='medium' variant={args.variant} icon={args.icon} iconSize={args.iconSize} />
      <Button size='medium' variant={args.variant} loading icon={args.icon}>
        {args.variant!.charAt(0).toUpperCase() + args.variant!.slice(1)}
      </Button>
      <Button size='medium' variant={args.variant} disabled>
        {args.variant!.charAt(0).toUpperCase() + args.variant!.slice(1)}
      </Button>
    </Container>
  );
};

export const PrimaryVariant = ReferenceTemplate.bind({});
export const SecondaryVariant = ReferenceTemplate.bind({});
export const TextVariant = ReferenceTemplate.bind({});

PrimaryVariant.args = {
  variant: "primary",
  icon: IoBarChartSharp,
  iconSize: 18,
};
PrimaryVariant.parameters = {
  ...noCanvas,

  docs: {
    description: {
      story: "`Button` component **primary** variant with it's states",
    },
  },
};

SecondaryVariant.args = {
  variant: "secondary",
  icon: IoBarChartSharp,
  iconSize: 18,
};
SecondaryVariant.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`Button` component **secondary** variant with it's states",
    },
  },
};

TextVariant.args = {
  variant: "text",
  icon: IoBarChartSharp,
  iconSize: 18,
};
TextVariant.parameters = {
  ...noCanvas,
  docs: {
    description: {
      story: "`Button` component **text** variant with it's states",
    },
  },
};
