<template>
  <v-row>
    <v-col>
      <v-card class="elevation-0" v-for="(photo, i) in photos" :key="i">
        <v-card-text>
        <a target="_blank" :href="`/img/${photo}`" ><v-img max-width="400px"  :src="`/img/${photo}`" /></a>
        </v-card-text>
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
