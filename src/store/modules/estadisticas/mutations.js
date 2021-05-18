export default { 
 
    mutation_fechaInicial( state, valor) {   
                 state.fechaInicial   = valor 
               
    },
    mutation_fechaFinal( state, valor) {   
        state.fechaFinal   = valor 
      
},

    mutation_tipo( state, valor) {   
        state.tipo   = valor ;
    
    },

    mutation_dato_graficas(state, valor){
        
        state.datos_graficas = valor;

    }

}