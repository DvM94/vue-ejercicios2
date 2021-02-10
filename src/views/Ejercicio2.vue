<template>
  <Xinput label="DNI" regExp="^[0-9]{8,8}[A-Za-z]$" />
  <Xinput label="Teléfono" regExp="(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}" />
  <Xinput label="Email" regExp="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" />
</template>

<script>
import Xinput from '@/components/Xinput.vue'

export default {
  components:{
    Xinput
  }
}
</script>