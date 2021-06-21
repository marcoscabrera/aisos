<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Total por Niveles</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador_niveles">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
         <!-- <p class="text-center">Bajo  <strong> 10 </strong> - Alto  <strong> 10 </strong> - Criticos<strong> 5</strong> 
          </p> -->
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


    const ctx = document.getElementById('identificador_niveles');
    const datos =  this.$store.state.estadisticas.datos_graficas.grafica_tiponivel.datos;
    const etiquetas =  this.$store.state.estadisticas.datos_graficas.grafica_tiponivel.labels;
    const colores  = this.$store.state.estadisticas.datos_graficas.grafica_tiponivel.colores;
    const datax = {
    datasets: [{
      label: 'Tipos de Nivel',
        data: datos,
        backgroundColor : colores,
        borderColor: [
          "#CDA776",
          "#989898"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: etiquetas
} ;//termina datax

const myChart = new Chart(ctx, {
      type: 'pie',
      data: datax,
      options:{
      responsive: true
},
    });

    typeof myChart;


},

data() {
  return {
    planetChartData: planetChartData,
    datax : {
    datasets: [{
      label: 'Tipos de Nivel',
        data: [10, 5,9],
        backgroundColor : [
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)"],
        borderColor: [
          "#CDA776",
          "#989898"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Bajo #10',
        'Alto #5',
        'Criticos #9'
      
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