import { Envelope, Lock } from "phosphor-react";

import Logo from "./assets/react-2.svg";

import { Form } from "./components/Form";
import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center bg-gray-800">
        <div className="flex justify-center w-[460px] h-fit rounded p-8 bg-gray-900">
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
            <Form.Control className="flex flex-col w-full mt-8 gap-4">
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
            </Form.Control>
            <div className="flex flex-col gap-2 items-center underline text-gray-400">
              <Text asChild size="sm">
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Esqueceu sua senha?
                </a>
              </Text>
              <Text asChild size="sm">
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Não possui conta? Crie uma agora!
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { App };
