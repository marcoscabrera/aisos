import api from './api.js';

export default {

    nuevo__investigacion(parametros,store){

    let predicado = "/api/v0/investigacion";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__investigacion_x_incidenteID(id,store){
        let predicado = "/api/v0/denuncia/" + id + "/investigacion";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__investigacion_x_id(id ,store){

        let predicado = "/api/v0/investigacion/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__investigacion(parametros,store){

        let predicado = "/api/v0/investigacion";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    Delete__investigacion(id,store){

        let predicado = "/api/v0/investigacion/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}