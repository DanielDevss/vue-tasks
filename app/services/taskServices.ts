import type { Task } from "~/types";

const uri = import.meta.env.VITE_URI_BASE;
const defaultToken = import.meta.env.VITE_DEFAULT_TOKEN;
const bearerToken = import.meta.env.VITE_BEARER_TOKEN;

export const getTasks = async (myToken?: string): Promise<Task[]> => {
  const { data } = await useFetch(
    `${uri}tasks?token=${myToken ?? defaultToken}`,
    {
      headers: {
        Authentication: `Bearer ${bearerToken}`,
      },
    }
  );

  const tasks = data.value || [];

  return tasks as Task[];
};
