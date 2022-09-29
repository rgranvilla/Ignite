import { PlusCircle } from 'phosphor-react';

import styles from './Header.module.css';

import logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { IconButton } from '../IconButton';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo ToDo List" />
      <div className={styles.addTaskContainer}>
        <Input placeholder="Adicione uma nova tarefa" />
        <IconButton label="Criar" icon={<PlusCircle size={20} />} />
      </div>
    </header>
  );
}

export { Header };
