<template>
  <h1>Carrito del super</h1>
  <Product v-for="(articulo,i) in articulos" :key="i" :pName="articulo.nombre" :pDescription="articulo.descripcion" :pPrice="articulo.precio" :pImages="articulo.imagenes" @changePrice="recalculate"/>
  <p>TOTAL: <span>{{total}}</span>€</p>
</template>

<script>
import Product from "@/components/Product.vue"
import {ref} from "vue"

export default {
  name:"Carrito",
  components:{
    Product
  },
  props:{},
  setup(){
    const articulos=[
      {nombre:'Cerillas',descripcion:'Cerillas fuertes',precio:'2.20',imagenes:["/products/cerillas1.jpg","/products/cerillas2.jpg","/products/cerillas3.jpg"]},
      {nombre:'Zapatos',descripcion:'Zapatos bonitos',precio:'12.90',imagenes:["/products/zapatos1.jpg","/products/zapatos2.jpg","/products/zapatos3.jpg"]},
      {nombre:'Martillo',descripcion:'Herramienta',precio:'8.50',imagenes:["/products/martillo1.jpg","/products/martillo2.jpg"]}
    ]

    let total=ref(0)

    articulos.forEach(art=>total.value+=Number(art.precio))
    total.value=Math.round(total.value*100)/100
    
    function recalculate(current,prev){
      total.value+=(current-prev)
      total.value=Math.round(total.value*100)/100
      return total
    }

    return{
      articulos,
      recalculate,
      total
    }
  }
}
</script>

<style>

</style>