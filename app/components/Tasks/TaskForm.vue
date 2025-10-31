<script lang="ts" setup></script>

<template>
  <v-text-field label="Titulo de la tarea" placeholder="Escribe el nombre de la tarea" required></v-text-field>

  <v-row>
    <v-col>
      <v-text-field label="Etiquetas" placeholder="Ej.: #house #school"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field type="date" label="Fecha de vencimiento" name="due-date"
        placeholder="Escribe tus etiquetas con #"></v-text-field>
    </v-col>
  </v-row>

  <v-textarea label="¿De que es tu terea?" placeholder="Escribe o describe la tarea." required></v-textarea>

  <v-textarea label="Comentarios" placeholder="Escribe tus comentarios"
    prepend-icon="mdi-message-reply-text"></v-textarea>
</template>
