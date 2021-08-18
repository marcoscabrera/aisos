<template>
      <v-card width="100%">
        <v-card-title>    ACTA DE HECHOS Y ACTA DE VALORACION
 </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <!-- <v-select
                :value="this.$store.state.seguimiento."
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="ACTA DE HECHOS"
                dense
                filled
                @change="asignarValor($event)"
              >
              </v-select> -->

              <uploadFile4
               :archivoId ="this.$store.state.seguimiento.id_ActaHechos"
                action_a_Ejecutar ="action_seguimiento_id_ActaHechos">
              </uploadFile4>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
             <!-- aqui va fileupload 
                <uploadFile2 
                 :mostrarMensajeValidacion ="this.$store.state.uivars.uivars_error_seguimiento_seguimiento_actavaloracion_docto"
          
                directorio="/uploads/seguimiento"
                :HayArchivo ="sihayarchivo"
                
                :nombreArchivo = "nombreDelArchivo"
                :incidenteid ="incidenteId"
                :archivoId="archivoId"
                action_a_Ejecutar="action_actavaloracion_docto"
                modulo="seguimiento"
                campoState="seguimiento_actavaloracion_docto">
                </uploadFile2> -->
                
                <uploadFile4
                :archivoId ="this.$store.state.seguimiento.id_ActaValoracion"
                action_a_Ejecutar ="action_seguimiento_id_ActaValoracion">
              </uploadFile4>

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
</template>

<script >


export default {

      name: 'cardNotificacionPersona', 

      props :{

          valorcombo : { type:String , default: ''},
          incidenteId : { type: String , default : '0'},
          archivoId : {type:String, default :'0'},
          action_plan :{type:Boolean , default :false},
          nombreDelArchivo:{ type:String , default : 'Sin asignar'},
          sihayarchivo:{type:Boolean , default :false},

      },

      components : {
           
           uploadFile4 : () => import('@/components/manipulacionArchivos/uploadFile4.vue')

      },

      data() {

          return {
               itemsOpciones: ["SI", "NO", "POR CONFIRMAR"],
          }
      },

      methods : {
         asignarValor(event){

            this.$store.dispatch("action_actavaloracion", event);
         }
      }

    }
</script>

<style scoped>

</style>