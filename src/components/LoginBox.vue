<template>
  <div v-if="loginOk" class="prueba">
    <Xinput id="x1" label="Nombre" regExp="^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{3,}$" />
    <Xinput
      id="x2" label="Contraseña" regExp="^[a-zA-ZÀ-ÿ0-9\u00f1\u00d1\s]{6,}$" />
    <button @click="login">Entrar</button>
  </div>
  <div v-else>
    <div class="card">
      <img src="@/assets/me.png" alt="Avatar" class="avatar" />
      <p>Nombre: {{ name }}</p>
    </div>
    <button @click="unlogin">Desconectar</button>
  </div>
</template>

<script>
import { ref } from "vue";
import Xinput from "@/components/Xinput.vue";

export default {
  name: "LoginBox",
  components: {
    Xinput,
  },
  props: {
    userName: String,
    userPassword: String,
  },
  setup(props) {
    let userName = props.userName;
    let name = ref();
    let userPassword = props.userPassword;
    let loginOk = ref(true);

    const login = () => {
      if (x1.lastChild.value.toLowerCase() == userName.toLowerCase() && x2.lastChild.value == userPassword) {
        name.value = userName;
        loginOk.value = false;
      }
    };

    const unlogin = () => {
      loginOk.value = true;
    };

    return {
      login,
      unlogin,
      loginOk,
      name,
    };
  },
};
</script>

<style lang="scss">
.card{
  width: 300px;
  margin: 1em auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #47b0e0;
  background-color: #47afe00e;
  .avatar {
    padding: 10px;
    width: 60px;
  }
  p{
    width: 160px;
  }
}
</style>