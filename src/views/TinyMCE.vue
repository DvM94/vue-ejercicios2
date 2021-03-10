<template>
  <div class="ejercicio">
    <Editor
       api-key="no-api-key"
       :init="{
         height: 300,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | bold italic | \
           alignleft aligncenter alignright alignjustify | removeformat'
       }"
       v-model="texto"
     />
  </div>
  <div class="ejercicio" v-html="texto"></div>
</template>

<script>
import { ref } from "vue"
import Editor from '@tinymce/tinymce-vue'

export default {
  name:"TinyMCE",
  components:{
    Editor
  },
  setup(){

    let texto = ref("")

    return{
      texto
    }
  }
}
</script>

<style>

</style>