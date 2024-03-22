export type Task = {
  id: number;
  description: string;
  status: 'created' | 'done' | 'deleted';
};

export type TaskProps = {
  task: Task;
  onChangeStatusTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};