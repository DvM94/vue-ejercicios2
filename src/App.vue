<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/ejercicio1">Ejercicio 1</router-link> |
    <router-link to="/ejercicio2">Ejercicio 2</router-link> |
    <router-link to="/ejercicio3">Ejercicio 3</router-link> |
    <router-link to="/ejercicio4">Ejercicio 4</router-link> |
    <router-link to="/ejercicio5">Ejercicio 5</router-link> |
    <router-link to="/ejercicio6">Ejercicio 6</router-link> |
    <router-link to="/ejercicio7">Ejercicio 7</router-link> |
    <router-link to="/ejercicio8">Ejercicio 8</router-link> |
    <router-link to="/ejercicio9">Ejercicio 9</router-link> |
    <router-link to="/ejercicio10">Ejercicio 10</router-link> |
    <router-link to="/storage">Storage</router-link> |
    <router-link to="/tinymce">TinyMCE</router-link>
  </div>
  <LoginBox2 />
  <router-view/>
</template>

<script>
import LoginBox2 from "@/components/LoginBox2.vue"

export default {
  components:{
    LoginBox2
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 30px 5px 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #47b0e0;
    }
  }
}
</style>
