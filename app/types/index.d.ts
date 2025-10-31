// region Tareas

export type Task = {
  id: number;
  title: string;
  is_completed: boolean;
  due_date: string;
};

export type TaskDetail = {
  id: number;
  title: string;
  is_completed: boolean;
  comments: string;
  description: string;
  due_date: string;
  tags: string;
  token: string;
  created_at: string;
  updated_at: string;
};

// region Formularios

export type FormBodyTask = {
  token: string;
  title?: string;
  is_completed: boolean;
  due_date?: strign;
  comments?: string;
  description?: string;
  tags?: string;
};

// region Tarjeta de progreso

export type progressMessage = {
  title: string;
  message: string;
  color: string;
};
