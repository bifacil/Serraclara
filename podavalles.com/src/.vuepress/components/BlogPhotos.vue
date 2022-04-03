<template>
  <div class="row justify-content-around">
    <div class="col col-sm-6 col-md-3 p-2" v-for="(photo, i) in photos" :key="i">
      <div class="card">
        <img :src="`/img/${photo}`" class="card-img-top" alt="podavalles">
      </div>
    </div>
  </div>
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
