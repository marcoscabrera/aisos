<template>
  <v-container name="contenedorestadisticas">
    <h2>en Estadisticas.</h2>
    <ComponenteSelectorFechas></ComponenteSelectorFechas>
    <ComponenteTotal v-if ="this.$store.state.estadisticas.verEstadisticas"></ComponenteTotal>

    <ComponenteIncidentesProgramas v-if ="this.$store.state.estadisticas.verEstadisticas"></ComponenteIncidentesProgramas>
     <ComponenteBarStack></ComponenteBarStack>
    
     <!-- 
       
       <ComponenteChartjs v-if ="this.$store.state.estadisticas.verEstadisticas"></ComponenteChartjs>
   
       <ComponenteDatosIncidentesVarios></ComponenteDatosIncidentesVarios>
  
   
    <ComponenteTotalesSuma></ComponenteTotalesSuma>
   
    <ComponenteVictimasTotales></ComponenteVictimasTotales>
    <ComponenteBarStackVictimas></ComponenteBarStackVictimas>
    <ComponenteAgresoresTotales></ComponenteAgresoresTotales>
    <ComponenteBarStackAgresores></ComponenteBarStackAgresores>
 
  
   -->
     </v-container>
</template>
<script>

import  ComponenteIncidentesProgramas from '@/components/estadisticas/ComponenteIncidentesProgramas.vue';
import  ComponenteSelectorFechas from '@/components/estadisticas/ComponenteSelectorFechas.vue';
import ComponenteTotal from '@/components/estadisticas/ComponenteTotal.vue';

//import ComponenteChartjs  from '@/components/estadisticas/ComponenteChartjs.vue';

//import  BarChart from '@/components/estadisticas/BarChart.vue';
//import  ComponenteDatosIncidentesVarios from '@/components/estadisticas/ComponenteDatosIncidentesVarios.vue';
import ComponenteBarStack from '@/components/estadisticas/ComponenteBarStack.vue';

/*
import ComponenteTotalesSuma from '@/components/estadisticas/ComponenteTotalesSuma.vue';
import ComponenteVictimasTotales from '@/components/estadisticas/ComponenteVictimasTotales.vue';
import ComponenteBarStackVictimas from '@/components/estadisticas/ComponenteBarStackVictimas.vue';
import ComponenteAgresoresTotales from '@/components/estadisticas//ComponenteAgresoresTotales.vue'
import ComponenteBarStackAgresores from '@/components/estadisticas//ComponenteBarStackAgresores.vue'
*/
export default {
  name: "Estadisticas",

  data() {
    return {
      verEstadisticas : false
    };
  },
  components : {
    //ComponenteDatosIncidentesVarios
    ComponenteIncidentesProgramas,
    ComponenteSelectorFechas,
    ComponenteTotal,
    ComponenteBarStack
 //   ComponenteChartjs,
   
   // ,,
   //ComponenteTotalesSuma,
    //ComponenteVictimasTotales,
   // ComponenteBarStackVictimas
    //,ComponenteAgresoresTotales,
   // ComponenteBarStackAgresores

  } ,

  methods: {
    saludo() {
      console.log("saludos estas en Estadisticas");
    },
  },

  mounted() {
    this.saludo();
  },
};
</script>

<style scoped>
</style>