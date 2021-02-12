<template>
  <v-container name="contenedorestadisticas">
    <h2>en Estadisticas</h2>
    <ComponenteSelectorFechas></ComponenteSelectorFechas>
    <ComponenteTotal></ComponenteTotal>
    <ComponenteIncidentesProgramas></ComponenteIncidentesProgramas>
     <ComponenteChartjs></ComponenteChartjs>
    <ComponenteDatosIncidentesVarios></ComponenteDatosIncidentesVarios>
   <ComponenteTotalesSuma></ComponenteTotalesSuma>
    <ComponenteBarStack></ComponenteBarStack>
    <ComponenteVictimasTotales></ComponenteVictimasTotales>
    <ComponenteBarStackVictimas></ComponenteBarStackVictimas>
    <ComponenteAgresoresTotales></ComponenteAgresoresTotales>

    <ComponenteBarStackAgresores></ComponenteBarStackAgresores>
  </v-container>
</template>
<script>

import  ComponenteIncidentesProgramas from '@/components/estadisticas/ComponenteIncidentesProgramas.vue';
import  ComponenteSelectorFechas from '@/components/estadisticas/ComponenteSelectorFechas.vue';
//import  BarChart from '@/components/estadisticas/BarChart.vue';
import  ComponenteDatosIncidentesVarios from '@/components/estadisticas/ComponenteDatosIncidentesVarios.vue';
import ComponenteChartjs  from '@/components/estadisticas/ComponenteChartjs.vue';
import ComponenteTotal from '@/components/estadisticas/ComponenteTotal.vue';
import ComponenteBarStack from '@/components/estadisticas/ComponenteBarStack.vue';
import ComponenteTotalesSuma from '@/components/estadisticas/ComponenteTotalesSuma.vue';
import ComponenteVictimasTotales from '@/components/estadisticas/ComponenteVictimasTotales.vue';
import ComponenteBarStackVictimas from '@/components/estadisticas/ComponenteBarStackVictimas.vue';
import ComponenteAgresoresTotales from '@/components/estadisticas//ComponenteAgresoresTotales.vue'
import ComponenteBarStackAgresores from '@/components/estadisticas//ComponenteBarStackAgresores.vue'
export default {
  name: "Estadisticas",

  data() {
    return {};
  },
  components : {

    ComponenteIncidentesProgramas,ComponenteSelectorFechas
    ,ComponenteDatosIncidentesVarios,ComponenteChartjs,ComponenteTotal
    ,ComponenteBarStack,ComponenteTotalesSuma,ComponenteVictimasTotales,ComponenteBarStackVictimas
    ,ComponenteAgresoresTotales,ComponenteBarStackAgresores

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