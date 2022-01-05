<template>
  <b-card border-variant="light" class="my-5">
    <b-card-sub-title>
      {{date}}
    </b-card-sub-title>
    <b-card-title>
      {{title}}
    </b-card-title>
    <b-card-text>
      <p class="h5">{{subtitle}}</p>
      {{description}}
    </b-card-text>
    <b-row>
      <b-col cols="12" md="3" v-for="(photo, i) in photos" :key="i" class="text-center py-2 mx-auto">
        <b-img-lazy :src="`/img/${photo}`" rounded alt="Podar blog" height="180" width="180"/>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  export default {
    props: ['date', 'title', 'subtitle','description', 'mainphoto', 'photos'],
    data () {
      return {
      }
    }
  }
</script>
