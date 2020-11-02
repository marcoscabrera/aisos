import api from './api.js';

export default {

    hola() { 
        console.log("====== hola ======");
    },

    saludo(store) {
        let predicado = "/hola";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiosget(endpoint);
     },

    nuevoIncidente(parametros, store) { 

    let predicado = "/incidentes";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiospost(endpoint, parametros);

    },

    nuevoUsuario(parametros, store) {
        
        
    let predicado = "/api/v0/users";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

        console.log("valor del endpoint " + endpoint);
         console.log("valor del parametros" + parametros);

    return api.axiospost(endpoint, parametros);

     }

    
};