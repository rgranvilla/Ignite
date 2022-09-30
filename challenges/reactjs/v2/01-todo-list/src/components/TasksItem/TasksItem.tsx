import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';

import styles from './TasksItem.module.css';

interface ITaskItemProps {
  completed?: boolean;
  task: string;
  onDeleteTask: () => void;
  onCompleteTask: (completed: boolean) => void;
}

function TasksItem({
  completed = false,
  task,
  onDeleteTask,
  onCompleteTask,
}: ITaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask();
  }

  function handleCompletedSwitcher() {
    onCompleteTask(!completed);
  }

  return (
    <div className={styles.container}>
      <div>
        <button
          className={
            completed ? styles.selectButtonChecked : styles.selectButtonUnchecked
          }
          onClick={() => handleCompletedSwitcher()}
        >
          <Check size={14} />
        </button>
      </div>
      <div className={styles.content}>
        <p className={completed ? styles.contentChecked : styles.contentUnchecked}>
          {task}
        </p>
      </div>
      <div>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => handleDeleteTask()}
        >
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}

export { TasksItem };
