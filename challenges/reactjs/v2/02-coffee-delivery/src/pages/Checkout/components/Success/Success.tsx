import { SuccessContainer } from './styles';

import deliveryman from '../../../../assets/deliveryman.svg';
import { SuccessResumeCard } from './components/SuccessResumeCard';

function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <SuccessResumeCard />
      </div>
      <img src={deliveryman} />
    </SuccessContainer>
  );
}

export { Success };
