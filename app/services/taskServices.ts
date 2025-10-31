import type { Task, TaskDetail } from "~/types";

// region Config

const uri = import.meta.env.VITE_URI_BASE;
const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
const headers = {
  Authorization: `Bearer ${bearerToken}`,
};

const getDefaultToken = (): string => {
  if (import.meta.client) {
    return localStorage.getItem("username") ?? "daniel09";
  }
  return "daniel09";
};

// region Obtener tareas

const getTasks = async () => {
  const token = getDefaultToken();
  const data = await $fetch<Task[]>(`${uri}?token=${token}`, {
    headers,
  });

  return data;
};

// region Obtener tarea

const getTask = async (id: any) => {
  const token = getDefaultToken();
  const data = await $fetch<TaskDetail[]>(`${uri}/${id}?token=${token}`, {
    headers,
  });
  return data;
};

// region Guardar Tarea

const updateTask = async (formData: any, id: any) => {
  try {
    const body = new URLSearchParams();
    const token = getDefaultToken();

    body.append("title", formData.title);
    body.append("tags", formData.tags);
    body.append("description", formData.description);
    body.append("comments", formData.comments);
    body.append("is_completed", formData.is_completed ? "1" : "0");
    body.append("token", token);
    if (formData.due_date) body.append("due_date", formData.due_date);

    console.log(body);

    await $fetch(`${uri}/${id}`, {
      method: "PUT",
      body: body.toString(),
      headers: {
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    throw error;
  }
};
// region Guardar Tarea

const createTask = async (formData: any) => {
  try {
    const body = new URLSearchParams();
    const token = getDefaultToken();

    body.append("title", formData.title);
    body.append("tags", formData.tags);
    body.append("description", formData.description);
    body.append("comments", formData.comments);
    body.append("is_completed", "0");
    body.append("token", token);
    if (formData.due_date) body.append("due_date", formData.due_date);

    await $fetch(`${uri}`, {
      method: "POST",
      body: body.toString(),
      headers: {
        ...headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    throw error;
  }
};

// region Eliminar Tarea

const deleteTask = async (id: number) => {
  try {
    const token = getDefaultToken();
    const data = await $fetch(`${uri}/${id}?token=${token}`, {
      method: "DELETE",
      headers,
    });
    console.log(data);
  } catch (error) {
    throw error;
  }
};

// region Completar tarea

const toggleTask = async (id: any) => {
  try {
    const taskRequest = await getTask(id);
    if (!taskRequest || taskRequest.length <= 0) {
      return;
    }
    const taskData = taskRequest[0];
    const status = !taskData?.is_completed;
    const body = { ...taskData, is_completed: status };

    await updateTask(body, id);
  } catch (error) {
    throw error;
  }
};

export const service = {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTask,
};
