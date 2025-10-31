<script setup lang="ts">
import useTasks from "~/composable/useTasks";
const { loading, loadingAction, allTasks, pendingTasks, completeTasks, progressMessage, percentProgress, percentProgressLabel, deleteTask, toggleTask } = useTasks()

const tab = ref("Pendientes");
const search = ref();

const tabs = [
  { label: "Pendientes", icon: "mdi-clock-outline", value: "pending", tasks: pendingTasks },
  { label: "Completas", icon: "mdi-check-circle-outline", value: "completed", tasks: completeTasks },
  { label: "Todas", icon: "mdi-list-status", value: "all", tasks: allTasks },
];


</script>

<template>
  <!-- Header -->

  <v-row>
    <v-col cols="12" md="6">
      <header>

        <h1>Lista de tareas</h1>

        <v-text-field type="search" variant="outlined" density="comfortable" clearable label="Buscar tarea"
          prepend-inner-icon="mdi-magnify" placeholder="Buscar . . ." v-model="search"></v-text-field>

        <!-- Marcadores Tabs -->

        <v-tabs v-model="tab">
          <v-tab v-for="tab in tabs" :text="tab.label" :value="tab.value" :prepend-icon="tab.icon">
          </v-tab>
        </v-tabs>
      </header>

      <v-divider class="mb-2" />

      <!-- Tareas -->

      <section v-if="!loading">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="tab in tabs" :value="tab.value">
            <!-- Lista de tereas -->
            <tasks :toggle-task="toggleTask" :delete-task="deleteTask" :loading-action="loadingAction"
              :tasks="tab.tasks.value" :search="search" />

          </v-tabs-window-item>
        </v-tabs-window>
      </section>
      <section v-else>
        Cargando...
      </section>
    </v-col>
    <v-col>
      <TasksProgressCard :total-pending="pendingTasks.length" :total-complete="completeTasks.length"
        :total-all="allTasks.length" :progress="percentProgress" :progress-label="percentProgressLabel!"
        :progress-message="progressMessage" />
    </v-col>
  </v-row>

  <!-- Botton: Crear Tarea -->

  <v-fab app elevation="2" color="primary" :layout="true" icon="mdi-plus" to="/tasks/create" />

  <!-- Ventana: Formulario -->
</template>

<style></style>