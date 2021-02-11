<template>
    <h3>El incremento es de {{ incremento }}</h3>
    <p>
      <button @click="restar">Restar</button>
      {{ contador.titulo }}: {{ contador.valor }}
      <button @click="sumar">Sumar</button>
    </p>
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

</style>