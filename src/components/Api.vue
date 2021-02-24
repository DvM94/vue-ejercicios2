<template>
  <h1>API</h1>
  <input type="text" v-model="nombre" placeholder="Nombre">
  <input type="text" v-model="apellido" placeholder="Apellido">
  <button @click="enviar">Guardar</button>
  <div v-if="consulta.datos">
    <p>{{consulta.datos.respuesta}}</p>
    <div v-if="consulta.datos.errors">
      <p class="warning">{{consulta.datos.errors.name}}</p>
      <p class="warning">{{consulta.datos.errors.surname}}</p>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Api",
  props: {},
  setup() {
    let consulta = reactive({})
    let nombre = ref("")
    let apellido = ref("")

    const enviar = () => {
      fetch("http://localhost:3000/api/nuevo",{
        method: "POST",
        body:JSON.stringify({name: nombre.value, surname: apellido.value}),
        headers: {"Content-type":"application/json"}
      })
        .then(resp=>resp.json())
        .then(datos=>{
          consulta.datos=datos
        })
    }

    return {
      consulta,
      nombre,
      apellido,
      enviar
    }
  }
}
</script>

<style lang="scss" scoped>
input{
  margin: 10px;
  width: 100px;
}
.warning{
  color: red;
}
</style>