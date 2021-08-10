
import mutations from './mutations.js';
import actions from './actions.js';

export default {

    state: {

        etapainicial_id : '0',
        etapainicial_folio: '',
        etapainicial_programa: '',
   
        etapainicial_fecha: '',
        etapainicial_involucrados: '',
        etapainicial_elaboro: '',
        etapainicial_cargos: '',
        etapainicial_registrohechos: '',
        etapainicial_perfildelagresor: '',
        etapainicial_paadultocolaborador: '',
       
        etapainicial_paadultocolaboradortipo: '',
        etapainicial_familiaorigen: '',
        etapainicial_pafamiliatipo: '',
        etapainicial_adultoexterno: '',
        etapainicial_nnj: '',
        etapainicial_perfilvictima: '',
        etapainicial_recibeayuda: '',
        etapainicial_medidasproteccion: '',
        etapainicial_incidenteconfirmado: '',
        etapainicial_testigos: '',
        etapainicial_incidente : '',


        etapainicial_actavaloracion : '',
        etapainicial_actavaloracion_docto: '0',

        // cierre
        etapacierre_textocierre : '',
     
        etapainicial_textocierre : '',
        etapainicia_testigoscierre : [],

    },

    mutations,

    actions

}