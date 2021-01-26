
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
    uivars_error_textareaTestigos :false,

    /////////////////////////////////////////////////////
   
    uivars_error_textareaValoracion : false,
    uivars_error_cardConfirmacion : false,
    uivars_error_cardTipologia: false,
    uivars_error_cardNivelIncidente :false,
    uivars_error_cardTipoCaso :false,
    uivars_error_cardTipoRespuesta :false,
    
    uivars_error_cardMedidasIntegrales:false,

},
mutations,
actions


}