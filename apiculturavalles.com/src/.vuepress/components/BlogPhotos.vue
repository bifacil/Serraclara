<template>
  <v-card class="elevation-0">
    <v-carousel cycle hide-delimiter-background show-arrows-on-hover height="400">
      <v-carousel-item v-for="(photo, i) in photos" :key="i" :src="`/img/${photo}`" reverse-transition="fade-transition" transition="fade-transition" contain/>
    </v-carousel>
    <v-divider class="my-4"/>
  </v-card>
</template>

<script>
  export default {
    props: ['photos'],
    data () {
      return {
        
      }
    }
  }
</script>
