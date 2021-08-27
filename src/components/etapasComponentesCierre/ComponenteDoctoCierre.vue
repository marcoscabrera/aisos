<template>
    <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="4" md="4">
              <v-checkbox
                :label="labelCheckbox"
                :input-value="inputValueCheckbox"
                readonly
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="8" md="8">
                <ComponenteDocumentoEnLinea
                
                >

                </ComponenteDocumentoEnLinea>
            </v-col>
          </v-row>
        </v-card-text>
     </v-card>
</template>

<script>
  

  // import ComponenteDocumentoEnLinea from '@/components/manipulacionArchivos/ComponenteDocumentoEnLinea.vue';

    export default {

        name: 'cardDocumentoEnCierre',

        components : {

            ComponenteDocumentoEnLinea :()=> import ('@/components/manipulacionArchivos/ComponenteDocumentoEnLinea.vue');
        },

        props : {

            labelCheckbox :{ type:String, default: ''} ,
            
            inputValueCheckbox :{ type:Boolean, default: false},

            nombreArchivo :{ type: String , default:'No existe ningun Archivo.'},

            colorIcono :{ type:String , default : 'yellow'}

        },

        data() {

            return {

                valor:true
            }
        }



    }
</script>

<style scoped>

</style>