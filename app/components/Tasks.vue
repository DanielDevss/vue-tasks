<script setup lang="ts">
import type { Task } from "~/types";

interface Props {
  tasks: Task[];
}

defineProps<Props>();

const dialogDelete = ref()

</script>

<template>
  <v-list lines="two" density="comfortable">
    <v-list-item v-for="task in tasks as Task[]" :key="task.id" :title="task.title"
      :subtitle="task.due_date ?? 'No hay cierre'" rounded variant="tonal" class="mb-2">
      <template v-slot:prepend>
        <v-icon :color="task.is_completed ? 'success' : 'gray'"
          :icon="task.is_completed ? 'mdi-check-circle' : 'mdi-clock-outline'" size="30">
        </v-icon>
      </template>
      <template v-slot:append>
        <v-btn-group variant="flat" divided density="comfortable">
          <v-btn icon="mdi-check" color="green" variant="plain" :disabled="task.is_completed" />
          <v-btn icon="mdi-pencil" color="primary" variant="plain" />
          <v-btn @click="dialogDelete = true" icon="mdi-delete" color="red" variant="plain" />
          <v-btn icon="mdi-arrow-right" color="primary" variant="plain" :href="`/tasks/${task.id}`" />
        </v-btn-group>
      </template>
    </v-list-item>
  </v-list>

  <v-dialog v-model="dialogDelete" persistent max-width="400">
    <v-card prepend-icon="mdi-alert" title="Eliminar tarea">
      <template v-slot:text>
        Si eliminas está tarea no la podrás recuperar. Si deseas continuar presiona en <strong>Eliminar</strong>
      </template>
      <template v-slot:actions>
        <v-btn @click="dialogDelete = false" text="Cancelar" variant="tonal" prepend-icon="mdi-close"></v-btn>
        <v-btn text="Eliminar" variant="flat" color="red" prepend-icon="mdi-delete"></v-btn>
      </template>
    </v-card>
  </v-dialog>

</template>
