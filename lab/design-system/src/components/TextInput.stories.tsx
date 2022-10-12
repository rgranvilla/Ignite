import { useArgTypes } from "@storybook/api";
import { Meta, StoryObj } from "@storybook/react";
import { FieldError } from "react-hook-form";
import { Envelope } from "phosphor-react";

import { TextInput, TextInputRootProps } from "./TextInput";

const testError = { message: "Teste de exibição de erro" } as FieldError;

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Error error={testError} />,
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address" />,
  },
};
