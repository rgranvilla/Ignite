import { Header } from './components/Header';

import './styles/global.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export { App };
