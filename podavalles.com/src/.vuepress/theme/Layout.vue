<template>
  <v-app>
    <div class="theme-container" :class="pageClasses">
      <v-app-bar app dark class="green darken-4" :prominent="drawer" :height="appBarHeight" v-click-outside="onClickClose">
            <v-btn icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
              </svg>
            </v-btn>
            <v-container  fluid v-if="$vuetify.breakpoint.smAndDown">
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-end align-center">
              <div>
                <div class="d-block text-subtitle-1 text-right">
                  <svg style="width:14px;height:14px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
                  </svg>
                  639 841 851
                </div>
                <div class="d-block text-caption">info@podavalles.com</div>
              </div>
            </v-col>
            <v-divider/>
            <template v-if="drawer">
              <v-col cols="12" v-for="(router, i) in routers" :key="i" class="d-flex justify-start">
                <v-btn :to="router.to" text  :exact="i === 0" @click="onClickClose">
                {{router.text}}
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-divider />
                <v-list class="transparent" dense>
                  <v-list-item-group color="green darken-4" v-model="menuLang">
                    <v-list-item @click="selectedLang('')" value="">
                      <v-list-item-content>
                        <v-list-item-title class="white--text">
                          Español
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="selectedLang('cat')" value="cat">
                      <v-list-item-content>
                        <v-list-item-title class="white--text">
                          Català
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-col>
            </template>
          </v-row>
        </v-container>
        <v-container fluid v-else>
          <v-row no-gutters>
            <v-col cols="3" class="d-flex justify-start align-center ">
              <div class="mx-1 title text-no-wrap">PODA VALLÈS</div>
            </v-col>
            <v-col cols="6" class="d-flex justify-center align-center">
              <v-btn :to="router.to" text v-for="(router, i) in routers" :key="i" :exact="i === 0">
                {{router.text}}
              </v-btn>
              <v-menu bottom  open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark v-bind="attrs" v-on="on" text>
                    Idioma
                    <v-icon v-text="`mdi-menu-down`" right/>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item-group color="green darken-4" v-model="menuLang">
                    <v-list-item @click="selectedLang('')" value="">
                      <v-list-item-avatar size="20" tile>
                        <v-img src="/flags/SP.png"/> 
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>
                          Español
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="selectedLang('cat')" value="cat">
                      <v-list-item-avatar size="20" tile>
                        <v-img src="/flags/CAT.png"/> 
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>
                          Català
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="3" class="d-flex justify-end">
              <div>
                <div class="d-block text-md-h5 text-lg-h5 text-right"><v-icon v-text="`mdi-phone-outline`"/>639 841 851</div>
                <div class="d-block text-body-1 font-weight-light">info@podavalles.com</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <banner :lang="lang" />
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
          <footer-app/>
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
      menuLang: '',
      isSidebarOpen: false,
      lang: '',
      drawer: false,
      links: [
        {root: 'cat',
          routers:[
            {to:'/cat', text:'Inici'},
            {to:'/cat/arboriculture', text:'Arboricultura'},
            {to:'/cat/gallery', text:'Galeria'},
            {to:'/cat/contact', text:'Contacte'},
          ]
        },
        {root: '',
          routers:[
            {to:'/', text:'Inicio'},
            {to:'/arboriculture', text:'Arboricultura'},
            {to:'/gallery', text:'Galería'},
            {to:'/contact', text:'Contacto'},
          ]
        }
      ]
    };
  },
  computed: {
    appBarHeight(){
      const height =  this.$vuetify.breakpoint.smAndDown ? this.drawer ? 300 : 70 : 90
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
      this.drawer = false
      if(this.lang === lang) return
      this.lang = lang
      this.updatedPath()
      window.localStorage.setItem('lang', lang);
    },
    updatedPath(){
      this.menuLang = this.lang
      let path = this.$route.path.replaceAll('/cat', '')
      if(this.lang === 'cat'){
        path = `/cat${path}`
      }
      const currentRoute = window.location.pathname
      if(currentRoute !== path){
        this.$router.replace(path)
      }
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