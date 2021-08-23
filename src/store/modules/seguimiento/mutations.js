export default { 
 
    mutation_id( state, valor) {   
state.seguimiento_id   = valor ;

},
mutation_incidenteid( state, valor) {   
state.seguimiento_incidenteid   = valor ;

},
mutation_status( state, valor) {   
state.seguimiento_status   = valor ;

},
mutation_plan( state, valor) {   
state.seguimiento_plan   = valor ;

},
mutation_documentos( state, valor) {   
state.seguimiento_documentos   = valor ;

},
mutation_notificaciondif( state, valor) {   
state.seguimiento_notificaciondif   = valor ;

},
mutation_notificacionautoridad( state, valor) {   
state.seguimiento_notificacionautoridad   = valor ;

},
mutation_notificacionpfn( state, valor) {   
state.seguimiento_notificacionpfn   = valor;

},
mutation_notificaciodenunciante( state, valor) {   
state.seguimiento_notificaciodenunciante   = valor ;

},
mutation_actavaloracion( state, valor) {   
state.seguimiento_actavaloracion   = valor ;

},
mutation_planrecuperacion( state, valor) {   
state.seguimiento_planrecuperacion   = valor ;

},

mutation_seguimiento_documentos_docto     ( state, valor) {
    state.seguimiento_documentos_docto = valor;
},

 mutation_seguimiento_notificaciondif_docto( state, valor) {
    state.seguimiento_notificaciondif_docto = valor;
    },
mutation_seguimiento_notificacionautoridad_docto( state, valor) {
    state.seguimiento_notificacionautoridad_docto=valor;
    },
mutation_seguimiento_notificacionpfn_docto( state, valor) {
    state.seguimiento_notificacionpfn_docto =valor;
    },
 
 mutation_seguimiento_notificaciodenunciante_docto( state, valor) {
    
    state.seguimiento_notificaciodenunciante_docto=valor;
    },
mutation_seguimiento_actavaloracion_docto ( state, valor) {
    state.seguimiento_actavaloracion_docto =valor;
 },
mutation_seguimiento_planrecuperacion_docto     ( state, valor) {
    state.seguimiento_planrecuperacion_docto=valor;
},

mutation_seguimiento_plan_docto     ( state, valor) {
    state.seguimiento_plan_docto=valor;
},

mutation_seguimiento_protocolosos( state, valor) {
    state.seguimiento_protocolosos    =valor;
},


mutation_seguimiento_planrecuperacion_docto_nombre( state, valor) {
    state.seguimiento_planrecuperacion_docto_nombre    =valor;
},
mutation_seguimiento_actavaloracion_docto_nombre  ( state, valor) {
    state.seguimiento_actavaloracion_docto_nombre    =valor;
},
mutation_seguimiento_notificaciodenunciante_docto_nombre ( state, valor) {
    state.seguimiento_notificaciodenunciante_docto_nombres    =valor;
},
mutation_seguimiento_plan_docto_nombre  ( state, valor) {
    state.seguimiento_plan_docto_nombre    =valor;
},
mutation_seguimiento_documentos_docto_nombre     ( state, valor) {
    state.seguimiento_documentos_docto_nombre    =valor;
},
mutation_seguimiento_notificaciondif_docto_nombre( state, valor) {
    state.seguimiento_notificaciondif_docto_nombre    =valor;
},
mutation_seguimiento_notificacionautoridad_docto_nombre( state, valor) {
    state.seguimiento_notificacionautoridad_docto_nombre    =valor;
},
mutation_seguimiento_notificacionpfn_docto_nombre( state, valor) {
    state.seguimiento_notificacionpfn_docto_nombre    =valor;
},

       /*
        Se agregan los nuevos elementos,
        estos surgen por la modifiaciones de seguimiento
        que practicamente se ha covertido en una vista dinamica
        mas que una sola tabla.
        */
        mutation_seguimiento_tipoderespuesta( state, valor) {
        state.seguimiento_tipoderespuesta =valor;
        },

        
        mutation_seguimiento_estatus_consenso( state, valor) {
        state.estatus_consenso   =valor;
        },

        mutation_seguimiento_estatus_medidas( state, valor) {
        state.estatus_medidas   =valor;
        },


        mutation_seguimiento_estatus_denuncia( state, valor) {
        state.estatus_denuncia  =valor;
        },

        mutation_seguimiento_estatus_notificacionpfn( state, valor) {
        state.estatus_notificacionpfn  =valor;
        },

        mutation_seguimiento_estatus_notificaciondenunciante( state, valor) {
        state.estatus_notificaciondenunciante =valor;
        },


        mutation_seguimiento_estatus_planrecuperacion( state, valor) {
            state.estatus_planrecuperacion =valor;
        },


        mutation_seguimiento_id_consensodocto( state, valor) {
        state.id_consensodocto = valor;
        },


        mutation_seguimiento_id_denunciadocto( state, valor) {

        state.id_denunciadocto = valor;

        },

        
        mutation_seguimiento_id_medidasdocto( state, valor) {

        state.id_medidasdocto  = valor;
        },


        mutation_seguimiento_id_Notificacionpfn( state, valor){
        state.id_Notificacionpfn  = valor;
        },


        mutation_seguimiento_id_NotificacionDenunciante( state, valor){
        state.id_NotificacionDenunciante = valor;
        },


        mutation_seguimiento_id_NotificacionPlan( state, valor){
        state.id_NotificacionPlan   = valor;
        },


        mutation_seguimiento_id_ActaHechos( state, valor){

        state.id_ActaHechos    = valor;

        },

        mutation_seguimiento_id_ActaValoracion( state, valor){

            state.id_ActaValoracion    = valor;
    
            },
       
        mutation_seguimiento_doctosCargados( state,valor)
            {state.doctosCargados = valor; },


}