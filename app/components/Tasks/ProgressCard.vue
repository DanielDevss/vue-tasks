<script lang="ts" setup>
import type { progressMessage } from '~/types';

interface Props {
  progress: number
  progressLabel: string
  progressMessage: progressMessage
  totalAll: number,
  totalPending: number
  totalComplete: number
}

const { totalPending, totalAll, totalComplete } = defineProps<Props>()

const chips = computed(() => [
  { label: 'Pendientes', quantity: totalPending, color: 'dark' },
  { label: 'Completas', quantity: totalComplete, color: 'success' },
  { label: 'Todas', quantity: totalAll, color: 'primary' }
])

</script>

<template>
  <v-card title="Progreso de actividades" variant="elevated">
    <v-card-item>
      <!-- Mensajes de animo -->
      <v-alert :title="progressMessage.title" :text="progressMessage.message">
        <template v-slot:prepend>
          <v-progress-circular :color="progressMessage.color" size="70" width="10" :model-value="progress">{{
            progressLabel }}%</v-progress-circular>
        </template>
      </v-alert>
    </v-card-item>

    <v-card-item>
      <!-- Chips -->
      <v-chip-group>
        <v-chip v-for="tag in chips" density="comfortable" :color="tag.color" variant="flat"
          :text="`${tag.label}: ${tag.quantity}`" />
      </v-chip-group>
    </v-card-item>
  </v-card>
</template>