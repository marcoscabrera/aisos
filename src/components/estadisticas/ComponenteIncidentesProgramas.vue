<template>
 <v-container name="xxxxx">
     <v-row>
         <v-col cols="12">
            <h3>Numero de Incidentes por Programa</h3>
         </v-col>
     </v-row>
     <v-row>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente 
             v-bind:abierto="abierto_tijuana"
             v-bind:cerrado ="cerrado_tijuana"
             v-bind:pendiente ="0"
             identificador="c1" titulo ="ACOGIMIENTO FAMILIAR TIJUANA"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="abierto_morelia"
             v-bind:cerrado ="cerrado_morelia"  
              v-bind:pendiente ="0"           
              identificador="c2" titulo ="ACOGIMIENTO FAMILIAR MORELIA"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="abierto_cdmx"
             v-bind:cerrado ="cerrado_cdmx" 
              v-bind:pendiente ="0"
              identificador="c3" titulo ="ACOGIMIENTO FAMILIAR CDMNX"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
               v-bind:abierto="abierto_tuxtla"
             v-bind:cerrado ="cerrado_tuxtal" 
              v-bind:pendiente ="0"
              identificador="c4" titulo ="ACOGIMIENTO FAMILIAR TUXTLA"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="abierto_comitan"
             v-bind:cerrado ="cerrado_comitan"
              v-bind:pendiente ="0"
              identificador="c5" titulo ="ACOGIMIENTO FAMILIAR COMITAN"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="abierto_huehuetoca"
             v-bind:cerrado ="abierto_huehuetoca"
              v-bind:pendiente ="0"
              identificador="c6" titulo ="FORTALECIMIENTO FAMILIAR HUEHUETOCA"></ComponenteDatoIncidente>
         </v-col>
     </v-row>






  </v-container>
</template>

<script>
import ComponenteDatoIncidente from '@/components/estadisticas/ComponenteDatoIncidente.vue';

    export default {

        props :{

            datos :{ type:Array}

        },

        components :{

            ComponenteDatoIncidente
        }
        
    }
</script>

<style scoped>

</style>