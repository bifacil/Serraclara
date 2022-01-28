<template>
  <v-navigation-drawer absolute permanent :expand-on-hover="IsMiniSidebar" class="navigation-drawer">
    <v-list dense>
      <v-list-item :to="Lang.to" exact>
        <v-list-item-content>
          <v-list-item-title class="text-uppercase font-weight-bold">{{Lang.text}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-for="Discussion in Discussions" :key="Discussion.id" link :to="`#${Discussion.id}`">
        <v-list-item-content>
          <v-list-item-title class="text-uppercase">{{ Discussion.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Sidebar',
    computed: {
      ...mapGetters(['GET_DISCUSSIONS']),
      Discussions() {
        return this.GET_DISCUSSIONS
      },
      Lang(){
        return this.$lang === 'es-ES' ? {text: 'Todas las publicaciones', to:'/gallery/'} : {text: 'Totes les publicacions', to:'/cat/gallery/'}
      },
      IsMiniSidebar(){
        return !this.$vuetify.breakpoint.lgAndUp
      }
    },
  }
</script>