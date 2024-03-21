import { useEffect, useState } from 'react';
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
  const [createdTask, setCreatedTask] = useState<number>(0);
  const [doneTasks, setDoneTasks] = useState<number>(0);

  useEffect(() => {
    handleCreatedTasks();
    handleDoneTasks();
  }, [tasks]);

  const handleCreatedTasks = () => {
    const createdTasks = tasks.filter(t => t.status !== 'deleted').length;
    setCreatedTask(createdTasks);
  };

  const handleDoneTasks = () => {
    const doneTasks = tasks.filter(t => t.status === 'done').length;
    setDoneTasks(doneTasks);
  };

  return (
    <div>
      <NewTask tasks={tasks} setTasks={setTasks} />

      <div className={styles.tasks}>
        <div className={styles.info}>
          <div className={styles.created}>
            <label>Tarefas criadas</label>
            <span className={styles.counter}>{createdTask}</span>
          </div>
          <div className={styles.done}>
            <label>Concluídas</label>
            <span className={styles.counter}>{doneTasks}</span>
          </div>
        </div>

        <>
          {
            tasks.length > 0
              ? tasks.map(task => {
                return <div key={task.id}>{task.description}</div>
              })
              : <Empty />
          }
        </>
      </div>
    </div>
  )
};