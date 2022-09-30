import { PlusCircle } from 'phosphor-react';
import { v4 as uuidV4 } from 'uuid';

import styles from './Header.module.css';

import logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { IconButton } from '../IconButton';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ITasksDTO } from '../../database/dtos/TasksDTO';

interface IHeaderProps {
  onSubmit: (task: ITasksDTO) => void;
}

function Header({ onSubmit }: IHeaderProps) {
  const [taskContent, setTaskContent] = useState<string>('');

  function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidV4(),
      task: taskContent,
      completed: false,
    };
    onSubmit(newTask);
  }
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo ToDo List" />
      <form className={styles.addTaskContainer} onSubmit={(event) => handleSubmit(event)}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeTaskText}
          defaultValue={taskContent}
        />
        <IconButton label="Criar" icon={<PlusCircle size={20} />} type="submit" />
      </form>
    </header>
  );
}

export { Header };
