<template>
  <h1>Store</h1>
  <p>Contador: <input type="number" v-model="cont"></p>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue"
import { useStore } from "vuex"

export default {
  name:"Store",
  props:{},
  setup(){
    console.log(useStore().state)
    let cont = computed(()=>{
      return useStore().state.contador
    })
    return{
      cont
    }
  }
}
</script>

<style lang="scss" scoped>

</style>