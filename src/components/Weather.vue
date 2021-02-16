<template>
  <h1>El tiempo en tu provincia</h1>
  <div class="seleccion">
    Provincia:
    <select v-model="provincia" @change="cargarMunicipios(provincia)">
      <option v-for="(provi, i) in provincias" :key="i" :value="provi.id">
        {{ provi.nm }}
      </option>
    </select>
    Municipio:
    <select v-model="municipio">
      <option v-for="(provi, i) in municipios" :key="i" :value="provi.id">
        {{ provi.nm }}
      </option>
    </select>
  </div>
  <p>{{municipio}}</p>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Weather",
  props: {},
  setup() {
    let provincia = ref()
    let provincias = reactive([])
    let municipio = ref()
    let municipios = reactive([])
    
    fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
      .then(res => res.json())
      .then(data => {
        data.forEach(element=>{
          provincias.push(element)
        })
    })

  const cargarMunicipios = (prov) => {
    fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/municipios.json")
      .then(res => res.json())
      .then(data => {
        while(municipios.length>0) municipios.splice(0,1)
        let mun = data.filter(m=>m.id.startsWith(prov)==true)
        mun.forEach(element=>{
          municipios.push(element)
        })
    })
  }

    return {
      provincia,
      provincias,
      municipio,
      municipios,
      cargarMunicipios
    };
  },
};
</script>

<style lang="scss" scoped>
.seleccion{
  padding: 15px;
  select {
    width: 120px;
    border: none;
    border-bottom: 2px solid black;
  }
}

</style>