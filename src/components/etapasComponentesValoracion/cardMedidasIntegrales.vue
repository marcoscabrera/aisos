<template>
  <v-card width="100%" >
    <v-card-title>  </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="6"               
               class ="text-center "> 
              <h6 class="font-weight-black px-4 pt-4 pb-3"> Acta de valoración Integral </h6>
              
              
                  En este espacio adjunta el documento de <strong>Acta de Valoración Integral</strong>. <br>
                  En caso de no contar con el en este momento , lo podras adjuntar mas adelante 
                  en el apartado de seguimiento.
                
              
        </v-col>
        <v-col  cols="12" xs="12" sm="6" md="6">


            <!-- <component :is="activarComponente" 
             v-bind="asignandoProps">            
              </component>     -->  
          
           <!--
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
              -->

              <uploadFile4 ref="subirActaValoracion"
               :archivoId ="this.$store.state.valoracion.etapavaloracion_medidasintegrales"
                action_a_Ejecutar ="action_medidasintegrales"
              >
              </uploadFile4>

      

        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
//import uploadFile from  '@/components/manipulacionArchivos/uploadFile.vue';
export default {

  watch :{
    "$store.state.valoracion.etapavaloracion_medidasintegrales": function() {
       
       /* Observamos el valor de esta variable, que guarda el valor del documento 
       de acta de hechos */
        
       // console.log("monitoreando el valor de $store.state.valoracion.etapavaloracion_medidasintegrales " + this.$store.state.valoracion.etapavaloracion_medidasintegrales);
       /* Para mostrar el componente uploadFile4 */
       ///eventBus.$emit('cargarArchivo_con_id',this.$store.state.incidentes.etapainicial_actavaloracion_docto);
       this.$refs.subirActaValoracion.cargarArchivo_con_id(this.$store.state.valoracion.etapavaloracion_medidasintegrales);
      // this.verActaDeHechos = true;
    }
  },



  components : {

    uploadFile4:() => import("@/components/manipulacionArchivos/uploadFile4.vue")
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
      this.$refs.subirActaValoracion.cargarArchivo_con_id( this.$store.state.valoracion.etapavaloracion_medidasintegrales );
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