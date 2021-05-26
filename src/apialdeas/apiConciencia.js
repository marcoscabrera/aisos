import api from './api.js';

export default {

    nuevo__conciencia(parametros,store){

    let predicado = "/api/v0/conciencia";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },
    

    cargar__todos__los__conciencia(parametro,store){
        let predicado = "/api/v0/conciencia/tipo/"+ parametro;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },
        cargar__todos__los__conciencia_de_tipo(tipo,store){

        let predicado = "/api/v0/conciencia/"+ tipo+"/todos";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint cargar__todos__los__conciencia_de_tipo : " + endpoint);
    
        return api.axiosget(endpoint);
    },


    cargar__conciencia(id ,store){

        let predicado = "/api/v0/conciencia/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__conciencia(parametros,store){

        let predicado = "/api/v0/conciencia";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__conciencia(id,store){

        let predicado = "/api/v0/conciencia/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}


///////////////////////////////////////////////////
