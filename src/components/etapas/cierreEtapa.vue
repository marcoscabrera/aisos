<template>
  <v-container>
    <h2>Cierre</h2>

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

      <!--  <v-col cols="12" xs="12" md="6">
        <barraDocumentosVue></barraDocumentosVue>
      </v-col> -->
    </v-row>

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
        </v-textarea>
      </v-col>
    </v-row>

    <!-- =============================================== -->

    <h4>ACCIONES REALIZADAS PARA CIERRE DE INCIDENTE</h4>

    <!-- =============================================== -->

    <v-row>
      <cardDocumentoEnCierre 

       labelCheckbox= "SE NOTIFICO AL SISTEMA DIF "
        
       :inputValueCheckbox ="Archivo_notificaciondif.hayArchivo"

       :nombreArchivo ="Archivo_notificaciondif.nombreOriginal"

       :colorIcono ="Archivo_notificaciondif.hayArchivo == false ? 'yellow' : 'green' "
      >

      </cardDocumentoEnCierre>

    </v-row>

    <!-- =============================================== -->
    <br />

    <!-- =============================================== -->

    <v-row>

      <cardDocumentoEnCierre 

       labelCheckbox= "SE NOTIFICÓ A LA AUTORIDAD CORRESPONDIENTE"
        
      :inputValueCheckbox ="Archivo_notificacionAutoridad.hayArchivo"

       :nombreArchivo ="Archivo_notificacionAutoridad.nombreOriginal"

       :colorIcono ="Archivo_notificacionAutoridad.hayArchivo === true ? 'green' : 'yellow' "
   
      >

      </cardDocumentoEnCierre>

    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>

      <cardDocumentoEnCierre 

       labelCheckbox= "SE NOTIFICÓ Al PFN O AL ELPI CORRESPONDIENTE"
        
       :inputValueCheckbox ="Archivo_notificacionPFN.hayArchivo"

       :nombreArchivo ="Archivo_notificacionPFN.nombreOriginal"

       :colorIcono ="Archivo_notificacionPFN.hayArchivo === true ? 'green' : 'yellow' "
 
      >

      </cardDocumentoEnCierre>
      
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
        <cardDocumentoEnCierre 

       labelCheckbox= "SE NOTIFICÓ A LA PERSONA DENUNCIANTE"
        
       :inputValueCheckbox ="Archivo_notificacionDenunciante.hayArchivo"

       :nombreArchivo ="Archivo_notificacionDenunciante.nombreOriginal"

       :colorIcono ="Archivo_notificacionDenunciante.hayArchivo === true ? 'green' : 'yellow' "
      >

      </cardDocumentoEnCierre>
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row> 
      
      <cardDocumentoEnCierre 

       labelCheckbox= "SE CUENTA CON EL LLENADO DEL ACTA DE VALORACIÓN DEL/DE LOS INCIDENTES/S"
        
      :inputValueCheckbox ="Archivo_notificacionValoracion.hayArchivo"

       :nombreArchivo ="Archivo_notificacionValoracion.nombreOriginal"

       :colorIcono ="Archivo_notificacionValoracion.hayArchivo === true ? 'green' : 'yellow' "

      >

      </cardDocumentoEnCierre>      
     
    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>

            <cardDocumentoEnCierre 

       labelCheckbox= "SE CUENTA CON UN PLAN DE RECUPERACIÓN EMOCIONAL CON SEGUIMIENTO"
        
      :inputValueCheckbox ="Archivo_notificacionPlan.hayArchivo"

       :nombreArchivo ="Archivo_notificacionPlan.nombreOriginal"

       :colorIcono ="Archivo_notificacionPlan.hayArchivo === true ? 'green' : 'yellow' "

      >

      </cardDocumentoEnCierre>      

    </v-row>

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
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
    </v-row>

    <br />

    <!-- =============================================== -->

    <!-- =============================================== -->
    <br />
    <!-- =============================================== -->

    <v-row>
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="loader = 'loading'"
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
      <v-col cols="12" xs="12" sm="12" md="4">
        <v-btn
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
  </v-container>
</template>
<script>
//import barraDocumentosVue from "../barradocumentos/barraDocumentos.vue";
import usuariosCierre from "@/components/usuarios/usuariosCierre.vue";
import apiIncidentes from '@/apialdeas/apiIncidentes.js';
import cardDocumentoEnCierre from '@/components/etapasComponentesCierre/cardDocumentoEnCierre.vue';
import apiArchivos from '@/apialdeas/apiArchivos.js';
export default {
  components: {
    //barraDocumentosVue,
    usuariosCierre,
    cardDocumentoEnCierre },

  computed: {
    generarFolio() {
      return "Folio # " + this.folio; 
    }
  },

  methods: {

      asignarEvento(evenot){
        this.$store.dispatch("action_textocierre",evenot)

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
      
     //obtenenemos el 
      let incidenteId = this.$route.params.incidenteId;

      this.incidenteid = incidenteId;

      console.log("valor de incidenteID : " + incidenteId);

      let datos = apiIncidentes.revisarCierre(incidenteId, this.$store);

      datos.then(
        response=>{ 
          
          console.log(response.data);
          this.folio = response.data[0]["folio"];
          this.programa= response.data[0]["programa"];
          this.elaboro= response.data[0]["elaboro"];
          this.cargo= response.data[0]["cargousuario"];

          this.testigos= response.data[0]["testigos"];

        
       
        
        
/*
         this.Archivo_notificacionPlan.nombreOriginal =response.data[0]['Archivo_Plan_nombreOriginal'];
         this.Archivo_notificacionPlan.id =response.data[0]['Archivo_Plan_id'];
         this.Archivo_notificacionPlan.hayArchivo =response.data[0]['Archivo_Plan_hayArchivo'];
         this.Archivo_notificacionPlan.nombreInterno =response.data[0]['Archivo_Plan_nombreinterno'];
          this.Archivo_notificacionPlan.directorio =response.data[0]['Archivo_Plan_directorio'];
         this.Archivo_notificacionPlan.ext = response.data[0]['Archivo_Plan_ext'];
*/
      
       
         this.Archivo_notificacionPlan.nombreOriginal =response.data[0]['Archivo_planrecuperacion_nombreOriginal'];
         this.Archivo_notificacionPlan.id =response.data[0]['Archivo_planrecuperacion_id'];
         this.Archivo_notificacionPlan.hayArchivo =response.data[0]['Archivo_planrecuperacion_hayArchivo'];
         this.Archivo_notificacionPlan.nombreInterno =response.data[0]['Archivo_planrecuperacion_nombreinterno'];
         this.Archivo_notificacionPlan.directorio =response.data[0]['Archivo_planrecuperacion_directorio'];
         this.Archivo_notificacionPlan.ext = response.data[0]['Archivo_planrecuperacion_ext'];


       
         this.Archivo_notificacionValoracion.nombreOriginal =response.data[0]['Archivo_actavaloracion_nombreOriginal'];
         this.Archivo_notificacionValoracion.id =response.data[0]['Archivo_actavaloracion_id'];
         this.Archivo_notificacionValoracion.hayArchivo =response.data[0]['Archivo_actavaloracion_hayArchivo'];
         this.Archivo_notificacionValoracion.nombreInterno =response.data[0]['Archivo_actavaloracion_nombreinterno'];
         this.Archivo_notificacionValoracion.directorio =response.data[0]['Archivo_actavaloracion_directorio'];
         this.Archivo_notificacionValoracion.ext = response.data[0]['Archivo_actavaloracion_ext'];


    
         this.Archivo_notificacionDenunciante.nombreOriginal =response.data[0]['Archivo_notificaciondenunciante_nombreOriginal'];
         this.Archivo_notificacionDenunciante.id =response.data[0]['Archivo_notificaciondenunciante_id'];
         this.Archivo_notificacionDenunciante.hayArchivo =response.data[0]['Archivo_notificaciondenunciante_hayArchivo'];
         this.Archivo_notificacionDenunciante.nombreInterno =response.data[0]['Archivo_notificaciondenunciante_nombreinterno'];
         this.Archivo_notificacionDenunciante.directorio =response.data[0]['Archivo_notificaciondenunciante_directorio'];
         this.Archivo_notificacionDenunciante.ext = response.data[0]['Archivo_notificaciondenunciante_ext'];
          

         this.Archivo_notificaciondif.nombreOriginal =response.data[0]['Archivo_notificaciondif_nombreOriginal'];
         this.Archivo_notificaciondif.id =response.data[0]['Archivo_notificaciondif_id'];
         this.Archivo_notificaciondif.hayArchivo =response.data[0]['Archivo_notificaciondif_hayArchivo'];
         this.Archivo_notificaciondif.nombreInterno =response.data[0]['Archivo_notificaciondif_nombreinterno'];
         this.Archivo_notificaciondif.directorio =response.data[0]['Archivo_notificaciondif_directorio'];
         this.Archivo_notificaciondif.ext = response.data[0]['Archivo_notificaciondif_ext'];


         this.Archivo_notificacionAutoridad.nombreOriginal =response.data[0]['Archivo_notificacionautoridad_nombreOriginal'];
         this.Archivo_notificacionAutoridad.id =response.data[0]['Archivo_notificacionautoridad_id'];
         this.Archivo_notificacionAutoridad.hayArchivo =response.data[0]['Archivo_notificacionautoridad_hayArchivo'];
         this.Archivo_notificacionAutoridad.nombreInterno =response.data[0]['Archivo_notificacionautoridad_nombreinterno'];
         this.Archivo_notificacionAutoridad.directorio =response.data[0]['Archivo_notificacionutoridad_directorio'];
         this.Archivo_notificacionAutoridad.ext = response.data[0]['Archivo_notificacionautoridad_ext'];
        

         this.Archivo_notificacionPFN.nombreOriginal =response.data[0]['Archivo_notificacionPFN_nombreOriginal'];
         this.Archivo_notificacionPFN.id =response.data[0]['Archivo_notificacionPFN_id'];
         this.Archivo_notificacionPFN.hayArchivo =response.data[0]['Archivo_notificacionPFN_hayArchivo'];
         this.Archivo_notificacionPFN.nombreInterno =response.data[0]['Archivo_notificacionPFN_nombreinterno'];
         this.Archivo_notificacionPFN.directorio =response.data[0]['notificacionutoridad_directorio'];
         this.Archivo_notificacionPFN.ext = response.data[0]['Archivo_notificacionPFN_ext'];
  

           }
      ).catch(
        error =>{
          console.log(error);
        }
      )

/*
      datos.then( response => {
        console.log(JSON.stringify(response.data));
      }).catch(error => {
        console.log(JSON.stringify(error.data));
      });*/


    },
    guardar__iraDashboard() {
      this.$router.push("/dashboard");
    },

    cerrarIncidente(){

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
         } )
      .catch( error => { console.log(JSON.stringify(error.data))});

    },

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

   // if ($this.$nextTick){
      this.cargarDatos();
  //  }

    

  },

  data() {
    return {

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

