<template>

    <v-row>
      <v-card width="100%">
        <v-card-title>{{titulo}} </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="6">
            <uploadFile2 
                
                directorio="/uploads/investigacion"
                :HayArchivo ="sihayarchivo"
                :nombreArchivo="nombreDelArchivo"
                :incidenteid ="incidenteId"
                :archivoId="archivoId"
                :action_a_Ejecutar="action_a_ejecutar"
                modulo="investigacion"
                :campoState="campo">
                </uploadFile2> 
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
              <v-btn
                :loading="loading"
                :disabled="loading"
                color="primary"
                @click="impresion"
                block
              >
                <v-icon right dark> mdi-printer </v-icon>

                Imprimir
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
    
</template>

<script>
import uploadFile2 from '@/components/manipulacionArchivos/uploadFile2.vue';
export default {
    name : 'ArchivoImpresionComponente',
    data() {
      return {
        loading: false
      }
    },

    components :{
        uploadFile2
    },

    props : {

          placeholder : { type:String },

          titulo :{ type: String},
          //valorcombo : { type:String , default: ''},
          incidenteId : { type: String , default : '0'},
          archivoId : {type:String, default :'0'},
          action_plan :{type:Boolean , default :false},
          nombreDelArchivo:{ type:String , default : 'Sin asignar'},
          sihayarchivo:{type:Boolean , default :false},
          action_a_ejecutar :{ type:String , default : 'Sin asignar'},
          campo :{ type:String , default : 'Sin asignar'}
    } ,

    methods :{
        
        impresion(){
            alert("En espera de configuracion ");
        }

    }
    
}
</script>
