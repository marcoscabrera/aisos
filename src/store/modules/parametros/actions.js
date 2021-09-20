export default { 

    

    action_parametros_conexionsas(context,valor){ 
     
        context.commit('mutation_parametros_conexionsas',valor); 
        },
 
 actions_uivars_error_parametros_id(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_id',valor); 
     },
 actions_uivars_error_parametros_nombreParametro(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_nombreParametro',valor); 
     },
 actions_uivars_error_parametros_descripcion(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_descripcion',valor); 
     },
 actions_uivars_error_parametros_valor(context,valor){ 
     
     context.commit('mutation_uivars_error_parametros_valor',valor); 
     },
                                                                           }