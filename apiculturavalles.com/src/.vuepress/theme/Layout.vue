<template>
  <v-app>
    <div class="theme-container" :class="pageClasses">
      <v-app-bar app dark class="yellow accent-4 black--text" :prominent="drawer" :height="appBarHeight" v-click-outside="onClickClose">
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer" class="black--text"></v-app-bar-nav-icon>
        <v-container  fluid v-if="$vuetify.breakpoint.smAndDown">
          <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-end align-center">
              <div>
                <div class="d-block text-subtitle-1 text-right"><v-icon small v-text="`mdi-phone-outline`" class="black--text"/>639 841 851</div>
                <div class="d-block text-caption">info@apiculturavalles.com</div>
              </div>
            </v-col>
            <v-divider/>
            <template v-if="drawer">
              <v-col cols="12" v-for="(router, i) in routers" :key="i" class="d-flex justify-start">
                <v-btn :to="router.to" text  :exact="i === 0" @click="onClickClose" class="black--text">
                {{router.text}}
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-divider />
                <v-list class="transparent" dense>
                  <v-list-item-group color="yellow accent-4" v-model="menuLang">
                    <v-list-item @click="selectedLang('')" value="">
                      <v-list-item-content>
                        <v-list-item-title class="black--text">
                          Español
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="selectedLang('cat')" value="cat">
                      <v-list-item-content>
                        <v-list-item-title class="black--text">
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
              <div class="mx-1 title text-no-wrap">APICULTURA VALLÈS</div>
            </v-col>
            <v-col cols="6" class="d-flex justify-center align-center">
              <v-btn :to="router.to" text v-for="(router, i) in routers" :key="i" :exact="i === 0" class="black--text">
                {{router.text}}
              </v-btn>
              <v-menu bottom  open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark v-bind="attrs" v-on="on" text class="black--text">
                    Idioma
                    <v-icon v-text="`mdi-menu-down`" right/>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item-group color="yellow accent-4" v-model="menuLang">
                    <v-list-item @click="selectedLang('')" value="">
                      <v-list-item-avatar size="20" tile>
                        <v-img src="/flags/SP.png"/> 
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold black--text">
                          Español
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="selectedLang('cat')" value="cat">
                      <v-list-item-avatar size="20" tile>
                        <v-img src="/flags/CAT.png"/> 
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="font-weight-bold black--text">
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
                <div class="d-block text-md-h5 text-lg-h5 text-right"><v-icon v-text="`mdi-phone-outline`" class="black--text"/>639 841 851</div>
                <div class="d-block text-body-1 font-weight-light">info@apiculturavalles.com</div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <banner :lang="lang"/>
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
        {root: '',
          routers:[
            {to:'/', text:'Inicio'},
            {to:'/services', text:'Servicios'},
            {to:'/gallery', text:'Galería'},
            {to:'/contact', text:'Contacto'},
          ],
        },
        {root: 'cat',
          routers:[
            {to:'/cat', text:'Inici'},
            {to:'/cat/services', text:'Serveis'},
            {to:'/cat/gallery', text:'Galeria'},
            {to:'/cat/contact', text:'Contacte'},
          ],
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