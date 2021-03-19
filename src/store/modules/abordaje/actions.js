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

           
        

 }