import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../component";

import * as stylex from "@stylexjs/stylex";
import { buttonTokens } from "../component/Button/Button.stylex";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

const customStyle = stylex.create({
  test: {
    minWidth: "500px",
  },
});

export const OverrideStyle: Story = {
  render: () => {
    return <Button style={customStyle.test} >Custom Style</Button>;
  },
};



export const OverrideTheme: Story = {
  render: () => {
    const DARK = '@media (prefers-color-scheme: dark)';

    const overrideStyles = stylex.createTheme(buttonTokens, {
      defaultBackgroundColor: {default: 'red', [DARK]: 'white'},
      defaultBackgroundColorHover: {default: 'pink', [DARK]: 'white'}
    });

    return <Button theme={overrideStyles}>Custom Theme</Button>;
  },
};
