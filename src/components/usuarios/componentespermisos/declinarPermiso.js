import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';

export default {

   

    declinarPermiso(id,usuarioidautorizo,store){
    
    let parametros = {
           
        id : id ,usuarioidautorizo:usuarioidautorizo, respuesta : 'DECLINADO'
    };

    return apiPermisosimpresion.update__permisosimpresion_autorizar(parametros,store);

    }
}