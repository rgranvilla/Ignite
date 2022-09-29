import { ButtonHTMLAttributes, ReactElement } from 'react';

import styles from './IconButton.module.css';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactElement;
}

function IconButton({ label, icon, ...props }: IIconButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {label}
      {icon}
    </button>
  );
}

export { IconButton };
