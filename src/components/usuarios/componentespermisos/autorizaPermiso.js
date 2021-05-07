import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';

export default {

   

    autorizarPermiso(id,usuarioidautorizo ,store){
    
    let parametros = {
           
        id : id , usuarioidautorizo:usuarioidautorizo , respuesta : 'APROBADO'
    };
    apiPermisosimpresion.update__permisosimpresion_autorizar(parametros,store);

    }
}