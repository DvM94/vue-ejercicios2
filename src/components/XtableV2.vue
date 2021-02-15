<template>
  <Xinput id="concepto" label="Concepto" regExp="[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,}$"/>
  <Xinput id="cantidad" label="Cantidad" regExp="[0-9]+$"/>
  <Xinput id="precio" label="Precio" regExp="[0-9]+([.][0-9]+)?$"/>
  <button @click="agregar">Agregar</button>
  <table class="table">
    <thead>
      <tr>
        <th class="warning">Eliminar</th>
        <th>Concepto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(dato, i) in datos" :key="i">
        <th><button class="button-warning" @click="eliminar(i)">Borrar</button></th>
        <th>{{ dato.concepto }}</th>
        <th>{{ dato.precio }} €</th>
        <th>{{ dato.cantidad }}</th>
        <th>{{ Math.round(dato.cantidad*dato.precio*100)/100 }} €</th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="5">TOTAL: {{total}}€</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { reactive, computed } from "vue";
import Xinput from "@/components/Xinput.vue"
import Xtable from './Xtable.vue';
export default {
  components: { Xtable, Xinput },
  name: "XtableV2",
  props: {},
  setup() {
    const datos = reactive([
      { concepto: "Pantalones vaqueros chico", cantidad: 2, precio: 30.99 },
      { concepto: "Camiseta básica chico", cantidad: 4, precio: 6.99 },
      { concepto: "Pijama unisex", cantidad: 1, precio: 12.5 },
      { concepto: "Deportivas Nike", cantidad: 1, precio: 80 },
    ])
    
    const total = computed(()=>{
      let total=0
      datos.forEach(dato=>total+=dato.cantidad*dato.precio)
      total=Math.round(total*100)/100
      return total
    })

    const agregar=()=>{
        let nuevo={}
        nuevo.concepto=concepto.lastChild.value
        nuevo.cantidad=cantidad.lastChild.value
        nuevo.precio=precio.lastChild.value
        datos.push(nuevo)
        concepto.lastChild.value=""
        cantidad.lastChild.value=""
        precio.lastChild.value=""
    }

    const eliminar=(i)=>{
      datos.splice(i,1)
    }

    return {
      datos,
      agregar,
      eliminar,
      total
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  margin: 20px auto;
  border: 1px solid #ddd;
  border-collapse: collapse;
  th{
    padding: 10px;
  }
  thead{
    border-bottom: 2px solid black;
  }
  tbody {
    font-size: .8rem;
    tr:nth-child(odd) {
      background-color: #f2f2f2;
    }
  }
  tfoot{
    background-color: #47b0e0;
    color: white;
    text-align: right;
  }
}
</style>