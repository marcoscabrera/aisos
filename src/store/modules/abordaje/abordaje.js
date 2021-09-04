import mutations from './mutations.js'; 
import actions from './actions.js'; 
 
 export default { 
 
 state : { 
        abordaje_id                : null,
        abordaje_incidenteid       : null,
        abordaje_status            : null,
        abordaje_plan              : null,
        abordaje_documentos        : null,
        abordaje_plan_docto        : null,
        abordaje_documentos_docto  :null,
        abordaje_estado           :null,
        
        abordaje_informaenterector : '',
        abordaje_docto_informaenterector : '',

        abordaje_seg_estado_pfn : '',
        abordaje_seg_docto_pfn : '',

        abordaje_seg_estado_pd : '',
        abordaje_seg_docto_pd  : '',

        abordaje_seg_estado_pr : '',
        abordaje_seg_docto_pr  : '',

        abordaje_docto_actahecho : '',
        abordaje_docto_actavaloracion : '',



        /// variables para validacion 

        abordaje_validacion_id : false,
        abordaje_validacion_incidenteid : false,
        abordaje_validacion_status : false,
        abordaje_validacion_plan : false,
        abordaje_validacion_plan_docto : false,
        abordaje_validacion_documentos : false,
        abordaje_validacion_documentos_docto : false,

        abordaje_mostrarTodo : false,



     },   
     mutations,
      actions               }