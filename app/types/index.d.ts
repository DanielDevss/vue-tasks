export type Task  ={
  id: number
  title: string
  is_completed: boolean
  due_date: string
}

export type TaskDetail = {
  id: number
  title: string
  is_completed: boolean
  comments: string
  description: string
  tags: string
  token: string
  created_at: string
  updated_at: string
}