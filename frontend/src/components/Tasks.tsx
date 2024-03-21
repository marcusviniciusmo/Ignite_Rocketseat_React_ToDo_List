import EmptyIcon from '../assets/clipboard.svg';
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

      <div className={styles.content}>
        <img src={EmptyIcon} alt="Clipboard" />
        <div>
          <span>Você ainda não tem tarefas cadastradas</span><br/>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>
    </div>
  )
};