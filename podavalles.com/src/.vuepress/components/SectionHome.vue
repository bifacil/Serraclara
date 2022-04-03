<template>
  <transition name="slide-fade">
    <div v-if="show">
      <img :src="`/img/${photo}`" v-if="photo" width="100%" height="400"  class="img-fluid img-thumbnai mb-4"/>
      <div v-html="compiledMarkdown"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['photo','text'],
    name:'SectionHome',
    data() {
      return {
        show:false
      }
    },
    computed: {
      compiledMarkdown: function() {
        return marked(this.text, { sanitize: true });
      }
    },
    methods:{
      onScroll(){
        this.show = true
        window.removeEventListener('scroll', this.onScroll)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
      this.isMobile = window.innerWidth <= 800
      setTimeout(() => {
        this.show = true
      }, 2000);
    },
  }
</script>
