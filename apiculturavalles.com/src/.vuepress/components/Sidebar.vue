<template>
  <aside class="sidebar">
    <v-list dense>
      <v-list-item :to="Lang.to" exact class="d-block">
        <v-list-item-content>
          <v-list-item-title class="text-uppercase font-weight-bold">{{Lang.text}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="d-block" v-for="Discussion in Discussions" :key="Discussion.id" link :to="`#apicultura-${Discussion.number}`">
        <v-list-item-content>
          <v-list-item-title>{{ Discussion.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <slot name="bottom" />
  </aside>
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
  }
}
</script>

<style lang="stylus">
.sidebar
  max-width: 270px
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
