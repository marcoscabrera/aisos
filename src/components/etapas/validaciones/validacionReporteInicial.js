export default {

    existeInformacionParaCapturar(campo){
        

        console.log("valor del campo a validar :" + campo );
        let respuesta = false;
        campo.length > 0 ? respuesta =false : respuesta = true;

        return respuesta;

    },

    inicializarValoresDeIncidente(store){

        store.dispatch('setear_Incidente','');
        store.dispatch('setear_programa','');
        store.dispatch('setear_FechaInicial','');

        store.dispatch('setear_Involucrados','');
        store.dispatch('setear_Elaboro','');
        store.dispatch('setear_cargos','');
        store.dispatch('setear_RegistroHechos','');
        store.dispatch('setear_PerfilDelAgresor','');

        store.dispatch('setear_Paadultocolaborador','');
        store.dispatch('setear_Paadultocolaboradortipo','');
        store.dispatch('setear_Familiaorigen','');
        store.dispatch('setear_familiatipo','');
        store.dispatch('setear_paadultoexterno','');

        store.dispatch('setear_nnj','');
        store.dispatch('setear_perfilvictima','');
        store.dispatch('setear_recibeayuda','');
        store.dispatch('setear_medidasproteccion','');
        store.dispatch('setear_incidenteconfirmado','');

        store.dispatch('setear_testigos','');
        store.dispatch('action_textocierre','');
  
    }

/*
    sePuedeCapturaElReporteInicial(){
       
        let respuesta = false ;
        
        let total = 0;
        let suma =0 ;
        let a = this.$store.state.incidentes;

             
        a.etapainicial_programa.length>0 ? suma=0 :suma =1;
        a.etapainicial_fecha.length>0 ? suma=0 : suma=1;
        a.etapainicial_involucrados.length>0 ? suma=0 : suma=1;
        a.etapainicial_elaboro.length>0 ? suma=0 : suma=1;
        a.etapainicial_cargos.length>0 ? suma=0 : suma=1;
        a.etapainicial_registrohechos.length>0 ? suma=0 : suma=1;
        a.etapainicial_perfildelagresor.length>0 ? suma=0 : suma=1;
        a.etapainicial_paadultocolaborador.length>0 ? suma=0 : suma=1;
        a.etapainicial_paadultocolaboradortipo.length>0 ? suma=0 : suma=1;
        a.etapainicial_familiaorigen.length>0 ? suma=0 : suma=1;
        a.etapainicial_pafamiliatipo.length>0 ? suma=0 : suma=1;
        a.etapainicial_adultoexterno.length>0 ? suma=0 : suma=1;
        a.etapainicial_nnj.length>0 ? suma=0 : suma=1;
        a.etapainicial_perfilvictima.length>0 ? suma=0 : suma=1;
        a.etapainicial_recibeayuda.length>0 ? suma=0 : suma=1;
        a.etapainicial_medidasproteccion.length>0 ? suma=0 : suma=1;
        a.etapainicial_incidenteconfirmado.length>0 ? suma=0 : suma=1;
        a.etapainicial_testigos.length>0 ? suma=0 : suma=1;
        
     





        return respuesta;


        
    }*/


}