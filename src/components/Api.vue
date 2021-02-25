<template>
  <h1>API</h1>
  <input type="text" v-model="nombre" placeholder="Nombre">
  <input type="text" v-model="apellido" placeholder="Apellido">
  <button @click="guardar">Guardar</button>
  <div v-if="consulta.datos" class="mensajes">
    <p>{{consulta.datos.respuesta}}</p>
    <div v-if="consulta.datos.errors">
      <p class="warning">{{consulta.datos.errors.name}}</p>
      <p class="warning">{{consulta.datos.errors.surname}}</p>
    </div>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th class="warning">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, i) in users" :key="i">
        <th>{{user.name}}</th>
        <th>{{user.surname}}</th>
        <th><button class="button-warning" @click="eliminar(user._id)"><i class="fa fa-trash"></i></button></th>
      </tr>
    </tbody>
  </table>
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
    const users = reactive([])

    const listar = () => {
      fetch("http://localhost:3000/api/lista")
        .then(resp=>resp.json())
        .then(datos=>{
          users.splice(0)
          users.push(...datos)
        })
    }

    const guardar = () => {
      fetch("http://localhost:3000/api/nuevo",{
        method: "POST",
        body:JSON.stringify({name: nombre.value, surname: apellido.value}),
        headers: {"Content-type":"application/json"}
      })
        .then(resp=>resp.json())
        .then(datos=>{
          if(!datos.errors){
            nombre.value=""
            apellido.value=""
            listar()
          }
          consulta.datos=datos
        })
    }

    const eliminar = (id) => {
      fetch("http://localhost:3000/api/eliminar",{
        method: "POST",
        body:JSON.stringify({id: id}),
        headers: {"Content-type":"application/json"}
      })
        .then(()=>listar())
    }

    listar()

    return {
      consulta,
      nombre,
      apellido,
      guardar,
      listar,
      eliminar,
      users
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
p{
  margin: 0;
  font-size: 0.9rem;
}
</style>