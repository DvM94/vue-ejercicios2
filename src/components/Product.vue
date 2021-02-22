<template>
  <div class="card">
    <p>{{pName}}</p>
    <p>{{pDescription}}</p>
    <p>
      {{pPrice}}€ x 
      <input type="number" v-model="units"> = 
      {{total}}€
    </p>
  </div>
</template>

<script>
import { computed, context, watch } from 'vue'

export default {
  name:"Product",
  props:{
    pName: String,
    pDescription: String,
    pPrice: {default:0},
    units: {default:1},
  },
  setup(props,context){
    const total = computed(()=>{
      return Number(props.pPrice*props.units).toFixed(2)
    })
    
    watch(total,(current, prev)=>{
      context.emit('changePrice',current,prev)
    })

    return{
      total
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  display: block;
  p{
    margin: 10px auto;
    width: 80%;
    input{
      width: 35px;
    }
    &:first-of-type {
      font-weight: 600;
    }
  }
}
</style>