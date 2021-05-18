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
        abordaje_estado            :null,


        /// variables para validacion 

        abordaje_validacion_id : false,
        abordaje_validacion_incidenteid : false,
        abordaje_validacion_status : false,
        abordaje_validacion_plan : false,
        abordaje_validacion_plan_docto : false,
        abordaje_validacion_documentos : false,
        abordaje_validacion_documentos_docto : false,



     },   
     mutations,
      actions               }