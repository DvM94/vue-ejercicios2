<template>
  <div class="contador">
    <h3>El incremento es de {{ incremento }}</h3>
    <p>
      <button @click="restar">Restar</button>
      {{ contador.titulo }}: {{ contador.valor }}
      <button @click="sumar">Sumar</button>
    </p>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Reactividad",
  props: {
    inc: {
      default: 1,
    },
  },
  setup(props) {
    let incremento = parseInt(props.inc);
    let contador = reactive({
      titulo: "Contador",
      valor: 0,
    });

    const sumar = () => {
      contador.valor += incremento;
    };

    const restar = () => {
      contador.valor -= incremento;
    };

    return {
      contador,
      incremento,
      sumar,
      restar,
    };
  },
};
</script>

<style scoped lang="scss">
.contador {
  margin: 10px auto 10px auto;
  width: 75%;
  border: 2px dashed #bbb;
  button {
    margin: 10px 10px;
    background-color: #71c4eb;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    box-shadow: 2px 2px 4px #888;
  }
}
</style>