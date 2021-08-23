export default { 
 
    action_id ( context , valor ) { 
context.commit('mutation_id',valor);  

} , 

action_incidenteid ( context , valor ) { 
context.commit('mutation_incidenteid',valor);  

}  
,
action_foliodenuncia ( context , valor ) { 
context.commit('mutation_foliodenuncia',valor);  

},
action_consenso ( context , valor ) { 
context.commit('mutation_consenso',valor);  

},
action_consensodocto ( context , valor ) { 
context.commit('mutation_consensodocto',valor);  

}  
,
action_soportecontacto ( context , valor ) { 
context.commit('mutation_soportecontacto',valor);  

}  
,
action_soporteantes ( context , valor ) { 
context.commit('mutation_soporteantes',valor);  

},
action_soportedurante ( context , valor ) { 
context.commit('mutation_soportedurante',valor);  

}  
,
action_soporteemocionalcontacto ( context , valor ) { 
context.commit('mutation_soporteemocionalcontacto',valor);  

}  
,
action_soporteemocionalantes ( context , valor ) { 
context.commit('mutation_soporteemocionalantes',valor);  

}  
,
action_soporteemocionaldurante ( context , valor ) { 
context.commit('mutation_soporteemocionaldurante',valor);  

}  
,
action_medidasd ( context , valor ) { 
context.commit('mutation_medidasd',valor);  

}  
,
action_medidasd_docto ( context , valor ) { 
context.commit('mutation_medidasd_docto',valor);  

}  
,
action_medidastexto ( context , valor ) { 
context.commit('mutation_medidastexto',valor);  

}  
,
action_fechaCreacion ( context , valor ) { 
context.commit('mutation_fechaCreacion',valor);  

}  
,
action_fechaUpdate ( context , valor ) { 
context.commit('mutation_fechaUpdate',valor);  

}  
,
action_estado ( context , valor ) { 
context.commit('mutation_estado',valor);  

}  ,

action_denuncialegal_medidasarchivo_nombre( context , valor ) { 
context.commit('mutation_denuncialegal_medidasarchivo_nombre',valor);
},

action_denuncialegal_consensoArchivo_nombre( context , valor ) { 
context.commit('mutation_denuncialegal_consensoArchivo_nombre',valor);
},


action_denuncialegal_informapatronato ( context , valor ) { 
    context.commit('mutation_denuncialegal_informapatronato',valor);  
   
}  
,
action_denuncialegal_docto_informapatronato ( context , valor ) { 
    context.commit('mutation_denuncialegal_docto_informapatronato',valor);  
   
}  
,
action_denuncialegal_informaoficinaregional ( context , valor ) { 
    context.commit('mutation_denuncialegal_informaoficinaregional',valor);  
   
}  
,
action_denuncialegal_docto_informaoficinaregional ( context , valor ) { 
    context.commit('mutation_denuncialegal_docto_informaoficinaregional',valor);  
   
}  
,
action_denuncialegal_informaenterector ( context , valor ) { 
    context.commit('mutation_denuncialegal_informaenterector',valor);  
   
}  
,
action_denuncialegal_docto_informaenterector ( context , valor ) { 
    context.commit('mutation_denuncialegal_docto_informaenterector',valor);  
   
}  
,
action_denuncialegal_docto_soportelegal ( context , valor ) { 
    context.commit('mutation_denuncialegal_docto_soportelegal',valor);  
   
}  
,
action_denuncialegal_docto_soporteemocional ( context , valor ) { 
    context.commit('mutation_denuncialegal_docto_soporteemocional',valor);  
   
}  
,
action_denuncialegal_denunciapresentada ( context , valor ) { 
    context.commit('mutation_denuncialegal_denunciapresentada',valor);  
   
}  
,
action_denuncialegal_docto_denunciapresentada ( context , valor ) { 
    context.commit('mutation_denuncialegal_docto_denunciapresentada',valor);  
   
}  ,

action_denuncialegal_doctosCargados( context, valor ){
    console.log("cambiando el valor de doctosCargados a :" + valor);
    context.commit('mutation_denuncialegal_doctosCargados', valor);
    
}

  };

                             