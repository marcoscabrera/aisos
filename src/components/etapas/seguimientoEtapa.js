import apiSeguimiento from '@/apialdeas/apiSeguimiento.js';

export default {


    cargarDatosSeguimiento(id,store){
     

    return apiSeguimiento.cargarSeguimiento(id, store);
    

    },

    updateSeguimiento(parametros, store){
        return apiSeguimiento.updateSeguimiento(parametros, store);
    },

    asignarVariablesGLobales(datos,store){

                     /*
                     incidente, folio ,tipoderespuesta
                      'estatus_consenso'                => $estatusConsenso ,
                      'estatus_medidas'                 => $estatusMedidas,
                      'estatus_denuncia'                => $estatusDenunciaPresentada,
                      'estatus_notificacionpfn'         => $estatus_notificacionpfn,
                      'estatus_notificaciondenunciante' => $estatus_notificaciondenunciante,
                      'estatus_planrecuperacion'        => $estatus_planrecuperacion,
                      'id_consensodocto'                => $idDocumentoConsenso,
                      'id_denunciadocto'                => $idDenuciaPresentada,
                      'id_medidasdocto'                 => $idmedidasdisciplinarias,
                      'id_Notificacionpfn'              => $idNotificacionpfn,
                      'id_NotificacionDenunciante'      => $idNotificacionDenunciante,
                      'id_NotificacionPlan'             => $idNotificacionPlan,
                      'id_ActaHechos'                   => $idActavaloracion,
                      'id_ActaHechos'                   => $idActaHechos


                        */

            //console.log('datos   ');

           // console.log(datos);

            // APLICAR PARSE? POR QUE DATOS ES UN OBJETO.

            console.log('datos.seguimiento_incidenteid');
            console.log(datos.incidenteid) ;
            store.dispatch("setear_Incidente",datos.incidenteid);

           // console.log("atos.protocolosos : " + datos.incidenteid) ;
            //let datos_protocolosos = JSON.stringify(datos.protocolosos) ;
            //store.dispatch('action_protocolosos'    ,  datos_protocolosos );

           let datos_incidenteid = JSON.stringify(datos.incidenteid);
           //let datos_status = JSON.stringify(datos.status) ;
           let datos_plan = JSON.stringify(datos.plan) ;
            store.dispatch('action_incidenteid', datos_incidenteid) ;
           // store.dispatch('action_status',datos_status ) ;
            store.dispatch('action_plan',datos_plan ) ;
             
            store.dispatch('action_seguimiento_tipoderespuesta',datos.tipoderespuesta ) ;
              
            store.dispatch('action_seguimiento_estatus_consenso',datos.estatus_consenso ) ;

            store.dispatch('action_seguimiento_estatus_medidas',datos.estatus_medidas ) ;

            store.dispatch('action_seguimiento_estatus_denuncia',datos.estatus_denuncia ) ;

            store.dispatch('action_seguimiento_estatus_notificacionpfn',datos.estatus_notificacionpfn ) ;

            store.dispatch('action_seguimiento_estatus_notificaciondenunciante',datos.estatus_notificaciondenunciante ) ;

            store.dispatch('action_seguimiento_estatus_planrecuperacion',datos.estatus_palnrecuperacion ) ;
        
            store.dispatch('action_seguimiento_id_consensodocto',datos.id_consensodocto ) ;
           
            store.dispatch('action_seguimiento_id_denunciadocto',datos.id_denunciadocto ) ;

            store.dispatch('action_seguimiento_id_medidasdocto',datos.id_medidasdocto ) ;
       
            store.dispatch('action_seguimiento_id_Notificacionpfn',datos.id_Notificacionpfn ) ;
       
            store.dispatch('action_seguimiento_id_NotificacionDenunciante',datos.NotificacionDenunciante ) ;
       
            store.dispatch('action_seguimiento_id_ActaHechos',datos.id_ActaHechos ) ;
         
            store.dispatch('action_seguimiento_id_ActaValoracion',datos.id_ActaValoracion ) ;
          
          
            /*
               
      

            */


          /*  let datos_documentos = JSON.stringify(datos.documentos);
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
            */

            /*

               action_seguimiento_tipoderespuesta
       
                action_seguimiento_estatus_consenso
        
                action_seguimiento_estatus_medidas
        
                action_seguimiento_estatus_denuncia
        
                action_seguimiento_estatus_notificacionpfn
        
                action_seguimiento_estatus_notificaciondenunciante

                action_seguimiento_estatus_planrecuperacion        
        
                action_seguimiento_id_consensodocto        
        
                action_seguimiento_id_denunciadocto       
                
                action_seguimiento_id_medidasdocto
                
                action_seguimiento_id_Notificacionpfn
        
                action_seguimiento_id_NotificacionDenunciante
        
                action_seguimiento_id_NotificacionPlan
        
                action_seguimiento_id_ActaHechos
        
                action_seguimiento_id_ActaValoracion
      

            */

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