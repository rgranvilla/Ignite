import { Trash, Check } from 'phosphor-react';

import styles from './TasksItem.module.css';

interface ITaskItemProps {
  checked?: boolean;
}

function TasksItem({ checked = false }: ITaskItemProps) {
  return (
    <div className={styles.container}>
      <div>
        <button
          className={checked ? styles.selectButtonChecked : styles.selectButtonUnchecked}
        >
          <Check size={14} />
        </button>
      </div>
      <div className={styles.content}>
        <p className={checked ? styles.contentChecked : styles.contentUnchecked}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident et
          necessitatibus nesciunt officia officiis.
        </p>
      </div>
      <div>
        <button type="button" className={styles.deleteButton}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}

export { TasksItem };
