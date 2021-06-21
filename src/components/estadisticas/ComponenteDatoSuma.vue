<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Total Topologia</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
           <p class="text-center">Interno  <strong> {{this.$store.state.estadisticas.datos_graficas.grafica_topologia[0]}} </strong> - <strong> {{this.$store.state.estadisticas.datos_graficas.grafica_topologia[1]}} </strong> externos
          </p>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>


  </v-card>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data.js';
    export default {
        props: {
            titulo: {
                type: String,
                default: ''
            },
            identificador: {
                type: String,
                default: ''
            },
            abierto :{
                type: Number,
                default: 0
            },
            cerrado : {
                type: Number,
                default: 0
            }
        },

        mounted () {
  // this.createChart('identificador');

     const datos_interno  =this.$store.state.estadisticas.datos_graficas.grafica_topologia[0];
     const datos_externo  =this.$store.state.estadisticas.datos_graficas.grafica_topologia[1];
      

      const datax = {
    datasets: [{
      label: 'Internos vs Externos',
        data: [datos_interno,datos_externo],
        backgroundColor : [
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)"],
        borderColor: [
          "#CDA776",
          "#989898"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Internos',
        'Externos'
      
    ]
} ;//termina datax

      const ctx = document.getElementById("identificador");
      console.log(ctx);

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: datax,
      options: {
      responsive: true
      }
    });
       typeof myChart;
},
data() {
  return {

    planetChartData: planetChartData,

    datax : {
    datasets: [{
      label: 'Internos vs Externos',
        data: this.$store.state.datos_graficas.grafica_topologia,
        backgroundColor : [
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)"],
        borderColor: [
          "#CDA776",
          "#989898"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Internos',
        'Externos'
      
    ]
} ,//termina datax
options: {
      responsive: true
}
  }//termina return
},
 methods: {
    createChart(chartId) {
    const ctx = document.getElementById(chartId);
    console.log(ctx);
    /*
    type: 'pie',
    data: data,
    options: options
    */
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: this.datax,
      options: this.options,
    });
    console.log(myChart);
  }
}
    }
</script>

<style scoped>

</style>