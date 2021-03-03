<template>
  <div class="login">
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
  <div v-if="user.name">
    Usuario:{{user.name}} {{user.surname}}
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex"

export default {
  name: "LoginBox2",
  props: {},
  setup() {
    const store = useStore()
    let email = ref("")
    let password = ref("")
    let user = computed(()=>{
      return store.getters.getUser
    })

    function login(){
      fetch("http://localhost:3000/api/login",{
        method: "POST",
        body: JSON.stringify({
          email: email.value,
          password: password.value
        }),
        headers: {"Content-type":"application/json"}
      })
      .then(resp => resp.json())
      .then(user => {
        if(user!=null) store.commit("setUser",user)
        else store.commit("setUser",{})
      })
    }
    
    return {
      email,
      password,
      login,
      user
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  margin: 10px auto;
  padding: 10px;
  width: 200px;
  border: 2px solid #47b0e0;
  display: grid;
  input{
    margin: 5px 0;
    padding: 5px;
  }
}
</style>