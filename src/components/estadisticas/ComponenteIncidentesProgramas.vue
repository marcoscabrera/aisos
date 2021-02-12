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
             v-bind:abierto="12"
             v-bind:cerrado ="31"
             v-bind:pendiente ="5"
             identificador="c1" titulo ="ACOGIMIENTO FAMILIAR TIJUANA"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="10"
             v-bind:cerrado ="5"  
              v-bind:pendiente ="5"           
              identificador="c2" titulo ="ACOGIMIENTO FAMILIAR MORELIA"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="5"
             v-bind:cerrado ="5" 
              v-bind:pendiente ="5"
              identificador="c3" titulo ="ACOGIMIENTO FAMILIAR CDMNX"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
               v-bind:abierto="10"
             v-bind:cerrado ="5" 
              v-bind:pendiente ="8"
              identificador="c4" titulo ="ACOGIMIENTO FAMILIAR TUXTLA"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="12"
             v-bind:cerrado ="31"
              v-bind:pendiente ="5"
              identificador="c5" titulo ="ACOGIMIENTO FAMILIAR COMITAN"></ComponenteDatoIncidente>
         </v-col>
         <v-col cols="12" xm="12" sm="6" md="4" lg="4">
             <ComponenteDatoIncidente
             v-bind:abierto="11"
             v-bind:cerrado ="13"
              v-bind:pendiente ="5"
              identificador="c6" titulo ="FORTALECIMIENTO FAMILIAR HUEHUETOCA"></ComponenteDatoIncidente>
         </v-col>
     </v-row>






  </v-container>
</template>

<script>
import ComponenteDatoIncidente from '@/components/estadisticas/ComponenteDatoIncidente.vue';

    export default {

        components :{

            ComponenteDatoIncidente
        }
        
    }
</script>

<style scoped>

</style>