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
        seguimiento_plan_docto: null,
        seguimiento_documentos_docto           :null,
        seguimiento_notificaciondif_docto      :null,
        seguimiento_notificacionautoridad_docto:null,
        seguimiento_notificacionpfn_docto      :null,
        seguimiento_notificaciodenunciante_docto:null,
        seguimiento_actavaloracion_docto       :null,
        seguimiento_protocolosos       :null,
        seguimiento_planrecuperacion_docto     :null
     },   
     mutations,
      actions               }