import { ReactNode } from 'react';
import { DataContent, ImageWrapper, OrderInfoContainer } from './styles';

interface OrderInfoType {
  bgColor: 'purple' | 'yellow' | 'yellowDark';
  icon: ReactNode;
  data: ReactNode;
}

function OrderInfoItem({ bgColor, icon, data }: OrderInfoType) {
  return (
    <OrderInfoContainer>
      <ImageWrapper bgColor={bgColor}>{icon}</ImageWrapper>
      <DataContent>{data}</DataContent>
    </OrderInfoContainer>
  );
}

export { OrderInfoItem };
