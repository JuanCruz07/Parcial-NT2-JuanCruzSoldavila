<template>
  <section class="src-components-tareas">

    <div class="jumbotron m-3">
      <h1>Tareas</h1>
      <hr />
      <vue-form :state="formState" @submit.prevent="enviar()">

        <validate tag="div">
          <label for="tarea" class="mt-3">Tareas</label>
          <input
            type="text"
            class="form-control"
            id="tarea"
            name="tarea"
            autocomplete="off"
            v-model.trim="formData.tarea"
            :maxlength="descMax"
            :minlength="descMin"
            required
          />
          <field-messages name="tarea" show="$dirty">      
            <div slot="required" class="alert alert-danger my-1">Campo tarea requerido</div> 
            <div slot="minlength" class="alert alert-danger my-1">Se deben ingresar como mínimo {{descMin}} caracteres</div>
            <div v-if="formData.tarea.length == descMax" class="alert alert-danger my-1">Máximo de caracteres alcanzados ({{descMax}})</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="nombre" class="mt-3">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="nombre"
            name="nombre"
            autocomplete="off"
            v-model.trim="formData.nombre"
            required
          />
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
          </field-messages>
        </validate>

        <validate tag="div">
          <label for="email" class="mt-3">Correo Electrónico</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            autocomplete="off"
            v-model="formData.email"            
            required
          />
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger my-1">Campo Correo Electrónico requerido</div>
            <div slot="email" class="alert alert-danger my-1">Correo Electrónico no válido</div>
          </field-messages>
        </validate>

      <br>
        <button class="btn btn-success mt-3" type="submit" :disabled="formState.$invalid">Agregar Tarea</button>
      </vue-form>
    </div>
    
    <p>Respuestas Multiple-Choice: 1-C, 2-C, 3-C, 4-B, 5-A, 6-B, 7-D, 8-D, 9-A, 10-B</p>
      
    <ListaTareas />

  </section>

</template>

<script lang="js">

 import { urlTareas } from '../url'
 import ListaTareas from './ListaTareas.vue'

  export default  {
    name: 'src-components-tareas',
    components: {
      ListaTareas
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getDatosIniciales(),
        descMin: 10,
        descMax: 50
      }
    },
    methods: {
      getDatosIniciales(){
        return {
          tarea: '',
          nombre: '',
          email: ''
        }
      },
      enviar() {
        this.axios.post(urlTareas, this.formData, {
          'content-type' : 'application/json'
        })
        .then( res => {
          console.log(res.data)
          this.formData = this.getDatosIniciales()
          this.formState._reset()
          this.getTareas()
        })
        .catch(error => {
          console.log('ERROR POST', error)
        })
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-formulario {
}
</style>

