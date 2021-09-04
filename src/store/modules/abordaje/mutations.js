

export default { 
 
 /*

   mutation_id( state, valor) {   
              state.cargos_id  = valor 
            
 },

 */

 

 mutation_abordaje_mostrarTodo(state,valor)
 {state.abordaje_mostrarTodo =valor; },


 mutation_abordaje_informaenterector(state,valor)
 {state.abordaje_informaenterector =valor; },

 mutation_abordaje_docto_informaenterector(state,valor)
 {state.abordaje_docto_informaenterector =valor; },

 mutation_abordaje_seg_estado_pfn(state,valor)
 {state.abordaje_seg_estado_pfn =valor; },

 mutation_abordaje_seg_docto_pfn(state,valor)
 {state.abordaje_seg_docto_pfn =valor; },

 mutation_abordaje_seg_estado_pd(state,valor)
{state.abordaje_seg_estado_pd =valor; },

mutation_abordaje_seg_docto_pd(state,valor)
 {state.abordaje_seg_docto_pd  =valor; },

 mutation_abordaje_seg_estado_pr(state,valor)
{ state.abordaje_seg_estado_pr =valor; },

mutation_abordaje_seg_docto_pr(state,valor)
 {state.abordaje_seg_docto_pr  =valor; },

 mutation_abordaje_docto_actahecho(state,valor)
 {state.abordaje_docto_actahecho =valor; },

 mutation_abordaje_docto_actavaloracion(state,valor)
 {state.abordaje_docto_actavaloracion =valor; },


mutation_abordaje_id( state, valor) {   
              state.abordaje_id  = valor 
            
 }, 

mutation_abordaje_incidenteid( state, valor) {   
              state.abordaje_incidenteid  = valor 
            
 }, 

mutation_abordaje_status( state, valor) {   
              state.abordaje_status  = valor 
            
 },  
mutation_abordaje_plan( state, valor) {   
              state.abordaje_plan  = valor 
            
 },  

mutation_abordaje_documentos( state, valor) {   
              state.abordaje_documentos  = valor 
            
 },  

mutation_abordaje_plan_docto_nombre( state, valor) {   
              state.abordaje_plan_docto_nombre  = valor 
            
 },
mutation_abordaje_documentos_docto_nombre( state, valor) {   
              state.cargabordaje_documentos_docto_nombreos_id  = valor 
            
 },

  mutation_abordaje_plan_docto( state, valor) {   
              state.abordaje_plan_docto  = valor 
            
 },
mutation_abordaje_documentos_docto  ( state, valor) {   
              state.abordaje_documentos_docto  = valor 
            
 },    

 /// mutaciones para validaciones 
 
 
 
 mutation_abordaje_validacion_id ( state, valor) {   
  state.abordaje_validacion_id  = valor 

},   


 mutation_abordaje_validacion_incidenteid ( state, valor) {   
  state.abordaje_validacion_id  = valor ;

},   

 mutation_abordaje_validacion_status ( state, valor) {   
  state.abordaje_validacion_status  = valor ;

},   

 mutation_abordaje_validacion_plan ( state, valor) {   
  state.abordaje_validacion_plan  = valor ;

},   

 mutation_abordaje_validacion_plan_docto ( state, valor) {   
  state.abordaje_validacion_plan_docto  = valor 

},   


 mutation_abordaje_validacion_documentos ( state, valor) {   
  state.abordaje_validacion_documentos_docto  = valor 

},   


 mutation_abordaje_validacion_documentos_docto ( state, valor) {   
  state.abordaje_validacion_documentos_docto  = valor 

},   
        

 }