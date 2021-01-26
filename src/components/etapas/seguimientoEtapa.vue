<template>
  <v-container>
  

    <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
           <h2>Seguimiento</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">


            <BarraDeNavegacion
             activo_ri="1"
             activo_vi="1"
             activo_s="0"
             activo_c="1"
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
    <br />
    <v-row>
      <textAreaRegistroDelEstatus
      :texto="seguimiento.status">
      </textAreaRegistroDelEstatus>
    </v-row>
    <!-- ==========================================  -->
    <br />
    <!-- ==========================================  -->
    <!-- =============================================== -->
    <v-row>
      <cardPlanEnEjecucion
        :incidenteId ="incidenteIdPE"

        :archivoId ="seguimiento.plan_docto"
        :nombreDelArchivo="data_plan_docto.nombreOriginal"
        :sihayarchivo="data_plan_docto.hayArchivo"
         :valorcombo="seguimiento.plan"
        ></cardPlanEnEjecucion>

    </v-row>

    <br />

    <v-row>
    <cardDocumentosOficiales
       :incidenteId ="incidenteIdPE"

        :archivoId ="seguimiento.documentos_docto"
        :nombreDelArchivo="data_documento_docto.nombreOriginal"
        :sihayarchivo="data_documento_docto.hayArchivo"
        :valorcombo="seguimiento.documentos">
        </cardDocumentosOficiales>
    </v-row>
    <br />

    <h4>ACCIONES A REALIZAR</h4>

    <!-- =============================================== -->

    <v-row>
   <cardNotificacionDIF

        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.notificaciondif_docto"
        :nombreDelArchivo="data_notificaciondif_docto.nombreOriginal"
        :sihayarchivo="data_notificaciondif_docto.hayArchivo"
        :valorcombo="seguimiento.notificaciondif"
   >
   </cardNotificacionDIF>
    </v-row>
     <br>

       <v-row>
   <cardNotificacionAutoridad v-if="esDenuncia"
        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.notificacionautoridad_docto"
        :nombreDelArchivo="data_notificacionautoridad_docto.nombreOriginal"
        :sihayarchivo="data_notificacionautoridad_docto.hayArchivo"
        :valorcombo="seguimiento.notificacionautoridad"
    >
   </cardNotificacionAutoridad>
    </v-row>
    <!-- =============================================== -->
    <br />

    <!-- =============================================== -->

   <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <cardNotificacionPFN

       :incidenteId ="incidenteIdPE"

        :archivoId ="seguimiento.notificacionpfn_docto"
        :nombreDelArchivo="data_notificacionpfn_docto.nombreOriginal"
        :sihayarchivo="data_notificacionpfn_docto.hayArchivo"
        :valorcombo="seguimiento.notificacionpfn"
   
    ></cardNotificacionPFN>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== 
     SE NOTIFICO A LA PERSONA DENUNCIANTE
    -->
   
    <v-row>
      <cardNotificacionPersona
        :incidenteId ="incidenteIdPE"

        :archivoId ="seguimiento.notificaciondenunciante_docto"
        :nombreDelArchivo="data_notificaciondenunciante_docto.nombreOriginal"
        :sihayarchivo="data_notificaciondenunciante_docto.hayArchivo"
        :valorcombo="seguimiento.notificaciodenunciante"
      ></cardNotificacionPersona>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <!--
SE CUENTA CON EL LLENADO DEL ACTA DE VALORACION DEL/DE LOS INCIDENTES
       
       -->
      <cardActaDeValoracion
        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.actavaloracion_docto"
        :nombreDelArchivo="data_actavaloracion_docto.nombreOriginal"
        :sihayarchivo="data_actavaloracion_docto.hayArchivo"
        :valorcombo="seguimiento.actavaloracion"
      ></cardActaDeValoracion>

    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>

      <!--
         SE CUENTA CON UN PLAN DE RECUPERACIÓN EMOCIONAL CON SEGUIMIENTO
       -->
      <cardPlanRecuperacion
        :incidenteId ="incidenteIdPE"
        :archivoId ="seguimiento.planrecuperacion_docto"
        :nombreDelArchivo="data_planrecuperacion_docto.nombreOriginal"
        :sihayarchivo="data_planrecuperacion_docto.hayArchivo"
        :valorcombo="seguimiento.planrecuperacion"
      ></cardPlanRecuperacion>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->
    <v-row>
        <cardProtocoloComponente v-if="verDenuncia_o_investigacion"
        valorCombo="SI"
        :esDenuncia="esDenuncia"
        :incidenteId="incidenteId"
        :textoRespuesta="tipoderespuesta">

        </cardProtocoloComponente>
    </v-row>

    <!-- =============================================== -->

    <br />

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
  </v-container>
</template>
<script>
//import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue"; //
//import seguimientoCRUD from "@/components/seguimiento/seguimientoCRUD.vue";

import seguimientoEtapa from '@/components/etapas/seguimientoEtapa.js'
import apiArchivos from '@/apialdeas/apiArchivos.js';
import cardProtocoloComponente  from  '@/components/etapasComponentesSeguimiento/cardProtocoloComponente.vue'
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";


export default {
  components: {     
    cardProtocoloComponente,   BarraDeNavegacion,          
    textAreaRegistroDelEstatus : () => import('@/components/etapasComponentesSeguimiento/textAreaRegistroDelEstatus.vue'),
    cardPlanEnEjecucion :()=> import('@/components/etapasComponentesSeguimiento/cardPlanEnEjecucion.vue'),
    cardNotificacionDIF :()=> import('@/components/etapasComponentesSeguimiento/cardNotificacionDIF.vue'),
    cardNotificacionAutoridad :()=> import('@/components/etapasComponentesSeguimiento/cardNotificacionAutoridad.vue'),
    cardNotificacionPFN  :()=> import('@/components/etapasComponentesSeguimiento/cardNotificacionPFN.vue'),
    cardNotificacionPersona :() => import('@/components/etapasComponentesSeguimiento/cardNotificacionPersona.vue'),
    cardActaDeValoracion :() => import('@/components/etapasComponentesSeguimiento/cardActaDeValoracion.vue'),
    cardPlanRecuperacion :() => import('@/components/etapasComponentesSeguimiento/cardPlanRecuperacion.vue'),
    cardDocumentosOficiales:() => import('@/components/etapasComponentesSeguimiento/cardDocumentosOficiales.vue')

  },

  
  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  methods: {
    PermisoImpresion(){
             // 
      console.log(" Permiso IMPRESIONDESEGUIMIENTO  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDESEGUIMIENTO)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDESEGUIMIENTO=='SI'){
    // impreseion 
     }else {

          
        let idRecuperado = this.$route.params.id;
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });


     }
    },
    guardarSeguimiento(){

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
            status  : this.$store.state.seguimiento.seguimiento_status,            
            plan      : this.$store.state.seguimiento.seguimiento_plan,             
            documentos   : this.$store.state.seguimiento.seguimiento_documentos,           
            notificaciondif   : this.$store.state.seguimiento.seguimiento_notificaciondif,      
            notificacionautoridad : this.$store.state.seguimiento.seguimiento_notificacionautoridad, 
            notificacionpfn       : this.$store.state.seguimiento.seguimiento_notificacionpfn,  
            notificaciodenunciante : this.$store.state.seguimiento.seguimiento_notificaciodenunciante, 
            actavaloracion        : this.$store.state.seguimiento.seguimiento_actavaloracion, 
            planrecuperacion      : this.$store.state.seguimiento.seguimiento_planrecuperacion, 
            documentos_docto        : this.$store.state.seguimiento.seguimiento_documentos_docto,     
            notificaciondif_docto     : this.$store.state.seguimiento.seguimiento_notificaciondif_docto,   
            notificacionautoridad_docto  : this.$store.state.seguimiento.seguimiento_notificacionautoridad_docto, 
            notificacionpfn_docto        : this.$store.state.seguimiento.seguimiento_notificacionpfn_docto, 
            notificaciodenunciante_docto : this.$store.state.seguimiento.seguimiento_notificaciodenunciante_docto, 
            actavaloracion_docto        : this.$store.state.seguimiento.seguimiento_actavaloracion_docto, 
            planrecuperacion_docto      : this.$store.state.seguimiento.seguimiento_planrecuperacion_docto, 
            plan_docto  : this.$store.state.seguimiento.seguimiento_plan_docto

     };

      console.log(" parametros " + JSON.stringify(parametros));

      let update = seguimientoEtapa.updateSeguimiento(parametros, this.$store);

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



    cargarSeguimientos(){
      /*
       Este id es el id del incidendte
       lo debemos de buscar en la tabla de idseguimiento

      */
      let id = this.$route.params.id;
      this.incidenteIdPE = id;
      console.log("valor de id en seguimiento " + id);

      let  datos = seguimientoEtapa.cargarDatosSeguimiento(id,this.$store);

      datos.then( response => {

      this.folio = response.data[0]["folio"];
      
      this.incidenteId =response.data[0]["incidenteid"];
      /* *******************************************************/

      this.tipoderespuesta = response.data[0]["tipoderespuesta"];

      this.tipoderespuesta == 'DENUNCIA PENAL' ? this.esDenuncia=true : this.esDenuncia =false;
      
      //si se muestra o no 
      this.tipoderespuesta== 'DENUNCIA PENAL' ? this.verDenuncia_o_investigacion= true 
      : this.tipoderespuesta == 'INVESTIGACION INTERNA' ? this.verDenuncia_o_investigacion= true 
      : this.verDenuncia_o_investigacion= false;
      
      console.log(" tipoderespuesta >> " + this.tipoderespuesta);
      
      console.log(" verDenuncia_o_investigacion >> " + this.verDenuncia_o_investigacion);
      
      /* *******************************************************/
      this.seguimiento = response.data[0];

      seguimientoEtapa.asignarVariablesGLobales( this.seguimiento ,this.$store );

      /******************** */

    

       /******************

       console.log(this.seguimiento.plan_docto);
       console.log(this.seguimiento.planrecuperacion_docto);
       console.log(this.seguimiento.notificacionpfn_docto);
       console.log(this.seguimiento.notificaciondif_docto);
       console.log(this.seguimiento.notificacionautoridad_docto);
       console.log(this.seguimiento.notificaciondenunciante_docto);
       console.log(this.seguimiento.documentos_docto);
       console.log(this.seguimiento.actavaloracion_docto);
      */


       let archivo_plan_docto = apiArchivos.conseguirArchivo(this.seguimiento.plan_docto, this.$store.state);
       let archivo_planrecuperacion_docto = apiArchivos.conseguirArchivo(this.seguimiento.planrecuperacion_docto, this.$store.state);
       let archivo_notificacionpfn_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificacionpfn_docto, this.$store.state);
       let archivo_notificaciondif_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificaciondif_docto, this.$store.state);
       let archivo_notificacionautoridad_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificacionautoridad_docto, this.$store.state);
       let archivo_notificaciondenunciante_docto = apiArchivos.conseguirArchivo(this.seguimiento.notificaciondenunciante_docto, this.$store.state);
       let archivo_documentos_docto = apiArchivos.conseguirArchivo(this.seguimiento.documentos_docto, this.$store.state);
       let archivo_actavaloracion_docto = apiArchivos.conseguirArchivo(this.seguimiento.actavaloracion_docto, this.$store.state);
       



       /* --------------------------------------------------------------- */
       archivo_plan_docto.then(
         response => {
           //console.log("archivo_plan_docto :" + JSON.stringify(response.data));

           this.data_plan_docto = this.checkArray(  response.data[0]);

         }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_planrecuperacion_docto.then(
         response => {
           //console.log("archivo_planrecuperacion_docto :" + JSON.stringify(response.data));
          // this.data_planrecuperacion_docto = response.data[0];
            this.data_planrecuperacion_docto = this.checkArray(   response.data[0] );
         }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_notificacionpfn_docto.then(
         response => {
          // console.log("archivo_planrecuperacion_docto :" + JSON.stringify(response.data));
        // this.data_notificacionpfn_docto = response.data[0];
          this.data_notificacionpfn_docto  =  this.checkArray(  response.data[0] );
         
         }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_notificaciondif_docto.then(
         response => {
          // console.log("archivo_notificaciondif_docto :" + JSON.stringify(response.data));
        //  this.data_notificaciondif_docto =response.data[0];
         this.data_notificaciondif_docto =  this.checkArray(   response.data[0] );
        
        }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_notificacionautoridad_docto.then(
         response => {
         //  console.log("archivo_notificacionautoridad_docto :" + JSON.stringify(response.data));
         //this.data_notificacionautoridad_docto = response.data[0];
            this.data_notificacionautoridad_docto =this.checkArray(   response.data[0] );
         }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_notificaciondenunciante_docto.then(
         response => {
         //  console.log("archivo_notificaciondenunciante_docto :" + JSON.stringify(response.data));
      // this.data_notificaciondenunciante_docto = response.data[0];
         this.data_notificaciondenunciante_docto = this.checkArray(  response.data[0] );
       
       }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_documentos_docto.then(
         response => {
           //console.log("archivo_documentos_docto :" + JSON.stringify(response.data));
     
          // this.data_documento_docto= response.data[0];
             this.data_documento_docto =  this.checkArray(   response.data[0] );
      
      }
       ).catch(
         error=> {
           console.log(" error " + JSON.stringify(error.data));
         }
       );
       /* --------------------------------------------------------------- */
       archivo_actavaloracion_docto.then(
         response => {
          //console.log("archivo_actavaloracion_docto :" + JSON.stringify(response.data));
         
        // this.data_actavaloracion_docto = response.data[0];
            this.data_actavaloracion_docto = this.checkArray(  response.data[0] );
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

