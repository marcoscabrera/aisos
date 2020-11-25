import api from './api.js';

export default {

    cargarSeguimiento(id ,store){

        let predicado = "/api/v0/incidentes/" + id + "/seguimiento";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    updateSeguimiento(parametros,store){

        let predicado = "/api/v0/seguimiento";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    }
}