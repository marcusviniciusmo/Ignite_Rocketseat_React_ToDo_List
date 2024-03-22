import { useState } from 'react';
import Unchecked from '../assets/unchecked.svg';
import Checked from '../assets/checked.svg';
import Trash from '../assets/trash.svg';
import styles from './Task.module.css';

interface TaskProps {
  task: {
    id: number;
    description: string;
    status: 'created' | 'done' | 'deleted';
  };
  onChangeStatusTask: Function;
  onDeleteTask: Function;
};

export function Task({ task, onChangeStatusTask, onDeleteTask }: TaskProps) {
  const [doneTask, setDoneTask] = useState<boolean>(false);

  const toggleCheckTask = () => {
    setDoneTask(!doneTask);
    onChangeStatusTask(task);
  };

  const handleTaskToDelete = () => {
    onDeleteTask(task);
  };

  return (
    <div className={styles.task}>
      <img
        className={styles.check}
        src={doneTask ? Checked : Unchecked}
        title='Marcar/Desmarcar tarefa como feita'
        onClick={toggleCheckTask}
      />
      <div className={styles.taskDescription}>
        <span className={doneTask ? styles.doneTask : ''}>{task.description}</span>
      </div>
      <img
        className={styles.trash}
        src={Trash}
        title='Remover tarefa'
        onClick={handleTaskToDelete}
      />
    </div>
  )
};