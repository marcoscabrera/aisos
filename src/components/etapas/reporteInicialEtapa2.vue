<template>
  <v-container>

    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2>Valoración Inicial</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">

            <BarraDeNavegacion
             activo_ri="0"
             activo_vi="1"
             activo_s="1"
             activo_c="1"
             >
             </BarraDeNavegacion>
       <!-- import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
        -->
        </v-col>
    </v-row>
   

    <v-row>
      <v-col cols="12" xs="12" md="6">
          <v-text-field
          id="labelFolio"
          class="cssnuevo"
           :value="generarFolio"
            label="FOLIO"
            filled
            disabled
            background-color="#87CEFA"
            
          >
        
          </v-text-field>
         </v-col>

      <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue class="elevado"
        :files="files"></barraDocumentosVue>
      </v-col>
    </v-row>

    <!--Autor del documento -->
    
      <v-card width="100%" v-if="estamosActualizando">
        <v-card-title> </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  :value ="usuarioCreador"
                  label="Creado por:"
                  
                  readonly

                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
      </v-card>
      <br>
    <!-- --> 

   
       <v-card width="100%" v-if="estamosActualizando">
          <v-card-title> </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" x2="12" sm="6" md="6" lg="6"> 
                <v-text-field
                  :value ="nombrePrograma"
                  label="Programa"
                  
                  readonly

                ></v-text-field>
              </v-col>
              <v-col cols="12" x2="12" sm="6" md="6" lg="6"> 
                <v-text-field
                  :value ="date"
                  label="Fecha"
                  prepend-icon="mdi-calendar"
                  readonly

                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <br>

    
    
    <!-- seleccoin de programa y de fecha -->
    <v-row v-if="mostarCalendario_y_selectorProgramas">

      <comboboxProgramaSeleccionado :programa="programaSeleccionado"
      :error_programa="error_programa"></comboboxProgramaSeleccionado>
      <calendario :fecha="date"></calendario>
    </v-row>


       <v-card width="100%">
          <v-card-title> </v-card-title>
          <v-card-text>
            <textareaInvolucrados :texto="involucrados"></textareaInvolucrados>
          </v-card-text>
        </v-card>
        <br>
  

       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <v-row>
            <textfieldElaboro :quienelaboro="elaboro"></textfieldElaboro>
            <comboboxCargos :quecargo="cargo"></comboboxCargos>
            </v-row>
          </v-card-text>
        </v-card>
        <br>

       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <textareaRegistro :texto="registrohechos"></textareaRegistro>
          </v-card-text>
        </v-card>
        <br>

    <!-- =============================================== -->

       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <cardPerlfilAgresor
              :perfilagresor="perfildelagresor"
              :tiponiveluno="paadultocolaborador"
              :tiponiveldos="paadultocolaboradortipo"
              :vercomboniveluno="vercomboniveluno"
              :vercomboniveldos ="vercomboniveldos"       
            >
            </cardPerlfilAgresor>
          </v-card-text>
        </v-card>
        <br>

    <!-- =============================================== -->

       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <cardPerfilVictima
              :perfilvictima="perfilvictima"
              :recibeayuda="recibeayuda"
            >
            </cardPerfilVictima>
          </v-card-text>
        </v-card>
        <br>



       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <textareaMedidasProteccion
              :texto="medidasproteccion"
            ></textareaMedidasProteccion>
           </v-card-text>
        </v-card>
        <br>

    <v-row>
      <esunincidente :incidente="incidenteconfirmado"></esunincidente>
    </v-row>
    <br>

    <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <textareaTestigos 
          
            :texto="testigos"></textareaTestigos>
           </v-card-text>
        </v-card>
        <br>



    <v-row>
      <v-col>
        <v-alert v-if="this.errores>0" type="error">
           Al parecer le hacen falta datos.
        </v-alert>     
      </v-col>
    </v-row>

    

    <v-row>


      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="verBotonImpresion"
          color="primary"
          @click="solicitudImpresion"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="red"
          @click="guardar__iraDashboard"
          block
        >
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn v-if="verBotonera"
          :loading="loadingGuardar"
          :disabled="loadingGuardar"
          color="green"
          @click="guardar_incidente"
          block
          
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn>
        

        <v-btn v-if="verBotoneraconcierre"
          :loading="loadingGuardar"
          :disabled="loadingGuardar"
          color="green"
          @click="update_incidente_u"
          block
          
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Modificar
        </v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import apiIncidentes from "@/apialdeas/apiIncidentes.js";
import apiPermisosimpresion  from "@/apialdeas/apiPermisosimpresion.js";

import comboboxProgramaSeleccionado from "@/components/etapasComponentes/comboboxProgramaSeleccionado.vue";
import calendario from "@/components/etapasComponentes/calendario.vue";
import textareaInvolucrados from "@/components/etapasComponentes/textareaInvolucrados.vue";
import textfieldElaboro from "@/components/etapasComponentes/textfieldElaboro.vue";
import comboboxCargos from "@/components/etapasComponentes/comboboxCargos.vue";
import textareaRegistro from "@/components/etapasComponentes/textareaRegistro.vue";
import cardPerlfilAgresor from "@/components/etapasComponentes/cardPerlfilAgresor.vue";
import esunincidente from "@/components/etapasComponentes/esunincidente.vue";
import cardPerfilVictima from "@/components/etapasComponentes/cardPerfilVictima.vue";
import textareaMedidasProteccion from "@/components/etapasComponentes/textareaMedidasProteccion.vue";
import textareaTestigos from "@/components/etapasComponentes/textareaTestigos.vue";
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";
//import valoracionIntegralEtapa from '@/components/etapas/valoracionIntegralEtapa.vue';
import impresiones_etapauno from '@/components/etapas/impresiones/impresiones_etapauno.js';

//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';

export default {
  components: {
    barraDocumentosVue,
    comboboxProgramaSeleccionado,
    calendario,
    textareaInvolucrados,
    textfieldElaboro,
    comboboxCargos,
    textareaRegistro,
    cardPerlfilAgresor,
    esunincidente,
    cardPerfilVictima,
    textareaMedidasProteccion,
    textareaTestigos,
    BarraDeNavegacion
   

  },

  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  methods: {
   
   //se crea el array datos y se le asigna los valores de las variables 
   //que almacenan la informacion de esta etapa del reporte de incidente.
   //para posteriormente pasar el array como parametro en funcion
    setearValores_para_impresion(){
   

      let datos =[];
      datos.folio = this.folio;
      datos.programa= this.programaSeleccionado;
      datos.fecha= this.date;
      datos.involucrados=  this.involucrados;
      datos.Elaboro= this.elaboro ;
      datos.cargos=this.cargo;
      datos.RegistroHechos= this.registrohechos;
      datos.perfildelagresor= this.perfildelagresor;
      datos.paadultocolaborador=this.paadultocolaborador;
      datos.paadultocolaboradortipo=this.paadultocolaboradortipo;
      datos.perfilvictima= this.perfilvictima ;
      datos.recibeayuda=  this.recibeayuda ;
      datos.medidasproteccion=  this.medidasproteccion ;
      datos.incidenteconfirmado=  this.incidenteconfirmado ;
      datos.testigos= this.testigos;
      impresiones_etapauno.setearValores(datos, this.$store);
    },






    solicitudImpresion(){


   
     console.log(" Permiso IMPRESIONVALORACIONINICIAL  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONVALORACIONINICIAL)             
     
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONVALORACIONINICIAL=='SI'){

       //NOTA:
       /*
        AQUI VA EL CODIGO PARA REALIZAR LA IMPRESION .
        por el momento visualizamos en la pantalla.
         */

        ///////////////////////////////////////
        // seteamos los valores a iutlizar 
        ////////////////////////////////////////
        //this.setearValores_para_impresion();
        ////////////////////////////////////////

       /*this.$router.push({
          name: "ReporteImpresion"
        });*/
        

        //codigo actualizado 8 de mayo
        /*
        
        */
                   let parametros  = { incidenteid:   this.$route.params.id ,etapa:'Valoracion Inicial', tipo : 'sin autorizacion' };

                   //impresiones_etapauno.obtenerValores(parametros,this.$store);

                    let promesa = apiPermisosimpresion.Post_generarDocumentoDeImpresion(parametros,this.$store);
                     promesa
                    .then( response => { 

                        console.log(JSON.stringify(response.data));
                        console.log(" Nombre del reporte : " + response.data.nombrereporte);
                        
                        let directorio ="/apidatos/reportesetapas/" + response.data.nombrereporte;
                        
                        let link =  this.$store.state.urlServidor + directorio ;
        
                        this.$store.dispatch("actions_uivars_docto_a_ver",link);

                       this.$router.push({
                        name: "VisorPDF"
                        });
                        
                        
                        })
                    .catch( error => { console.log(JSON.stringify(error.data))});
                    
             
     


     }else {


       //realizamos la solicitud del permiso//
       /*

        actions_uivars_error_permisosimpresion_id
        actions_uivars_error_permisosimpresion_usuarioid
        actions_uivars_error_permisosimpresion_incidenteid
        actions_uivars_error_permisosimpresion_etapa
        actions_uivars_error_permisosimpresion_password
        actions_uivars_error_permisosimpresion_respuesta
        actions_uivars_error_permisosimpresion_usuarioidautorizo
        actions_uivars_error_permisosimpresion_vigente
        actions_uivars_error_permisosimpresion_fechapeticion
        actions_uivars_error_permisosimpresion_fechaautorizacion

       */
       this.$store.dispatch('actions_permisosimpresion_incidenteid',this.$route.params.id);
       this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
       this.$store.dispatch('actions_permisosimpresion_etapa', "Valoracion Inicial");
             
      //-------------------------------------
       //redireccionamos a pantalla
      this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: this.$route.params.id },
        });


     }//termina if del pedido
    },







    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },
    nuevo_incidente_test(){
      
     // var a = this.$store.state.incidentes;

      const  { 
      etapainicial_programa ,
       etapainicial_fecha ,
        etapainicial_involucrados,
          etapainicial_elaboro,
      etapainicial_cargos,
      etapainicial_registrohechos,
      etapainicial_perfildelagresor,
      etapainicial_paadultocolaborador,
      etapainicial_paadultocolaboradortipo,
      etapainicial_perfilvictima,
      etapainicial_recibeayuda,
      etapainicial_medidasproteccion,
      etapainicial_incidenteconfirmado,etapainicial_testigos} =this.$store.state.incidentes;
     
      console.log({ etapainicial_programa,
      etapainicial_fecha ,
      etapainicial_involucrados ,
      etapainicial_elaboro,
      etapainicial_cargos,
      etapainicial_registrohechos,
      etapainicial_perfildelagresor,
      etapainicial_paadultocolaborador,
      etapainicial_paadultocolaboradortipo,
      etapainicial_perfilvictima,
      etapainicial_recibeayuda,
      etapainicial_medidasproteccion,
      etapainicial_incidenteconfirmado,etapainicial_testigos});
     
  
  },
    validacion_sePuedeCapturar(){

      this.errores = 0;

    const  { 
          etapainicial_programa,
          etapainicial_fecha ,
          etapainicial_involucrados,
          etapainicial_elaboro,
           etapainicial_cargos,
            etapainicial_registrohechos,
            etapainicial_perfilvictima,
           etapainicial_recibeayuda,
          etapainicial_medidasproteccion,
          etapainicial_incidenteconfirmado,
          etapainicial_testigos
           } =this.$store.state.incidentes;

   let r =  validacionReporteInicial.existeInformacionParaCapturar(etapainicial_programa);
   this.$store.dispatch('actions_uivars_error_seleccionarPrograma',r);
    this.validarCaptura(r);

    r= validacionReporteInicial.existeInformacionParaCapturar(etapainicial_fecha);
   this.$store.dispatch('actions_uivars_error_seleccionarFecha',r);
    this.validarCaptura(r);

    r= validacionReporteInicial.existeInformacionParaCapturar(etapainicial_involucrados);
    this.$store.dispatch('actions_uivars_error_textAreaInvolucrados',r);
    this.validarCaptura(r); 

    r= validacionReporteInicial.existeInformacionParaCapturar(etapainicial_elaboro);
    this.$store.dispatch('actions_uivars_error_textDenunciante',r);
    this.validarCaptura(r); 

    r = validacionReporteInicial.existeInformacionParaCapturar(etapainicial_cargos);
    this.$store.dispatch('actions_uivars_error_comboboxCargos',r);
    this.validarCaptura(r); 


    r = validacionReporteInicial.existeInformacionParaCapturar( etapainicial_registrohechos);
    this.$store.dispatch('actions_uivars_error_textareaRegistros',r);
    this.validarCaptura(r); 

     r = validacionReporteInicial.existeInformacionParaCapturar(  etapainicial_perfilvictima);
    this.$store.dispatch('actions_uivars_error_comboPerfilvictima',r);
    this.validarCaptura(r);

     r = validacionReporteInicial.existeInformacionParaCapturar(  etapainicial_recibeayuda);
    this.$store.dispatch('actions_uivars_error_comboRecibeAyuda',r);
    this.validarCaptura(r);
   
     r = validacionReporteInicial.existeInformacionParaCapturar(  etapainicial_medidasproteccion);
    this.$store.dispatch('actions_uivars_error_textareaMedidas',r);
    this.validarCaptura(r);

   r = validacionReporteInicial.existeInformacionParaCapturar(  etapainicial_incidenteconfirmado);
    this.$store.dispatch('actions_uivars_error_comboesunincidente',r);
    this.validarCaptura(r);


       r = validacionReporteInicial.existeInformacionParaCapturar(  etapainicial_testigos);
    this.$store.dispatch('actions_uivars_error_textareaTestigos',r);
    this.validarCaptura(r);

  




    return this.errores;

    },
    validarCaptura(valor){

      let suma=0 ;
      valor== false ? suma=0 : suma=1;

      this.errores = this.errores + suma;


    },
    revisarErrores(){
      
    },

    /*************** */

     update_incidente_u(){

     this.loadingGuardar = true;
    

const  { 
     
      etapainicial_involucrados,
      etapainicial_elaboro,
      etapainicial_cargos,
      etapainicial_registrohechos,
      etapainicial_perfildelagresor,
      etapainicial_paadultocolaborador,
      etapainicial_paadultocolaboradortipo,
      etapainicial_perfilvictima,
      etapainicial_recibeayuda,
      etapainicial_medidasproteccion,
      etapainicial_incidenteconfirmado,
      etapainicial_testigos} =this.$store.state.incidentes;
     
      /* usuario creador es el usuario logueado. */
      var etapa = 1;
      /* ======================================== */
      
   
      /*==========================================*/
      this.id = this.$route.params.id;
      console.log(" valor del id para actualizar " + this.id);

      var parametros = {
        id : this.id,
        involucrados: etapainicial_involucrados,
        elaboro: etapainicial_elaboro,
        cargousuario: etapainicial_cargos,
        registrohechos: etapainicial_registrohechos,

        perfildelagresor: etapainicial_perfildelagresor,

        paadultocolaborador: etapainicial_paadultocolaborador,
        paadultocolaboradortipo: etapainicial_paadultocolaboradortipo,
        pafamilia: '',
        pafamiliatipo: '',
        adultoexterno: '',

        nnj: '',
        perfilvictima: etapainicial_perfilvictima,
        recibeayuda: etapainicial_recibeayuda,
        medidasproinmediatasdiatas:etapainicial_medidasproteccion,
        incidenteconfirmado: etapainicial_incidenteconfirmado, //incidenteconfirmado,
        testigos: etapainicial_testigos,
        etapa: etapa,
        etapauno: "visible",
        etapados: "visible",
        etapatres: "invisible",
        etapacuatro: "invisible",
        coloretapauno: "green",
        coloretapados: "yellow",
        coloretapatres: "yellow",
        coloretapacuatro: "yellow",
      };

      console.log("== valores del incidente ==");
      console.log(JSON.stringify(parametros));

      let x = apiIncidentes.updateIncidente(parametros, this.$store);
      //let x = apiIncidentes.saludo(this.$store);
      // let x = apiIncidentes.nuevoUsuario(parametros, this.$store);
      x.then((response) => {

        console.log(response.data);

        this.loadingGuardar = false;
        //redireccionamos
       
        this.modo = "update";
    

        this.verBotonImpresion = false;
        
        //limpiar variables globales de incidente
        validacionReporteInicial.inicializarValoresDeIncidente(this.$store);

          this.$router.push({
          name: "Notificacionuno",
          params: { incidenteId:  this.id,folio:this.folio },
        });

      }).catch((error) => {
        console.log(error.data);
        this.loadingGuardar = false;
      });

    },

    /******************* */
    guardar_nuevoIncidente(){

    //esta variable activa la animacion del --loader-- del boton
    this.loadingGuardar = true;
    

const  { 
      etapainicial_programa ,
      etapainicial_fecha ,
      etapainicial_involucrados,
      etapainicial_elaboro,
      etapainicial_cargos,
      etapainicial_registrohechos,
      etapainicial_perfildelagresor,
      etapainicial_paadultocolaborador,
      etapainicial_paadultocolaboradortipo,
      etapainicial_perfilvictima,
      etapainicial_recibeayuda,
      etapainicial_medidasproteccion,
      etapainicial_incidenteconfirmado,
      etapainicial_testigos} =this.$store.state.incidentes;
     
      /* usuario creador es el usuario logueado. */
      var usuarioCreador =this.$store.state.usuarios.usuarios_usuariologueado.id;
      var etapa = 1;
      /* ======================================== */
      
   
      /*==========================================*/
      var parametros = {
        programa: etapainicial_programa,
        fechaAlta:etapainicial_fecha,
        fechaUpdate: etapainicial_fecha,
        usuarioCreador: usuarioCreador,
        involucrados: etapainicial_involucrados,
        elaboro: etapainicial_elaboro,
        cargousuario: etapainicial_cargos,
        registrohechos: etapainicial_registrohechos,

        perfildelagresor: etapainicial_perfildelagresor,

        paadultocolaborador: etapainicial_paadultocolaborador,
        paadultocolaboradortipo: etapainicial_paadultocolaboradortipo,
        pafamilia: '',
        pafamiliatipo: '',
        adultoexterno: '',

        nnj: '',
        perfilvictima: etapainicial_perfilvictima,
        recibeayuda: etapainicial_recibeayuda,
        medidasproinmediatasdiatas:etapainicial_medidasproteccion,
        incidenteconfirmado: etapainicial_incidenteconfirmado, //incidenteconfirmado,
        testigos: etapainicial_testigos,
        etapa: etapa,
        etapauno: "visible",
        etapados: "visible",
        etapatres: "invisible",
        etapacuatro: "invisible",
        coloretapauno: "green",
        coloretapados: "yellow",
        coloretapatres: "yellow",
        coloretapacuatro: "yellow",
      };

      console.log("== valores del incidente ==");
      console.log(JSON.stringify(parametros));

      let x = apiIncidentes.nuevoIncidente(parametros, this.$store);
      //let x = apiIncidentes.saludo(this.$store);
      // let x = apiIncidentes.nuevoUsuario(parametros, this.$store);
      x.then((response) => {
        console.log(response.data);
        this.loadingGuardar = false;
        //redireccionamos

        let a = JSON.parse(response.data);

        let atipo = typeof a;

        console.log(atipo);
        let idRecuperado = a["id"];

        
        this.$store.dispatch('setear_Incidente',idRecuperado);

        console.log("valor de idRecuperado  : " + idRecuperado);

        this.modo = "update";

        this.folio = a["folio"];

        this.verBotonImpresion = false;
        
        //limpiar variables globales de incidente
        validacionReporteInicial.inicializarValoresDeIncidente(this.$store);
         /*
        this.$router.push({
          name: "DenunciasDetalle",
          params: { id: idRecuperado },
        });*/
      
          this.$router.push({
          name: "Notificacionuno",
          params: { incidenteId: idRecuperado,folio:this.folio },
        });

      }).catch((error) => {
        console.log(error.data);
        this.loadingGuardar = false;
      });

    }, //termina funcion
    nuevo_incidente() {
      console.log(" Permiso ALTADEVALORACIONINICIAL  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.ALTADEVALORACIONINICIAL)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.ALTADEVALORACIONINICIAL=='SI'){
           
     
      this.validacion_sePuedeCapturar();
      
      this.errores>0 ? this.revisarErrores() : this.guardar_nuevoIncidente();

      

       }// termina if de permiso
    }, //termina nuevo_incidente


    update_incidente() {

      this.guardar_nuevoIncidente2();
     
    },
   


    guardar_incidente() {


      console.log(" *** en guardar_incidente ");
      console.log(" valor de this.modo : " + this.modo);
      if (this.modo == "nuevo") {
        this.nuevo_incidente();
      } else {
        this.update_incidente();
      }
    },

    //********************************** */

        asignarAVariablesValoresDeConsulta2(respuesta) {
    //mostramos el programa y la fecha.
    this.estamosActualizando=true;
    //ocultamos los programas y el seleccionador de fecha
    this.mostarCalendario_y_selectorProgramas = false;



      console.log("==>asignarAVariablesValoresDeConsulta<== : ");
      //console.log(JSON.stringify(respuesta.data));
      var a = respuesta.data;
      console.log("valor de a " + a);
       console.log(a);

      /**************+++++++++++ 
       * si esta cerrado la etapa y se quiere modificar
       * solo si tiene el permiso podra
      */
      let abierto = a.coloretapauno;
      if (abierto == 'green'){
         console.log(" verificando permiso de modificacion con estado cerrado");
         this.permisodemodificacion();

      }
      /********************* */


      let nombrePrograma = a.nombreprograma;
      console.log("nombre programa " + nombrePrograma);

      this.usuarioCreador = a.usuarioCreador;

      
     
      this.folio = a.folio;
       /***************************************
       * para no grabar uno nuevo
       * 
       *************************************/
       
        if (this.folio != "Pendiente"){
          
         this.modo = "update";
         this.verBotonera=false;
         console.log("folio :" + this.folio);
         console.log("modo :" + this.modo);

        }
       /************************************* */
      this.date = a.fechaAlta;
      this.programaSeleccionado = a.programa;
      this.nombrePrograma = a.nombreprograma;
      console.log("nombre programa " + this.nombrePrograma);
      /************************ */



      this.involucrados = a.involucrados;

     // console.log(this.involucrados);

      this.elaboro = a.elaboro;

      this.cargo = a.cargousuario;

      this.registrohechos = a.registrohechos;

      /* perfil del agresor */
     this.perfildelagresor= a.prefildelagresor;
     this.paadultocolaborador = a.paadultocolaborador;
     this.paadultocolaboradortipo = a.paadultocolaboradortipo;

     console.log('-----------');
     console.log(this.perfildelagresor);
     console.log(this.paadultocolaborador);
     console.log(this.paadultocolaboradortipo);

     

      this.medidasproteccion = a.medidasproinmediatas;

      this.testigos = a.testigos;

     this.incidenteconfirmado = a.incidenteconfirmado;


     console.log("que variable es files : ") ;

     let x = typeof this.files;

     console.log(x);

      
   

      this.perfilvictima = a.perfilvictima;

      this.recibeayuda = a.recibeayuda;

      console.log( " perfil victiam " + this.perfilvictima) ;
       console.log( " perfil recibeayuda " + this.recibeayuda) ;

       this.setearValores_para_impresion();
     
    },

   /******************************* */
    asignarAVariablesValoresDeConsulta(respuesta) {
      console.log("==>asignarAVariablesValoresDeConsulta<== : ");
      //console.log(JSON.stringify(respuesta.data));
      var a = respuesta.data;
      console.log("valor de a " + a);
       console.log(a);

      /**************+++++++++++ 
       * si esta cerrado la etapa y se quiere modificar
       * solo si tiene el permiso podra
      */
      let abierto = a[0]['coloretapauno'];
      if (abierto == 'green'){
         console.log(" verificando permiso de modificacion con estado cerrado");
         this.permisodemodificacion();

      }
      /********************* */


      let nombrePrograma = a[0]['nombreprograma'];
      console.log("nombre programa " + nombrePrograma);
     
      this.folio = a[0]["folio"];
       /***************************************
       * para no grabar uno nuevo
       * 
       *************************************/
       
        if (this.folio != "Pendiente"){
          
         this.modo = "update";
         this.verBotonera=false;
         console.log("folio :" + this.folio);
         console.log("modo :" + this.modo);

        }
       /************************************* */
      this.date = a[0]["fechaAlta"];
      this.programaSeleccionado = a[0]["programa"];
     
      this.involucrados = a[0]["involucrados"];

     // console.log(this.involucrados);

      this.elaboro = a[0]["elaboro"];

      this.cargo = a[0]["cargousuario"];

      this.registrohechos = a[0]["registrohechos"];

      /* perfil del agresor */
     this.perfildelagresor= a[0]["prefildelagresor"];
     this.paadultocolaborador = a[0]["paadultocolaborador"];
     this.paadultocolaboradortipo = a[0]["paadultocolaboradortipo"];

     console.log('-----------');
     console.log(this.perfildelagresor);
     console.log(this.paadultocolaborador);
     console.log(this.paadultocolaboradortipo);

     

      this.medidasproteccion = a[0]["medidasproinmediatas"];

      this.testigos = a[0]["testigos"];

     this.incidenteconfirmado = a[0]["incidenteconfirmado"];


     console.log("que variable es files : ") ;

     let x = typeof this.files;

     console.log(x);

      
   

      this.perfilvictima = a[0]["perfilvictima"];

      this.recibeayuda = a[0]["recibeayuda"];

      console.log( " perfil victiam " + this.perfilvictima) ;
       console.log( " perfil recibeayuda " + this.recibeayuda) ;
     
    },


    permisodemodificacion(){
        
     let valor = this.$store.state.usuarios.usuarios_usuariologueado_rol.MODIFICACIONREAPERTURAVALORACIONINICIAL;
       console.log(" verificando permiso de modificacion con estado cerrado : valor " + valor);
      
     valor == "SI" ? this.verBotoneraconcierre = true : this.verBotoneraconcierre = false  ;
    },

    escogerProcedimiento() {
      //recuperamos el paraemtro id de la ruta
      let parametroId = 0;
      parametroId = this.$route.params.id;
      console.log(parametroId);
      this.modo = "nuevo";

      if (parametroId == undefined) {
        console.log("valor de parametroID : " + parametroId);
      } else {
        console.log("valor actual de parametroId : " + parametroId);

        let P_incidente = apiIncidentes.recuperarUnIncidente(
          parametroId,
          this.$store
        );

        P_incidente.then((response) => {
          console.log("recuperando los datos del incidente ");
          // console.log(JSON.stringify(response.data));
          /** */
          this.$store.dispatch("setear_Incidente", this.$route.params.id);
          this.asignarAVariablesValoresDeConsulta2(response);

          this.modo = "update";
          this.verBotonImpresion = false;
        }).catch((error) => {
          console.log(JSON.stringify(error.response));
          this.modo = "update";
        });
      }
    },
  },

  created() {
    console.log("en created, valor de this.modo : " + this.modo);
    this.escogerProcedimiento();
  },

  data() {
    return {
      usuarioCreador : '',
      mostarCalendario_y_selectorProgramas:true,
      nombrePrograma: '',
      estamosActualizando: false,
      id : 0,
      verBotoneraconcierre :false,
      errores : 0 , 
      error_programa : false,
      verBotonera:true,
      vercomboniveluno: false,
      vercomboniveldos: false,
      paadultocolaborador: '',
      paadultocolaboradortipo :'',
      incidenteconfirmado: '',
      perfilvictima: '',
      recibeayuda: '',
      verBotonImpresion: true,
      verBotonCancelar: false,

      modo: "nuevo",

      perfildelagresor: "",

      perfilcolaboradorsos: "",
      perfilfamiliaorigen: "",
      perfiladultoexterno: "",

      elaboro: "",
      cargo: "",

      medidasproteccion: "",
      testigos: "",

      esincidente: false,
      noesincidente: false,
      porconfirmar: false,

      perfilnina: false,
      perfilnino: false,

      sirecibeayudasos: false,
      norecibeayudasos: false,

      colaboradorsos: false,
      familiaorigen: false,
      adultoexterno: false,

      nnjs: false,

      nnje: false,
      folio: "Pendiente",

      involucrados: "",

      registrohechos: "",

      loading: false,
      loadingGuardar: false,

      adulto: false,

      pares: false,

      itemsUnidades: ["Unidad SOS Tijuana", "Unidad SOS CDMX"],

      programaSeleccionado: "",

      itemsCargos: ["Cuidador", "Mamá SOS", "Papá SOS"],
      itemsFamilia: [
        "Papá",
        "Mamá",
        "Hermano",
        "Hermana",
        "Padrastro",
        "Madrastra",
        "Tio",
      ],

      perfilAgresor: "",

      date: new Date().toISOString().substr(0, 10),

      menu2: false,
          files: [
        {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title: 'Politica de Proteccion Infantil',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21703&parId=D1B73E758E4318E6%21690&o=OneUp'
        },
        {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title: 'Código de Conducta',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21709&parId=D1B73E758E4318E6%21690&o=OneUp'
        },
        {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title: 'Directorio de Emergencia',
          link : ''
        },
        {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title: 'Violentometro',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21707&parId=D1B73E758E4318E6%21690&o=OneUp'
        },
      ],
    };
  },
};
</script>
<style scoped>

 .cssnuevo{

  
    font-size: large;
    font-weight: bold;
    
  }

  .elevado{
    z-index: 100;
  }

</style>

