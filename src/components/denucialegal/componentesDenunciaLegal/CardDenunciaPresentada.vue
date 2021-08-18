<template>
    
      <v-card width="100%">
        <v-card-title>DENUNCIA PRESENTADA 
          <span class="paraCardTitulo"> Documento Adjunto es Obligatorio</span> 
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="4" md="4">
             <v-select
                :value="this.$store.state.denuncias.denuncialegal_denunciapresentada"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="ESTADO"
                dense
                filled
                @change="asignarValor($event)"
              >
             </v-select>
            </v-col>

               <v-col cols="12" xs="12" sm="8" md="8">
             <!-- aqui va fileupload
                placeholder=" Adjuntar  minuta de reunion de valoracion integral con Concenso y firmas"
            
              -->
                <uploadFile4 v-if="verCombo"
                   :archivoId ="this.$store.state.denuncias.denuncialegal_docto_denunciapresentada"
                    action_a_Ejecutar ="action_denuncialegal_docto_denunciapresentada">
            
                  >
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
          valorcombo    : { type:String , default: ''},
          incidenteId   : { type: String , default : '0'},
          archivoId     : {type:String, default :'0'},
          action_plan      :{type:String , default :''},
          nombreDelArchivo:{ type:String , default : 'Sin asignar'},
          sihayarchivo:{type:Boolean , default :false},
        },
        components : {
          
          uploadFile4
           
        },
           data() {

          return {
               itemsOpciones: ["SI", "NO","PENDIENTE"],
               verCombo : true
          }
      },

      methods : {
         asignarValor(event){
            /* comentario */
            event == "SI" ? this.verCombo = true : this.verCombo = false;
            this.$store.dispatch("action_denuncialegal_denunciapresentada", event);
         }
      }

    }
</script>

<style scoped>

</style>