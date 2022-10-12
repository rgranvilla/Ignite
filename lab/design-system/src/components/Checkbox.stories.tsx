import { Meta, StoryObj } from "@storybook/react";
import { CheckboxProps, Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    isChecked: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
