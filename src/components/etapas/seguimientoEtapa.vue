<template>
  <v-container>
  

    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2>Seguimiento</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">


            <BarraDeNavegacion
             activo_ri="1"
             activo_vi="1"
             activo_s="0"
             activo_c="1"
            
             verInicial     
             verIntegral 
            
             verCierre
             verRespuesta 
             ></BarraDeNavegacion>

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
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Fecha"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <!-- =============================================== -->
    <br >
  <!--  <v-card width="100%"  >
          <v-card-title> </v-card-title>
          <v-card-text>
            <textAreaRegistroDelEstatus
            :texto="seguimiento.status">
            </textAreaRegistroDelEstatus>
          </v-card-text>
    </v-card> -->
 <br >
    
    <!-- ==========================================  -->
   
  
    <!-- =============================================== -->
    
 <!--     <cardPlanEnEjecucion
        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.plan_docto"
        :nombreDelArchivo="data_plan_docto.nombreOriginal"
        :sihayarchivo="data_plan_docto.hayArchivo"
         :valorcombo="seguimiento.plan"
        ></cardPlanEnEjecucion>
    <br > -->

      <!-- ==========================================  -->

    
  <!--  <cardDocumentosOficiales
       :incidenteId ="incidenteIdPE"

        :archivoId ="seguimiento.documentos_docto"
        :nombreDelArchivo="data_documento_docto.nombreOriginal"
        :sihayarchivo="data_documento_docto.hayArchivo"
        :valorcombo="seguimiento.documentos">
        </cardDocumentosOficiales>
    
    <br > -->

    <!-- <h4>ACCIONES A REALIZAR</h4> -->

    <!-- =============================================== -->


    <CardConsensoNacional v-if="verConsensoNacional">

    </CardConsensoNacional>
   <br>
    
   <CardMedidasDisciplinarias v-if="verMedidasDisciplinarias">

   </CardMedidasDisciplinarias>
   <br>
   
    <CardDenunciaPresentada  v-if='verDenunciaPresentada'>

    </CardDenunciaPresentada>
    <br>

    <CardActaDeHechos v-if='verActaDeHechos'>

    </CardActaDeHechos>

   <br>
   <cardActaDeValoracion v-if='verActaDeHechos'>

   </cardActaDeValoracion>
   <br>
   <!-- =============================================== -->
     <cardNotificacionPFN v-if ="verNotificacionPFN" >
     </cardNotificacionPFN>
    <br >

    <!-- =============================================== -->
   
    <!-- =============================================== 
     SE NOTIFICO A LA PERSONA DENUNCIANTE
    -->

      <cardNotificacionPersona v-if="verNotificacionPD" >
      </cardNotificacionPersona>
  <br />
    <!-- =============================================== -->


  



  
   
      <!--
         SE CUENTA CON UN PLAN DE RECUPERACIÓN EMOCIONAL CON SEGUIMIENTO
       -->
      <cardPlanRecuperacion v-if="verPlanRecuperacionEmo"
        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.planrecuperacion_docto"
        :nombreDelArchivo="data_planrecuperacion_docto.nombreOriginal"
        :sihayarchivo="data_planrecuperacion_docto.hayArchivo"
        :valorcombo="seguimiento.planrecuperacion"
      ></cardPlanRecuperacion>
 

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

   <!--     <cardProtocoloComponente 
        :valorcombo="seguimiento.protocolosos"
        :esDenuncia="esDenuncia"
        :incidenteId="incidenteId"
        :textoRespuesta="tipoderespuesta">

        </cardProtocoloComponente> -->


    <!-- =============================================== -->

    <br>
       <br>
    
    <CardInformaPatronato v-if="verInformaPatronato">
    </CardInformaPatronato>
  
    
   <br>
     
     <CardInformeRegional v-if="verInformaRegional">

     </CardInformeRegional>

   <br>
   <cardNotificacionDIF v-if="verNotificacionDIF"

        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.notificaciondif_docto"
        :nombreDelArchivo="data_notificaciondif_docto.nombreOriginal"
        :sihayarchivo="data_notificaciondif_docto.hayArchivo"
        :valorcombo="seguimiento.notificaciondif"
   >
   </cardNotificacionDIF>
   <br>
   <!-- =============================================== -->

 
  <cardAsesoriaLegal v-if="verAsesoriaLegal">

  </cardAsesoriaLegal>
   <br>

   <cardAsesoriaEmocional v-if="verAsesoriaEmocional">

   </cardAsesoriaEmocional>


  
<br>

  <!-- <cardNotificacionAutoridad v-if="esDenuncia"
        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.notificacionautoridad_docto"
        :nombreDelArchivo="data_notificacionautoridad_docto.nombreOriginal"
        :sihayarchivo="data_notificacionautoridad_docto.hayArchivo"
        :valorcombo="seguimiento.notificacionautoridad"
    >
   </cardNotificacionAutoridad>
   <br>

  -->
    <v-alert :type="tipoalerta">
       {{mensaje}}
    </v-alert>
    <br>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="PermisoImpresion"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn> 
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
         <v-btn
          
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
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="guardarSeguimiento"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn> 
      </v-col>
    </v-row>

  <!-- animacion de carga de pagina -->
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>

    
  </v-container>
</template>
<script>
//import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue"; //
//import seguimientoCRUD from "@/components/seguimiento/seguimientoCRUD.vue";
import seguimientoEtapa from '@/components/etapas/seguimientoEtapa.js'
import apiArchivos from '@/apialdeas/apiArchivos.js';
//import cardProtocoloComponente  from  '@/components/etapasComponentesSeguimiento/cardProtocoloComponente.vue'
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
/* importar en el componente , antes del export defaiñt*/
import validacionSeguimiento from "@/components/etapas/validaciones/validacionSeguimiento.js";
//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';
import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';

//import { mapState } from 'vuex';


export default {
   components: {     
   //cardProtocoloComponente,  
   BarraDeNavegacion,          
   // textAreaRegistroDelEstatus : () => import('@/components/etapasComponentesSeguimiento/textAreaRegistroDelEstatus.vue'),
   // cardPlanEnEjecucion :()=> import('@/components/etapasComponentesSeguimiento/cardPlanEnEjecucion.vue'),
  CardDenunciaPresentada :()=> import('@/components/etapasComponentesSeguimiento/CardDenunciaPresentada.vue'),
  CardInformaPatronato :()=> import('@/components/etapasComponentesSeguimiento/CardInformaPatronato.vue'),
  CardConsensoNacional :()=> import('@/components/etapasComponentesSeguimiento/CardConsensoNacional.vue'),
  cardAsesoriaLegal    :()=> import('@/components/etapasComponentesSeguimiento/CardAsesoriaLegal.vue'),
  cardAsesoriaEmocional :()=>import('@/components/etapasComponentesSeguimiento/CardAsesoriaEmocional.vue'),
  cardInformeRegional :()=> import('@/components/etapasComponentesSeguimiento/CardInformeRegional.vue'),
  CardMedidasDisciplinarias :()=> import('@/components/etapasComponentesSeguimiento/CardMedidasDisciplinarias.vue'),
  cardNotificacionDIF :()=> import('@/components/etapasComponentesSeguimiento/cardNotificacionDIF.vue'),
  //cardNotificacionAutoridad :()=> import('@/components/etapasComponentesSeguimiento/cardNotificacionAutoridad.vue'),
  cardNotificacionPFN  :()=> import('@/components/etapasComponentesSeguimiento/cardNotificacionPFN.vue'),
  cardNotificacionPersona :() => import('@/components/etapasComponentesSeguimiento/cardNotificacionPersona.vue'),
  cardActaDeValoracion :() => import('@/components/etapasComponentesSeguimiento/cardActaDeValoracion.vue'),
  cardPlanRecuperacion :() => import('@/components/etapasComponentesSeguimiento/cardPlanRecuperacion.vue'),
  CardActaDeHechos :() => import('@/components/etapasComponentesSeguimiento/CardActaDeHechos.vue'),
  // cardDocumentosOficiales:() => import('@/components/etapasComponentesSeguimiento/cardDocumentosOficiales.vue')

  },


  data() {
    return {

      /********************************************
      VARIABLES PARA OCULTAR/MOSTRAR LOS COMPONENTES
      SEGUN SEA EL TIPO DE RESPUESTA
      ******************************************** */

      verConsensoNacional         :false,
      verMedidasDisciplinarias    : false,
      verActaDeHechos             : false,
      verDenunciaPresentada       : false,
      verInformaPatronato         : false,
      verInformaRegional          : false,
      verNotificacionDIF          : false,
      verAsesoriaLegal            : false,
      verAsesoriaEmocional        : false,
      verNotificacionPFN          : false ,
      verNotificacionPD           : false,
      verPlanRecuperacionEmo      : false,

      /************************************************ */

     
     /*************************************************
     LA VARIABLE OCULTA/MUESTRA LA ANIMACION DE CARGAR 
     DE LA PAGINA 
     **************************************************/
      overlay : false,
      /************************************************/


     /*************************************************
     LA VARIABLE RECIBE EL VALOR DEL FOLIO DEL INCIDENTE
     **************************************************/
       folio :'sin asignar',
    
    /**************************************************
      VARIABLE PARA OBSERVAR SI TODOS LOS DOCUMENTOS HAN
      TERMINADO DE CARGARSE
    **************************************************/

       doctosListos : this.$store.state.seguimiento.doctosCargados,



      tipoalerta : '',
      mensaje : '',
      errores : 0,
      tipoderespuesta : '',
      esDenuncia : false,
      verDenuncia_o_investigacion : false,

      data_plan_docto : [],
      data_planrecuperacion_docto: [],
      data_notificacionpfn_docto: [],
      data_notificaciondif_docto: [],
      data_notificacionautoridad_docto: [],
      data_notificaciondenunciante_docto: [],
      data_documento_docto: [],
      data_actavaloracion_docto: [],

      seguimiento:[],

      incidenteId:'',
     
      incidenteIdPE :"",

      archivoIdPE : "",
      nombreDelArchivoPE : "",
      sihayarchivoPE: "",
      planenejecucion: "",


     
      loading : false,

      registroDelStatus: "",
      planrecuperacion: "",
    
      doctooficial: "",

      notificaciondif: "",

      notificacionautoridad: "",

      notificacionpfn: "",

      notificaciondenunciante: "",

      adulto: false,

      pares: false,

      itemsOpciones: ["SI", "NO", "POR CONFIRMAR"],

      itemsUnidades: ["Unidad SOS Tijuana", "Unidad SOS CDMX"],

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

      perfilAgresor: null,

      date: new Date().toISOString().substr(0, 10),

      menu2: false,
    };
  },
  
  computed: {
    
     generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  watch: {
      
   /*   "$store.state.seguimiento.doctosCargados" : function(newValue,oldValue) {
       typeof oldValue;
       // console.log("Valor del nv: "        + newValue);
       // console.log("valor del Old value :" + oldValue);
    //   newValue == 8 ? this.overlay =false : this.overlay= true;
      }*/
  },

  methods: {

    setearValores_para_impresion(){
     console.log('.');
    },

   
    /*===== termina validacion ====*/
    PermisoImpresion(){
             // 
      console.log(" Permiso IMPRESIONDESEGUIMIENTO  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDESEGUIMIENTO)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDESEGUIMIENTO=='SI'){
    // impreseion 

        ///////////////////////////////////////
        // seteamos los valores a iutlizar 
        ////////////////////////////////////////
        this.setearValores_para_impresion();
        ////////////////////////////////////////
        
         this.$router.push({
          name: "ReporteImpresionSeguimiento"
        });


     }else {
       /* En caso de que no se tenga permiso */

      //realizamos la solicitud del permiso//
       let idRecuperado = this.$route.params.id;
       this.$store.dispatch('actions_permisosimpresion_incidenteid',this.$route.params.id);
       this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
       this.$store.dispatch('actions_permisosimpresion_etapa', "Seguimiento");
     
     //  let s= this.$store;
       //solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
       //-------------------------------------------------------------

       //Redireccionamos al usuario en caso de que no tenga los permisos 
        
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });


     }
    },

    revisarErrrores(){
      console.log(" Revisar Errores ");
    },



   
    guardarRegistro2() {
          // 
    
    console.log(" Permiso EDITARDESEGUIMIENTO  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARDESEGUIMIENTO)             
 
  if (this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARDESEGUIMIENTO=='SI'){

     
       this.loading = true;
      //incidenteIdPE,

      /*
        

            //nuevos parametros
         incidenteid, folio ,tipoderespuesta
        'estatus_consenso'                => $estatusConsenso ,
        'estatus_medidas'                  => $estatusMedidas,
        'estatus_denuncia'                => $estatusDenunciaPresentada,
        'estatus_notificacionpfn'         => $estatus_notificacionpfn,
        'estatus_notificaciondenunciante' => $estatus_notificaciondenunciante,
        'estatus_planrecuperacion'        => $estatus_planrecuperacion,
        'id_consensodocto'                => $idDocumentoConsenso,
        'id_denunciadocto'                => $idDenuciaPresentada,
        'id_medidasdocto'                 => $idmedidasdisciplinarias,
        'id_Notificacionpfn'              => $idNotificacionpfn,
        'id_NotificacionDenunciante'      => $idNotificacionDenunciante,
        'id_NotificacionPlan'             => $idNotificacionPlan,
        'id_Actavaloracion'               => $idActavaloracion,
        'id_ActaHechos'                   => $idActaHechos

      */
     
     let parametros = {

        incidenteid                     :   this.incidenteIdPE,        
        folio                           :   this.folio,
        tipoderespuesta                 :   this.tipoderespuesta,
        estatus_consenso                :   this.$store.state.seguimiento.estatus_consenso    ,           
        estatus_medidas                 :   this.$store.state.seguimiento.estatus_medidas   ,          
        estatus_denuncia                :   this.$store.state.seguimiento.estatus_denuncia  ,         
        estatus_notificacionpfn         :   this.$store.state.seguimiento.estatus_notificacionpfn  ,  
        estatus_notificaciondenunciante :   this.$store.state.seguimiento.estatus_notificaciondenunciante   ,
        estatus_planrecuperacion        :   this.$store.state.seguimiento.estatus_planrecuperacion      ,
        id_consensodocto                :   this.$store.state.seguimiento.id_consensodocto      ,
        id_denunciadocto                :   this.$store.state.seguimiento.id_denunciadocto     , 
        id_medidasdocto                 :   this.$store.state.seguimiento.id_medidasdocto      ,
        id_Notificacionpfn              :   this.$store.state.seguimiento.id_Notificacionpfn      ,
        id_NotificacionDenunciante      :   this.$store.state.seguimiento.id_NotificacionDenunciante    , 
        id_NotificacionPlan             :   this.$store.state.seguimiento.id_NotificacionPlan     ,
        id_Actavaloracion               :   this.$store.state.seguimiento.id_ActaValoracion     ,
        id_ActaHechos                   :   this.$store.state.seguimiento.id_ActaHechos     ,
     };

      console.log(" parametros nuevo seguimiento " + JSON.stringify(parametros));

      let update = seguimientoEtapa.updateSeguimiento(parametros, this.$store);

      update.then(
        response =>{
          console.log( JSON.stringify(response.data));
           console.log( 'actualizado seguimiento: ' + response.data.estado);
          this.loading = false;

          console.log("estado :: "  + response.data.estado );
         
          if (response.data.estado  =='abierto'){
                   this.mensaje = 'La información ha sido guardada.';
                   this.tipoalerta = 'warning';
           }

          if (response.data.estado=='cerrado'){
                   this.mensaje = 'Este registro ha sido completado';
                   this.tipoalerta = 'success';

                /*******************************************************************
                * Enviamos los correos para notificar a los usuarios que tienen 
                * este permiso activo
                 ****************************************************************/
                  
                  let correosRecibidos = response.data["correos"];
                  console.log("Variable de correos");
                  console.log(correosRecibidos);

       
                  
                  this.$store.dispatch("action_notificacion_incidenteid",this.$store.state.seguimiento.seguimiento_incidenteid);
                  this.$store.dispatch("action_notificacion_respuesta","seguimiento");
                  let respuesta ="Se ha completado el llenado de seguimiento del folio  #" +  this.folio;
                  this.$store.dispatch("action_notificacion_texto_respuesta",respuesta);                 
                   

                     console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
                       if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){


                          envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,respuesta);                
                       }
                    this.$router.push({ name: "NotificacionRespuesta"});


           }

        }
      ).catch(
         error =>{
          console.log( JSON.stringify(error.data));
            this.loading = false;
        }
      );
    }//cierra el if del permiso EDITARDESEGUIMIENTO

    },

    guardarRegistro() {
          // 
    
   
  if (this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARDESEGUIMIENTO=='SI'){

     
       this.loading = true;
      //incidenteIdPE,

      /*
            incidenteid           
            status              
            plan                 
            documentos            
            notificaciondif       
            notificacionautoridad
            notificacionpfn       
            notificaciodenunciante
            actavaloracion       
            planrecuperacion     
            documentos_docto           
            notificaciondif_docto      
            notificacionautoridad_docto 
            notificacionpfn_docto       
            notificaciodenunciante_docto
            actavaloracion_docto       
            planrecuperacion_docto     
            plan_docto    

            //nuevos parametros
                   incidenteid, folio ,tipoderespuesta
        'estatus_consenso'                => $estatusConsenso ,
        'estatus_medidas'                  => $estatusMedidas,
        'estatus_denuncia'                => $estatusDenunciaPresentada,
        'estatus_notificacionpfn'         => $estatus_notificacionpfn,
        'estatus_notificaciondenunciante' => $estatus_notificaciondenunciante,
        'estatus_planrecuperacion'        => $estatus_planrecuperacion,
        'id_consensodocto'                => $idDocumentoConsenso,
        'id_denunciadocto'                => $idDenuciaPresentada,
        'id_medidasdocto'                 => $idmedidasdisciplinarias,
        'id_Notificacionpfn'              => $idNotificacionpfn,
        'id_NotificacionDenunciante'      => $idNotificacionDenunciante,
        'id_NotificacionPlan'             => $idNotificacionPlan,
        'id_Actavaloracion'               => $idActavaloracion,
        'id_ActaHechos'                   => $idActaHechos

      */
     
     let parametros = {
            incidenteid :  this.incidenteIdPE,        
            status  : '.',            
            plan      : '.',             
            documentos   : '.',           
            notificaciondif   : this.$store.state.seguimiento.seguimiento_notificaciondif,      
            notificacionautoridad : this.$store.state.seguimiento.seguimiento_notificacionautoridad, 
            notificacionpfn       : this.$store.state.seguimiento.seguimiento_notificacionpfn,  
            notificaciodenunciante : this.$store.state.seguimiento.seguimiento_notificaciodenunciante, 
            actavaloracion        : this.$store.state.seguimiento.seguimiento_actavaloracion, 
            planrecuperacion      : this.$store.state.seguimiento.seguimiento_planrecuperacion, 
            documentos_docto        : '0',     
            notificaciondif_docto     : this.$store.state.seguimiento.seguimiento_notificaciondif_docto,   
            notificacionautoridad_docto  : this.$store.state.seguimiento.seguimiento_notificacionautoridad_docto, 
            notificacionpfn_docto        : this.$store.state.seguimiento.seguimiento_notificacionpfn_docto, 
            notificaciodenunciante_docto : this.$store.state.seguimiento.seguimiento_notificaciodenunciante_docto, 
            actavaloracion_docto        : this.$store.state.seguimiento.seguimiento_actavaloracion_docto, 
            planrecuperacion_docto      : this.$store.state.seguimiento.seguimiento_planrecuperacion_docto, 
            plan_docto  : '0',
             protocolosos : this.$store.state.seguimiento.seguimiento_protocolosos

     };

      console.log(" parametros " + JSON.stringify(parametros));

      let update = seguimientoEtapa.updateSeguimiento(parametros, this.$store);

      update.then(
        response =>{
          console.log( JSON.stringify(response.data));
           console.log( 'actualizado seguimiento: ' + response.data.estado);
          this.loading = false;

          console.log("estado :: "  + response.data.estado );
         
          if (response.data.estado  =='abierto'){
                   this.mensaje = 'La información ha sido guardada.';
                   this.tipoalerta = 'warning';
           }

          if (response.data.estado=='cerrado'){
                   this.mensaje = 'Este registro ha sido completado';
                   this.tipoalerta = 'success';

                /*******************************************************************
                * Enviamos los correos para notificar a los usuarios que tienen 
                * este permiso activo
                 ****************************************************************/
                  
                  let correosRecibidos = response.data["correos"];
                  console.log("Variable de correos");
                  console.log(correosRecibidos);

       
                  
                  this.$store.dispatch("action_notificacion_incidenteid",this.$store.state.seguimiento.seguimiento_incidenteid);
                  this.$store.dispatch("action_notificacion_respuesta","seguimiento");
                  let respuesta ="Se ha completado el llenado de seguimiento del folio  #" +  this.folio;
                  this.$store.dispatch("action_notificacion_texto_respuesta",respuesta);                 
                   

                     console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
                       if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){


                          envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,respuesta);                
                       }
                    this.$router.push({ name: "NotificacionRespuesta"});


           }

        }
      ).catch(
         error =>{
          console.log( JSON.stringify(error.data));
            this.loading = false;
        }
      );
    }//cierra el if del permiso EDITARDESEGUIMIENTO

    },

    guardarSeguimiento(){
      
       typeof validacionSeguimiento;
     

      /*************************************************
       *  SE ACTUALIZA PROCESO 
       *************************************************/
       this.guardarRegistro2();
     
    },


    guardar__iraDashboard() {

            this.verConsensoNacional       = false ;
            this.verMedidasDisciplinarias  = false ;
            this.verDenunciaPresentada     = false ;
            this.verNotificacionPFN        = false ;
            this.verNotificacionPD         = false ;
            this.verActaDeHechos           = false ;
            this.verPlanRecuperacionEmo    = false ;

             this.$router.push("/dashboard");
    },

  /*  checkArray(arreglo){
          console.log("contenido de arreglo");
           
         
         let cadena =  JSON.stringify(arreglo);

          var x = cadena.length;
          
          console.log("valor length : " +  x );

          let arrayDeRegreso = [];
          if (x==0){

            arrayDeRegreso['hayArchivo']= false;
          }

          if (x>0){

               arrayDeRegreso['hayArchivo']= true;
                arrayDeRegreso['id']= JSON.stringify(arreglo['id']);
                 arrayDeRegreso['nombreOriginal']=JSON.stringify(arreglo['nombreOriginal']);

          }


          return arrayDeRegreso;
        //   console.log("valor : " +  arreglo['hayArchivo']);

    },*/


    /***
    
    
       */

    cargarSeguimientos(){

      let id = this.$route.params.id;
      this.incidenteIdPE = id;

      console.log("valor de id en seguimiento " + id);

      /***************************************************************************
       * activamos el loading
       **************************************************************************/
      // this.loading = true;
      /****************************************************************************
       * SETEAMOS A 0 EL VALOR BANDERA QUE INDICA QUE TODOS LOS DOCUEMNTOS
       * SE HAN MOSTRADO YA EN LA PANTALLA
       *++************************************************************************/
         this.$store.dispatch("action_seguimiento_doctosCargados", 0);
      /************************************************************************/
      let  datos = seguimientoEtapa.cargarDatosSeguimiento(id,this.$store);


      datos.then(

        response => {

        
          typeof apiArchivos;
          console.log(response.data);
          console.log(response.data.msg);
          console.log(response.data.respuesta.folio);
          console.log(" Tipo de Respuesta " +  response.data.respuesta.tipoderespuesta);
      
          this.folio =response.data.respuesta.folio;
         //setear el valor del filio para reporte de impresion 
         this.$store.dispatch("action_folio",this.folio);
      
         this.incidenteId =response.data.respuesta.incidenteid;
        /* *******************************************************/

         this.tipoderespuesta = response.data.respuesta.tipoderespuesta;

        //this.tipoderespuesta == 'DENUNCIA LEGAL' ? this.esDenuncia=true : this.esDenuncia =false;
         this.seguimiento =response.data.respuesta;
         seguimientoEtapa.asignarVariablesGLobales( this.seguimiento ,this.$store );

        /***************************************************************
        CON ESTO DECIDIMOS QUE COMPONENTES MOSTRAR SEGUN EL TIPO DE
        RESPUESTA   #ocultar     
        **************************************************************** */
  
        if ( this.tipoderespuesta == 'DENUNCIA LEGAL'){
            
            this.verConsensoNacional       = true ;
            this.verMedidasDisciplinarias  = true ;
            this.verDenunciaPresentada     = true ;
            this.verNotificacionPFN        = true ;
            this.verNotificacionPD         = true ;
            this.verActaDeHechos           = true ;
            this.verPlanRecuperacionEmo    = true ;


        }

        if ( this.tipoderespuesta == 'ABORDAJE INTERNO'){
            
           // this.verConsensoNacional       = true ;
          //  this.verMedidasDisciplinarias  = true ;
           // this.verDenunciaPresentada     = true ;
            this.verNotificacionPFN        = true ;
            this.verNotificacionPD         = true ;
            this.verActaDeHechos           = true ;
            this.verPlanRecuperacionEmo    = true ;


        }
         this.overlay= false;

        }
      )//termina then 
      .catch( error => {
            this.overlay = false;
            console.log(" error :" + error);
      });

    },// termina funcion
  },

   

  mounted(){

    this.overlay = true;
     
  /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
  ////////////////////////////////////////////
    let ruta_A_regresar  = '/seguimiento';
    console.log("ruta_A_regresar : " + ruta_A_regresar);
    this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
  /////////////////////////////////////////////
 
     this.cargarSeguimientos();
     
  },


};
</script>

