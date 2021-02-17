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
  </div>
  <div v-if="municipio" class="meteocard">
    <div class="prevision">
      <h2>{{ infomuni.datos.stateSky.description }}</h2>
      <h2>{{ infomuni.datos.stateSky.id }}</h2>
      <img :src="`/imgweather/${infomuni.datos.stateSky.id}.jpg`" :alt="infomuni.datos.stateSky.description" />
    </div>
    <div class="datos">
      <p>Temperatura actual :{{ infomuni.datos.temperatura_actual }}ºC</p>
      <ul>
        <li>Máxima:{{ infomuni.datos.temperaturas.max }}ºC</li>
        <li>Mínima:{{ infomuni.datos.temperaturas.min }}ºC</li>
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
    let provincia = ref("");
    let provincias = reactive([]);
    let municipio = ref("");
    let municipios = reactive([]);
    let infomuni = reactive({});

    fetch("https://raw.githubusercontent.com/IagoLast/pselect/master/data/provincias.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          provincias.push(element);
        });
      });

    const cargarMunicipios = () => {
      fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
        .then((res) => res.json())
        .then((data) => {
          municipios.splice(0)
          data.municipios.forEach((element) => {
            municipios.push(element);
          });
        });
    };

    const cargarInfo = () => {
      fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios/${municipio.value}`)
        .then((res) => res.json())
        .then((data) => {
          infomuni.datos = data
        });
    };

    return {
      provincia,
      provincias,
      municipio,
      municipios,
      cargarMunicipios,
      cargarInfo,
      infomuni,
    };
  },
};
</script>

<style lang="scss" scoped>
.seleccion {
  padding-bottom: 30px;
  select {
    width: 120px;
    border: none;
    border-bottom: 2px solid black;
  }
}
.meteocard {
  padding: 20px;
  border: 2px solid #47b0e0;
  background-color: #47afe00e;
  .prevision {
    display: flex;
    justify-content: space-around;
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