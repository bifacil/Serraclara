(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{389:function(t,a,e){"use strict";e.r(a);e(341),e(7),e(29),e(81),e(360);var s=e(387),n=e(385),i=e(386),r=e(338),o={components:{Home:s.a,Page:n.a,Sidebar:i.a},data:function(){return{menuLang:"",isSidebarOpen:!1,lang:"",drawer:!1,links:[{root:"cat",routers:[{to:"/cat",text:"Inici"},{to:"/cat/arboriculture",text:"Arboricultura"},{to:"/cat/gallery",text:"Galeria"},{to:"/cat/contact",text:"Contacte"}]},{root:"",routers:[{to:"/",text:"Inicio"},{to:"/arboriculture",text:"Arboricultura"},{to:"/gallery",text:"Galería"},{to:"/contact",text:"Contacto"}]}]}},computed:{appBarHeight:function(){return this.$vuetify.breakpoint.smAndDown?this.drawer?300:70:90},bannerHeight:function(){return this.$vuetify.breakpoint.smAndDown?300:550},isHomePage:function(){return"/"===this.$page.path||"/cat/"===this.$page.path},routers:function(){var t=this;return this.links.find((function(a){return a.root===t.lang})).routers},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this,a=window.localStorage.getItem("lang");this.lang=a||"",this.updatedPath(),this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{selectedLang:function(t){this.menuLang=t,this.drawer=!1,this.lang!==t&&(this.lang=t,this.updatedPath(),window.localStorage.setItem("lang",t))},updatedPath:function(){this.menuLang=this.lang;var t=this.$route.path.replaceAll("/cat","");"cat"===this.lang&&(t="/cat".concat(t)),window.location.pathname!==t&&this.$router.replace(t)},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onClickClose:function(){this.drawer&&(this.drawer=!1)},to:function(t){this.$router.push(t)}}},l=e(52),c=Object(l.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"theme-container position-relative",class:t.pageClasses},[e("nav",{staticClass:"navbar fixed-bottom bg-success navbar-expand-lg navbar-dark"},[e("div",{staticClass:"container-fluid d-flex justify-content-between background-app"},[t._m(0),t._v(" "),e("div",{staticClass:"text-white text-end d-block d-lg-none"},[e("div",{staticClass:"fs-5"},[e("svg",{staticStyle:{width:"14px",height:"14px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z"}})]),t._v("\n          639 841 851\n        ")]),t._v(" "),e("div",{staticClass:"d-block text-caption"},[t._v("info@podavalles.com")])]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse justify-content-between",attrs:{id:"navbarScroll"}},[e("div",{staticClass:"mx-1 title text-no-wrap text-white fs-5 d-none d-lg-block"},[t._v("PODA VALLÈS")]),t._v(" "),e("ul",{staticClass:"nav justify-center"},[t._l(t.routers,(function(a,s){return e("li",{key:s,staticClass:"nav-item nav-link text-uppercase"},[e("router-link",{attrs:{to:a.to,exact:""}},[e("span",{staticClass:"text-white"},[t._v(t._s(a.text))])])],1)})),t._v(" "),e("div",{staticClass:"dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle text-white",attrs:{type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n              IDIOMA\n            ")]),t._v(" "),e("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton1"}},[e("li",{staticClass:"btn d-flex nav-link  list-group-item stretched-link",class:""===t.menuLang?"bg-success":"",attrs:{"aria-current":"true"},on:{click:function(a){return t.selectedLang("")}}},[e("img",{attrs:{src:"/flags/SP.png"}}),e("a",{staticClass:"dropdown-item",class:""===t.menuLang?"text-white":""},[t._v("Español")])]),t._v(" "),e("li",{staticClass:"btn d-flex nav-link btn-light list-group-item stretched-link",class:"cat"===t.menuLang?"bg-success":"",attrs:{"aria-current":"true"},on:{click:function(a){return t.selectedLang("cat")}}},[e("img",{attrs:{src:"/flags/CAT.png"}}),e("a",{staticClass:"dropdown-item",class:"cat"===t.menuLang?"text-white":""},[t._v("Català")])])])])],2),t._v(" "),e("div",{staticClass:"text-white text-end d-none d-lg-block"},[e("div",{staticClass:"fs-5"},[e("svg",{staticStyle:{width:"14px",height:"14px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z"}})]),t._v("\n            639 841 851\n          ")]),t._v(" "),e("div",{staticClass:"d-block text-caption"},[t._v("info@podavalles.com")])])])])]),t._v(" "),e("div",{staticClass:"facts mt-5 pt-2 pt-sm-3 pt-md-4 pt-lg-4"},[e("banner",{staticClass:"banner",attrs:{lang:t.lang}}),t._v(" "),e("sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),e("page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),e("footer-app")]},proxy:!0}],null,!0)})],1)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null);a.default=c.exports}}]);