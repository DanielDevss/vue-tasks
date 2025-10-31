import { toast } from "vuetify-sonner";
import { service } from "~/services/taskServices";

const useTasksCreate = () => {
  const pending = ref<boolean>(false);

  const handleSubmit = async (formData: any) => {
    try {
      await service.createTask(formData);
      toast.success("La tarea se guardo correctamente");
      navigateTo("/");
    } catch (error) {
      toast.error("Ocurrio un error al guardar");
    }
  };

  return { handleSubmit, pending };
};

export default useTasksCreate;
