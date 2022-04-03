<template>
  <div class="theme-container position-relative" :class="pageClasses">
    <nav v-if="true" class="navbar fixed-bottom bg-success navbar-expand-lg navbar-dark">
      <div class="container-fluid d-flex justify-content-between background-app">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="text-white text-end d-block d-lg-none">
          <div class="fs-5">
            <svg style="width:14px;height:14px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
            </svg>
            639 841 851
          </div>
          <div class="d-block text-caption">info@podavalles.com</div>
        </div>
        <div class="collapse navbar-collapse justify-content-between" id="navbarScroll">
          <div class="mx-1 title text-no-wrap text-white fs-5 d-none d-lg-block">PODA VALLÈS</div>
          <ul class="nav justify-center">
            <li class="nav-item nav-link text-uppercase" v-for="(router, i) in routers" :key="i">
              <router-link :to="router.to" exact>
                <span class="text-white">{{router.text}}</span>
              </router-link>
            </li>
            <div class="dropdown">
              <a class="nav-link dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                IDIOMA
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li aria-current="true" class="btn d-flex nav-link  list-group-item stretched-link" :class="menuLang === '' ? 'bg-success' : ''" @click="selectedLang('')"><img src="/flags/SP.png"><a class="dropdown-item" :class="menuLang === '' ? 'text-white' : ''">Español</a></li>
                <li aria-current="true" class="btn d-flex nav-link btn-light list-group-item stretched-link" :class="menuLang === 'cat' ? 'bg-success' : ''" @click="selectedLang('cat')"><img src="/flags/CAT.png"><a class="dropdown-item" :class="menuLang === 'cat' ? 'text-white' : ''">Català</a></li>
              </ul>
            </div>
          </ul>
          <div class="text-white text-end d-none d-lg-block">
            <div class="fs-5">
              <svg style="width:14px;height:14px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z" />
              </svg>
              639 841 851
            </div>
            <div class="d-block text-caption">info@podavalles.com</div>
          </div>
        </div>
      </div>
    </nav>
    <div class="facts mt-5 pt-2 pt-sm-3 pt-md-4 pt-lg-4">
      <banner :lang="lang" class="banner"/>
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
          <footer-app/>
        </template>
      </page>
    </div>
  </div>
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
      this.menuLang = lang
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
    },
    to(to){
      this.$router.push(to)
    }
  }
};
</script>