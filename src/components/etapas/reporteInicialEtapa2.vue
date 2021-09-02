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
                       
                    verIntegral
                    verSeguimiento
                    verCierre 
                    verRespuesta 

                >
                </BarraDeNavegacion>

             
       <!-- import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
        -->
        </v-col>
    </v-row>
   

    <v-row>
      <v-col cols="12" xs="12" md="6"  >

         
         
              <v-text-field 
                 id="labelFolio"
                 class="cssnuevo "
                :value="generarFolio"
                 label="FOLIO"
                 filled
                 background-color="#87CEFA"
              >
                  <template v-slot:prepend>
                    <v-icon color="blue"
                    @click.stop.prevent="showFolio = !showFolio">
                      mdi-help-circle
                    </v-icon>

                  </template>
            
              </v-text-field>

              <v-alert v-if="showFolio" type="info">
                No te preocupes el folio se asigna automáticamente
              </v-alert>





         </v-col>

      <v-col cols="12" xs="12" md="6">
                <!-- componente que muestra los documentos de ayuda -->
       <!-- <v-row>
          <v-col cols="12" xs="1" md="1">
            <v-icon color="blue" @click=" showDocumentos = !showDocumentos">
                mdi-help-circle
            </v-icon>
          </v-col>
          <v-col cols="12" xs="11" md="11"> -->
            <barraDocumentosVue 
            class="elevado"
            :files = "archivos"
            categoria = "vi">
            </barraDocumentosVue>
              
              <v-alert  v-if="showDocumentos"   type="info">
                Aquí podrás encontrar documentos de consulta que sabemos te serán de gran utilidad
              </v-alert>            
          <!--</v-col>

        </v-row> -->
      </v-col> <!-- termina columna -->
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


       <v-tooltip v-model="showCombo" bottom>
            <template v-slot:activator="{ on, attrs }">

             <comboboxProgramaSeleccionado 
                 v-on ="on"
                 v-bind ="attrs"
                 :programa="programaSeleccionado"
                 :error_programa="error_programa"
                  @click:append="showFolio = !showFolio">
              </comboboxProgramaSeleccionado>
            </template>
            <span>
              No te preocupes el programa se asigna automáticamente
            </span>
       </v-tooltip>
     
     
     
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


            <v-tooltip bottom>
               <template v-slot:activator="{ on, attrs }">
                 <comboboxCargos
                  v-on="on"
                  v-bind="attrs" 
                  :quecargo="cargo">

                 </comboboxCargos>
              </template>
              <span>
                Selecciona una opción
              </span>
            </v-tooltip>
            
            
            </v-row>
          </v-card-text>
        </v-card>
        <br>

       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <textareaRegistro :texto="registrohechos"></textareaRegistro>
              <v-row>
                <v-col cols="12" xm="12" sm="12" md="6" lg="6">
                  En este espacio adjunta el <strong>Acta de Hechos</strong>. <br>
                  En caso de no contar con ella , la podras adjuntar mas adelante 
                  en el apartado de seguimiento.
                </v-col>
                <v-col cols="12" xm="12" sm="12" md="6" lg="6">
                <!--  :mostrarMensajeValidacion ="this.$store.state.uivars.uivars_error_cardMedidasIntegrales"
                -->
              <!--  <uploadFile3 
                directorio="/uploads/actas"
                :archivoId="archivoId"
                tipoDeArchivo="*.pdf"
                action_a_Ejecutar="action_etapainicial_actavaloracion"
                modulo="actas"
                campoState="etapainicial_actavaloracion">
               </uploadFile3>  -->


               <uploadFile4 v.if="verActaDeHechos"
                 :archivoId ="this.$store.state.incidentes.etapainicial_actavaloracion_docto"
                 action_a_Ejecutar ="action_etapainicial_actavaloracion_docto"
               >

               </uploadFile4>



              </v-col>
            </v-row>

          </v-card-text>
        </v-card>
        <br>

    <!-- =============================================== -->


    <!-- =============================================== -->

       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
            <cardPerlfilAgresor
              :perfilagresor="perfildelagresor"
              :tiponiveluno="paadultocolaborador"
              :tiponiveldos="paadultocolaboradortipo"
              :vercomboniveluno="vercomboniveluno"
              :vercomboniveldos ="vercomboniveldos" 
              v-on="on"
              v-bind="attrs"      
            >
            </cardPerlfilAgresor>
            </template>
            <span>
              Selecciona una opción
            </span>
            </v-tooltip>
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

   <!-- <v-row>
      <esunincidente :incidente="incidenteconfirmado"></esunincidente>
    </v-row> -->
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
          @click.stop.prevent="solicitudImpresion"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="red"
          @click.stop.prevent="guardar__iraDashboard"
          block

          v-on ="on"
          v-bind ="attrs"

        >
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn>
        </template>
        <span>Regresar al dashboard</span>
        </v-tooltip>

      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn v-if="verBotonera"  
           :loading="loadingGuardar"
          :disabled="loadingGuardar"
          color="green"
          @click.stop.prevent="guardar_incidente"
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
          @click.stop.prevent="update_incidente_u"
          block
          
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Modificar
        </v-btn>

      </v-col>
    </v-row>

    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-container>
</template>
<script>



//import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import apiIncidentes from "@/apialdeas/apiIncidentes.js";
import apiPermisosimpresion  from "@/apialdeas/apiPermisosimpresion.js";
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";
import impresiones_etapauno from '@/components/etapas/impresiones/impresiones_etapauno.js';
import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';
import eventBus from '@/eventBus.js';
import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';

import comboboxProgramaSeleccionado from "@/components/etapasComponentes/comboboxProgramaSeleccionado.vue";
//import calendario from "@/components/etapasComponentes/calendario.vue";
//import textareaInvolucrados from "@/components/etapasComponentes/textareaInvolucrados.vue";
//import textfieldElaboro from "@/components/etapasComponentes/textfieldElaboro.vue";
import comboboxCargos from "@/components/etapasComponentes/comboboxCargos.vue";
//import textareaRegistro from "@/components/etapasComponentes/textareaRegistro.vue";
import cardPerlfilAgresor from "@/components/etapasComponentes/cardPerlfilAgresor.vue";
//import esunincidente from "@/components/etapasComponentes/esunincidente.vue";
////import cardPerfilVictima from "@/components/etapasComponentes/cardPerfilVictima.vue";
//import textareaMedidasProteccion from "@/components/etapasComponentes/textareaMedidasProteccion.vue";
//import textareaTestigos from "@/components/etapasComponentes/textareaTestigos.vue";
//import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
//import valoracionIntegralEtapa from '@/components/etapas/valoracionIntegralEtapa.vue';
//import emailjs from 'emailjs-com';
//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';



//import eventBus2 from '@/eventBus.js';
//import uploadFile3 from '@/components/manipulacionArchivos/uploadFIle3.vue';
//import uploadFile4 from '@/components/manipulacionArchivos/uploadFile4.vue';


////////////////////////////////////////////////
// necesarios para utilizar el tool-tip
////////////////////////////////////////////////
/*import Vue from 'vue';
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip';
Vue.directive('tooltip', VTooltip);
Vue.directive('close-popover', VClosePopover);
Vue.component('v-popover', VPopover);*/
///////////////////////////////////////////////


export default {
  components: {

    barraDocumentosVue : ()  => import("../barradocumentos/barraDocumentos.vue"),
    comboboxProgramaSeleccionado ,//: ()  => import("@/components/etapasComponentes/comboboxProgramaSeleccionado.vue"),
    calendario : ()  => import("@/components/etapasComponentes/calendario.vue"),
    textareaInvolucrados : ()  => import("@/components/etapasComponentes/textareaInvolucrados.vue"),
    textfieldElaboro : ()  => import("@/components/etapasComponentes/textfieldElaboro.vue"),
    comboboxCargos ,//: ()  => import("@/components/etapasComponentes/comboboxCargos.vue"),
    textareaRegistro : ()  => import("@/components/etapasComponentes/textareaRegistro.vue"),
    cardPerlfilAgresor,// : ()  => import("@/components/etapasComponentes/cardPerlfilAgresor.vue"),
    //esunincidente,
    cardPerfilVictima : ()  => import("@/components/etapasComponentes/cardPerfilVictima.vue"),
    textareaMedidasProteccion : ()  => import("@/components/etapasComponentes/textareaMedidasProteccion.vue"),
    textareaTestigos : ()  => import("@/components/etapasComponentes/textareaTestigos.vue"),
    BarraDeNavegacion : ()  => import("@/components/etapas/BarraDeNavegacion.vue"),
    ////uploadFile3,
    uploadFile4 : ()  => import("@/components/manipulacionArchivos/uploadFile4.vue")
  },

  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  watch :{

    "$store.state.incidentes.etapainicial_actavaloracion_docto": function() {
       
       /* Observamos el valor de esta variable, que guarda el valor del documento 
       de acta de hechos */
        
        console.log("monitoreando el valor de $store.state.incidentes.etapainicial_actavaloracion_docto " + this.$store.state.incidentes.etapainicial_actavaloracion_docto);
       /* Para mostrar el componente uploadFile4 */
       eventBus.$emit('cargarArchivo_con_id',this.$store.state.incidentes.etapainicial_actavaloracion_docto);
       this.verActaDeHechos = true;
    }
  },

  methods: {


         //Esta funcion se encarga de consultar la API para recuperar los documentos que 
         // se mostraran el componente Barradedocumentos
  
        async cargarTodosLosDoctos(categoria){
          
          typeof categoria;

          let promesa = apidoctosapoyo.cargar__todos__los__doctosapoyo_por_categoria('vi',this.$store);

           promesa
          .then( response => { 

                 this.archivos  = response.data;
          })
         .catch( error => { console.log(JSON.stringify(error.data))});
      },

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
  
                       /////////////////////////////////////////////
                       // valores para regresar a esta pagina si se 
                       // tiene que regresar despues de estar en imp
                       // siones
                       ////////////////////////////////////////////
                        let ruta_A_regresar  = '/denuncias/' + this.$route.params.id;
                        console.log("ruta_A_regresar : " + ruta_A_regresar);
                        this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
                        /////////////////////////////////////////////
                           //--------------------------------------------------------------------
                        //ComponenteVuePdfViewer en la vista visorPDF 
                        //descargamos el componente en caso de que este halla sido cargado 
                        // con anterioridad
                        //--------------------------------------------------------------------
                        this.$store.dispatch("action_uivar_verComponenteVuePdfViewer",true);
                        //--------------------------------------------------------------------
        
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
      etapainicial_incidenteconfirmado,
      etapainicial_testigos,
      etapainicial_actavaloracion} =this.$store.state.incidentes;
     
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
      etapainicial_incidenteconfirmado,etapainicial_testigos,etapainicial_actavaloracion});
     
  
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
          //etapainicial_incidenteconfirmado,
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

    // r = validacionReporteInicial.existeInformacionParaCapturar(  etapainicial_incidenteconfirmado);
    // this.$store.dispatch('actions_uivars_error_comboesunincidente',r);
    //this.validarCaptura(r);


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
      etapainicial_testigos,
      etapainicial_actavaloracion_docto} =this.$store.state.incidentes;
     
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
        actavaloracion_docto :etapainicial_actavaloracion_docto
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
     // etapainicial_incidenteconfirmado,
      etapainicial_testigos,
       etapainicial_actavaloracion_docto
       } =this.$store.state.incidentes;
     
      console.log(" valor del documento :" + this.$store.state.incidentes.etapainicial_actavaloracion_docto);
      /* usuario creador es el usuario logueado. */
      var usuarioCreador =this.$store.state.usuarios.usuarios_usuariologueado.id;
      var etapa = 1;
      /* ======================================== */
     // let id_docto_temp  = 0;
     //  etapainicial_actavaloracion.length == 0 ? id_docto_temp = 0 : id_docto_temp = etapainicial_actavaloracion;
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
        incidenteconfirmado: 'NO', //incidenteconfirmado,
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
        
        actavaloracion_docto : etapainicial_actavaloracion_docto
      };

     // console.log("== valores del incidente ==");
      //console.log(JSON.stringify(parametros));

      let x = apiIncidentes.nuevoIncidente(parametros, this.$store);
      //let x = apiIncidentes.saludo(this.$store);
      // let x = apiIncidentes.nuevoUsuario(parametros, this.$store);
      x.then((response) => {
        //console.log(response.data);
        typeof response.data;
        this.loadingGuardar = false;
        //redireccionamos

        //let a = JSON.parse(response.data);
        let a = response.data;
        //let atipo = typeof a;

        console.log("valor de idRecuperado  : " +  response.data.id);
        let idRecuperado = response.data.id;

        
        this.$store.dispatch('setear_Incidente',idRecuperado);

       console.log("valor de idRecuperado  : " + idRecuperado);

        this.modo = "update";

        this.folio = a["folio"];
        /*************************************************************************
         *  se asigna el valor del campo del docto para
         *************************************************************************************/
       // if (id_docto_temp != 0) {
              //eventBus.$emit('cargarArchivo',a["actavaloracion"] ); 
            //////////////////////////////////////////

           // eventBus.$emit('cargarArchivo_con_id');

            ///////////////////////////////////////////
             // }
        /*************************************************************************************/
       

         

          this.verBotonImpresion = false;
        
          //limpiar variables globales de incidente
          validacionReporteInicial.inicializarValoresDeIncidente(this.$store);

          /*******************************************************************
           * Enviamos los correos para notificar a los usuarios que tienen 
           * este permiso activo
           ****************************************************************/
            console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
            console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
            if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){

               let tarea_realizada = "Se ha creado un nuevo reporte de Incidente";
         
               envioDeCorreos.enviarCorreos(a["correos"],a["folio"],tarea_realizada);
            }
          /************************************************************* */
          this.$router.push({
          name: "Notificacionuno",
          params: { incidenteId: idRecuperado,folio:this.folio },
        });

      }).catch((error) => {
        console.log("Error en guardar Incidente ");
        console.log(error);
        this.loadingGuardar = false;
      });

    }, //termina funcion
    nuevo_incidente() {
      //console.log(" Permiso ALTADEVALORACIONINICIAL  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.ALTADEVALORACIONINICIAL)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.ALTADEVALORACIONINICIAL=='SI'){
           
     
      this.validacion_sePuedeCapturar();
      
      this.errores>0 ? this.revisarErrores() : this.guardar_nuevoIncidente();

      

       }// termina if de permiso
    }, //termina nuevo_incidente


    update_incidente() {

      this.guardar_nuevoIncidente();
     
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



     // console.log("==>asignarAVariablesValoresDeConsulta<== : ");
      //console.log(JSON.stringify(respuesta.data));
      var a = respuesta.data;
     // console.log("valor de a " + a);
     //   console.log(a);
        typeof a;
      /**************+++++++++++ 
       * si esta cerrado la etapa y se quiere modificar
       * solo si tiene el permiso podra
      */
      let abierto = a.coloretapauno;
      if (abierto == 'green'){
         //console.log(" verificando permiso de modificacion con estado cerrado");
         this.permisodemodificacion();

      }
      /********************* */

      this.usuarioCreador = a.usuarioCreador;

      
     
      this.folio = a.folio;
       /***************************************
       * para no grabar uno nuevo
       * 
       *************************************/
       
        if (this.folio != "Pendiente"){
          
         this.modo = "update";
         this.verBotonera=false;
        // console.log("folio :" + this.folio);
       //  console.log("modo :" + this.modo);

        }
       /************************************* */
      this.date = a.fechaAlta;
      this.programaSeleccionado = a.programa;
      this.nombrePrograma = a.nombreprograma;
       console.log("nombre programa " + this.nombrePrograma);
      /************************ */
      this.involucrados = a.involucrados;
      /*------------------------------------------------------------*/

     // console.log(this.involucrados);

      this.elaboro = a.elaboro;

      this.cargo = a.cargousuario;

      this.registrohechos = a.registrohechos;

      /* perfil del agresor */
     this.perfildelagresor= a.prefildelagresor;
     this.paadultocolaborador = a.paadultocolaborador;
     this.paadultocolaboradortipo = a.paadultocolaboradortipo;

     /*console.log('-----------');
     console.log(this.perfildelagresor);
     console.log(this.paadultocolaborador);
     console.log(this.paadultocolaboradortipo);*/

     

      this.medidasproteccion = a.medidasproinmediatas;

      this.testigos = a.testigos;

      this.incidenteconfirmado = a.incidenteconfirmado;
      this.perfilvictima = a.perfilvictima;

      this.recibeayuda = a.recibeayuda;

       /*************************************************************************
       *  se asigna el valor del campo del docto para
       *************************************************************************************/
      this.$store.dispatch("action_etapainicial_actavaloracion_docto",a.actavaloracion_docto);
      this.verActaDeHechos = true;     
      eventBus.$emit('cargarArchivo_con_id');
       /*************************************************************************************/
  


     this.setearValores_para_impresion();
     
    }, //termina funcioin



   /******************************* */
    asignarAVariablesValoresDeConsulta(respuesta) {
      console.log("==>asignarAVariablesValoresDeConsulta<== : ");
      //console.log(JSON.stringify(respuesta.data));
      var a = respuesta.data;
      //console.log("valor de a " + a);
       //console.log(a);

      /**************+++++++++++ 
       * si esta cerrado la etapa y se quiere modificar
       * solo si tiene el permiso podra
      */
      let abierto = a[0]['coloretapauno'];
      if (abierto == 'green'){
       //  console.log(" verificando permiso de modificacion con estado cerrado");
         this.permisodemodificacion();

      }
      /********************* */


      //let nombrePrograma = a[0]['nombreprograma'];
     // console.log("nombre programa " + nombrePrograma);
     
      this.folio = a[0]["folio"];
       /***************************************
       * para no grabar uno nuevo
       * 
       *************************************/
       
        if (this.folio != "Pendiente"){
          
         this.modo = "update";
         this.verBotonera=false;
        // console.log("folio :" + this.folio);
         //console.log("modo :" + this.modo);

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

    /* console.log('-----------');
     console.log(this.perfildelagresor);
     console.log(this.paadultocolaborador);
     console.log(this.paadultocolaboradortipo);*/

     

      this.medidasproteccion = a[0]["medidasproinmediatas"];

      this.testigos = a[0]["testigos"];

     this.incidenteconfirmado = a[0]["incidenteconfirmado"];


    /* console.log("que variable es files : ") ;

     let x = typeof this.files;

     console.log(x);*/

      
   

      this.perfilvictima = a[0]["perfilvictima"];

      this.recibeayuda = a[0]["recibeayuda"];

    //  console.log( " perfil victiam " + this.perfilvictima) ;
    //   console.log( " perfil recibeayuda " + this.recibeayuda) ;
     
    },


    permisodemodificacion(){
        
     let valor = this.$store.state.usuarios.usuarios_usuariologueado_rol.MODIFICACIONREAPERTURAVALORACIONINICIAL;
       //console.log(" verificando permiso de modificacion con estado cerrado : valor " + valor);
      
     valor == "SI" ? this.verBotoneraconcierre = true : this.verBotoneraconcierre = false  ;
    },

    escogerProcedimiento() {

     this.$store.dispatch("action_uivars_overlay",true);
      //recuperamos el paraemtro id de la ruta
      let parametroId = 0;
      parametroId = this.$route.params.id;
      console.log(parametroId);
      this.modo = "nuevo";

       //console.log("antes de eventaBUs");

        //eventBus2.$emit('cargarLosDoctos','vi' );
        
        //console.log("despues de eventaBUs");


       this.cargarTodosLosDoctos('vi');

      if (parametroId == undefined) {
        //console.log("valor de parametroID : " + parametroId);
       //eventBus.$emit('cargarArchivo_con_id');
        this.overlay =false;
      } else {
        //console.log("valor actual de parametroId : " + parametroId);

        let P_incidente = apiIncidentes.recuperarUnIncidente(
          parametroId,
          this.$store
        );
        
        /******************************************************************
        RESETEAMOS EL VALOR DEL DOCUMENTO DE ACTA DE HECHOS PARA NO CARGAR 
        VALORES QUE SE HALLAN CARGADO CON  ANTERIORIRIDAD
        ******************************************************************** */
        this.$store.dispatch('action_etapainicial_actavaloracion_docto',0);
        /********************************************************************/


        P_incidente.then((response) => {
          console.log("recuperando los datos del incidente ");
          // console.log(JSON.stringify(response.data));
          /** */
          this.$store.dispatch("setear_Incidente", this.$route.params.id);
          this.asignarAVariablesValoresDeConsulta2(response);

          this.modo = "update";
          this.verBotonImpresion = false;

          //this.$store.dispatch("action_uivars_overlay",false);
          this.overlay =false;


        }).catch((error) => {
          console.log(JSON.stringify(error.response));
          this.modo = "update";
          this.$store.dispatch("action_uivars_overlay",false);
           this.overlay =false;
        });
      }
    },
  },

  created() {


     this.$nextTick(() => {
         
        console.log("en created, valor de this.modo : " + this.modo);
        //--------------------------------------------------------------------
        //ComponenteVuePdfViewer en la vista visorPDF 
        //descargamos el componente en caso de que este halla sido cargado 
        // con anterioridad
        //--------------------------------------------------------------------
        this.$store.dispatch("action_uivar_verComponenteVuePdfViewer",false);
        //--------------------------------------------------------------------
        this.overlay = true;
        this.escogerProcedimiento();

        //disparamos el evento en el componente 
        //barraDocumentos

      });


   
  },

  data() {
    return {
      verActaDeHechos: false,
     showFolio: false,
     showCombo :false,
     showDocumentos :false,

      tip1 : ' Existe este tooltiop ',
      overlay: false,
      archivos :[],
      archivoId : '0',
      sihayarchivo : false,
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
          files: [],
    };
  },
};
</script>
<style  >
.para_span
.tooltip { 
width: 200px;
background: #59c7f9;
color: #ffffff;
text-align: center;
padding: 10px 20px 10px 20px;
border-radius: 10px;
top: calc(100% + 11px);
left: 50%;
transform: translate-x(-50%)
 }
.tooltip-box { 
position: relative
 }
.triangle { 
border-width: 0 6px 6px;
border-color: transparent;
border-bottom-color: #59c7f9;
position: absolute;
top: -6px;
left: 50%;
transform: translate-x(-50%)
 }
</style>

