<script lang="ts" setup>
import type { Task } from '~/types';

  interface Props {
    tasks: Task[]
  }

  const {tasks} = defineProps<Props>()

  const totalTasks = tasks.length
  const totalPending = tasks.filter(task => !task.is_completed).length
  const totalComplete = tasks.filter(task => task.is_completed).length

  const percentComplete = totalTasks > 0 ? (totalComplete / totalTasks) * 100 : 0;
  const percentFormat = new Intl.NumberFormat('es-MX', {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 2
  }).format(percentComplete)
  const percentProgressLabel = (percentFormat.split('.')[0] || 0) as number;

  const configDataProgress = () => {
    let config = {
      color: 'amber',
      title: 'Tenemos mucho trabajo 😖',
      message: 'Nos hace falta mucho por delante... Venga!!!, sigamos adelante!!!'
    };
    if(percentProgressLabel > 50) {
      config.title = "Bien!, ahí vamos! 😏"
      config.color = "yellow";
      config.message = `Vamos...!!!, ya estamos llevas más de la mitad..!!!, sigue asi.`
    }
    else if (percentProgressLabel > 80) {
      config.title = "Wow! casi lo logramos 😉"
      config.color = "primary"
      config.message = "Estamos a practicamente nada... Tu pueedeees!!"
    }
    else if (percentProgressLabel === 100) {
      config.title = "Lo conseguimoos..!!! 🥳"
      config.color = "success"
      config.message = "Tus actividades están completas. Esto es genial!!!"
    }
    else if(totalTasks === 0) {
      config.color = "gray"
      config.message = "No tienes tareas aún, agrega tareas para medir tu progreso."
    }

    return config
  }

  const dataProgress = configDataProgress()

  const chips = [
    {key: 1, label: 'Completados', color: 'success', quantity: totalComplete},
    {key: 2, label: 'Pendientes', color: 'yellow', quantity: totalPending},
    {key: 3, label: 'Todos', color: 'primary', quantity: totalTasks},
  ];

</script>

<template>
  <v-card
    title="Progreso de actividades"
    variant="elevated"
  >
    <v-card-item>
      <v-alert :title="dataProgress.title" :text="dataProgress.message">
        <template v-slot:prepend>
      <v-progress-circular :color="dataProgress.color" size="70" width="10" :model-value="percentFormat">{{ percentProgressLabel }}%</v-progress-circular>
    </template>
      </v-alert>
    </v-card-item>

    <v-card-item>
      <v-chip-group>
        <v-chip 
        v-for="tag in chips"
        variant="plain"
          :text="`${tag.label}: ${tag.quantity}`"
        />
      </v-chip-group>
    </v-card-item>
  </v-card>
</template>
