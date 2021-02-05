export default {


     ////paramtros

     actions_uivars_parametros(context,valor){

        context.commit("mutation_uivars_parametros",valor);
    },

    actions_uivars_parametro_imagenLogin(context,valor){

        context.commit("mutation_uivars_imagenLogin",valor);
    },


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

    
 
    actions_uivars_error_textareaMedidas(context,valor){

        context.commit("mutation_uivars_error_textareaMedidas",valor);
    },

    actions_uivars_error_comboesunincidente(context,valor){

        context.commit("mutation_uivars_error_comboesunincidente",valor);
    },

    actions_uivars_error_textareaTestigos(context,valor){

        context.commit("mutation_uivars_error_textareaTestigos",valor);
    },

    //////////////////////////////////



    actions_uivars_error_textareaValoracion(context,valor){

        context.commit("mutation_uivars_error_textareaValoracion",valor);
    },

    actions_uivars_error_cardConfirmacion(context,valor){

        context.commit("mutation_uivars_error_cardConfirmacion",valor);
    },
    
    action_uivars_error_cardTipologia(context,valor){

        context.commit("mutation_uivars_error_cardTipologia",valor);
    },

    actions_uivars_error_cardNivelIncidente(context,valor){

        context.commit("mutation_uivars_error_cardNivelIncidente",valor);
    },

    
    actions_uivars_error_cardTipoCaso(context,valor){

        context.commit("mutation_uivars_error_cardTipoCaso",valor);
    },
    
    
    actions_uivars_error_cardTipoRespuesta(context,valor){

        context.commit("mutation_uivars_error_cardTipoRespuesta",valor);
    },
    actions_uivars_error_cardMedidasIntegrales(context,valor){

        context.commit("mutation_uivars_error_cardMedidasIntegrales",valor);
    },

    actions_uivars_docto_a_ver(context,valor){

        context.commit("mutation_uivars_docto_a_ver",valor);
    },

    actions_uivars_ir_origen_que_solicito_docto(context,valor){

        context.commit("mutation_uivars_ir_origen_que_solicito_docto",valor);
    },

    actions_uivars_tipo_conciencia_o_prevencion(context,valor){

        context.commit("mutation_uivars_tipo_conciencia_o_prevencion",valor);
    },

    actions_uivars_error_DocuementoConciencia(context,valor){

        context.commit("mutation_uivars_error_DocuementoConciencian",valor);
    },





    actions_uivars_error_conciencia_estatus(context,valor){

        context.commit("mutation_uivars_error_conciencia_estatus",valor);
    },
    actions_uivars_error_conciencia_clasificacion(context,valor){

        context.commit("mutation_uivars_error_conciencia_clasificacion",valor);
    },
    actions_actions_uivars_error_conciencia_activo(context,valor){

        context.commit("mutation_uivars_error_conciencia_activo",valor);
    },
    actions_uivars_error_conciencia_tipo(context,valor){

        context.commit("mutation_uivars_error_conciencia_tipo",valor);
    },
    actions_uivars_error_conciencia_docto(context,valor){

        context.commit("mutation_uivars_conciencia_docto",valor);
    },
    actions_uivars_error_conciencia_estatusplan(context,valor){

        context.commit("mutation_uivars_error_conciencia_estatusplan",valor);
    },

    /************* actiones seguiemientos ********* */
    actions_uivars_error_seguimiento_seguimiento_id(context,valor){ 
     
        context.commit('mutation_uivars_error_seguimiento_seguimiento_id',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_incidenteid(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_incidenteid',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_status(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_status',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_plan(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_plan',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_documentos(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_documentos',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificaciondif(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificaciondif',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificacionautoridad(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificacionautoridad',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificacionpfn(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificacionpfn',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificaciodenunciante(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificaciodenunciante',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_actavaloracion(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_actavaloracion',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_planrecuperacion(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_planrecuperacion',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_plan_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_plan_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_documentos_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_documentos_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificaciondif_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificaciondif_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificacionautoridad_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificacionautoridad_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificacionpfn_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificacionpfn_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_notificaciodenunciante_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_notificaciodenunciante_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_actavaloracion_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_actavaloracion_docto',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_protocolosos(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_protocolosos',valor); 
        },
    actions_uivars_error_seguimiento_seguimiento_planrecuperacion_docto(context,valor){ 
        
        context.commit('mutation_uivars_error_seguimiento_seguimiento_planrecuperacion_docto',valor); 
        },
}