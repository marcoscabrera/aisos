<template>
  <v-card width="100%" >
    <v-card-title>  </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"               
               class ="text-center font-weight-black px-4 pt-4 pb-3"> 
              <h6> Medidas Integrales </h6>
              
                  En este espacio adjunta el documento de <strong>Medidas integrales</strong>. <br>
                  En caso de no contar con el en este momento , lo podras adjuntar mas adelante 
                  en el apartado de seguimiento.
                
              
        </v-col>
        <v-col  cols="12" xs="12" sm="6" md="6">


            <!-- <component :is="activarComponente" 
             v-bind="asignandoProps">            
              </component>     -->  
          
            <uploadFile2 
             :mostrarMensajeValidacion ="this.$store.state.uivars.uivars_error_cardMedidasIntegrales"
             directorio="/uploads/medidasintegrales"
             :HayArchivo ="sihayarchivo"
             :datosDelArchivo = "objetoDatosArchivo"
             :nombreArchivo = "nombreDelArchivo"
                      :incidenteid ="incidenteId"
                      :archivoId="archivoId"
                      tipoDeArchivo="*.pdf"
                      action_a_Ejecutar="action_medidasintegrales"
                      modulo="valoracion"
                      campoState="etapavaloracion_medidasintegrales">
              </uploadFile2> 

      

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
//import uploadFile from  '@/components/manipulacionArchivos/uploadFile.vue';
export default {



  components : {

    uploadFile2:() => import("@/components/manipulacionArchivos/uploadFile2.vue")
  },
  props: {
     archivoId : { type:String ,default :'0'},
     incidenteId :  { type:String ,default :'0'},
     sihayarchivo:{ type:Boolean , default:false},
     archivo : { type:String ,default :'SIN ASIGNAR'},
     objetoDatosArchivo : {type:Array},
     nombreDelArchivo : { type: String}
  },

 computed : {

   valorxx(){
     return this.$store.state.valoracion.etapavaloracion_medidasintegrales;
   },

   activarComponente () {

      return "uploadFile";
    },

    asignandoProps(){
     
     return {
        directorio : "/uploads/medidasintegrales",
        incidenteid : this.incidenteId,
        archivoId : this.archivoId
     }

    }
  
 },
  


  methods: {

  
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
        console.log("**** =CARDMEDIDASINTEGRALES == MOUNTED NEXT-TICK ********");
       console.log("si valor de  valoracionintegral_medidasintegrales : " + this.$store.state.valoracion.etapavaloracion_medidasintegrales);
      this.$store.state.valoracion.etapavaloracion_medidasintegrales != '0' ?
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
      hayPlan :false
    };
  },
};
</script>

<style lang="scss" scoped>
</style>