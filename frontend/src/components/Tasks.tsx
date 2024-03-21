import { useState } from 'react';
import { NewTask } from './NewTask';
import { Empty } from './Empty';
import styles from './Tasks.module.css';

export interface Task {
  id: number;
  description: string;
  status: 'created' | 'done' | 'deleted';
};

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div>
      <NewTask tasks={tasks} setTasks={setTasks} />

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

        <>
          {
            tasks.length > 0
              ? tasks.map(task => {
                return <>{task.description}</>
              })
              : <Empty />
          }
        </>
      </div>
    </div>
  )
};