import { useState } from 'react';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
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
      <div
        title='Marcar/Desmarcar tarefa como feita'
        onClick={toggleCheckTask}
      >
        {
          doneTask
            ? <CheckCircle className={styles.checkedTask} weight="fill" />
            : <Circle className={styles.checkTask} />
        }
      </div>
      <div className={styles.taskDescription}>
        <span className={doneTask ? styles.doneTask : ''}>{task.description}</span>
      </div>
      <div
        title='Remover tarefa'
        onClick={handleTaskToDelete}
      >
        <Trash className={styles.trash} />
      </div>
    </div>
  )
};