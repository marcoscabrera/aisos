<template>

   
      <v-card width="100%">
        <v-card-title>{{titulo}} </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4">

                 <v-text-field class="marginTop"
                        :value="titulo"
                        label="Solo"
                        solo
                        readonly
                ></v-text-field>

            </v-col>
            <v-col cols="12" xs="12" sm="12" md="8" lg="8">



                
                  <uploadFile4
                  :archivoId ="archivoId"
                  :action_a_Ejecutar ="action_a_ejecutar"
                 >
                 </uploadFile4>
           
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

    
</template>

<script>
//import uploadFile2 from '@/components/manipulacionArchivos/uploadFile2.vue';
export default {
    name : 'ArchivoImpresionComponente',
    data() {
      return {
        loading: false
      }
    },

    components :{

        uploadFile4 :() => import('@/components/manipulacionArchivos/uploadFile4.vue' )

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
<style >
.marginTop{
    margin-top: 14px !important;
}
</style>