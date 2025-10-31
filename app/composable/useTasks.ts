import { service } from "~/services/taskServices";
import { caculatePercent, getMessageProgress } from "~/utils/utils";
import type { Task } from "~/types";

const useTasks = () => {
  const loading = ref(true);
  const loadingAction = ref(false);
  const tasks = ref<Task[]>([]);

  // ACCIONES
  // region Obtener tareas
  const fetchTasks = async () => {
    loading.value = true;
    try {
      tasks.value = await service.getTasks();
    } finally {
      loading.value = false;
    }
  };

  // region Toggle progress tarea
  const toggleTask = async (id: number) => {
    try {
      await service.toggleTask(id);
      await fetchTasks();
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  };

  // region Eliminar tarea
  const deleteTask = async (id: number) => {
    if (id) {
      loadingAction.value = true;
      await service.deleteTask(id);
      loadingAction.value = false;
      fetchTasks();
    }
  };

  /** PARAMETROS UTILES */
  const allTasks = computed(() => tasks.value);
  const pendingTasks = computed(() =>
    allTasks.value.filter((task) => !task.is_completed)
  );
  const completeTasks = computed(() =>
    allTasks.value.filter((task) => task.is_completed)
  );
  const percentProgress = computed(() =>
    parseFloat(
      caculatePercent(
        allTasks.value.length ?? 0,
        completeTasks.value.length ?? 0
      )
    )
  );
  const percentProgressLabel = computed(
    () => percentProgress.value.toString().split(".")[0]
  );
  const progressMessage = computed(() =>
    getMessageProgress(percentProgress.value, allTasks.value.length ?? 0)
  );

  // Iniciador de fetch
  onMounted(() => {
    fetchTasks();
  });

  return {
    fetchTasks,
    allTasks,
    completeTasks,
    pendingTasks,
    percentProgress,
    percentProgressLabel,
    progressMessage,
    loadingAction,
    loading,
    deleteTask,
    toggleTask,
  };
};

export default useTasks;
