import { useState } from 'react';
import { Header } from './components/Header';
import { TasksContainer } from './components/TasksContainer';

import { ITasksDTO } from './database/dtos/TasksDTO';

import './styles/global.css';
import styles from './App.module.css';

import tasksData from './database/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasksDTO[]>(tasksData);

  function handleSubmitedTask(task: ITasksDTO) {
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleCompleteTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (taskId === task.id) task.completed = !task.completed;
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className={styles.app}>
      <Header onSubmit={(task) => handleSubmitedTask(task)} />
      <div className={styles.wrapper}>
        <TasksContainer
          tasks={tasks}
          onDeleteTask={(id) => handleDeleteTask(id)}
          onCompleteTask={(id) => handleCompleteTask(id)}
        />
      </div>
    </div>
  );
}

export { App };
