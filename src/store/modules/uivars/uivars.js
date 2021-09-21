
import mutations from './mutations.js';
import actions from './actions.js';
export default {
//para consultar iconos.
state: {


    uivars_verAsistenteNavegacion : false,

    uivars_verDocumentosAyuda : false,
    ////////////////////////////////////
        uivars_menu : 1,
    ///////////// parametros   /////////
    ////////////////////////////////////
    uivars_enDondeEstoy : null,
    ///////////// parametros   /////////
    
    uivars_parametros : [],

    uivars_parametro_imagenLogin :'',

    //////////////////////////////////

    uivars_vermenuprincipal : false,

     //////////////////////////////////

     uivars_enviodecorreos : '',
    //////////////////////////////////

    regresar_A_despues_de_impresion : '',
    
    uivars_overlay :false,

    verComponenteVuePdfViewer:  false,

    ////////////////////////////////
    uivar_esincidente: false,
    uivars_puedevermenulateral : false,
    uivars_puedever_configuracion : false,
    uivars_hayUnUsuarioLogueado : false,
    
    uivars_error_seleccionarPrograma:false,
    uivars_error_seleccionarFecha : false,
    uivars_error_textAreaInvolucrados : false,

    uivars_error_textDenunciante : false,
    uivars_error_comboboxCargos : false,
    uivars_error_textareaRegistros : false,

    uivars_error_comboPerfilAgresor : false,

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


    //////////// errorees de conciencia ////////

    uivars_error_conciencia_estatus:false,
    uivars_error_conciencia_clasificacion:false,
    uivars_error_conciencia_activo:false,
    uivars_error_conciencia_tipo:false,
    uivars_error_conciencia_docto:false,
    uivars_error_conciencia_estatusplan:false,


    //////////////////////////////////7//////////

    uivars_docto_a_ver : '',

     uivars_ir_origen_que_solicito_docto :'',

     /////////////////////////////////////////////

     uivars_tipo_conciencia_o_prevencion : '',

     uivars_error_DocuementoConciencia : '',

     //////errorees de seguimiento//////////////

     uivars_error_seguimiento_seguimiento_id:false, 

uivars_error_seguimiento_seguimiento_incidenteid:false, 

uivars_error_seguimiento_seguimiento_status:false, 

uivars_error_seguimiento_seguimiento_plan:false, 

uivars_error_seguimiento_seguimiento_documentos:false, 

uivars_error_seguimiento_seguimiento_notificaciondif:false, 

uivars_error_seguimiento_seguimiento_notificacionautoridad:false, 

uivars_error_seguimiento_seguimiento_notificacionpfn:false, 

uivars_error_seguimiento_seguimiento_notificaciodenunciante:false, 

uivars_error_seguimiento_seguimiento_actavaloracion:false, 

uivars_error_seguimiento_seguimiento_planrecuperacion:false, 

uivars_error_seguimiento_seguimiento_plan_docto:false, 

uivars_error_seguimiento_seguimiento_documentos_docto:false, 

uivars_error_seguimiento_seguimiento_notificaciondif_docto:false, 

uivars_error_seguimiento_seguimiento_notificacionautoridad_docto:false, 

uivars_error_seguimiento_seguimiento_notificacionpfn_docto:false, 

uivars_error_seguimiento_seguimiento_notificaciodenunciante_docto:false, 

uivars_error_seguimiento_seguimiento_actavaloracion_docto:false, 

uivars_error_seguimiento_seguimiento_protocolosos:false, 

uivars_error_seguimiento_seguimiento_planrecuperacion_docto:false, 

////cierre


uivars_error_incidente_textocierre : false,

uivars_cuantosTestigos : 0,


},
mutations,
actions


}