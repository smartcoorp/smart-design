import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";
import { IoBarChartSharp, IoAccessibilitySharp } from "react-icons/io5";

import {
  Title,
  Subtitle,
  Description,
  ArgsTable,
  Stories,
  Primary,
  PRIMARY_STORY,
} from "@storybook/addon-docs";
import { setPropDocumentation } from "../../../helpers/set-prop-documentation";
import styled from "styled-components";
import { noCanvas } from "../../../helpers/stories-helpers";
import { ButtonSizes } from "./button.types";
import { Headline } from "../headline/headline";
import { scale040, scale100 } from "../../tokens";

const icons = { null: null, IoBarChartSharp, IoAccessibilitySharp };

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Button",
  component: Button,

  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button</Title>
          <Subtitle>Button component for SC projects</Subtitle>
          <Description>
            Basic `Button` component to perform navigation inside / outside the project or to
            perform `onClick` events
          </Description>
          <Primary></Primary>
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
    icon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: "select", // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          IoBarChartSharp: "IoBarChartSharp",
          IoAccessibilitySharp: "IoAccessibilitySharp",
        },
      },
    },
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
  flex-direction: column;
  gap: 10px;
`;
const SizeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  margin-bottom: ${scale100};
`;

const HeadlineComp = styled(Headline)``;

const sizes = ["small", "medium", "large"];

export const PrimaryVariant = () => {
  return (
    <Container>
      {sizes.map((size) => {
        return (
          <>
            <Headline noMargin>{size.charAt(0).toUpperCase() + size.slice(1)}</Headline>

            <SizeContainer key={`primary_${size}`}>
              <Button size={size as ButtonSizes} variant='primary'>
                Primary{" "}
              </Button>
              <Button
                size={size as ButtonSizes}
                variant='primary'
                icon={IoBarChartSharp}
                iconSize={18}
              >
                Primary
              </Button>
              <Button
                size={size as ButtonSizes}
                variant='primary'
                icon={IoBarChartSharp}
                iconSize={18}
              />
              <Button size={size as ButtonSizes} variant='primary' loading icon={IoBarChartSharp}>
                Primary
              </Button>
              <Button size={size as ButtonSizes} variant='primary' disabled>
                Primary
              </Button>
            </SizeContainer>
          </>
        );
      })}
    </Container>
  );
};

export const SecondaryVariant = () => {
  return (
    <Container>
      {sizes.map((size) => {
        return (
          <>
            <Headline noMargin>{size.charAt(0).toUpperCase() + size.slice(1)}</Headline>

            <SizeContainer key={`secondary_${size}`}>
              <Button size={size as ButtonSizes} variant='secondary'>
                Secondary{" "}
              </Button>
              <Button
                size={size as ButtonSizes}
                variant='secondary'
                icon={IoBarChartSharp}
                iconSize={18}
              >
                Secondary
              </Button>
              <Button
                size={size as ButtonSizes}
                variant='secondary'
                icon={IoBarChartSharp}
                iconSize={18}
              />
              <Button size={size as ButtonSizes} variant='secondary' loading icon={IoBarChartSharp}>
                Secondary
              </Button>
              <Button size={size as ButtonSizes} variant='secondary' disabled>
                Secondary
              </Button>
            </SizeContainer>
          </>
        );
      })}
    </Container>
  );
};

export const TextVariant = () => {
  return (
    <Container>
      {sizes.map((size) => {
        return (
          <>
            <Headline noMargin>{size.charAt(0).toUpperCase() + size.slice(1)}</Headline>

            <SizeContainer key={`text_${size}`}>
              <Button size={size as ButtonSizes} variant='text'>
                Text{" "}
              </Button>
              <Button
                size={size as ButtonSizes}
                variant='text'
                icon={IoBarChartSharp}
                iconSize={18}
              >
                Text
              </Button>
              <Button
                size={size as ButtonSizes}
                variant='text'
                icon={IoBarChartSharp}
                iconSize={18}
              />
              <Button size={size as ButtonSizes} variant='text' loading icon={IoBarChartSharp}>
                Text
              </Button>
              <Button size={size as ButtonSizes} variant='text' disabled>
                Text
              </Button>
            </SizeContainer>
          </>
        );
      })}
    </Container>
  );
};

PrimaryVariant.parameters = {
  ...noCanvas,
};
SecondaryVariant.parameters = {
  ...noCanvas,
};
TextVariant.parameters = {
  ...noCanvas,
};
