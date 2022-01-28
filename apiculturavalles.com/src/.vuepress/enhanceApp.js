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
    DISCUSSIONS: []
  }

  const getters = {
    GET_DISCUSSIONS: state => {
      return state.DISCUSSIONS
    }
  }

  const mutations = {
    SET_DISCUSSIONS(state, discussions){
      state.DISCUSSIONS = discussions
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


