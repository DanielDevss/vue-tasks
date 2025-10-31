import { getTasks } from "~/services/taskServices";
import type { Task } from "~/types";

const useTasks = () => {
  const pending = ref(true);
  const tasks = ref<Task[]>([]);

  const fetchTasks = async () => {
    pending.value = true;
    try {
      tasks.value = await getTasks();
    } finally {
      pending.value = false;
    }
  };

  return {
    fetchTasks,
    tasks,
    pending,
  };
};

export default useTasks;
