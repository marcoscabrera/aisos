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
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>
    <!-- -->

        <!-- pediente la fecha -->
    <FoliosComponente 
    :folio="folio"
    :foliodenuncia ="folioabordaje"
    tipofolio="ABORDAJE INTERNO">
    </FoliosComponente>


    <!-- =============================================== -->
    <br >
    <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <textAreaRegistroDelEstatus
            :texto="abordaje.status">
            </textAreaRegistroDelEstatus>
          </v-card-text>
    </v-card>
 <br >
    
    <!-- ==========================================  -->
   
  
    <!-- =============================================== -->
    
      <cardPlanEnEjecucion
        :incidenteId ="incidenteIdPE"
        :archivoId ="abordaje.plan_docto"
        :nombreDelArchivo="data_plan_docto.nombreOriginal"
        :sihayarchivo="data_plan_docto.hayArchivo"
         :valorcombo="abordaje.plan"
        ></cardPlanEnEjecucion>
    <br >

      <!-- ==========================================  -->

    
    <cardDocumentosOficiales
       :incidenteId ="incidenteIdPE"

        :archivoId ="abordaje.documentos_docto"
        :nombreDelArchivo="data_documento_docto.nombreOriginal"
        :sihayarchivo="data_documento_docto.hayArchivo"
        :valorcombo="abordaje.documentos">
        </cardDocumentosOficiales>
    
    <br >

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
    <v-alert type="info">
     Actualmente esta caracteristica esta en desarrollo.
    </v-alert>
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


export default {
  components: {   
    FoliosComponente,  
     BarraDeNavegacion,          
    textAreaRegistroDelEstatus : () => import('@/components/etapasComponentesSeguimiento/textAreaRegistroDelEstatus.vue'),
    cardPlanEnEjecucion :()=> import('@/components/etapasComponentesSeguimiento/cardPlanEnEjecucion.vue'),
    cardDocumentosOficiales:() => import('@/components/etapasComponentesSeguimiento/cardDocumentosOficiales.vue')

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
           console.log( 'actualizado seguimiento');
          this.loading = false;
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

      */
      this.abordaje = response.data[0];
      this.folio = response.data[1]["folioincidente"];
      this.folioabordaje =  response.data[0]["folioabordaje"];
      //setear el valor del filio para reporte de impresion 
      this.$store.dispatch("action_folio",this.folio);
      
      this.incidenteId =response.data[0]["incidenteid"];
      /* *******************************************************/
       let plan_docto = response.data[0]["plan_docto"];
       let documentos_docto = response.data[0]["documentos_docto"];

       let archivo_plan_docto = apiArchivos.conseguirArchivo(plan_docto, this.$store.state);
       let archivo_documentos_docto = apiArchivos.conseguirArchivo(documentos_docto, this.$store.state);
   
    /* 
       let archivo_planrecuperacion_docto = apiArchivos.conseguirArchivo(this.seguimiento.planrecuperacion_docto, this.$store.state);
       let archivo_notificacionpfn_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificacionpfn_docto, this.$store.state);
       let archivo_notificaciondif_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificaciondif_docto, this.$store.state);
       let archivo_notificacionautoridad_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificacionautoridad_docto, this.$store.state);
       let archivo_notificaciondenunciante_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificaciondenunciante_docto, this.$store.state);
       let archivo_actavaloracion_docto = apiArchivos.conseguirArchivo(this.seguimiento.actavaloracion_docto, this.$store.state);
      */ 



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


    }


  },

  mounted(){
     
     this.cargarSeguimientos();
     
  },



  data() {
    return {
      folioabordaje :'',
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

