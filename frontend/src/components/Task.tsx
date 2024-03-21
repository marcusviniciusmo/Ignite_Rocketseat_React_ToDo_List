import Check from '../assets/check.svg';
import Trash from '../assets/trash.svg';
import styles from './Task.module.css';

interface TaskProps {
  taskDescription: string;
};

export function Task({ taskDescription }: TaskProps) {
  return (
    <div className={styles.task}>
      <img
        className={styles.check}
        src={Check}
        title='Marcar/Desmarcar tarefa como feita'
      />
      <div className={styles.taskDescription}>
        <span>{taskDescription}</span>
      </div>
      <img
        className={styles.trash}
        src={Trash}
        title='Remover tarefa'
      />
    </div>
  )
};