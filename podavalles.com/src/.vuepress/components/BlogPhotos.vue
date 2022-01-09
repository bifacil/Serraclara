<template>
  <v-row>
    <v-col class="mx-auto" cols="12" sm="6" md="4" lg="3" v-for="(photo, i) in photos" :key="i">
      <v-card class="elevation-0" >
        <v-img  :src="`/img/${photo}`" height="400"/>
      </v-card>
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
