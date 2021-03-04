export default { 
 
   action_id ( context , valor ) { 
         context.commit('mutation_id',valor)  
                        
  }  ,
 
 action_investigacion_incidenteid ( context , valor ) { 
    context.commit('mutation_investigacion_incidenteid',valor)  
                        
  }  
 ,
 action_folioinvestigacion_docto ( context , valor ) { 
   context.commit('mutation_folioinvestigacion_docto',valor)  
                        
  }  
 ,
 action_registroincidentes_docto ( context , valor ) { 
  context.commit('mutation_registroincidentes_docto',valor)  
                        
  }  
 ,
 action_cartautorizacion_docto ( context , valor ) { 
    context.commit('mutation_cartautorizacion_docto',valor)  
                        
  }  
 ,
 action_terminosreferencia_doctp ( context , valor ) { 
     context.commit('mutation_terminosreferencia_doctp',valor)  
                        
  }  
 ,
 action_plan_docto ( context , valor ) { 
     context.commit('mutation_plan_docto',valor)  
                        
  }  
 ,
 action_informe_docto ( context , valor ) { 
      context.commit('mutation_informe_docto',valor)  
                        
  }  
 ,
 action_fechaCreacion ( context , valor ) { 
     context.commit('mutation_fechaCreacion',valor)  
                        
  }  
 ,
 action_fechaUpdate ( context , valor ) { 
    context.commit('mutation_fechaUpdate',valor)} , 


  
    action_investigacion_evidencias( context , valor ) { 
    context.commit('mutation_investigacion_evidencias',valor)} ,

    action_investigacion_registroincidentes_docto_nombre( context , valor ) { 
    context.commit('mutation_investigacion_registroincidentes_docto_nombre',valor)} ,
  
    action_investigacion_cartautorizacion_docto_nombre( context , valor ) { 
    context.commit('mutation_investigacion_cartautorizacion_docto_nombre',valor)} ,
   
    action_investigacion_terminosreferencia_doctp_nombre( context , valor ) { 
    context.commit('mutation_investigacion_terminosreferencia_doctp_nombre',valor)} ,
   
    action_investigacion_plan_docto_nombre( context , valor ) { 
    context.commit('mutation_investigacion_plan_docto_nombre',valor)} ,
   
    action_investigacion_informe_docto_nombre( context , valor ) { 
    context.commit('mutation_investigacion_informe_docto_nombre',valor)} ,

}