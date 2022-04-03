<template>
  <footer class="transparent">
    <div class="text-center text-blue" cols="12">
      <span>{{footer.title}} </span><template v-if="isShow"><span class="mx-1">|</span><a href="/contact">{{footer.contact}}</a></template>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      footer(){
        return this.$lang === 'es-ES' ? {title: 'Presupuesto sin compromiso', contact: 'Contacto'} : {title: 'Pressupost sense compromís', contact: 'Contacte'}
      },
      isShow(){
        return this.$page.path !== "/contact/" && this.$page.path !== "/cat/contact/"
      }
    }
  }
</script>