/* import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/scss/materialdesignicons.scss'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({})
}
