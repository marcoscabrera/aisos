import api from './api.js';

export default {

    nuevoTestigo(parametros,store){

    let predicado = "/api/v0/testigos";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargarTestigos(id,store){
        let predicado = "/api/v0/cierre/" + id + "/testigos";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargarTestigo(id ,store){

        let predicado = "/api/v0/testigos/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    updateTestigo(parametros,store){

        let predicado = "/api/v0/testigos";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    DeleteTestigo(id,store){

        let predicado = "/api/v0/testigos/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    }
}