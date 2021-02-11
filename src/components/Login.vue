<template>
  <div v-if="!login" class="prueba">
    <Xinput label="Nombre" regExp="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,}$" />
    <Xinput label="Contraseña" regExp="^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1\s]{6,}$" />
    <button @click="comprobar">Entrar</button>
  </div>
  <div v-else>
    <h1>Estás dentro</h1>
    <button @click="desconectar">Desconectar</button>
  </div>
  
</template>

<script>
import { ref } from "vue";
import Xinput from "@/components/Xinput.vue";

export default {
  name: "Login",
  components: {
    Xinput,
  },
  props: {
    userName: String,
    userPassword: String,
  },
  setup(props) {
    let name = "pepe"
    let password = "1234"
    let login = ref(false)

    const comprobar = () => {
      if (name == props.userName && password == props.userPassword)
        login.value = true
    };

    const desconectar = () => {
      login.value = false
    }

    return {
      comprobar,
      desconectar,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>