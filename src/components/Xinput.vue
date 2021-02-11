<template>
  <div class="dato">
    <label v-bind:class="{ verde:color }" v-bind:for="label">{{ label }}</label>
    <input v-bind:name="label" v-bind:id="label"  v-model="dato" v-bind:placeholder="'Introduce tu '+label" @keyup="comprobar"/>
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
  margin: 0 auto 0 auto;
  width: fit-content;
  padding: 15px;
  label{
    margin-right: 10px;
    padding: 5px;
    display: inline-block;
    min-width: 75px;
    font-weight: bold;
    font-size: .8em;
    border: 1px solid black;
  }   
  .verde{
    background-color: #47e06d3b;
  }
  input{
    text-align: center;
    border: none;
    border-bottom: 2px solid black;
    height: 20px;
  }
}
</style>