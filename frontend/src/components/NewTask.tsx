import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { NewTaskProps } from '../types/NewTask';
import styles from './NewTask.module.css';

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
        <PlusCircle />
      </button>
    </div>
  )
};