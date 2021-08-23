<template>
      <v-card width="100%">
        <v-card-title>  SE CUENTA CON UN PLAN DE RECUPERACIÓN EMOCIONAL CON SEGUIMIENTO
       </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="4" md="4">
              <v-select
                :value="this.$store.state.seguimiento.estatus_planrecuperacion"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="PLAN RECUPERACION EMOCIONAL"
                dense
                filled
                @change="asignarValor($event)"
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="8" md="8">
             <!-- aqui va fileupload -->
                <uploadFile4 v-if="verCombo"
                  :archivoId ="this.$store.state.seguimiento.id_NotificacionPlan"
                   action_a_Ejecutar ="action_seguimiento_id_NotificacionPlan"
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
               verCombo : true,
          }
      },

      methods : {

         asignarValor(event){
           
             event == "SI" ? this.verCombo = true : this.verCombo = false;
             this.$store.dispatch("action_seguimiento_estatus_planrecuperacion", event);

         }
      }

    }
</script>

<style scoped>

</style>