<template>
  <div class="ejercicio">
    <LoginBox userName="Pepe" userPassword="1234"/>
  </div>
</template>

<script>
import LoginBox from "@/components/LoginBox.vue";

export default {
  components: {
    LoginBox,
  },
};
</script>