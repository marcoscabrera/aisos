<template>
    
      <v-card width="100%">
        <v-card-title>CONSENSO NACIONAL PARA DENUNCIA
           <span class="paraCardTitulo"> Documento Adjunto es Obligatorio</span> 
           </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
             <v-select
                :value="valorcombo"
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
                <!--
                  <uploadFile2 
                
                directorio="/uploads/denuncia"
                :HayArchivo ="sihayarchivo"
                
                :nombreArchivo = "nombreDelArchivo"
                :incidenteid ="incidenteId"
                :archivoId="archivoId"
                action_a_Ejecutar="action_consensodocto"
                modulo="denuncias"
                campoState="denuncialegal_consensodocto">
                </uploadFile2>  -->

               
                <uploadFile4 v-if="verCombo"
                   :archivoId ="this.$store.state.denuncias.denuncialegal_consensodocto"
                 action_a_Ejecutar ="action_consensodocto">
            
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
               itemsOpciones: ["CONFIRMADO", "POR CONFIRMAR"],
               verCombo:true,
          }
      },

      methods : {
         asignarValor(event){

            this.$store.dispatch("action_consenso", event);
            
            event == "CONFIRMADO"? this.verCombo = true : this.verCombo = false;

         }
      }

    }
</script>

<style scoped>

</style>