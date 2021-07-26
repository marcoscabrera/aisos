import api from './api.js';

export default {

    borrarBaseDeDatos(store){


        let predicado = "/api/v0/bddd" ;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);

    },


    borrarDoctos(store){


        let predicado = "/api/v0/carpetas" ;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);

    }


}