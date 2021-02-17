<template>
  <h1>Elige un usuario</h1>
  <select v-model="usuario">
    <option v-for="(usuario, i) in usuarios" :key="i" :value="usuario.nombre">
      {{ usuario.nombre }}
    </option>
  </select>
  <div class="card">
    <img :src="`/img/${usuario}.png`" alt="Avatar" class="avatar" />
    <p>Nombre: {{ usuario }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SelectCard",
  props: {},
  setup() {
    const usuarios = [
      { nombre: "Estela", id: "0" },
      { nombre: "Daniel", id: "1" },
      { nombre: "Yessara", id: "2" },
      { nombre: "Nuria", id: "3" },
      { nombre: "Ana M", id: "4" },
    ]

    let usuario = ref("Daniel")
   
    return {
      usuarios,
      usuario
    };
  },
};
</script>