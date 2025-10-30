<script setup lang="ts">
import type { TaskDetail } from '~/types'

const route = useRoute()
const id = route.params.id
const {data, pending} = useFetch(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks/${id}?token=daniel09`, {
  headers: {
        Authorization: `Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd`
    }
})
</script>

<template>
  <v-card>
    <v-card-title>Titulo de la tarea</v-card-title>
    <v-card-subtitle>La tarea esta completa</v-card-subtitle>
    <v-container>
      <ul>
        <v-chip>Working</v-chip>
        <v-chip>Activited</v-chip>
        <v-chip>School</v-chip>
      </ul>
      <div class="mt-6">
        <h2>Detalles de la tarea</h2>
        <x-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorem possimus natus, quod sunt
          ea dicta pariatur mollitia nulla aut quos deserunt, at asperiores vitae illum doloremque fugit corrupti
          ipsa!</x-card-text>
      </div>
    </v-container>
    <v-card-actions>
      <v-btn text="Marcar completa">
      </v-btn>
      <v-btn text="Editar">
      </v-btn>
      <v-btn text="Eliminar">
      </v-btn>
    </v-card-actions>
  </v-card>

  <v-card class="mt-5">
    <v-card-title>Comentarios</v-card-title>
    <v-container>
      <v-textarea placeholder="Escribe tus comentarios"></v-textarea>
    </v-container class="py-0!">
    <v-card-actions>
      <v-btn variant="flat" color="primary" append-icon="mdi-sync">Guardar</v-btn>
    </v-card-actions>
  </v-card>
</template>