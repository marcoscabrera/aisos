import apiIncidentes from "@/apialdeas/apiIncidentes.js";
export default  {



obtenerValores(incidente,store){

  let P_incidente = apiIncidentes.recuperarUnIncidente(
    incidente,
    store
  );

  P_incidente.then((response) => {
    console.log("recuperando los datos del incidente ");
    // console.log(JSON.stringify(response.data));
    /** */

    var a = response.data;

    let datos =[];
    datos.folio = a.folio;
    datos.programa= a.nombreprograma;
    datos.fecha= a.fechaAlta;
    datos.involucrados=  a.involucrados;
    datos.Elaboro= a.elaboro ;
    datos.cargos=a.cargousuario;
    datos.RegistroHechos= a.registrohechos;
    datos.perfildelagresor= a.prefildelagresor;
    datos.paadultocolaborador=a.paadultocolaborador;
    datos.paadultocolaboradortipo=a.paadultocolaboradortipo;
    datos.perfilvictima= a.perfilvictima ;
    datos.recibeayuda=  a.recibeayuda ;
    datos.medidasproteccion=  a.medidasproinmediatas ;
    datos.incidenteconfirmado=  a.incidenteconfirmado ;
    datos.testigos= a.testigos;

    this.setearValores(datos, store);

  }).catch((error) => {
    console.log(JSON.stringify(error.response));
   
  });

},


 setearValores( incidente, store) {
   
  store.dispatch('action_folio',incidente.folio);
  //store.dispatch('setear_Incidente',incidente.id);
  store.dispatch('setear_programa',incidente.programa);
  store.dispatch('setear_FechaInicial',incidente.fecha);
  store.dispatch('setear_Involucrados',incidente.involucrados);
  store.dispatch('setear_Elaboro',incidente.Elaboro);
  store.dispatch('setear_cargos',incidente.cargos);
  store.dispatch('setear_RegistroHechos',incidente.RegistroHechos);
  store.dispatch('setear_PerfilDelAgresor',incidente.perfildelagresor);
  store.dispatch('setear_Paadultocolaborador',incidente.paadultocolaborador);
  store.dispatch('setear_Paadultocolaboradortipo',incidente.paadultocolaboradortipo);
  store.dispatch('setear_Familiaorigen',incidente.familiaorigen);
  store.dispatch('setear_familiatipo',incidente.familiatipo);
  store.dispatch('setear_paadultoexterno',incidente.paadultoexterno);
  store.dispatch('setear_nnj',incidente.nnj);
  store.dispatch('setear_perfilvictima',incidente.perfilvictima);
  store.dispatch('setear_recibeayuda',incidente.recibeayuda);
  store.dispatch('setear_medidasproteccion',incidente.medidasproteccion);
  store.dispatch('setear_incidenteconfirmado',incidente.incidenteconfirmado);
  store.dispatch('setear_testigos',incidente.testigos);
 },

 /*setear_valores_integral (valoracion,store){
 
 <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
         FOLIO #    {{this.$store.state.incidentes.etapainicial_folio}}
        </v-col>
        <v-col cols="12" xs="4"  sm="4" md="4" lg="4">
          Programa : {{this.$store.state.incidentes.etapainicial_programa}}
         </v-col>
        <v-col cols="12" xs=""  sm="" md="" lg="">
         Fecha de inicio #   {{this.$store.state.incidentes.etapainicial_fecha}}
        </v-col>


 }*/





}