import { MapPin } from 'phosphor-react';

import { LocationButtonContainer } from './styles';

function LocationButton() {
  return (
    <LocationButtonContainer>
      <MapPin size={22} weight="fill" />
      <span>Porto Alegre, RS</span>
    </LocationButtonContainer>
  );
}

export { LocationButton };
