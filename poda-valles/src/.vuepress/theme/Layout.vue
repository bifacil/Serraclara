<template>
  <v-app>
    <div class="theme-container" :class="pageClasses">
      <v-app-bar app dark class="green lighten-2">
        <v-container  fluid>
          <v-row no-gutters>
            <v-col cols="2" class="d-flex justify-start">
              <v-toolbar-title class="mx-1">PODA VALLÈS</v-toolbar-title>
            </v-col>
            <v-col cols="8" class="d-flex justify-center">
              <v-btn :to="router.to" text v-for="(router, i) in routers" :key="i" exact>
                {{router.text}}
              </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-img @click="selectedLang('')" class="mx-1" max-width="30" src="/flags/CAT.png" alt="Catalán" style="cursor: pointer"/>
              <v-img @click="selectedLang('es')" class="mx-1" max-width="30" src="/flags/SP.png" alt="Español" style="cursor: pointer"/>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <page :sidebar-items="sidebarItems">
        <template #top>
          <slot name="page-top" />
        </template>
        <template #bottom>
          <slot name="page-bottom" />
        </template>
      </page>
    </div>
  </v-app> 
</template>

<script>
import Home from "@parent-theme/components/Home.vue";
import Page from "@parent-theme/components/Page.vue";
import { resolveSidebarItems } from "@parent-theme/util";
export default {
  components: { Home, Page },
  data() {
    return {
      isSidebarOpen: false,
      lang: '',
      links: [
        {root: '',
          routers:[
            {to:'/', text:'Inici'},
            {to:'/arboriculture', text:'Arboricultura'},
            {to:'/blog', text:'Blog'},
            {to:'/contact', text:'Contacte'},
          ]
        },
        {root: 'es',
          routers:[
            {to:'/es', text:'Inicio'},
            {to:'/es/arboriculture', text:'Arboricultura'},
            {to:'/es/blog', text:'Blog'},
            {to:'/es/contact', text:'Contacto'},
          ]
        }
      ]
    };
  },
  computed: {
    isHomePage(){
      return this.$page.path === "/"
    },
    routers(){
      return this.links.find(l => l.root === this.lang).routers
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },
  mounted() {
    const lang = window.localStorage.getItem('lang')
    this.lang = lang ? lang : ''
    this.updatedPath()
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },
  methods: {
    selectedLang(lang){
      this.lang = lang
      this.updatedPath()
      window.localStorage.setItem('lang', lang);
    },
    updatedPath(){
      let path = this.$route.path.replaceAll('/es', '')
      if(this.lang === 'es'){
        path = `/es${path}`
      }
      this.$router.replace(path)
    }
  }
};
</script>