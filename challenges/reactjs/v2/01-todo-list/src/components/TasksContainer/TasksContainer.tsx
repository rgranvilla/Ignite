import { v4 as uuidV4 } from 'uuid';

import { CompletedTaskDisplay } from '../CompletedTaskDisplay';
import { CreatedTaskDisplay } from '../CreatedTaskDisplay';
import { TasksItem } from '../TasksItem';

import clipboard from '../../assets/clipboard.svg';

import styles from './TasksContainer.module.css';
import { ITasksDTO } from '../../database/dtos/TasksDTO';
import { useEffect, useState } from 'react';

interface ITasksContainerProps {
  tasks: ITasksDTO[];
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

function TasksContainer({ tasks, onDeleteTask, onCompleteTask }: ITasksContainerProps) {
  const [data, setData] = useState<ITasksDTO[]>(tasks);

  useEffect(() => {
    setData(tasks);
  }, [tasks]);

  const amountTask = data.length;
  const amountCompleted = data.filter(({ completed }) => completed).length;

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
          {data.map(({ id, task, completed }: ITasksDTO) => (
            <TasksItem
              completed={completed}
              task={task}
              key={id}
              onDeleteTask={() => {
                onDeleteTask(id);
              }}
              onCompleteTask={() => {
                onCompleteTask(id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export { TasksContainer };
