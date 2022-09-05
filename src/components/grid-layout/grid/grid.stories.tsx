import React from "react";
import styled from "styled-components";

import { ComponentStory, ComponentMeta } from "@storybook/react";
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

import { Grid } from ".";
import { Row } from "../row";
import { Col } from "../col";
import { ColOffset, ColSizes } from "../col/col.types";

export default {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Grid</Title>
          <Subtitle>Grid layout component</Subtitle>
          <Description>##Overview</Description>
          <Description>
            `Grid` component is used for marking up the content of SC projects
          </Description>
          <Description>
            Inside `Grid` component, use `Row` and `Col` component to build different layouts
          </Description>
          <Description>##Usage</Description>
          <Source language='js' code={`import { Grid, Row, Col } from @smart-design/components`} />
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
    children: { table: { disabled: true } },
  },
} as ComponentMeta<typeof Grid>;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background-color: lightblue;
  border-radius: 8px;
`;

const Box: React.FC<{ offset?: ColOffset; size: ColSizes }> = ({ offset, size }) => {
  return (
    <StyledBox>
      <div style={{ display: "flex" }}>
        <p style={{ marginRight: "12px" }}>
          Size: <b>{size}</b>
        </p>
        {offset && (
          <p>
            Offset: <b>{offset}</b>
          </p>
        )}
      </div>
    </StyledBox>
  );
};

const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <Grid {...args}>
      <Row>
        <Col size={6}>
          <Box size={6} />
        </Col>
        <Col size={6}>
          <Box size={6} />
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <Box size={2} />
        </Col>
        <Col size={7}>
          <Box size={7} />
        </Col>
      </Row>
      <Row>
        <Col offset={4} size={8}>
          <Box offset={4} size={8} />
        </Col>
      </Row>
    </Grid>
  );
};

export const GridTemplate = Template.bind({});
