import React from "react";
import styled from "styled-components";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  PRIMARY_STORY,
  Source,
} from "@storybook/addon-docs";

import { Col as ColumnComponent } from "./index";
import { ColOffset, ColSizes } from "./col.types";

import { Grid } from "../grid";
import { Row } from "../row";

import { noCanvas } from "@helpers";

export default {
  title: "Layout/Grid/Column",
  component: ColumnComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Column</Title>
          <Subtitle>Column layout component</Subtitle>
          <Description>##Overview</Description>
          <Description>
            `Column` component goes inside `Row` component. It is used to determine how much space
            is going to be used by some content inside the row. It goes from `1` to `12` columns
          </Description>
          <Description>##Usage</Description>
          <Source language='js' code={`import { Row, Col } from @smart-design/components`} />
          <Description>###Example</Description>
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
    children: { table: { disabled: true } },
  },
} as ComponentMeta<typeof ColumnComponent>;

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
const Template: ComponentStory<typeof ColumnComponent> = (args) => {
  return (
    <Grid gridRuler>
      <Row noMargin>
        <ColumnComponent {...args}>
          <Box size={args.size} offset={args.offset} />
        </ColumnComponent>
      </Row>
    </Grid>
  );
};

export const Column = Template.bind({});
Column.args = {
  size: 6,
};

Column.parameters = {
  ...noCanvas,
};
