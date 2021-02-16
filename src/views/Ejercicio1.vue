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