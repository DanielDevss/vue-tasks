import { service } from "~/services/taskServices";
import type { TaskDetail } from "~/types";

const useTaskDetail = () => {
  const route = useRoute();
  const id = route.params.id;

  const task = ref<TaskDetail | null>(null);
  const loading = ref(true);

  const fetchData = async () => {
    loading.value = true;
    try {
      if (id) {
        const data = await service.getTask(id);
        task.value = data[0] ?? null;
      } else {
        throw new Error("No found");
      }
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    if (!id) {
      navigateTo("/");
    }
    fetchData();
  });

  return { loading, task, id };
};

export default useTaskDetail;
