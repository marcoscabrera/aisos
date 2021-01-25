export default {


    mmutation_uivars_esincidente(state,valor){

        state.uivar_esincidente= valor;

    },

    mmutation_uivars_puedevermenulateral(state,valor){

        state.uivars_puedevermenulateral= valor;

    },
    
    mmutation_uivars_hayUnUsuarioLogueado(state,valor){

        state.uivars_hayUnUsuarioLogueado= valor;

    },

    mutation_uivars_error_seleccionarPrograma(state,valor){

        state.uivars_error_seleccionarPrograma= valor;

    },
    mutation_uivars_error_seleccionarFecha(state,valor){

        state.uivars_error_seleccionarFecha= valor;
    },

    mutation_uivars_error_textAreaInvolucrados(state,valor){
        state.uivars_error_textAreaInvolucrados= valor;
    },

    mutation_uivars_error_textDenunciante(state,valor){
        state.uivars_error_textDenunciante= valor;
    },

    mutation_uivars_error_comboboxCargos(state,valor){

        state.uivars_error_comboboxCargos= valor;
    },

    mutation_uivars_error_textareaRegistros(state,valor) {

        state.uivars_error_textareaRegistros= valor;
    },
}