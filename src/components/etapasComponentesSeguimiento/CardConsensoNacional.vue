<template>
         <v-card width="100%">
        <v-card-title> CONSCENSO NACIONAL </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="4" md="4">
              <v-select
                :value="this.$store.state.seguimiento.estatus_consenso"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="Conscenso Nacional"
                dense
                filled
                @change="asignarValor($event)"
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="8" md="8">

              <!--  <uploadFile2 
                 :mostrarMensajeValidacion ="this.$store.state.uivars.uivars_error_seguimiento_seguimiento_documentos_docto"
          
                directorio="/uploads/abordaje"
                :HayArchivo ="sihayarchivo"
                
                :nombreArchivo = "nombreDelArchivo"
                :incidenteid ="incidenteId"
                :archivoId="archivoId"
                action_a_Ejecutar="action_abordaje_documentos"
                modulo="abordaje"
                campoState="seguimiento_documentos_docto">
                </uploadFile2>  -->
                <uploadFile4 v-if="verCombo"
                   :archivoId ="this.$store.state.seguimiento.id_consensodocto"
                   action_a_Ejecutar ="action_seguimiento_id_consensodocto"
                   :variableContador=  "this.$store.state.seguimiento.doctosCargados"
                   action_variableContador ="action_seguimiento_doctosCargados">
                
                  </uploadFile4>

            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
</template>

<script >
   

    export default {
      
      name: 'cardDocumentosOficiales', 

      props :{

          valorcombo :      {  type:String  , default : ''},
          incidenteId :     {  type: String , default : '0'},
          archivoId :       {  type:String  , default : '0'},
          action_plan :     {  type:Boolean , default : false},
          nombreDelArchivo: {  type:String  , default : 'Sin asignar'},
          sihayarchivo:     {  type:Boolean , default : false},

      },

      components : {
           
           uploadFile4 : () => import('@/components/manipulacionArchivos/uploadFile4.vue')

      },

      data() {

          return {
               itemsOpciones: ["CONFIRMADO", "POR CONFIRMAR"],
               verCombo : true,
          }
      },

      methods : {
         asignarValor(event){

            
        // console.log(event);

           event == "CONFIRMADO"? this.verCombo = true : this.verCombo = false;
           this.$store.dispatch('action_seguimiento_estatus_consenso',event ) ;
          
          
            //t//his.$store.dispatch("action_abordaje_documentos", event);
         }
      }

    }

   
</script>

<style scoped>

</style>