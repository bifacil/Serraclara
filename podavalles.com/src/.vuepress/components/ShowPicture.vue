<template>
  <v-img :src="`/img/${photo}`" lazy-src="/img/lazy.png" contain v-if="photo"/>
</template>

<script>
  export default {
    props: ['photo'],
    data () {
      return {
        
      }
    }
  }
</script>
