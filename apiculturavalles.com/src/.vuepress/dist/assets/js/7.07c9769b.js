(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{357:function(t,e,a){},385:function(t,e,a){"use strict";a(357)},394:function(t,e,a){"use strict";a.r(e);a(344),a(8),a(30),a(82),a(364);var s=a(392),i=a(390),n=a(391),o=a(342),r={components:{Home:s.a,Page:i.a,Sidebar:n.a},data:function(){return{menuLang:"",isSidebarOpen:!1,lang:"",drawer:!1,links:[{root:"",routers:[{to:"/",text:"Inicio"},{to:"/services",text:"Servicios"},{to:"/gallery",text:"Galería"},{to:"/contact",text:"Contacto"}]},{root:"cat",routers:[{to:"/cat",text:"Inici"},{to:"/cat/services",text:"Serveis"},{to:"/cat/gallery",text:"Galeria"},{to:"/cat/contact",text:"Contacte"}]}]}},computed:{appBarHeight:function(){return this.$vuetify.breakpoint.smAndDown?this.drawer?300:70:90},bannerHeight:function(){return this.$vuetify.breakpoint.smAndDown?300:550},isHomePage:function(){return"/"===this.$page.path||"/cat/"===this.$page.path},routers:function(){var t=this;return this.links.find((function(e){return e.root===t.lang})).routers},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this,e=window.localStorage.getItem("lang");this.lang=e||"",this.updatedPath(),this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{selectedLang:function(t){this.drawer=!1,this.lang!==t&&(this.lang=t,this.updatedPath(),window.localStorage.setItem("lang",t))},updatedPath:function(){this.menuLang=this.lang;var t=this.$route.path.replaceAll("/cat","");"cat"===this.lang&&(t="/cat".concat(t)),window.location.pathname!==t&&this.$router.replace(t)},toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onClickClose:function(){this.drawer&&(this.drawer=!1)}}},l=(a(385),a(53)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{staticClass:"theme-container",class:t.pageClasses},[a("v-app-bar",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onClickClose,expression:"onClickClose"}],staticClass:"yellow accent-4 black--text",attrs:{app:"",dark:"",prominent:t.drawer,height:t.appBarHeight}},[t.$vuetify.breakpoint.smAndDown?a("v-app-bar-nav-icon",{staticClass:"black--text",on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),t._v(" "),t.$vuetify.breakpoint.smAndDown?a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex justify-end align-center",attrs:{cols:"12"}},[a("div",[a("div",{staticClass:"d-block text-subtitle-1 text-right"},[a("v-icon",{staticClass:"black--text",attrs:{small:""},domProps:{textContent:t._s("mdi-phone-outline")}}),t._v("639 841 851")],1),t._v(" "),a("div",{staticClass:"d-block text-caption"},[t._v("info@apiculturavalles.com")])])]),t._v(" "),a("v-divider"),t._v(" "),t.drawer?[t._l(t.routers,(function(e,s){return a("v-col",{key:s,staticClass:"d-flex justify-start",attrs:{cols:"12"}},[a("v-btn",{staticClass:"black--text",attrs:{to:e.to,text:"",exact:0===s},on:{click:t.onClickClose}},[t._v("\n              "+t._s(e.text)+"\n              ")])],1)})),t._v(" "),a("v-col",{attrs:{cols:"12"}},[a("v-divider"),t._v(" "),a("v-list",{staticClass:"transparent",attrs:{dense:""}},[a("v-list-item-group",{attrs:{color:"yellow accent-4"},model:{value:t.menuLang,callback:function(e){t.menuLang=e},expression:"menuLang"}},[a("v-list-item",{attrs:{value:""},on:{click:function(e){return t.selectedLang("")}}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"black--text"},[t._v("\n                        Español\n                      ")])],1)],1),t._v(" "),a("v-list-item",{attrs:{value:"cat"},on:{click:function(e){return t.selectedLang("cat")}}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"black--text"},[t._v("\n                        Català\n                      ")])],1)],1)],1)],1)],1)]:t._e()],2)],1):a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"d-flex justify-start align-center ",attrs:{cols:"3"}},[a("div",{staticClass:"mx-1 title text-no-wrap"},[t._v("APICULTURA VALLÈS")])]),t._v(" "),a("v-col",{staticClass:"d-flex justify-center align-center",attrs:{cols:"6"}},[t._l(t.routers,(function(e,s){return a("v-btn",{key:s,staticClass:"black--text",attrs:{to:e.to,text:"",exact:0===s}},[t._v("\n              "+t._s(e.text)+"\n            ")])})),t._v(" "),a("v-menu",{attrs:{bottom:"","open-on-hover":"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"black--text",attrs:{dark:"",text:""}},"v-btn",i,!1),s),[t._v("\n                  Idioma\n                  "),a("v-icon",{attrs:{right:""},domProps:{textContent:t._s("mdi-menu-down")}})],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item-group",{attrs:{color:"yellow accent-4"},model:{value:t.menuLang,callback:function(e){t.menuLang=e},expression:"menuLang"}},[a("v-list-item",{attrs:{value:"","active-class":"font-weight-bold"},on:{click:function(e){return t.selectedLang("")}}},[a("v-list-item-avatar",{attrs:{size:"20",tile:""}},[a("v-img",{attrs:{src:"/flags/SP.png"}})],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"black--text"},[t._v("\n                        Español\n                      ")])],1)],1),t._v(" "),a("v-list-item",{attrs:{value:"cat","active-class":"font-weight-bold"},on:{click:function(e){return t.selectedLang("cat")}}},[a("v-list-item-avatar",{attrs:{size:"20",tile:""}},[a("v-img",{attrs:{src:"/flags/CAT.png"}})],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",{staticClass:"black--text"},[t._v("\n                        Català\n                      ")])],1)],1)],1)],1)],1)],2),t._v(" "),a("v-col",{staticClass:"d-flex justify-end",attrs:{cols:"3"}},[a("div",[a("div",{staticClass:"d-block text-md-h5 text-lg-h5 text-right"},[a("v-icon",{staticClass:"black--text",domProps:{textContent:t._s("mdi-phone-outline")}}),t._v("639 841 851")],1),t._v(" "),a("div",{staticClass:"d-block text-body-1 font-weight-light"},[t._v("info@apiculturavalles.com")])])])],1)],1)],1),t._v(" "),a("banner",{attrs:{lang:t.lang}}),t._v(" "),a("sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("page",{staticClass:"text-justify",attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),a("footer-app")]},proxy:!0}],null,!0)})],1)])}),[],!1,null,"9d8adb14",null);e.default=c.exports}}]);