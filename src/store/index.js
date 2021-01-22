import Vue from 'vue'
import Vuex from 'vuex'

import incidentes from './modules/incidentes/incidentes.js'
import valoracion from './modules/valoracion/valoracion.js'
import uivars from './modules/uivars/uivars.js'
import seguimiento from './modules/seguimiento/seguimiento.js'
import denuncias from './modules/denuncias/denuncias.js'
import investigacion from './modules/investigacion/investigacion.js'
import evidencias from './modules/evidencias/evidencias.js'
import roles from './modules/roles/roles.js'
import usuarios from './modules/usuarios/usuarios.js'
Vue.use(Vuex)
//export default new Vuex.Store
const store =  new Vuex.Store({
  state: {
 //urlServidor: 'http://127.0.0.1/apialdeas'
 urlServidor: 'https://api.aldeasinfantiles.mx/apialdeas'
 // urlServidor :'http://rebelbot.mx/apialdeas'
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    usuarios, roles,incidentes,valoracion,uivars,seguimiento,denuncias,investigacion,evidencias
  }
})

export default store;
