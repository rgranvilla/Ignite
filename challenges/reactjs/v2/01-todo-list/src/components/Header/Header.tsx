import styles from './Header.module.css';

import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo ToDo List" />
    </header>
  );
}

export { Header };
