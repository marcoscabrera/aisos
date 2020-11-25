<template>
    <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-checkbox
                :label="labelCheckbox"
                :input-value="inputValueCheckbox"
                readonly
              ></v-checkbox>
            </v-col>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-bottom-navigation >
                <v-btn >
                  <span>{{nombreArchivo}}</span>

                  <v-icon :color="colorIcono" :large="valor">mdi-file-document</v-icon>
                </v-btn>
              </v-bottom-navigation>
            </v-col>
          </v-row>
        </v-card-text>
     </v-card>
</template>

<script>
  

    export default {

        name: 'cardDocumentoEnCierre',

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