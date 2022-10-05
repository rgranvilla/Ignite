import { CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';
import { useState } from 'react';

import { IconButton } from '../../../IconButton';

import {
  FormPaymentContainer,
  HeaderContainer,
  HeaderContent,
  HeaderSubtitle,
  HeaderTitle,
  PaymentSelectButtonsContainer,
} from './styles';

function FormPayment() {
  const [selectedButton, setSelectedButton] = useState({
    credit: false,
    debit: false,
    money: false,
  });

  function handleSelectButton(value: string) {
    let selected = {
      credit: false,
      debit: false,
      money: false,
    };

    switch (value) {
      case 'credit': {
        selected.credit = true;
        break;
      }
      case 'debit': {
        selected.debit = true;
        break;
      }
      case 'money': {
        selected.money = true;
        break;
      }
      default:
        null;
    }

    setSelectedButton(selected);
  }

  return (
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
      <PaymentSelectButtonsContainer>
        <IconButton
          icon={<CreditCard size={16} />}
          label="Cartão de crédito"
          isSelected={selectedButton.credit}
          onClick={() => handleSelectButton('credit')}
        />
        <IconButton
          icon={<Bank size={16} />}
          label="Cartão de débito"
          isSelected={selectedButton.debit}
          onClick={() => handleSelectButton('debit')}
        />
        <IconButton
          icon={<Money size={16} />}
          label="Dinheiro"
          isSelected={selectedButton.money}
          onClick={() => handleSelectButton('money')}
        />
      </PaymentSelectButtonsContainer>
    </FormPaymentContainer>
  );
}

export { FormPayment };
