<script setup lang="ts">
import useTaskDetail from '~/composable/useTaskDetail';
const { task, loading } = useTaskDetail()
</script>

<template>
  <v-container max-width="768">
    <div v-if="loading">
      Cargando...
    </div>

    <div v-else-if="!loading && !task">
      <h1>Not found</h1>
    </div>

    <article class="task" v-else-if="!loading && task">
      <header>
        <!-- Header -->
        <h1>Detalle de Tarea</h1>
        <p>{{ task.due_date ? task.due_date : "No hay fecha de cierre" }}</p>

        <v-divider class="my-2" />
      </header>
      <!-- Información principal -->
      <section>
        <!-- Información tarea -->
        <v-card variant="flat" density="compact" :title="task.title ?? 'Sin titulo'"
          :append-icon="task.is_completed ? 'mdi-check-circle-outline' : 'mdi-clock-outline'">
          <!-- Descripcion -->
          <v-card-text>{{ task.description.length > 0 ? task.description : "Sin descripción" }}</v-card-text>
          <!-- Comentarios -->
          <v-card-text>
            <h2 class="text-h6">Comentarios:</h2>
            <p>{{ task.comments.length > 0 ? task.comments : "Sin Comentarios" }}</p>
          </v-card-text>
          <!-- Tags -->
          <v-card-item>
            <v-chip-group>
              <v-chip density="compact" v-for="tag in task.tags.trim().split(',')" :text="tag"></v-chip>
            </v-chip-group>
          </v-card-item>
        </v-card>
      </section>
      <!-- Información secundaria -->
      <aside>
        <v-card variant="tonal">
          <v-card-item>
            <ul>
              <li v-if="task.due_date">
                <p><strong>Finaliza el:</strong><br>{{ task.due_date }}</p>
              </li>
              <li>
                <p><strong>Tarea creada el:</strong><br>{{ task.created_at }}</p>
              </li>
              <li>
                <p><strong>Tarea edita el:</strong><br>{{ task.updated_at }}</p>
              </li>
            </ul>
          </v-card-item>
        </v-card>
      </aside>
    </article>
  </v-container>

</template>


<style>
.task {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (min-width:668px) {
  .task {
    display: grid;
    gap: 20px;
    grid-template-columns: auto 250px;
    grid-template-areas: "header header" "section aside";
  }
}


.task header {
  grid-area: header;
}

.task section {
  grid-area: section;
}

.task aside {
  grid-area: aside;
}
</style>