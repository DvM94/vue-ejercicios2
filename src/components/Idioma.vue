<template>
  <h1>Multilang</h1>
  <p>{{saludo}}</p>
  <p>{{adios}}</p>
</template>

<script>
import { ref } from "vue"
import i18next from "i18next"

export default {
  name:"Idioma",
  props:{},
  setup(){
    let saludo = ref(i18next.t("hello"))
    let adios = ref(i18next.t("bye"))
    return{
      saludo,
      adios
    }
  }
}
</script>

<style lang="scss" scoped>

</style>