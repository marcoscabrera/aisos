import mutations from './mutations.js'; 
 import actions from './actions.js'; 
 
 export default { 
 
    state: {
        fechaInicial : null,
        fechaFinal : null,
        tipo : null,
        datos_graficas : null,
        verEstadisticas: false,
    },
    mutations,
    actions 
   }