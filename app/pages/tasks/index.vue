<script setup lang="ts">
// Redirige a home cuando entras a /tasks/
definePageMeta({
  middleware: () => {
    return navigateTo('/')
  }
})
</script>