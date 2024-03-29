import apiAbordaje from '@/apialdeas/apiAbordaje.js';

export default {

    cargarAbordaje_por_incidente(id,store){

          return apiAbordaje.cargarAbordaje_por_incidente(id, store);

    },


    cargarDatosAbordaje(id,store){
     

    return apiAbordaje.cargarAbordaje(id, store);
    

    },

    updateSeguimiento(parametros, store){
        return apiAbordaje.updateabordaje(parametros, store);
    },

    asignarVariablesGLobales(datos,store){

            console.log('datos   ');

            console.log(datos);
            // APLICAR PARSE? POR QUE DATOS ES UN OBJETO.
            console.log('datos.seguimiento_incidenteid   ');
            console.log(datos.incidenteid) ;

            console.log("atos.protocolosos : " + datos.incidenteid) ;
            let datos_protocolosos = JSON.stringify(datos.protocolosos) ;
            store.dispatch('action_protocolosos'    ,  datos_protocolosos );

           let datos_incidenteid = JSON.stringify(datos.incidenteid);
           let datos_status = JSON.stringify(datos.status) ;
           let datos_plan = JSON.stringify(datos.plan) ;
            store.dispatch('action_incidenteid', datos_incidenteid) ;
            store.dispatch('action_status',datos_status ) ;
            store.dispatch('action_plan',datos_plan ) ;


            let datos_documentos = JSON.stringify(datos.documentos);
            let datos_notificaciondif = JSON.stringify(datos.notificaciondif) ;
            let datos_notificacionautoridad = JSON.stringify(datos.notificacionautoridad) ;
            store.dispatch('action_documentos', datos_documentos ) ;
            store.dispatch('action_notificaciondif', datos_notificaciondif ) ;
            store.dispatch('action_notificacionautoridad', datos_notificacionautoridad ) ;



            let datos_notificacionpfn = JSON.stringify(datos.notificacionpfn);
            let datos_notificaciodenunciante = JSON.stringify(datos.notificaciodenunciante) ;
            let datos_actavaloracion = JSON.stringify(datos.actavaloracion) ;
            store.dispatch('action_notificacionpfn',  datos_notificacionpfn ) ;
            store.dispatch('action_notificaciodenunciante',  datos_notificaciodenunciante ) ;
            store.dispatch('action_actavaloracion',  datos_actavaloracion ) ;



            let datos_actavaloracion_docto = JSON.stringify(datos.actavaloracion_docto);
            let datos_planrecuperacion = JSON.stringify(datos.planrecuperacion) ;
            let datos_documentos_docto = JSON.stringify(datos.documentos_docto) ;
             store.dispatch('action_actavaloracion_docto',  datos_actavaloracion_docto ) ;
            store.dispatch('action_planrecuperacion', datos_planrecuperacion )  ;
            store.dispatch('action_documentos_docto',  datos_documentos_docto )   ;


            let datos_notificaciondif_docto = JSON.stringify(datos.notificaciondif_docto);
            let datos_notificacionautoridad_docto = JSON.stringify(datos.notificacionautoridad_docto) ;
            let datos_notificacionpfn_docto = JSON.stringify(datos.notificacionpfn_docto) ;
            store.dispatch('action_notificaciondif_docto',  datos_notificaciondif_docto) ;      
            store.dispatch('action_notificacionautoridad_docto',  datos_notificacionautoridad_docto  ) ;
            store.dispatch('action_notificacionpfn_docto',   datos_notificacionpfn_docto );



            let datos_notificaciondenunciante_docto = JSON.stringify(datos.notificaciondenunciante_docto);
            let datos_planrecuperacion_docto = JSON.stringify(datos.planrecuperacion_docto) ;
            let datos_plan_docto = JSON.stringify(datos.plan_docto) ;
            store.dispatch('action_notificaciodenunciante_docto' ,  datos_notificaciondenunciante_docto  ); 
            store.dispatch('action_planrecuperacion_docto'    ,  datos_planrecuperacion_docto) ;
            store.dispatch('action_plan_docto'    ,  datos_plan_docto );

           

    }
  /*

  QUERY: UPDATE `seguimiento` SET 
  `incidenteid`='7', 
  `status`='loas registrodel sur \nsureste', 
  `plan`='\"SI\"',
  `documentos`='\"SI\"', 
  `notificaciondif`='\"SI\"', 
  `notificacionautoridad`='\"NO\"', 
  `notificacionpfn`='\"SI\"', 
  `notificaciodenunciante`='\"NO\"', 
  `actavaloracion`='\"NO\"', 
  `planrecuperacion`='\"SI\"', 
  `documentos_docto`='\"78\"',
   `notificaciondif_docto`='\"79\"', 
   `notificacionautoridad_docto`='\"80\"', 
   `notificacionpfn_docto`='\"81\"', 
   `notificaciondenunciante_docto`='\"82\"',
    `actavaloracion_docto`='\"83\"',
     `planrecuperacion_docto`='\"84\"',
      `plan_docto`='\"77\"'
       WHERE incidenteid=7
ERROR: Incorrect integer value: '"78"' for column 'documentos_docto' at row 1

*/


}