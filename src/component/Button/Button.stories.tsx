import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "..";

import * as stylex from "@stylexjs/stylex";
import { buttonTokens } from "./Button.stylex";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

const customStyle = stylex.create({
  test: {
    width: {
      default: '200px',
      '@media (min-width: 640px)': '100px'
    }
  },
});

export const OverrideStyle: Story = {
  render: () => {
    return <Button style={customStyle.test} >Custom</Button>;
  },
};

export const OverrideTheme: Story = {
  render: () => {
    const overrideStyles = stylex.createTheme(buttonTokens, {
      defaultBackgroundColor: 'rebeccapurple',
      defaultColor: 'white',
      defaultBackgroundColorHover: 'mediumpurple'
    });

    return <Button theme={overrideStyles}>Custom Theme</Button>;
  },
};
