import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu as MenuComponent } from "./menu";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
  Source,
  DescriptionType,
  Subheading,
} from "@storybook/addon-docs";
import { MenuItem } from "./components/menu-item/menu-item";
import { MenuDivider } from "./components";

export default {
  title: "Component/Menu",
  component: MenuComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Menu</Title>
          <Subtitle>Navigate Menu component</Subtitle>
          <Description>##Overview</Description>
          <Description>`Menu` component is used as a navigation popover component</Description>
          <Description>##Usage</Description>
          <Source language='tsx' code={`import { Menu } from @smart-design/components`} />
          <Description>###Example</Description>

          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {
    children: { type: "symbol" },
  },
} as ComponentMeta<typeof MenuComponent>;

const Template: ComponentStory<typeof MenuComponent> = (args, context) => {
  const { storyId } = context;
  return <MenuComponent {...args} id={`story${storyId}_${args.id}`} />;
};

export const Menu = Template.bind({});

Menu.args = {
  children: (
    <>
      <MenuItem to='test'>Categoria 1</MenuItem>
      <MenuItem to='test'>Teachers</MenuItem>
      <MenuDivider></MenuDivider>
      <MenuItem to='test' disabled>
        Disabled link
      </MenuItem>
      <MenuItem to='test'>Online teaching</MenuItem>
      <MenuItem disabled to='test'>
        Online teaching
      </MenuItem>
      <MenuItem to='test'>Online teaching</MenuItem>
    </>
  ),
  triggerText: "Menu popover",
  id: "menu",
};
