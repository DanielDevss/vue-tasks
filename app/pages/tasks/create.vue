<script lang="ts" setup>
import useTasksCreate from '~/composable/useTasksCreate';

const { handleSubmit } = useTasksCreate()

</script>

<template>
    <v-container max-width="750px">
        <header class="header">
            <h1>Nueva tarea</h1>
        </header>
        <v-divider class="mb-5" />
        <TasksTaskForm @submit="handleSubmit" />

    </v-container>
</template>

<style></style>