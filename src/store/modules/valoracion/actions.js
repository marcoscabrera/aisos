export default {

    action_incidenteid( context, valor) {
        context.commit("mutation_incidenteid", valor);
      }, //termina acccion 

      action_medidasintegrales_docto( context, valor) {
        context.commit("mutation_medidasintegrales_docto", valor);
      }, //termina acccion 

   
      action_fechacreacion( context, valor) {
        context.commit("mutation_fechacreacion", valor);
      }, //termina acccion 
 
      action_fechaupdate( context, valor) {
        context.commit("mutation_fechaupdate", valor);
      }, //termina acccion 
    
      action_textovi( context, valor) {
        context.commit("mutation_textovi", valor);
      }, //termina acccion 

      action_tipologiadelincidente( context, valor) {
        context.commit("mutation_tipologiadelincidente", valor);
      }, //termina acccion 

      action_niveldelincidente(context, valor) { 

        context.commit("mutation_niveldelincidente", valor);
    },
     
    action_tipodecaso(context, valor) { 

        context.commit("mutation_tipodecaso", valor);
    },
 
    
    action_confirmaincidente(context, valor) { 

        context.commit("mutation_confirmaincidente", valor);
    },

    action_tipoderespuesta(context, valor) { 

        context.commit("mutation_tipoderespuesta", valor);
    },   
    action_medidasintegrales(context, valor) { 

        context.commit("mutation_medidasintegrales", valor);
    },    
    action_activo(context, valor) { 

        context.commit("mutation_activo", valor);
    },    
}

/*    
 

 

     

    mutation_activo(state, valor) { 

        state.etapavaloracion_activo = valor;
    },    
         
 */