<template>
  <v-container>

    <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
           <h2> Cierre </h2>
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">

            <BarraDeNavegacion
     
             verInicial    
             verIntegral 
             verSeguimiento 
             verRespuesta 
             >
             </BarraDeNavegacion>
       <!-- import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";

-->
        </v-col>
    </v-row>
      <br>


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
        </v-row>


      <!--  <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue></barraDocumentosVue>
      </v-col> -->

      <v-card width="100%">
        <v-card-title>
        </v-card-title>
        <v-card-text>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field 
            :value="programa"
            label="Programa"
            filled
            readonly> </v-text-field>
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
    </v-card-text>
    </v-card>

    <br>
      <v-card width="100%">
        <v-card-title>
        </v-card-title>
        <v-card-text>
    <v-row>
      <v-col cols="12" xs="12" md="6">
        <v-text-field 
            :value="elaboro"
            label="Elaboro"
           
            filled
            readonly> </v-text-field>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <v-text-field 
            :value="cargo"
            label="Cargo"
            filled
            readonly> 
        </v-text-field>
      </v-col>
    </v-row>

</v-card-text>
</v-card>
<br>


     <!-- 
      <h4>ACCIONES REALIZADAS PARA CIERRE DE INCIDENTE</h4>
      -->

    <!-- =============================================== -->

      <ComponenteCardsDocumentoEnCierre :v-if = "verActaHechos"
       name="hechos"
       texto = "ACTA DE HECHOS "
       :id="this.datosParaCierre.denuncialegal.id_ActaHechos"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoActaHechos"
       >
       
      </ComponenteCardsDocumentoEnCierre>
      <br>
      <ComponenteCardsDocumentoEnCierre :v-if="verActaValoracion"
       name="valoracion"
       texto= "ACTA DE VALORACION "
       :id="this.datosParaCierre.denuncialegal.id_ActaValoracion"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoActaValoracion"
      >
      </ComponenteCardsDocumentoEnCierre>
      <br>

 
      <ComponenteCardsDocumentoEnCierre :v-if="verConsenso"
       name="consenso"
       texto= "CONSENSO NACIONAL "
       :id="this.datosParaCierre.denuncialegal.id_consensodocto"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoConsenso"
         >

      </ComponenteCardsDocumentoEnCierre>
       <br>



      <ComponenteCardsDocumentoEnCierre :v-if="verInformePatronato"
       name ="patronato"
       texto= "INFORME  AL PATRONATO "
        
       :id="this.datosParaCierre.denuncialegal.id_nformePatronato"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoPatronato"
          >

      </ComponenteCardsDocumentoEnCierre>
      <br>

       <ComponenteCardsDocumentoEnCierre :v-if="verInformeRegional"
       name ="regional"
       texto= "INFORME  A OFICINA REGIONAL "
       :id="this.datosParaCierre.denuncialegal.id_InformeRegional"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoRegional"
        >

      </ComponenteCardsDocumentoEnCierre>
       <br>   

       <ComponenteCardsDocumentoEnCierre :v-if="verInformeEnteRector"
       name ="rector"
       texto= "INFORME  A ENTE RECTOR "
        
        :id="this.datosParaCierre.denuncialegal.id_doctoInformeEnteRector"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_doctoInformeEnteRector"
           >

      </ComponenteCardsDocumentoEnCierre>
      <br>

      <ComponenteCardsDocumentoEnCierre :v-if="verSoporteLegal"
       name ="soporte"
       texto= "SOPORTE DE ASESOR LEGAL "
       :id="this.datosParaCierre.denuncialegal.id_docotoSoporteLegal"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_doctoSoporteLegal"
          >

      </ComponenteCardsDocumentoEnCierre>
      <br>


      <ComponenteCardsDocumentoEnCierre :v-if="verSoporteEmocional"
      name="emocional"
       texto= "SOPORTE EMOCIONAL "
       :id="this.datosParaCierre.denuncialegal.id_doctoSoporteEmocional"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_doctoSoporteEmocional"
         >
      </ComponenteCardsDocumentoEnCierre>
      <br>



       <ComponenteCardsDocumentoEnCierre :v-if="verMedidasDisciplinarias"
       name ="medidas"
       texto= "MEDIDAS DISCIPLINARIAS "
       :id   ="this.datosParaCierre.denuncialegal.id_medidasdocto"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentomedidasdocto"
        >

      </ComponenteCardsDocumentoEnCierre>
       <br>


     <ComponenteCardsDocumentoEnCierre :v-if="verDenuncia"
       name ="denuncia"
       texto= "DENUNCIA PRESENTADA"
       :id   ="this.datosParaCierre.denuncialegal.id_denunciadocto"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoDenuncia"
            >

      </ComponenteCardsDocumentoEnCierre>
      <br>
      <ComponenteCardsDocumentoEnCierre :v-if="verNotificacionPFN"
       name = "pfn"
       texto= "NOTIFICACION AL PFN"
       :id   ="this.datosParaCierre.denuncialegal.id_Notificacionpfn"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoNotificacionpfn"
       >

      </ComponenteCardsDocumentoEnCierre>
      <br>

      <ComponenteCardsDocumentoEnCierre :v-if="verNotificacionPersonaDenunciante"
      name ="denuncia"
       texto= "NOTIFICACION A LA PERSONA DENUNCIANTE"
       :id   ="this.datosParaCierre.denuncialegal.id_NotificacionDenunciante"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoNotificacionDenunciante"
         >

      </ComponenteCardsDocumentoEnCierre>
       <br>
      <ComponenteCardsDocumentoEnCierre :v-if="verPlanRecuperacionEmocional"
      name ="emocional"

       texto= "PLAN DE RECUPERACION EMOCIONAL CON SEGUIMIENTO"
        
       :id   ="this.datosParaCierre.denuncialegal.id_NotificacionPlan"
       :nombre_de_archivo_original ="this.datosParaCierre.denuncialegal.nombre_documentoNotificacionPlan"
        >

      </ComponenteCardsDocumentoEnCierre>

    <!-- =============================================== -->
    <br />

    <!-- =============================================== -->



      <v-card width="100%">
        <v-card-title>
        </v-card-title>
        <v-card-text>
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          name="input-7-7"
          label=" DECLARATORIA (250 PALABRAS) "
           v-model="texto"
           :placeholder ="place" 
           @input="asignarEvento($event)"
        >
                        <template v-slot:prepend>
                  <v-icon color="blue"
                      @click="showAyuda = !showAyuda">
                      mdi-help-circle
                  </v-icon>
              </template>
        </v-textarea>
      <v-alert v-if="this.$store.state.uivars.uivars_error_incidente_textocierre" type="error">
      Este Campo no debe de ir vacio y no debe de exceder el numero maximo de palabras
     </v-alert>

     <v-alert v-if="showAyuda" type="info">
              Redacte la declaratorio ,tome como guia lo siguiente <br>
              <ol>
              <li>  A Qué hechos concretos se dio respuesta</li>
               <li> Qué acciones se realizaron</li>
               <li> Con quiénes se realizaron</li>
               <li> Quién las realizó</li>
               <li> Cómo se realizaron</li>
               <li> Cuando se realizaron</li>
               <li> A quienes se contactó para notificar los hechos</li>
               <li> Instancias involucradas en el abordaje</li>
               <li> Documentos probatorios del abordaje.</li>
               <li> Conclusión de resultados del abordaje.  </li>
              
              </ol>
              </v-alert>

      </v-col>
    </v-row>
</v-card-text>
</v-card>
<br>
    <!-- =============================================== -->
    
      <v-card width="100%">
        <v-card-title>
          NOMBRE, CARGO Y FIRMA DE QUIEN ELABORA EL ACTA DE CIERRE
        </v-card-title>
        <v-card-text>
          <usuariosCierre :incidenteid="incidenteid"
                          :testigos="testigos">
                          </usuariosCierre>
        </v-card-text>
      </v-card>

     <v-alert v-if="faltanTestigos" type="error">
      Se debe de agregar al menos un testigo 
     </v-alert>
    

    <br />

    <!-- =============================================== -->
     <v-row v-if="mostrarAlerta">
       <v-col>
         <v-alert prominent type="warning"   >

           <v-row align="center">
              <v-col class="grow">
               Todavia no es posible realizar el cierre de este procedimiento de Desprotección Infantil
            <br>
            por que es posible que alguna de las etapas anteriores no esten completadas debidamente
        </v-col>
              <v-col class="shrink">
                <v-btn color="green" @click.prevent.stop="ocultarMsg">Enterado</v-btn>
              </v-col>
      </v-row>
             </v-alert>
       </v-col>
     </v-row>
    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
       <!--
        <v-btn
         
          color="primary"
          @click="PermisoImpresion"
          block
        >
          <v-icon right dark> mdi-printer </v-icon>
          <v-spacer></v-spacer>
          Imprimir
        </v-btn>  
        -->
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
        <v-btn v-if ="mostarBotonDeCierre"
          :loading="loading"
          :disabled="loading"
          color="green"
          @click="cerrarIncidente"
          block
        >
          <v-icon right dark> mdi-check </v-icon>
          <v-spacer></v-spacer>
          Cerrar este incidente
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
//import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import usuariosCierre from "@/components/usuarios/usuariosCierre.vue";
import apiIncidentes from '@/apialdeas/apiIncidentes.js';
//import cardDocumentoEnCierre from '@/components/etapasComponentesCierre/cardDocumentoEnCierre.vue';
import apiArchivos from '@/apialdeas/apiArchivos.js';
import BarraDeNavegacion from "@/components/etapas/BarraDeNavegacion.vue";
import envioDeCorreos from '@/enviarcorreos/envioDeCorreos.js';

//import solicitudPermisoImpresion from '@/components/permisosimpresion/solicitudPermisoImpresion.js';


export default {
  components: {
    //barraDocumentosVue,
    usuariosCierre ,
   // cardDocumentoEnCierre ,
    ComponenteCardsDocumentoEnCierre :() =>  import("@/components/etapasComponentesCierre/ComponenteCardsDocumentoEnCierre.vue"),
    BarraDeNavegacion
    },

  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  methods: {

       ocultarMsg() {
         
         this.mostrarAlerta = false;

       },

  
         PermisoImpresion(){
             // 
      console.log(" Permiso IMPRESIONDECIERRE  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDECIERRE)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.IMPRESIONDECIERRE=='SI'){
    // impreseion 

            
         this.$router.push({
          name: "ReporteImpresionCierre"
        });

     }else {
       /* En caso de que no se tenga permiso */

      //realizamos la solicitud del permiso//
       let idRecuperado = this.$route.params.id;
    
      // let s= this.$store;
       this.$store.dispatch('actions_permisosimpresion_incidenteid',this.$route.params.id);
       this.$store.dispatch('actions_permisosimpresion_usuarioid', this.$store.state.usuarios.usuarios_usuariologueado.id);
       this.$store.dispatch('actions_permisosimpresion_etapa', "Cierre");
     
     //  solicitudPermisoImpresion.solicitudImpresion(usuario,incidenteid,etapa,s);
       //-------------------------------------------------------------

          
        //let idRecuperado = this.$route.params.id;
        this.$router.push({
          name: "PermisoImpresion",
          params: { incidenteId: idRecuperado },
        });


     }
 
      },
      asignarEvento(evenot){
        this.$store.dispatch("action_textocierre",evenot)
        this.$store.dispatch("actions_uivars_error_incidente_textocierre",false);

      },
      
      cargarDocumento(idDocto){


        let tipovar = typeof idDocto;

        console.log("valor de tipovar " + tipovar);
       
       let arrayDeRegreso ={};


       console.log(" === vaor de idDocto en cargarDocumento : " + idDocto);


      if ( idDocto==='0' ) {

        

        var tempArray =  {
                hayArchivo    : false,
                id            : 0,
               nombreOriginal :  'no hay archivo'  };

        arrayDeRegreso = tempArray;
        console.table(arrayDeRegreso);

      

        return arrayDeRegreso;

      }else {
       let docto =     apiArchivos.conseguirArchivo(idDocto, this.$store.state);
       
       docto
       .then(
         response=>{

            let id =  idDocto;
            let nombreoriginal =response.data[0]['nombreOriginal'];
            

            console.log("docto =>  id :" + id);
            console.log("docto => nombreOriginal :" + nombreoriginal)
             
             let tempArray =  {
               hayArchivo : true,
               id :  id,
               nombreOriginal :  nombreoriginal  };


             arrayDeRegreso = tempArray;
             console.log("probando los valores recibidos ==> nombreOriginal : " + arrayDeRegreso.nombreOriginal);
             console.log("probando los valores recibidos ==> id : " + arrayDeRegreso.id);
               
             console.log("  *** * * * * * *");
             console.table(arrayDeRegreso);
             console.log("  *** * * * * * *");
                   
             return arrayDeRegreso;

            /* arrayDeRegreso['hayArchivo']= true;
             arrayDeRegreso['id']= JSON.stringify(response.data[0]['id']);
             arrayDeRegreso['nombreOriginal']=JSON.stringify(response.data[0]['nombreOriginal']);*/
         }
       ).catch(
         error=> { console.log("eror : "+ error.response)}
       ); 


      }
         
      
    
    },

   async cargarDatos(){
      
     // VISUALIZACIONDECIERRE
       console.log(" Permiso VISUALIZACIONDECIERRE  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.VISUALIZACIONDECIERRE)             
       
       if (this.$store.state.usuarios.usuarios_usuariologueado_rol.VISUALIZACIONDECIERRE=='SI'){
   
      /*********************************************** */
     //obtenenemos el 
     

      let incidenteId = this.$route.params.incidenteId;

      this.$store.dispatch("setear_incidente", this.incidenteId);

      this.incidenteid = incidenteId;

      console.log("valor de incidenteID : " + incidenteId);

      let datos = apiIncidentes.revisarCierre(incidenteId, this.$store);

      datos.then(
        response=>{ 
          
          console.log(response.data);

          this.tipoDeRespuesta = response.data[0].tipoderespuesta;

          console.log(" tipoDeRespuesta " +  response.data[0].tipoderespuesta);

          if (this.tipoDeRespueta == 'DENUNCIA LEGAL'){


            this.verActaHechos                      = true;
            this.verActaValoracion                  = true;
            this.verConsenso                        = true;
            this.verInformePatronato                = true;
            this.verInformeRegional                 = true;
            this.verInformeEnteRector               = true;
            this.verSoporteLegal                    = true;
            this.verSoporteEmocional                = true;
            this.verMedidasDisciplinarias           = true;
            this.verDenuncia                        = true;
            this.verNotificacionPFN                 = true;
            this.verNotificacionPersonaDenunciante  = true;
            this.verPlanRecuperacionEmocional       = true;


          }

          this.datosParaCierre = response.data[0];
          this.ESTADODELSEGUIMIENTO =response.data[0]["estadoseguimiento"];
          this.folio = response.data[0]["folio"];
           //setear el valor del filio para reporte de impresion 
          this.$store.dispatch("action_folio",this.folio);
          this.programa       = response.data[0]["nombrePrograma"];
          this.elaboro        = response.data[0]["elaboro"];
         
          this.$store.dispatch("setear_Elaboro", this.elaboro);
          this.cargo          = response.data[0]["cargousuario"];
          this.$store.dispatch("setear_cargos",this.cargo);
          this.testigos       = response.data[0]["testigos"];
          this.$store.dispatch("action_etapainicial_testigoscierre",this.testigos);
          this.texto          = response.data[0]['textocierre']; 
          this.$store.dispatch("action_textocierre",this.texto);
          this.cerrado        = response.data[0]['estadoIncidente'];
          console.log("cerrado ======>> " + this.cerrado );
          this.sePuedeCerrarEnBaseAEdosAnteriores = response.data[0].denuncialegal.sePuedeCerrarPorEstados;

        
        
          this.cerrado=='cerrado' ? this.mostarBotonDeCierre = false : this.mostarBotonDeCierre =true ;


         this.overlay=false;
       
        
        
/*
         this.Archivo_notificacionPlan.nombreOriginal =response.data[0]['Archivo_Plan_nombreOriginal'];
         this.Archivo_notificacionPlan.id =response.data[0]['Archivo_Plan_id'];
         this.Archivo_notificacionPlan.hayArchivo =response.data[0]['Archivo_Plan_hayArchivo'];
         this.Archivo_notificacionPlan.nombreInterno =response.data[0]['Archivo_Plan_nombreinterno'];
          this.Archivo_notificacionPlan.directorio =response.data[0]['Archivo_Plan_directorio'];
         this.Archivo_notificacionPlan.ext = response.data[0]['Archivo_Plan_ext'];
*/
      
       /*
         this.Archivo_notificacionPlan.nombreOriginal =response.data[0]['Archivo_planrecuperacion_nombreOriginal'];
         this.Archivo_notificacionPlan.id =response.data[0]['Archivo_planrecuperacion_id'];
         this.Archivo_notificacionPlan.hayArchivo =response.data[0]['Archivo_planrecuperacion_hayArchivo'];
         this.Archivo_notificacionPlan.nombreInterno =response.data[0]['Archivo_planrecuperacion_nombreinterno'];
         this.Archivo_notificacionPlan.directorio =response.data[0]['Archivo_planrecuperacion_directorio'];
         this.Archivo_notificacionPlan.ext = response.data[0]['Archivo_planrecuperacion_ext'];
 //'this.$store.dispatch('action_seguimiento_plan_docto_nombre', this.data_plan_docto['nombreOriginal']);
          this.$store.dispatch('action_seguimiento_planrecuperacion_docto_nombre',  this.Archivo_notificacionPlan.nombreOriginal);
*/

       /*
         this.Archivo_notificacionValoracion.nombreOriginal =response.data[0]['Archivo_actavaloracion_nombreOriginal'];
         this.Archivo_notificacionValoracion.id =response.data[0]['Archivo_actavaloracion_id'];
         this.Archivo_notificacionValoracion.hayArchivo =response.data[0]['Archivo_actavaloracion_hayArchivo'];
         this.Archivo_notificacionValoracion.nombreInterno =response.data[0]['Archivo_actavaloracion_nombreinterno'];
         this.Archivo_notificacionValoracion.directorio =response.data[0]['Archivo_actavaloracion_directorio'];
         this.Archivo_notificacionValoracion.ext = response.data[0]['Archivo_actavaloracion_ext'];

        this.$store.dispatch('action_seguimiento_actavaloracion_docto_nombre', this.Archivo_notificacionValoracion.nombreOriginal);
*/
    /*
         this.Archivo_notificacionDenunciante.nombreOriginal =response.data[0]['Archivo_notificaciondenunciante_nombreOriginal'];
         this.Archivo_notificacionDenunciante.id =response.data[0]['Archivo_notificaciondenunciante_id'];
         this.Archivo_notificacionDenunciante.hayArchivo =response.data[0]['Archivo_notificaciondenunciante_hayArchivo'];
         this.Archivo_notificacionDenunciante.nombreInterno =response.data[0]['Archivo_notificaciondenunciante_nombreinterno'];
         this.Archivo_notificacionDenunciante.directorio =response.data[0]['Archivo_notificaciondenunciante_directorio'];
         this.Archivo_notificacionDenunciante.ext = response.data[0]['Archivo_notificaciondenunciante_ext'];
         this.$store.dispatch('action_seguimiento_notificaciodenunciante_docto_nombre',  this.Archivo_notificacionDenunciante.nombreOriginal);
*/
/*
         this.Archivo_notificaciondif.nombreOriginal =response.data[0]['Archivo_notificaciondif_nombreOriginal'];
         this.Archivo_notificaciondif.id =response.data[0]['Archivo_notificaciondif_id'];
         this.Archivo_notificaciondif.hayArchivo =response.data[0]['Archivo_notificaciondif_hayArchivo'];
         this.Archivo_notificaciondif.nombreInterno =response.data[0]['Archivo_notificaciondif_nombreinterno'];
         this.Archivo_notificaciondif.directorio =response.data[0]['Archivo_notificaciondif_directorio'];
         this.Archivo_notificaciondif.ext = response.data[0]['Archivo_notificaciondif_ext'];
         this.$store.dispatch('action_seguimiento_notificaciondif_docto_nombre', this.Archivo_notificaciondif.nombreOriginal);
*/

/*       this.Archivo_notificacionAutoridad.nombreOriginal =response.data[0]['Archivo_notificacionautoridad_nombreOriginal'];
         this.Archivo_notificacionAutoridad.id =response.data[0]['Archivo_notificacionautoridad_id'];
         this.Archivo_notificacionAutoridad.hayArchivo =response.data[0]['Archivo_notificacionautoridad_hayArchivo'];
         this.Archivo_notificacionAutoridad.nombreInterno =response.data[0]['Archivo_notificacionautoridad_nombreinterno'];
         this.Archivo_notificacionAutoridad.directorio =response.data[0]['Archivo_notificacionutoridad_directorio'];
         this.Archivo_notificacionAutoridad.ext = response.data[0]['Archivo_notificacionautoridad_ext'];

          this.$store.dispatch('action_seguimiento_notificacionautoridad_docto_nombre', this.Archivo_notificacionAutoridad.nombreOriginal);
*/
        
/*
         this.Archivo_notificacionPFN.nombreOriginal =response.data[0]['Archivo_notificacionPFN_nombreOriginal'];
         this.Archivo_notificacionPFN.id =response.data[0]['Archivo_notificacionPFN_id'];
         this.Archivo_notificacionPFN.hayArchivo =response.data[0]['Archivo_notificacionPFN_hayArchivo'];
         this.Archivo_notificacionPFN.nombreInterno =response.data[0]['Archivo_notificacionPFN_nombreinterno'];
         this.Archivo_notificacionPFN.directorio =response.data[0]['notificacionutoridad_directorio'];
         this.Archivo_notificacionPFN.ext = response.data[0]['Archivo_notificacionPFN_ext'];
         this.$store.dispatch('action_seguimiento_notificacionpfn_docto_nombre', this.Archivo_notificacionPFN.nombreOriginal);
*/

           }
      ).catch(
        error =>{
          console.log(error);
          this.overlay=false;
        }
      );
          this.overlay=false;
        }else {
          this.$router.push("/notificacionnoautorizado");
        }//termina visualizacion de cierre

      /****************************************************** */

    },
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },

    validarCierre () {

      ///validamos que haya testigos 
      let res = false;
      let r1 = 0;
      let rc = this.$store.state.uivars.uivars_cuantosTestigos;
      rc > 0 ? r1 = 0 : r1= 1 ;

      if (r1 == 1){
          this.faltanTestigos =true;
      }
      //--------------------------------


      let t =  this.$store.state.incidentes.etapainicial_textocierre.length;
      console.log(" valor de texto cierere : " + t);

      let rc2 = 0;
      
      t > 20 ? rc2=0 : rc2=1;

      t > 0 ? this.$store.dispatch('actions_uivars_error_incidente_textocierre', false) 
      : this.$store.dispatch('actions_uivars_error_incidente_textocierre', true);
      
      console.log(" r1 " + r1);

      console.log(" rc2 " + rc2);

      let suma = r1 + rc2 ;

      suma == 0  ? res = true : res= false;

      return res;
      
    },

    realizarElCierre(){

                     // 
      console.log(" Permiso EDICIONDECIERRE  "  +  this.$store.state.usuarios.usuarios_usuariologueado_rol.EDICIONDECIERRE)             
     if (this.$store.state.usuarios.usuarios_usuariologueado_rol.EDICIONDECIERRE=='SI'){
   
      
      //****************************** */
      let id = this.incidenteid;
      
      let parametros   = {
            
            id: id,
            textocierre: this.$store.state.incidentes.etapainicial_textocierre

      };

      let p = apiIncidentes.realizarCierre(parametros,this.$store);

       p
      .then( response => {
        console.log("respuesta despues del cierre.");
         console.log(JSON.stringify(response.data))
         console.log(response.data['msg']);
         let respuesta = response.data['msg'];
         console.log("Respuesta msg " + respuesta);

        if (respuesta== "ok"){

          //nos lleva a notificacion de cierre.

         this.loading= false ;

         /*******************************************************************
         * Enviamos los correos para notificar a los usuarios que tienen 
         * este permiso activo
         ****************************************************************/
                  
           let correosRecibidos = response.data["correos"];
           console.log("Variable de correos");
           console.log(correosRecibidos);

            console.log(" >>>>>>> valor  de parametro enviar correso : " + this.$store.state.uivars.uivars_parametros[6]["valor"] );
      
            if (this.$store.state.uivars.uivars_parametros[6]["valor"]=='SI'){

               envioDeCorreos.enviarCorreos(correosRecibidos,this.folio,respuesta);                
        
            }

            
         this.$router.push({
          name: "Notificacioncuatro",
          params: { incidenteId:  this.incidenteid,folio:this.folio },
        });
       
       

        }else{
            this.loading= false ;
           return;

        }
         } )
      .catch( error => { 
          this.loading= false ;
        console.log(JSON.stringify(error.data))});

      /************************************************************ */
     }//cierra if permiso

    },//cierra la funcion 

    revisarErrores() {
      this.loading= false ;
      console.log("valida el cierre");

    },//termina cierre

    cerrarIncidente(){

      console.log(this.mostrarAlerta);

      this.mostrarAlerta=false;

       console.log(this.mostrarAlerta);

      if( this.sePuedeCerrarEnBaseAEdosAnteriores == false){
         this.mostrarAlerta=true;
        
      } else {

        if(this.ESTADODELSEGUIMIENTO=='abierto'){
            this.mostrarAlerta=true;
            console.log(this.mostrarAlerta);
        }else{

        this.loading= true ;
        let res = this.validarCierre();
        res ==true ? this.realizarElCierre()  :   this.revisarErrores() ;    
        
        
        }

    }//se puede cerrar 

      

    }, //termina cerrar incidenten

    seleccionar(valor) {
      if (valor == "adulto") {
        this.adulto = true;
        this.pares = false;
      }

      if (valor == "pares") {
        this.adulto = false;
        this.pares = true;
      }
    },
  },

  mounted() {
    
    this.overlay=true;
   // if ($this.$nextTick){
     /////////////////////////////////////////////
  // valores para regresar a esta pagina si se 
  // tiene que regresar despues de estar en imp
  // siones
   //----------------------------------------------------
     
  ////////////////////////////////////////////
   let ruta_A_regresar  = '/cierre/'+  this.$route.params.incidenteId;
    console.log("ruta_A_regresar : " + ruta_A_regresar);
    this.$store.dispatch("action_regresar_A_despues_de_impresion",ruta_A_regresar);
    /////////////////////////////////////////////
 
      this.cargarDatos();
  //  }

    

  },

  data() {
    return {
     
     /*-------------------------------------------- */
     /*  MOSTRAR O NO LOS COMPONENTES SEGUN SEA EL TIPO
        DE RESPUESTA
      ----------------------------------------------*/

      verActaHechos                      : false,
      verActaValoracion                  : false,
      verConsenso                        : false,
      verInformePatronato                : false,
      verInformeRegional                 : false,
      verInformeEnteRector               : false,
      verSoporteLegal                    : false,
      verSoporteEmocional                : false,
      verMedidasDisciplinarias           : false,
      verDenuncia                        : false,
      verNotificacionPFN                 : false,
      verNotificacionPersonaDenunciante  : false,
      verPlanRecuperacionEmocional       : false,
     
     /* ----------------------------------------------*/

     tipoDeRespuesta : '',

     /* ----------------------------------------------*/

     datosParaCierre : null,

     /* esta variable guarda la informacion de que si es posible o no 
        cerrar este incidente en base a los estados de las etapas anteriores */
      
      sePuedeCerrarEnBaseAEdosAnteriores :  false,



      showAyuda :false,
      overlay : false,

      ESTADODELSEGUIMIENTO : '',
      mostrarAlerta:false,

      mostarBotonDeCierre : true,

      cerrado : '',

      faltanTestigos : false,

      texto: '',

      verNotificacionAutoridad : false,

      incidente :[],
      incidenteid: '',
      loading :false,

      programa :'',
      elaboro :'',
      cargo :'',

     hayNotificacionAlDif:false,
      Archivo_notificaciondif:[],
     


      Archivo_notificacionAutoridad :[],
      hayNotificacionAlaAutoridad:false,

      Archivo_notificacionPFN :[],
      hayNotificacionAlaPFN:false,

      hayNotificacionDenunciante :false,
      Archivo_notificacionDenunciante:[],

      hayNotificacionActa : false,
      Archivo_notificacionValoracion :[],

      hayNotificacionPlan : false ,
      Archivo_notificacionPlan : [],

      testigos : [],

      
      folio :'',

      place : `A Qué hechos concretos se dio respuesta
              Qué acciones se realizaron
              Con quiénes se realizaron
              Quién las realizó
              Cómo se realizaron
              Cuando se realizaron
              A quienes se contactó para notificar los hechos
              Instancias involucradas en el abordaje
              Documentos probatorios del abordaje.
              Conclusión de resultados del abordaje.`,
    


      date: new Date().toISOString().substr(0, 10),

      menu2: false,
    };
  },
};
</script>

