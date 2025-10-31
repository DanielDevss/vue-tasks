<script lang="ts" setup>
const collapse = ref(true)
</script>

<template>
  <v-app-bar elevation="2" color="primary" density="default" :collapse="collapse">
    <v-app-bar-title>Tasks<strong>Tasks</strong></v-app-bar-title>
    <template v-slot:prepend>
      <v-btn @click="collapse = !collapse" icon="mdi-menu"></v-btn>
    </template>
    <template v-slot:append>
      <v-btn icon="mdi-home" variant="plain" to="/"></v-btn>
      <v-btn append-icon="mdi-account" variant="plain" to="/" text="LogIn"></v-btn>
    </template>
  </v-app-bar>
</template>
