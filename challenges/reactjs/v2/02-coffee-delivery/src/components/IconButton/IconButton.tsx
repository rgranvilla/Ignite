import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconButtonSelectContainer } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function IconButton({ icon, label, isSelected = false, onClick }: IconButtonProps) {
  return (
    <IconButtonSelectContainer isSelected={isSelected} onClick={onClick}>
      {icon}
      {label.toUpperCase()}
    </IconButtonSelectContainer>
  );
}

export { IconButton };
