import { useEffect, useState } from 'react';
import { NewTask } from './NewTask';
import { Empty } from './Empty';
import styles from './Tasks.module.css';
import { Task } from './Task';

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

  const handleStatusDoneTask = (task: Task) => {
    const indexTaskToChange = tasks.findIndex(t => t.id === task.id);
    const statusToChange = task.status;

    const updatedTasks = [...tasks];
    updatedTasks[indexTaskToChange] = {
      ...updatedTasks[indexTaskToChange],
      status: statusToChange === 'created' ? 'done' : 'created'
    };

    setTasks(updatedTasks);
  };

  const handleCustomSort = (a: Task, b: Task) => {
    if (a.status === 'created' && b.status !== 'created') {
      return -1;
    };
    if (a.status !== 'created' && b.status === 'created') {
      return 1;
    };
    if (a.status === 'done' && b.status !== 'done') {
      return -1;
    };
    if (a.status !== 'done' && b.status === 'done') {
      return 1;
    };
    return a.id - b.id
  };

  const sortedTasks = tasks.filter(t => t.status !== 'deleted').sort(handleCustomSort);

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
            {
              doneTasks > 0
                ? <span className={styles.counter}>{doneTasks} de {createdTask}</span>
                : <span className={styles.counter}>{doneTasks}</span>
            }
          </div>
        </div>

        <>
          {
            sortedTasks.length > 0
              ? sortedTasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onChangeStatusTask={handleStatusDoneTask}
                  />
                )
              })
              : <Empty />
          }
        </>
      </div>
    </div>
  )
};