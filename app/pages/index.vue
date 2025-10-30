<script setup lang="ts">
import type { Task } from '~/types';

const dialog = ref()

const { data } = useFetch(`https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=daniel09`, {
    headers: {
        Authorization: `Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd`
    }
})

const deleteTask = () => { }
</script>

<template>

    <v-sheet>
        <v-btn-group>
            <v-btn prepend-icon="mdi-clock-outline">Pendientes</v-btn>
            <v-btn prepend-icon="mdi-check-circle-outline">Completas</v-btn>
            <v-btn prepend-icon="mdi-list-status">Todas</v-btn>
        </v-btn-group>
    </v-sheet>

    <tasks :tasks="data as Task[] ?? []" />

    <v-fab app elevation="2" color="primary" :layout="true" icon="mdi-plus" @click="dialog = true" />

    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title>Nueva tarea</v-card-title>
            <v-container>

                <v-text-field label="Titulo de la tarea" placeholder="Escribe el nombre de la tarea"
                    required></v-text-field>

                <v-row>
                    <v-col>
                        <v-text-field label="Etiquetas" placeholder="Ej.: #house #school"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field type="date" label="Fecha de vencimiento" name="due-date"
                            placeholder="Escribe tus etiquetas con #"></v-text-field>
                    </v-col>
                </v-row>

                <v-textarea label="¿De que es tu terea?" placeholder="Escribe o describe la tarea."
                    required></v-textarea>

                <v-textarea label="Comentarios" placeholder="Escribe tus comentarios"
                    prepend-icon="mdi-message-reply-text"></v-textarea>

                <v-card-actions>
                    <v-btn @click="dialog = false" type="button" variant="tonal" text="Cerrar"
                        append-icon="mdi-close" />
                    <v-btn color="primary" variant="flat" type="submit" text="Guardar tarea"
                        append-icon="mdi-plus"></v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
    </v-dialog>

</template>

<style></style>