import { Header } from './components/Header';

import './styles/global.css';
import styles from './App.module.css';
import { TasksContainer } from './components/TasksContainer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}>
        <TasksContainer />
      </div>
    </div>
  );
}

export { App };
