<template>
  <v-container>
    <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
           <h2>Valoracion Integral</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">


            <BarraDeNavegacion
             activo_ri="1"
             activo_vi="0"
             activo_s="1"
             activo_c="1"
             ></BarraDeNavegacion>

        </v-col>
    </v-row>

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

      <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue
        :files="filesa"></barraDocumentosVue>
      </v-col>
    </v-row>
 

    <v-row>
      <textareaValoracion :texto="textovi"></textareaValoracion>
    </v-row>

    <br />
    <!-- =============================================== -->

    <v-row>
        <v-card width="100%" v-if="ocultarConfirmacion">
    <v-card-title> ¿SE CONFIRMA QUE EL EVENTO ES UN INCIDENTE ? </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-btn color="green" dark dense block
          @click="confirmacionIclick('NO ES UN INCIDENTE')">
            No es un incidente     
          </v-btn>    
        
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">

           <v-btn color="red" dark dense block
           @click="confirmacionIclick('SI ES UN INCIDENTE')">
           Si es un incidente     
          </v-btn>  
        <!--  <v-select
            :value="confirmacion"
            :item-value="confirmacion"
            :items="itemsOpciones"
            label="CONFIRMAR INCIDENTE"
            dense
            filled
            @change="asignarValor($event)"
          >
          </v-select> -->

         <v-alert v-if="this.$store.state.uivars.uivars_error_cardConfirmacion" type="error">
           Debe de confirmar si es un incidente o no .
        </v-alert>

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
    </v-row>
    <!--<v-row>
      <cardConfirmacion :confirmacion="confirmaincidente"></cardConfirmacion>
    </v-row> -->
    <!-- =============================================== -->
    <br />
    <v-row v-if="this.$store.state.uivars.uivar_esincidente">
      <cardTipologia :tipologia="tipologiadelincidente"></cardTipologia>
    </v-row>

    <!-- =============================================== -->
  

    <br />

    <v-row  v-if="this.$store.state.uivars.uivar_esincidente">
      <cardNivelIncidente :nivel="niveldelincidente"></cardNivelIncidente>
    </v-row>

    <br />
    <!-- =============================================== -->

    <v-row v-if="this.$store.state.uivars.uivar_esincidente">
      <cardTipoCaso :tipo="tipodecaso"></cardTipoCaso>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->


    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->
    <v-row v-if="this.$store.state.uivars.uivar_esincidente">
      <cardTipoRespuesta :respuesta="tipoderespuesta"></cardTipoRespuesta>
    </v-row>

    <br />
    <v-row v-if="this.$store.state.uivars.uivar_esincidente">
      <cardMedidasIntegrales
       :archivoId           ="planycronograma"
       :archivo             ="planycronograma" 
       :sihayarchivo        ="hayPlan"
       :incidenteId         ="incidenteid"
       :objetoDatosArchivo  ="datosDelArchivo"
       :nombreDelArchivo    ="nombreDelArchivo"></cardMedidasIntegrales>
    </v-row>

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
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import apiValoracion from "@/apialdeas/apiValoracion.js";
import apiArchivos from "@/apialdeas/apiArchivos.js";

import textareaValoracion from "@/components/etapasComponentesValoracion/textareaValoracion.vue";
import cardTipologia from "@/components/etapasComponentesValoracion/cardTipologia.vue";

import cardNivelIncidente from "@/components/etapasComponentesValoracion/cardNivelIncidente.vue";
//import cardConfirmacion from "../etapasComponentesValoracion/cardConfirmacion.vue";
import cardTipoCaso from "../etapasComponentesValoracion/cardTipoCaso.vue";
import cardTipoRespuesta from "../etapasComponentesValoracion/cardTipoRespuesta.vue";
//import cardMedidasIntegrales from "../etapasComponentesValoracion/cardMedidasIntegrales.vue";
import validacionReporteInicial from   "@/components/etapas/validaciones/validacionReporteInicial.js";
//import ComponenteConfirmacionIncidente from   "../etapasComponentesValoracion/ComponenteConfirmacionIncidente.vue";
//import medidasCrud from "@/components/seguimiento/medidasCrud.vue";
import validacionArchivo from  "@/components/etapas/validaciones/validacionArchivos.js";

export default {
  components: {
    barraDocumentosVue,
    cardMedidasIntegrales :() => import('../etapasComponentesValoracion/cardMedidasIntegrales.vue'),
    textareaValoracion,
    cardTipologia,
    cardNivelIncidente,
    //cardConfirmacion,
    cardTipoCaso,
    cardTipoRespuesta,BarraDeNavegacion,
   // ComponenteConfirmacionIncidente
  },


  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  methods: {

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


       let r =  validacionReporteInicial.existeInformacionParaCapturar_y_mayor_a(etapavaloracion_textovi,20);
       this.$store.dispatch('actions_uivars_error_textareaValoracion',r);
      
        if( r == true) return;
        
        /////////////////////////////////////////////
        
             
     valor == 'NO ES UN INCIDENTE' ? this.guardar_noesunincidente() 
     : this.proceso_seguir_Porque_Es_un_incidente();

    } ,



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
        etapavaloracion_medidasintegrales
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

       r =  validacionReporteInicial.existeInformacionParaCapturar_y_no_es_cero(etapavaloracion_medidasintegrales);
       this.$store.dispatch('actions_uivars_error_cardMedidasIntegrales',r);
       this.validarCaptura(r);  
                                                                 
       validacionArchivo.valida_si_hay_un_valor_distinto_de_cero(etapavaloracion_medidasintegrales,this.$store);
      return this.errores;

    },
    setearValores_para_impresion(){

      console.log("xx");
    },

    solicitudImpresion(){


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

        let idRecuperado = this.$route.params.id;
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });


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

   async cargarValoracionIntegral() {

      let idx = this.$route.params.id;
      console.log("valor de incidenteid " + idx);
      let res = apiValoracion.recuperarUnaValoracion(idx, this.$store);
      this.incidenteid = idx;

    
      res
        .then((response) => {
          console.log("Datos de la valoracionIntegral ");
          console.log(JSON.stringify(response.data));

          this.folio = response.data[0]["folio"];
          console.log(">>>>>>>valor del folio:" + this.folio);
           this.$store.dispatch('action_folio', this.folio);


          this.estadoDeValoracion = response.data[0]["estado"];
          console.log("valor de id : ");

          console.log(response.data[0]["id"]);
          this.id = response.data[0]["id"];
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
          
        
          
         this.confirmaincidente == "SI ES UN INCIDENTE" ?
         this.verBotonera =true : this.confirmaincidente == "En Proceso de Valoracion"
          ? this.verBotonera = true: this.verBotonera = false;

          //////////////////////////////////////////////////////////////////
          // si el inicedente no ha sido confirmado segiuomos mostradno
          // la botonera de confirmacion
          //////////////////////////////////////////////////////////////////
          
          let estado = response.data[0]["estado"];

          console.log(" ========== estado  > " + estado );
          

          
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
          this.$store.dispatch('etapavaloracion_medidasintegrales_docto', this.nombreDelArchivo);
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
        estado : 'cerrado'
      };

      console.log(parmetros);

      let update = apiValoracion.updateValoracion(parmetros, this.$store);

      update
        .then((response) => {
         // console.log(JSON.stringify(response.data));
         // let ruta =`/notificaciondos/${this.incidenteid}/${this.folio}/${etapavaloracion_confirmaincidente}`;
         typeof response;
         // this.$router.push(ruta);
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
    let rolActual = this.$store.state.usuarios.usuarios_usuariologueado_rol.EDITARANTESDECIERREDELAVALORACIONINTEGRAL;
    
    if (rolActual == "SI"){
      this.cargarValoracionIntegral();
    }else {
      
      //aqui tengo que poner una notificacion de que no hay autorizacion.
      this.$router.push('/notificacionnoautorizado');

    }

  
  },
  data() {
    return {
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
        " ABUSO FISICO",
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

                filesa: [
        {
          color: 'blue',
          icon: 'mdi-clipboard-text',
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
                {
          color: 'yellow',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title:  'Documento de Denuncia y Respuesta',
          link :'sin link'
        },

          {
          color: 'yellow',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title:  'Procedimiento para Denuncia y Respuesta',
          link :'sin link'
        },
           {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title:  'Guía de intervención PAS y CSP',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21700&parId=D1B73E758E4318E6%21690&o=OneUp'
        },      
             {
          color: 'blue',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title:  'Guía de intervención Familiar PAS y CSP',
          link :'https://onedrive.live.com/?authkey=%21AhxF5wMG%5FSJ00H0&cid=D1B73E758E4318E6&id=D1B73E758E4318E6%21704&parId=D1B73E758E4318E6%21690&o=OneUp'
        },
                     {
          color: 'yellow',
          icon: 'mdi-adobe',
          subtitle: 'Descripcion breve de este docto',
          title:  'Registro de Incidentes de Desprotección',
          link :'sin link'
        },               
      ],
    };
  },
};
</script>

