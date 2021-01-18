import mutations from './mutations.js'; 
 import actions from './actions.js'; 
 
 export default { 
 
     state : {                             
        usuarios_id: null,  
        usuarios_nombre: null  ,
        usuarios_email: null  ,
        usuarios_password: null  ,
        usuarios_rol: null  ,
        usuarios_programa: null  ,
        usuarios_fechaCreacion: null  ,
        usuarios_activo: null  ,
        usuarios_usuariologueado : [],
        usuarios_usuariologueado_rol : [],
        
              },
         mutations,
         actions 
   }