import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import '@mdi/font/scss/materialdesignicons.scss'
import Vuex from 'vuex'
import { GetGithubDiscussions } from "../api/api";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({})
  Vue.use(Vuex);

  const state = {
    DISCUSSIONS: [],
    LANG: 'CAT'
  }

  const getters = {
    GET_DISCUSSIONS: state => {
      const discussions = []
      state.DISCUSSIONS.map(d => d.labels.nodes.map(l => {
        if(l.name === state.LANG){
          discussions.push(d)
        }
      }));
      return discussions
    }
  }

  const mutations = {
    SET_DISCUSSIONS(state, discussions){
      state.DISCUSSIONS = discussions
    },
    SET_LANG(state, lang){
      state.LANG = lang !== "CAT" ? "ES" : lang
    }
  }

  const actions = {
    async API_DISCUSSIONS({commit}){
      const data = await GetGithubDiscussions()
      const discussions = data.repository.discussions.nodes
      commit('SET_DISCUSSIONS',discussions)
    }
  }

  const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  })
  
  Vue.mixin({store: store})
}


