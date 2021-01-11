import api from './api.js';

export default {

    nuevo__cargos(parametros,store){

    let predicado = "/api/v0/cargos";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__cargos(id,store){
        let predicado = "/api/v0/cierre/" + id + "/cargos";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__cargos(id ,store){

        let predicado = "/api/v0/cargos/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__cargos(parametros,store){

        let predicado = "/api/v0/cargos";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__cargos(id,store){

        let predicado = "/api/v0/cargos/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}