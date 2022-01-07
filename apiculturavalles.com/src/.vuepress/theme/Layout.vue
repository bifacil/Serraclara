<template>
  <v-app>
    <div class="theme-container" :class="pageClasses">
      <v-app-bar app class="yellow accent-4 black--text">
        <v-container  fluid>
          <v-row no-gutters>
            <v-col cols="2" class="d-flex justify-start">
              <v-toolbar-title class="mx-1">APICULTURA VALLÈS</v-toolbar-title>
            </v-col>
            <v-col cols="8" class="d-flex justify-center">
              <v-btn :to="router.to" text v-for="(router, i) in routers" :key="i" :exact="i === 0" class="black--text">
                {{router.text}}
              </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-img @click="selectedLang('')" class="mx-1" max-width="30" src="/flags/SP.png" alt="Español" style="cursor: pointer"/>
              <v-img @click="selectedLang('cat')" class="mx-1" max-width="30" src="/flags/CAT.png" alt="Catalán" style="cursor: pointer"/>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </sidebar>
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
import Sidebar from "@parent-theme/components/Sidebar.vue";
import { resolveSidebarItems } from "@parent-theme/util";
export default {
  components: { Home, Page, Sidebar },
  data() {
    return {
      isSidebarOpen: false,
      lang: '',
      links: [
        {root: 'cat',
          routers:[
            {to:'/cat', text:'Inici'},
            {to:'/cat/services', text:'Serveis'},
            {to:'/cat/blog', text:'Blog'},
            {to:'/cat/contact', text:'Contacte'},
          ]
        },
        {root: '',
          routers:[
            {to:'/', text:'Inicio'},
            {to:'/services', text:'Servicios'},
            {to:'/blog', text:'Blog'},
            {to:'/contact', text:'Contacto'},
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
      if(this.lang === lang) return
      this.lang = lang
      this.updatedPath()
      window.localStorage.setItem('lang', lang);
    },
    updatedPath(){
      let path = this.$route.path.replaceAll('/cat', '')
      if(this.lang === 'cat'){
        path = `/cat${path}`
      }
      this.$router.replace(path)
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    }
  }
};
</script>