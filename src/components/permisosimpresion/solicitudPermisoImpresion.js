
import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';

export default {

async  solicitudImpresion(
       usuarioid,
       incidenteid,
       etapa,
       store
   ){
       let parametros = {
        usuarioid:usuarioid,
        incidenteid: incidenteid,
        etapa : etapa
       };
   
       let p = apiPermisosimpresion.nuevo__permisosimpresion(parametros,store);

        p
       .then( response => {
            console.log(JSON.stringify(response.data));
        } )
       .catch( error => { console.log(JSON.stringify(error.data))});



   }

}