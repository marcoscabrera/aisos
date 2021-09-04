export default { 
 
    action_abordaje_id ( context , valor ) { 
context.commit('mutation_abordaje_id',valor)  ;

}  ,

action_abordaje_incidenteid ( context , valor ) { 
context.commit('mutation_abordaje_incidenteid',valor) ; 

}  
,
action_abordaje_status ( context , valor ) { 
context.commit('mutation_abordaje_status',valor)  ;

}  
,
action_abordaje_plan ( context , valor ) { 
context.commit('mutation_abordaje_plan',valor)  ;

}  
,
action_abordaje_documentos ( context , valor ) { 
context.commit('mutation_abordaje_documentos',valor)  ;

}  ,
action_abordaje_plan_docto ( context , valor ) { 
context.commit('mutation_abordaje_plan_docto',valor)  ;

}  


,
action_abordaje_documentos_docto ( context , valor ) { 
context.commit('mutation_abordaje_documentos_docto',valor)  ;

}  ,
 action_abordaje_plan_docto_nombre( context , valor ) {
    context.commit('mutation_abordaje_plan_docto_nombre',valor);
  },
  action_abordaje_documentos_docto_nombre( context , valor ) {
   context.commit('mutation_abordaje_documentos_docto_nombre',valor);
 },


 ///acciones para validacion

  
 
 action_abordaje_validacion_id ( context, valor) {   
 
  context.commit("mutation_abordaje_validacion_id" , valor );

},   


action_abordaje_validacion_incidenteid ( context, valor) {   
  context.commit("mutation_abordaje_validacion_incidenteid", valor );

},   

action_abordaje_validacion_status ( context, valor) {   
  context.commit("mutation_abordaje_validacion_status", valor );

},   

action_abordaje_validacion_plan ( context, valor) {   
  context.commit("mutation_abordaje_validacion_plan", valor );

},   

action_abordaje_validacion_plan_docto ( context, valor) {   
  context.commit("mutation_abordaje_validacion_plan_docto", valor );

},   


action_abordaje_validacion_documentos ( context, valor) {   
  context.commit("mutation_abordaje_validacion_documentos", valor );

},   


 action_abordaje_validacion_documentos_docto ( context, valor) {   
  context.commit("mutation_abordaje_validacion_documentos_docto", valor )

},   


action_abordaje_informaenterector(context,valor)
{  context.commit("mutation_abordaje_informaenterector",valor);  },
  

action_abordaje_docto_informaenterector(context,valor){

  context.commit("mutation_abordaje_docto_informaenterector",valor)

},



action_abordaje_mostrarTodo(context,valor){

  context.commit("mutation_abordaje_mostrarTodo",valor)

},




action_abordaje_seg_estado_pfn(context,valor){

  context.commit("mutation_abordaje_seg_estado_pfn",valor)

},

action_abordaje_seg_docto_pfn(context,valor){

  context.commit("mutation_abordaje_seg_docto_pfn",valor)

},


action_abordaje_seg_estado_pd(context,valor){

  context.commit("mutation_abordaje_seg_estado_pd",valor)

},

action_abordaje_seg_docto_pd(context,valor){

  context.commit("mutation_abordaje_seg_docto_pd",valor)

},

action_abordaje_seg_estado_pr(context,valor){

  context.commit("mutation_abordaje_seg_estado_pr",valor)

},


action_abordaje_seg_docto_pr(context,valor){

  context.commit("mutation_abordaje_seg_docto_pr",valor)

},


action_abordaje_docto_actahecho(context,valor){

  context.commit("mutation_abordaje_docto_actahecho",valor)

},



action_abordaje_docto_actavaloracion(context,valor){

  context.commit("mutation_abordaje_docto_actavaloracion",valor)

},







        
        

 }