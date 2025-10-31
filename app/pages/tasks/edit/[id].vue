<script lang="ts" setup>
import useTaskEdit from '~/composable/useTaskEdit';


const { task, loading, handleSubmit } = useTaskEdit()

</script>

<template>
    <v-article v-if="loading">
        <p>Cargando ...</p>
    </v-article>
    <v-article v-else-if="!loading && task">
        <v-container max-width="750px">
            <header class="header">
                <h1>Editar tarea</h1>
            </header>
            <v-divider class="mb-5" />
            <TasksTaskForm edit @submit="handleSubmit" :data="task!" />
        </v-container>
    </v-article>
    <v-article v-else>
        <h1>Not Found</h1>
    </v-article>
</template>

<style></style>