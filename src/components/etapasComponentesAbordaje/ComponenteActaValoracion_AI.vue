<template>
      <v-card width="100%">
        <v-card-title>    ACTA DE VALORACION 
 </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="4" md="4">

            </v-col>
            <v-col cols="12" xs="12" sm="8" md="8">
             <!-- aqui va fileupload -->
                <uploadFile4 
                :archivoId ="this.$store.state.abordaje.abordaje_docto_actavaloracion"
                 action_a_Ejecutar ="action_abordaje_docto_actavaloracion" >
                           
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

            this.$store.dispatch("action_seguimiento_id_ActaValoracion", event);
         }
      }

    }
</script>

<style scoped>

</style>