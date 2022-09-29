import styles from './Header.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo ignite" />
      <strong>Ignite Feed</strong>
    </header>
  )
}

export { Header }
