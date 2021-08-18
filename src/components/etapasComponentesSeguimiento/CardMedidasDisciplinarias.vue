<template>
          <v-card width="100%">
             <v-card-title> MEDIDAS DISCIPLINARIAS APLICADAS </v-card-title>
         <v-card-text>
          
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-select
                :value="this.$store.state.seguimiento.estatus_medidas"
                :item-value="valorcombo"
                :items="itemsOpciones"
                label="Informa a Oficina regional"
                dense
                filled
                @change="asignarValor($event)"
              >
              </v-select>
            </v-col>

            <v-col cols="12" xs="12" sm="6" md="6">

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
                </uploadFile2> -->

                <uploadFile4
                 :archivoId ="this.$store.state.seguimiento.id_medidasdocto"
                 action_a_Ejecutar ="action_seguimiento_id_medidasdocto">
                 >

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
               itemsOpciones: ["SI", "NO", "PENDIENTE"],
               verCombo : true
          }
      },

      methods : {
         asignarValor(event){

             console.log(event);

             this.$store.dispatch('action_seguimiento_estatus_medidas',event ) ;

         }
      }

    }

   
</script>

<style scoped>

</style>