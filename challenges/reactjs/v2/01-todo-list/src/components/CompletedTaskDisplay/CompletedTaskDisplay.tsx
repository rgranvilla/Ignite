import styles from './CompletedTaskDisplay.module.css';

interface ICompletedTaskDisplayProps {
  amountCompleted: number;
  amountTask: number;
}

function CompletedTaskDisplay({
  amountCompleted,
  amountTask,
}: ICompletedTaskDisplayProps) {
  return (
    <div className={styles.wrapper}>
      <strong>Concluídas</strong>
      {amountTask === 0 ? (
        <div className={styles.counterWrapper}>{amountTask}</div>
      ) : (
        <div className={styles.counterWrapper}>
          {amountCompleted} de {amountTask}
        </div>
      )}
    </div>
  );
}

export { CompletedTaskDisplay };
