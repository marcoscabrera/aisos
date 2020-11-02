import Vue from 'vue'
import Vuex from 'vuex'

import incidentes from './modules/incidentes/incidentes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlServidor: 'http://127.0.0.1/apialdeas'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    incidentes
  }
})
