import api from './api.js';

export default {

    conseguirArchivo(id,state){

        let endpoint= state.urlServidor +'/api/v0/files/' + id;
        console.log(" valor del endpoint  : " + endpoint);
        return api.axiosget(endpoint);

    }

    

  

}