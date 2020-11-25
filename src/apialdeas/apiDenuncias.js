import api from './api.js';

export default {

    nuevo__denuncialegal(parametros,store){

    let predicado = "/api/v0/denuncialegal";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__denuncialegal(id,store){
        let predicado = "/api/v0/incidente/" + id + "/denuncialegal";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__denuncialegal2(id ,store){

        let predicado = "/api/v0/denuncialegal/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__denuncialegal(parametros,store){

        let predicado = "/api/v0/denuncialegal";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__denuncialegal(id,store){

        let predicado = "/api/v0/denuncialegal/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}