<script setup lang="ts">
import type { Task } from "~/types";
import { normalize } from "~/utils/utils"

interface Props {
  tasks: Task[];
  loadingAction: boolean
  search?: string,
  deleteTask: (id: number) => void
  toggleTask: (id: number) => void
}

const { deleteTask, tasks, search } = defineProps<Props>();

// Acciones para eliminar

const dialogDelete = ref()
const taskId = ref<number>()
const openDelete = (id: number) => {
  taskId.value = id
  dialogDelete.value = true
}
const handleDelete = async () => {
  await deleteTask(Number(taskId.value))
  dialogDelete.value = false
}

// Filtrado de buscador
const tasksFiltered = computed(() => {
  const query = normalize(search || "")
  if (!query) tasks
  return tasks.filter((task) => normalize(task.title).includes(query))
})

// Paginacion
const page = ref(1)
const itemsPerPage = 4
const totalPages = computed(() =>
  Math.ceil(tasksFiltered.value.length / itemsPerPage)
)
const tasksPaginated = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage
  return tasksFiltered.value.slice(start, end)
})

watch(() => search, () => {
  page.value = 1
})

</script>

<template>
  <div v-if="tasksPaginated.length > 0">
    <v-list lines="two" density="comfortable">
      <!-- Elemento de lista -->
      <v-list-item v-for="task in tasksPaginated" :key="task.id" :title="task.title"
        :subtitle="task.due_date ?? 'No hay cierre'" rounded variant="tonal" class="mb-2">
        <template v-slot:prepend>
          <!-- Icono de izquierdo estado -->
          <v-icon :color="task.is_completed ? 'success' : 'gray'"
            :icon="task.is_completed ? 'mdi-check-circle' : 'mdi-clock-outline'" size="30">
          </v-icon>
        </template>
        <template v-slot:append>
          <!-- Botones de accion -->
          <v-btn-group variant="flat" divided density="comfortable">
            <v-btn @click="toggleTask(task.id)" :icon="task.is_completed ? 'mdi-close' : 'mdi-check'"
              :color="task.is_completed ? 'black' : 'green'" variant="plain" />
            <v-btn :to="`/tasks/edit/${task.id}`" icon="mdi-pencil" color="primary" variant="plain" />
            <v-btn @click="openDelete(task.id)" icon="mdi-delete" color="red" variant="plain" />
            <v-btn icon="mdi-arrow-right" color="primary" variant="plain" :href="`/tasks/${task.id}`" />
          </v-btn-group>
        </template>
      </v-list-item>
    </v-list>
  </div>

  <!-- Empty -->
  <div v-else>
    <h3>No hay tareas</h3>
    <!-- Buscador no encontro nada -->
    <p v-if="tasks.length > 0 && tasksPaginated.length == 0">
      No hay similitud en la busqueda
    </p>
    <!-- No se han agregado tareas -->
    <p v-else>
      La sección se encuentrá vacía
    </p>
  </div>

  <!-- Paginacion -->
  <v-pagination v-model="page" :length="totalPages"></v-pagination>

  <!-- Alerta de eliminar -->
  <v-dialog v-model="dialogDelete" persistent max-width="400">
    <v-card prepend-icon="mdi-alert" title="Eliminar tarea">
      <template v-slot:text>
        Si eliminas está tarea no la podrás recuperar. Si deseas continuar presiona en <strong>Eliminar</strong>
      </template>
      <template v-slot:actions>
        <v-btn :loading="loadingAction" @click="dialogDelete = false" text="Cancelar" variant="tonal"
          prepend-icon="mdi-close"></v-btn>
        <v-btn :loading="loadingAction" text="Eliminar" variant="flat" color="red" prepend-icon="mdi-delete"
          @click="handleDelete"></v-btn>
      </template>
    </v-card>
  </v-dialog>

</template>