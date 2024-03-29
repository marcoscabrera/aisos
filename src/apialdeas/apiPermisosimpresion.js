import api from './api.js';

export default {

    nuevo__permisosimpresion(parametros,store){

    let predicado = "/api/v0/permisosimpresion";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;
     

    return api.axiospost(endpoint, parametros);
    },

    cargar__todos__los__permisosimpresion(store){
        let predicado = "/api/v0/permisosimpresion";
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);
    },

    cargar__permisosimpresion(id ,store){

        let predicado = "/api/v0/permisosimpresion/" + id;
        

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     

    },

    update__permisosimpresion(parametros,store){

        let predicado = "/api/v0/permisosimpresion";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
     

    },

    update__permisosimpresion_autorizar(parametros,store){

        let predicado = "/api/v0/permisosimpresion/autorizar";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiospost(endpoint, parametros);
     

    },

    Delete__permisosimpresion(id,store){

        let predicado = "/api/v0/permisosimpresion/" + id;
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosdelete(endpoint);
     

    },

    Post_generarDocumentoDeImpresion(parametros, store) {

        let predicado = "/api/v0/permisosimpresion/generar";

        let apix = store.state.urlServidor;

        let endpoint = apix + predicado;
        
    
        return api.axiospost(endpoint, parametros);
    },


    /*
      Esta funcion se utiiza cuando se manda a imprimir directamente
      sin necesidad de consultar la tabla de permisos.
    */
    Post_generarDocumentoDeImpresion_sinAutorizacion(parametros, store) {

        let predicado = "/api/v0/permisosimpresion/generar/";

        let apix = store.state.urlServidor;

        let endpoint = apix + predicado;
        
    
        return api.axiospost(endpoint, parametros);
    }
}


///////////////////////////////////////////////////
