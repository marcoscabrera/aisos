export default { 
 
    action_fechaInicial ( context , valor ) { 
                       context.commit('mutation_fechaInicial',valor)  
                      
}  ,

action_fechaFinal ( context , valor ) { 
    context.commit('mutation_fechaFinal',valor)  
   
}  ,

action_tipo ( context , valor ) { 
    context.commit('mutation_tipo',valor)  
   
}  ,


action_dato_graficas ( context , valor ) { 
    context.commit('mutation_dato_graficas',valor)  
   
}  ,


}