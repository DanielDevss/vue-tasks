<script lang="ts" setup>
import type { FormBodyTask, TaskDetail } from '~/types';

interface Props {
  data?: TaskDetail
  edit?: boolean
}
const props = defineProps<Props>()

const emit = defineEmits<{
  submit: [formData: typeof form.value]
}>()

const handleSubmit = () => {
  emit('submit', form.value)
}

defineExpose({
  submit: handleSubmit
})

const form = ref({
  title: props.data?.title ?? "",
  tags: props.data?.tags ?? "",
  due_date: props.data?.due_date ?? '',
  description: props.data?.description ?? '',
  comments: props.data?.comments ?? '',
  is_completed: Boolean(props.data?.is_completed) ?? false,
})


</script>

<template>
  <form @submit.prevent="handleSubmit">
    <v-text-field v-model="form.title" name="title" label="Titulo de la tarea"
      placeholder="Escribe el nombre de la tarea"></v-text-field>
    <v-row>
      <v-col>
        <v-text-field v-model="form.tags" name="tags" label="Etiquetas"
          placeholder="Ej.: Escuela, Examen"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="form.due_date" type="date" label="Fecha de vencimiento" name="due_date"></v-text-field>
      </v-col>
    </v-row>

    <v-textarea v-model="form.description" name="description" label="¿De que es tu terea?"
      placeholder="Escribe o describe la tarea."></v-textarea>

    <v-textarea v-model="form.comments" name="comments" label="Comentarios" placeholder="Escribe tus comentarios"
      prepend-icon="mdi-message-reply-text"></v-textarea>

    <div v-if="edit">
      <v-switch v-model="form.is_completed" label="Marcar como completa" name="is_completed">
      </v-switch>
    </div>
    <footer class="mt-3">
      <v-btn to="/" class="me-2" prepend-icon="mdi-close" variant="tonal" text="Cancelar"></v-btn>
      <v-btn prepend-icon="mdi-plus" color="primary" variant="flat" text="Guardar" type="submit"></v-btn>
    </footer>
  </form>
</template>