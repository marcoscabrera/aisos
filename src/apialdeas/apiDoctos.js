import api from './api.js';

export default {

    conseguirArchivo(id,state){

        let endpoint= state.urlServidor +'/api/v0/files/' + id;
        console.log(" valor del endpoint  : " + endpoint);
        return api.axiosget(endpoint);

    },

    nuevo__docto_subido_a_cloud(parametros,store){

        let predicado = "/api/v0/doctosencloud";
    
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
         
    
        return api.axiospost(endpoint, parametros);
        }

    

  

}