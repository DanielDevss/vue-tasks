<script lang="ts" setup>
import useSession from "~/composable/useSession"
const collapse = ref(true)
const dialog = ref(false)
const { username, changeUsername } = useSession()
</script>

<template>
  <v-app-bar elevation="2" color="primary" density="default" :collapse="collapse">
    <v-app-bar-title>Tasks<strong>Tasks</strong></v-app-bar-title>
    <template v-slot:prepend>
      <v-btn @click="collapse = !collapse" icon="mdi-menu"></v-btn>
    </template>
    <template v-slot:append>
      <v-btn icon="mdi-home" variant="plain" to="/"></v-btn>
      <v-btn @click="dialog = true" append-icon="mdi-account" variant="plain" to="/" text="LogIn"></v-btn>
    </template>
  </v-app-bar>

  <v-dialog v-model="dialog" max-width="400">
    <v-card title="Cambio de usuario" subtitle="Reescribe el usuario para ingresar el tuyo">
      <template v-slot:default>
        <div class="px-5">
          <v-text-field v-model="username" variant="outlined" placeholder="Ej. daniel09"
            label="Nombre de usuario"></v-text-field>
        </div>
      </template>
      <template v-slot:actions>
        <v-btn text="Cancelar"></v-btn>
        <v-btn text="Cambiar" @click="changeUsername" variant="flat" color="primary"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>