import api from './api.js';

export default {

    nuevo__doctosapoyo(parametros,store){

    let predicado = "/api/v0/doctosapoyo";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__todos__los__doctosapoyo(store){
        let predicado = "/api/v0/doctosapoyo";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },
    cargar__todos__los__doctosapoyo_por_categoria(parametro , store){
        let predicado = "/api/v0/doctosapoyo/categoria/" + parametro;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__doctosapoyo(id ,store){

        let predicado = "/api/v0/doctosapoyo/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__doctosapoyo(parametros,store){

        let predicado = "/api/v0/doctosapoyo";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__doctosapoyo(id,store){

        let predicado = "/api/v0/doctosapoyo/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}

