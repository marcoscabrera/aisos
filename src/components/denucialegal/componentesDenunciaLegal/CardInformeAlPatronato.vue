<template>
    
      <v-card width="100%">
        <v-card-title>INFORMA AL PATRONATO </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <!-- 
                   :value="valorcombo"

              -->
             <v-select
                :value = "this.$store.state.denuncias.denuncialegal_informapatronato"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="ESTADO"
                dense
                filled
                @change="asignarValor($event)"
              >
             </v-select>
            </v-col>

               <v-col cols="12" xs="12" sm="6" md="6">
             <!-- aqui va fileupload
                placeholder=" Adjuntar  minuta de reunion de valoracion integral con Concenso y firmas"
            
              -->
                <uploadFile4
                :archivoId ="this.$store.state.denuncias.denuncialegal_docto_informapatronato"
                 action_a_Ejecutar ="action_denuncialegal_docto_informapatronato">
                </uploadFile4> 
               </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    
</template>

<script >
   // import Vue from 'vue'
   import uploadFile4 from  '@/components/manipulacionArchivos/uploadFile4.vue'

    export default {

        name :'ConsensoComponente',

        props :{
          archivoId     : {type:String, default :'0'},
          valorcombo    : { type:String , default: ''},
          incidenteId   : { type: String , default : '0'},
         
          action_plan      :{type:String , default :''},
          nombreDelArchivo:{ type:String , default : 'Sin asignar'},
          sihayarchivo:{type:Boolean , default :false},
        },
        components : {
          
          uploadFile4
           
        },
           data() {

          return {
               itemsOpciones: ["SI", "NO","NO APLICA","POR CONFIRMAR"],
          }
      },

      methods : {
         asignarValor(event){

            this.$store.dispatch("action_denuncialegal_informapatronato", event);
         }
      }

    }
</script>

<style scoped>

</style>