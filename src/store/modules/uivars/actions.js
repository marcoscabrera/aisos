export default {

    actions_uivars_esincidente(context,valor){

        context.commit("mmutation_uivars_esincidente",valor);
    },

    actions_uuivars_puedevermenulateral(context,valor){

        context.commit("mmutation_uivars_puedevermenulateral",valor);
    },

    
    actions_uivars_hayUnUsuarioLogueado(context,valor){

        context.commit("mmutation_uivars_hayUnUsuarioLogueado",valor);
    },


    actions_uivars_error_seleccionarPrograma(context, valor){

        context.commit("mutation_uivars_error_seleccionarPrograma",valor);

    },

    actions_uivars_error_seleccionarFecha(context,valor){

        context.commit("mutation_uivars_error_seleccionarFecha",valor);
    },

    actions_uivars_error_textAreaInvolucrados(context,valor){
        context.commit("mutation_uivars_error_textAreaInvolucrados",valor);
    },

    actions_uivars_error_textDenunciante(context,valor){
        context.commit("mutation_uivars_error_textDenunciante",valor);
    },

    actions_uivars_error_comboboxCargos(context,valor){

        context.commit("mutation_uivars_error_comboboxCargos",valor);
    },

    actions_uivars_error_textareaRegistros(context,valor){

        context.commit("mutation_uivars_error_textareaRegistros",valor);
    },

    actions_uivars_error_comboPerfilvictima(context,valor){

        context.commit("mutation_uivars_error_comboPerfilvictima",valor);
    },
    actions_uivars_error_comboRecibeAyuda(context,valor){

        context.commit("mutation_uivars_error_comboRecibeAyuda",valor);
    },
 


}