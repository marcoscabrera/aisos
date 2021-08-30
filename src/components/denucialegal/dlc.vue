<template>
  <v-container name="denuncialegal">

    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2>Denuncia Legal</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">


            <BarraDeNavegacion
             activo_ri="true"
             activo_vi="true"
             activo_s="true"
             activo_c="true"
             verInicial       
             verIntegral 
             verSeguimiento 
             verCierre
            
             ></BarraDeNavegacion>
<!-- 


  import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

-->
        </v-col>
    </v-row>
    <!-- pediente la fecha -->
    <FoliosComponente :folio="folio"
    :foliodenuncia ='denuncia.foliodenuncia'
    :date = 'denuncia.fechaCreacion'
    tipofolio="DENUNCIA">
    </FoliosComponente>

  <!--  
          consensoArchivo_id:'',
      consensoArchivo_nombreArchivo :'',
      consensoArchivo_sihayarchivo : false -->
    <v-row>
      <v-col>

      </v-col>
      <v-col>
       <barraDocumentos :files="files">

       </barraDocumentos> 
      </v-col>
    </v-row>
    <br>
    <ConsensoComponente v-if="varDoctos"
          :valorcombo = "denuncia.consenso"  
          :incidenteId ="denuncia.incidenteid"
          :archivoId ="consensoArchivo_id"   
          action_plan="action_consensodocto"   
          :nombreDelArchivo="consensoArchivo_nombreArchivo"
          :sihayarchivo="consensoArchivo_sihayarchivo"
    ></ConsensoComponente> 
    <br>

    <CardInformeAlPatronato v-if="varDoctos" >

    </CardInformeAlPatronato>

    <br>
      <CardInformaOficinaRegional v-if="varDoctos">
      </CardInformaOficinaRegional>
    <br>
      
      <CardInformeAEnteRector v-if="varDoctos">
      </CardInformeAEnteRector>

    <br>

     <SoporteLegalComponente v-if="varDoctos"
       :valorComboAsesorDurante="denuncia.soportedurante"
       :valorComboAsesorAntes="denuncia.soporteantes"
       :valorComboAsesorContacto="denuncia.soportecontacto"
     
     ></SoporteLegalComponente>
    <br >
    <SoporteEmocionalComponente v-if="varDoctos"
       :valorComboAsesorDurante="denuncia.soporteemocionaldurante"
       :valorComboAsesorAntes="denuncia.soporteemocionalantes"
       :valorComboAsesorContacto="denuncia.soporteemocionalcontacto"
    ></SoporteEmocionalComponente>
    <br>

    <MedidasDisciplinariasComponente v-if="varDoctos"
          :valorcombo = "denuncia.medidasd"  
          :incidenteId ="denuncia.incidenteid"
          :archivoId ="medidasArchivo_id"   
          :nombreDelArchivo="medidasArchivo_nombreArchivo"
          :sihayarchivo="medidasArchivo_sihayarchivo"
    ></MedidasDisciplinariasComponente>

    <br>
    <TextoAcercaDeLasMedidas
    :texto="denuncia.medidastexto"></TextoAcercaDeLasMedidas>

    <br>
    <CardDenunciaPresentada v-if="varDoctos">

    </CardDenunciaPresentada>

    <br>   

    <v-alert v-if="verAlerta" :type="this.tipoalerta">
      {{this.mensaje}}
    </v-alert>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          
          color="primary"
          @click="permisoImpresion"
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
       
          block
          @click="regresar_al_dashboard"
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
          @click="guardarDenuncia"
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

import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';
import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';
import eventBus from '@/eventBus.js';
import apiDenuncias from "@/apialdeas/apiDenuncias.js";
import FoliosComponente  from "./componentesDenunciaLegal/FoliosComponente.vue";

//import barraDocumentos  from "@/components/barradocumentos/barraDocumentos.vue";
//import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';
//import apiIncidentes from "@/apialdeas/apiIncidentes.js";

export default {

  components : {
    FoliosComponente,
    barraDocumentos                 : () => import('@/components/barradocumentos/barraDocumentos.vue'),
    BarraDeNavegacion               : () => import('@/components/etapas/BarraDeNavegacion.vue'),
    ConsensoComponente              : () => import('./componentesDenunciaLegal/ConsensoComponente.vue'),
    CardInformeAlPatronato          : () => import('./componentesDenunciaLegal/CardInformeAlPatronato.vue'),
    CardInformaOficinaRegional      : () => import('./componentesDenunciaLegal/CardInformaOficinaRegional.vue'),
    CardInformeAEnteRector          : () => import('./componentesDenunciaLegal/CardInformeAEnteRector.vue'),
    CardDenunciaPresentada          : () => import('./componentesDenunciaLegal/CardDenunciaPresentada.vue'),
    SoporteLegalComponente          : () => import('./componentesDenunciaLegal/SoporteLegalComponente.vue'),
    SoporteEmocionalComponente      : () => import('./componentesDenunciaLegal/SoporteEmocionalComponente.vue'),
    MedidasDisciplinariasComponente : () => import('./componentesDenunciaLegal/MedidasDisciplinariasComponente.vue'),
    TextoAcercaDeLasMedidas         : () => import('./componentesDenunciaLegal/TextoAcercaDeLasMedidas.vue')
},
  data() {
    return {
      overlay                       : false,
      numerosDoctos_a_Cargar        : 0,
      verAlerta                     : false,
      tipoalerta                    : '',
      mensaje                       : '',
      itemsCargos                   : ["SI", "NO", "EN PROCESO"],
      loading                       : false,

      folio                         : '',
      foliodenuncia                 : '',
      denuncia                      : [],

      varDoctos                     : false,

      consensoArchivo_id            : '',
      consensoArchivo_nombreArchivo : '',
      consensoArchivo_sihayarchivo  : false,

      medidasArchivo_id             : '',
      medidasArchivo_nombreArchivo  : '',
      medidasArchivo_sihayarchivo   : false,
      files                         : []

      
       
  
    };
  },

  watch : {

     /*"$store.state.denuncias.denuncialegal_doctosCargados" : function(newValue,oldValue) {
         
         this.mostrandoComponenteFU(newValue,oldValue);

      }*/

  },

  methods: {
    /**********************************************
     * con esta funcion controlamos hasta 
     * cuando dejamos de mostrar el loader
     * de la pantalla. cuando terminen de cargarse
     * los componentes el loader se oculta
     **********************************************/

    mostrandoComponenteFU(newValue,oldValue){
        
       typeof oldValue;

       console.log(" numero de componentes a cargar" + this.numerosDoctos_a_Cargar + " y valor de oldValue = "+ oldValue);
      if (this.numerosDoctos_a_Cargar == 0 ){
       // this.overlay=false;
        return;
      }else {
       if (newValue > this.numerosDoctos_a_Cargar) {

         this.$store.dispatch("action_denuncialegal_doctosCargados",0);
         //return;
         newValue = 0;

       }
       
        console.log("Valor del nv: "        + newValue);
       // console.log("valor del Old value :" + oldValue);
        
        if (newValue >= this.numerosDoctos_a_Cargar){
           this.overlay =false;
          // this.$store.dispatch("action_denuncialegal_doctosCargados",0);
        }else {
           this.overlay =false;
        }
       // >= this.numerosDoctos_a_Cargar ?  : this.overlay= true;

      }

    },// termina  funcion 

          
    /************************************
     * cARGANDO LA DENUNCIA
     ************************************/

    cargarDenuncia(){
      //----------------------------------------------------------------
      // SE OBTIENE DE LA BARRA DE NAVEGACION EL VALOR DEL PARAMETRO
      // denunciaId,  QUE ES PARAMETRO QUE SE MANDA A LA CONSULTA 
      // DE LA API
      //
      //---------------------------------------------------------------

 
      //----------------------------------------------------------------
      //SE INICIALIZA A 0 LA VARIABLE QUE CONTROLA CUANTO COMPONENTES
      // UPLOADFILE4 TIENEN UN DOCUMENTO PARA MOSTRAR-- REVISAR watch
      //---------------------------------------------------------------
      this.$store.dispatch("action_denuncialegal_doctosCargados",0);
      //---------------------------------------------------------------


     let denunciaId = this.$route.params.denunciaId;
       console.log(" denunciaId " + denunciaId);
   
     let denuncia = apiDenuncias.cargar__denuncialegal(denunciaId,this.$store)
      

      denuncia
      .then( response => {


        console.log("--------------------------------");
        console.log(  JSON.stringify( response.data  ));
        console.log("--------------------------------");

        this.folio = response.data[0]["folio"];
        this.denuncia=response.data[0];
        
        this.consensoArchivo_id             = this.denuncia.consensoArchivo.id;
        this.consensoArchivo_nombreArchivo  = this.denuncia.consensoArchivo.nombreOriginal;
        this.consensoArchivo_sihayarchivo   = this.denuncia.consensoArchivo.hayArchivo;

        this.medidasArchivo_id              = this.denuncia.medidasArchivo.id;
        this.medidasArchivo_nombreArchivo   = this.denuncia.medidasArchivo.nombreOriginal;
        this.medidasArchivo_sihayarchivo    = this.denuncia.medidasArchivo.hayArchivo;


        console.log("valor de nombre archivo consensodocto " + this.denuncia.consensoArchivo.nombreOriginal);
        console.log("valor de nombre archivo medidas "       + this.denuncia.medidasArchivo.nombreOriginal);
         
                               
        this.$store.dispatch('action_denuncialegal_consensoArchivo_nombre',this.denuncia.consensoArchivo.nombreOriginal);
        this.$store.dispatch('action_denuncialegal_medidasarchivo_nombre',this.denuncia.medidasArchivo.nombreOriginal);

        //console.log("--------------------------------");
        this.asignarVariables(this.denuncia);
       // console.log("--------------------------------");


      //-------------------------------------------------------------
      // Se cargan los documentos en el componente BARRADEDOCUMENTOS
      // que se tienen que mostrar en la pantalla de Denuncia
      //------------------------------------------------------------

        this.cargarTodosLosDoctos("dl");

      //----------------------------------------------------
      // valores para regresar a esta pagina si se 
      // tiene que regresar despues de estar en impresiones
      //----------------------------------------------------
       let ruta_A_regresar      = '/denuncialegal/' +  this.$route.params.denunciaId;
       console.log("ruta_A_regresar : "            + ruta_A_regresar);
       this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);

      //------------------------------------------------------
      //   forzamosa montar el componente uploadfile4 cuando esta
      //    la variable varDoctos le asignamos valor true
      //    v-if="varDoctos"
      //------------------------------------------------------
  
         this.varDoctos = true;

     //-------------------------------------------------------

       eventBus.$emit('cargarArchivo_con_id');

      ///////////////////////////////////////////
    
        
        this.overlay= false;
     
 
       //

      })
      .catch( error => {
        console.log(error);
        this.overlay= false;
      })
    },// termina la  funcion que cargar la denuncia


    
         /****************************************************************
         * ESTA FUNCION NAVEGA AL RANCHO 
         ****************************************************************/
    
          regresar_al_dashboard() {

                     this.varDoctos = false;
                     this.verAlerta = false;
                
                      this.$router.push({
                      name: "Dashboard"
                    });

              },

         /****************************************************************
         *Esta funcion se encarga de consultar la API para recuperar los 
         documentos que se mostraran el componente Barradedocumentos
         ****************************************************************/
         
  
        async cargarTodosLosDoctos(categoria){
          
          typeof categoria;

          let promesa = apidoctosapoyo.cargar__todos__los__doctosapoyo_por_categoria(categoria,this.$store);

           promesa
           .then( response => { 

                 this.files  = response.data;
          })
         .catch( error => { console.log(JSON.stringify(error.data))});

         
         }, //termina funcion

    

    

  asignarVariables(datos){

  console.log(" datos en asiganar Variables  : ");

  console.log( datos );

  this.$store.dispatch('action_id'                          , datos.id);
  this.$store.dispatch('action_incidenteid'                 , datos.incidenteid);
  this.$store.dispatch('action_foliodenuncia'               , datos.foliodenuncia);
  this.$store.dispatch('action_consenso'                    , datos.consenso);
  this.$store.dispatch('action_consensodocto'               , datos.consensodocto);
  this.$store.dispatch('action_soportecontacto'             , datos.soportecontacto);
  this.$store.dispatch('action_soporteantes'                , datos.soporteantes);
  this.$store.dispatch('action_soportedurante'              , datos.soportedurante);
  this.$store.dispatch('action_soporteemocionalcontacto'    , datos.soporteemocionalcontacto);
  this.$store.dispatch('action_soporteemocionalantes'       , datos.soporteemocionalantes);
  this.$store.dispatch('action_soporteemocionaldurante'     , datos.soporteemocionaldurante);
  this.$store.dispatch('action_medidasd'                    , datos.medidasd);
  this.$store.dispatch('action_medidasd_docto'              , datos.medidasd_docto);
  this.$store.dispatch('action_medidastexto'                , datos.medidastexto);
  this.$store.dispatch('action_fechaCreacion'               , datos.fechaCreacion);
  this.$store.dispatch('action_fechaUpdate'                 , datos.fechaUpdate);
  this.$store.dispatch('action_estado'                      , datos.estado);

   

 /* Agregados en cambios de flujo
    action_denuncialegal_informapatronato 
    action_denuncialegal_docto_informapatronato 
    action_denuncialegal_informaoficinaregional 
    action_denuncialegal_docto_informaoficinaregional
    action_denuncialegal_informaenterector 
    action_denuncialegal_docto_informaenterector 
    action_denuncialegal_docto_soportelegal 
    action_denuncialegal_docto_soporteemocional
    action_denuncialegal_denunciapresentada
    action_denuncialegal_docto_denunciapresentada
  */

console.log("valor denuncia");

this.$store.dispatch('action_denuncialegal_informapatronato'             , datos.informapatronato);
this.$store.dispatch('action_denuncialegal_informaoficinaregional'       , datos.informaoficinaregional);
this.$store.dispatch('action_denuncialegal_denunciapresentada'           , datos.denunciapresentada);
this.$store.dispatch('action_denuncialegal_informaenterector'            , datos.informaenterector);

this.$store.dispatch('action_denuncialegal_docto_soportelegal'           , datos.docto_soportelegal);
this.$store.dispatch('action_denuncialegal_docto_soporteemocional'       , datos.docto_soporteemocional);
this.$store.dispatch('action_denuncialegal_docto_informapatronato'       , datos.docto_informapatronato);
this.$store.dispatch('action_denuncialegal_docto_informaenterector'      , datos.docto_informaenterector);
this.$store.dispatch('action_denuncialegal_docto_informaoficinaregional' , datos.docto_informaoficinaregional);
this.$store.dispatch('action_denuncialegal_docto_denunciapresentada'     , datos.docto_denunciapresentada);


let medidasd_docto                = this.tieneUnValor(    datos.medidasd_docto               );
let consensodocto                 = this.tieneUnValor(    datos.consensodocto                );
let docto_soportelegal            = this.tieneUnValor(    datos.docto_soportelegal           );
let docto_soporteemocional        = this.tieneUnValor(    datos.docto_soporteemocional       );
let docto_informapatronato        = this.tieneUnValor(    datos.docto_informapatronato       );
let docto_informaenterector       = this.tieneUnValor(    datos.docto_informaenterector      );
let docto_informaoficinaregional  = this.tieneUnValor(    datos.docto_informaoficinaregional );
let docto_denunciapresentada      = this.tieneUnValor(    datos.docto_denunciapresentada     );


this.numerosDoctos_a_Cargar = 0;

console.table([ 
               medidasd_docto ,
               consensodocto,
               docto_soportelegal,
               docto_soporteemocional, 
               docto_informapatronato,
               docto_informaenterector,
               docto_informaoficinaregional,
               docto_denunciapresentada
               ]);

let suma  =    medidasd_docto               + 
               consensodocto                + 
               docto_soportelegal           + 
               docto_soporteemocional       + 
               docto_informapatronato       + 
               docto_informaenterector      + 
               docto_informaoficinaregional +  
               docto_denunciapresentada ;

this.numerosDoctos_a_Cargar = suma;
console.log("valor de this.numerosDoctos_a_Cargar " + this.numerosDoctos_a_Cargar);

if ( this.numeroDoctos_a_Cargar == 0){
  this.overlay= false;
}

}, // termina funcion asignarVariables




/********************************************************************
  DETERMINA SI ES EL VALOR REGRESA UN VALOr NUMERICO O NO Y 
  REGRESARA 1 EN CASO DE SER NUMERICO Ó 0 EN CASO DE SER NAN
 ********************************************************************/
tieneUnValor(  valor ){



  let v =  parseInt( valor.replace( '"','') );

  if (isNaN(v) || v == 0 ) {
     return 0; }
     else {
       return 1;
       }

}, // termina funcion


/**************************************************

****************************************************/

    guardarDenuncia(){

       this.verAlerta = false ;

       this.loading = true;

       let denunciaObj = this.$store.state.denuncias;

       let parametros = {

          id : denunciaObj.denuncialegal_id,

          incidenteid: denunciaObj.denuncialegal_incidenteid,

          foliodenuncia: denunciaObj.denuncialegal_foliodenuncia,

          consenso: denunciaObj.denuncialegal_consenso,

          consensodocto: denunciaObj.denuncialegal_consensodocto,

          soportecontacto: denunciaObj.denuncialegal_soportecontacto,

          soporteantes: denunciaObj.denuncialegal_soporteantes,

          soportedurante: denunciaObj.denuncialegal_soportedurante,

          soporteemocionalcontacto: denunciaObj.denuncialegal_soporteemocionalcontacto,

          soporteemocionalantes: denunciaObj.denuncialegal_soporteemocionalantes,

          soporteemocionaldurante: denunciaObj.denuncialegal_soporteemocionaldurante,

          medidasd: denunciaObj.denuncialegal_medidasd,

          medidasd_docto: denunciaObj.denuncialegal_medidasd_docto,

          medidastexto: denunciaObj.denuncialegal_medidastexto,

          fechaCreacion: denunciaObj.denuncialegal_fechaCreacion,

          fechaUpdate: denunciaObj.denuncialegal_fechaUpdate,

          estado: denunciaObj.denuncialegal_estado,

          informapatronato: denunciaObj.denuncialegal_informapatronato,

          docto_informapatronato:denunciaObj.denuncialegal_docto_informapatronato,

          informaoficinaregional:denunciaObj.denuncialegal_informaoficinaregional,

          docto_informaoficinaregional: denunciaObj.denuncialegal_docto_informaoficinaregional,

          informaenterector: denunciaObj.denuncialegal_informaenterector,


          docto_informaenterector:denunciaObj.denuncialegal_docto_informaenterector,

          docto_soportelegal: denunciaObj.denuncialegal_docto_soportelegal,

          docto_soporteemocional:denunciaObj.denuncialegal_docto_soporteemocional,

          denunciapresentada: denunciaObj.denuncialegal_denunciapresentada,

          docto_denunciapresentada:denunciaObj.denuncialegal_docto_denunciapresentada
                  

       };
       
       let guardar  = apiDenuncias.update__denuncialegal(parametros, this.$store);

       guardar.then(

         response=>{

           console.log(JSON.stringify(response.data));
           this.loading = false;
           
           console.log(response.data.estado);

           

           if (response.data.estado=='guardado'){

                  this.asignarVariables(response.data.denuncia);

                   this.verAlerta = true ;
                
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

                 // let tarea_realizada = "Se ha terminado de llenar";
                  
                  this.$store.dispatch("action_notificacion_incidenteid"      , this.$store.state.denuncias.denuncialegal_incidenteid);
                  this.$store.dispatch("action_notificacion_respuesta"        , "denuncia");
                  let respuesta = "Se ha completado el llenado de la Denuncia del folio  #" +  this.folio;
                  this.$store.dispatch("action_notificacion_texto_respuesta"  , respuesta);                 
                 
                   console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
                   if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){

                   envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,respuesta);
                   
                   }

                  this.$router.push({ name: "NotificacionRespuesta"});
                   



           }//termina estado cerrado

         }
       ).catch(
         error=> {
           console.log(error);
             this.loading = false;
         }
       );
       
    }, // termina la funcion guardar






     permisoImpresion(){


           
      console.log(" Permiso IMPRESIONDENUNCIA  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDENUNCIA)      ;

     if ( this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDENUNCIA=='SI'){
        
         //-----------------------------------------------
         // para evitar leals de memoria
         //----------------------------------------------
         this.varDoctos = false;
         this.verAlerta = false;
         //----------------------------------------------

         this.$router.push({
          name: "ReporteImpresionDenuncia"
        });


     }else {
       /* En caso de que no se tenga permiso */

      //realizamos la solicitud del permiso//
       let idRecuperado = this.$route.params.id;
      

       this.$store.dispatch('actions_permisosimpresion_incidenteid',this.$route.params.id);
       this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
       this.$store.dispatch('actions_permisosimpresion_etapa', "Denuncia");
     
       //solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
       //-------------------------------------------------------------

       
        // redireccionamos al usurio a la pantalla de notificacion de permiso 
        // de impresion.
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });


    
    }

    }, // termina funcion permiso de impresion

  }, 



  mounted() {
  
       //----------------------------------------------------------------
      //SE INICIALIZA A 0 LA VARIABLE QUE CONTROLA CUANTO COMPONENTES
      // UPLOADFILE4 TIENEN UN DOCUMENTO PARA MOSTRAR-- REVISAR watch
      //---------------------------------------------------------------
      this.$store.dispatch("action_denuncialegal_doctosCargados",0);
      //---------------------------------------------------------------

      this.overlay = true;
  
      this.cargarDenuncia();

      
   /* this.$nextTick( function(){
       this.overlay = true;
  
      this.cargarDenuncia();

    
    }); */
  },
};


</script>
<style>

.paraCardTitulo {
  border: 1px;
  border-color :black;
  padding-left: 15px;
  color: rgba(255, 0, 0, 0.6) !important;
  font-size: 1.05rem;
  text-transform: none
}
</style>