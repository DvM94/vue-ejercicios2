<template>
  <div class="card">
    <Gallery class="photo" :images="pImages"/>
    <div class="info">
      <p>{{pName}}</p>
      <p>{{pDescription}}</p>
      <p>
        {{pPrice}}€ x 
        <input type="number" v-model="units"> = 
        {{total}}€
      </p>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import Gallery from "@/components/Gallery.vue"

export default {
  name:"Product",
  components:{
    Gallery
  },
  props:{
    pName: String,
    pDescription: String,
    pPrice: String,
    pImages: Array
  },
  setup(props,context){

    let units = ref(1)
    let total = computed(()=>{
      return (props.pPrice*units.value).toFixed(2)
    })
    
    watch(total,(current, prev)=>{
      context.emit('changePrice',current,prev)
    })

    return{
      units,
      total,
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  width: 450px;
  height: 150px;
  .photo{
    width: 45%;
  }
  .info{
    width: 55%;
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
}
</style>