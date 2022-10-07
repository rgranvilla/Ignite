import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../../../contexts/OrderContext';
import { IOrderStateDTO } from '../../../../reducers/reducer';
import { OrderInfoItem } from '../OrderInfoItem';

import { ResumeCardContainer, ResumeCardContent } from './styles';

function SuccessResumeCard() {
  const [orderState, setOrderState] = useState<IOrderStateDTO>({
    cart: [],
    payment: {
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
      },
      paymentMethod: '',
    },
    totalCart: 0,
  });
  const { getOrderState } = useContext(OrderContext);

  useEffect(() => {
    setOrderState(getOrderState());
  }, []);

  const { payment } = orderState;
  const { paymentMethod, address } = payment;
  const { street, number, complement, neighborhood, city, state } = address;

  function orderAddress() {
    if (complement === '') return `${street}, ${number}`;

    return `${street}, ${number}, ${complement}`;
  }

  function getPaymentMethod() {
    switch (paymentMethod) {
      case 'Credit':
        return 'Cartão de Crédito';
      case 'Debit':
        return 'Cartão de Débito';
      case 'Dinheiro':
        return 'Dinheiro';
      default:
        return 'Dinheiro';
    }
  }

  return (
    <ResumeCardContainer>
      <ResumeCardContent>
        <OrderInfoItem
          bgColor="purple"
          icon={<MapPin weight="fill" size={16} />}
          data={
            <>
              <p>
                Entrega em <span>{orderAddress()}</span>
              </p>
              <p>
                {neighborhood} - {city}, {state}
              </p>
            </>
          }
        />
        <OrderInfoItem
          bgColor="yellow"
          icon={<Timer weight="fill" size={16} />}
          data={
            <>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </>
          }
        />
        <OrderInfoItem
          bgColor="yellowDark"
          icon={<CurrencyDollar weight="fill" size={16} />}
          data={
            <>
              <p>Pagamento na entrega</p>
              <span>{getPaymentMethod()}</span>
            </>
          }
        />
      </ResumeCardContent>
    </ResumeCardContainer>
  );
}

export { SuccessResumeCard };
