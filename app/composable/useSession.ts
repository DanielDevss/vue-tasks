// composables/useSession.ts
export const useSession = () => {
  const username = ref<string>("daniel09");

  const changeUsername = () => {
    if (import.meta.client) {
      localStorage.setItem("username", username.value);
    }
    reloadNuxtApp();
  };

  onMounted(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      username.value = storedUsername;
    } else {
      localStorage.setItem("username", "daniel09");
    }
  });

  return { username, changeUsername };
};

export default useSession;
