import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { OrderInfoItem } from '../OrderInfoItem';

import { ResumeCardContainer, ResumeCardContent } from './styles';

function SuccessResumeCard() {
  return (
    <ResumeCardContainer>
      <ResumeCardContent>
        <OrderInfoItem
          bgColor="purple"
          icon={<MapPin weight="fill" size={16} />}
          data={
            <>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <span>Cartão de Crédito</span>
            </>
          }
        />
      </ResumeCardContent>
    </ResumeCardContainer>
  );
}

export { SuccessResumeCard };
