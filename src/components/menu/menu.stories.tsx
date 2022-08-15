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
} from "@storybook/addon-docs";
import { MenuItem } from "./components/menu-item/menu-item";
import { MenuDivider } from "./components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Menu",
  component: MenuComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Menu</Title>
          <Subtitle>Navigate Menu component</Subtitle>
          <Description>`Menu` component is used as a navigation popover component</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title='References' />
        </>
      ),
    },
  },
  argTypes: {},
} as ComponentMeta<typeof MenuComponent>;

const Template: ComponentStory<typeof MenuComponent> = (args) => <MenuComponent {...args} />;

export const Menu = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
};
