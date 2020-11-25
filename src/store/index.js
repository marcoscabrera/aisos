import Vue from 'vue'
import Vuex from 'vuex'

import incidentes from './modules/incidentes/incidentes.js'
import valoracion from './modules/valoracion/valoracion.js'
import uivars from './modules/uivars/uivars.js'
import seguimiento from './modules/seguimiento/seguimiento.js'
import denuncias from './modules/denuncias/denuncias.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   urlServidor: 'http://127.0.0.1/apialdeas'
  // urlServidor: 'http://rebelbot.mx/apialdeas'
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    incidentes,valoracion,uivars,seguimiento,denuncias
  }
})
