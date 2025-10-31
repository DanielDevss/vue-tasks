<script lang="ts" setup>
import { VSonner } from "vuetify-sonner";
import Navbar from "~/components/navigation/Navbar.vue";
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
  <VSonner position="top-right" expand />
</template>

<style></style>