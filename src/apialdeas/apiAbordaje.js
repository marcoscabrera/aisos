import api from './api.js';

export default {

    cargarAbordaje(id ,store){

        let predicado = "/api/v0/abordaje/" +id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

        cargarAbordaje_por_incidente(id ,store){

        let predicado = "/api/v0/incidente/"+ id + "/abordaje/l" ;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint :  " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    updateabordaje(parametros,store){

        let predicado = "/api/v0/abordaje";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    }
}