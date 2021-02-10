<template>
  <div class="dato">
    <label v-bind:class="{ verde:color }" for="dato">{{ label }}</label>
    <input name="dato" v-model="dato" v-bind:placeholder="'Introduce tu '+label" @keyup="comprobar"/>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Xinput",
  props: {
    label: String,
    regExp: ""
  },
  setup(props) {
    
    let dato=ref("")
    let color=ref(false)
    const comprobar=()=>{
      if(RegExp(props.regExp).test(dato.value)==true)
        color.value=true
      else
        color.value=false
    }

    return{
      dato,
      color,
      comprobar
    }
  },
};
</script>

<style scoped lang="scss">
.dato {
  margin: 10px auto 10px auto;
  width: 75%;
  border: 2px dashed #bbb;
  padding: 25px;
  label{
    background-color: rgb(223, 26, 26);
    color: white;
    border-radius: 10px;
    margin-right: 10px;
    padding: 10px;
    display: inline-block;
    min-width: 75px;
    font-weight: bold;
    border: 1px solid black;
    box-shadow: 2px 2px 4px #888;
  }   
  .verde{
    background-color: #47b0e0;
  }
  input{
    text-align: center;
    border: none;
    border-bottom: 2px solid black;
    height: 30px;
    font-size: 1em;
  }
}
</style>