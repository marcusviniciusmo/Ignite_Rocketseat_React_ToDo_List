import { useState } from 'react';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import { Task } from './Tasks';
import styles from './NewTask.module.css';

interface NewTaskProps {
  tasks: Task[];
  setTasks: Function;
};

export function NewTask({ tasks, setTasks }: NewTaskProps) {
  const [newTask, setNewTask] = useState<string>('');

  const handleNewTask = () => {
    setTasks([...tasks, {
      id: tasks.length + 1,
      description: newTask,
      status: 'created'
    }]);
    setNewTask('');
  };


  return (
    <div className={styles.newTask}>
      <input
        type="text"
        className={styles.newTaskInput}
        placeholder='Adicione uma nova tarefa'
        maxLength={100}
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button className={styles.newTaskButton} onClick={handleNewTask}>
        <span className={styles.newTaskButtonLabel}>Criar</span>
        <AddCircleOutlineOutlined />
      </button>
    </div>
  )
};