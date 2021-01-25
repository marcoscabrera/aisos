
import mutations from './mutations.js';
import actions from './actions.js';
export default {
//para consultar iconos.
state: {

    uivar_esincidente: false,
    uivars_puedevermenulateral : false,
    uivars_hayUnUsuarioLogueado : false,

    uivars_error_seleccionarPrograma:false,
    uivars_error_seleccionarFecha : false,
    uivars_error_textAreaInvolucrados : false,

    uivars_error_textDenunciante : false,
    uivars_error_comboboxCargos : false,
    uivars_error_textareaRegistros : false,

    uivars_error_comboPerfilvictima : false,
    uivars_error_comboRecibeAyuda : false,

    uivars_error_textareaMedidas : false,
    uivars_error_comboesunincidente : false,
    uivars_error_textareaTestigos :false
    

},
mutations,
actions


}