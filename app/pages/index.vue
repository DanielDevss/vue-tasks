<script setup lang="ts">
import useTasks from "~/composable/useTasks";
const { fetchTasks, pending, tasks } = useTasks()

// TODO: VER POR QUE FALLA TASKS

const currentTab = ref("Pendientes");

const getTasksByTab = (tabValue: string) => {
  if (tabValue === 'pending') return tasks.value.filter(task => !task.is_completed);
  if (tabValue === 'completed') return tasks.value.filter(task => task.is_completed);
  return tasks.value;
};

const tabs = [
  { label: "Pendientes", icon: "mdi-clock-outline", value: "pending" },
  { label: "Completas", icon: "mdi-check-circle-outline", value: "completed" },
  { label: "Todas", icon: "mdi-list-status", value: "all" },
];

onUnmounted(() => {
  fetchTasks()
})
</script>

<template>
  <!-- Header -->

  <v-row>
    <v-col>
      <header>

        <h1>Lista de tareas</h1>

        <v-text-field type="search" variant="outlined" density="comfortable" clearable label="Buscar tarea"
          prepend-inner-icon="mdi-magnify" placeholder="Buscar . . ."></v-text-field>

        <!-- Marcadores Tabs -->

        <v-tabs v-model="currentTab">
          <v-tab v-for="tab in tabs" :text="tab.label" :value="tab.value" :prepend-icon="tab.icon">
          </v-tab>
        </v-tabs>
      </header>

      <v-divider class="mb-2" />

      <!-- Tareas -->

      <section v-if="status !== 'pending'">
        <v-tabs-window v-model="currentTab">
          <v-tabs-window-item v-for="tab in tabs" :value="tab.value">
            <tasks :tasks="getTasksByTab(tab.value)" />
          </v-tabs-window-item>
        </v-tabs-window>
      </section>
      <section v-else>
        <v-spinner />
      </section>
    </v-col>
    <v-col>
      <TasksProgressCard :tasks="allTasks" />
    </v-col>
  </v-row>

  <!-- Botton: Crear Tarea -->

  <v-fab app elevation="2" color="primary" :layout="true" icon="mdi-plus" to="/tasks/create" />

  <!-- Ventana: Formulario -->
</template>

<style></style>
