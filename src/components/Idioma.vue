<template>
  <h1>Multilang</h1>
  <select v-model="currentLang">
    <option v-for="(l, i) in langs" :key="i">{{ l }}</option>
  </select>
  <p>{{ lang.translation.hello }}</p>
  <p>{{ lang.translation.bye }}</p>
</template>

<script>
import { ref, reactive, computed } from "vue"
import i18next from "i18next"

export default {
  name: "Idioma",
  props: {},
  setup() {
    let langs = reactive(i18next.languages)
    let currentLang = ref(i18next.language)
    let lang = reactive({translation:{}})
    
    lang = computed(() => {
      return i18next.getDataByLanguage(currentLang.value)
    });

    return {
      lang,
      langs,
      currentLang,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>