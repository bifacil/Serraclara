<template>
  <img :src="`/img/${photo}`" v-if="photo"/>
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
