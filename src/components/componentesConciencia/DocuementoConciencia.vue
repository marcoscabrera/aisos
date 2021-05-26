<template>
  <v-card width="100%" >
    <v-card-title> Plan y cronograma </v-card-title>
    <v-card-text>
      <v-row>
       <!-- <v-col cols="12" xs="12" sm="6" md="6">

          <v-select
            :value="this.$store.state.conciencia.conciencia_estatusplan"
            :item-value="this.$store.state.conciencia.conciencia_estatusplan"
            :items="itemsOpcionesEstatus"
            label="ESTATUS"
            dense
            filled
            @change="asignarValorComboo($event)"
          >
          </v-select>

          <v-alert v-if="this.$store.state.uivars.uivars_error_conciencia_estatusplan" type="error">
           Debe de seleccionar una opción
          </v-alert>

        </v-col> -->
        <v-col  cols="12" xs="12" sm="12" md="12">


            <!-- <component :is="activarComponente" 
             v-bind="asignandoProps">            
              </component>     -->  
          
            <uploadFile2 
             :mostrarMensajeValidacion ="this.$store.state.uivars.uivars_error_conciencia_docto"
             directorio="/uploads/concienciaprevencion"
             :HayArchivo ="sihayarchivo"
             :datosDelArchivo = "objetoDatosArchivo"
             :nombreArchivo = "nombreDelArchivo"
                      :incidenteid ="incidenteId"
                      :archivoId="archivoId"
                      tipoDeArchivo="*.pdf"
                      action_a_Ejecutar="action_conciencia_docto"
                      modulo="conciencia"
                      campoState="conciencia_docto">
              </uploadFile2> 

      

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

import eventBus from "@/eventBus.js";

//import uploadFile from  '@/components/manipulacionArchivos/uploadFile.vue';
import apiArchivos from '@/apialdeas/apiArchivos.js';
export default {



  components : {

    uploadFile2:() => import("@/components/manipulacionArchivos/uploadFile2.vue")
  },
  props: {
     archivoId     :  { type:String ,default :'0'},
     incidenteId   :  { type:String ,default :'0'},
     sihayarchivo  :  { type:Boolean , default:false},
     archivo :        { type:String ,default :'SIN ASIGNAR'},
     objetoDatosArchivo : {type:Array},
     nombreDelArchivo : { type: String}
  },

        created () {

          eventBus.$on('cargarArchivoDocumentoConciencia', () => {
            this.cargaArchivo();
    })
        },

 computed : {

 

   activarComponente () {

      return "uploadFile";
    },

    asignandoProps(){
     
     return {
        directorio : "/uploads/concienciaprevencion",
        incidenteid : this.incidenteId,
        archivoId : this.archivoId,

     }

    }
  
 },
  


  methods: {

    asignarValorComboo(evento){

       this.$store.dispatch('action_conciencia_estatusplan',evento);
       this.$store.dispatch('actions_uivars_error_conciencia_estatusplan',false);
    },

   cargaArchivo(){

        console.log(" valor del archivo id    : " + this.$store.state.conciencia.conciencia_docto );
         

      let promesa =    apiArchivos.conseguirArchivo( this.$store.state.conciencia.conciencia_docto ,this.$store.state);

          promesa
         .then( response => { console.log(JSON.stringify(response.data));
            
            this.sihayarchivo =true;
            this.nombreDelArchivo = response.data[0]['nombreOriginal'];
            this.archivoId = response.data[0]['id'];

            console.log( "NOmbre Original del archivo : " + response.data[0]['nombreOriginal']);


         })
         .catch( error => { console.log(JSON.stringify(error.data))});
   },

  
  
  asignarValor(event){
    //console.log(event);
  
   // console.log("valor de a en medidas: " + this.files[0].name);
    this.$store.dispatch('action_medidasintegrales',this.files[0].name);
    return event;
  },

  },
  mounted() {
      
     this.$nextTick(function(){
       console.log("***********************************");
        console.log("**** =documentoconciencia == MOUNTED NEXT-TICK ********");
       console.log("si valor de  conciencia_docto : " +  this.$store.state.conciencia.conciencia_docto);
      this.$store.state.conciencia.conciencia_docto != '0' ?
       this.sihayarchivox =true : this.sihayarchivox=false;

       //this.valorxx(this.$store.state.valoracion.etapavaloracion_medidasintegrales);
      // console.log("this.archivoId : " + this.archivoId);
       console.log("this.sihayarchivox : " + this.sihayarchivox);
      // this.$refs.uploadFile.init();
      //this.$refs.uploadFile.archivoId =  this.$store.state.valoracion.etapavaloracion_medidasintegrales;
      console.log("***********************************");
     })
     
   
     
 },

  
  data() {
    return {
      sihayarchivox :false,
      files: null,
      planycronograma : '',
      hayPlan :false,
      itemsOpcionesEstatus :['Pendiente','En Proceso','Terminado']
    };
  },
};
</script>

<style lang="scss" scoped>
</style>