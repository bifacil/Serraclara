<template>
  <div class="card bg-dark text-white" style="background-color: rgb(34, 110, 188) !important;" v-if="show">
    <img class="img-fluid img-thumbnai" src="/img/banner.webp" width="100%" height="400">
    <div class="card-img-overlay mx-auto" style="max-width:880px">
      <div class="text-white px-0" style="font-size:3vw">
        <div v-if="isSpanishLang">
          <div class="m-0 p-0">Especialistas</div>
          <div class="m-0 px-md-4">en árboles</div>
        </div>
        <div v-else>
          <div class="m-0 p-0">Especialistes</div>
          <div class="m-0 px-md-4">en arbres</div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="card bg-dark text-white" style="background-color: rgb(34, 110, 188) !important;">
    <img class="img-fluid img-thumbnai" src="/img/banner_tempo.png" width="100%" height="400" v-if="!isMobile">
    <div class="card-img-overlay mx-auto" style="max-width:880px">
      <div class="text-white px-0" style="font-size:3vw">
        <div v-if="isSpanishLang">
          <div class="m-0 p-0">Especialistas</div>
          <div class="m-0 px-md-4">en árboles</div>
        </div>
        <div v-else>
          <div class="m-0 p-0">Especialistes</div>
          <div class="m-0 px-md-4">en arbres</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['lang'],
  data() {
    return {
      show:false,
      isMobile: false
    }
  },
  computed: {
    isSpanishLang(){
      return this.lang === ''
    }
  },
  methods:{
    onScroll(){
      this.show = true
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  mounted() {
    this.isMobile = window.innerWidth <= 800
    if(this.isMobile){
      window.addEventListener('scroll', this.onScroll)
    }else{
      setTimeout(() => {
        this.show = true
      }, 1500);
    } 
  },
};
</script>

<style>
  .temporary{
    background: rgba(43, 102, 182, 100)
  }
</style>