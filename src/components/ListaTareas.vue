<template>
  <section class="src-components-lista-tareas">
    <div class="jumbotron m-3">

      <h1>Lista de Tareas</h1>
      <hr />

      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th>Nombre</th>
            <th>E-mail</th>
            <th>Fecha</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tarea, index) in this.$store.state.tareas" :key="index">
            <td scope="row">{{ tarea.id }}</td>
            <td>{{tarea.tarea}}</td>
            <td>{{tarea.nombre}}</td>
            <td>{{tarea.email}}</td>
            <td>{{tarea.createdAt | formatFecha}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-lista-tareas',
    props: [],
    mounted () {
      this.getTareas()
    },
    updated() {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  .src-components-lista-tareas {

  }
</style>
