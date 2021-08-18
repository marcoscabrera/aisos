import mutations from './mutations.js'; 
import actions from './actions.js'; 
 
 export default { 
 
 state : { 
        seguimiento_id : null,
        seguimiento_incidenteid: null,

        seguimiento_status: null,
        seguimiento_plan: null,
        seguimiento_documentos: null,
        seguimiento_notificaciondif: null,
        seguimiento_notificacionautoridad: null,
        seguimiento_notificacionpfn: null,
        seguimiento_notificaciodenunciante: null,
        seguimiento_actavaloracion: null,
        seguimiento_planrecuperacion: null,
        seguimiento_protocolosos       :null,
        

        seguimiento_plan_docto: null,
        seguimiento_documentos_docto           :null,
        seguimiento_notificaciondif_docto      :null,
        seguimiento_notificacionautoridad_docto:null,
        seguimiento_notificacionpfn_docto      :null,
        seguimiento_notificaciodenunciante_docto:null,
        seguimiento_actavaloracion_docto       :null,
         seguimiento_planrecuperacion_docto     :null,

        seguimiento_planrecuperacion_docto_nombre      :null,
        seguimiento_actavaloracion_docto_nombre        :null,
        seguimiento_notificaciodenunciante_docto_nombre :null,
        seguimiento_plan_docto_nombre: null,
        seguimiento_documentos_docto_nombre           :null,
        seguimiento_notificaciondif_docto_nombre      :null,
        seguimiento_notificacionautoridad_docto_nombre:null,
        seguimiento_notificacionpfn_docto_nombre      :null,

        /*
        Se agregan los nuevos elementos,
        estos surgen por la modifiaciones de seguimiento
        que practicamente se ha covertido en una vista dinamica
        mas que una sola tabla.
        */
         seguimiento_tipoderespuesta : null,

         estatus_consenso   : null,

         estatus_medidas   : null,

         estatus_denuncia  : null,

         estatus_notificacionpfn  : null,

         estatus_notificaciondenunciante : null,

         estatus_planrecuperacion : null,

         id_consensodocto : '0',

         id_denunciadocto : '0',

         id_medidasdocto  : '0',

         id_Notificacionpfn  : '0',

         id_NotificacionDenunciante : '0',

         id_NotificacionPlan   : '0',

         id_ActaHechos    : '0',
         
         id_ActaValoracion : '0'

 }, 
        mutations, actions 
   }