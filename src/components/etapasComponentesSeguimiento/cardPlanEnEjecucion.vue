<template>
      <v-card width="100%">
        <v-card-title> PLAN EN EJECUCIÓN </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-select
                :value="valorcombo"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="PROGRAMA"
                dense
                filled
                 @change="asignarValor($event)"
              >
              </v-select>
            </v-col>

            <v-col cols="12" xs="12" sm="6" md="6">
     

            <uploadFile2 
            
             directorio="/uploads/seguimiento"
             :HayArchivo ="sihayarchivo"
            
             :nombreArchivo = "nombreDelArchivo"
             :incidenteid ="incidenteId"
             :archivoId="archivoId"
             action_a_Ejecutar="action_plan_docto"
             modulo="seguimiento"
             campoState="seguimiento_plan_docto">
              </uploadFile2> 
         
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
</template>

<script >
  

    export default {
      
      name: 'cardPlanEnEjecucion', 

      props :{

          valorcombo : { type:String , default: ''},
          incidenteId : { type: String , default : '0'},
          archivoId : {type:String, default :'0'},
          action_plan :{type:Boolean , default :false},
          nombreDelArchivo:{ type:String , default : 'Sin asignar'},
          sihayarchivo:{type:Boolean , default :false},

      },

      components : {
           
           uploadFile2 : () => import('@/components/manipulacionArchivos/uploadFile2.vue')

      },

      data() {

          return {
               itemsOpciones: ["SI", "NO", "POR CONFIRMAR"],
          }
      },

      methods : {
         asignarValor(event){

            this.$store.dispatch("action_plan", event);
         }
      }

    }
</script>

<style scoped>

</style>