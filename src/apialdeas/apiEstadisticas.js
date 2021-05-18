import api from './api.js';

export default {


  generarEstadisticas(parametros, store) {

    let predicado = "/api/v0/estadisticas";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiospost(endpoint, parametros);

  }


}