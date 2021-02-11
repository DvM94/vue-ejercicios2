<template>
  <div class="ejercicio">
    <Login userName="pepe" userPassword="1234"/>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  components: {
    Login,
  },
};
</script>