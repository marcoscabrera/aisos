import api from './api.js';

export default {

    recuperarUnaValoracion(parametro, store) { 

    
    let predicado = "/api/v0/incidentes/" + parametro + "/valoracionintegral";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiosget(endpoint);

    },

    updateValoracion(parametros, store) { 

    
    let predicado = "/api/v0/valoracionintegral";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiosput(endpoint, parametros);


    }





}