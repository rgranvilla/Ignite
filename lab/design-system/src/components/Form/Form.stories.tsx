import { Meta, StoryObj } from "@storybook/react";
import { FieldError } from "react-hook-form";
import { Envelope, Dog, IdentificationCard, Lock } from "phosphor-react";

import { FormRootProps, Form } from "./Form";

import Logo from "../../assets/react-2.svg";
import { Heading } from "../Heading";
import { Text } from "../Text";

export default {
  title: "Components/Form",
  component: Form.Root,
  args: {
    children: (
      <Form.Control>
        <Form.TextField
          label="Endereço de e-mail"
          icon={<Envelope />}
          placeholder="Digite seu e-mail"
        />
        <Form.CheckboxField
          ariaLabel="Lembrar de mim por 30 dias"
          label={"Lembrar de mim por 30 dias"}
          isChecked={(res) => {}}
        />
        <Form.SubmitButton label="Entrar na plataforma" />
      </Form.Control>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<FormRootProps>;

export const Default: StoryObj<FormRootProps> = {};

export const InputTextField: StoryObj<FormRootProps> = {
  args: {
    children: (
      <Form.TextField
        label="Input Text Field"
        icon={<Dog />}
        placeholder="Placeholder"
        type="email"
      />
    ),
  },
};

export const InputCPFField: StoryObj<FormRootProps> = {
  args: {
    children: (
      <Form.TextField
        label="CPF"
        icon={<IdentificationCard />}
        placeholder="Digite o CPF"
        type="email"
        mask={"000.000.000-00"}
      />
    ),
  },
};

export const InputCustomMaskField: StoryObj<FormRootProps> = {
  args: {
    children: (
      <Form.TextField
        label="CPF"
        icon={<IdentificationCard />}
        placeholder="Digite o CPF"
        type="email"
        mask={"000.000.000-00"}
      />
    ),
  },
};

export const InputCheckboxField: StoryObj<FormRootProps> = {
  args: {
    children: (
      <Form.CheckboxField
        ariaLabel="Checkbox label text"
        label={"Checkbox label text"}
        isChecked={(res) => {}}
      />
    ),
  },
};

export const FormEmail: StoryObj<FormRootProps> = {
  args: {
    children: (
      <Form.Control>
        <Form.TextField
          label="Endereço de e-mail"
          icon={<Envelope />}
          placeholder="Digite seu e-mail"
          type="email"
        />
        <Form.SubmitButton label="Enviar e-mail" />
      </Form.Control>
    ),
  },
};

const error = {
  type: "value",
  message: "Digite um email válido",
} as FieldError;

export const FormEmailWithError: StoryObj<FormRootProps> = {
  args: {
    children: (
      <Form.Control error={error}>
        <Form.TextField
          label="Endereço de e-mail"
          icon={<Envelope />}
          placeholder="Digite seu e-mail"
          error={error}
          type="email"
        />
        <Form.SubmitButton label="Enviar e-mail" disabled={!!error} />
      </Form.Control>
    ),
  },
};

export const SignInFormExample: StoryObj<FormRootProps> = {
  args: {
    children: (
      <div className="flex w-full justify-center bg-gray-800">
        <div className="flex justify-center w-[460px] rounded m-4 p-8 bg-gray-900">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="h-[120px] w-[120px]">
                <img src={Logo} />
              </div>
              <div className="flex flex-col items-center text-gray-400">
                <Heading size="lg">Ignite Lab</Heading>
                <Text size="lg">Faça login e comece a usar</Text>
              </div>
            </div>
            <Form.Control className="flex flex-col w-full mt-8 gap-8">
              <Form.TextField
                label="Endereço de e-mail"
                icon={<Envelope />}
                placeholder="Digite seu e-mail"
              />
              <div className="flex flex-col gap-3">
                <Form.TextField
                  label="Sua senha"
                  icon={<Lock />}
                  placeholder="*********"
                />
                <Form.CheckboxField
                  ariaLabel="Lembrar de mim por 30 dias"
                  label="Lembrar de mim por 30 dias"
                  isChecked={() => {}}
                />
              </div>
              <Form.SubmitButton label="Entrar na plataforma" />
              <div className="flex flex-col gap-2 items-center -mt-8 underline text-gray-400">
                <Text asChild>
                  <a href="#">Esqueceu sua senha?</a>
                </Text>
                <Text asChild>
                  <a href="#">Não possui conta? Crie uma agora!</a>
                </Text>
              </div>
            </Form.Control>
          </div>
        </div>
      </div>
    ),
  },
};
