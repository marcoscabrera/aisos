<template>
  <v-container>
   <!-- <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2>Valoración Integral</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">


            <BarraDeNavegacion
             activo_ri="1"
             activo_vi="0"
             activo_s="1"
             activo_c="1"

             verInicial      
             verSeguimiento
             verCierre
             verRespuesta 
             ></BarraDeNavegacion>

        </v-col>
    </v-row>-->

     <ComponenteBarraDeNavegacionGral v-if="verBarraGral"
     titulo="Valoración Integral"
     :opciones = "opcionesBarra"
     >
     </ComponenteBarraDeNavegacionGral>
     <br>
     <ComponenteDocumentosAyuda 
             class="elevado"
            :files = "archivos"
            categoria = "vi">

     </ComponenteDocumentosAyuda>
     <ComponenteAsistenteNavegacion v-if="this.$store.state.uivars.uivars_verAsistenteNavegacion" :datosIncidente="datosNavegacion" >

     </ComponenteAsistenteNavegacion>

 <!--
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field
          id="labelFolio"
          class="cssnuevo"
            :label="generarFolio"
            filled
            disabled
            background-color="#87CEFA"
            
          >
            
          </v-text-field>
      </v-col>

      <v-col cols="12" xs="12" md="6"> -->
        <!-- mustra los documentos como ayuda de esta seccion-->
       <!-- <barraDocumentosVue
        :files="archivos">
        </barraDocumentosVue>

      </v-col>
    </v-row> 
    <br> -->
 
<!--====================================================== -->
       <v-card width="100%" >
          <v-card-title> </v-card-title>
          <v-card-text>
            <v-row>
                <textareaValoracion :texto="textovi"></textareaValoracion>
             </v-row>
          </v-card-text>
        </v-card>

    <br >
    <!-- =============================================== -->
         <v-row v-if="mostrarAlerta">
       <v-col>
         <v-alert prominent type="warning"   >

           <v-row align="center">
              <v-col class="grow">
               El texto en este campo debe de ser distinto a "En Proceso de Valoracion"
             </v-col>
              <v-col class="shrink">
                <v-btn color="green" @click.prevent.stop="ocultarMsg">Enterado</v-btn>
              </v-col>
      </v-row>
             </v-alert>
       </v-col>
     </v-row>
        <!-- =============================================== -->
  <v-card width="100%" v-if="ocultarConfirmacion">
    <v-card-title> ¿SE CONFIRMA QUE EL EVENTO ES UN INCIDENTE ? </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="4" md="4">
          <v-btn color="green" dark dense block
          @click="confirmacionIclick('NO ES UN INCIDENTE')">
            No es un incidente     
          </v-btn>    
        
        </v-col>
        <v-col cols="12" xs="12" sm="4" md="4">

           <v-btn color="red" dark dense block
           @click="confirmacionIclick('SI ES UN INCIDENTE')">
           Si es un incidente     
          </v-btn>  
        </v-col>

        <v-col cols="12" xs="12" sm="4" md="4">

           <v-btn color="blue" dark dense block :loading ="loadinginvestigacion"
           @click="iniciaInvestigacionInterna">
           Se requiere Investigacion    
          </v-btn>  
        </v-col>
        
        <v-alert v-if="this.$store.state.uivars.uivars_error_cardConfirmacion" type="error">
           Debe de confirmar si es un incidente o no .
        </v-alert>
      </v-row>
    </v-card-text>
  </v-card>
  <br>
  <!--================================================= -->

    <!--<v-row>
      <cardConfirmacion :confirmacion="confirmaincidente"></cardConfirmacion>
    </v-row> -->
    <!-- =============================================== -->


    <br>

 
      <cardTipologia :tipologia="tipologiadelincidente" v-if="this.$store.state.uivars.uivar_esincidente"></cardTipologia>

    <br >
    <!-- =============================================== -->
  
      <cardNivelIncidente :nivel="niveldelincidente" v-if="this.$store.state.uivars.uivar_esincidente"></cardNivelIncidente>
    
    <br>
    <!-- =============================================== -->

   
      <cardTipoCaso :tipo="tipodecaso" v-if="this.$store.state.uivars.uivar_esincidente"></cardTipoCaso>
    
    <br >
    <!-- =============================================== -->
   
    <!-- =============================================== -->


  
 
    <!-- =============================================== -->
 
      <cardTipoRespuesta :respuesta="tipoderespuesta" v-if="this.$store.state.uivars.uivar_esincidente"></cardTipoRespuesta>
    
    <br >
  <!-- =============================================== -->

   
      <cardMedidasIntegrales v-if="this.$store.state.uivars.uivar_esincidente"
       :archivoId           ="planycronograma"
       :archivo             ="planycronograma" 
       :sihayarchivo        ="hayPlan"
       :incidenteId         ="incidenteid"
       :objetoDatosArchivo  ="datosDelArchivo"
       :nombreDelArchivo    ="nombreDelArchivo">
       </cardMedidasIntegrales>
       <br>
   

    <v-row v-if="mostrarLaBotonera">
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
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
      <v-col v-if="this.verBotonera" cols="12" xs="12" sm="12" md="4">
        <v-btn v-if="this.estadoDeValoracion == 'cerrado'? false : true"
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="actualizarValoracion"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Guardar
        </v-btn>

       <v-btn v-if="this.verBotoneraconcierre"
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="actualizarValoracion"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Modificar
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
//import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

//import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import apiValoracion from "@/apialdeas/apiValoracion.js";
import apiArchivos from "@/apialdeas/apiArchivos.js";
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";
import apiPermisosimpresion from "@/apialdeas/apiPermisosimpresion.js";
import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';
import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';

//import textareaValoracion from "@/components/etapasComponentesValoracion/textareaValoracion.vue";
//import cardTipologia from "@/components/etapasComponentesValoracion/cardTipologia.vue";
//import cardNivelIncidente from "@/components/etapasComponentesValoracion/cardNivelIncidente.vue";
//import cardConfirmacion from "../etapasComponentesValoracion/cardConfirmacion.vue";
//import cardTipoCaso from "../etapasComponentesValoracion/cardTipoCaso.vue";
//import cardTipoRespuesta from "../etapasComponentesValoracion/cardTipoRespuesta.vue";
//import cardMedidasIntegrales from "../etapasComponentesValoracion/cardMedidasIntegrales.vue";
//import ComponenteConfirmacionIncidente from   "../etapasComponentesValoracion/ComponenteConfirmacionIncidente.vue";
//import medidasCrud from "@/components/seguimiento/medidasCrud.vue";
//import validacionArchivo from  "@/components/etapas/validaciones/validacionArchivos.js";
//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';
// envia los correos de notificacion


export default {
  components: {
   // barraDocumentosVue              :()  => import("../barradocumentos/barraDocumentos.vue"),
    cardMedidasIntegrales           :()  => import('../etapasComponentesValoracion/cardMedidasIntegrales.vue'),
   // BarraDeNavegacion               :()  => import("@/components/etapas/BarraDeNavegacion.vue"),
    textareaValoracion              :()  => import("@/components/etapasComponentesValoracion/textareaValoracion.vue"),
    cardTipologia                   :()  => import("@/components/etapasComponentesValoracion/cardTipologia.vue"),
    cardNivelIncidente              :()  => import("@/components/etapasComponentesValoracion/cardNivelIncidente.vue"),
    cardTipoCaso                    :()  => import("../etapasComponentesValoracion/cardTipoCaso.vue"),
    cardTipoRespuesta               :()  => import("../etapasComponentesValoracion/cardTipoRespuesta.vue"),
    ComponenteAsistenteNavegacion   : ()  => import("@/components/barranavegacion/ComponenteAsistenteNavegacion.vue"),
    ComponenteBarraDeNavegacionGral : ()  => import("@/components/etapas/ComponenteBarraDeNavegacionGral.vue"),
    ComponenteDocumentosAyuda       : () => import("../barradocumentos/ComponenteDocumentosAyuda.vue"),
   // ComponenteConfirmacionIncidente  //cardConfirmacion,
  },


  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  methods: {

        ocultarMsg(){
          this.mostrarAlerta= false;
        },

        //Esta funcion se encarga de consultar la API para recuperar los documentos que 
        // se mostraran el componente Barradedocumentos
  
        async cargarTodosLosDoctos(categoria){
          
        

          let promesa = apidoctosapoyo.cargar__todos__los__doctosapoyo_por_categoria(categoria,this.$store);

           promesa
          .then( response => { 

                 this.archivos  = response.data;
          })
         .catch( error => { console.log(JSON.stringify(error.data))});
      },
      /*-----------------------------------------------------------------*/

    guardar_noesunincidente(){
       
        var parmetros = {
      
        id: this.id,
        incidenteid: this.incidenteid,
        textovi: this.$store.state.valoracion.etapavaloracion_textovi,
        tipologiadelincidente:'0',
        niveldelincidente: '0',
        tipodecaso: '0',
        confirmaincidente: 'NO ES UN INCIDENTE',
        tipoderespuesta: '0',
        medidasintegrales:  '0',
        estado : ''
      };

      console.log(parmetros);

      let update = apiValoracion.updateValoracion(parmetros, this.$store);

      update
        .then((response) => {
         // console.log(JSON.stringify(response.data));
         // let ruta =`/notificaciondos/${this.incidenteid}/${this.folio}/${etapavaloracion_confirmaincidente}`;
         console.log(JSON.stringify(response.data));
         // this.$router.push(ruta);
         
          this.$router.push({
          name: "Notificaciondos",
          params: { incidenteId:  this.incidenteid,
           folio:this.folio,
           esincidente :this.$store.state.valoracion.etapavaloracion_confirmaincidente },
        });

        })
        .catch((error) => {
          console.log(error.data);
        });



        //////////////////////////////////////////////

    },
    proceso_seguir_Porque_Es_un_incidente(){
     

       this.ocultarConfirmacion= false ;
       this.mostrarLaBotonera = true ;

       this.$store.dispatch("actions_uivars_esincidente",true);


    },



    confirmacionIclick(valor){
     
      
      const {  
        etapavaloracion_textovi 
      } = this.$store.state.valoracion;
       
       if (etapavaloracion_textovi == 'En Proceso de Valoracion') {
         
         if (valor == 'INVESTIGACION'){
              this.mostrarAlerta = true;
         }else {
             this.mostrarAlerta = true;
         }

       }else {

       let r =  validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(etapavaloracion_textovi,20);
       this.$store.dispatch('actions_uivars_error_textareaValoracion',r);
      
        if( r == true) return;
        
        /////////////////////////////////////////////
        
             
     valor == 'NO ES UN INCIDENTE' ? this.guardar_noesunincidente(): 
     valor == 'SI ES UN INCIDENTE' ? this.proceso_seguir_Porque_Es_un_incidente(): 
     this.iniciaInvestigacionInterna();

     }
    } ,

/*
AQUI INICIA EL PROCESO PARA UNA INVESTIGACION INTERNA
*/
  iniciaInvestigacionInterna() {
    
    this.loadinginvestigacion =true;
     console.log ("iuniciando valoracion interna ");
     this.ejecutar_crearInvestigacion();


  },
  /* */

   validarCaptura(valor){
      
      console.log("valor en validarCaptura : " + valor);
      let suma=0 ;
      valor== false ? suma=0 : suma=1;
      console.log("suma en validarCaptura : " + suma);

      this.errores = this.errores + suma;


    },
    validacionGeneral(){

      this.errores=0;

      console.log("===================");
       const {  
        etapavaloracion_textovi, 
        //etapavaloracion_confirmaincidente,
        etapavaloracion_tipologiadelincidente, 
        etapavaloracion_niveldelincidente,
        etapavaloracion_tipodecaso,
        etapavaloracion_tipoderespuesta,
       /// etapavaloracion_medidasintegrales
      } = this.$store.state.valoracion;


       let r =  validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(etapavaloracion_textovi,20);
       this.$store.dispatch('actions_uivars_error_textareaValoracion',r);
       this.validarCaptura(r);

       /* r =  validacionReporteInicial.existeInformacionParaCapturar_y_no_es_esta(etapavaloracion_confirmaincidente,"En Proceso de Valoracion");
       this.$store.dispatch('actions_uivars_error_cardConfirmacion',r);
       this.validarCaptura(r);*/

        //console.log(" valor de etapavaloracion_tipologiadelincidente " + etapavaloracion_tipologiadelincidente);

       r =  validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(etapavaloracion_tipologiadelincidente,5);
       this.$store.dispatch('action_uivars_error_cardTipologia',r);
       this.validarCaptura(r);  
    
      //  console.log(" valor de etapavaloracion_tipologiadelincidente " + etapavaloracion_niveldelincidente);

       r =  validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(etapavaloracion_niveldelincidente,5);
       this.$store.dispatch('actions_uivars_error_cardNivelIncidente',r);
       this.validarCaptura(r);  


      //  console.log(" valor de etapavaloracion_tipodecaso " + etapavaloracion_tipodecaso);
       
       r =  validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(etapavaloracion_tipodecaso,5);
       this.$store.dispatch('actions_uivars_error_cardTipoCaso',r);
       this.validarCaptura(r);  
    
//console.log(" valor de etapavaloracion_tipoderespuesta " + etapavaloracion_tipoderespuesta);

       r =  validacionReporteInicial.existeInformacionParaCapturar_y_no_es_esta(etapavaloracion_tipoderespuesta,"En Proceso de Valoracion");
       this.$store.dispatch('actions_uivars_error_cardTipoRespuesta',r);
       this.validarCaptura(r);  

       //console.log(" valor de etapavaloracion_medidasintegrales " + etapavaloracion_medidasintegrales);

     /*  r =  validacionReporteInicial.existeInformacionParaCapturar_y_no_es_cero(etapavaloracion_medidasintegrales);
       this.$store.dispatch('actions_uivars_error_cardMedidasIntegrales',r);
       this.validarCaptura(r);  
                                                                 
       validacionArchivo.valida_si_hay_un_valor_distinto_de_cero(etapavaloracion_medidasintegrales,this.$store);
     */
      return this.errores;

    },
    setearValores_para_impresion(){

      console.log("xx");
    },
    /********************************************************
     * Sustituye a la funcion solicitudImpresion2 y 21
     * */ 
    solicitudImpresion(){


   
     console.log(" Permiso IMPRESIONVALORACIONINICIAL  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONVALORACIONINTEGRAL)             
     
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONVALORACIONINTEGRAL=='SI'){

       //NOTA:
       /*
        AQUI VA EL CODIGO PARA REALIZAR LA IMPRESION .
        por el momento visualizamos en la pantalla.
         */


        //codigo actualizado 8 de mayo
        /*
        
        */
                   let parametros  = { incidenteid:   this.$route.params.id ,etapa:'Valoracion Integral', tipo : 'sin autorizacion' };

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
                       
                        let ruta_A_regresar  = '/valoracionintegral/' + this.$route.params.id;
                        console.log("ruta_A_regresar : " + ruta_A_regresar);
                        this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
                         
                        /////////////////////////////////////////////
        


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
       this.$store.dispatch('actions_permisosimpresion_etapa', "Valoracion Integral");
             
      //-------------------------------------
       //redireccionamos a pantalla
      this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: this.$route.params.id },
        });


     }//termina if del pedido
    },



    /******************************************** */

    solicitudImpresion21(){


      // 
          console.log(" Permiso IMPRESIONVALORACIONINTEGRAL  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONVALORACIONINTEGRAL)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONVALORACIONINTEGRAL=='SI'){

       //NOTA:
       /*
        AQUI VA EL CODIGO PARA REALIZAR LA IMPRESION .
       
       */
        
        //

        ///////////////////////////////////////
        // seteamos los valores a iutlizar 
        ////////////////////////////////////////
        this.setearValores_para_impresion();
        ////////////////////////////////////
   this.$router.push({
          name: "ReporteImpresionValoracion"
        });

     }else {
       /* En caso de que no se tenga permiso */

      //realizamos la solicitud del permiso//

       this.$store.dispatch('actions_permisosimpresion_incidenteid',this.$route.params.id);
       this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
       this.$store.dispatch('actions_permisosimpresion_etapa', "Valoracion Integral");
     
       let idRecuperado = this.$route.params.id;
     
       //Redireccionamos al usuario hacia la pantalla de notificacion
       // de solicitud de permiso.
        
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });
        //-------------------------------------------------------------


     }//termina if del pedido
    },

    solicitudImpresion2(){
      //este fue el primero

      let idRecuperado = this.$route.params.id;
 
      this.$router.push({

          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });
    },
    mostrarbotondp() {
      if (this.verBotonDP == true) {
        this.verBotonDP = false;
        this.seleccionDP = false;
        this.seleccionInv = false;
        this.verBotonInvI = false;
      } else {
        console.log("mostrarBoton denuncia penal");
        this.verBotonDP = true;
        this.seleccionInv = false;
        this.verBotonInvI = false;
        this.seleccionDP = true;
      }
    },
    mostrarbotonInvI() {
      if (this.verBotonInv == true) {
        this.verBotonDP = false;
        this.seleccionDP = false;
        this.verBotonInvI = false;
        this.seleccionInv = false;
      } else {
        console.log("mostrarBoton investigacion interna");
        this.verBotonDP = false;
        this.seleccionDP = false;
        this.verBotonInvI = true;
        this.seleccionInv = true;
      }
    },
    irADenuncia() {
      this.$router.push("/denuncialegal");
    },
    irAInvestigacion() {
      this.$router.push("/investigacioninterna");
    },
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },
    
    permisodemodificacion(){
        
     let valor = this.$store.state.usuarios.usuarios_usuariologueado_rol.MODIFICACIONREAPERTURAVALORACIONINICIAL;
       console.log(" verificando permiso de modificacion con estado cerrado : valor " + valor);
      
     valor == "SI" ? this.verBotoneraconcierre = true : this.verBotoneraconcierre = false  ;
    },

   async cargarValoracionIntegral() {

      this.$store.dispatch("action_medidasintegrales_docto",0);


      //-----------------------------------------
      // carga todos los documentos de ayuda
      // dentro del componente Barradedocumentos 
      //-----------------------------------------
      this.cargarTodosLosDoctos("v integral");
      //-----------------------------------------



      let idx = this.$route.params.id;
      console.log("valor de incidenteid " + idx);
      let res = apiValoracion.recuperarUnaValoracion(idx, this.$store);
      this.incidenteid = idx;

    
      res
        .then((response) => {

         this.$store.dispatch("action_medidasintegrales",response.data[0]["medidasintegrales"])


          console.log("Datos de la valoracionIntegral ");
          console.log(JSON.stringify(response.data));

          this.folio = response.data[0]["folio"];
          console.log(">>>>>>>valor del folio:" + this.folio);
           this.$store.dispatch('action_folio', this.folio);


          this.estadoDeValoracion = response.data[0]["estado"];
          console.log("valor de id : ");

          console.log(response.data[0]["id"]);
          this.id = response.data[0]["id"];

          this.$store.dispatch("setear_Incidente", this.id);

          this.textovi = response.data[0]["textovi"];
          this.$store.dispatch('action_textovi',this.textovi);

          this.tipologiadelincidente =
            response.data[0]["tipologiadelincidente"];
        this.$store.dispatch('action_tipologiadelincidente', this.tipologiadelincidente
);


         this.niveldelincidente = response.data[0]["niveldelincidente"];
         this.$store.dispatch('action_niveldelincidente',this.niveldelincidente);

         this.tipodecaso = response.data[0]["tipodecaso"];
         this.$store.dispatch('action_tipodecaso',this.niveldelincidente);


          this.confirmaincidente = response.data[0]["confirmaincidente"];
          this.$store.dispatch('action_confirmaincidente',this.confirmaincidente);   
          
          //////////////////////////////////////////////////////////////////////
          // seteamos los valores para mostrar en la barra de navegacion nueva
          //////////////////////////////////////////////////////////////////////
                 this.opcionesBarra = {

               'verFolio'              : true , 
               'verFolioRespuesta'     : false ,  
               'verFecha'              : true , 
               'verFechaUpdate'        : true ,  
               'folio'                 : this.folio, 
               'folioRespuesta'        : '' ,     
               'fecha'                 : response.data[0]["fechacreacion"] , 
               'fechaUpdate'           : response.data[0]["fechaupdate"],   
               'folioRespuesta_texto'  : ''   

              };

              this.verBarraGral= true;
        
          
         this.confirmaincidente == "SI ES UN INCIDENTE" ?
         this.verBotonera =true : this.confirmaincidente == "En Proceso de Valoracion"
          ? this.verBotonera = true: this.verBotonera = false;

          //////////////////////////////////////////////////////////////////
          // si el inicedente no ha sido confirmado segiuomos mostradno
          // la botonera de confirmacion
          //////////////////////////////////////////////////////////////////
          
          let estado = response.data[0]["estado"];

          console.log(" ========== estado  > " + estado );

          if (estado == "cerrado"){
            this.ocultarConfirmacion= false;
            this.permisodemodificacion();
          }
          

          
          this.confirmaincidente == 'En Proceso de Valoracion' ?
          this.ocultarConfirmacion == true : this.ocultarConfirmacion=false;

          this.confirmaincidente == 'En Proceso de Valoracion' ?
          this.mostrarLaBotonera == false : this.mostrarLaBotonera=true;

          
          //////////////////////////////////////////////////////////////////////////



        // this.$store.dispatch("actions_uivars_esincidente",false) ;  

         this.confirmaincidente == "SI ES UN INCIDENTE" ?
         this.$store.dispatch("actions_uivars_esincidente",true) :
         this.$store.dispatch("actions_uivars_esincidente",false) ;

    

          this.tipoderespuesta = response.data[0]["tipoderespuesta"];
          this.$store.dispatch('action_tipoderespuesta',this.tipoderespuesta);   

          
          /*-------------*/
          let idarchivo = '';
          idarchivo = response.data[0]["medidasintegrales"];
          this.$store.dispatch('action_medidasintegrales',idarchivo);   

          //console.log("valor de planycronograma : " +  this.planycronograma  );
           //this.planycronograma.length>3 ?  this.hayPlan   = true :false;
          // this.plan =true;
          console.log("typeof idarchivo");
            console.log(typeof idarchivo);
          idarchivo == '0'? this.planycronograma = '0':  this.descargarDatosDelArchivo(idarchivo, this.$store.state);

          this.overlay = false;

        })
        .catch((error) => {
          console.log(JSON.stringify(error.data));
        });
    },
     
    async descargarDatosDelArchivo(id, state){

    //  console.log(" dentro de descargarDatosDelArchivo => id = " + id);
          
     let archivo =   apiArchivos.conseguirArchivo(id,state);

     archivo.then( response => {
          
        //  console.log(JSON.stringify(response.data));
          this.datosDelArchivo = response.data;
          this.planycronograma = id;
          this.nombreDelArchivo = JSON.stringify(response.data[0]['nombreOriginal']);

          // nombre del archivo original para impresion
          this.$store.dispatch('action_medidasintegrales_docto', this.nombreDelArchivo);
          console.log(" nombreOriginal :" + this.nombreDelArchivo);
          this.hayPlan =true;

     })
     .catch( error => {
           
           console.log("valro de error : " + error)

     });

    },

    ejecutar_b(){

        console.log(".");

    },


    /****************************************** */

    ejecutar_crearInvestigacion() {

       const {
     
        etapavaloracion_textovi
       

      } = this.$store.state.valoracion;
   
        var parmetros = {
        //'fechacreacion'         : $datos['fechacreacion'],
        // 'fechaupdate'           : $datos['fechaupdate'],
        id: this.id,
        incidenteid: this.incidenteid,
        textovi: etapavaloracion_textovi,
        confirmaincidente :"investigacion",
        accion:"crearinvestigacion"

      };

      
        let update = apiValoracion.updateValoracion(parmetros, this.$store);

        update.then(
          response => {

              console.log(response);

              
 
              this.loadinginvestigacion=false;
              /*
               
                'msg'       => 'ok',
                'incidente' => 'investigacion',
              
              */

              if (response.data.msg== 'ok'){

                this.$store.dispatch("setear_Incidente",this.incidenteid);

                this.$router.push({
                  name: "InvestigacionInterna",
                  params: { incidenteId: this.incidenteid },
                });

              }
          }
        ).catch(
          error => {

              console.log(error.data);

          }
        );




    },
    /*******************************************/
    ejecutar_actualizaValoracion(){


      this.validacionGeneral();

    //  console.log("<<<<< valor de this.errores en ejecutat_actualizavaloracon : >>>> " + this.errores)
      console.log("valor de this.errores en ejecutar_actualizaValoracion " + this.errores);

      if (this.errores>0) return;

       const {
       // etapavaloracion_incidenteid,
       // etapavaloracion_fechacreacion,
       // etapavaloracion_fechaupdate,
        etapavaloracion_textovi,
        etapavaloracion_tipologiadelincidente,
        etapavaloracion_niveldelincidente,
        etapavaloracion_tipodecaso,
        etapavaloracion_confirmaincidente,
        etapavaloracion_tipoderespuesta,
        etapavaloracion_medidasintegrales,
        //etapavaloracion_medidasintegrales_docto
      } = this.$store.state.valoracion;

      var parmetros = {
        //'fechacreacion'         : $datos['fechacreacion'],
        // 'fechaupdate'           : $datos['fechaupdate'],
        id: this.id,
        incidenteid: this.incidenteid,
        textovi: etapavaloracion_textovi,
        tipologiadelincidente:etapavaloracion_tipologiadelincidente,
        niveldelincidente: etapavaloracion_niveldelincidente,
        tipodecaso: etapavaloracion_tipodecaso,
        confirmaincidente: "SI ES UN INCIDENTE",
        tipoderespuesta: etapavaloracion_tipoderespuesta,
        medidasintegrales:  etapavaloracion_medidasintegrales,
       // medidasintegrales_docto : etapavaloracion_medidasintegrales_docto,
        estado : 'cerrado',
        accion:"respuestanormal"
      };

      console.log(parmetros);

      let update = apiValoracion.updateValoracion(parmetros, this.$store);

      update
        .then((response) => {
         // console.log(JSON.stringify(response.data));
         // let ruta =`/notificaciondos/${this.incidenteid}/${this.folio}/${etapavaloracion_confirmaincidente}`;
         typeof response;
         // this.$router.push(ruta);
          
          /*******************************************************************
           * Enviamos los correos para notificar a los usuarios que tienen 
           * este permiso activo
           ****************************************************************/
         
         let correosRecibidos = response.data["correos"];
         console.log("Variable de correos");
         console.log(correosRecibidos);
         let tarea_realizada = "Se ha realizado la valoracion integral del reporte de Incidente";
          
            console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
            if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){

          envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,tarea_realizada);
            }
          /************************************************************* */
 
          this.$router.push({
          name: "Notificaciontres",
          params: { incidenteId:  this.incidenteid, folio:this.folio,esincidente :etapavaloracion_confirmaincidente },
        });

        })
        .catch((error) => {
          console.log(error.data);
        });



    },
    
    actualizarValoracion() {

     console.log(" Permiso EDITARANTESDECIERREDELAVALORACIONINTEGRAL  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARANTESDECIERREDELAVALORACIONINTEGRAL)             

    if (this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARANTESDECIERREDELAVALORACIONINTEGRAL=='SI'){

          this.ejecutar_actualizaValoracion();

      }//termina if

    }
  },

  created() {
    this.overlay = true ;
       /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
  ////////////////////////////////////////////
   let ruta_A_regresar  = '/valoracionintegral/' + this.$route.params.id;
   console.log("ruta_A_regresar : " + ruta_A_regresar);
   this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
   /////////////////////////////////////////////
   let rolActual = this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARANTESDECIERREDELAVALORACIONINTEGRAL;
    
    this.$store.dispatch("action_medidasintegrales_docto",0);


    if (rolActual == "SI"){
      this.cargarValoracionIntegral();
    }else {
      
      //aqui tengo que poner una notificacion de que no hay autorizacion.
      this.$router.push('/notificacionnoautorizado');

    }

  
  },
  data() {
    return {
      opcionesBarra: [],
      verBarraGral : false,
      
      loadinginvestigacion :false,
      mostrarAlerta : false,
      overlay :false,
      archivos : [],
      verBotoneraconcierre :false,
      mostrarLaBotonera :false,
      ocultarConfirmacion: true,
      confirmacionDeIncidente : this.$store.state.uivars.actions_uivars_esincidente,
      estadoDeValoracion: '',
      errores : 0,
      verBotonera : true,
      nombreDelArchivo : '',
      datosDelArchivo : null,
      planycronograma: "0",
      hayPlan: false,

      loading: false,

      files: "",

      siesincidente: false,
      noesincidente: false,

      nivelbajo: false,
      nivelcritico: false,
      nivelalto: false,

      tipoexterno: false,
      tipointerno: false,

      incidenteid: 0,
      id: 0,

      tipologiadelincidente: "",
      niveldelincidente: "",
      tipodecaso: "",
      confirmaincidente: "",
      tipoderespuesta: "",
      medidasintegrales: "",

      textovi: "",
      folio: "",

      adulto: false,

      pares: false,

      verBotonDP: false,

      seleccionDP: false,

      verBotonInvI: false,

      seleccionInv: false,

      seleccionabordaje: false,

      itemsTipoDeCaso: [
        "ABUSO FISICO",
        "ABUSO SEXUAL",
        "ABUSO EMOCIONAL",
        "NEGLIGENCIA Y/O TRATO NEGLIGENTE",
        "VIOLACION DE LA PRIVACIDAD DE LOS NIÑOS Y NIÑAS",
      ],

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

      filesa: [ ],
    };
  },
};
</script>

