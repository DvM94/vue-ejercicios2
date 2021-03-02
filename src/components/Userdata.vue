<template>
<div class="card">
  <h3>Bienvenido {{user.name}} {{user.surname}}</h3>
  <p v-if="totalCarrito>0">Total carrito: {{totalCarrito}}€</p>
</div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"

export default {
  name:"Userdata",
  props:{},
  setup(){
    const store = useStore()
    let user = computed(()=>{
      return store.getters.getUser
    })
    let totalCarrito = computed(()=>{
      return store.state.totalCarrito
    })

    return{
      user,
      totalCarrito
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  display: block;
  padding-bottom: 15px;
  p{
    display: inline;
  }
}
</style>