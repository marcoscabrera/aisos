<template>
  <v-card
    width="100%"
  
  >
    <v-list-item two-line>
      <v-list-item-content>
      <!-- <v-list-item-title class="subheadline">
          {{titulo}}
        </v-list-item-title> -->
        <v-list-item-subtitle class="text-center"><strong>Total por TIpos de caso</strong></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
           align="center"
          cols="12"
        >
         <canvas id="identificador_tipos">

         </canvas>
        </v-col>

      </v-row>
      <v-row>
        <v-col>
         <!-- <p class="text-center">Bajo  <strong> 10 </strong> - Alto  <strong> 10 </strong> - Criticos<strong> 5</strong> 
          </p>-->
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
/*
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
 */
        mounted () {
     const ctx = document.getElementById('identificador_tipos');
    const datos =  this.$store.state.estadisticas.datos_graficas.grafica_tipodecasos.datos;
    const etiquetas =  this.$store.state.estadisticas.datos_graficas.grafica_tipodecasos.labels;
    const colores  = this.$store.state.estadisticas.datos_graficas.grafica_tipodecasos.colores;
    const datax = {
    datasets: [{
      label: 'Tipos de Casos',
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


},//termina mounted,
/*

	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)',


*/
data() {
  return {
    planetChartData: planetChartData,
    datax : {
    datasets: [{
      label: 'Tipos de Caso',
        data: [10, 5,9,7,9],
        backgroundColor : [
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)","rgb(75, 192, 192)","rgb(153, 102, 255)"],
        borderColor: [
          "#CDA776",
          "#989898",
          "#CDA776",
          "#989898",
          "#CDA776"
        ],
        borderWidth: [1, 1]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Abuso Fisico #10',
        'Abuso Sexual #5',
        'Abuso Emocional #9',
        'Negligencia #7',
        'Violacion a la privacidad #9'
      
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