<template>
  <v-card
    width="100%"
  
  >
     <v-list-item two-line>
      <v-list-item-content>
       <v-list-item-title class="subheadline">
         <strong>Total De Incidentes de Desprotección Infantil</strong>
        </v-list-item-title>
        <v-list-item-subtitle><strong></strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

       <canvas id="planet-chart">

       </canvas>
  </v-card>

</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data2.js';
    export default {

mounted () {
   this.createChart('planet-chart', this.planetChartData);
},
data() {
  return {
    planetChartData: planetChartData
  }
},
 methods: {
    createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    console.log(ctx);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
    console.log(myChart);
  }
}
        
    }
</script>

<style scoped>

</style>