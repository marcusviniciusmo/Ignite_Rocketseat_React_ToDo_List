import EmptyIcon from '../assets/clipboard.svg';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.content}>
      <img src={EmptyIcon} alt="Clipboard" />
      <div>
        <span>Você ainda não tem tarefas cadastradas</span><br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
};