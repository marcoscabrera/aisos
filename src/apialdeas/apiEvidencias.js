import api from './api.js';

export default {

    nuevo__evidencias(parametros,store){

    let predicado = "/api/v0/evidencias";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__todas__las__evidencias_de_una__investigacion(id,store){
        let predicado = "/api/v0/investigacion/" + id + "/evidencias";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__evidencias(id ,store){

        let predicado = "/api/v0/evidencias/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__evidencias(parametros,store){

        let predicado = "/api/v0/evidencias";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__evidencias(id,store){

        let predicado = "/api/v0/evidencias/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}