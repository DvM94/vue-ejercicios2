<template>
  <div class="gallery">
    <button @click="moverAtras">&lt;</button>
    <img :src="images[order]" alt="foto" class="image" />
    <button @click="moverAlante">></button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Gallery",
  props: {
    images: Array,
  },
  setup(props) {
    let order = ref(0);

    let moverAtras = () => {
      if (order.value > 0) order.value--;
    };
    let moverAlante = () => {
      if (order.value < props.images.length - 1) order.value++;
    };

    return {
      order,
      moverAtras,
      moverAlante,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 2px;
  }
  .image {
    width: 120px;
    min-width: 120px;
    height: 120px;
    min-height: 100px;
    object-fit: cover;
    object-position: center;
    box-shadow: 3px 3px 4px black;
  }
}
</style>