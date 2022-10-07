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
import { useEffect } from 'react';

const createAddressFormSchema = yup.object({
  paymentMethod: yup.string().required('Você deve selecionar uma forma de pagamento'),
  address: yup.object().when('paymentMethod', {
    is: 'Credit',
    then: yup.object({
      cep: yup.string().required('Este campo é obrigatório!'),
      street: yup.string().required('Este campo é obrigatório!'),
      number: yup.string().required('Este campo é obrigatório!'),
      complement: yup.string(),
      district: yup.string().required('Este campo é obrigatório!'),
      city: yup.string().required('Este campo é obrigatório!'),
      state: yup.string().required('Este campo é obrigatório!'),
    }),
  }),
});

//TODO: https://github.com/rgranvilla/acme-manager-app/blob/master/src/components/Forms/EditPatientForm/index.tsx linha 168
//TODO: INSERIR MASCARAS NOS INPUTS

function Checkout() {
  const { register, handleSubmit, formState } = useForm<IPaymentDTO>({
    resolver: yupResolver(createAddressFormSchema),
  });
  const { errors } = formState;

  const handleCreateOrder: SubmitHandler<IPaymentDTO> = (values) => {
    console.log(values);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
              <Input
                remWidth={12.5}
                placeholder="CEP"
                required
                // error={errors.payment?.address?.cep}
                {...register('address.cep')}
              />
            </RowContainer>
            <RowContainer>
              <Input
                remWidth={35}
                placeholder="Rua"
                required
                // error={errors.payment?.address?.street}
                {...register('address.street')}
              />
            </RowContainer>
            <RowContainer>
              <Input
                remWidth={12.5}
                type="text"
                placeholder="Número"
                required
                // error={errors.payment?.address?.number}
                {...register('address.number')}
              />
              <Input
                remWidth={21.75}
                type="text"
                placeholder="Complemento"
                optional
                // // error={errors.payment?.address?.complement}
                {...register('address.complement')}
              />
            </RowContainer>
            <RowContainer>
              <Input
                remWidth={12.5}
                type="text"
                placeholder="Bairro"
                required
                // // error={errors.payment?.address?.district}
                {...register('address.district')}
              />
              <Input
                remWidth={17.25}
                type="text"
                placeholder="Cidade"
                required
                // // error={errors.payment?.address?.city}
                {...register('address.city')}
              />
              <Input
                remWidth={3.75}
                type="text"
                placeholder="UF"
                required
                // // error={errors.payment?.address?.state}
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
