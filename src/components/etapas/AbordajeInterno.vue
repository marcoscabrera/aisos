<template>
  <v-container>
  

    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2>Abordaje Interno</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">


            <BarraDeNavegacion
             activo_ri="1"
             activo_vi="1"
             activo_s="0"
             activo_c="1"
             ></BarraDeNavegacion>

        </v-col>
    </v-row>
    <br>

    <!-- -->

        <!-- pediente la fecha -->
    <FoliosComponente 
    :folio="folio"
    :foliodenuncia ="folioabordaje"
    :date="fecha"
    tipofolio="ABORDAJE INTERNO">
    </FoliosComponente>


    <!-- =============================================== -->
    <br >
    <v-card width="100%" >
    <ComponenteTextAreaStatus :texto="texto">
    </ComponenteTextAreaStatus>

    </v-card>
 <br >
    
    <!-- ==========================================  -->
   
  
    <!-- =============================================== -->
       <!-- abordaje_plan -->
       
      <ComponenteCardDoctoAbordaje
        :incidenteId ="incidenteIdPE"
        :archivoId ="abordaje.plan_docto"
        :nombreDelArchivo="data_plan_docto.nombreOriginal"
        :sihayarchivo="data_plan_docto.hayArchivo"
        :valorcombo="abordaje.plan"
        ></ComponenteCardDoctoAbordaje>
    <br >

      <!-- ==========================================  -->

    
    <ComponenteCardDocumentosOficiales
        :incidenteId ="incidenteIdPE"

        :archivoId ="abordaje.documentos_docto"
        :nombreDelArchivo="data_documento_docto.nombreOriginal"
        :sihayarchivo="data_documento_docto.hayArchivo"
        :valorcombo="abordaje.documentos">
        </ComponenteCardDocumentosOficiales>
    

    <br> 
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

import abordajeinterno from '@/components/etapas/abordajeinterno.js'
import apiArchivos from '@/apialdeas/apiArchivos.js';
//import cardProtocoloComponente  from  '@/components/etapasComponentesSeguimiento/cardProtocoloComponente.vue'
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
/* importar en el componente , antes del export defaiñt*/
import validacionSeguimiento from "@/components/etapas/validaciones/validacionSeguimiento.js";

import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';

import FoliosComponente  from "@/components/denucialegal/componentesDenunciaLegal/FoliosComponente.vue";

import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';

export default {
  components: {   
    FoliosComponente,  
     BarraDeNavegacion,          
    ComponenteTextAreaStatus : () => import('@/components/etapasComponentesAbordaje/ComponenteTextAreaStatus.vue'),
    ComponenteCardDoctoAbordaje :()=> import('@/components/etapasComponentesAbordaje/ComponenteCardDoctoAbordaje.vue'),
    ComponenteCardDocumentosOficiales:() => import('@/components/etapasComponentesAbordaje/ComponenteCardDocumentosOficiales.vue')

  },

  
  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
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
       let usuario = this.$store.state.usuarios.usuarios_usuariologueado.id ;
       let incidenteid =idRecuperado ;
       let etapa="Seguimiento";
       let s= this.$store;
       solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
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

    guardarRegistro() {
          // 
          console.log(" Permiso EDITARDESEGUIMIENTO  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARDESEGUIMIENTO)             
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

      */
     
     let parametros = {
            incidenteid :  this.incidenteIdPE,        
            status  : this.$store.state.abordaje.abordaje_status,            
            plan      : this.$store.state.abordaje.abordaje_plan,             
            documentos   : this.$store.state.abordaje.abordaje_documentos,           
            plan_docto : this.$store.state.abordaje.abordaje_plan_docto, 
            documentos_docto : this.$store.state.abordaje.abordaje_documentos_docto,
     };

      console.log(" parametros " + JSON.stringify(parametros));

      let update = abordajeinterno.updateSeguimiento(parametros, this.$store);

      update.then(
        response =>{

          console.log( JSON.stringify(response.data));
          console.log( 'actualizado seguimiento'+ response.data.estado);
          this.loading = false;

          if (response.data.estado=='abierto'){
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

       
                  
                  this.$store.dispatch("action_notificacion_incidenteid",this.$store.state.abordaje.abordaje_incidenteid);
                  this.$store.dispatch("action_notificacion_respuesta","abordaje");
                  let respuesta ="Se ha completado el llenado de el Abordaje Interno del folio  #" +  this.folio;
                  this.$store.dispatch("action_notificacion_texto_respuesta",respuesta);                 
                 
                   envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,respuesta);                
                   


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
      /* let resultadoValidacion = validacionSeguimiento.validacion_sePuedeCapturar(this.$store);

       resultadoValidacion > 0 ? this.revisarErrrores() : this.guardarRegistro();
*/     
      // validacionSeguimiento.validacion_sePuedeCapturar(this.$store);
       this.guardarRegistro();
     
    },
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },

    checkArray(arreglo){
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

    },


    /***
    
    
     */
    cargarSeguimientos(){
      /*
       Este id es el id del incidendte
       lo debemos de buscar en la tabla de idseguimiento

      */
     
      let id = this.$route.params.incidenteId;
      this.incidenteIdPE = id;

      console.log("valor de id en abordaje interno :  " + id);

      let  datos = abordajeinterno.cargarAbordaje_por_incidente(id,this.$store);

      datos.then( 
        
        response => {

      /*
      respuesta de la api

      {"0":
      {"id":"1",
      "incidenteid":"24",
      "status":" ",
      "plan":" ",
      "plan_docto":"0",
      "documentos":"0",
      "documentos_docto":"0",
      "estado":"abierto",
      "fechaCreacion":"2021-03-18",
      "fechaUpdate":"2021-03-18",
      "programa":"2",
      "folioabordaje":"AI--1-2021"},
      "folioincidente":"MO-7-2021"}


                  incidenteid :  this.incidenteIdPE,        
            status  : this.$store.state.abordaje.abordaje_status,            
            plan      : this.$store.state.abordaje.abordaje_plan,             
            documentos   : this.$store.state.abordaje.abordaje_documentos,           
            plan_docto : this.$store.state.abordaje.abordaje_plan_docto, 
            documentos_docto : this.$store.state.abordaje.abordaje_documentos_docto,

      */
      this.abordaje = response.data[0];
      this.folio = response.data[1]["folioincidente"];
      this.folioabordaje =  response.data[0]["folioabordaje"];

      this.fecha =   response.data[0]["fechaUpdate"];  
      this.texto =   response.data[0]["status"];  
      this.$store.dispatch("action_abordaje_status", this.texto );

      //setear el valor del filio para reporte de impresion 
      this.$store.dispatch("action_folio",this.folio);
      
      this.incidenteId =response.data[0]["incidenteid"];
      /* *******************************************************/
       let plan_docto = response.data[0]["plan_docto"];
       this.$store.dispatch("action_abordaje_plan_docto",plan_docto);
       this.$store.dispatch("action_abordaje_plan",response.data[0]["plan"]);

       let documentos_docto = response.data[0]["documentos_docto"];
       this.$store.dispatch("action_abordaje_documentos_docto",documentos_docto);
       this.$store.dispatch("action_abordaje_documentos",response.data[0]["documentos"]);
       
       this.estado = response.data[0]["estado"];

       let archivo_plan_docto = apiArchivos.conseguirArchivo(plan_docto, this.$store.state);
       let archivo_documentos_docto = apiArchivos.conseguirArchivo(documentos_docto, this.$store.state);
   
    /* 
         action_abordaje_id 

action_abordaje_incidenteid 
,
action_abordaje_status 
,
action_abordaje_plan
,
action_abordaje_documentos 
action_abordaje_plan_docto 

action_abordaje_documentos_docto 
 action_abordaje_plan_docto_nombre
  action_abordaje_documentos_docto_nombre    */ 



       /* --------------------------------------------------------------- */
       archivo_plan_docto.then(
         response => {
           //console.log("archivo_plan_docto :" + JSON.stringify(response.data));

           this.data_plan_docto = this.checkArray(  response.data[0]);
          
          this.$store.dispatch('action_abordaje_plan_docto_nombre', this.data_plan_docto['nombreOriginal']);
 
         }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
     
        archivo_documentos_docto.then(
         response => {
           //console.log("archivo_documentos_docto :" + JSON.stringify(response.data));
     
          // this.data_documento_docto= response.data[0];
             this.data_documento_docto =  this.checkArray(   response.data[0] );
             this.$store.dispatch('action_abordaje_documentos_docto_nombre', this.data_documento_docto['nombreOriginal']);

      }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );

       /*===================================================================*/

      }).catch( error => {
              console.log(error);
      });
    
  /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
  ////////////////////////////////////////////
   let ruta_A_regresar  = '/abordajeinterno/' + this.$route.params.incidenteId;
    console.log("ruta_A_regresar : " + ruta_A_regresar);
    this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
      /////////////////////////////////////////////
 

       this.overlay = false;

    }// termina funcion cargarseguimientoes


  },

  mounted(){

    this.overlay =  true;
 
     this.cargarSeguimientos();
     
  },



  data() {
    return {
      overlay : false,
      estado: '',
      mensaje : '',
      tipoalerta: '',
      folioabordaje :'',
      errores : 0,
      tipoderespuesta : '',
      esDenuncia : false,
      verDenuncia_o_investigacion : false,
      texto : '',
      fecha : '',

      data_plan_docto : [],
      data_planrecuperacion_docto: [],
      data_notificacionpfn_docto: [],
      data_notificaciondif_docto: [],
      data_notificacionautoridad_docto: [],
      data_notificaciondenunciante_docto: [],
      data_documento_docto: [],
      data_actavaloracion_docto: [],

      abordaje:[],

      incidenteId:'',
     
      incidenteIdPE :"",

      archivoIdPE : "",
      nombreDelArchivoPE : "",
      sihayarchivoPE: "",
      planenejecucion: "",


      folio :'sin asignar',
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
};
</script>

