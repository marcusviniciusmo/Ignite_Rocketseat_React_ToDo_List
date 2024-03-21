import { Empty } from './Empty';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <label>Tarefas criadas</label>
          <span className={styles.counter}>0</span>
        </div>
        <div className={styles.done}>
          <label>Concluídas</label>
          <span className={styles.counter}>0</span>
        </div>
      </div>

      <Empty />
    </div>
  )
};