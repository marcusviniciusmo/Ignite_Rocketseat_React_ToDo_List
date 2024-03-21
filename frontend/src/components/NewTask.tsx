import { AddCircleOutlineOutlined } from '@mui/icons-material';
import styles from './NewTask.module.css';

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        className={styles.newTaskInput}
        placeholder='Adicione uma nova tarefa'
      />
      <button className={styles.newTaskButton}>
        <span className={styles.newTaskButtonLabel}>Criar</span>
        <AddCircleOutlineOutlined />
      </button>
    </div>
  )
};