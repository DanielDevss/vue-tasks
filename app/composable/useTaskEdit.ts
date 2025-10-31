import { toast } from "vuetify-sonner";
import useTaskDetail from "./useTaskDetail";
import { service } from "~/services/taskServices";

const useTaskEdit = () => {
  const { task, loading, id } = useTaskDetail();

  const handleSubmit = async (body: any) => {
    try {
      console.log(body);
      await service.updateTask(body, id);
      toast.success("Se ha actualizado la tarea correctamente");
      navigateTo("/");
    } catch (error) {
      toast.error("Ocurrio un error al actualizar");
    }
  };

  return {
    task,
    loading,
    handleSubmit,
  };
};

export default useTaskEdit;
