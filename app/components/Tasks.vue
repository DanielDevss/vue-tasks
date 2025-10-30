<script setup lang="ts">
import type { Task } from '~/types';

interface Props {
  tasks: Task[]
}

defineProps<Props>()

</script>

<template>
  <v-list lines="two">
    <v-list-item v-for="task in tasks as Task[]" :key="task.id" :title="task.title"
      :subtitle="task.due_date ?? 'No hay cierre'" :to="`tasks/${task.id}`">
      <template v-slot:prepend>
        <v-icon :color="task.is_completed ? 'success' : 'gray'">
          {{ task.is_completed ? 'mdi-check-circle' : 'mdi-clock-outline' }}
        </v-icon>
      </template>
    </v-list-item>
  </v-list>
</template>