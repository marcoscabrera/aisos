import PanelDenunciaComponentes from '@/components/usuarios/componentes/PanelDenunciaComponentes.vue';
import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-btn
                black 
                dense @click="generarDocumento">
                    generar Archivos
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import apiPermisosimpresion from '@/apialdeas/apiPermisosimpresion.js';
    export default {
        
       methods :{

           generarDocumento(){

                 let parametros  = { incidenteid:  10 ,etapa:'Valoracion Inicial', tipo : 'sin autorizacion' };

                 

               let p=   apiPermisosimpresion.Post_generarDocumentoDeImpresion(parametros, this.$store);
               
                p
               .then( response => { 
                   
                   console.log(JSON.stringify(response.data));
                   
                   })
               .catch( error => { console.log(JSON.stringify(error.data))});
           }
       }

    }
</script>

<style scoped>

</style>