import { CompletedTaskDisplay } from '../CompletedTaskDisplay';
import { CreatedTaskDisplay } from '../CreatedTaskDisplay';
import { TasksItem } from '../TasksItems';

import clipboard from '../../assets/clipboard.svg';

import styles from './TasksContainer.module.css';

function TasksContainer() {
  let amountTask = 15;
  let amountCompleted = 11;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <CreatedTaskDisplay amountTask={amountTask} />
        <CompletedTaskDisplay amountCompleted={amountCompleted} amountTask={amountTask} />
      </div>
      {amountTask === 0 ? (
        <div className={styles.tasksContent}>
          <div className={styles.noTasks}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.tasksWrapper}>
          <TasksItem checked />
          <TasksItem />
          <TasksItem checked />
        </div>
      )}
    </div>
  );
}

export { TasksContainer };
