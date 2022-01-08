<template>
  <v-app>
    <div class="theme-container" :class="pageClasses">
      <v-app-bar app dark class="green darken-4" :prominent="drawer" :height="appBarHeight" v-click-outside="onClickClose">
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-container  fluid v-if="$vuetify.breakpoint.smAndDown">
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-end">
              <v-img @click="selectedLang('')" class="mx-1" max-width="30" src="/flags/SP.png" alt="Español" style="cursor: pointer"/>
              <v-img @click="selectedLang('cat')" class="mx-1" max-width="30" src="/flags/CAT.png" alt="Catalán" style="cursor: pointer"/>
            </v-col>
            <v-divider/>
            <v-col cols="12" v-for="(router, i) in routers" :key="i" class="d-flex justify-start">
              <v-btn :to="router.to" text  :exact="i === 0" v-if="drawer" @click="onClickClose">
                {{router.text}}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid v-else>
          <v-row no-gutters>
            <v-col cols="2" class="d-flex justify-start">
              <div class="mx-1 title text-no-wrap">PODA VALLÈS</div>
            </v-col>
            <v-col cols="8" class="d-flex justify-center">
              <v-btn :to="router.to" text v-for="(router, i) in routers" :key="i" :exact="i === 0">
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
      <banner :lang="lang" v-if="isHomePage"/>
      <sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </sidebar>
      <page :sidebar-items="sidebarItems" class="text-justify">
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
      drawer: false,
      links: [
        {root: 'cat',
          routers:[
            {to:'/cat', text:'Inici'},
            {to:'/cat/arboriculture', text:'Arboricultura'},
            {to:'/cat/blog', text:'Blog'},
            {to:'/cat/contact', text:'Contacte'},
          ],
          banner: 'Especialistes en arbres'
        },
        {root: '',
          routers:[
            {to:'/', text:'Inicio'},
            {to:'/arboriculture', text:'Arboricultura'},
            {to:'/blog', text:'Blog'},
            {to:'/contact', text:'Contacto'},
          ],
          banner: 'Especialistas en árboles'
        }
      ]
    };
  },
  computed: {
    appBarHeight(){
      const height =  this.$vuetify.breakpoint.smAndDown && this.drawer ? 200 : 70
      return height
    },
    bannerHeight(){
      const height =  this.$vuetify.breakpoint.smAndDown ? 300 : 550
      return height
    },
    isHomePage(){
      return this.$page.path === "/" || this.$page.path === "/cat/"
    },
    routers(){
      return this.links.find(l => l.root === this.lang).routers
    },
    bannerTitle(){
      return this.links.find(l => l.root === this.lang).banner
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
    },
    onClickClose(){
      if(this.drawer){
        this.drawer = false
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .banner {
    margin-top: 70px; 
  }
</style>