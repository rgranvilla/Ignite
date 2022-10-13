import { Meta, StoryObj } from "@storybook/react";
import { CheckboxProps, Checkbox } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    ariaLabel: "Lembrar de mim por 30 dias",
  },
  decorators: [
    (Story) => (
      <div className="flex gap-2 items-center text-gray-200">
        <Story />
        <Text>Lembrar de mim por 30 dias</Text>
      </div>
    ),
  ],
  argTypes: {
    isChecked: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
