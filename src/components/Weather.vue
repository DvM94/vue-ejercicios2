<template>
  <h1>El tiempo en tu municipio</h1>
  <div class="seleccion">
    Provincia:
    <select v-model="provincia" @change="cargarMunicipios()">
      <option v-for="(provi, i) in provincias" :key="i" :value="provi.id">
        {{ provi.nm }}
      </option>
    </select>
    Municipio:
    <select v-model="municipio" @change="cargarInfo()">
      <option v-for="(muni, i) in municipios" :key="i" :value="muni.COD_GEO">
        {{ muni.NOMBRE }}
      </option>
    </select>
    Filtro:
    <div class="municipios">
      <input type="text" v-model="busqueda" @keyup="cargarMunicipiosFiltro()">
      <ul>
        <li v-for="(muni, i) in municipiosFiltrados" :key="i" @click="elegirMunicipio(muni.COD_GEO)">{{ muni.NOMBRE }}</li>
      </ul>
    </div>
  </div>
  <div v-if="municipio" class="meteocard">
    <div class="prevision">
      <h2>{{ infomuni.prev }}</h2>
      <img :src="`/imgweather/${infomuni.img}.png`" :alt="infomuni.prev" />
    </div>
    <div class="datos">
      <p>Temperatura actual :{{ infomuni.temp }}ºC</p>
      <ul>
        <li>Máxima:{{ infomuni.tempmax }}ºC</li>
        <li>Mínima:{{ infomuni.tempmin }}ºC</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Weather",
  props: {},
  setup() {
    let provincia = ref("")
    let provincias = reactive([])
    let municipio = ref("")
    let municipios = reactive([])
    let municipiosFiltrados = reactive([])
    let infomuni = reactive({})
    let busqueda = ref("")

    fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
      .then((res) => res.json())
      .then((data) => {
          provincias.push(...data)
      })

    const cargarMunicipios = () => {
      fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
        .then((res) => res.json())
        .then((data) => {
          municipios.splice(0)
          municipios.push(...data.municipios)
        })
    }

    const cargarMunicipiosFiltro = () => {
      municipiosFiltrados.splice(0)
      let filtro = municipios.filter(muni=>{
        return RegExp(busqueda.value,"i").test(muni.NOMBRE)
        })
      municipiosFiltrados.push(...filtro)
    }

    const elegirMunicipio = (muni) => {
      municipio.value = muni
      cargarInfo()
    }

    const cargarInfo = () => {
      fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios/${municipio.value}`)
        .then((res) => res.json())
        .then((data) => {
          infomuni.img = data.stateSky.id
          infomuni.prev = data.stateSky.description
          infomuni.temp = data.temperatura_actual
          infomuni.tempmax = data.temperaturas.max
          infomuni.tempmin = data.temperaturas.min
        });
    };

    return {
      provincia,
      provincias,
      municipio,
      municipios,
      municipiosFiltrados,
      cargarMunicipios,
      cargarMunicipiosFiltro,
      elegirMunicipio,
      cargarInfo,
      infomuni,
      busqueda
    };
  },
};
</script>

<style lang="scss" scoped>
.seleccion {
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  select {
    width: 100px;
    border: none;
    border-bottom: 2px solid black;
  }
  .municipios{
    input{
      width: 120px;
    }
    ul{
      border: 1px solid black;
      width: 130px;
      height: 100px;
      padding: 0;
      margin-top: 5px;
      list-style:none;
      overflow: auto;
      li{
        text-align: left;
        font-size: .8rem;
        cursor: pointer;
        &:hover{
          background-color: #ddd;
        }
      }
    }
  }
}
.meteocard {
  padding: 20px;
  border: 2px solid #47b0e0;
  background-color: #47afe00e;
  .prevision {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img {
      width: 150px;
    }
  }
  .datos{
    margin: 0 auto;
    text-align: left;
    width: 200px;
  }
  
}
</style>