<script lang="ts" setup></script>

<template>
    <v-container max-width="750px">
        <header class="header">
            <h1>Nueva tarea</h1>
            <div>
                <v-btn class="me-2" prepend-icon="mdi-close" variant="tonal" text="Cancel"></v-btn>
                <v-btn prepend-icon="mdi-plus" color="primary" variant="flat" text="Save"></v-btn>
            </div>
        </header>
        <v-divider class="mb-5" />
        <TasksTaskForm />
    </v-container>
</template>

<style>
.header {
    display: flex;
    justify-content: space-between;
}
</style>