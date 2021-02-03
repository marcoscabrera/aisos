import api from './api.js';

export default {

    nuevo__parametros(parametros,store){

    let predicado = "/api/v0/parametros";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__todos__los__parametros(store){
        let predicado = "/api/v0/parametros";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__parametros(id ,store){

        let predicado = "/api/v0/parametros/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    getParametro(parametro, store){

        let predicado = "/api/v0/parametrosconfig/nombre/" + parametro;

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint getParametro : " + endpoint);
    
        return api.axiosget(endpoint);

    },

    updateParametro(parametro, store){

        let predicado = "/api/v0/parametrosconfig/nombreupdate";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint,parametro);

    },


    update__parametros(parametros,store){

        let predicado = "/api/v0/parametros";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__parametros(id,store){

        let predicado = "/api/v0/parametros/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}


///////////////////////////////////////////////////
