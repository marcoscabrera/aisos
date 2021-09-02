<template>
    <v-card width="100%">
        <v-card-title> </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="4" >

                <v-text-field class="marginTop"
                        :value="texto"
                        label="Solo"
                        solo
                        readonly
                ></v-text-field>

            </v-col>
            <v-col cols="12" xs="12" sm="12" md="8">
                  
                  <ComponenteDocumentoEnLinea_cierre :name ="id"
                  :id="id"
                  :nombre_de_archivo_original="nombre_de_archivo_original">
                  </ComponenteDocumentoEnLinea_cierre>
            </v-col>
          </v-row>
        </v-card-text>
     </v-card>
</template>

<script>
  

    export default {

        name: 'cardDocumentoEnCierre',

        components : {
            
            ComponenteDocumentoEnLinea_cierre :() => import("@/components/manipulacionArchivos/ComponenteDocumentoEnLinea_cierre.vue")

        },

        props : {

          
            
            texto                      : { type:String, default: 'En Espera de Información'},
            id                         :   String,
            nombre_de_archivo_original :   String

         

         

        },

        data() {

            return {

                valor:true
            }
        }



    }
</script>

<style >
.marginTop{
    margin-top: 14px !important;
}
</style>