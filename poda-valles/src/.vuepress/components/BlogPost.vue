<template>
  <v-timeline dense >
    <v-timeline-item color="green lighten-2">
      <span slot="opposite">Tus eu perfecto</span>
      <v-card class="elevation-1" style="border: 2px solid #81C784;">
        <v-card-subtitle>
          {{date}}
        </v-card-subtitle>
        <v-card-title class="text-h5">
          {{title}}
        </v-card-title>
        <v-card-subtitle>
          {{subtitle}}
        </v-card-subtitle>
        <v-card-text>
          {{description}}
        </v-card-text>
        <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item v-for="(photo, i) in photos" :key="i" :src="`/img/${photo}`" reverse-transition="fade-transition" transition="fade-transition" contain/>
        </v-carousel>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    props: ['date', 'title', 'subtitle','description', 'mainphoto', 'photos'],
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    }
  }
</script>
