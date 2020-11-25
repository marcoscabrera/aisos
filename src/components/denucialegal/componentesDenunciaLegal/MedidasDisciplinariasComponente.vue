<template>
    <v-row>
      <v-card width="100%">
        <v-card-title>IMPLEMENTAR MEDIDAS DISCIPLINARIAS LIGADAS AL RESULTADO DE LAS
          DENUNCIAS </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
             <v-select
                :value="valorcombo"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="MEDIDAS"
                dense
                filled
                @change="asignarValor($event)"
              >
             </v-select>
            </v-col>
          </v-row>

          <v-row>
               <v-col cols="12" xs="12" sm="6" md="6">
             <!-- aqui va fileupload
                placeholder=" Adjuntar  minuta de reunion de valoracion integral con Concenso y firmas"
            
              -->
                <uploadFile2 
                
                directorio="/uploads/denuncia"
                :HayArchivo ="sihayarchivo"
                
                :nombreArchivo = "nombreDelArchivo"
                :incidenteid ="incidenteId"
                :archivoId="archivoId"
                action_a_Ejecutar="action_consenso_docto"
                modulo="denuncia"
                campoState="seguimiento_notificaciondif_docto">
                </uploadFile2> 
               </v-col>
          </v-row>
        </v-card-text>
      </v-card>
   </v-row>
</template>

<script >
   // import Vue from 'vue'

    export default {

        name :'MedidasDisciplinariasComponente',

        props :{
          valorcombo    : { type:String , default: ''},
          incidenteId   : { type: String , default : '0'},
          archivoId     : {type:String, default :'0'},
          action_plan      :{type:Boolean , default :false},
          nombreDelArchivo:{ type:String , default : 'Sin asignar'},
          sihayarchivo:{type:Boolean , default :false},
        },
           data() {

          return {
               itemsOpciones: ["SI", "NO", "POR CONFIRMAR"],
          }
      },

      methods : {
         asignarValor(event){

            this.$store.dispatch("action_notificaciondif", event);
         }
      }

    }
</script>

<style scoped>

</style>