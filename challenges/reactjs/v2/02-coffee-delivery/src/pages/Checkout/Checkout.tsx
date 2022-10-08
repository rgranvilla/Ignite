import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Cart } from '../../components/Cart';
import { Input } from '../../components/Input';
import { IPaymentDTO } from '../../reducers/reducer';

import {
  AddressHeaderContent,
  CheckoutContainer,
  FormAddressContainer,
  FormCheckoutContainer,
  FormPaymentContainer,
  HeaderContainer,
  HeaderContent,
  HeaderSubtitle,
  HeaderTitle,
  RadioButtonWrapper,
  RadioGroupContainer,
  RowContainer,
  TitleWrapper,
} from './styles';
import { KeyboardEvent, useContext, useEffect, useState } from 'react';
import { inputMask } from '../../utils/maskPatterns';
import { InputWithCallback } from '../../components/Input/Input';
import { brasilApi } from '../../services/brasilApi';
import { OrderContext } from '../../contexts/OrderContext';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface IApiAddressDTO {
  cep: string;
  city: string;
  neighborhood: string;
  service: string;
  state: string;
  street: string;
}

const createAddressFormSchema = yup.object({
  paymentMethod: yup.string().required('Você deve selecionar uma forma de pagamento'),
  address: yup.object().when('paymentMethod', {
    is: 'Credit',
    then: yup.object({
      cep: yup.string().required('Este campo é obrigatório!'),
      street: yup.string().required('Este campo é obrigatório!'),
      number: yup.string().required('Este campo é obrigatório!'),
      complement: yup.string(),
      neighborhood: yup.string().required('Este campo é obrigatório!'),
      city: yup.string().required('Este campo é obrigatório!'),
      state: yup.string().required('Este campo é obrigatório!'),
    }),
  }),
});

function Checkout() {
  const { saveNewOrder } = useContext(OrderContext);
  const { register, handleSubmit, formState, setValue, resetField, setError } =
    useForm<IPaymentDTO>({
      resolver: yupResolver(createAddressFormSchema),
    });
  const { errors } = formState;

  async function handleGetAddress(cep: string) {
    try {
      const response = await brasilApi.get(`/cep/v1/${cep}`);
      const { street, neighborhood, city, state }: IApiAddressDTO = response.data;
      setValue('address.street', street, { shouldValidate: true });
      setValue('address.neighborhood', neighborhood, { shouldValidate: true });
      setValue('address.city', city, { shouldValidate: true });
      setValue('address.state', state, { shouldValidate: true });

      document.getElementById('numberField')?.focus();
    } catch (error) {
      const { message } = error as AxiosError;
      console.error(message);
    }
  }

  function resetFields() {
    resetField('address.street');
    resetField('address.number');
    resetField('address.complement');
    resetField('address.neighborhood');
    resetField('address.city');
    resetField('address.state');
  }

  const [crtlPressed, setCrtlPressed] = useState<boolean>(false);

  function handleResetForm(event: KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'ControlLeft' || event.code === 'ControlRight')
      setCrtlPressed(true);

    if (crtlPressed && event.code === 'KeyX') resetFields();

    if (event.code === 'Backspace' || event.code === 'Delete') resetFields();
  }

  const navigate = useNavigate();

  const handleCreateOrder: SubmitHandler<IPaymentDTO> = (values) => {
    try {
      saveNewOrder(values);
      navigate('/checkout/success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateOrder)}>
      <FormCheckoutContainer>
        <TitleWrapper>Complete seu pedido</TitleWrapper>

        <FormAddressContainer>
          <header>
            <MapPinLine size={22} />
            <AddressHeaderContent>
              <h1>Endereço de Entrega</h1>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </AddressHeaderContent>
          </header>
          <div className="addressForm">
            <RowContainer>
              <InputWithCallback
                mask={inputMask.cep}
                remWidth={12.5}
                placeholder="CEP"
                required
                error={errors.address?.cep}
                {...register('address.cep')}
                callback={(cep) => {
                  handleGetAddress(cep);
                }}
                lengthUnmaskedValueConditionToCallback={8}
                onKeyDown={handleResetForm}
              />
            </RowContainer>
            <RowContainer>
              <Input
                remWidth={35}
                placeholder="Rua"
                required
                error={errors.address?.street}
                {...register('address.street')}
              />
            </RowContainer>
            <RowContainer>
              <Input
                id="numberField"
                remWidth={12.5}
                type="text"
                placeholder="Número"
                required
                error={errors.address?.number}
                {...register('address.number')}
              />
              <Input
                remWidth={21.75}
                type="text"
                placeholder="Complemento"
                optional
                error={errors.address?.complement}
                {...register('address.complement')}
              />
            </RowContainer>
            <RowContainer>
              <Input
                remWidth={12.5}
                type="text"
                placeholder="Bairro"
                required
                error={errors.address?.neighborhood}
                {...register('address.neighborhood')}
              />
              <Input
                remWidth={17.25}
                type="text"
                placeholder="Cidade"
                required
                error={errors.address?.city}
                {...register('address.city')}
              />
              <Input
                remWidth={3.75}
                type="text"
                placeholder="UF"
                required
                error={errors.address?.state}
                {...register('address.state')}
              />
            </RowContainer>
          </div>
        </FormAddressContainer>
        <FormPaymentContainer>
          <HeaderContainer>
            <CurrencyDollar size={22} />
            <HeaderContent>
              <HeaderTitle>Pagamento</HeaderTitle>
              <HeaderSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </HeaderSubtitle>
            </HeaderContent>
          </HeaderContainer>

          <RadioGroupContainer>
            <label>
              <input
                type="radio"
                value="Credit"
                {...register('paymentMethod', { required: true })}
              />
              <RadioButtonWrapper className="box">
                <span>
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </span>
              </RadioButtonWrapper>
            </label>

            <label>
              <input
                type="radio"
                value="Debit"
                {...register('paymentMethod', { required: true })}
              />
              <RadioButtonWrapper className="box">
                <span>
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </span>
              </RadioButtonWrapper>
            </label>

            <label>
              <input
                type="radio"
                value="Money"
                {...register('paymentMethod', { required: true })}
              />
              <RadioButtonWrapper className="box">
                <span>
                  <Money size={16} />
                  DINHEIRO
                </span>
              </RadioButtonWrapper>
            </label>
          </RadioGroupContainer>
        </FormPaymentContainer>
      </FormCheckoutContainer>
      <Cart onSubmit={() => {}} />
    </CheckoutContainer>
  );
}

export { Checkout };
