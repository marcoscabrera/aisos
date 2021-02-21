export default { 


  action_usuarios_tokenUsuario (context , valor) {

    
    context.commit('mutation_usuarios_tokenUsuario',valor)  

  },
  
    action_usuarios_id ( context , valor ) { 
                         context.commit('mutation_usuarios_id',valor)  
                        
  }  ,
 
 action_usuarios_nombre ( context , valor ) { 
                         context.commit('mutation_usuarios_nombre',valor)  
                        
  }  
 ,
 action_usuarios_email ( context , valor ) { 
                         context.commit('mutation_usuarios_email',valor)  
                        
  }  
 ,

 action_usuarios_password ( context , valor ) { 
                         context.commit('mutation_usuarios_password',valor)  
                        
  }  
 ,
 action_usuarios_rol ( context , valor ) { 
                         context.commit('mutation_usuarios_rol',valor)  
                        
  }  
 ,
 action_usuarios_programa ( context , valor ) { 
                         context.commit('mutation_usuarios_programa',valor)  
                        
  }  
 ,
 action_usuarios_fechaCreacion ( context , valor ) { 
                         context.commit('mutation_usuarios_fechaCreacion',valor)  
                        
  }  
 ,
 action_usuarios_activo ( context , valor ) { 
                         context.commit('mutation_usuarios_activo',valor)  
                        
  } ,
  
  action_usuarios_usuariologueado( context , valor ) { 
    context.commit('mutation_usuariologueado',valor)  
   },
   action_usuarios_usuariologueado_rol( context , valor ) { 
    context.commit('mutation_usuariologueado_rol',valor)  
   }
}