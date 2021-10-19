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
import conciencia from './modules/conciencia/conciencia.js'
import permisosimpresion from './modules/permisosimpresion/permisosimpresion.js'
import impresiones from './modules/impresiones/impresiones.js'
import abordaje from './modules/abordaje/abordaje.js'
import estadisticas from './modules/estadisticas/estadisticas.js'
import notificacion from './modules/notificacion/notificacion.js'
import doctosapoyo from './modules/doctosapoyo/doctosapoyo.js'
import parametros from './modules/parametros/parametros.js'
Vue.use(Vuex)
//export default new Vuex.Store
const store =  new Vuex.Store({
  state: {

    /*servidores : { 
          
      'local' : 'http://127.0.0.1/apialdeas',
      'demo'  : 'https://apidemo2.azurewebsites.net',
      'pro'   : 'https://apiproteccioninfantil3.azurewebsites.net'
    },*/
///////////////////////////////////////
// LOCALHOST
///////////////////////////////////////   


//urlServidor: 'http://127.0.0.1/apialdeas',


///////////////////////////////////////
// API PRODUCCION ** servidor de produccion//
///////////////////////////////////////  



urlServidor : 'https://apiproteccioninfantil3.azurewebsites.net',
   

///////////////////////////////////////
// ACTUAL
/////////////////////////////////////// 
//urlServidor : 'https://apidemo2.azurewebsites.net',

version: '1.1.24 Servidor Produccion',



  },
  mutations: {
  },
  actions: {
  },
  modules: {
    conciencia,usuarios, roles,
    incidentes,
    valoracion,uivars,
    seguimiento,
    denuncias,
    investigacion,
    evidencias,
    permisosimpresion,
    impresiones,
    abordaje,
    estadisticas,
    notificacion,
    doctosapoyo,
    parametros
  }
})
  
export default store;
