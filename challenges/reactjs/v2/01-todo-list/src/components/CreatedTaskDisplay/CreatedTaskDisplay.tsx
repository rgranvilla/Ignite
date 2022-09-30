import styles from './CreatedTaskDisplay.module.css';

interface ICreatedTaskDisplayProps {
  amountTask: number;
}

function CreatedTaskDisplay({ amountTask }: ICreatedTaskDisplayProps) {
  return (
    <div className={styles.wrapper}>
      <strong>Tarefas criadas</strong>
      <div className={styles.counterWrapper}>{amountTask}</div>
    </div>
  );
}

export { CreatedTaskDisplay };
