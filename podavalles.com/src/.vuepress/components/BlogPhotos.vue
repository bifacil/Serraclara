<template>
  <v-row class="mb-4">
    <v-col class="mx-auto d-flex align-center" cols="12" sm="6" md="3" v-for="(photo, i) in photos" :key="i">
      <v-card class="elevation-0" >
        <v-img :src="`/img/${photo}`" contain/>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-divider/>
    </v-col>
  </v-row>
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
