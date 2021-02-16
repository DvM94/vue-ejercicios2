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

<style lang="scss">
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  img{
    width: 300px;
  }
}
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
.button-warning{
  background-color: red;
}
.warning{
  color: red;
}
</style>
