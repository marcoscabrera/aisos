import api from './api.js';

export default {

    hola() { 
        console.log("====== hola ======");
    },

    saludo(store) {
        let predicado = "/hola";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiosget(endpoint);
     },

    nuevoIncidente(parametros, store) { 

    let predicado = "/api/v0/incidentes";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiospost(endpoint, parametros);

    },

    updateIncidente(parametros, store) { 

        let predicado = "/api/v0/incidentes";
    
        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosput(endpoint, parametros);
    
        },

    recuperarTodosLosIncidentes(usuarioLogueadoID,store) {

    let predicado = '/api/v0/incidentes/'+ usuarioLogueadoID+'/incidentes';

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiosget(endpoint);       
     },

    recuperarUnIncidente(parametro, store) { 

    
    let predicado = "/api/v0/incidentes/" + parametro;

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

    console.log("valor del endpoint " + endpoint);

    return api.axiosget(endpoint);

    },

    nuevoUsuario(parametros, store) {
        
        
    let predicado = "/api/v0/users";

    let apix = store.state.urlServidor;

    let endpoint = apix + predicado;

        console.log("valor del endpoint " + endpoint);
         console.log("valor del parametros" + parametros);

    return api.axiospost(endpoint, parametros);

     },

     revisarCierre(parametro,store) {

        ///api/v0/incidentes/{id}/cierre
        let predicado = "/api/v0/incidentes/"+ parametro +"/cierre" ;

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
        console.log("valor del endpoint " + endpoint);
    
        return api.axiosget(endpoint);

     },

     realizarCierre(parametros, store){

       
        let predicado = "/api/v0/cierre";

        let apix = store.state.urlServidor;
    
        let endpoint = apix + predicado;
    
            console.log("valor del endpoint " + endpoint);
             console.log("valor del parametros" + parametros);
    
        return api.axiosput(endpoint, parametros);

     }

    
};