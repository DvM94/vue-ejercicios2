<template>
  <h1>Componente Store</h1>
  <input v-model="name" placeholder="Nombre" />
  <input v-model="surname" placeholder="Apellidos" />
  <div>
    <button @click="login">Login</button>
    <button @click="logout" class="button-warning">Logout</button>
    <button @click="aleatorio">Aleatorio</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex"

export default {
  name: "Store",
  props: {},
  setup() {
    const store = useStore()

    let name = ref("")
    let surname = ref("")

    function login(){
      let user = {
        name:name.value,
        surname:surname.value
      }
      store.commit("setUser",user)
    }

    function logout(){
      let user={}
      store.commit("setUser",user)
    }

    function aleatorio(){
      store.dispatch("fetchUsers")
    }

    return {
      name,
      surname,
      login,
      logout,
      aleatorio
    };
  },
};
</script>

<style lang="scss" scoped>
input{
  display: block;
  margin: 10px auto;
}
</style>