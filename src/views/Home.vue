<template>
  <div class="home">
    <img alt="My logo" src="../assets/me.png">
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  img{
    width: 300px;
  }
}
</style>
