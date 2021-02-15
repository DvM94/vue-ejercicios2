<template>
  <table class="table">
    <thead>
      <tr>
        <th>Concepto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(dato, i) in datos" :key="i">
        <th>{{ dato.concepto }}</th>
        <th>{{ dato.precio }} €</th>
        <th>{{ dato.cantidad }}</th>
        <th>{{ dato.cantidad*dato.precio }} €</th>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="4">TOTAL: {{total}}€</th>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Xtable",
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
      return total
    })

    return {
      datos,
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