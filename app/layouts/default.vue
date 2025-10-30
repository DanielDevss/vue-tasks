<script lang="ts" setup>
import Navbar from '~/components/navigation/Navbar.vue';
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
</template>

<style>

</style>