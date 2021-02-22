export default { 
 
    action_id ( context , valor ) { 
context.commit('mutation_id',valor)  ;

}  ,

action_incidenteid ( context , valor ) { 
context.commit('mutation_incidenteid',valor) ; 

}  
,
action_status ( context , valor ) { 
context.commit('mutation_status',valor)  ;

}  
,
action_plan ( context , valor ) { 
context.commit('mutation_plan',valor)  ;

}  
,
action_documentos ( context , valor ) { 
context.commit('mutation_documentos',valor)  ;

}  
,
action_notificaciondif ( context , valor ) { 
context.commit('mutation_notificaciondif',valor) ; 

}  
,
action_notificacionautoridad ( context , valor ) { 
context.commit('mutation_notificacionautoridad',valor) ; 

}  
,
action_notificacionpfn ( context , valor ) { 
context.commit('mutation_notificacionpfn',valor)  ;

}  
,
action_notificaciodenunciante ( context , valor ) { 
context.commit('mutation_notificaciodenunciante',valor);  

}  
,
action_actavaloracion ( context , valor ) { 
context.commit('mutation_actavaloracion',valor)  ;

}  
,
action_planrecuperacion ( context , valor ) { 
context.commit('mutation_planrecuperacion',valor)  ;

}  ,

action_documentos_docto   ( context , valor ) {
    context.commit('mutation_seguimiento_documentos_docto',valor);
},

    action_notificaciondif_docto      ( context , valor ) {
    context.commit('mutation_seguimiento_notificaciondif_docto',valor);
    },
    action_notificacionautoridad_docto( context , valor ) {
    context.commit('mutation_seguimiento_notificacionautoridad_docto',valor);
    },
    action_notificacionpfn_docto      ( context , valor ) {
    context.commit('mutation_seguimiento_notificacionpfn_docto',valor);
    },
    action_notificaciodenunciante_docto( context , valor ) {
    context.commit('mutation_seguimiento_notificaciodenunciante_docto',valor);
    },
  action_actavaloracion_docto       ( context , valor ) {
     context.commit('mutation_seguimiento_actavaloracion_docto',valor);
     },
  action_planrecuperacion_docto     ( context , valor ) {
    context.commit('mutation_seguimiento_planrecuperacion_docto',valor);
    },

    action_plan_docto     ( context , valor ) {
        context.commit('mutation_seguimiento_plan_docto',valor);
        },
    
    action_protocolosos     ( context , valor ) {
            context.commit('mutation_seguimiento_protocolosos',valor);
            },

    
            action_seguimiento_planrecuperacion_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_planrecuperacion_docto_nombre',valor);
            },
            action_seguimiento_actavaloracion_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_actavaloracion_docto_nombre',valor);
            },

            action_seguimiento_notificaciodenunciante_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_notificaciodenunciante_docto_nombre',valor);
            },

            action_seguimiento_plan_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_plan_docto_nombre',valor);
            },
            action_seguimiento_documentos_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_documentos_docto_nombre',valor);
            },
            action_seguimiento_notificaciondif_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_notificaciondif_docto_nombre',valor);
            },
            action_seguimiento_notificacionautoridad_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_notificacionautoridad_docto_nombre',valor);
            },
            action_seguimiento_notificacionpfn_docto_nombre( context , valor ) {
            context.commit('mutation_seguimiento_notificacionpfn_docto_nombre',valor);
            },

        

 }