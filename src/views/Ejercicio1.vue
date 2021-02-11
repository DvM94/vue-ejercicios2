<template>
  <div class="ejercicio">
    <Reactividad />
    <Reactividad inc="2" />
    <Reactividad inc="5" />
  </div>
</template>

<script>
import Reactividad from "@/components/Reactividad.vue";

export default {
  components: {
    Reactividad,
  },
};
</script>

<style lang="scss">
.ejercicio {
  margin: 10px auto 10px auto;
  width: 80%;
  border: 2px dashed #bbb;
}
button {
  margin: 10px 10px;
  background-color: #71c4eb;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 2px 4px #888;
}
</style>