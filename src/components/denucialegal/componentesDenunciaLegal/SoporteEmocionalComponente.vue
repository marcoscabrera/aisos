<template>

   
      <v-card width="100%">
        <v-card-title >
          SOPORTE EMOCIONAL PARA LOS NNAJ INVOLUCRADOS
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select 
              :value = "valorComboAsesorContacto"
              :item-value="valorComboAsesorContacto"
              :items="itemsCargos" label="CONTACTO" dense filled
               @change="asignarValor($event)">
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
              :value="valorComboAsesorAntes"
              :item-value="valorComboAsesorAntes"
              
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO ANTES"
                dense
                filled
                 @change="asignarValor2($event)"
              >
              </v-select>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4">
              <v-select
                :value ="valorComboAsesorDurante"
                :item-value="valorComboAsesorDurante"
                :items="itemsCargos"
                label="ASESORIA Y ACOMPAÑAMIENTO DURANTE"
                dense
                filled
                 @change="asignarValor3($event)"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
  
</template>

<script >
  

    export default {

        name : 'SoporteEmocionalComponente.vue', 

        props : {

          valorComboAsesorDurante: {type: String},
          valorComboAsesorAntes : {type: String},
          valorComboAsesorContacto :{type :String}


        },

        methods :{

           asignarValor(event) {

             this.$store.dispatch('action_soporteemocionalcontacto',event);

           },

           asignarValor2(event) {

           this.$store.dispatch('action_soporteemocionalantes',event);
           },

          asignarValor3(event) {
            
          this.$store.dispatch('action_soporteemocionaldurante',event);
          }
        },
        data () {
            return {
                 itemsCargos: ["SI", "NO", "EN PROCESO"],
            }
        }


    }
</script>

<style scoped>

</style>