<template>
  <v-container name="investigacion">
    <!-- pediente la fecha -->
        <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2>Investigacion Interna</h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">


            <BarraDeNavegacion
            
             ></BarraDeNavegacion>

        </v-col>
    </v-row>
    <FoliosComponente
      :folio="investigacion.folio"
      :foliodenuncia="investigacion.folioinvestigacion"
      :date ="investigacion.fechaCreacion"
      tipofolio="INVESTIGACIÓN"
    >
    </FoliosComponente>
    <br />

    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6"> </v-col>
      <v-col cols="12" xs="12" sm="6" md="6">
        <barraDocumentos :files="files"> </barraDocumentos>
      </v-col>
    </v-row>
     <br>
    <!-- =============================================== -->

     <!-- =============================================== -->
    <v-card width="100%" v-if="verFormularioConfirmacion">
          <v-card-title> LISTO PARA FINALIZAR </v-card-title>
        <v-card-text>
            <v-row >
              <v-col>
                    <v-banner type="warning" two-line color="yellow" >
                        <v-icon
                        slot="icon"
                        color="warning"
                        size="36"
                        >
                        mdi-alarm-light-outline
                        </v-icon>
                        <span  >
                        Esta investigación cumple con los requisitos para su finalización.
                        <br>
                        <strong>¿Desea cerrar esta investigación?</strong>
                        </span>

                        <span  class="d-none">
                        
                            La solicitud ha sido procesada
                      
                        </span>

                        <template v-slot:actions>

                        <v-btn 
                            color="red"
                            dark
                            dense
                            @click.prevent.stop="cancelarOperacion"
                        >
                            Cancelar
                            
                        </v-btn>

                        <v-btn 
                            color="green"
                            dark
                            dense 
                            @click.prevent.stop="cerrarInvestigacion"
                        >
                            Cerrar esta investigacion
                        </v-btn>

                        </template>
                    </v-banner>
              </v-col>
            </v-row>
        </v-card-text>
        
      </v-card>
    <!-- =============================================== -->

    <!-- =============================================== -->
  <v-card width="100%" v-if="verConfirmacionRespuesta">
    <v-card-title> LA RESPUESTA ES  </v-card-title>
    <v-card-subtitle>
      En base a esta investigación se concluye que la respuesta que se dara es de tipo
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="4" md="4">
          <v-btn color="primary" dark dense block
          @click.prevent.stop="confirmacionIclick('DENUNCIA LEGAL')">
           Denuncia Legal     
          </v-btn>    
        
        </v-col>
        <v-col cols="12" xs="12" sm="4" md="4">

           <v-btn color="primary" dark dense block
           @click.prevent.stop="confirmacionIclick('ABORDAJE INTERNO')">
           Abordaje Interno    
          </v-btn>  
        </v-col>

        <v-col cols="12" xs="12" sm="4" md="4">

           <v-btn color="primary" dark dense block 
           @click.prevent.stop="confirmacionIclick('no')">
          No es un incidente.    
          </v-btn>  
        </v-col>
        
        <v-alert v-if="this.$store.state.uivars.uivars_error_cardConfirmacion" type="error">
           Debe de confirmar si es un incidente o no .
        </v-alert>
      </v-row>
    </v-card-text>
  </v-card>
  
  <br>

    <!-- =============================================== -->  
     <v-card width="100%" v-if="verDatosComplementarios">
    <v-card-title> Solo unos datos mas..</v-card-title>
    <v-card-text>
    </v-card-text>
    </v-card>
  <br v-if="verDatosComplementarios">
    <!-- =============================================== -->
 
      <cardTipologia :tipologia="tipologiadelincidente" v-if="verDatosComplementarios"></cardTipologia>

    <br v-if="verDatosComplementarios" >
    <!-- =============================================== -->
  
      <cardNivelIncidente :nivel="niveldelincidente" v-if="verDatosComplementarios"></cardNivelIncidente>
    
    <br v-if="verDatosComplementarios">
    <!-- =============================================== -->

   
      <cardTipoCaso :tipo="tipodecaso" v-if="verDatosComplementarios"></cardTipoCaso>
    
    <br v-if="verDatosComplementarios">

  <!------------------------------------------------------->

     <v-alert v-if="verValidacionDeConfirmacion" type="warning">   
       Faltan datos a seleccionar
    </v-alert>
  
  <!--================================================= -->
 <v-card width="100%" v-if="verDatosComplementarios">
    <v-card-title> </v-card-title>
    <v-card-subtitle>
      
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6">
          <v-btn color="red" dark dense block
          @click.prevent.stop="confirmacion_cancelar">
         Cancelar    
          </v-btn>    
        
        </v-col>


        <v-col cols="12" xs="12" sm="6" md="6">

           <v-btn color="green" dark dense block 
           @click.prevent.stop="confirmacion_seguir">
            Confirmar y continuar   
          </v-btn>  
        </v-col>

      </v-row>
    </v-card-text>
  </v-card>
  <!------------------------------------------------------->


    <RegistroIncidenteComponente  v-if="verComponentes"
      :texto="investigacion.registroincidentes_docto"
    >
    </RegistroIncidenteComponente>

    <br>

    <ArchivoImpresionComponente v-if="verComponentes"
      name="carta"
      titulo="CARTA DE AUTORIZACION"
      :incidenteId="investigacion.incidenteId"
      :archivoId="carta_archivoId"
      :nombreDelArchivo="carta_NombreArchivo"
      :sihayarchivo="carta_siHayArchivo"
      action_a_ejecutar="action_cartautorizacion_docto"
      campo="investigacion_cartautorizacion_docto"
    >
    </ArchivoImpresionComponente>

    <br >
    <ArchivoImpresionComponente v-if="verComponentes"
      name="terminos"
      titulo="TERMINOS DE REFERENCIA"
      :incidenteId="investigacion.incidenteId"
      :archivoId="terminosreferencia_archivoId"
      :nombreDelArchivo="terminosreferencia_NombreArchivo"
      :sihayarchivo="terminosreferencia_siHayArchivo"
      action_a_ejecutar="action_terminosreferencia_doctp"
      campo="investigacion_terminosreferencia_doctp"
    >
    </ArchivoImpresionComponente>
    <br >

    <ArchivoImpresionComponente v-if="verComponentes"
      name="plan"
      titulo="PLAN DE INVESTIGACION CON CRONOGRAMA"
      :incidenteId="investigacion.incidenteId"
      :archivoId="plan_archivoId"
      :nombreDelArchivo="plan_NombreArchivo"
      :sihayarchivo="plan_siHayArchivo"
      action_a_ejecutar="action_plan_docto"
      campo="investigacion_plan_docto"
    >
    </ArchivoImpresionComponente>

    <br >

    <br >

    <ArchivoImpresionComponente v-if="verComponentes"
      name="plan"
      titulo="INFORME DE HALLAZGOS, CONCLUSIONES Y RECOMENDACIONES"
      :incidenteId="investigacion.incidenteId"
      :archivoId="informe_archivoId"
      :nombreDelArchivo="informe_NombreArchivo"
      :sihayarchivo="informe_siHayArchivo"
      action_a_ejecutar="action_informe_docto"
      campo="investigacion_informe_docto"
             
    >
    </ArchivoImpresionComponente>
    <br>
    <br>

    <v-row v-if="verComponentes">
      <v-card width="100%">
        <v-card-title> EVIDENCIAS DE LA INVESTIGACIÓN</v-card-title>
        <v-card-text>
          <v-row>
            <v-col> ENTREVISTAS, BITACORAS, GRABACIONES, FOTOGRAFIAS </v-col>
            <v-col>
              <v-btn color="primary" block dense dark @click="irAevidencias">
                 Evidencias
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>  
              <v-btn
                class="mx-2"
                fab
                dark
                large
                color="purple"
              >

                 <v-badge
                  bordered
                  
                  :content="totalDoctos"
                >              
                <v-icon dark>
                   mdi-file-pdf
                </v-icon>
                 

        
                </v-badge>
              </v-btn>
            </v-col>

            <v-col>  
               <v-btn
                class="mx-2"
                fab
                dark
                large
                color="purple"
              >
                <v-badge
                  bordered
                  
                   :content="totalImagen"
                >      
                      <v-icon dark>
                        mdi-file-image
                    </v-icon>


                </v-badge>
              </v-btn>
            </v-col>

            <v-col> 

                  <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="purple"
                >
                  <v-badge
                  bordered
                  
                   :content="totalVideo"
                >
                               
                  <v-icon dark>
                      mdi-video
                  </v-icon>

                </v-badge>
                </v-btn>
              
              
              
             </v-col>
             <v-col>

                  <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="purple"
                >
                     <v-badge
                      
                       bordered
                       
                       :content="totalAudio"
                    >               
                  <v-icon dark>
                    mdi-music-note
                  </v-icon>

                      
                </v-badge>
                </v-btn>
                
           

             </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    <br >
    <v-alert v-if="verAlerta" :type="tipoalerta">
       {{mensaje}}
    </v-alert>
    <br>
    <v-row v-if="verBotones">
      <v-col cols="12" xs="12" sm="12" md="4">
        <!-- <v-btn
      
          color="primary"
          @click="permisoImpresion"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn> -->
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
      <!---  <v-btn color="red" @click="irADash" block>
          <v-icon right dark> mdi-close </v-icon>
          <v-spacer></v-spacer>
          Cancelar
        </v-btn> -->
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn 
           :v-if="this.mostrarBotonGuardar"
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="guardar('s')"
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
import FoliosComponente from "@/components/denucialegal/componentesDenunciaLegal/FoliosComponente.vue";
import RegistroIncidenteComponente from "@/components/investigacion/componentesInvestigacion/RegistroIncidenteComponente.vue";
import ArchivoImpresionComponente from "@/components/investigacion/componentesInvestigacion/ArchivoImpresionComponente.vue";
import apiInvestigacion from "@/apialdeas/apiInvestigacion.js";
import barraDocumentos from "@/components/barradocumentos/barraDocumentos.vue";
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
// envia los correos de notificacion
//import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';
import apidoctosapoyo from '@/apialdeas/apiDoctosApoyo.js';
//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';
import eventBus from '@/eventBus';
import apiValoracion from "@/apialdeas/apiValoracion.js";

export default {
  components: {
    FoliosComponente,
    RegistroIncidenteComponente,
    ArchivoImpresionComponente,
    barraDocumentos,BarraDeNavegacion,
    cardTipologia         :()  => import("@/components/etapasComponentesValoracion/cardTipologia.vue"),
    cardNivelIncidente    :()  => import("@/components/etapasComponentesValoracion/cardNivelIncidente.vue"),
    cardTipoCaso          :()  => import("../etapasComponentesValoracion/cardTipoCaso.vue"),

  },
  data() {
    return {

      mostrarBotonGuardar : true,
      
      verValidacionDeConfirmacion : false,

      tipo_de_respuesta : '',


      verDatosComplementarios : false,
       verConfirmacionRespuesta: false,
      verBotones : true,
      verFormularioConfirmacion : false,
      totalDoctos : 0,
      totalImagen :0,
      totalVideo : 0,
      totalAudio : 0 ,
      verComponentes : false,
      overlay : false,
      tipoalerta : 'warning',
      verAlerta : false,
      
      mensaje : '',
      folio: "",
      folioinvestigacion: "",
      siHayArchivo: false,
      itemsCargos: ["SI", "NO", "EN PROCESO"],
      investigacion: [],
      loading: false,

      carta_archivoId: "0",
      carta_NombreArchivo: "",
      carta_siHayArchivo: false,

      terminosreferencia_archivoId: "0",
      terminosreferencia_NombreArchivo: "",
      terminosreferencia_siHayArchivo: false,

      plan_archivoId: "0",
      plan_NombreArchivo: "",
      plan_siHayArchivo: false,

      informe_archivoId: "0",
      informe_NombreArchivo: "",
      informe_siHayArchivo: false,

      files: [ ],
    };
  },
  methods: {
        guardar_noesunincidente(parmetros){
 

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

           confirmacion_cancelar(){

             this.verDatosComplementarios = false;
             this.verComponentes          = true ;
              this.verBotones                =true;
           },
           
           /*-----------------------------------
           
           ------------------------------------*/
           confirmacion_seguir(){

            let tipodecaso            =  this.$store.state.valoracion.etapavaloracion_tipodecaso;
            let niveldelincidente     =  this.$store.state.valoracion.etapavaloracion_niveldelincidente;
            let tipologiadelincidente =  this.$store.state.valoracion.etapavaloracion_tipologiadelincidente;
           
           let r1   = 0;
           let r2   = 0;
           let r3   = 0;
           let suma = 0;

            tipodecaso.length            > 0 ? r1=0 : r1=1;
            niveldelincidente.length     > 0 ? r2=0 : r2=1;
            tipologiadelincidente.length > 0 ? r3=0 : r3=1;

           
            suma = r1 + r2+  r3;

            console.table({ tipodecaso ,r1, niveldelincidente ,r2, tipologiadelincidente,r3,suma });
           
            if(suma > 0){
              this.verValidacionDeConfirmacion = true;
              return;
            }else {
              this.verValidacionDeConfirmacion = false;
           
            /*---------------------------------------------*/
            /* guardamos la informacion
            -----------------------------------------------*/
            /*
              nota:
              si se decide a una investigacion ,se debe deshabilitar 
              la valoracion integral ... no tiene caso 

              -- realizar una nueva

              -- hacer pruenbas de la cancelacion 
            */

               var parmetrosx = {
            
                incidenteid: this.investigacion.incidenteid,
                //id: this.investigacion.id,              
                //textovi: etapavaloracion_textovi,
                tipologiadelincidente:tipologiadelincidente,
                niveldelincidente: niveldelincidente,
                tipodecaso: tipodecaso,
                confirmaincidente: "SI ES UN INCIDENTE",
                tipoderespuesta: this.tipo_de_respuesta,
                medidasintegrales:  '0',
                medidasintegrales_docto : '0',
                estado : 'abierto',
                accion:"respuestanormal_desde_investigacion"
              };

              //this.guardar_noesunincidente( parmetrosx );


              let update = apiValoracion.updateValoracion(parmetrosx, this.$store);

              update
                .then((response) => {
                // console.log(JSON.stringify(response.data));
                // let ruta =`/notificaciondos/${this.incidenteid}/${this.folio}/${etapavaloracion_confirmaincidente}`;
                // console.log(JSON.stringify(response.data));
                // this.$router.push(ruta);
                      console.log( response.data);
                  if ( response.data.msg== 'ok'){
                            
                            console.log( response.data.tipoderespuesta);
                            if (response.data.tipoderespuesta == "DENUNCIA LEGAL") {

                                      this.$store.dispatch("setear_Incidente",this.investigacion.incidenteid);
                                      
                                       console.log( "ANTES DE IR A DENUNCIA LEGAL");
                                      this.$router.push({
                                        name: "DenunciaLegal",
                                        params: { denunciaId: this.investigacion.incidenteid},
                                      });
                                      // this.$router.push('/denuncialegal');
                                    }

                             if (response.data.tipoderespuesta== "ABORDAJE INTERNO") {
                                     
                                   this.$store.dispatch("setear_Incidente",this.investigacion.incidenteid);

                                   this.$router.push(
                                        { name: "AbordajeInterno", 
                                        params: { incidenteId: this.investigacion.incidenteid } });
                                    
                                    }//termina abordaje interno     

                  }
                
                 
                })
                .catch((error) => {
                  console.log(error.data);
                });


               }//TERMINA IF DE VALIDACION



            

           },// termina

           //********************************************************* */

          confirmacionIclick(valor){
          
            typeof valor;
            
            this.tipo_de_respuesta = valor;



            if ( valor == 'no'){
                this.verDatosComplementarios = false;
                this.verConfirmacionRespuesta= false;
                                  
                var parmetros = {
              
                //id: this.id,
                incidenteid: this.investigacion.incidenteid,
                //textovi: this.$store.state.valoracion.etapavaloracion_textovi,
              
                accion : 'cierre_desde_investigacion'
              };
                this.guardar_noesunincidente( parmetros );
            }else {
                //actualizamos

            this.verDatosComplementarios = true;
            this.verConfirmacionRespuesta= false;
                                  


           }

          },

          cancelarOperacion() {
            this.verFormularioConfirmacion = false;
            this.verComponentes            = true;
            this.verBotones                =true;
          } ,
          cerrarInvestigacion() {

              this.verFormularioConfirmacion= false;
              this.verConfirmacionRespuesta = true;
          },

         //Esta funcion se encarga de consultar la API para recuperar los documentos que 
         // se mostraran el componente Barradedocumentos
  
        async cargarTodosLosDoctos(categoria){
          
          typeof categoria;

          let promesa = apidoctosapoyo.cargar__todos__los__doctosapoyo_por_categoria(categoria,this.$store);

           promesa
          .then( response => { 

                 this.files  = response.data;
          })
         .catch( error => { console.log(JSON.stringify(error.data))});
      },
         permisoImpresion(){
           
      console.log(" Permiso IMPRESIONINVESTIGACION  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONINVESTIGACION)      ;

     if ( this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONINVESTIGACION=='SI'){
    // impreseion 
       
         this.$router.push({
          name: "ReporteImpresionInvestigacion"
        });

     }else {
       /* En caso de que no se tenga permiso */

      //realizamos la solicitud del permiso//
       let idRecuperado = this.$route.params.id;
      
       
       this.$store.dispatch('actions_permisosimpresion_incidenteid',this.$route.params.id);
       this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
       this.$store.dispatch('actions_permisosimpresion_etapa', "Investigacion Interna");
     
     //  solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
       //-------------------------------------------------------------
        
        //redirrecionamos al usuario hacia la pantalla de notificacion de permisos
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });
    }

    },
  
    guardar(notificacion) {
     typeof notificacion;
      console.log(" guardar esta info");

      this.loading =true;

      let parametros = {
        id                       : this.investigacion.id,
        folioinvestigacion       : this.$store.state.investigacion
          .investigacion_folioinvestigacion_docto,
           
        registroincidentes_docto : this.$store.state.investigacion
          .investigacion_registroincidentes_docto,

        cartautorizacion_docto   : this.$store.state.investigacion
          .investigacion_cartautorizacion_docto,

        terminosreferencia_doctp : this.$store.state.investigacion
          .investigacion_terminosreferencia_doctp,

        plan_docto               : this.$store.state.investigacion.investigacion_plan_docto,
       
       informe_docto            : this.$store.state.investigacion
          .investigacion_informe_docto,
      };

      console.log("valores de investigacion para actualizar");
      console.log(JSON.stringify(parametros));

      let update = apiInvestigacion.update__investigacion(
        parametros,
        this.$store
      );

      update
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.loading= false;

          console.log(response.data.estado);
          // if (response.data.estado=='guardado'){

                  
                if (response.data.sePuedeCerrarLaInvestigacion== true ){

                  //ocultamos lo componentes anteriores 
                  this.verComponentes = false;
                  //esta variable oculta la botonera del pie de pagina
                  this.verBotones     = false;
                  //Esta variable oculta/muestra la alerta de guardado del registro
                  this.verAlerta      = false;
                  //mostramos el formulario
                  this.verFormularioConfirmacion= true;


                }else {
                   
                    //Estas variables configuran la alerta de guardado
                 
                   this.mensaje = 'La información ha sido guardada.';
                   this.tipoalerta = 'warning';
                   this.verAlerta= true;
                }

           //}

         // if (response.data.estado=='cerrado'){
         //          this.mensaje = 'Este registro ha sido completado';
         //          this.tipoalerta = 'success';
        //           this.verAlerta= true;

        //           if(notificacion=="s"){

                      /*******************************************************************
                     * Enviamos los correos para notificar a los usuarios que tienen 
                     * este permiso activo
                     ****************************************************************/
                  
                  //let correosRecibidos = response.data["correos"];
                 // console.log("Variable de correos");
                 // console.log(correosRecibidos);

                 // let tarea_realizada = "Se ha realizado la investigacion interna";
                  
                 // this.$store.dispatch("action_notificacion_incidenteid",this.$store.state.investigacion.investigacion_incidenteid);
                //  this.$store.dispatch("action_notificacion_respuesta","investigacion");
                //  let respuesta ="Se ha completado el llenado de la investigacion interna del folio  #" +  this.folio;
                //  this.$store.dispatch("action_notificacion_texto_respuesta",respuesta);                 
                 
                //     console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
                //   if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){
    
                //      envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,tarea_realizada);

               //    }


                //  this.$router.push({ name: "NotificacionRespuesta"});
                   

                  // }
          // }
        })
        .catch((error) => {
          console.log(JSON.stringify(error.data));
           this.loading= false;
        });
    }, //termina upodate

    irADash() {
      this.$router.push("/dashboard");
    },

    asignarVariables(investigacion) {
      this.folio = investigacion.folio;

      this.folioinvestigacion = investigacion.folioinvestigacion;
      console.log("**************************");
      console.log("investigacion.incidenteId : " + investigacion.incidenteid);
      console.log("**************************");
      this.$store.dispatch("action_investigacion_incidenteid", investigacion.incidenteid);

      this.$store.dispatch("action_id", investigacion.id);

      this.$store.dispatch(
        "action_registroincidentes_docto",
        investigacion.registroincidentes_docto
      );

      this.$store.dispatch(
        "action_folioinvestigacion_docto",
        this.folioinvestigacion
      );
      
      this.totalDoctos =  investigacion.totalDoctos;
      this.totalImagen =  investigacion.totalImagen;
      this.totalAudio  =  investigacion.totalAudio;
      this.totalVideo  =  investigacion.totalVideo;
      
      /*
              $results[0]["totalDoctos"] = $evidenciasDocumento;
        $results[0]["totalImagen"] = $evidenciasImagen;
        $results[0]["totalAudio"]  = $evidenciasAudio;
        $results[0]["totalVideo"]  = $evidenciasVideo;
    action_investigacion_evidencias
    action_investigacion_registroincidentes_docto_nombre
    action_investigacion_cartautorizacion_docto_nombre
    action_investigacion_terminosreferencia_doctp_nombre
    action_investigacion_plan_docto_nombre
  

    action_investigacion_informe_docto_nombre
 */
      (this.carta_archivoId = investigacion.cartautorizacion_doctoArchivo.id),
        (this.carta_NombreArchivo =
          investigacion.cartautorizacion_doctoArchivo.nombreOriginal),
        (this.carta_siHayArchivo =
          investigacion.cartautorizacion_doctoArchivo.hayArchivo),

        this.$store.dispatch("action_investigacion_cartautorizacion_docto_nombre",this.carta_NombreArchivo);
        this.$store.dispatch(
          "action_cartautorizacion_docto",
          this.carta_archivoId
        );

      (this.terminosreferencia_archivoId =
        investigacion.terminosreferencia_doctpArchivo.id),
        (this.terminosreferencia_NombreArchivo =
          investigacion.terminosreferencia_doctpArchivo.nombreOriginal),
        (this.terminosreferencia_siHayArchivo =
          investigacion.terminosreferencia_doctpArchivo.hayArchivo),

        this.$store.dispatch("action_investigacion_terminosreferencia_doctp_nombre",this.terminosreferencia_NombreArchivo);
     
        this.$store.dispatch(
          "action_terminosreferencia_doctp",
          this.terminosreferencia_archivoId
        );

      (this.plan_archivoId = investigacion.plan_docto_Archivo.id),
        (this.plan_NombreArchivo =
          investigacion.plan_docto_Archivo.nombreOriginal),
        (this.plan_siHayArchivo = investigacion.plan_docto_Archivo.hayArchivo),

        this.$store.dispatch("action_investigacion_terminosreferencia_doctp_nombre",this.terminosreferencia_NombreArchivo);
        this.$store.dispatch("action_plan_docto", this.plan_archivoId);



      (this.informe_archivoId = investigacion.informe_docto_Archivo.id),
        (this.informe_NombreArchivo =
          investigacion.informe_docto_Archivo.nombreOriginal),
        (this.informe_siHayArchivo =
          investigacion.informe_docto_Archivo.hayArchivo);

      this.$store.dispatch("action_investigacion_informe_docto_nombre",this.informe_NombreArchivo);
      this.$store.dispatch("action_informe_docto", this.informe_archivoId);

    },

    irAevidencias() {
      /* guardamos antes de que abandonemos la seccion */

      this.guardar("n");
      /************************************************ */
      let evidenciaId = this.$route.params.evidenciaId;

    

      this.$router.push({
        name: "Evidencias",
        params: { denunciaId: evidenciaId },
      });
    },

    getInvestigacion() {
      let id = this.$route.params.incidenteId;

      let p = apiInvestigacion.cargar__investigacion_x_incidenteID(
        id,
        this.$store
      );

      p.then((response) => {

        console.log(JSON.stringify(response.data));
        this.investigacion = response.data[0];
        this.asignarVariables(this.investigacion);

        this.cargarTodosLosDoctos("i");
         //-------------------------------------------
         // mostramos todos los componentes
         //-------------------------------------------
         this.verComponentes= true;
         //-------------------------------------------
         // inicia el cargado de los documentos
         //-------------------------------------------
          eventBus.$emit('cargarArchivo_con_id');
         
         //--------------------------------------------
         // verificasmo el estado de la investigacion,
         // ya que si el estado es abierto se mostrara
         // el boton de guardar
         //-------------------------------------------- 
          console.log(" estado " + this.investigacion.estado);
          this.investigacion.estado == 'cerrado' ? this.verBotones = false :
          this.verBotones = true;
         
         //--------------------------------------------
         // ocultamos el loader
         //--------------------------------------------
         
         this.overlay=false;

      }).catch((error) => {
        console.log(JSON.stringify(error.data));
         this.overlay=false;
      });
    },
  },

  mounted() {
    this.$nextTick(function () {
    /////////////////////////////////////////////////////
    /*Borramos valores que podrian hacernos interferencia,
      estas variables albergan valores de valoracionintegral*/
    ////////////////////////////////////////////////////////

      this.$store.dispatch("action_tipologiadelincidente",'');
      this.$store.dispatch("action_niveldelincidente",'');
      this.$store.dispatch("action_tipodecaso",''); 
    /////////////////////////////////////////////
    
    this.overlay= true ;
  /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
  ////////////////////////////////////////////
     let ruta_A_regresar  = '/investigacioninterna/'  + this.$route.params.incidenteId;
    console.log("ruta_A_regresar : " + ruta_A_regresar);
    this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
  /////////////////////////////////////////////
 
      this.getInvestigacion();
    });
  },
};
</script>